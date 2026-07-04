# M11 16h 授課主線｜NOVA WAREHOUSE 版

> 以這份為準：4 堂各 4 小時，只做同一個企業案例 **NOVA WAREHOUSE 智慧倉儲控制塔**。  
> 目標不是讓學生「看 AI 變魔術」，而是讓學生能接手 repo、拆小任務、管住 AI、改功能、驗證、說明。

## 總目標

上完 16 小時後，學生要能在企業媒合小題目中做到：

1. 讀懂一個前端/平台整合 repo 的基本結構。
2. 用 `AGENTS.md` / `CLAUDE.md` / Plan Mode 把 AI coding agent 限制在任務範圍內。
3. 將模糊需求拆成資料欄位、規則、畫面、驗收。
4. 修改既有 React/Vite 專案中的小功能。
5. 看懂 component、CSS、src、API、payload、token、前後端邊界。
6. 用 mock 優先的方式完成 LINE Flex 流程。
7. 用 MCP/skills 輔助查文件、驗收畫面、理解專案。
8. 用 Astro blog 說明自己的拆題、實作與驗收證據。

## 嚴格驗收

每堂課都用同一個 DoD：

| 面向 | 標準 |
|---|---|
| 畫面 | localhost 真的看得到，不靠截圖假裝 |
| 輸出 | terminal / payload / reviewer / MCP 回報有證據 |
| diff | 只動允許檔案，不越界 |
| build | `npm run build` 或該堂指定驗證通過 |
| human review | 人看過計畫、畫面、diff、風險後才算完成 |

## C1｜VS Code / Git / Gitflow / Claude Code / Codex

**定位**：工具鏈與專案接手。starter repo 已經要有高質感企業首頁，學生不是從零做品牌頁。

### 4 小時節奏

| 時間 | 老師帶什麼 | 學生做什麼 | 驗收 |
|---|---|---|---|
| 0:00-0:40 | 打開資料夾、VS Code 三區、啟動 web-lab | 一鍵啟動 / `npm run dev` | 看見 NOVA WAREHOUSE |
| 0:40-1:20 | 四頁導覽：品牌入口、倉儲後台、訂單可視化、LINE 推播中心 | 逐頁點過 | 說得出四頁用途 |
| 1:20-2:20 | Git / branch / diff / commit | 改 `data.js` 的 `brand.name` | diff 只動 `data.js` |
| 2:20-3:10 | Claude Code / Codex：先讀不要改 | 貼 U1 讀專案卡 | `git status` 乾淨 |
| 3:10-4:00 | Gitflow 概念與收尾 | commit、回顧風險 | commit 完成 |

### C1 講師提醒

- 不要讓學生在 C1 開始改 `WarehouseScene.jsx`。
- C1 重點是「進得了專案」和「看得懂 diff」，不是 UI 發想。
- starter 首頁質感要由老師先做好。

## C2｜AGENTS.md / CLAUDE.md / Plan Mode / 倉儲後台挖洞

**定位**：把 AI coding agent 管住，做小範圍後台功能。

### 今日挖洞任務

在 `web-lab/src/warehouseLogic.js` 的 `buildActionQueue(items, orderItems)` 裡，新增一條規則：

> 如果目前有 `LINE OA` 通路且尚未出貨的訂單，action queue 要顯示「LINE OA 訂單需要客服確認」。

### 參考解

```js
const lineOpenOrders = orderItems.filter(
  (order) => order.channel === 'LINE OA' && order.status !== '已出貨',
);

if (lineOpenOrders.length > 0) {
  actions.push({
    level: 'warning',
    title: 'LINE OA 訂單需要客服確認',
    detail: `目前有 ${lineOpenOrders.length} 筆 LINE OA 訂單尚未出貨，請先確認收件人與 ETA`,
  });
}
```

### 4 小時節奏

