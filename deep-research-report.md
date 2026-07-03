# M11 課程教材深度研究與重構建議

## 整體評價

我這次評估的基礎，是逐份檢查 `m11-materials` 內的教案、checklists、final acceptance、prompt 卡、U3 講義，以及 `slides/slides/u11-c1` 到 `u11-c4` 的 slide source。整體來看，這套 M11/U11 教材已經有很好的「導師控場」骨架：它明確強調固定 prompt、固定操作、固定驗收、固定保底，而且在教案中反覆強調「人是主管，AI 是工讀生」，這個方向是對的。citeturn3view0turn6view0turn27view0turn27view1turn27view2turn27view3

目前最大問題不是內容不夠，而是**主線不一致**。`M11-16h-實作教案.md` 的 C3 還是「`run.py` 四欄輸出 + ReAct debug」版本，`final-acceptance.md` 也沿用這個成果定義；但 `checklists.md`、`prompts.md`、`u11-c3-line-oa-lab.md` 與 U3 slide 已經改成「LINE OA 營運異常通知系統」。這會讓老師、學生、投影片、講義、驗收標準各自指向不同的「完成物」。citeturn7view0turn11view0turn10view0turn11view1turn14view0turn25view0

第二個核心問題是**工具導向仍然強於專案導向**。U1 大量篇幅放在 VS Code、Git/GitHub、Claude Code、Codex 四工具認識；U4 則回到 Skills、MCP、slash commands 等工具與抽象觀念。這些都重要，但放在零基礎學習路徑裡，會稀釋學生對「我正在做出一個可驗收的成果」的感受。citeturn21view0turn29view0turn34view0turn34view1

第三個問題是**你期待的流程沒有被做成一條完整主線**。你要求的流程是「資料進來 → 檢查資料 → 定義資料合約 → AI 串接功能 → Dashboard 呈現 → ReAct 修錯 → reviewer 驗收 → build / commit / push」，但目前 Dashboard 只存在於 U3 的「加做講義」，不是 C3 主線；reviewer/build 則主要放在 C2 或附加段落，沒有和同一個作品被串成完整交付流程。citeturn25view0turn14view2turn29view5turn32view2

第四個問題是**對零基礎學員來說，U3 的操作負擔過重，而且過度依賴終端機**。目前 U3 主講義與加做講義都反覆要求 `cd`、`cat`、`node ...`、環境變數、`git diff`、`git commit`、`git push`；如果學生還沒建立「資料合約—通知內容—人工審核」的心智模型，就很容易把注意力耗在指令本身，而不是產品流程。citeturn13view0turn14view0turn15view0turn15view1turn13view2

不過，這份教材也有值得保留的亮點。它已經具備很多成熟課程才會出現的好元素：允許修改檔案清單、禁止動 `package.json`、mock 與真送分離、Human-in-the-loop、ReAct debug、reviewer 檢查、Git diff 驗收、以及針對 LINE token 與 targetId 的安全提醒。這些都是非常好的「AI 驅動開發」課程基底。citeturn32view0turn32view1turn10view0turn14view0turn25view0

如果只用一句話總結：**M11 現在不是缺內容，而是缺一條一致、可演示、可驗收、可讓學生持續獲得成就感的單一專案主線。** 只要把版本收斂到同一個完成物，並把 Dashboard 從加做拉回主線，再把 U3 的操作改成「先按按鈕、後看必要指令」，整套教材會明顯更強。citeturn6view0turn10view0turn14view2turn36view0

## 優化重點總表

