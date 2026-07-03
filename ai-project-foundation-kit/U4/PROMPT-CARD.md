# U4 · Prompt 卡

## 卡 1 ｜ reviewer（Pass / Block 格式）

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

**驗收**：第一行是 Verdict；BLOCK 時 Next Step 講得出先修什麼。

## 卡 2 ｜ /ship-check（交付前檢查，可建成自訂指令）

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

## 卡 3 ｜ 三句拉回（AI 走鐘時用）

```text
（Context Drift 越改越偏）
請回到原本任務，這次只處理 X，其他不要改。

（Prompt Debt 越補越亂）
請先整理目前最新狀態、不要改：已完成什麼、要遵守什麼、下一步只做什麼。

（Regression 改 A 壞 B）
請列出這次修改後需要回歸檢查的項目。
```

## 卡 4 ｜ 救援（reviewer 發現越界後）

```text
reviewer 回報你超出允許範圍。
請不要再修改。
請列出：
1. 超出範圍的檔案
2. 為什麼會動到它
3. 還原方案（哪些檔要 git restore）
等我決定後才動作。
```

> reviewer 完整說明見 `prompts/07-reviewer.md`；交付四問與 Git 小抄見 `prompts/06-git-and-slash-commands.md`。
