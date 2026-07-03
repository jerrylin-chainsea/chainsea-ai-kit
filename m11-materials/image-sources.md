# 圖片來源紀錄 ｜ M11(U11)AI 專案操作與協作開發基礎課(v2)

擷取日期:2026-06-30(2026-07-01 追加 Claude Commands / Models、Codex features、Chrome DevTools MCP,並重拍海風小店 three.js 海灘)。擷取工具:Chrome DevTools MCP(視窗 1440×900)。
所有真截圖存在各簡報的 `slides/slides/u11-cX-*/assets/`。

本教材圖片分三種:
1. **真截圖(官方網頁 / 本機 localhost)** — Chrome DevTools 擷取,來源見下表。
2. **自製高擬真圖解(React/SVG 畫在簡報裡,無外部來源)** — VSCode 區塊圖、Claude Code 面板、shift+tab 模式循環、模型選單、Codex 面板、終端機框、CSV 高亮表、四欄 JSON、ReAct 迴圈、Claude×Codex 對照表、Skill 框、MCP 連線圖。
3. **講師自行補拍(簡報中為 ImagePlaceholder 或自製圖替代)** — 純本機桌面/CLI/插件實機畫面,瀏覽器擷取不到,上課前由講師截圖替換(清單見最後)。

---

## 一、真截圖(官方網頁)

| 檔名 | 用於 | 來源 URL | 擷取頁面 |
|---|---|---|---|
| `u11-c1-project/assets/vscode-dev.png` | C1 VSCode 真畫面 | https://vscode.dev/ | 瀏覽器版 VS Code(繁中,顯示活動列五區塊 + 擴充功能) |
| `u11-c1-project/assets/github-repo.png` | C1 GitHub | https://github.com/anthropics/claude-code | anthropics/claude-code 專案頁 |
| `u11-c1-project/assets/nodejs-home.png` | C1 Node | https://nodejs.org/en | Node.js 官方首頁 |
| `u11-c1-project/assets/npm-home.png` | C1 npm | https://www.npmjs.com/ | npm 官方首頁 |
| `u11-c1-project/assets/git-home.png` | C1 Git | https://git-scm.com/ | Git 官方首頁 |
| `u11-c1-project/assets/vscode-home.png` | (備用) | https://code.visualstudio.com/ | VS Code 行銷首頁 |
| `u11-c1-project/assets/vscode-ui.png` | (備用) | https://code.visualstudio.com/docs/getstarted/userinterface | VS Code UI 文件 |
| `u11-c2-plan/assets/claude-vscode-docs.png` | C2 Claude Code 文件 | https://code.claude.com/docs/en/vs-code | Use Claude Code in VS Code(提到 inline diff、plan mode、快捷鍵) |
| `u11-c2-plan/assets/claude-marketplace.png` | C2 Claude Code 市集 | https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code | Claude Code for VS Code 擴充頁 |
| `u11-c2-plan/assets/claude-slash-docs.png` | C2 斜線指令官方頁(佐證 /model 示範) | https://code.claude.com/docs/en/commands | Claude Code Docs — Commands(「打 / 列出全部指令,可篩選;切模型、清空、跑流程」) |
| `u11-c2-plan/assets/models-overview.png` | C2 選模型官方頁(佐證 Opus/Sonnet) | https://platform.claude.com/docs/en/about-claude/models/overview | Models overview / Choosing a model(難題挑最強、一般任務用夠快夠省) |
| `u11-c4-flow/assets/codex-ide-docs.png` | C4 Codex 功能官方頁(佐證模式/深度/模型) | https://developers.openai.com/codex/ide/features | Codex IDE features(Switch between models、Adjust reasoning effort、Choose an approval mode) |
| `u11-c4-flow/assets/mcp-chrome-devtools.png` | C4 MCP 真實例子 | https://github.com/ChromeDevTools/chrome-devtools-mcp | Chrome DevTools MCP repo(本教材的官方頁與 localhost 截圖即由此 MCP 驅動 Chrome 擷取) |
| `u11-c4-flow/assets/codex-marketplace.png` | C4 Codex 市集 | https://marketplace.visualstudio.com/items?itemName=openai.chatgpt | Codex – OpenAI's coding agent 擴充頁(寫明「Add Codex as a panel in VS Code」) |
| `u11-c4-flow/assets/codex-home.png` | C4 Codex 官方 | https://github.com/openai/codex | openai/codex 官方 repo |
| `u11-c4-flow/assets/claude-skills-docs.png` | C4 Skills | https://code.claude.com/docs/en/skills | Claude Code Docs — Skills |
| `u11-c4-flow/assets/mcp-intro.png` | C4 MCP | https://modelcontextprotocol.io/ | Model Context Protocol — Intro |

