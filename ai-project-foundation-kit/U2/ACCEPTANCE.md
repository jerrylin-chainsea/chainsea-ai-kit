# U2 · 驗收單

## 完成物

- [ ] 說得出 `data-lab/report.json` 的七個欄位，與 `risk_level` 的三個允許值
- [ ] 說得出「資料合約」和「自由作文」差在哪
- [ ] 在 Dashboard 按過「載入範例 report.json」，確認畫面讀的就是同一份檔
- [ ] 用 planner 卡拿到過一份 A–F 格式的計畫，期間 `git status` 乾淨
- [ ] 人審四題問過一輪，才放行 implementer
- [ ] implementer 的修改只落在允許檔案（本堂：`web-lab/src/data.js`）
- [ ] 第二輪需求變更，仍走同一套 planner → 人審 → implementer 流程
- [ ] `git diff` 只有預期變更，完成 commit

## DoD 對照

| 驗收面向 | 這堂的標準 |
|---|---|
| 畫面 | 標語變成指定文字 |
| 輸出 | planner 回 A–F、implementer 回 A–E 固定格式 |
| diff | 只動 `data.js` 標語那行 |
| build | —（U3 之後才驗 build） |
| human review | 四題防呆你親自問過、計畫你親自核准 |

> AI 做出來不算完成，通過驗收才算完成。
