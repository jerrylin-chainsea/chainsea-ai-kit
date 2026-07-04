# U11 最終驗收

本檔不放進簡報,只給老師/製作者驗收。

## 學生最後做出了什麼？(收斂成 4 件繳交物)

1. **一個可互動的營運 Dashboard 推播中心**:`web-lab` 跑起來,兩範本(營運異常/訂單資訊)走通 —— 選範本 → 載入 → 檢查合約 → 視覺預覽 → 人工審核 checkbox → **按鈕推播**(未勾時按鈕暗、按下看到 `[mock]` 或 `sent`)。
2. **一份 Flex payload 預覽**:畫面截圖或 `line-lab/line-flex-payload.json`,包含 `type: "flex"`、`altText`、內容。
3. **一次 ops agent / GitHub Actions 自動化紀錄 + 三個 MCP**:`run_ops_check.py` 產 report、Actions artifact;且 `/mcp` 列出 chrome-devtools / context7 / codebase-memory 三台並各驗收過。
4. **一次完整交付紀錄**:reviewer PASS + `npm run build` 通過 + commit 的截圖(diff 只有預期變更、`git diff -- package.json` 無輸出、`.env` 未 commit)。

過程中學生也應該留下:一次 planner A–F 計畫與 implementer A–E 回報、一次 ReAct 修錯紀錄(`risk_level`「嚴重」→ 擋牌 → 最小修正)、自建的 `/ops-check` 與 `/ship-check` 指令、以及 F12 顯示「瀏覽器只打 `/api/send-line-flex`、沒有 api.line.me」的截圖。

## 老師每 10 分鐘要帶學生做什麼？

| 時間 | 固定操作 | 固定驗收 | 固定下一步 |
|---|---|---|---|
| 課1 0:00 | 一鍵啟動、先看 Dashboard 最終成果 | 學生說得出「這門課最後交出什麼」 | 認識 VS Code 三區 |
| 課1 0:10 | 開 `web-lab`、找 START-HERE/data.js/report.json | Explorer 看得到檔案 | 開 Terminal |
| 課1 0:20 | `npm install`、`npm run dev`(理解一鍵啟動做了什麼) | localhost 看到首頁 | 改 `data.js` |
| 課1 0:35 | 改一段文字並存檔 | 畫面熱更新 | 做 Git |
| 課1 0:45 | `git init/status/diff/add/commit` | commit 成功 | 補 clone/fetch/pull |
| 課2 0:00 | 打開 `report.json` 講資料合約 | 說得出七欄與 risk_level 三值 | 「先痛一次」示範 |
| 課2 0:10 | 貼讀專案 prompt | AI 回摘要且未改檔 | 貼 planner 卡 |
| 課2 0:25 | 看 A–F 計畫、人審四題 | 計畫只改指定檔案 | 放行 implementer |
| 課2 0:40 | AI 改 Dashboard 低庫存推播準備區塊、照 A–E 回報驗收 | 畫面變、`git diff` 只改預期 | build + commit |
| 課3 0:00 | 推播中心 Button 1–3:載入→檢查→視覺預覽(兩範本) | 視覺預覽正常、可切「看 JSON」 | 人工審核 |
| 課3 0:15 | 勾 checkbox → 按「推播 LINE Flex」 | 看到 `[mock]`;F12 只有 `/api/send-line-flex`、無 api.line.me | 講 token 為何留後端 |
| 課3 0:30 | 手改 `risk_level` 成「嚴重」 | 擋牌不點擊自己出現、推播按鈕全關 | 貼 ReAct 卡分析 |
| 課3 0:45 | 人審 Minimal Patch、放行修正 → build/commit | 擋牌消失、diff 一行、bundle 無 token | 收束 C3 |
| 課4 0:20 | 自動化收尾:ops agent + Actions + `/ops-check`/`/ship-check` | artifact 有兩 JSON、指令回固定格式不改檔 | 進 MCP 主線 |
| 課4 1:40 | 裝 chrome-devtools MCP,請 AI 開 localhost:5180 截圖 | `/mcp` 列出、真的拿到 console + 截圖 | 裝 context7 |
| 課4 2:30 | 裝 context7、codebase-memory 並各用一次 | `/mcp` 列出三台、答案有出處/檔案關係 | MCP 權限三問 |
| 課4 3:30 | 講 MCP 權限三問 + slash 型錄 | 說得出三問、分得清內建/自建 | 收束整門課 |

## 完成標準

- 四份 U11 簡報、教案、checklists、prompts、U1–U4 學生包都指向**同一條完成線**:AI coding agent → Dashboard → LINE OA Flex → ops agent → GitHub Actions → reviewer/build/commit。
- 每堂封面出現主線圖與 DoD:「AI 做出來不算完成,通過驗收才算完成:畫面/輸出/diff/build/human review」。
- 每堂都有完成物,不是只介紹功能;每 10 到 15 分鐘至少有一次可操作步驟。
- U3 以 Dashboard「推播中心」按鈕為主線,推播從「複製指令」變成「按一顆按鈕」;終端機指令只當對照。
- 每個範本各一份資料合約(`report.json` 營運異常、`orders.json` 訂單);前端沒有第二份副本、沒有 token,永遠不直接呼叫 api.line.me(由本機後端代打)。
- 真送 LINE 學生也能做(填 `.env` + 重啟 dev);沒有 LINE OA 時看到 `[mock]` 即過關。
- 新手主要改 `data.js`(C1)、Dashboard 小區塊(C2)、按推播中心按鈕(C3),不用先懂完整 React 架構。
- C4 前段快速收:`ops-agent-lab` 產 report、Actions 產 artifact、`/ops-check`/`/ship-check` 固化成工具。
- C4 主線是三個 MCP,學生**動手裝**:chrome-devtools(看畫面)、context7(查文件)、codebase-memory(記專案),再講權限三問。