> 備註:`openai.com/codex` 行銷頁有反機器人驗證(「請稍候…」)無法自動截圖,Codex 改用官方 GitHub repo 與 VS Code Marketplace(皆為 OpenAI 官方來源)。

## 二、真截圖(本機 localhost)

| 檔名 | 用於 | 來源 |
|---|---|---|
| `u11-c1-project/assets/weblab-localhost.png` | C1 跑起 web-lab | 本機跑 `ai-project-foundation-kit/web-lab` 的 `npm run dev`,「海風小店」**three.js 晴天海灘**真實畫面(海浪/雲/海鷗/遮陽傘小店 + 商品卡)。2026-07-01 重拍 |

## 三、Claude Code / Codex 模式與模型 — 教學內容的來源依據(供查證,簡報以自製面板圖呈現)

- Claude Code:`shift+tab` 循環 Default → Auto-Accept Edits → Plan;Plan mode 只計畫不改檔;面板底部可點選模式;`/plan`、`/model` 指令;Windows 上 shift+tab 可能跳過 Plan(用 /plan 或點選)。來源:`code.claude.com/docs/en/vs-code`、Claude Code 模式相關文件。
- Codex:核准模式 **Chat / Agent / Agent (Full Access)**;reasoning effort **low / medium / high**;模型選單。來源:`developers.openai.com/codex/ide`、VS Code Marketplace 擴充頁。

## 四、U11-C3 LINE OA 官方文件截圖

擷取日期:2026-07-02。擷取工具:Chrome DevTools MCP。用途:支撐 C3「真的設定 LINE OA」照做講義。

| 檔案 | 內容 | 來源 |
|---|---|---|
| `screenshots/u11-c3-line-oa/line-getting-started.png` | LINE Messaging API Getting started:建立 LINE Official Account、啟用 Messaging API | https://developers.line.biz/en/docs/messaging-api/getting-started/ |
| `screenshots/u11-c3-line-oa/line-build-a-bot.png` | Build a bot:channel access token、webhook URL、QR code 加好友 | https://developers.line.biz/en/docs/messaging-api/building-bot/ |
| `screenshots/u11-c3-line-oa/line-get-user-ids.png` | Get user IDs:userId 不是 LINE ID,可從 Basic settings 或 webhook 取得 | https://developers.line.biz/en/docs/messaging-api/getting-user-ids/ |
| `screenshots/u11-c3-line-oa/line-reference-token-push.png` | Messaging API reference:channel access token 與 push endpoint | https://developers.line.biz/en/reference/messaging-api/ |
| `screenshots/u11-c3-line-oa/line-console-login.png` | LINE Developers Console 未登入時會進 LINE Business ID 登入頁 | https://developers.line.biz/console/ |
- ⚠️ 模型版本號(Opus 4.x / Sonnet 4.x 等)會隨版本更新,簡報以「依你安裝顯示」呈現,**講師可依現場版本口頭補充或改字**。

## 四、講師上課前自行補拍(瀏覽器擷取不到的本機/插件實機畫面)

簡報已用自製高擬真面板圖 + 文字步驟覆蓋這些內容;若要放真實截圖,請在自己的 VS Code 截圖替換:
- 本機 VS Code 打開 `web-lab`、改 `data.js` 熱更新的畫面(C1)。
- Claude Code 插件面板:Plan mode 指示器、`shift+tab` 切換、`/model` 模型選單展開(C2)。
- Claude Code diff 審閱、@ 檔案的實際畫面(C2)。
- Codex 插件面板:Chat / Agent 模式、reasoning 設定(C4)。
- 終端機實際輸出:`npm run dev`、`node line-lab/sendLineAlert.js`(修錯前後)、`git diff`(C1/C3,簡報已有自製框可替代)。
- Dashboard 實機畫面:六步全綠、紅色擋牌出現(C3,簡報可用截圖或現場 demo)。
