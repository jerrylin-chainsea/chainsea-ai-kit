# 固定 Prompt 卡 ｜ M11(U11)AI 專案操作與協作開發基礎課

主線: **從會問 AI,變成會指揮 AI 完成一個專案。**

老師控場用。學生只要「複製 → 貼上 → 按 Enter」。每個實作都有固定 prompt、固定操作、固定驗收、固定下一步。

---

## 〇、工具分工

| 工具 | 用途 |
|---|---|
| ChatGPT / Claude 網頁版 | 發想、整理、解釋、改寫 |
| Claude Code / Codex | 讀專案、改檔、跑指令、看 diff、debug |

Claude 的 **Plan** 約等於 Codex 的 **Chat**(只看不改)。Claude 的 **Auto-Accept** 約等於 Codex 的 **Agent**(放它動手)。

---

## 課 1 · starter 專案 + Git 基礎

### 1. 跑起網站

固定操作:

```bash
cd ai-project-foundation-kit/web-lab
npm install
npm run dev
```

固定驗收:
- 瀏覽器打開 localhost,看到「海風小店」(會動的海灘主視覺)。
- 首頁有海灘主視覺、商品卡、切換區,不是三張 placeholder。

固定下一步:打開 `src/data.js`,改一個標題或卡片文字。

### 2. Git 存檔

固定操作:

```bash
git init
git status
git diff
git add .
git commit -m "完成第一版首頁"
```

固定驗收:
- `git diff` 看得到你改了哪幾行。
- commit 出現一筆紀錄。

補充指令:

```bash
git clone <repo-url>    # 複製遠端專案
git fetch origin        # 抓遠端更新資訊,先不合併
git pull                # 抓遠端更新並合併
```

`.gitignore` 範例:

```gitignore
node_modules/
dist/
.env
```

---

## 課 2 · Claude Code / Codex slash commands + 安全改檔

### 3. 官方 slash commands 小抄

| 指令 | 用途 |
|---|---|
| `/init` | 先認識專案,建立專案記憶或指引 |
| `/plan` | 只計畫,先不要改 |
| `/model` | 換模型或思考深度 |
| `/permissions` | 看 AI 權限 |
| `/diff` | 看改動 |
| `/status` | 看目前工作狀態 |
| `/clear` | 清空對話 |
| `/compact` | 對話太長時壓縮上下文 |
| `/mcp` | 看 MCP 連線 |
| `/skills` | 看 Skills/SOP |

### 4. 讀專案(Plan/Chat,先看不改)

```
請先閱讀目前專案,不要修改任何檔案。

請回答:
1. 這個專案是做什麼的
2. 啟動方式是什麼
3. 主要檔案在哪裡
4. 如果我要修改首頁文字,可能要改哪裡
5. 我要怎麼驗收你沒有亂改
```

固定驗收:`git status` 沒有出現新改動。

### 5. 報計畫(維持 Plan/Chat)

```
我要把首頁標語改成:「從會問 AI,變成會指揮 AI 完成一個專案」

限制:
1. 只修改標語文字
2. 不要改版面
3. 不要新增套件
4. 不要重構

請先回答:你會改哪個檔、哪一段、是否影響其他功能、我要怎麼驗收。
```

### 6. 放行(切 Agent/Edit,帶護欄)

```
同意,請照剛剛的計畫修改。
請只修改必要部分。
完成後請告訴我:改了哪個檔、改了什麼、怎麼驗收。
```

固定驗收:

```bash
npm run dev
git status
git diff
```

---

## 課 3 · 資料檢查、固定輸出、Debug

### 7. 資料檢查(先 @sales.csv,固定四欄)

```
請根據我給你的 sales.csv 內容,輸出固定四欄:

insight:
anomalies:
risk_level:
action_items:

限制:
1. 如果資料有負數、過大數字、缺漏,請列在 anomalies
2. 如果資料不足,請不要硬給結論
3. 沒有資料依據的建議,請標成「不可採用」
4. risk_level 只能是 low、medium、high
```

固定驗收:答案一定有四欄,且 `risk_level` 只能是 `low / medium / high`。

### 8. Debug 第一步(Plan/Chat 先分析,不要改)

```
我的 python run.py 輸出中,risk_level 不是 low/medium/high,
而是輸出了其他文字(例如「嚴重」)。

請先分析:
1. 這個問題可能是什麼意思
2. 可能原因有哪些
3. 可能相關檔案
4. 你會怎麼確認問題
5. 建議修正方式

先不要修改任何檔案。
```

### 9. Debug 第二步(放行修正)

```
同意,請照你的分析修正。
請只修改必要檔案(run.py)。

修完後請告訴我:改了哪裡、為什麼這樣改、我要怎麼確認修好了。
```

固定驗收:

```bash
python run.py
git diff
```

---

## 課 4 · Git、Skills、MCP

### 10. AI 走鐘拉回來

```
請回到原本任務。
這次只處理〔某件事〕。
不要修改其他區塊。
```

### 11. Prompt Debt 整理

```
請先整理目前最新狀態,不要修改。
請列出:
1. 已完成哪些功能
2. 仍要遵守哪些限制
3. 下一步只處理什麼
4. 哪些事情不要做
```

### 12. Regression 檢查

```
請列出這次修改後需要回歸檢查的項目。
請包含:
1. 新修改要檢查什麼
2. 原本功能要檢查什麼
3. 哪些地方最容易被影響
```

### 13. Claude Code / Codex 對照任務

```
請閱讀目前專案,不要修改。
請找出首頁標語在哪裡,以及資料輸出格式在哪裡。
```

固定操作:
- Claude Code 用 Plan mode 跑一次。
- Codex 用 Chat 模式跑一次。

固定驗收:

| 任務 | Claude Code | Codex |
|---|---|---|
| 讀專案 | ☐ | ☐ |
| 找檔案 | ☐ | ☐ |
| Plan / 諮詢 | ☐ | ☐ |
| 修改 | ☐ | ☐ |
| 驗收(git diff) | ☐ | ☐ |

### 14. Skills / MCP 實作觀念

固定說法:
- Skills:把固定 SOP 寫成 AI 規則。
- MCP:讓 AI 接外部工具,但要注意它能讀什麼、能不能寫、會不會碰正式資料。

免費優先示範:
- Chrome DevTools MCP:讓 AI 看瀏覽器與前端錯誤。
- Context7 MCP:讓 AI 查套件官方文件。
- GitHub MCP / MCP reference servers:讓 AI 讀 issue、檔案、範例工具。

Figma MCP 只做帳號型工具示例,不列為免費必做。