| 問題位置 | 目前問題 | 為什麼影響學習 | 具體優化建議 | 優先級 |
|---|---|---|---|---|
| 教案總體 | C3 在教案與最終驗收仍是 `run.py` 四欄輸出，但 checklist、prompt、講義與投影片已改成 LINE OA 通知，造成同一模組有兩條不同主線。 citeturn7view0turn11view0turn10view0turn11view1turn14view0turn25view0 | 學生不知道自己到底要交「四欄資料檢查器」還是「LINE OA 通知器」，老師也難以一致帶課。 | 先選定唯一完成物。建議統一為「營運異常通知 Dashboard + LINE mock notifier」。然後全面重寫教案、prompt、checklist、final acceptance 到同一版本。 | 高 |
| 課程主線 | repo 整體課程主線文件強調「養大你自己的 AI 小店」，但 M11/U11 實際內容已轉成工具課與 LINE OA 整合，主題感不一致。 citeturn36view0turn21view0turn25view0 | 學生難以理解這一堂在整體學習路徑中的位置，也削弱成果感與作品感。 | 二選一：要嘛把 M11 拉回「小店資料驅動功能」；要嘛明確宣布 M11 是「AI 驅動開發流程模組」，並把小店只當載體，不再用另一條敘事。 | 高 |
| U1 | U1 明顯偏工具導覽，頁面重心在 VS Code、Git/GitHub、Claude Code、Codex 的認識，而不是同一個專案任務逐步落地。 citeturn21view0 | 零基礎學生會以為這堂是工具介紹課，不是專案交付課。 | U1 改成「先看到最終成果，再拆開工具用途」。第一頁就先秀最終 Dashboard / 通知畫面，然後每個工具都只解釋它如何幫你完成這個作品。 | 高 |
| 你要求的資料→Dashboard 主線 | C3 主線流程是 `report.json → payload → human review → mock → LINE 真送 → ReAct → git`，Dashboard 只在加做講義中出現，而且還建議把資料手動寫進 `App.jsx` 常數。 citeturn25view0turn14view2 | Dashboard 被降成支線，資料合約也被複製成兩份，學生很難建立「同一份資料驅動前後端」的理解。 | 將 Dashboard 拉回核心主線，且禁止手寫第二份資料。畫面應直接讀同一份 `report.json` 或由 starter 提供單一資料來源。 | 高 |
| U3 操作方式 | U3 主講義與加做講義大量依賴 `cd`、`cat`、`node`、環境變數、`git` 指令，命令密度高。 citeturn13view0turn14view0turn15view0turn15view1turn13view2 | 初學者會把認知負荷花在終端機，不是花在 AI workflow 與驗收概念。 | 保留必要的三個指令：啟動、build、commit。其餘改成網頁按鈕：載入範例資料、檢查資料、預覽 payload、模擬送出、顯示 blocker。另附 `start-m11.bat` / `start-m11.command` 一鍵啟動。 | 高 |
| Prompt / checklist 資源 | 教案提到 `prompts/01-06` 與各堂固定 prompt，但公開的 `prompts.md` 實際只明確整理了 C3 的四張 LINE OA prompt；`checklists.md` 也幾乎只覆蓋 C3。 citeturn7view0turn8view0turn10view0turn11view1 | 學生在 C1/C2/C4 沒有同等級的「可複製 prompt 卡」與「可對照驗收單」，流程會鬆掉。 | 每一單元都補齊五件事：學習目標、固定操作、Prompt 卡、驗收標準、Pitfall 保底。建議拆成獨立 md，而不是只放在總教案內。 | 高 |
| U4 | U4 仍可看到未整理的占位頁與結構未收斂跡象，例如 `SkillReal` 為空、段落編號與「段 4 / 結業 / v2 追加頁」混雜。 citeturn35view2turn33view1turn33view4turn33view5 | 最後一堂若不完整，會直接影響「收尾、交付、交接」的核心印象。 | 先凍結 U4 範圍：只保留 drift/debt/regression、reviewer/build/commit/push、Skill 化；MCP 放到附錄或 demo，不要和主課混在一起。 | 高 |
| C2 抽象度 | C2 很完整地講 AGENTS.md、CLAUDE.md、workflow、sub-agent、reviewer，但對零基礎者仍偏抽象。 citeturn29view0turn29view1turn29view2turn30view3turn30view4 | 學生若還沒感受到「為什麼會亂改」，會把守則檔當成又一個要背的新名詞。 | 在 C2 前半加一個「AI 故意超界改檔」示範，讓學生先痛一次，再引出 AGENTS/CLAUDE 的必要性。 | 中 |
| 成果感 | final acceptance 說學生最後應該有首頁作品、一次 AI 小範圍改檔、資料四欄輸出、一次 ReAct 修錯、一次 commit；但這些完成物目前分散在不同版本的教材中。 citeturn11view0 | 學生雖然做了很多事，卻不一定能清楚說出「我完成了一個什麼作品」。 | 將繳交物收斂成 3 件：一個可互動 Dashboard、一份 payload preview、一次 reviewer+build+commit 的交付截圖。 | 中 |
| 視覺呈現 | 投影片已經有 Prompt、Checkpoint、Pitfall、Flow 等視覺語法，但「資料流」與「Done 定義」還不夠一眼看懂。 citeturn24view0turn32view0turn34view1 | 零基礎學生容易記住單張頁面，不容易記住跨頁流程。 | 在每堂首頁固定放一張「你現在在哪條流水線」圖，並在每段右下角固定顯示 DoD：`畫面 / 輸出 / diff / build`。 | 中 |

