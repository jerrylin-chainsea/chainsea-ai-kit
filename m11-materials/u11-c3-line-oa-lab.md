# U11-C3 照做講義：Codex 串接 LINE OA 營運異常通知

## 1. 開啟專案

```bash
cd ai-project-foundation-kit
```

PowerShell：

```powershell
cd .\ai-project-foundation-kit
```

確認檔案：

```bash
cat data-lab/report.json
```

PowerShell：

```powershell
Get-Content -Encoding UTF8 .\data-lab\report.json
```

預期看到 `risk_level`、`total_revenue`、`anomaly_count`、`top_product`、`top_channel`、`action_items`。

## 2. 確認 LINE OA 已啟用 Messaging API

1. 開 LINE Official Account Manager：  
   https://manager.line.biz/
2. 選你的 LINE OA。
3. 進設定。
4. 找 `Messaging API`。
5. 確認 Messaging API 已啟用。
6. 確認它對應到 LINE Developers Console 的 Messaging API channel。

官方文件：  
https://developers.line.biz/en/docs/messaging-api/getting-started/

## 3. 取得 channel access token

1. 開 LINE Developers Console：  
   https://developers.line.biz/console/
2. 選 provider。
3. 選你的 Messaging API channel。
4. 進 `Messaging API` tab。
5. 找 `Channel access token`。
6. 點 `Issue` 或 `Reissue`。
7. 複製 token。

不要把 token 貼到程式碼、前端、投影片、Git。

## 4. 取得 LINE_TARGET_ID

用個人測試最簡單：

1. 在 LINE Developers Console 選你的 Messaging API channel。
2. 進 `Basic settings` tab。
3. 找 `Your user ID`。
4. 複製這串 userId。

注意：這不是 LINE ID。userId 會長得像：

```text
U8189cf6745fc0d808977bdb0b9f22995
```

官方文件：  
https://developers.line.biz/en/docs/messaging-api/getting-user-ids/

## 5. 把你的 LINE 帳號加 OA 好友

1. 在 LINE Developers Console 選 Messaging API channel。
2. 進 `Messaging API` tab。
3. 找 QR code。
4. 用手機 LINE 掃描。
5. 加這個 OA 為好友。

## 6. 貼 Prompt 1：請 Codex 建立腳本

把下面整段貼給 Codex：

```text
請幫我建立 LINE OA 營運異常通知腳本。
讀取 data-lab/report.json，產生 LINE push message payload。
請建立 line-lab/sendLineAlert.js、line-lab/.env.example，執行後產生 line-lab/line-alert-payload.json。
限制：不新增套件、不改 package.json、不改前端、不重構、token 不可寫死。
預設 mock 模式，不真的發送。
只有 LINE_REAL_SEND=1 且加上 --confirm 時才可以呼叫 LINE API。
完成後請回報實際建立或修改的檔案。
```

Codex 完成後，應該只出現這些檔案：

```text
line-lab/sendLineAlert.js
line-lab/.env.example
line-lab/line-alert-payload.json
```

## 7. 建立 `.env`

```bash
cp line-lab/.env.example line-lab/.env
```

PowerShell：

```powershell
Copy-Item .\line-lab\.env.example .\line-lab\.env
```

打開 `line-lab/.env`，填入：

```text
LINE_CHANNEL_ACCESS_TOKEN=貼上你的 channel access token
LINE_TARGET_ID=貼上你的 userId
LINE_REAL_SEND=0
```

確認 `.env` 沒有被 Git 追蹤：

```bash
git status
```

## 8. mock 模式驗收

```bash
node line-lab/sendLineAlert.js
```

預期輸出：

```text
payload written: line-lab\line-alert-payload.json
[mock] LINE_REAL_SEND is not 1, no request sent.
```

看 payload：

```bash
cat line-lab/line-alert-payload.json
```

PowerShell：

```powershell
Get-Content -Encoding UTF8 .\line-lab\line-alert-payload.json
```

必須看到：

