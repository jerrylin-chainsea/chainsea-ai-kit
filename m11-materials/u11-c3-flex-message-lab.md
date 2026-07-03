# U11-C3 加做講義：LINE OA Flex Message 營運通知

目標：把原本 text message 改成可選的 Flex Message。照做後會多一個 `--flex` 模式，仍然保留 mock、人工審核、`--confirm`。

> **注意**：目前 starter 的 `sendLineAlert.js` **已內建 `--flex`**。
> 用內建版的班級：跳過第 2 步，直接從第 3 步開始驗收。
> 想練「AI 實作功能」的班級：老師先發未含 `--flex` 的版本，再照第 2 步請 AI 加上。

官方文件：

- Send Flex Messages: https://developers.line.biz/en/docs/messaging-api/using-flex-messages/
- Flex Message elements: https://developers.line.biz/en/docs/messaging-api/flex-message-elements/
- Flex Message Simulator: https://developers.line.biz/en/docs/messaging-api/using-flex-message-simulator/

## 1. 回到專案

```bash
cd ai-project-foundation-kit
```

確認原本 text 模式正常：

```bash
node line-lab/sendLineAlert.js
```

預期：

```text
payload written: line-lab\line-alert-payload.json
[mock] LINE_REAL_SEND is not 1, no request sent.
```

## 2. 貼 Prompt 1：加上 `--flex`

把下面整段貼給 Codex：

```text
請在現有 line-lab/sendLineAlert.js 上新增 Flex Message 模式。

需求：
1. 保留原本 text message 行為不變。
2. 加上 --flex 參數時，產生 LINE Flex Message payload。
3. --flex 模式輸出到 line-lab/line-flex-payload.json。
4. Flex Message 內容必須包含：
   - risk_level
   - total_revenue
   - anomaly_count
   - top_product
   - top_channel
   - action_items
5. Flex Message 最外層 message 必須是：
   - type: "flex"
   - altText: "營運異常通知"
   - contents: bubble
6. 不新增套件。
7. 不改 package.json。
8. 不改 web-lab。
9. token 不可寫死。
10. mock / LINE_REAL_SEND / --confirm 規則必須和原本一樣。

完成後請回報實際修改或新增的檔案。
```

預期 Codex 回報：

```text
修改：
- line-lab/sendLineAlert.js
新增：
- line-lab/line-flex-payload.json
```

## 3. 驗收 Flex payload

```bash
node line-lab/sendLineAlert.js --flex
```

預期：

```text
payload written: line-lab\line-flex-payload.json
[mock] LINE_REAL_SEND is not 1, no request sent.
```

看檔案：

```bash
cat line-lab/line-flex-payload.json
```

PowerShell：

```powershell
Get-Content -Encoding UTF8 .\line-lab\line-flex-payload.json
```

必須看到：

```json
{
  "to": "你的 userId",
  "messages": [
    {
      "type": "flex",
      "altText": "營運異常通知",
      "contents": {
        "type": "bubble"
      }
    }
  ]
}
```

## 4. 檢查 Flex Message 內容

在 `line-flex-payload.json` 裡確認：

```text
risk_level 有出現
total_revenue 有出現
anomaly_count 有出現
top_product 有出現
top_channel 有出現
action_items 有出現
```

## 5. 貼到 Flex Message Simulator

1. 開 Flex Message Simulator：  
   https://developers.line.biz/flex-simulator/
2. 複製 `line-flex-payload.json` 裡的 `messages[0].contents`。
3. 貼到 simulator。
4. 確認 bubble 可以正常預覽。

只貼 `contents`，不要貼整包 push payload。

## 6. 測試沒有 `--confirm` 不真送

Bash / macOS / Git Bash：

```bash
LINE_REAL_SEND=1 node line-lab/sendLineAlert.js --flex
```

PowerShell：

```powershell
$env:LINE_REAL_SEND="1"; node line-lab/sendLineAlert.js --flex
```

預期：

```text
payload written: line-lab\line-flex-payload.json
[blocked] LINE_REAL_SEND=1 but --confirm missing; no request sent.
```

## 7. 真實發送 Flex Message（老師示範／進階組；需先完成主線講義附錄的 LINE 前置）

Bash / macOS / Git Bash：

```bash
LINE_REAL_SEND=1 node line-lab/sendLineAlert.js --flex --confirm
```

PowerShell：

```powershell
$env:LINE_REAL_SEND="1"; node line-lab/sendLineAlert.js --flex --confirm
```

成功預期：

```text
payload written: line-lab\line-flex-payload.json
LINE API success: 200
```

手機 LINE 應該收到 Flex 版營運異常通知。

## 8. Git 驗收

```bash
git status
git diff
git diff -- package.json
```

預期：

```text
package.json 沒有 diff
.env 不在 commit 裡
web-lab 沒有修改
```

## 9. Commit

```bash
git add .
git commit -m "新增 LINE OA Flex Message 營運通知"
git push
```

