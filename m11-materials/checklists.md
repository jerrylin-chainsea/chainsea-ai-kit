# 驗收清單 ｜ M11(U11)AI 專案操作與協作開發基礎課

主線: **從會問 AI,變成會指揮 AI 完成一個專案。**

老師控場用:每 10 到 15 分鐘對一次。學生看到「會看到」就知道自己過關了。

---

## 課 1 · starter 專案 + Git 基礎

- [ ] 用 VSCode 成功打開 `ai-project-foundation-kit/web-lab`,Explorer 出現檔案
- [ ] 找得到 `README.md`、`package.json`、`src/data.js`、Terminal
- [ ] 能說出網頁版 AI vs 專案型 AI 分工
- [ ] `npm install` → `npm run dev`,瀏覽器看到「海風小店」(會動的海灘主視覺)
- [ ] 首頁看起來像完整作品:three.js 海灘主視覺、商品卡、切換區、響應式
- [ ] 改 `src/data.js` 後畫面熱更新
- [ ] 完成 `git init`、`.gitignore`、`git status`、`git diff`、`git add .`、`git commit`
- [ ] 能說出 `git clone`、`git fetch origin`、`git pull` 的用途

## 課 2 · slash commands + 安全改檔

- [ ] 看懂 Claude Code / Codex 常用 slash commands:`/init`、`/plan`、`/model`、`/permissions`、`/diff`、`/status`、`/clear`、`/compact`
- [ ] 用讀專案 prompt 讓 AI 讀專案,拿到摘要,且沒有改任何檔
- [ ] 用 Plan/Chat 拿到修改計畫,能判斷它會不會改太多
- [ ] 放行後 AI 完成一個小範圍文字修改
- [ ] `git status` 確認只動到預期檔案
- [ ] `git diff` 確認沒有亂改、沒有新增套件

## 課 3 · 資料檢查、固定輸出、Debug

- [ ] 能指出 `sales.csv` 的 3 種異常:負數、過大、缺漏
- [ ] 用四欄 prompt 拿到 `insight / anomalies / risk_level / action_items`
- [ ] 看得懂四欄各是什麼;`risk_level` 只會是 `low / medium / high`
- [ ] 能說出三條信任規則:不齊先停、沒依據不採用、高風險找人
- [ ] 重現 `run.py` 的錯(risk_level 印「嚴重」)
- [ ] 用 ReAct(先分析 → 同意修正)把它修成 `low / medium / high`
- [ ] 修完後跑 `python run.py` 和 `git diff` 驗收

## 課 4 · Git、Skills、MCP

- [ ] 能用一句話拉回 Context Drift / 整理 Prompt Debt / 列 Regression 檢查
- [ ] 完整做一次 `git status → git diff → git add . → git commit`,出現一筆提交紀錄
- [ ] 同一任務在 Claude Code 與 Codex 各跑一次,填完對照表
- [ ] 看得懂 `beginner-ai-project-workflow.md` 這份 Skill
- [ ] 能用白話說明:Skills 是固定 SOP,MCP 是外部工具連線
- [ ] 能說出 MCP 權限三問:能讀什麼、能不能寫、會不會碰正式資料
- [ ] 知道免費示範優先用 Chrome DevTools MCP / Context7 MCP / GitHub 或 reference servers;Figma 需要帳號,不列必做

---

## 通用驗收

### 網頁驗收
- [ ] `npm run dev` 沒有報錯
- [ ] localhost 打得開、畫面正常
- [ ] 改過的地方有出現在畫面上
- [ ] 手機寬度下內容不擠、不重疊

### 資料輸出驗收
- [ ] 輸出有四欄:`insight / anomalies / risk_level / action_items`
- [ ] 異常(負數、過大、缺漏)有被列進 `anomalies`
- [ ] `risk_level` 是 `low / medium / high`
- [ ] 沒有資料依據的建議有被標示,沒有硬給結論

### AI 修改驗收
- [ ] 改動範圍 = 當初講好的範圍
- [ ] AI 有回報:改了哪個檔、改了什麼、怎麼驗收
- [ ] `git diff` 看過,沒有不相關改動

---

## 整門課 · 學生最後手上會有

- [ ] 1. 一個跑得起來、看起來完整的 web-lab 首頁
- [ ] 2. 一次 `data.js` 小範圍修改
- [ ] 3. 一次 AI 讀專案紀錄
- [ ] 4. 一次 Plan/Chat 修改計畫
- [ ] 5. 一次 AI 小範圍改檔
- [ ] 6. 一份四欄資料檢查輸出
- [ ] 7. 一次 Debug / ReAct 修錯紀錄
- [ ] 8. 一次 Git commit
- [ ] 9. 一份 Claude Code / Codex 對照表
- [ ] 10. 一份看得懂的 beginner-ai-project-workflow Skill