## 段落重構建議

### 建議改成單一專案主線

我建議把 M11 的主線重構成一個**單一、連續、可展示的作品**：

**「用 AI 完成一個營運異常 Dashboard，並在通過人工審核後產生 LINE 通知 payload；最後用 reviewer、build、commit、push 完成交付。」**

這樣會比目前的「U1 工具導覽 → U2 守則與 workflow → U3 LINE OA → U4 Skills/MCP」更連續，因為學生每堂都知道自己是在推進同一個成品，而不是換不同題目。這也更貼近你要求的主線：「資料進來 → 檢查資料 → 定義資料合約 → AI 串接功能 → Dashboard 呈現 → ReAct 修錯 → reviewer 驗收 → build / commit / push」。目前教材裡最接近這條線的素材其實都已經分散存在，只是還沒被串起來。citeturn25view0turn14view2turn32view2turn33view5

### 建議的課程順序

**第一堂：看得到成果，先把專案跑起來**  
目標不是認工具，而是讓學生在 30 分鐘內看到「營運異常 Dashboard」雛形，知道之後所有動作都在改這個作品。這堂只保留最必要的 VS Code、資料夾、啟動專案、改一個文案、第一次 commit。U1 目前強在工具鋪墊，但要把工具說明壓縮成「這個工具現在幫我做什麼」，而不是「這工具還能做什麼」。citeturn21view0turn7view0

**第二堂：建立資料合約與 AI 工作流程**  
這堂先讓學生看到 `report.json` 或 `data.js` 是「資料合約」，再引入 planner / implementer / reviewer 的角色。AGENTS.md、CLAUDE.md、allowed files、Plan mode，都應該服務於同一件事：**確保 AI 改在正確地方，並且改完能驗收。** 目前 C2 已經有很成熟的 workflow 與 reviewer 架構，這些要保留，但要用更少抽象名詞、更多「錯誤示範 → 為何要立規則」的方式帶入。citeturn29view0turn29view1turn29view2turn32view0turn32view2

**第三堂：真正做功能，而且優先用畫面按鈕完成**  
這堂不要再把重心放在 LINE 官方後台設定與多次 `node` 指令，而是改成：  
資料載入 → 資料檢查 → 顯示風險卡片 → 顯示 payload preview → 勾選人工審核 checkbox → 顯示 mock send 結果。  
真的送 LINE 可以保留老師示範，或做進階組支線，但主線不應依賴學生自行搞定 Business ID、OA、Messaging API、token、targetId。這些真實世界知識值得保留，但應退到「老師示範」或「進階補充」。citeturn13view0turn14view0turn25view0turn14view2

**第四堂：修錯、驗收、交付、固化成 SOP**  
這堂只做四件事：ReAct 修指定錯誤、reviewer 檢查、build/commit/push、把流程寫成 Skill。MCP 應改成示範附錄，不要和主流程爭時間。U4 目前其實已經有很好的 drift/debt/regression 三句拉回和 Skill/MCP 教具，但整體尚未收斂，容易讓最後一堂變成觀念散點。citeturn34view0turn34view1turn33view5turn35view2

### 每堂應達成的學習成果

第一堂結束時，學生應做到：**專案能跑、知道作品目標、改過一個可見文案、做過第一次 Git 存檔。** 這比「講完四個工具」更能建立安全感。citeturn7view0turn21view0

第二堂結束時，學生應做到：**看得懂資料合約、能用 planner 先出計畫、能用 allowed files 和 reviewer 思維防 AI 超界。** 這才是「AI 做了，不算完成；你驗收過，才算完成」的真正起點。citeturn32view0turn32view2turn30view3turn30view4

第三堂結束時，學生應做到：**用 AI 產出功能、在畫面中看見 Dashboard 與 payload preview、理解 mock 與真送的差別、知道為什麼要人工審核。** 這會比目前以終端機輸出為主更有展示感。citeturn24view0turn25view0turn14view2

