# ai-project-foundation-kit

這是「AI 專案操作與協作開發基礎課」(M11/U11)的練習教材。
全班操作**同一份**,跟著老師一步一步做。重點不是自由發想,而是**跑完一套固定流程**。

> 主線:從會問 AI,變成會指揮 AI 完成一個專案。
> 打開專案 → 跑起來 → 叫 AI 先讀、先計畫、不要亂改 → 驗收 → 修錯 → 存檔。

## 資料夾是什麼

```
ai-project-foundation-kit/
  web-lab/          ← 一個完整首頁作品(海風小店)。你會把它打開、跑起來、請 AI 小範圍改它。
  data-lab/         ← 一份假銷售資料 + 一支 Python 檢查程式。你會請 AI 看資料、修錯。
  prompts/          ← 六張「複製就能用」的固定 prompt。
  skill/            ← 一份把整套流程寫成 AI 固定 SOP 的範例(舊版,新版見 .claude/skills/)。
  .claude/commands/ ← 我們自建的 slash 指令:/plan-review /debug /commit-msg /review-diff /data-check
  .claude/skills/   ← 5 支教學 Skill(SOP):新手流程 / 資料檢查 / debug / Git 驗收 / review diff
  .mcp.json         ← MCP 設定:chrome-devtools / context7 / filesystem(GitHub 見下方)
```

> 用 **Claude Code** 打開這個資料夾,它會問你是否啟用 `.mcp.json` 的 MCP;`.claude/commands` 與 `.claude/skills` 打 `/` 就看得到。

## 怎麼跑(老師會帶,先看個大概)

### web-lab(網站)

```bash
cd web-lab
npm install      # 第一次要做,安裝需要的東西
npm run dev      # 把網站跑起來,瀏覽器打開它給的網址
npm run build    # 檢查能不能產出正式版本
```

首頁不是 placeholder:它有動態背景、互動卡片、可切換內容區與響應式版面。
新手要改的文字、流程、卡片資料集中在 `web-lab/src/data.js`。

### data-lab(資料檢查)

```bash
cd data-lab
python run.py    # 讀 data/sales.csv,印出四欄報告
```

你會看到四個欄位:`insight / anomalies / risk_level / action_items`。

> ⚠️ **教學用的小錯誤(故意的)**:`run.py` 目前會把 `risk_level` 印成中文(像「嚴重」),
> 但規格說它只能是 `low / medium / high`。這是 C3「Debug / ReAct」要練習修的地方,
> 照 `prompts/04-debug.md` 一步步修就好。

## 檔案角色(看角色,不用看語法)

| 檔案 | 白話 |
|---|---|
| `README.md` | 這個專案的說明書(就是你正在看的) |
| `web-lab/package.json` | 網頁專案的「指令表」 |
| `web-lab/src/` | 主要程式放的地方 |
| `web-lab/src/App.jsx` | 畫面與互動 |
| `web-lab/src/styles.css` | 樣式(顏色、字體、間距) |
| `web-lab/src/data.js` | 網站要顯示的資料 |
| `data-lab/data/sales.csv` | 像 Excel 的資料 |
| `data-lab/report_template.json` | 結構化資料 / 設定 |
| `data-lab/run.py` | Python 程式 |

## AI 工具分工

| 工具 | 適合做什麼 |
|---|---|
| ChatGPT / Claude 網頁版 | 發想、整理、解釋、改寫 |
| Claude Code / Codex | 讀專案、改檔、跑指令、看 diff、debug |

## Git 最小指令包

```bash
git init                         # 第一次把資料夾變成 Git 專案
git status                       # 看現在改了什麼
git diff                         # 看每一行差異
git add .                        # 把改動收進這次存檔
git commit -m "完成第一版首頁"    # 存一個版本
git fetch origin                 # 先抓遠端更新資訊,還不合併
git pull                         # 抓遠端更新並合併到本機
git clone <repo-url>             # 從遠端複製一份專案
```

`.gitignore` 用來告訴 Git 哪些不要存,例如 `node_modules/`、`dist/`。

## slash commands:內建 vs 我們自建

**Claude Code 內建**(打 `/help` 可看你這版全部):

| 指令 | 課堂用途 |
|---|---|
| `/init` | 讓工具先認識專案,建立 CLAUDE.md |
| `/model` | 切換模型 |
| `/permissions` | 檢查/調整 AI 可以做哪些事 |
| `/review` | 檢視變更 |
| `/status` | 看目前工作階段狀態 |
| `/clear` | 清空對話,重新開始 |
| `/compact` | 對話太長時壓縮上下文 |
| `/mcp` | 查看或管理 MCP 工具連線 |

> **Plan Mode 是「模式」不是指令**:用 `shift+tab` 循環切換(Default / Auto-Accept / Plan)。看 AI 改了什麼,用終端機 `git diff`。

**我們自建**(放在 `.claude/commands/`,打 `/` 就看得到):

| 指令 | 課堂用途 |
|---|---|
| `/plan-review` | 先計畫、不改檔,報告要改哪個檔與驗收方式 |
| `/debug` | 用 ReAct 修錯:先分析、同意後才只改必要檔 |
| `/data-check` | 看資料一律輸出固定四欄 |
| `/review-diff` | 逐檔檢視 diff、抓越界修改 |
| `/commit-msg` | 依 diff 產生一句清楚的 commit 訊息 |

> 課堂重點不是背指令,而是流程:先讀、先計畫、再放行、最後看 diff。

## MCP 與 Skills(可執行,clone 就帶)

**Skills(SOP)** 在 `.claude/skills/`,打 `/<名字>` 呼叫(相關情境也會自動觸發):
`beginner-ai-project-workflow`、`data-check-fixed-output`、`debug-react`、`git-verify`、`review-diff`。

**MCP** 設定在 `.mcp.json`(chrome-devtools / context7 / filesystem)。用 Claude Code 開這個資料夾會問你是否啟用;啟用後打 `/mcp` 應看到三台。若要用 CLI 手動裝到 user 範圍:

```bash
# 瀏覽器驗收工具(看 console/DOM、截圖)
claude mcp add chrome-devtools -- npx chrome-devtools-mcp@latest
# 查套件最新官方文件(問問題時句尾加 use context7)
claude mcp add context7 -- npx -y @upstash/context7-mcp
# 只給這個資料夾的檔案存取
claude mcp add filesystem -- npx -y @modelcontextprotocol/server-filesystem .
```

**GitHub MCP(選配,需個人 PAT,不要寫進 .mcp.json / 不要 commit)**:

```bash
# PAT 於 github.com/settings/tokens 產生,最小 scope: repo + read:org
claude mcp add --transport http github https://api.githubcopilot.com/mcp -H "Authorization: Bearer <你的PAT>"
```

**驗收**:`claude mcp list` 或面板打 `/mcp` 應列出;`filesystem` 動不了授權目錄外的檔。
**保底**:連不上 → 重開 VS Code、`/mcp` 看狀態;`npx` 失敗 → 確認 `node -v` ≥ 18;仍不行退回終端機/手動,不擋課堂進度。

## 需要的工具

- [Node.js](https://nodejs.org)(跑 web-lab,內含 npm)
- [Python 3](https://www.python.org)(跑 data-lab,只用標準庫,不用裝額外套件)
