# U11-C3 加做講義：Dashboard 設置手動通知

目標：在 `web-lab` 加一個「營運通知人工審核面板」。Dashboard 只負責審核與複製指令，不在前端送 LINE，不放 token。

## 1. 回到專案

```bash
cd ai-project-foundation-kit
```

確認 LINE 腳本正常：

```bash
node line-lab/sendLineAlert.js
```

預期：

```text
payload written: line-lab\line-alert-payload.json
[mock] LINE_REAL_SEND is not 1, no request sent.
```

## 2. 貼 Prompt 1：新增人工通知 Dashboard

把下面整段貼給 Codex：

```text
請在 web-lab 新增「營運通知人工審核面板」。

需求：
1. 只修改 web-lab/src/App.jsx、web-lab/src/styles.css。
2. 不新增套件。
3. 不改 package.json。
4. 不改 line-lab/sendLineAlert.js。
5. 不重構整個前端。
6. 不把 token 放進前端。

畫面要包含：
1. risk_level
2. total_revenue
3. anomaly_count
4. top_product
5. top_channel
6. action_items
7. LINE payload preview
8. 「我已人工審核通知內容」checkbox
9. checkbox 未勾選時，不顯示 --confirm 真送指令
10. checkbox 勾選後，顯示真送指令：
    LINE_REAL_SEND=1 node line-lab/sendLineAlert.js --confirm

資料可先用 data-lab/report.json 的固定內容手動寫在 App.jsx 常數中。
完成後請回報實際修改的檔案。
```

預期 Codex 回報：

```text
修改：
- web-lab/src/App.jsx
- web-lab/src/styles.css
```

## 3. 啟動 Dashboard

```bash
cd web-lab
npm run dev
```

打開終端機顯示的 localhost。

預期畫面：

```text
營運通知人工審核面板
risk_level: high
total_revenue: NT$128,400
anomaly_count: 5
top_product: 耳掛咖啡
top_channel: LINE
action_items 清單
LINE payload preview
人工審核 checkbox
```

## 4. 驗收 checkbox 行為

先不要勾 checkbox。

預期：

```text
只能看到 mock 指令：
node line-lab/sendLineAlert.js

看不到 --confirm 真送指令。
```

勾選 checkbox。

預期：

```text
出現真送指令：
LINE_REAL_SEND=1 node line-lab/sendLineAlert.js --confirm
```

## 5. Console 驗收

打開瀏覽器 DevTools Console。

預期：

```text
沒有紅色錯誤
沒有 token
沒有 LINE_CHANNEL_ACCESS_TOKEN
```

## 6. Network 驗收

打開 DevTools Network。

重新整理頁面。

預期：

```text
沒有呼叫 https://api.line.me
沒有 POST /v2/bot/message/push
```

重點：Dashboard 不送 LINE，真送只在終端機做。

## 7. mock 指令驗收

回到 `ai-project-foundation-kit`：

```bash
cd ..
node line-lab/sendLineAlert.js
```

預期：

```text
payload written: line-lab\line-alert-payload.json
[mock] LINE_REAL_SEND is not 1, no request sent.
```

## 8. 人工審核後真送

確認 Dashboard checkbox 已勾選，再回終端機執行。

Bash / macOS / Git Bash：

```bash
LINE_REAL_SEND=1 node line-lab/sendLineAlert.js --confirm
```

PowerShell：

```powershell
$env:LINE_REAL_SEND="1"; node line-lab/sendLineAlert.js --confirm
```

成功預期：

```text
LINE API success: 200
```

## 9. 貼 Prompt 2：請 Codex 做檢查，不改檔

把下面整段貼給 Codex：

```text
請檢查目前 Dashboard 手動通知流程。
不要改檔。
請確認：
1. token 是否沒有進前端
2. package.json 是否沒有修改
3. Dashboard 是否只是人工審核與複製指令
4. 真送是否仍只能由終端機 --confirm 執行
5. 還需要人工確認什麼
```

## 10. Build 驗收

```bash
cd web-lab
npm run build
```

預期：

```text
built
```

## 11. Git 驗收

回到 `ai-project-foundation-kit`：

```bash
cd ..
git status
git diff
git diff -- web-lab/package.json
git diff -- package.json
```

預期：

```text
web-lab/package.json 沒有 diff
package.json 沒有 diff
.env 不在 commit 裡
```

## 12. Commit

```bash
git add .
git commit -m "新增 Dashboard 手動通知審核面板"
git push
```

