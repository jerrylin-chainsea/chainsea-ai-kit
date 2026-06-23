# M13 ｜ AI 個人品牌發布站（Astro starter）

用 AI agent 在 IDE 裡做出一個個人 Blog，公開發布到網路（GitHub Pages）。

> 這輩子在這個專案只要看三個地方：**檔案樹**、**對話框**（跟 AI 講話）、**終端機**。

## 怎麼跑（本機預覽）

```bash
npm install      # 第一次；之後請把產生的 package-lock.json 一起 commit
npm run dev      # 本機預覽，打開終端機顯示的網址
```

看到首頁 + 一篇文章就成功了。

## ⚠️ 部署到 GitHub Pages 前，務必確認 `base`（最常卡關的地方）

打開 `astro.config.mjs`：

- repo 名稱是 `<你的帳號>.github.io` → `base: '/'`（不用改）
- repo 名稱是其他（例如 `my-blog`）→ **把 `base` 改成 `'/my-blog/'`**

> 沒改的話：部署後網站樣式會壞掉、文章連結會 404。記得把 `<repo名>` 換成你的。

## 公開發布三步（第 2 次課）

1. `commit`：把改動「封裝記錄」起來。
2. `push`：送到 GitHub。
3. GitHub Actions 會自動把網站變成公開頁（在 repo 的 **Actions** 分頁看進度），完成後記下公開網址。

## 公開前檢查（重要）

repo 和網站都會公開。**不要放**：電話、住址、未授權的客戶資料、公司內部截圖。課堂先用範例素材，正式求職內容課後再整理。

## 四步排錯小抄

1. 我**預期**看到什麼？
2. **實際**看到什麼？
3. 第一個**有效錯誤訊息**在哪？（可以把它貼給對話框請 AI 解讀）
4. 它屬於哪一段：本機預覽 / commit-push / Actions 部署？

## 改文章、About、設定、圖片在哪

| 想改 | 檔案 / 位置 |
|---|---|
| 文章 | `src/content/blog/*.md` |
| About | `src/pages/about.astro` |
| 網站設定（base/site） | `astro.config.mjs` |
| 圖片 | 丟到 `public/images/`，文章裡用 `![說明](/images/檔名)` |