第四堂結束時，學生應做到：**能用 ReAct 修錯、看 reviewer 回報、跑 build、做 commit/push、把這套流程寫成可重用 SOP。** 這時再收斂到「你不是只會問 AI，你是會管理 AI 做事」。這句目前 U4 已經說得很好，應該保留，並把它變成整門課最終頁。citeturn25view0turn32view2turn34view1turn33view5

## 應保留、應刪除、應新增內容

### 應保留的內容

應該保留的第一類，是**所有與護欄、驗收、最小修改有關的東西**。像 C2 的 allowed files、Plan mode、五題人審計畫、第二輪變更仍走同一流程、reviewer prompt、救援 prompt、`git diff -- package.json` 這種檢查，都非常好。這些內容真正把 AI 課程從「提示工程課」拉到「交付流程課」。citeturn32view0turn32view1turn32view2

第二類要保留的是**U3 對外部平台整合的真實世界觀念**。例如 LINE OA、Messaging API channel、token、targetId、`.env` 不可 commit、前端不能放 token、mock 與真送分離，這些提醒非常正確，而且很有企業實戰感。只是它們應該從「主操作負擔」改成「主線中的安全守則」。citeturn13view0turn14view0turn10view0

第三類要保留的是**U4 的三個 AI 失控症狀**：Context Drift、Prompt Debt、Regression，以及各自的一句拉回。這是非常好的教學資產，因為學生上完課後，最常真的用到的，可能不是某一個工具名稱，而是這三句「把 AI 拉回正軌」的話。citeturn34view0turn33view1

### 應刪除或大幅縮短的內容

首先應刪減的是**U1 過長的工具導覽比例**。工具不是不能講，而是不要先講很久再開始做作品。現在 U1 的結構更像一堂「工具認識與差異」課，容易讓零基礎學生以為自己要先把工具都懂透才能開始。建議每個工具只留下「今天這一頁你會用到的那一個功能」。citeturn21view0

第二個要縮短的是**U3 對學生自行完成 LINE 官方設定的要求**。Business ID、Official Account、Messaging API、token、userId 這些步驟很真實，但對零基礎班級來說，最容易把一堂專案課變成帳號與權限排障課。這些應改成「老師示範」或「進階補充」，而不是全班主線完成條件。citeturn13view0turn14view0turn10view0

第三個要移出主線的是**U4 中過早展開的 MCP 安裝細節**。MCP 很重要，但它更像「把流程工具化」的進階延伸；放在最後一堂主線裡，會跟真正關鍵的 reviewer / build / commit / push 爭時間。保留概念頁與示範即可，安裝細節放附錄。citeturn34view1turn33view3

### 應新增的內容

最需要新增的是**一張整門課共用的 DoD 定義頁**。建議直接寫成大字卡，並在每堂封面與每段收尾重複出現：

> AI 做出來不算完成  
> 通過驗收才算完成  
> 驗收包含：畫面／輸出／diff／build／human review

目前這個精神散落在教案與驗收頁中，但沒有被做成最醒目的課程口號。把它視覺化後，學生會更容易帶走。教案本身已經強調「可驗收」「看 diff」「人是主管」，非常適合升級成整門課的標語。citeturn6view0turn9view0

第二個要新增的是**每堂獨立的 START_HERE.md、PROMPT_CARD.md、ACCEPTANCE.md、PITFALL.md**。因為你實際教學方式是發一個 rar 給學生，裡面已有程式碼與 markdown 步驟，所以最自然的做法不是把所有資訊都塞回投影片，而是每單元都配齊四份學生會直接打開的 md 文件。現在這種結構只在部分材料中成形，還不完整。citeturn3view0turn10view0turn11view1

第三個要新增的是**Button-first 的 U3 操作層**。你已經明確希望學員「是真正按網頁上的按鈕，而不是一直打指令」，那就應該在 starter 裡直接提供：
- `載入 report.json 範例`
- `檢查資料合約`
- `生成 payload preview`
- `勾選人工審核`
- `顯示 mock send 結果`
- `複製真送指令`
- `顯示 reviewer checklist`

這樣學生會先理解流程，再在最後接觸少量必要指令。現在 Dashboard 講義已經有 checkbox、payload preview、真送指令顯示條件，表示這個方向其實已經有素材，只差把它升為核心。citeturn14view2

