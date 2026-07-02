# ai-project-foundation-kit

這是 M11/U11「AI 專案操作與協作開發基礎課」的練習專案。全班操作同一份教材，重點不是自由發想，而是照固定劇本讓 AI coding agent 完成可驗收交付。

主線：打開專案 → 跑起來 → 請 AI 先讀、先計畫、不要亂改 → 小範圍實作 → mock 驗收 → 修錯 → git diff 收尾。

## 資料夾

```text
ai-project-foundation-kit/
  web-lab/          # C1/C2 使用的海風小店前端
  data-lab/         # C3 使用的 report.json 營運資料合約
  line-lab/         # C3 LINE OA 營運異常通知腳本
  prompts/          # 固定 prompt 卡
  .claude/          # Claude Code commands / skills 範例
  .mcp.json         # MCP 設定範例
```

## C3：LINE OA 營運異常通知系統

C3 不再是 Dashboard / 資料驗收 / 查錯課。C3 是一堂固定步驟的 AI 企業程式開發實作課：

```text
data-lab/report.json
→ Codex 產生 LINE push message payload
→ 人類審核通知內容
→ mock 模式驗收
→ LINE OA 真實發送示範
→ ReAct 修指定錯誤
→ git diff / build / commit / push
```

完整照做講義在：

```text
../m11-materials/u11-c3-line-oa-lab.md
```

加做講義：

```text
../m11-materials/u11-c3-flex-message-lab.md
../m11-materials/u11-c3-dashboard-manual-notify-lab.md
```

LINE OA 真送前置：

1. 登入 LINE Developers Console，未登入會進 LINE Business ID。
2. 先建立 LINE Official Account。
3. 在 LINE Official Account Manager 啟用 Messaging API。
4. 回 Developers Console 的 Messaging API channel 取得 channel access token。
5. 從 Basic settings 的 `Your user ID` 或 webhook event 取得 target userId。
6. 填入 `line-lab/.env`，人工審核後才用 `--confirm` 真送。

### 固定檔案

| 檔案 | 用途 |
|---|---|
| `data-lab/report.json` | 營運資料合約，固定欄位給程式讀 |
| `line-lab/sendLineAlert.js` | 讀 report、產生 payload、mock 或真送 LINE |
| `line-lab/.env.example` | token / targetId / real-send 範本，不是真 token |
| `line-lab/line-alert-payload.json` | 腳本產出的 LINE push message payload |

### C3 驗收指令

```bash
cd ai-project-foundation-kit
node line-lab/sendLineAlert.js
cat line-lab/line-alert-payload.json
LINE_REAL_SEND=1 node line-lab/sendLineAlert.js
LINE_REAL_SEND=1 node line-lab/sendLineAlert.js --confirm
git status
git diff
git diff -- package.json
git add .
git commit -m "新增 LINE OA 營運異常通知流程"
```

PowerShell 可用：

```powershell
$env:LINE_REAL_SEND="1"; node line-lab/sendLineAlert.js
$env:LINE_REAL_SEND="1"; node line-lab/sendLineAlert.js --confirm
```

### 安全規則

- 預設 mock 模式，不真的發送 LINE。
- 只有 `LINE_REAL_SEND=1` 且加上 `--confirm` 才允許呼叫 LINE API。
- 真送需要 `LINE_CHANNEL_ACCESS_TOKEN` 與 `LINE_TARGET_ID`。
- token 不可寫死在程式碼，不可放前端，不可 commit `.env`。
- 不新增 npm 套件，不修改 `package.json`。
- API 失敗時要看 status code 與 response body。

## web-lab

```bash
cd web-lab
npm install
npm run dev
npm run build
```

`web-lab` 是 C1/C2 的前端練習素材。C3 不改前端。

## data-lab

`data-lab/report.json` 是 C3 固定輸入，不需要學生自由設計欄位。

`risk_level` 只能是：

```text
low
medium
high
```

如果變成 `嚴重` 這類中文值，C3 指定用 ReAct 分析，最後只做最小修正：在送出前阻擋並提示資料合約錯誤。

## line-lab

```bash
node line-lab/sendLineAlert.js
```

腳本會：

1. 讀取 `data-lab/report.json`
2. 驗證資料合約
3. 產生 LINE push message payload
4. 寫入 `line-lab/line-alert-payload.json`
5. 預設 mock，不發送 LINE
6. 真送時呼叫 `https://api.line.me/v2/bot/message/push`

## 需要的工具

- Node.js 18+：跑 web-lab 與 line-lab
- Python 3：保留給 data-lab 舊練習使用
- Codex 或 Claude Code：讀專案、改檔、跑指令、看 diff、debug
