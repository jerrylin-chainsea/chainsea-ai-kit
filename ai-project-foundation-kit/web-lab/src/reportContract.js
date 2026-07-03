// 資料合約(瀏覽器版)。
// 此檔的檢查規則與訊息文字,必須和 line-lab/sendLineAlert.js 的
// assertReportContract / buildAlertText / buildPayload 完全一致。
// 兩檔是雙胞胎:改其中一邊,請同步改另一邊。
// 這裡沒有任何 LINE token,也永遠不會呼叫 api.line.me。

export const REQUIRED_KEYS = [
  'risk_level',
  'total_revenue',
  'anomaly_count',
  'top_product',
  'top_channel',
  'action_items',
];

export const ALLOWED_RISK_LEVELS = ['low', 'medium', 'high'];

// 與 sendLineAlert.js 相同的示範收件人;瀏覽器版永遠不讀環境變數。
export const MOCK_TARGET_ID = 'Uxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

// 真送指令只給人複製到終端機用,網頁本身不會執行它。
export const REAL_SEND_COMMAND =
  'LINE_REAL_SEND=1 node line-lab/sendLineAlert.js --confirm';
export const REAL_SEND_COMMAND_POWERSHELL =
  '$env:LINE_REAL_SEND="1"; node line-lab/sendLineAlert.js --confirm';

// 檢查 report.json 是否符合合約。
// 和 sendLineAlert.js 不同的一點:node 版遇錯直接 throw,
// 這裡改成回傳 { ok, errors },讓畫面能把所有問題一次列出來。
// 錯誤訊息文字與 node 版逐字相同。
export function validateReport(report) {
  const errors = [];

  const missing = REQUIRED_KEYS.filter((key) => report[key] === undefined);
  if (missing.length > 0) {
    errors.push(`資料合約錯誤: report.json 缺少 ${missing.join(', ')}`);
  }

  if (report.risk_level !== undefined && !ALLOWED_RISK_LEVELS.includes(report.risk_level)) {
    errors.push(
      `資料合約錯誤: risk_level 必須是 low / medium / high，目前是 ${JSON.stringify(report.risk_level)}`
    );
  }

  if (report.action_items !== undefined && !Array.isArray(report.action_items)) {
    errors.push('資料合約錯誤: action_items 必須是陣列');
  }

  return errors.length > 0 ? { ok: false, errors } : { ok: true, report };
}

export function formatMoney(value) {
  return `NT$${new Intl.NumberFormat('zh-TW').format(value)}`;
}

export function buildAlertText(report) {
  const actions = report.action_items.map((item, index) => `${index + 1}. ${item}`).join('\n');

  return [
    '[營運異常通知]',
    `風險等級: ${report.risk_level}`,
    `總營收: ${formatMoney(report.total_revenue)}`,
    `異常筆數: ${report.anomaly_count}`,
    `Top product: ${report.top_product}`,
    `Top channel: ${report.top_channel}`,
    'Action items:',
    actions,
    '',
    'Human review required before --confirm.',
  ].join('\n');
}

export function buildPayload(report) {
  return {
    to: MOCK_TARGET_ID,
    messages: [
      {
        type: 'text',
        text: buildAlertText(report),
      },
    ],
  };
}
