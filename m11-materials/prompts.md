# 固定 Prompt 卡 ｜ M11/U11

學生只複製貼上，不自由改需求。C3 的 Codex 是執行工具，不是創意發想工具。

## C3 · LINE OA 營運異常通知系統

### Prompt 1：Codex 建立初版

```text
請幫我建立 LINE OA 營運異常通知腳本。
讀取 data-lab/report.json，產生 LINE push message payload。
請建立 line-lab/sendLineAlert.js、line-lab/.env.example，執行後產生 line-lab/line-alert-payload.json。
限制：不新增套件、不改 package.json、不改前端、不重構、token 不可寫死。
預設 mock 模式，不真的發送。
只有 LINE_REAL_SEND=1 且加上 --confirm 時才可以呼叫 LINE API。
完成後請回報實際建立或修改的檔案。
```

固定驗收：

```bash
node line-lab/sendLineAlert.js
cat line-lab/line-alert-payload.json
git diff -- package.json
```

### Prompt 2：Human-in-the-loop

```text
請檢查目前 LINE 通知內容。
不要改檔。
請判斷這則通知是否適合送出，並列出：
1. 通知風險等級
2. 通知對象
3. 是否需要人工確認
4. 是否可以進入 --confirm 發送階段
```

固定驗收：

- AI 沒有改檔。
- 有明確說是否需要人工確認。
- 沒有直接叫學生真送。

### Prompt 3：ReAct debug

```text
你現在扮演 debugger。
目前問題：report.json 的 risk_level 變成中文「嚴重」，但資料合約規定只能是 low / medium / high。
請先不要改檔。
請用 ReAct 格式分析：
Reason：可能原因
Act：要看哪個檔案或跑哪個指令
Observe：預期看到什麼證據
Verify：修完後如何驗收
最後提出最小修改方案。
```

固定驗收：

- 先分析，不改檔。
- 最小修改方案只能阻擋合約錯誤。
- 不新增套件、不重構。

### Prompt 4：放行修正

```text
同意你的最小修改方案。
請只修改必要檔案。
不要新增套件。
不要改 package.json。
不要重構。
修正目標：如果 risk_level 不是 low / medium / high，請在送出前阻擋，並提示資料合約錯誤。
```

固定驗收：

```bash
node line-lab/sendLineAlert.js
git diff
git diff -- package.json
```

## C3 固定驗收指令

```bash
node line-lab/sendLineAlert.js
cat line-lab/line-alert-payload.json
LINE_REAL_SEND=1 node line-lab/sendLineAlert.js
LINE_REAL_SEND=1 node line-lab/sendLineAlert.js --confirm
git status
git diff
git diff -- package.json
git add .
git commit -m "新增 LINE OA 營運異常通知流程"
```

PowerShell：

```powershell
$env:LINE_REAL_SEND="1"; node line-lab/sendLineAlert.js
$env:LINE_REAL_SEND="1"; node line-lab/sendLineAlert.js --confirm
```