```json
{
  "to": "你的 userId",
  "messages": [
    {
      "type": "text",
      "text": "[營運異常通知]..."
    }
  ]
}
```

## 9. 貼 Prompt 2：人工審核通知內容

把下面整段貼給 Codex：

```text
請檢查目前 LINE 通知內容。
不要改檔。
請判斷這則通知是否適合送出，並列出：
1. 通知風險等級
2. 通知對象
3. 是否需要人工確認
4. 是否可以進入 --confirm 發送階段
```

預期回答重點：

```text
風險等級：high
通知對象：LINE_TARGET_ID 指定的 userId
需要人工確認：需要
是否可進入 --confirm：人工確認後可以
```

## 10. 測試沒有 `--confirm` 不會真送

Bash / macOS / Git Bash：

```bash
LINE_REAL_SEND=1 node line-lab/sendLineAlert.js
```

PowerShell：

```powershell
$env:LINE_REAL_SEND="1"; node line-lab/sendLineAlert.js
```

預期輸出：

```text
payload written: line-lab\line-alert-payload.json
[blocked] LINE_REAL_SEND=1 but --confirm missing; no request sent.
```

## 11. 真實發送 LINE

確認三件事：

```text
1. LINE_CHANNEL_ACCESS_TOKEN 已填
2. LINE_TARGET_ID 已填
3. 你已人工審核通知內容
```

Bash / macOS / Git Bash：

```bash
LINE_REAL_SEND=1 node line-lab/sendLineAlert.js --confirm
```

PowerShell：

```powershell
$env:LINE_REAL_SEND="1"; node line-lab/sendLineAlert.js --confirm
```

成功預期：

```text
payload written: line-lab\line-alert-payload.json
LINE API success: 200
```

手機 LINE 應該收到 OA 發出的營運異常通知。

如果失敗，看 status code 和 response body：

```text
401：token 錯或過期
400：payload 或 targetId 錯
403：channel 權限或狀態問題
429：額度或頻率限制
```

## 12. 製造指定錯誤

打開：

```text
data-lab/report.json
```

把：

```json
"risk_level": "high"
```

改成：

```json
"risk_level": "嚴重"
```

## 13. 貼 Prompt 3：ReAct debug

把下面整段貼給 Codex：

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

預期它會說：

```text
Reason：risk_level 違反資料合約
Act：看 data-lab/report.json，跑 node line-lab/sendLineAlert.js
Observe：risk_level 是 "嚴重"
Verify：修完後應阻擋發送並提示合約錯誤
```

## 14. 貼 Prompt 4：放行修正

把下面整段貼給 Codex：

```text
同意你的最小修改方案。
請只修改必要檔案。
不要新增套件。
不要改 package.json。
不要重構。
修正目標：如果 risk_level 不是 low / medium / high，請在送出前阻擋，並提示資料合約錯誤。
```

驗收：

```bash
node line-lab/sendLineAlert.js
```

預期輸出：

```text
資料合約錯誤: risk_level 必須是 low / medium / high，目前是 "嚴重"
```

## 15. 還原資料

把：

```json
"risk_level": "嚴重"
```

改回：

```json
"risk_level": "high"
```

再跑：

```bash
node line-lab/sendLineAlert.js
```

預期回到 mock success：

```text
payload written: line-lab\line-alert-payload.json
[mock] LINE_REAL_SEND is not 1, no request sent.
```

## 16. Git 驗收

```bash
git status
git diff
git diff -- package.json
```

預期：

```text
git diff -- package.json 沒有任何輸出
.env 不在 commit 裡
沒有新增 npm 套件
沒有修改 web-lab
```

## 17. Commit

```bash
git add .
git commit -m "新增 LINE OA 營運異常通知流程"
git push
```

## 18. 繳交

提交：

```text
1. line-alert-payload.json 截圖或內容
2. mock success 終端機截圖
3. 真實 LINE 收到通知截圖
4. Prompt 2 人工審核回答
5. Prompt 3 ReAct debug 回答
6. git diff -- package.json 無輸出截圖
7. git log --oneline -1
```
