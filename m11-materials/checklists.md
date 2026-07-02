# 驗收清單 ｜ M11/U11

老師控場用。學生看到「會看到」就知道自己過關。

## C3 · LINE OA 營運異常通知系統

- [ ] 能說出 C3 主線：`report.json → payload → 人工審核 → mock → --confirm → ReAct → git diff`
- [ ] 知道真送 LINE 前要先有 LINE Business ID 與 LINE Official Account
- [ ] 知道 Messaging API channel 要從 OA Manager 啟用後產生
- [ ] 知道 token 從 Developers Console 的 Messaging API channel 取得
- [ ] 知道 targetId 不是 LINE ID，而是 userId / groupId / roomId
- [ ] 找得到 `data-lab/report.json`
- [ ] 看得懂 `report.json` 是程式可讀資料合約，不是自由作文
- [ ] 知道 `risk_level` 只能是 `low / medium / high`
- [ ] 用固定 Prompt 1 讓 Codex 建立 LINE OA 通知腳本
- [ ] 腳本只新增或修改本堂允許檔案
- [ ] 沒有新增 npm 套件
- [ ] `package.json` 沒有被修改
- [ ] `line-lab/.env.example` 存在
- [ ] 知道 `.env` 不可 commit，token 不可寫死、不放前端
- [ ] 跑 `node line-lab/sendLineAlert.js` 會產生 `line-lab/line-alert-payload.json`
- [ ] mock 模式不會真的發送 LINE
- [ ] payload 最外層有 `to`
- [ ] payload 最外層有 `messages`
- [ ] `messages` 內有一則 `type: "text"` message
- [ ] 通知文字包含 `risk_level / total_revenue / anomaly_count / top_product / top_channel / action_items`
- [ ] 用固定 Prompt 2 做 Human-in-the-loop 審核，且 AI 不改檔
- [ ] `LINE_REAL_SEND=1 node line-lab/sendLineAlert.js` 沒有 `--confirm` 時會阻擋
- [ ] 老師示範或學生知道真送需要 `LINE_CHANNEL_ACCESS_TOKEN` 與 `LINE_TARGET_ID`
- [ ] API 失敗時看得到 status code 與 response body
- [ ] 用固定 Prompt 3 做 ReAct 分析，先不改檔
- [ ] 用固定 Prompt 4 放行最小修正
- [ ] `risk_level` 變成 `嚴重` 時，送出前會阻擋並提示資料合約錯誤
- [ ] `git diff -- package.json` 沒有輸出
- [ ] `git status` / `git diff` 看過，沒有超出本堂範圍
- [ ] 完成 commit：`新增 LINE OA 營運異常通知流程`

## C3 保底

- [ ] 沒有 LINE OA：用 mock 模式完成
- [ ] token 錯誤：只要求看 status code 與 response body
- [ ] targetId 不可用：由老師示範真實發送
- [ ] Codex 產出不穩：使用標準版 `sendLineAlert.js`
- [ ] 現場網路不穩：payload 產生與 mock 驗收即完成

## 通用驗收

- [ ] AI 修改前有明確限制
- [ ] AI 修改後有回報實際檔案
- [ ] 人類看過 `git diff`
- [ ] 沒有 commit `.env`
- [ ] 沒有把 token 貼進程式碼或前端
