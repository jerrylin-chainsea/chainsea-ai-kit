# U4 · 驗收單

## 完成物

- [ ] 說得出三個 AI 走鐘毛病（Drift / Debt / Regression）與各自的一句話拉回
- [ ] 跑過一次 reviewer 卡，拿到 Verdict（PASS 或 BLOCK）
- [ ] BLOCK 時照 Next Step 修完並重跑到 PASS
- [ ] reviewer 的回報有對照 `git diff` 抽查過
- [ ] 交付前四問逐格答「是」：畫面輸出／diff／build／commit 訊息
- [ ] `npm run build` 通過
- [ ] 完成 commit（訊息講得出改了什麼、為什麼）；有遠端的班級完成 push
- [ ] 建立 `.claude/commands/ship-check.md` 並成功打出 `/ship-check`
- [ ] 說得出 Skill 是什麼、MCP 裝之前要先問哪三件事

## DoD 對照

| 驗收面向 | 這堂的標準 |
|---|---|
| 畫面 | Dashboard 全流程仍正常（回歸確認） |
| 輸出 | reviewer 固定格式回報、/ship-check 四點回答 |
| diff | reviewer PASS 且人工抽查一致 |
| build | `✓ built` |
| human review | Verdict 之外，你親自看過 Human Review 欄指定的項目 |

## 最終繳交（整門課三件）

1. 可互動的營運異常 Dashboard（載入 → 檢查 → 預覽 → 審核 → mock 全通）
2. 一份 payload 預覽（畫面截圖或 `line-lab/line-alert-payload.json`）
3. 一次 reviewer + build + commit 的交付紀錄截圖

> AI 做出來不算完成，通過驗收才算完成。
