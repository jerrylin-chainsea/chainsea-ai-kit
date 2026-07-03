# U3 · 卡住了？先看這裡

## 畫面類

| 狀況 | 解法 |
|---|---|
| 整個畫面變成紅底錯誤（Vite overlay） | 你改壞了 JSON **語法**（多半是引號或逗號）。把 `report.json` 改回原樣存檔即恢復。本堂練習只改「值」，不改語法 |
| 改了 report.json 畫面沒反應 | 確認存檔；dev server 還在跑；重新整理頁面再看一次 |
| 擋牌沒出現 | 確認你改的是 `data-lab/report.json`（不是別的檔）、值真的不在 low/medium/high 內 |
| 按鈕是灰的按不了 | 前面的步驟還沒完成 —— 照 1→2→3 的順序來，合約沒過時後面全部鎖住是**正常設計** |
| 真送指令不出現 | 要先生成 payload 預覽、**勾選**人工審核 checkbox，而且合約要是通過狀態 |

## 終端機類

| 狀況 | 解法 |
|---|---|
| `LINE_REAL_SEND=1 node ...` 在 PowerShell 報錯 | PowerShell 語法不同：`$env:LINE_REAL_SEND="1"; node line-lab/sendLineAlert.js` |
| 跑完真送測試後，之後每次都想真送 | PowerShell 的環境變數會留著：`Remove-Item Env:LINE_REAL_SEND` 清掉 |
| `node` 找不到 | 裝 Node.js LTS；裝完重開終端機 |

## LINE 真送類（進階組才會遇到）

| 狀況 | 解法 |
|---|---|
| 沒有 LINE OA / 不知道 targetId | **不用處理**。主線到 mock 為止，真送看老師示範 |
| token 401/403 | 看 status code 與 response body 就好，這本身就是學習點；token 重發要回 LINE Developers Console |
| 想把 token 貼進程式碼「先動起來」 | 停。token 只能放 `line-lab/.env`，這是紅線 |

## AI 類

| 狀況 | 解法 |
|---|---|
| AI 修錯時想順便重構 | 不放行。貼：「只做 Minimal Patch，其他都不要動。」 |
| AI 想改 `reportContract.js` 或 `sendLineAlert.js` | 本堂不允許 —— 它們是雙胞胎，改一邊會讓畫面和腳本不同步 |
| AI 把資料手寫進 Dashboard.jsx | 不放行。資料只有一個來源：`data-lab/report.json` |

> 原則：**今天看到 `[mock]` 才算對，不是手機收到 LINE 才算對。**
