# 🏪 我的 AI 小店(視覺化成果)

一個可愛、養成小遊戲風的 three.js 場景:你的店在營業、AI 店員在旁邊看資料給建議、顧客上門、金幣飄起來。**這是「你做的東西」的視覺化成果**,也能放進你的 M13 個人網站當展示。

## 怎麼開

直接在 Codespaces 開一個簡單 server(或本機):
```bash
cd shop-showcase
python3 -m http.server 8000   # 打開終端機顯示的網址
```
> 因為用了 ES module + CDN,**不能**直接雙擊 `index.html`(會被瀏覽器擋),要透過 server 開。

## 換成你的店(改一個地方就好)

打開 `index.html`,找到 `SHOP_DATA`,改 `brand` 跟 `aiTips`:
```js
const SHOP_DATA = window.SHOP_DATA || {
  brand: "你的店名",
  aiTips: ["把 M12 給你的建議貼進來", "泡菜內餡快缺料,建議補貨", ...],
};
```
招牌會自動變成你的店名。

## 接上 M12 的真實數據(成果感 ↑)

在載入這頁之前,設一個全域變數(例如 M12 跑完把四欄結果丟進來):
```html
<script>
  window.SHOP_DATA = {
    brand: "大甲鍋貼",
    aiTips: /* 這裡放 M12 決策摘要的 action_items 陣列 */ ["補貨泡菜內餡", "加開外送線"],
  };
</script>
<iframe src="shop-showcase/index.html" ...></iframe>
```
這樣 AI 店員講的建議,就是**你的 M12 助理真的算出來的**。

## 放進 M13 個人網站(當作品展示)

把整個 `shop-showcase/` 資料夾複製到 M13 網站的 `public/` 下,在任一頁用 iframe 嵌入:
```html
<iframe src="/shop-showcase/index.html" style="width:100%;height:520px;border:0;border-radius:16px"></iframe>
```

## 想更精緻?換素材庫(選配)

目前用程式畫的低多邊形造型,套用免費素材庫會更漂亮:
- **Kenney**(kenney.nl)— 大量 CC0 可愛 3D/2D 遊戲素材
- **Quaternius**(quaternius.com)— 免費低多邊形 GLTF 模型

把 `.glb` 丟進來,用 three.js 的 `GLTFLoader` 載入,替換 `body`/`bot` 那幾個程式畫的形狀即可。
