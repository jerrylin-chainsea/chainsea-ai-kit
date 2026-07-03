# U4 · STEP 01 ｜ reviewer：交付前的最後一道人牆

> **這堂完成物**：ReAct 修錯（複習）、reviewer 檢查、build、commit/push，並把整套流程固化成可重用的 SOP。
> **你現在在流水線**：`專案跑起來 → 檢查資料 → 資料合約 → AI 串接 → Dashboard → 修錯 → 【reviewer 驗收 → build / commit / push】`

## 0. 先認得三個 AI 走鐘的毛病

| 毛病 | 症狀 | 一句話拉回 |
|---|---|---|
| **Context Drift** 越改越偏 | 只要改標題，它順手改版面／資料 | 「請回到原本任務，這次**只**處理 X，其他不要改。」 |
| **Prompt Debt** 越補越亂 | 零碎要求補到 AI 前後矛盾 | 「請先**整理目前最新狀態**、不要改：已完成什麼、要遵守什麼、下一步只做什麼。」 |
| **Regression** 改 A 壞 B | 修好這個、弄壞那個 | 「請列出這次修改後需要**回歸檢查**的項目。」 |

這三句抄下來。課後你真正會天天用的，可能就是這三句。

## 1. 跑一次 reviewer

前提：你手上有一次 U3 的修改還沒 commit（或現場照老師指定做一個小修改）。

貼 `PROMPT-CARD.md` 的 **reviewer 卡**。

**你應該看到**：AI 以固定格式回報，第一行就是 `Verdict：PASS 或 BLOCK`。

## 2. 看懂 reviewer 回報

- **Verdict: PASS** → 看它的 Human Review 欄：**人還要親自看什麼**（畫面？輸出？）。做完才進 STEP-02。
- **Verdict: BLOCK** → 看 Next Step 欄先修什麼。修完**重新跑一次 reviewer**，直到 PASS。

**人審重點**：reviewer 也是 AI，它的回報一樣要對照 `git diff` 抽查一次。
reviewer 是幫你省力，不是幫你背書 —— 最後拍板的永遠是人。

→ 下一步：`STEP-02-build-commit-push.md`。