## Prompt 與實作任務優化

### Planner prompt 改寫建議

目前 C2 的 planner prompt 已經比一般課程嚴謹很多，因為它明確限制可修改檔案，並要求輸出修改檔案、修改內容、驗收方式與風險。這一版應保留其骨架。citeturn32view0

但我建議把格式再固定成**機械式回覆模板**，減少學生判讀成本。可以改成下面這版：

```text
你現在扮演 planner。
先不要改檔，也不要執行寫入動作。

請先閱讀：
- AGENTS.md
- CLAUDE.md
- report.json
- Dashboard 相關檔案
- 通知功能相關檔案

任務：
我要完成「營運異常 Dashboard + LINE mock 通知」中的下一步：<這堂指定任務>

限制：
1. 只能修改：<允許檔案清單>
2. 不要新增套件
3. 不要改 package.json
4. 不要重構
5. 如果需要新增檔案，先說明原因，不可直接做

請只用以下格式回答：
A. 你準備修改的檔案
B. 每個檔案各改什麼
C. 資料合約會如何被使用
D. 驗收方式
E. 可能風險
F. 哪一步需要人類拍板
```

這樣比現在的 prompt 更接近「課堂 SOP」，也更容易直接做成 PromptCard。它會把資料合約與 human approval 一起拉進來，而不只是「會改哪些檔案」。目前教材最缺的，正是把資料、畫面、通知、驗收放進同一個 planner 回答模板。citeturn32view0turn25view0

### Implementer prompt 改寫建議

現在 implementer prompt 的優點是短，缺點是**沒有要求 AI 在完成後用固定格式回報「做了什麼 + 怎麼驗收」**。對零基礎學生來說，AI 回覆越自由，越難對答案。citeturn32view1

建議改成：

```text
你現在扮演 implementer。
請依照「剛剛已核准的計畫」實作。

限制：
1. 只能修改：<允許檔案清單>
2. 不要新增套件
3. 不要改 package.json
4. 不要重構
5. 如果超出原計畫，先停下來回報，不可直接修改

完成後請固定回報：
A. 實際修改的檔案
B. 每個檔案改了什麼
C. 哪裡對應到資料合約
D. 我現在要怎麼手動驗收
E. 哪些地方你沒有改
```

學生現在很需要的不是「AI 會做」，而是「AI 做完後，我知道下一步要看哪裡」。這版 prompt 正好補那一塊。citeturn32view1

### ReAct debug prompt 改寫建議

現有的 ReAct prompt 已經很好，因為它強制先分析、不改檔，並要求 Reason / Act / Observe / Verify，這是值得保留的。citeturn11view1turn25view0

但如果要更適合教學，我建議再加兩欄：**Expected** 與 **Minimal Patch**。改成：

```text
你現在扮演 debugger。
先不要改檔。

目前問題：
<固定錯誤描述>

請用以下格式回答：
Expected：正確行為應該是什麼
Actual：目前實際發生什麼
Reason：你推測的原因
Act：你要查看哪些檔案 / 執行哪些指令
Observe：你預期看到什麼證據
Minimal Patch：你建議的最小修改
Verify：修正後的驗收方式
Blocker：哪裡需要人類決定
```

因為零基礎學生最容易混淆的，是「你是在修 bug，還是在重新設計需求」。加上 `Expected / Actual / Minimal Patch` 之後，會更容易訓練出「只修規格違反，不順手重構」的習慣。citeturn25view0turn15view0

### Reviewer prompt 改寫建議

目前 reviewer prompt 很成熟，已經要求檢查允許範圍、`package.json`、過度重構與人工檢查。這個方向完全正確。citeturn32view2

我建議把 reviewer prompt 改成**Pass / Block 格式**，學生更容易知道能不能進下一步：

```text
你現在扮演 reviewer。
請根據 AGENTS.md、CLAUDE.md、目前需求與 git diff 做檢查。
不要改檔。

請固定輸出：
Verdict：PASS 或 BLOCK
Changed Files：實際改了哪些檔
Scope Check：是否超出允許範圍
Package Check：是否修改 package.json / 新增套件
Contract Check：是否符合資料合約
UI Check：畫面或輸出是否符合需求
Regression Risk：最可能壞掉的地方
Human Review：人還要親自看什麼
Next Step：如果 PASS，下一步做什麼；如果 BLOCK，先修什麼
```

