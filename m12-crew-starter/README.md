# M12 ｜ AI 營運決策助理（CrewAI starter）

讓 AI 幫你的店讀營運資料、做分析、給決策建議。三個角色：**資料檢查員 → 分析洞察員 → 決策摘要員**。

> 這輩子在這個專案只要看三個地方：**檔案樹**（左邊）、**對話框**（跟 AI 講話）、**終端機**（跑程式）。其他都可以忽略。

## 課前準備（一次就好）

1. 在 **Codespaces Secrets** 設一把金鑰（主用）：
   - `GITHUB_MODELS_TOKEN` = 一個 GitHub PAT，建立時**要勾 `Models: Read` 權限**。
   - ⚠️⚠️ **最容易卡關的兩步（漏一步就抓不到金鑰，建議老師現場「看著螢幕一起點」）**：
     1. 建 PAT 時**勾 `Models: Read`**；
     2. 在 Secrets 頁面點 **「Manage access」勾選這個專案**；
     3. 設完 **重新整理 / 重開 Codespace** 才生效。
   - 注意：Codespaces 內建的 `GITHUB_TOKEN` **不能**打 Models API，一定要自己建 PAT。
2. （備援，可選）再設 `GROQ_API_KEY` 或 `CEREBRAS_API_KEY` 或 `GEMINI_API_KEY` 任一把，主用額度用完會自動換下一把。

## 怎麼跑

```bash
python run.py
```

看到三段角色輪流輸出、最後印出「決策摘要」就成功了。

想驗證「格式藍圖」對不對（不需金鑰）：`pytest`（已設好 `pyproject.toml`，直接跑即可）。

## 破冰（第 1 次課）

還沒碰程式前，先打開對話框，用白話請你的 coding agent：
> 「你現在同時扮演三個角色：資料檢查員、分析洞察員、決策摘要員。看這份資料 `data/sales_sample.csv`，每個角色各講一段。」

你會立刻看懂「三個 agent 分工」是什麼意思 —— 之後我們才把它變成可重跑的程式。

## 省額度小撇步

CrewAI 跑一次會呼叫好幾次 AI。**先在對話框把 prompt 改對、確認方向，再跑完整 `run.py`**，可以少燒很多免費額度。若看到 `rate limit` / `429` 字樣，代表這把 key 當天用很兇了，換一把備援即可。

## 小提醒

- 想看 `data/sales_sample.csv`？**用 VS Code 直接打開**（用 Windows 的 Excel 開可能會中文亂碼）。
- 不要把金鑰貼進程式碼、對話框或 commit；金鑰只放 Codespaces Secrets。

## 檔案在哪、改什麼

| 想改的東西 | 檔案 |
|---|---|
| 三個角色的個性/任務 | `src/crew.py` |
| AI 要交出的格式（格式藍圖） | `src/blueprint.py` |
| 要用哪把金鑰 / 換備援 | `src/llm.py` |
| 要分析的資料 | `data/sales_sample.csv` |
