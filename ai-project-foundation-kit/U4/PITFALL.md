# U4 · 卡住了？先看這裡

| 狀況 | 解法 |
|---|---|
| reviewer 每次都回 PASS，感覺沒在檢查 | 給它更多依據：把「目前需求」「允許檔案清單」貼進 prompt；再不行就自己看 `git diff` —— reviewer 是輔助，不是背書 |
| reviewer 回 BLOCK 但看不懂原因 | 只看兩欄：Scope Check（越界了嗎）和 Next Step（先修什麼）。照 Next Step 做完重跑 |
| `npm run build` 紅字 | 把錯誤訊息整段貼給 AI 用 ReAct 卡分析（U3 卡 2），先分析再放行修 |
| `/ship-check` 打了沒反應 | 確認檔案路徑是 `.claude/commands/ship-check.md`、重開 Claude Code 面板；保底：直接貼卡 2 全文 |
| `git push` 被拒絕 | 先 `git pull` 再 push；沒有遠端就跳過 push，commit 即算交付 |
| commit 訊息想不出來 | 公式：動詞 + 對象 + 為什麼。或打 `/commit-msg` 讓 AI 擬，看得懂再用 |
| MCP 裝不起來 | 本堂 MCP 只是概念頁 + 老師示範，裝不起來不影響結業 |
| AI 又開始越改越偏 | 三句拉回的第一句：「請回到原本任務，這次只處理 X，其他不要改。」 |

> 原則：**最後一堂只做交付。任何新玩具（MCP、其他工具）都排在交付完成之後。**
