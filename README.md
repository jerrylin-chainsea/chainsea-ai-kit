# M11 · AI 驅動開發與平台整合實作課｜學員包

這是給**學員**的 M11 完整教材包。整門課 **4 堂 × 4 小時 = 16 小時**，只做**一個作品**、走**一條可重複的交付流程**：

> **倉儲營運 Dashboard 推播中心 + LINE OA Flex 推播 + ops agent 自動化 + 三個 MCP**
>
> 用 AI coding agent 在護欄內改程式，接上 LINE OA、GitHub Actions、Skill / MCP，完成一次真正的交付。海風小店只是載體，你真正學會的是**怎麼管 AI 穩定幫你做事**。

---

## 🚀 一鍵開始（不用先懂任何架構）

學生從 [`ai-project-foundation-kit/`](./ai-project-foundation-kit/) 開始 —— 先讀 [`START-HERE.md`](./ai-project-foundation-kit/START-HERE.md)。

- **Windows**：雙擊 [`ai-project-foundation-kit/start-m11.bat`](./ai-project-foundation-kit/start-m11.bat)
- **macOS**：雙擊 [`ai-project-foundation-kit/start-m11.command`](./ai-project-foundation-kit/start-m11.command)

第一次會自動裝套件（約 1–2 分鐘），瀏覽器自動打開 <http://localhost:5180>。你會看到「海風小店」首頁；點上方的「**營運異常 Dashboard**」，就是這門課要完成的主畫面。

不想用一鍵啟動？等價指令只有一組：

```bash
cd ai-project-foundation-kit/web-lab
npm install   # 只有第一次需要
npm run dev    # http://localhost:5180
```

---

## 四堂課，你會做出什麼

| 堂 | 你會做出 | 主要資料夾 | 照著做的手冊 |
|---|---|---|---|
| **C1** 進得了專案 | 一鍵啟動、看到最終成果、改一個字、第一次 `git commit` | [`web-lab/`](./ai-project-foundation-kit/web-lab/) | [`U1/`](./ai-project-foundation-kit/U1/) |
| **C2** 管得住 AI | 用 planner → 人審 → implementer，在護欄內安全改 Dashboard | [`web-lab/`](./ai-project-foundation-kit/web-lab/) | [`U2/`](./ai-project-foundation-kit/U2/) |
| **C3** 接上平台 | Dashboard「推播中心」**按鈕**推 LINE Flex（雙範本：營運異常／訂單資訊，學生也能真送） | [`web-lab/`](./ai-project-foundation-kit/web-lab/) + [`line-lab/`](./ai-project-foundation-kit/line-lab/) | [`U3/`](./ai-project-foundation-kit/U3/) |
| **C4** 自動化 + MCP | ops agent + GitHub Actions 產 artifact，再親手裝**三個 MCP**（看畫面／查文件／記專案） | [`ops-agent-lab/`](./ai-project-foundation-kit/ops-agent-lab/) + [`.mcp.json`](./ai-project-foundation-kit/.mcp.json) | [`U4/`](./ai-project-foundation-kit/U4/) |

每個 `U1/`–`U4/` 資料夾都是同樣四種檔案：**`STEP-*.md`**（照著做）、**`PROMPT-CARD.md`**（複製貼上）、**`ACCEPTANCE.md`**（怎樣算過關）、**`PITFALL.md`**（卡住先看這裡）。prompt 都是純文字，直接複製貼到 AI 對話框就好。

主線（一條線走到底）：

```text
資料進來 → 檢查資料 → 資料合約 → AI coding agent 改功能
       → Dashboard 推播中心 → 按鈕推 LINE Flex → ops agent 自動化
       → GitHub Actions → reviewer 驗收 → build / commit → 三個 MCP
```

---

## 怎麼開始（先看簡報，再動手）

### 1. 打開簡報（它本身就是一個前端專案，順便體驗一次）

```bash
cd slides
npm install     # 第一次裝套件，跑一下下
npm run dev      # 打開終端機顯示的網址
```

打開後是課程投影片列表，點 **U11-C1 ~ C4** 任一堂進去，用 **← →** 翻頁，右上角 **Present** 全畫面播放。

> 你剛剛做的「`npm install` → `npm run dev` → 瀏覽器看到畫面」，就是**打開一個前端專案**的標準動作。C3 做 Dashboard 時你會再做一次一模一樣的。

### 2. 動手做（每堂照手冊貼 prompt）

進 [`ai-project-foundation-kit/`](./ai-project-foundation-kit/)，打開對應的 `U1/`–`U4/`，每個案例都是同一個節奏：

> **目標 → 複製這段貼上 → ✓ 你應該看到 → 卡住怎麼辦**

---

## 你只要看三個地方

整堂課的所有專案，你只要看：**左邊檔案樹**、跟 AI 講話的**對話框**、跑程式的**終端機**。其他都先忽略。

## 完成的定義（DoD）—— 整門課只有這一條

> **AI 做出來不算完成。通過驗收才算完成。**
> 驗收包含：**畫面 ／ 輸出 ／ diff ／ build ／ human review**。

## 金鑰與安全（重要）

- LINE token 只放 `ai-project-foundation-kit/line-lab/.env`，**不進程式碼、不進前端、不 commit**（這份包裡沒有任何金鑰）。
- 推播用畫面上的「**推播 LINE Flex**」按鈕：它只打**本機後端** `/api/send-line-flex`，由後端帶 token 去打 LINE —— **前端永遠不直接呼叫 `api.line.me`**（token 像家裡鑰匙，不能貼在大門上）。
- 預設是 **mock**；有 LINE OA 的同學填好 `.env` + `LINE_REAL_SEND=1` 並**重啟 dev** 就能真送，沒有 LINE OA 也能靠 `[mock]` 過關。
- 不新增 npm 套件、不改 `package.json`。

## 這份包裝了什麼

```text
ai-project-foundation-kit/   M11 學生 starter：web-lab（Dashboard 推播中心）/ line-lab（LINE Flex）
                             / ops-agent-lab / data-lab（資料合約）/ U1–U4 手冊 / .mcp.json
m11-materials/               老師側教材：16 小時教案、驗收清單、prompt 卡、講義
slides/                      四堂課簡報（open-slide 前端專案，可 npm run dev 開起來）
```

加油，你會做得出來的。