這會比現在的開放式 reviewer 回答更容易拿來教學，也更容易做成驗收頁。citeturn32view2

### Git 驗收流程改寫建議

現在教材對 Git 的觀念其實很完整，從 `git status`、`git diff`、`git add .`、`git commit` 到 remote 檢查與 push 都有。citeturn7view0turn29view6turn33view2

但用課堂語言來看，建議把最後驗收簡化成固定四格：

```text
交付前四問
1. 畫面 / 輸出對了嗎？
2. git diff 只有預期變更嗎？
3. build 過了嗎？
4. commit 訊息是否說得出「改了什麼、為什麼」？
```

並加一個自建 `/ship-check` prompt：

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

這會讓「Git 驗收」變成學生真正會複用的動作，而不是一組只在課堂上背過的命令。citeturn9view0turn32view2turn34view0

## 學生體驗優化

### 學生最可能卡住的地方

第一個卡點，是**不知道自己現在到底在做產品，還是在學工具**。這個問題在 U1 最明顯。解法不是再加工具解釋，而是在每堂第一頁固定放：

- 這堂完成物是什麼
- 到這堂結束你會交出什麼
- 你現在在整條流程的哪一段

目前教材已經有「四堂總覽」與多張流程頁，但它們還沒有被收斂成學生一眼就能記住的作品視角。citeturn7view0turn21view0turn33view5

第二個卡點，是**U3 的 LINE 帳號與權限設定太容易讓人脫離學習主線**。新手常常會卡在「我沒有 OA」「我不知道 targetId 是什麼」「為什麼 token 不 work」，然後整堂課節奏就被帳號排障吃掉。教材本身也已經預先設計了保底方案，表示這的確是已知風險。citeturn10view0turn13view0turn15view0turn25view0

第三個卡點，是**學生不敢按 AI 的同意，或反過來亂按同意**。C2 的 Plan review 與 watchlist 很好，但這些內容更適合再做成一張「現在可以按同意嗎？」的防呆頁，固定問四題：  
可修改檔案對嗎？有無新套件？有無改 package？有無重構傾向？  
這樣學生不需要理解所有程式，也能知道自己有沒有失守。citeturn32view0turn32view1

### 建議新增的防呆頁

我會建議你額外補四張固定防呆頁，而且每一堂都沿用同樣版型。

**第一張：現在這一步的完成定義**  
例如：

- 我現在應該看到什麼畫面
- 我現在應該看到什麼輸出
- 什麼狀況不可以往下
- 這一步不需要懂什麼

這對零基礎學生非常重要，因為很多人不是不會做，而是不知道「這樣算不算做對」。目前教案裡其實已經大量寫了「預期結果／驗收／保底」，只是還沒抽成學生視角的單頁卡。citeturn6view0turn14view0turn14view2

**第二張：今天只允許哪幾個檔案被改**  
U2 已經把這件事講得很好。建議把它做成投影片固定右上角小框，或 markdown 頁首固定區塊。citeturn30view3turn32view0

**第三張：AI 做完後先不要高興，先檢查**  
建議做成四個大按鈕或四格卡：
- 看畫面
- 看輸出
- 看 diff
- 看 build

這張會直接把「AI 做出來不算完成，通過驗收才算完成」變成操作習慣。citeturn6view0turn25view0turn34view0

**第四張：今天先求 mock 成功，不求真送成功**  
這張要放在 U3 很前面。因為學生只要知道：
- payload 產得出來
- 人工審核有做
- 沒有 `--confirm` 不會真送
- token 沒外流

就已經完成這堂課 80% 的學習目標。  
真送只是進階組 / 老師示範。這個訊息愈早講，課堂壓力愈小。citeturn10view0turn25view0

### 建議導師話術

你現在的教材很適合搭配一套固定話術。下面這幾句可以直接寫進導師 cue card：

「現在不是在做功能，是在做**第一輪驗收**。AI 先提方案，你先不要急著同意。」這句最適合 C2 planner 階段。citeturn32view0

「今天先看到 `[mock]` 才算對，不是看到 LINE 手機真的收到才算對。」這句最適合 U3 開場。citeturn14view0turn25view0

