# 固定 Prompt 卡 ｜ M11/U11

學生只複製貼上，不自由改需求。AI 是執行工具，不是創意發想工具。
學生手上的版本在 starter：`U1/`–`U4/PROMPT-CARD.md` 與 `prompts/01–07`。本檔是老師總覽。

## C1 · 讀專案（唯一一張卡）

```text
請先閱讀目前專案，不要修改任何檔案。

請回答：
1. 這個專案是做什麼的
2. 啟動方式是什麼
3. 主要檔案在哪裡
4. 如果我要修改首頁文字，可能要改哪裡
5. 我要怎麼驗收你沒有亂改
```

固定驗收：AI 給摘要且 `git status` 乾淨。

## C2 · planner / 人審 / implementer

### Prompt 1：planner（A–F 固定格式）

```text
你現在扮演 planner。
先不要改檔，也不要執行寫入動作。

請先閱讀：
- AGENTS.md
- CLAUDE.md
- data-lab/report.json
- 這次任務相關的檔案

任務：
我要完成「倉儲營運 Dashboard + LINE OA Flex 推播」中的下一步：<這堂指定任務>

限制：
1. 只能修改：<允許檔案清單>
2. 不要新增套件
3. 不要改 package.json
4. 不要重構
5. 如果需要新增檔案，先說明原因，不可直接做

請只用以下格式回答：
A. 你準備修改的檔案
B. 每個檔案各改什麼
C. 資料合約會如何被使用
D. 驗收方式
E. 可能風險
F. 哪一步需要人類拍板
```

### 人審四題（不是 prompt，是學生自問）

1. 可修改檔案對嗎？ 2. 有沒有新套件？ 3. 有沒有改 package.json？ 4. 有沒有重構傾向？

### Prompt 2：implementer（A–E 固定回報）

```text
你現在扮演 implementer。
請依照「剛剛已核准的計畫」實作。

限制：
1. 只能修改：<允許檔案清單>
2. 不要新增套件
3. 不要改 package.json
4. 不要重構
5. 如果超出原計畫，先停下來回報，不可直接修改

完成後請固定回報：
A. 實際修改的檔案
B. 每個檔案改了什麼
C. 哪裡對應到資料合約
D. 我現在要怎麼手動驗收
E. 哪些地方你沒有改
```

固定驗收：照回報的 D 逐項做；diff 只落在允許檔案。

C2 建議固定任務：

```text
在營運異常 Dashboard 載入 report.json 後，新增「低庫存推播準備」小區塊。
區塊要顯示：
1. 推播主題：低庫存補貨提醒
2. 推播通道：LINE OA Flex Message
3. 下一步：到 U3 由人工審核後 mock 送出

允許檔案：
- web-lab/src/Dashboard.jsx
- web-lab/src/styles.css（只准在 Dashboard 區塊追加樣式）
```

## C3 · 營運異常 Dashboard + LINE OA Flex mock 通知

### Prompt 1：Human-in-the-loop 審核（AI 只判斷，不改檔）

```text
請檢查目前推播中心的通知內容（Dashboard Flex 視覺預覽裡的欄位與內容）。
不要改檔。
請判斷這則通知是否適合送出，並列出：
1. 通知類型與對象
2. 內容有沒有明顯錯誤或不該送的資訊
3. 是否需要人工確認
4. 可不可以按「推播 LINE Flex」
```

固定驗收：AI 沒有改檔、有明確說是否需要人工確認、沒有直接叫學生真送。

### Prompt 2：ReAct debug（含 Expected / Minimal Patch）

```text
你現在扮演 debugger。
先不要改檔。

目前問題：
Dashboard 出現紅色擋牌：risk_level 變成中文「嚴重」，
但資料合約規定只能是 low / medium / high。

請用以下格式回答：
Expected：正確行為應該是什麼
Actual：目前實際發生什麼
Reason：你推測的原因
Act：你要查看哪些檔案 / 執行哪些指令
Observe：你預期看到什麼證據
Minimal Patch：你建議的最小修改
Verify：修正後的驗收方式
Blocker：哪裡需要人類決定
```

固定驗收：先分析不改檔；Minimal Patch 只處理合約違反，不新增套件、不重構。

### Prompt 3：放行最小修正

```text
同意你的 Minimal Patch。
請只修改必要檔案。
不要新增套件。
不要改 package.json。
不要重構。
修正目標：讓 report.json 重新符合資料合約（risk_level 回到 low / medium / high）。
完成後告訴我：改了哪裡、我要怎麼在畫面和終端機各驗收一次。
```

固定驗收：

