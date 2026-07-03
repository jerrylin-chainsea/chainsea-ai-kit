# U4 · STEP 03 ｜ 把流程固化成 SOP：/ship-check

> 這四堂課你走過的流程（讀 → 計畫 → 人審 → 小改 → reviewer → build → commit），
> 不該只存在你的記憶裡。**寫成 Skill / 自訂指令，AI 每次自動照做** —— 這才是交接得出去的本事。

## 1. Skill 是什麼（一句話）

Skill = 貼在牆上的新人工作守則。放在 `.claude/skills/<name>/SKILL.md`，
打 `/<name>` 呼叫，相關情境也會自動觸發。

本 starter 已內建 5 支（打 `/skills` 或 `/help` 看得到）：
`beginner-ai-project-workflow`、`data-check-fixed-output`、`debug-react`、`git-verify`、`review-diff`。

## 2. 動手建你自己的第一個指令：/ship-check

建立檔案 `.claude/commands/ship-check.md`，內容就是交付前檢查 prompt：

```text
請根據目前 git status、git diff 與 build 結果，
幫我做交付前檢查。
不要改檔。
請回答：
1. 是否可交付
2. 風險最高的是哪一點
3. commit 訊息建議
4. 如果要退回，最先該退哪個檔案
```

存檔後在對話框打 `/ship-check`。

**你應該看到**：AI 照四點回答，而且沒改任何檔。
以後每次要 commit 前，一個指令就把「交付前四問」跑完。

## 3. （老師示範）MCP 一頁概念

MCP = 幫 AI 接上外部工具的「安全的線」（例如讓 AI 開 Chrome 幫你截圖驗收）。
裝之前永遠先問三件事：**它能讀什麼、能不能寫、會不會碰正式資料。**
安裝細節不在主線 —— 想玩的看 `../m11-materials/M11-16h-實作教案.md` 附錄 C。

## 4. 結業

四堂課的完整弧線：

```
U1 進得了專案 → U2 管得住 AI → U3 做得出功能 → U4 收得乾淨
```

> **你不是只會問 AI，你是會管理 AI 做事的人。**
> AI 做出來不算完成，通過驗收才算完成 —— 這句話，帶去你的下一個專案。