| 時間 | 老師帶什麼 | 學生做什麼 | 驗收 |
|---|---|---|---|
| 0:00-0:35 | 讀 `AGENTS.md` / `CLAUDE.md` | 標出允許檔案 | 能說出紅線 |
| 0:35-1:10 | 讀倉儲資料與 action queue | 看 `warehouseData.js` / `warehouseLogic.js` | 說得出資料流 |
| 1:10-1:50 | Plan Mode | 貼 planner 卡 | A-F 計畫，未改檔 |
| 1:50-2:40 | Implementer | 放行最小修改 | action queue 出現新規則 |
| 2:40-3:20 | reviewer / rescue | 貼 reviewer 卡、救偏航 | PASS 或可修正 BLOCK |
| 3:20-4:00 | build / diff / commit | `npm run build`、commit | diff 只動允許檔案 |

### C2 講師提醒

- 不准讓 AI 改 `warehouseData.js` 來湊結果。
- 不准讓 AI 改 `package.json`。
- 不准讓 AI 提早碰 LINE 真送。
- 如果學生跟著講義做，主要只會改 `warehouseLogic.js`。

## C3｜訂單可視化 / API / LINE OA Flex / token 邊界

**定位**：讓學生看懂前端資料狀態、API payload、mock/真送邊界。

### 4 小時節奏

| 時間 | 老師帶什麼 | 學生做什麼 | 驗收 |
|---|---|---|---|
| 0:00-0:45 | 訂單可視化 | 看 `OrderFlow.jsx` / `OrderFlowCanvas.jsx` / CSS | 說得出 component / CSS / src |
| 0:45-1:35 | LINE 推播中心五步 | 載入、檢查、預覽 | Flex 視覺預覽正常 |
| 1:35-2:15 | Human-in-the-loop | 勾 checkbox、mock 推播 | 看到 `[mock]` |
| 2:15-2:50 | API/token 邊界 | F12 Network | 只看到 `/api/send-line-flex` |
| 2:50-3:35 | ReAct 修錯 | 改壞 `risk_level` 再修回 | 擋牌出現/消失 |
| 3:35-4:00 | build / diff / commit | 收尾驗證 | build 通過 |

### C3 講師提醒

- 主線到 mock 即過關；真送 LINE 是加分。
- token 不進前端是紅線。
- 不要讓學生為了真送卡住整堂課。

## C4｜ops agent / GitHub Actions / MCP / Skills / Astro blog

**定位**：把前面成果收成可驗收流程，再整理成企業看得懂的技術紀錄。

### 4 小時節奏

| 時間 | 老師帶什麼 | 學生做什麼 | 驗收 |
|---|---|---|---|
| 0:00-0:45 | ops agent 三角色 | 跑 `run_ops_check.py` | JSON 正常 |
| 0:45-1:15 | GitHub Actions / artifact | 看 workflow | 知道不真送 LINE |
| 1:15-1:55 | skills / slash commands | `/ops-check`、`/ship-check` 或等價 prompt | 固定格式回報 |
| 1:55-2:50 | 三個 MCP | Chrome DevTools / Context7 / Codebase Memory | 各完成一次小任務 |
| 2:50-3:35 | Astro blog | 新增技術文章 | 有大綱與截圖清單 |
| 3:35-4:00 | 最終回顧 | 整理 demo 路線 | 說得出成果與驗收 |

### Astro 技術文章標準

文章題目建議：

```text
我如何用 AI coding agent 接手並交付一個 NOVA WAREHOUSE 倉儲系統
```

必放：

1. 企業題目拆解。
2. 倉儲後台 / 訂單可視化 / LINE Flex 截圖。
3. React component、CSS、API payload、token 邊界。
4. AGENTS.md、CLAUDE.md、Plan Mode 如何限制 AI。
5. build、mock、DevTools、diff 驗收證據。
6. 自己遇到的限制與下一步。

## 檔案對照

| 類型 | 路徑 |
|---|---|
| 學生包 | `C:\Users\JerryLin\Desktop\ai-project-foundation-kit` |
| C1-C4 學生講義 | `ai-project-foundation-kit/U1` 至 `U4` |
| slides | `C:\Users\JerryLin\Desktop\chainsea-ai-kit\slides\slides\u11-c*-*` |
| Astro starter | `C:\Users\JerryLin\Desktop\chainsea-ai-kit\m13-astro-blog` |

