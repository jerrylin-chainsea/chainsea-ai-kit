# 06 · Git 與 slash commands 小抄

**什麼時候用:** 你要確認 AI 修改可控、或要讓 Claude Code / Codex 先走固定流程。

## Git 最小包

```bash
git init
git status
git diff
git add .
git commit -m "完成一次可驗收修改"
```

遠端指令先會白話:

```bash
git clone <repo-url>    # 複製遠端專案
git fetch origin        # 抓遠端更新資訊,先不合併
git pull                # 抓遠端更新並合併
```

## slash commands

| 指令 | 用途 |
|---|---|
| `/init` | 先認識專案 |
| `/plan` | 先計畫,不要直接改 |
| `/model` | 換模型或思考深度 |
| `/permissions` | 看 AI 權限 |
| `/diff` | 看 AI 改了什麼 |
| `/status` | 看目前狀態 |
| `/clear` | 清空對話 |
| `/compact` | 壓縮上下文 |
| `/mcp` | 看外部工具連線 |
| `/skills` | 看固定 SOP |

> 不用背指令。照順序:先讀、先計畫、放行修改、最後看 diff。
