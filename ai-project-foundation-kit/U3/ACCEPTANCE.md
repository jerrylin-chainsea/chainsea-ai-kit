# U3 · 驗收單

## 主線（全班必過，到 mock 為止）

- [ ] 按「載入範例 report.json」，畫面顯示與 `data-lab/report.json` 一致的數字
- [ ] 按「檢查資料合約」，看到綠色通過
- [ ] 按「生成 payload 預覽」，通知文字與 `line-lab/line-alert-payload.json` 的 text 逐字相同
- [ ] 知道網頁上的 `to` 永遠是示範 ID，真送對象由 `line-lab/.env` 決定
- [ ] 未勾人工審核 checkbox 時，**看不到**真送指令
- [ ] 勾選 checkbox 後，真送指令出現且可複製
- [ ] 按「模擬送出(mock)」看到 `[mock] LINE_REAL_SEND is not 1, no request sent.`
- [ ] F12 → Network：全程**零請求**，沒有呼叫 `https://api.line.me`
- [ ] token 沒有出現在前端任何檔案
- [ ] 終端機 `node line-lab/sendLineAlert.js` 是 mock；`LINE_REAL_SEND=1` 沒有 `--confirm` 會被 `[blocked]`

## ReAct 修錯

- [ ] `risk_level` 改成「嚴重」存檔後，擋牌**不按按鈕就出現**，錯誤訊息是
      `資料合約錯誤: risk_level 必須是 low / medium / high，目前是 "嚴重"`
- [ ] 擋牌出現時，payload／mock／真送指令全部消失
- [ ] 同一壞檔跑 `node line-lab/sendLineAlert.js`，終端機印出同一句錯誤
- [ ] ReAct 卡先分析不改檔；放行後只做最小修正
- [ ] 修好後畫面恢復綠色通過

## 收尾

- [ ] `npm run build` 通過
- [ ] `git diff -- web-lab/package.json` 沒有輸出
- [ ] `git diff` 沒有超出本堂允許檔案
- [ ] 完成 commit

## DoD 對照

| 驗收面向 | 這堂的標準 |
|---|---|
| 畫面 | 六步卡全綠、擋牌能出現也能消失 |
| 輸出 | `[mock]`、`[blocked]`、合約錯誤三句都親眼看過 |
| diff | 只動允許檔案 |
| build | `npm run build` 綠色通過 |
| human review | checkbox 是你自己勾的、Minimal Patch 是你放行的 |

## 保底（任一成立仍算過關）

- 沒有 LINE OA → mock 完成即過關（真送本來就是老師示範）
- 網路不穩 → payload 預覽 + mock 驗收即完成
- AI 產出不穩 → 用 starter 內建的標準版 Dashboard 完成驗收
