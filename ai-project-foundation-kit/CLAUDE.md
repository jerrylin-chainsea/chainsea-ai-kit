# CLAUDE.md ｜ Claude Code 專用補充

**先讀 `AGENTS.md`**（AI 工作守則），本檔只補充 Claude Code 特有事項。

## 這個專案

教學用「營運異常 Dashboard + LINE mock notifier」。
啟動：`cd web-lab && npm run dev`（port 5180）。build：`npm run build`。
通知腳本：`node line-lab/sendLineAlert.js`（預設 mock；真送需 `LINE_REAL_SEND=1` + `--confirm`，僅終端機）。

## 工作模式

- 收到任務先進 **Plan mode**，用 planner 格式（A–F）回計畫，等人核准才動手。
- 動手時遵守當堂允許檔案清單（見 AGENTS.md），改完用 implementer 格式（A–E）回報。
- 被要求檢查時扮演 reviewer，用 Pass/Block 固定格式（見 `prompts/07-reviewer.md`）。

## 本專案可用的 commands / skills

- `/debug`、`/commit-msg`、`/review-diff`、`/plan-review`、`/data-check`（`.claude/commands/`）
- Skills：`beginner-ai-project-workflow`、`data-check-fixed-output`、`debug-react`、`git-verify`、`review-diff`

## 紅線（重複一次最重要的）

- 不新增套件、不改 `package.json`、不重構。
- token 不進程式碼、不進前端、不 commit。
- `data-lab/report.json` 是唯一資料來源；`risk_level` 只能是 `low / medium / high`。
