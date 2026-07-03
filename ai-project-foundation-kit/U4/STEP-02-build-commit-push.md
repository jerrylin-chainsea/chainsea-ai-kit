# U4 · STEP 02 ｜ build、commit、push：這才叫交付

## 1. 交付前四問（背起來，每次交付都問）

```
1. 畫面 / 輸出對了嗎？
2. git diff 只有預期變更嗎？
3. build 過了嗎？
4. commit 訊息是否說得出「改了什麼、為什麼」？
```

## 2. 逐格打勾

**第 1 問：畫面／輸出**

Dashboard 六步卡走一輪、`node line-lab/sendLineAlert.js` 是 mock 成功。

**第 2 問：diff**

```bash
git status
git diff
git diff -- web-lab/package.json
```

只有預期變更；package.json 那條**沒有輸出**。

**第 3 問：build**

```bash
cd web-lab
npm run build
cd ..
```

**你應該看到**：`✓ built in …`。紅字就是沒過，回 STEP-01 讓 reviewer 幫你定位。

**第 4 問：commit 訊息**

訊息格式 = 動詞 + 對象 + 為什麼。可以請 AI 代擬（`/commit-msg`），但你要看得懂再用。

```bash
git add .
git commit -m "完成營運異常通知交付：Dashboard 審核流程 + 合約防線驗證"
```

## 3. push（有遠端的班級才做）

```bash
git remote -v        # 先確認遠端在哪
git push
```

沒有遠端 → 跳過，commit 完成即算交付（老師會說明你們班的做法）。

## 這一步的完成定義

- ✅ 四問都答得出「是」
- ✅ 一筆 commit，訊息講得出改了什麼、為什麼

> **收束一句**：看到 diff 乾淨、build 通過、commit 成功，這次才叫交付。

→ 下一步：`STEP-03-skillize.md`，把這套流程變成一個指令。