```bash
node line-lab/sendLineAlert.js --flex
git diff
git diff -- package.json
```

### Prompt 4（進階／保底）：請 Codex 從零建立通知腳本

starter 已內建標準版 `sendLineAlert.js`。想讓學生看「AI 從零串接」的班級才用這張：

```text
請幫我建立 LINE OA Flex 營運異常通知腳本。
讀取 data-lab/report.json，產生 LINE Flex push message payload。
請建立 line-lab/sendLineAlert.js、line-lab/.env.example，執行後用 --flex 產生 line-lab/line-flex-payload.json。
限制：不新增套件、不改 package.json、不改前端、不重構、token 不可寫死。
預設 mock 模式，不真的發送。
只有 LINE_REAL_SEND=1 且加上 --flex --confirm 時才可以呼叫 LINE API。
完成後請回報實際建立或修改的檔案。
```

## C3 固定驗收指令（老師版，學生只需三類：啟動/build/commit）

```bash
node line-lab/sendLineAlert.js --flex
LINE_REAL_SEND=1 node line-lab/sendLineAlert.js --flex          # 預期 [blocked]
LINE_REAL_SEND=1 node line-lab/sendLineAlert.js --flex --confirm # 老師示範真送
git status
git diff
git diff -- package.json
git add .
git commit -m "完成 Dashboard 通知流程與 ReAct 修錯練習"
```

PowerShell：

```powershell
$env:LINE_REAL_SEND="1"; node line-lab/sendLineAlert.js --flex
$env:LINE_REAL_SEND="1"; node line-lab/sendLineAlert.js --flex --confirm
Remove-Item Env:LINE_REAL_SEND   # 示範完記得清掉
```

## C4 · ops agent / GitHub Actions / reviewer / ship-check

### Prompt 1：ops agent 檢查

```text
請檢查 ops-agent-lab 的自動化流程。
不要改檔。

請回答：
1. data_checker / ops_decider / push_writer 三個角色各做什麼
2. run_ops_check.py 產出的資料是否符合 data-lab/report.json 七欄合約
3. 哪些額外欄位只是給人審看，下游會忽略
4. 接到 line-lab/sendLineAlert.js --flex 前，還需要哪個人工審核
```

### Prompt 2：CrewAI 轉換評估（先計畫）

```text
請評估是否把 ops-agent-lab/run_ops_check.py
改成真正的 CrewAI agents + tasks。

先不要改檔，不要新增套件。
請用以下格式回答：
A. 需要新增或修改的檔案
B. 需要的套件與原因
C. 如何保留 report.json 七欄資料合約
D. API key / token 要放哪裡，哪些地方禁止出現
E. mock 與人工審核如何保留
F. 風險與不建議改的地方
```

### Prompt 3：GitHub Actions reviewer

```text
你現在扮演 reviewer。
請檢查 .github/workflows/u11-ops-check.yml。
不要改檔。

請固定輸出：
Verdict：PASS 或 BLOCK
Workflow Trigger：是否有手動或排程觸發
Secret Safety：是否沒有 token / API key
Output Check：是否產出 report.json 與 line-flex-payload.json artifact
No Real Send Check：是否不會真送 LINE
Next Step：如果 PASS，下一步做什麼；如果 BLOCK，先修什麼
```

### Prompt 4：reviewer（Pass / Block）

```text
你現在扮演 reviewer。
請根據 AGENTS.md、CLAUDE.md、目前需求與 git diff 做檢查。
不要改檔。

請固定輸出：
Verdict：PASS 或 BLOCK
Changed Files：實際改了哪些檔
Scope Check：是否超出允許範圍
Package Check：是否修改 package.json / 新增套件
Contract Check：是否符合資料合約
Platform Check：LINE Flex、ops agent、GitHub Actions 是否仍走 mock / artifact / 人審
Regression Risk：最可能壞掉的地方
Human Review：人還要親自看什麼
Next Step：如果 PASS，下一步做什麼；如果 BLOCK，先修什麼
```

### Prompt 5：/ship-check（交付前檢查）

```text
請根據目前 git status、git diff 與 build 結果，
幫我做交付前檢查。
不要改檔。
請回答：
1. 是否可交付
2. 風險最高的是哪一點
3. commit 訊息建議
4. 如果要退回，最先該退哪個檔案
```

### 三句拉回

```text
（Drift）請回到原本任務，這次只處理 X，其他不要改。
（Debt）請先整理目前最新狀態、不要改：已完成什麼、要遵守什麼、下一步只做什麼。
（Regression）請列出這次修改後需要回歸檢查的項目。
```
