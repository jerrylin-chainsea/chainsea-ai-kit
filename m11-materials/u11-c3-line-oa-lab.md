# U11-C3 照做講義：營運異常 Dashboard + LINE mock 通知（老師詳版）

> 學生課堂上直接用 starter 的 `U3/STEP-01..03.md`（同一條流程的學生視角）。本檔是老師控場詳版。
> **主線到 mock 為止**；真送 LINE 是老師示範／進階組，前置設定全部在本檔〈附錄〉。

主線：`載入 report.json → 檢查資料合約 → payload 預覽 → 人工審核 → mock → (真送指令) → ReAct 修錯 → build / diff / commit`

## 0. 本堂允許 AI 修改的檔案

```text
✅ web-lab/src/Dashboard.jsx、web-lab/src/styles.css(僅 Dashboard 區塊)、data-lab/report.json(練習用)
⛔ App.jsx / main.jsx / data.js / Beach.jsx、package.json / package-lock.json / vite.config.js、
   line-lab/ 全部、start-m11.bat / start-m11.command
```

> `web-lab/src/reportContract.js` 與 `line-lab/sendLineAlert.js` 是**雙胞胎**（同一套合約檢查、錯誤訊息逐字相同），本堂兩邊都不改。

## 1. 啟動並切到 Dashboard

雙擊 `start-m11.bat`（macOS：`start-m11.command`），或：

```bash
cd ai-project-foundation-kit/web-lab && npm run dev
```

網頁上方點「**營運異常 Dashboard**」。預期看到六張步驟卡，2–5 為灰色（未解鎖是正常設計）。

## 2. Button 1–3：載入 → 檢查 → 預覽

1. **載入範例 report.json**：畫面顯示報表日期、風險等級徽章（high 紅橘）、`NT$128,400`、異常筆數、Top product/channel、action items。
2. **檢查資料合約**：綠色「資料合約通過：必要欄位齊全，risk_level = high」。
3. **生成 payload 預覽**：上半是通知文字、下半是 payload JSON。

**對照 30 秒**：打開 `line-lab/line-alert-payload.json`，通知文字與畫面**逐字相同**。
唯一不同是 `to`：網頁永遠是示範 ID，真送對象由 `line-lab/.env` 決定 —— token 與對象不進前端。

## 3. Button 4–6：人工審核 → mock → 真送指令

1. 先不勾 checkbox → 第 6 步**不顯示**真送指令。
2. 認真讀通知文字（把自己當收通知的主管）→ 勾「我已人工審核通知內容」。
3. **模擬送出(mock)** → 看到 `[mock] LINE_REAL_SEND is not 1, no request sent.`
4. 真送指令出現：`LINE_REAL_SEND=1 node line-lab/sendLineAlert.js --confirm`（僅供複製；真送永遠只在終端機）。
5. **F12 → Network**：全程零請求，沒有 `https://api.line.me`。

## 4. 終端機對照（學生只需這三行）

```bash
node line-lab/sendLineAlert.js
```

預期：`payload written: line-lab\line-alert-payload.json` + `[mock] ...`（與畫面同一句）。

```bash
LINE_REAL_SEND=1 node line-lab/sendLineAlert.js
```

PowerShell：`$env:LINE_REAL_SEND="1"; node line-lab/sendLineAlert.js`

預期：`[blocked] LINE_REAL_SEND=1 but --confirm missing; no request sent.`

> PowerShell 示範完記得 `Remove-Item Env:LINE_REAL_SEND`，否則環境變數會留著。

## 5. 製造指定錯誤（改值，不改語法）

`data-lab/report.json`：`"risk_level": "high"` → `"risk_level": "嚴重"`，存檔。

預期（**不按任何按鈕**）：

- 紅色擋牌出現：`資料合約錯誤: risk_level 必須是 low / medium / high，目前是 "嚴重"`
- payload／mock／真送指令全部消失（合約沒過，下游被擋）
- 跑 `node line-lab/sendLineAlert.js` → 終端機**同一句**錯誤（兩道防線、一份合約）

> 若學生改壞 JSON 語法，會出現 Vite 全螢幕錯誤 —— 改回原樣即恢復；順勢教「看錯誤訊息」。

## 6. 貼 ReAct 卡（先分析，不改檔）→ 放行

用 `U3/PROMPT-CARD.md` 卡 2（Expected/Actual/Reason/Act/Observe/**Minimal Patch**/Verify/Blocker）。

人審重點：Minimal Patch 是「把值改回合約允許值」；想順便改邏輯、加功能 → 不放行。

放行（卡 3）後：擋牌消失、綠色通過回來、`node line-lab/sendLineAlert.js` 恢復 mock 成功。

## 7. build + Git 驗收 + commit

```bash
cd web-lab && npm run build && cd ..
git status
git diff
git diff -- web-lab/package.json
git diff -- package.json
git add .
git commit -m "完成 Dashboard 通知流程與 ReAct 修錯練習"
```

預期：build 通過；兩條 package.json diff **沒有輸出**；`.env` 不在 commit 裡。

## 8. 繳交

```text
1. Dashboard 六步全綠截圖
2. payload 預覽截圖(或 line-alert-payload.json 內容)
3. 擋牌出現的截圖(ReAct 練習證據)
4. ReAct 卡的 AI 回答
5. build 通過 + git log --oneline -1 截圖
```

---

# 附錄：LINE OA 真送（老師示範／進階組）

主線不需要本節。老師課前設定好一組，課堂示範一次即可。

## A1. 確認 LINE OA 已啟用 Messaging API

1. 開 LINE Official Account Manager：https://manager.line.biz/
2. 選你的 LINE OA → 設定 → `Messaging API` → 確認已啟用，且對應到 Developers Console 的 channel。

官方文件：https://developers.line.biz/en/docs/messaging-api/getting-started/

## A2. 取得 channel access token

1. 開 LINE Developers Console：https://developers.line.biz/console/
2. 選 provider → Messaging API channel → `Messaging API` tab → `Channel access token` → `Issue`／`Reissue` → 複製。

**不要把 token 貼到程式碼、前端、投影片、Git。**

## A3. 取得 LINE_TARGET_ID

Developers Console → 該 channel → `Basic settings` → `Your user ID`（長得像 `U8189cf67...`，不是 LINE ID）。

官方文件：https://developers.line.biz/en/docs/messaging-api/getting-user-ids/

## A4. 加 OA 好友

`Messaging API` tab 的 QR code → 手機 LINE 掃描加好友。

## A5. 建立 `.env` 並真送

```bash
cp line-lab/.env.example line-lab/.env
```

填入 token、userId、`LINE_REAL_SEND=0`。確認 `git status` 沒有追蹤 `.env`。

```bash
LINE_REAL_SEND=1 node line-lab/sendLineAlert.js --confirm
```

成功：`LINE API success: 200`，手機收到通知。失敗看 status code：

```text
401：token 錯或過期
400：payload 或 targetId 錯
403：channel 權限或狀態問題
429：額度或頻率限制
```
