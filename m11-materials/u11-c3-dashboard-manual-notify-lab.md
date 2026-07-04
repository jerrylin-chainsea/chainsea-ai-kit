# U11-C3 加做講義：請 AI 擴充 Dashboard

> **重要**：Dashboard 手動通知面板**已升為 C3 主線**，並且**內建在 starter**（`web-lab/src/Dashboard.jsx`），
> 不再需要請 AI 從零建立、也**不再把資料手寫進 App.jsx 常數**（資料只有一個來源：`data-lab/report.json`）。
> 主線流程見 `u11-c3-line-oa-lab.md` 與 starter 的 `U3/STEP-01..03.md`。
>
> 本檔保留給**進階組加做**：讓 AI 在允許範圍內「擴充」現成的 Dashboard，練一次完整的 planner → 人審 → implementer → reviewer。

## 0. 允許檔案（比主線更嚴）

```text
✅ web-lab/src/Dashboard.jsx
✅ web-lab/src/styles.css(僅「營運異常 Dashboard」區塊內追加)
⛔ reportContract.js(與 line-lab/sendLineAlert.js 是雙胞胎,不動)
⛔ App.jsx、data.js、package.json、line-lab/ 全部
```

## 1. 確認主線正常

```bash
node line-lab/sendLineAlert.js --flex
```

預期 mock 成功；Dashboard 六步卡可走通。主線沒過，先回主線講義。

## 2. 貼 planner 卡（先計畫，不動手）

```text
你現在扮演 planner。
先不要改檔，也不要執行寫入動作。

請先閱讀：
- AGENTS.md
- CLAUDE.md
- data-lab/report.json
- web-lab/src/Dashboard.jsx

任務：
我要完成「營運異常 Dashboard + LINE OA Flex mock 通知」中的下一步：
在 Dashboard 的 reviewer checklist 區塊，新增一項「<你想加的檢查項>」。

限制：
1. 只能修改：web-lab/src/Dashboard.jsx
2. 不要新增套件
3. 不要改 package.json
4. 不要重構
5. 不要動 reportContract.js
6. 不要把資料手寫成前端常數

請只用以下格式回答：
A. 你準備修改的檔案
B. 每個檔案各改什麼
C. 資料合約會如何被使用
D. 驗收方式
E. 可能風險
F. 哪一步需要人類拍板
```

人審四題（檔案／套件／package.json／重構傾向）都安全才放行。

## 3. 貼 implementer 卡

```text
你現在扮演 implementer。
請依照「剛剛已核准的計畫」實作。

限制：
1. 只能修改：web-lab/src/Dashboard.jsx
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

## 4. 驗收

- 畫面：新的 checklist 項目出現，其他六步卡行為不變（回歸檢查）。
- Console 沒有紅色錯誤；Network 仍然零請求。
- `git diff`：只有 `Dashboard.jsx`（若計畫含樣式則加 `styles.css` 的 Dashboard 區塊）。
- `git diff -- web-lab/package.json` 沒有輸出。

## 5. reviewer + build + commit

貼 `prompts/07-reviewer.md` 的 reviewer 卡 → Verdict PASS 後：

```bash
cd web-lab && npm run build && cd ..
git add .
git commit -m "加做:擴充 Dashboard reviewer checklist"
```

> 收束一句：**擴充功能也走同一條流程** —— planner、人審、implementer、reviewer、build、commit，一步都不省。
