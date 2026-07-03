# U3 · STEP 02 ｜ 人工審核（Human-in-the-loop）與 mock 送出

> 通知要送到主管手機上。**AI 產出內容、人決定送不送** —— 這就是 Human-in-the-loop。

## 1. Button 4：勾選「我已人工審核通知內容」

先別勾。看一眼第 6 步「真送指令」卡：**它現在不給你指令**。

現在認真看一遍 payload 預覽的通知文字（就當你是要收這則通知的主管）：
數字對嗎？風險等級合理嗎？action items 是給人的明確指示嗎？

確認沒問題 → 勾選 checkbox。

## 2. Button 5：顯示 mock send 結果

按下「模擬送出(mock)」。

**你應該看到**：

```
[mock] LINE_REAL_SEND is not 1, no request sent.
```

這是瀏覽器內的模擬：沒有呼叫 api.line.me、前端沒有任何 token。
（不信？按 F12 開 DevTools → Network 分頁 → 重按一次模擬送出 → **零請求**。）

## 3. Button 6：真送指令出現了

勾了 checkbox 之後，第 6 步出現可複製的指令：

```bash
LINE_REAL_SEND=1 node line-lab/sendLineAlert.js --confirm
```

**規則**：真送永遠只在終端機發生，網頁不會幫你送。而且需要**兩道**確認：
環境變數 `LINE_REAL_SEND=1` **加** `--confirm` 參數，缺一不可。

## 4. 終端機對照（今天僅有的指令，三行）

```bash
node line-lab/sendLineAlert.js
```

**你應該看到**：`payload written: ...` + `[mock] LINE_REAL_SEND is not 1, no request sent.` —— 和畫面上同一句。

```bash
LINE_REAL_SEND=1 node line-lab/sendLineAlert.js
```

（PowerShell：`$env:LINE_REAL_SEND="1"; node line-lab/sendLineAlert.js`）

**你應該看到**：`[blocked] LINE_REAL_SEND=1 but --confirm missing; no request sent.` —— 沒有 `--confirm`，就是送不出去。

## 5. 老師示範：真送 LINE（學生不用做）

老師會用自己設定好的 `line-lab/.env`（token + targetId）跑 `--confirm`，全班看手機收到通知。
想自己試的進階組：LINE 官方後台設定步驟在 `../m11-materials/u11-c3-line-oa-lab.md` 的「真送前置」章節。
**沒有 LINE OA 完全不影響過關** —— 本堂驗收到 mock 為止。

→ 下一步：`STEP-03-react-debug.md`，親手把資料弄壞，再用 ReAct 修好。
