#!/usr/bin/env node
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const REPORT_PATH = path.join(ROOT, "data-lab", "report.json");
const PAYLOAD_PATH = path.join(__dirname, "line-alert-payload.json");
const ENV_PATH = path.join(__dirname, ".env");
const LINE_PUSH_URL = "https://api.line.me/v2/bot/message/push";
const ALLOWED_RISK_LEVELS = new Set(["low", "medium", "high"]);
const MOCK_TARGET_ID = "Uxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

function loadLocalEnv() {
  if (!fs.existsSync(ENV_PATH)) return;

  const lines = fs.readFileSync(ENV_PATH, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;

    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
    if (key && process.env[key] === undefined) process.env[key] = value;
  }
}

function readReport() {
  return JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
}

function assertReportContract(report) {
  const missing = [
    "risk_level",
    "total_revenue",
    "anomaly_count",
    "top_product",
    "top_channel",
    "action_items",
  ].filter((key) => report[key] === undefined);

  if (missing.length > 0) {
    throw new Error(`資料合約錯誤: report.json 缺少 ${missing.join(", ")}`);
  }

  if (!ALLOWED_RISK_LEVELS.has(report.risk_level)) {
    throw new Error(
      `資料合約錯誤: risk_level 必須是 low / medium / high，目前是 ${JSON.stringify(report.risk_level)}`
    );
  }

  if (!Array.isArray(report.action_items)) {
    throw new Error("資料合約錯誤: action_items 必須是陣列");
  }
}

function formatMoney(value) {
  return `NT$${new Intl.NumberFormat("zh-TW").format(value)}`;
}

function buildAlertText(report) {
  const actions = report.action_items.map((item, index) => `${index + 1}. ${item}`).join("\n");

  return [
    "[營運異常通知]",
    `風險等級: ${report.risk_level}`,
    `總營收: ${formatMoney(report.total_revenue)}`,
    `異常筆數: ${report.anomaly_count}`,
    `Top product: ${report.top_product}`,
    `Top channel: ${report.top_channel}`,
    "Action items:",
    actions,
    "",
    "Human review required before --confirm.",
  ].join("\n");
}

function buildPayload(report) {
  return {
    to: process.env.LINE_TARGET_ID || MOCK_TARGET_ID,
    messages: [
      {
        type: "text",
        text: buildAlertText(report),
      },
    ],
  };
}

function writePayload(payload) {
  fs.writeFileSync(PAYLOAD_PATH, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  console.log(`payload written: ${path.relative(ROOT, PAYLOAD_PATH)}`);
}

async function sendToLine(payload) {
  const response = await fetch(LINE_PUSH_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify(payload),
  });

  const body = await response.text();
  if (!response.ok) {
    console.error(`LINE API failed: ${response.status} ${response.statusText}`);
    console.error(body || "(empty response body)");
    process.exitCode = 1;
    return;
  }

  console.log(`LINE API success: ${response.status}`);
  if (body) console.log(body);
}

async function main() {
  loadLocalEnv();

  const report = readReport();
  assertReportContract(report);

  const payload = buildPayload(report);
  writePayload(payload);

  const realSend = process.env.LINE_REAL_SEND === "1";
  const confirmed = process.argv.includes("--confirm");

  if (!realSend) {
    console.log("[mock] LINE_REAL_SEND is not 1, no request sent.");
    return;
  }

  if (!confirmed) {
    console.log("[blocked] LINE_REAL_SEND=1 but --confirm missing; no request sent.");
    return;
  }

  if (!process.env.LINE_CHANNEL_ACCESS_TOKEN || !process.env.LINE_TARGET_ID) {
    console.error("LINE real send requires LINE_CHANNEL_ACCESS_TOKEN and LINE_TARGET_ID.");
    process.exitCode = 1;
    return;
  }

  await sendToLine(payload);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
