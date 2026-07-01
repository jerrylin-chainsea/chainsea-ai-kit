# U11 最終驗收

本檔不放進簡報,只給老師/製作者驗收。

## 學生最後做出了什麼？

學生最後手上應該有:

1. 一個能用 `npm run dev` 跑起來的完整首頁作品:`ai-project-foundation-kit/web-lab`
2. 一次自己修改 `src/data.js` 後熱更新的畫面
3. 一次 Claude Code 或 Codex 讀專案紀錄
4. 一次 Plan/Chat 修改計畫
5. 一次 AI 小範圍改檔,並用 `git diff` 驗收
6. 一份資料檢查四欄輸出:`insight / anomalies / risk_level / action_items`
7. 一次 ReAct debug 修錯紀錄,把 `risk_level` 修成 `low / medium / high`
8. 一次 Git commit
9. 一張 Claude Code / Codex 對照表
10. 一份看得懂的 Skill/SOP:`skill/beginner-ai-project-workflow.md`

## 老師每 10 分鐘要帶學生做什麼？

| 時間 | 固定操作 | 固定驗收 | 固定下一步 |
|---|---|---|---|
| 課1 0:00 | 說主線與工具分工 | 學生能說網頁版 AI vs 專案型 AI | 打開 VS Code |
| 課1 0:10 | 開 `web-lab`、找 README/package/src | Explorer 看得到檔案 | 開 Terminal |
| 課1 0:20 | `npm install`、`npm run dev` | localhost 看到首頁 | 改 `data.js` |
| 課1 0:35 | 改一段文字並存檔 | 畫面熱更新 | 做 Git |
| 課1 0:45 | `git init/status/diff/add/commit` | commit 成功 | 補 clone/fetch/pull |
| 課2 0:00 | 複習主線,介紹 slash commands | 知道 `/init`、`/plan`、`/diff` 用途 | 切 Plan/Chat |
| 課2 0:10 | 貼讀專案 prompt | AI 回摘要且未改檔 | 貼報計畫 prompt |
| 課2 0:25 | 看計畫與護欄 | 計畫只改指定文字 | 放行修改 |
| 課2 0:40 | AI 改檔 | 畫面變、`git diff` 只改預期 | commit |
| 課3 0:00 | 看 `sales.csv` 異常 | 指出負數、過大、缺漏 | 貼四欄 prompt |
| 課3 0:15 | 產出固定四欄 | risk 是 low/medium/high | 講信任規則 |
| 課3 0:30 | 跑 `python run.py` 看錯 | 看見 risk_level 不合規 | Plan/Chat 分析 |
| 課3 0:45 | 放行修 `run.py` | 重跑成功、看 diff | commit |
| 課4 0:00 | 練三句拉回 AI | 能處理 Drift/Debt/Regression | 做 Git 收束 |
| 課4 0:15 | 完整跑 Git 四步 | commit 成功 | 裝/示範 Codex |
| 課4 0:30 | Claude Code / Codex 同題對照 | 對照表打勾 | 講 Skills |
| 課4 0:45 | 看 Skill 與 MCP 權限 | 能說 SOP/接工具/權限三問 | 收束整門課 |

## 完成標準

- 四份 U11 簡報都反覆出現主線:從會問 AI,變成會指揮 AI 完成一個專案。
- 每堂都有完成物,不是只介紹功能。
- 每 10 到 15 分鐘至少有一次可操作步驟。
- web-lab 首頁一眼看起來是完整作品,不是 placeholder。
- web-lab 至少包含兩種亮點:動態背景、互動卡片、CSS 動畫、可切換內容區、響應式設計。
- 新手主要改 `data.js`,不用先懂完整 React 架構。
- 教材明確區分網頁版 AI 與 Claude Code / Codex。
- Skills / MCP 不只提名詞,有 SOP 與權限觀念。
