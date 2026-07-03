# 驗收清單 ｜ M11/U11

老師控場用。學生看到「會看到」就知道自己過關。學生自查版在 starter 的 `U1/`–`U4/ACCEPTANCE.md`。

## C1 · 進得了專案

- [ ] 一鍵啟動成功(`start-m11.bat` / `start-m11.command`),瀏覽器看到海風小店
- [ ] 看過「營運異常 Dashboard」,說得出整門課的完成物
- [ ] 指得出 VS Code 的 Explorer / Editor / Terminal
- [ ] 知道 `web-lab/src/data.js` 管首頁文字、`data-lab/report.json` 是之後的資料來源
- [ ] 改店名後畫面熱更新
- [ ] `git diff` 只有 `data.js` 一行,完成第一次 commit

## C2 · 資料合約與 AI 工作流

- [ ] 說得出 `report.json` 七個欄位;`risk_level` 只能是 `low / medium / high`
- [ ] 說得出資料合約 vs 自由作文的差別
- [ ] 在 Dashboard 按過「載入範例」,確認畫面讀的就是同一份 report.json
- [ ] 看過「沒有護欄的 AI 亂改」示範,說得出 AGENTS.md / CLAUDE.md 的用途
- [ ] planner 卡拿到 A–F 格式計畫,期間 `git status` 乾淨
- [ ] 人審四題(檔案/套件/package.json/重構)問過才放行
- [ ] implementer 只改允許檔案,回報 A–E 格式
- [ ] 第二輪變更仍走同一流程;diff 乾淨、commit 完成

## C3 · 營運異常 Dashboard + LINE mock 通知(主線)

主線七步:`載入 → 檢查合約 → payload 預覽 → 人工審核 → mock → (真送指令) → ReAct 修錯 → build/diff/commit`

- [ ] 能說出 C3 主線(上面那行)
- [ ] Button 1 載入:畫面數字與 `data-lab/report.json` 一致,且知道「畫面不另存副本」
- [ ] Button 2 檢查:綠色「資料合約通過」
- [ ] Button 3 預覽:通知文字與 `line-lab/line-alert-payload.json` 的 text 逐字相同
- [ ] 知道網頁上的 `to` 永遠是示範 ID;token 與真送對象只在 `line-lab/.env`
- [ ] 未勾人工審核 checkbox 時,不顯示 `--confirm` 真送指令
- [ ] 勾選後真送指令出現、可複製
- [ ] mock 送出顯示 `[mock] LINE_REAL_SEND is not 1, no request sent.`
- [ ] DevTools Network 全程零請求,沒有呼叫 `https://api.line.me`
- [ ] token 沒有進前端
- [ ] 終端機對照:`node line-lab/sendLineAlert.js` 產生 payload 且 mock;`LINE_REAL_SEND=1` 無 `--confirm` 顯示 `[blocked]`
- [ ] 手改 `risk_level` 成「嚴重」後,擋牌**不點擊自己出現**,錯誤訊息為
      `資料合約錯誤: risk_level 必須是 low / medium / high，目前是 "嚴重"`
- [ ] 擋牌出現時 payload/mock/真送指令全部消失
- [ ] 同一壞檔跑腳本,終端機出現**同一句**錯誤(兩道防線、一份合約)
- [ ] ReAct 卡先分析不改檔;Minimal Patch 只修合約違反
- [ ] 修好後畫面恢復;diff 只有 `report.json` 一行
- [ ] `npm run build` 通過
- [ ] `git diff -- web-lab/package.json` 與 `git diff -- package.json` 沒有輸出
- [ ] `.env` 不在 commit 裡;完成 commit

## C3 老師示範／進階組(不是過關條件)

- [ ] 老師示範真送:`LINE_REAL_SEND=1 node line-lab/sendLineAlert.js --confirm`,手機收到通知
- [ ] (進階)知道真送前置:LINE Business ID → OA → Messaging API → token → targetId
- [ ] (進階)API 失敗時看 status code 與 response body

## C3 保底

- [ ] 沒有 LINE OA:mock 完成即過關
- [ ] 畫面跑不動:用終端機 `node line-lab/sendLineAlert.js` + 看 payload 完成同段驗收
- [ ] JSON 改壞語法出現 Vite 全螢幕錯誤:改回原樣即恢復
- [ ] 現場網路不穩:payload 產生與 mock 驗收即完成

## C3 加做 · Flex Message

- [ ] `node line-lab/sendLineAlert.js --flex` 會產生 `line-lab/line-flex-payload.json`
- [ ] Flex message 有 `type: "flex"`、`altText`、`contents.type: "bubble"`
- [ ] `--flex` 模式仍遵守 mock / `LINE_REAL_SEND=1` / `--confirm`
- [ ] `git diff -- package.json` 沒有輸出

## C3 加做 · 請 AI 擴充 Dashboard

- [ ] 只修改 `web-lab/src/Dashboard.jsx`(允許檔案清單見 `U3/STEP-01`)
- [ ] 沒有動 `reportContract.js` / `sendLineAlert.js`(雙胞胎)
- [ ] 沒有把資料手寫進前端常數
- [ ] build 通過、diff 乾淨

## C4 · 交付與 SOP

- [ ] 說得出三個走鐘毛病(Drift/Debt/Regression)與一句話拉回
- [ ] reviewer 卡回報固定格式,第一行是 Verdict
- [ ] BLOCK 時照 Next Step 修完重跑到 PASS
- [ ] reviewer 回報有對照 `git diff` 抽查
- [ ] 交付前四問逐格答「是」
- [ ] `npm run build` 通過;commit 訊息講得出改了什麼、為什麼;有遠端則 push
- [ ] 建立 `.claude/commands/ship-check.md`,`/ship-check` 回四點且不改檔
- [ ] 說得出 MCP 權限三問(能讀什麼/能不能寫/會不會碰正式資料)

## 通用驗收

- [ ] AI 修改前有明確限制(允許檔案清單)
- [ ] AI 修改後有固定格式回報
- [ ] 人類看過 `git diff`
- [ ] 沒有 commit `.env`
- [ ] 沒有把 token 貼進程式碼或前端
- [ ] 每堂結束能回答 DoD 五面向:畫面/輸出/diff/build/human review