「你現在不用會寫，你只要會看：它要改哪些檔、會不會越界、驗收怎麼做。」這句很適合對零基礎學生解除壓力。C2 本來就已經在訓練這件事。citeturn32view0turn30view3

「看到 diff 乾淨、build 通過、commit 成功，這次才叫交付。」這句應該成為 U4 收束話術。citeturn29view6turn34view1

## 最終建議版本

### 建議的新 M11 主線

我認為更好的 M11 主線應該是：

**用 AI 完成一個營運異常通知專案：從資料合約出發，做出 Dashboard 預覽、LINE mock payload、ReAct 修錯，最後經過 reviewer、build、commit、push 完成交付。**  

這條線比現在更好，因為它把你在意的所有元素收斂成一個連續作品，也把「AI 做出來不算完成，通過驗收才算完成」變成可反覆實踐的流程，而不是散落在不同單元的口號。citeturn6view0turn25view0turn32view2turn33view5

### 建議的頁面大綱

**U1 專案啟動與成果預覽**  
頁面大綱建議如下：
- 封面：今天最後會做出什麼
- 最終成果 demo：Dashboard + payload preview
- 主線流程圖：資料 → 檢查 → 畫面 → mock → reviewer → build → commit
- 專案檔案地圖：只看今天會碰的檔
- 一鍵啟動說明：雙擊 `start-m11` 或只打一個 `npm run start:m11`
- 第一次修改：改店名 / 改標題 / 改資料標題
- 第一次 Git 快照
- Checkpoint：畫面跑起來、改動可見、commit 成功

這樣 U1 還是會教 VS Code 與 Git，但所有內容都綁在作品上。現在 U1 最需要的不是更多工具説明，而是把工具都變成產品推進器。citeturn21view0

**U2 資料合約與 AI 工作流**  
頁面大綱建議如下：
- `report.json` 是什麼
- 資料合約 vs 自由作文
- risk_level 允許值
- AGENTS.md / CLAUDE.md 的角色
- 今日 workflow：planner → human review → implementer → reviewer
- PromptCard：planner
- Human review checklist
- PromptCard：implementer
- 畫面驗收卡
- 第二輪需求變更
- PromptCard：planner 第二輪
- PromptCard：implementer 第二輪
- reviewer prompt
- diff / build / package check

這樣 C2 會從抽象 workflow 變成「用資料把 AI 控制在可交付範圍內」，可學性更高。citeturn29view0turn29view1turn29view2turn32view0turn32view2

**U3 以按鈕為主的功能實作**  
這一單元我會強烈建議改成「以網頁操作為主，指令為輔」：

- 頁首成果圖：營運異常面板
- Button 1：載入範例 report
- Button 2：檢查資料合約
- Button 3：生成 LINE payload 預覽
- Button 4：勾選人工審核
- Button 5：顯示 mock send 結果
- Checkbox 未勾時：不顯示真送指令
- Checkbox 勾選時：顯示複製用真送指令
- PromptCard：Human-in-the-loop 檢查
- PromptCard：ReAct debug
- 老師示範：真送 LINE
- 學生驗收：payload / blocker / checkbox / console / network
- build / diff / commit

這樣做之後，學生大多數時間都在看同一個畫面、點同一個流程，而不是在終端機裡切上下文。現有的 Dashboard 加做講義已經提供了很好的雛形，只是要把它從支線升成主線，並且不要再允許把資料手寫進前端常數。citeturn14view2turn25view0

**U4 修錯、驗收、交付、SOP 化**  
建議大綱：
- 封面：最後一堂只做交付
- 三個 AI 毛病：Drift / Debt / Regression
- 一句話拉回卡
- ReAct 修錯實作
- reviewer 回報怎麼看
- 救援 prompt
- build 通過才算過
- 四格交付檢查
- commit / push
- Skill 是什麼
- 把這次流程寫成 `/ship-check` 與 `/debug-contract`
- 結業頁：你不是會問 AI，你是會管理 AI 做事

U4 的 MCP 可以保留一頁概念與老師示範，但不要占主線時間。以你目前教材成熟度來看，U4 的真正重點應該是**把課堂流程封裝成能複用的工作方式**，而不是再開新的工具知識分支。citeturn34view0turn34view1turn33view5turn35view2

### 適合 rar 教學包的最終結構

因為你實際教學是「導師丟一份 rar 給學生」，我建議最終資料夾直接長成這樣：

