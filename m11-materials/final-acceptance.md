# U11 最終驗收

本檔不放進簡報,只給老師/製作者驗收。

## 學生最後做出了什麼？(收斂成 4 件繳交物)

1. **一個可互動的營運 Dashboard**:`web-lab` 跑起來,六步卡走通 —— 載入 report.json → 檢查資料合約 → Flex payload 預覽 → 人工審核 checkbox → mock 送出 → 真送指令(勾選後才出現)。
2. **一份 Flex payload 預覽**:畫面截圖或 `line-lab/line-flex-payload.json`,包含 `type: "flex"`、`altText`、action items。
3. **一次 ops agent / GitHub Actions 自動化紀錄**:`ops-agent-lab/run_ops_check.py` 產出 report,Actions artifact 產出 `report.json` 與 `line-flex-payload.json`。
4. **一次完整交付紀錄**:reviewer PASS + `npm run build` 通過 + commit 的截圖(diff 只有預期變更、`git diff -- package.json` 無輸出)。

過程中學生也應該留下:一次 planner A–F 計畫與 implementer A–E 回報、一次 ReAct 修錯紀錄(`risk_level`「嚴重」→ 擋牌 → 最小修正)、一個自建的 `/ops-check` 與 `/ship-check` 指令。

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
| 課3 0:00 | Dashboard Button 1–3:載入→檢查→Flex 預覽 | Flex payload 與 line-flex-payload.json 同結構 | 人工審核 |
| 課3 0:15 | 勾 checkbox → mock 送出 → 真送指令出現 | 看到 `[mock]`、Network 零請求 | 終端機對照 `[blocked]` |
| 課3 0:30 | 手改 `risk_level` 成「嚴重」 | 擋牌不點擊自己出現、下游消失 | 貼 ReAct 卡分析 |
| 課3 0:45 | 人審 Minimal Patch、放行修正 | 擋牌消失、diff 只有一行 | build + commit |
| 課4 0:00 | 跑 `ops-agent-lab/run_ops_check.py` | 看懂三個角色與 report.json 合約 | 產 Flex payload |
| 課4 0:15 | 看 GitHub Actions workflow | 知道只產 artifact、不真送 LINE | 跑 reviewer |
| 課4 0:30 | reviewer → build → commit → push | build 通過、commit 訊息清楚 | 建 `/ops-check` |
| 課4 0:45 | 建 `/ops-check`、`/ship-check` 並執行 | 兩個指令都回固定格式且不改檔 | 收束整門課 |

## 完成標準

- 四份 U11 簡報、教案、checklists、prompts、U1–U4 學生包都指向**同一條完成線**:AI coding agent → Dashboard → LINE OA Flex → ops agent → GitHub Actions → reviewer/build/commit。
- 每堂封面出現主線圖與 DoD:「AI 做出來不算完成,通過驗收才算完成:畫面/輸出/diff/build/human review」。
- 每堂都有完成物,不是只介紹功能;每 10 到 15 分鐘至少有一次可操作步驟。
- U3 以網頁按鈕為主,終端機指令壓到三類:啟動、Flex mock/build、commit(加上三行對照指令)。
- 資料只有一個來源 `data-lab/report.json`;前端沒有第二份資料、沒有 token、不呼叫 api.line.me。
- 真送 LINE 只是老師示範/進階組;Flex mock 與 artifact 完成即過關。
- 新手主要改 `data.js`(C1)、Dashboard 小區塊(C2)、按 Dashboard 按鈕(C3),不用先懂完整 React 架構。
- C4 不只提 CrewAI/GitHub Actions 名詞:用 `ops-agent-lab` 跑出 report,用 Actions 產 artifact。
- Skills / MCP 不只提名詞:Skill 動手建 `/ops-check`、`/ship-check`,MCP 講權限三問 + 老師示範。
