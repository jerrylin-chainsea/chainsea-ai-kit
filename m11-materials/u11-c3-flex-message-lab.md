# U11-C3 進階講義：LINE OA Flex Message 版面優化

Flex Message 已經是 C3 主線，starter 的 `sendLineAlert.js` 也已內建 `--flex`。本講義不再教「從 text 改 Flex」，而是給進階組練習：用 AI coding agent 在不破壞資料合約與真送規則的前提下，優化 Flex bubble 版面。

官方文件：

- Send Flex Messages: https://developers.line.biz/en/docs/messaging-api/using-flex-messages/
- Flex Message elements: https://developers.line.biz/en/docs/messaging-api/flex-message-elements/
- Flex Message Simulator: https://developers.line.biz/en/docs/messaging-api/using-flex-message-simulator/

## 1. 先確認主線 Flex 正常

```bash
cd ai-project-foundation-kit
node line-lab/sendLineAlert.js --flex
```

預期：

```text
payload written: line-lab\line-flex-payload.json
[mock] LINE_REAL_SEND is not 1, no request sent.
```

## 2. 貼到 Flex Message Simulator

1. 開 Flex Message Simulator：https://developers.line.biz/flex-simulator/
2. 複製 `line-flex-payload.json` 裡的 `messages[0].contents`。
3. 貼到 simulator。
4. 確認 bubble 可以正常預覽。

只貼 `contents`，不要貼整包 push payload。

## 3. 請 AI 先出優化計畫

```text
你現在扮演 planner。
請評估如何優化 line-lab/sendLineAlert.js 的 Flex Message 版面。
先不要改檔。

目標：
1. 讓 risk_level、top_product、action_items 更容易掃讀
2. 保留 report.json 七欄資料合約
3. 保留 mock / LINE_REAL_SEND / --confirm 規則
4. 不新增套件、不改 package.json
5. 不把 token 寫進程式碼

請固定回答：
A. 你準備修改的檔案
B. Flex layout 會改哪幾個區塊
C. 哪些資料仍來自 report.json
D. 如何用 Simulator 驗收
E. 哪些紅線不能碰
F. 哪一步需要人類拍板
```

人審通過後才放行 implementer。

## 4. 驗收

```bash
node line-lab/sendLineAlert.js --flex
git diff
git diff -- package.json
```

必須符合：

- `line-flex-payload.json` 有 `type: "flex"`、`altText`、`contents.type: "bubble"`。
- `risk_level`、`total_revenue`、`anomaly_count`、`top_product`、`top_channel`、`action_items` 都還在。
- Simulator 能正常預覽。
- 沒有新增套件，`package.json` 沒有 diff。
- 沒有改真送規則：沒有 `LINE_REAL_SEND=1` 與 `--confirm` 就不會呼叫 LINE API。

## 5. 真送仍是老師示範／進階組

```bash
LINE_REAL_SEND=1 node line-lab/sendLineAlert.js --flex --confirm
```

PowerShell：

```powershell
$env:LINE_REAL_SEND="1"; node line-lab/sendLineAlert.js --flex --confirm
```

真送前仍要人工審核 Flex 預覽、targetId 與 action items。