```text
M11/
  START-HERE.md
  QUICK-CHECK.png
  start-m11.bat
  start-m11.command

  U1/
    STEP-01.md
    STEP-02.md
    PROMPT-CARD.md
    ACCEPTANCE.md
    PITFALL.md

  U2/
    STEP-01-data-contract.md
    STEP-02-workflow.md
    PROMPT-CARD.md
    ACCEPTANCE.md
    PITFALL.md

  U3/
    STEP-01-dashboard-buttons.md
    STEP-02-hitl-review.md
    STEP-03-react-debug.md
    PROMPT-CARD.md
    ACCEPTANCE.md
    PITFALL.md

  U4/
    STEP-01-reviewer.md
    STEP-02-build-commit-push.md
    STEP-03-skillize.md
    PROMPT-CARD.md
    ACCEPTANCE.md
    PITFALL.md
```

這會讓學生每一堂都打開同樣類型的檔案，不必在不同命名方式與不同文件層級之間切換。現在教材的內容其實已經夠豐富，真正需要的是把它變成**穩定、固定、低摩擦的學習包裝**。citeturn3view0turn5view0turn10view0turn11view1

### 最後的收斂判斷

如果你要我用課程設計顧問的角度下結論，我會說：

這份 M11 教材已經有很強的骨架，尤其是 guardrails、Prompt 卡、mock、HITL、ReAct、reviewer、Git 驗收這些部分；但它現在最需要的，不是再多加內容，而是**統一版本、收斂主線、把 Dashboard 從加做升成主線、把 U3 改成 button-first、把 U4 先修完再上課**。一旦這五件事做好，M11 就會從「很多好點子的教材」變成「一條非常清楚、很適合零基礎、成果又很能展示的 AI 驅動程式開發課」。citeturn6view0turn10view0turn14view2turn25view0turn35view2
---

## 實作狀態（2026-07-03）

本報告的建議已全數落地，重點對照：

| 建議 | 實作 |
|---|---|
| Dashboard 升主線、單一資料來源 | `web-lab/src/Dashboard.jsx` + `reportContract.js`（與 `sendLineAlert.js` 雙胞胎、錯誤訊息逐字相同），直接 import `data-lab/report.json`，七個互動全數內建；HMR 讓「改壞 risk_level → 擋牌自動出現」成為 ReAct 練習本體。已實測（dev/build/瀏覽器走查/Network 零請求）。 |
| Button-first U3 | 學生只剩三類指令（啟動/build/commit + 三行對照）；`start-m11.bat` / `start-m11.command` 一鍵啟動（已實測）。LINE 官方後台設定退為老師示範／進階組附錄。 |
| 統一版本 | 教案 C3、`final-acceptance.md`、`checklists.md`、`prompts.md` 全部收斂到「營運異常 Dashboard + LINE mock notifier」；`run.py` 舊主線描述已清除（含 kit 內 skills/commands）。 |
| rar 教學包四件套 | `ai-project-foundation-kit/START-HERE.md` + `U1/`–`U4/`（STEP-* / PROMPT-CARD / ACCEPTANCE / PITFALL）+ 新增 `AGENTS.md` / `CLAUDE.md` 守則檔。 |
| Prompt 模板改版 | planner A–F、implementer A–E、ReAct（Expected/Minimal Patch）、reviewer Pass/Block、`/ship-check` ＋交付前四問，落於 `prompts/02–07` 與各堂 PROMPT-CARD。 |
| DoD 口號 | 「AI 做出來不算完成，通過驗收才算完成：畫面/輸出/diff/build/human review」進入 START-HERE、README、教案、四個 deck 開場與各堂 ACCEPTANCE。 |
| Slides 對齊 | c1 成果導向開場（終點頁＋主線 DoD 頁）；c2 加「先痛一次」示範頁＋新模板；c3 全面重排 button-first；c4 收斂為防走鐘 → 交付（reviewer＋四問）→ Skill 化(/ship-check) → MCP 概念，安裝細節移附錄，未導出草稿頁已併入或歸附錄。`npm run build` 通過。 |
| MCP 第三台 | 依 2026-07-03 決定：Filesystem/GitHub 換成 **codebase-memory-mcp**（全本地、免 API key、安裝腳本自動設定 agent），教案附錄 C3、c4 slides、`.mcp.json` 已同步。 |
