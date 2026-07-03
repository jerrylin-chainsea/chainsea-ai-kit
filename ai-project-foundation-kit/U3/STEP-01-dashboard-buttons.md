# U3 · STEP 01 ｜ 用按鈕走完資料 → 畫面 → payload

> **這堂完成物**：在 Dashboard 上完成「載入 → 檢查 → 預覽 → 人工審核 → mock 送出」，理解 mock 與真送的差別。
> **你現在在流水線**：`專案跑起來 → 檢查資料 → 資料合約 → 【AI 串接 → Dashboard 呈現】→ 修錯 → 驗收 → 交付`
>
> **今天先求 mock 成功，不求真送成功。** 看到 `[mock]` 就是對，不是手機收到 LINE 才是對。
> 真送 LINE 是老師示範／進階組加做（見 STEP-02 結尾）。

## 0. 本堂允許 AI 修改的檔案（貼給 AI 前先看一眼）

```
✅ 可以修改
  web-lab/src/Dashboard.jsx        （本堂主戰場）
  web-lab/src/styles.css           （只准在「營運異常 Dashboard」區塊內追加）
  data-lab/report.json             （弄壞／修好練習專用）

⛔ 不可修改
  web-lab/src/App.jsx、main.jsx、data.js、Beach.jsx（U1/U2 的範圍）
  web-lab/package.json、package-lock.json、vite.config.js
  line-lab/ 全部、start-m11.bat / start-m11.command
```

> 小知識：`web-lab/src/reportContract.js` 和 `line-lab/sendLineAlert.js` 是**雙胞胎**——
> 同一套資料合約檢查，一份給網頁用、一份給終端機用，錯誤訊息逐字相同。改一邊就要同步另一邊，所以今天兩邊都不改。

## 1. 啟動並切到 Dashboard

雙擊 `start-m11.bat`（macOS：`start-m11.command`）→ 網頁上方點「**營運異常 Dashboard**」。

## 2. Button 1：載入範例 report.json

按下「載入範例 report.json」。

**你應該看到**：報表日期、風險等級徽章（high 是紅橘色）、總營收 `NT$128,400`、異常筆數、Top product / channel、三條 action items。
下方註明「資料來源：data-lab/report.json（唯一資料來源，畫面不另存副本）」——這就是 U2 學的資料合約，活生生出現在畫面上。

## 3. Button 2：檢查資料合約

按下「檢查資料合約」。

**你應該看到**：綠色的「資料合約通過：必要欄位齊全，risk_level = high」。
（紅色擋牌長什麼樣？STEP-03 你會親手把它弄出來。）

## 4. Button 3：生成 LINE payload 預覽

按下「生成 payload 預覽」。

**你應該看到**：
- 上半：人看的通知文字（`[營運異常通知]` 開頭，風險等級、總營收、action items）
- 下半：機器看的 payload JSON（`to` + `messages`）

**對照一下（30 秒）**：打開 `line-lab/line-alert-payload.json`，通知文字和畫面上**逐字相同**。
唯一不同是 `to`：網頁上永遠是示範 ID —— 真送對象由 `line-lab/.env` 決定，**token 與對象都不會進前端**。

→ 下一步：`STEP-02-hitl-review.md`，人工審核與 mock 送出。
