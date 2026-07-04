// 營運異常 Dashboard(U3 主戰場)。
// 資料只有一個來源:data-lab/report.json。畫面不另存副本,存檔後畫面會自動更新。
// 這裡沒有任何 LINE token,也永遠不會呼叫 api.line.me;真送只能在終端機執行。
import { useState } from 'react';
import reportJson from '../../data-lab/report.json';
import {
  validateReport,
  formatMoney,
  buildAlertText,
  buildFlexPayload,
  REAL_SEND_COMMAND,
  REAL_SEND_COMMAND_POWERSHELL,
} from './reportContract.js';

// 風險等級小徽章。遇到合約外的值(例如「嚴重」)會顯示灰色的「未知等級」。
function RiskBadge({ level }) {
  const known = ['low', 'medium', 'high'].includes(level);
  const className = known ? `risk-pill risk-${level}` : 'risk-pill risk-unknown';
  return <span className={className}>{known ? level : `未知等級(${String(level)})`}</span>;
}

// 一步一張卡:整條流程每次都照同一個順序走。
function StepCard({ n, title, done, disabled, children }) {
  const className = [
    'dash-step',
    done ? 'done' : '',
    disabled ? 'disabled' : '',
  ].join(' ').trim();

  return (
    <section className={className} aria-disabled={disabled || undefined}>
      <div className="dash-step-head">
        <span className="dash-num">{done ? '✓' : n}</span>
        <h3>{title}</h3>
      </div>
      <div className="dash-step-body">{children}</div>
    </section>
  );
}

// 資料合約沒過時的紅色擋牌。錯誤訊息與 line-lab/sendLineAlert.js 逐字相同。
function BlockerBanner({ errors }) {
  return (
    <div className="dash-blocker" role="alert">
      <strong>資料合約沒過,流程已被擋下</strong>
      <ul>
        {errors.map((message) => (
          <li key={message}>{message}</li>
        ))}
      </ul>
      <p>請修正 data-lab/report.json 後存檔,畫面會自動更新。</p>
      <p>已阻擋:在資料合約通過前,不能生成 payload、模擬送出或取得真送指令。</p>
    </div>
  );
}

// Flex payload 預覽:上面是人審摘要,下面是 LINE OA 會吃的 JSON。
// JSON 和 node line-lab/sendLineAlert.js --flex 產出的 line-flex-payload.json 同結構。
// 唯一不同:網頁上的 to 永遠是示範 ID;真送對象由 line-lab/.env 決定,不會進前端。
function PayloadPreview({ report }) {
  return (
    <div className="dash-preview">
      <p className="dash-caption">人審摘要(送出前先看語氣、數字與 action items 是否合理)</p>
      <pre className="dash-pre">{buildAlertText(report)}</pre>
      <p className="dash-caption">
        LINE Flex Message payload JSON。可對照終端機指令產生的 line-lab/line-flex-payload.json。
        to 在網頁上永遠是示範 ID:真送對象由 line-lab/.env 決定,token 與對象都不會出現在前端。
      </p>
      <pre className="dash-pre">{JSON.stringify(buildFlexPayload(report), null, 2)}</pre>
    </div>
  );
}

function PushReadiness({ report }) {
  return (
    <div className="dash-ready" aria-label="低庫存推播準備">
      <div>
        <span>推播主題</span>
        <strong>{report.anomaly_count > 0 ? '低庫存補貨提醒' : '庫存狀態更新'}</strong>
      </div>
      <div>
        <span>推播通道</span>
        <strong>LINE OA Flex Message</strong>
      </div>
      <div>
        <span>下一步</span>
        <strong>到 U3 由人工審核後 mock 送出</strong>
      </div>
    </div>
  );
}

// reviewer 檢查清單:送出前,人要親自看過的事。
function ReviewerChecklist() {
  const items = [
    '畫面上的數字與 data-lab/report.json 一致',
    'risk_level 是 low / medium / high 之一,而且和資料相符',
    'action_items 是給人的明確指示,不是空話',
    'Flex Message 的 altText、標題與 action_items 都看得懂',
    '收件對象正確(真送前要確認 LINE_TARGET_ID)',
    '已完成人工審核,才考慮真送',
    '真送之前,先跑過一次 --flex mock',
  ];

  return (
    <section className="dash-checklist">
      <h3>Reviewer 檢查清單</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default function Dashboard() {
  // 六個開關,對應畫面上的六個動作。資料本身不放進 state。
  const [loaded, setLoaded] = useState(false);
  const [checked, setChecked] = useState(false);
  const [showPayload, setShowPayload] = useState(false);
  const [reviewed, setReviewed] = useState(false);
  const [mockResult, setMockResult] = useState(null);
  const [copied, setCopied] = useState(false);

  // 驗證是「每次畫面更新都重新算」,不是按按鈕時存下來的:
  // 所以你改壞 report.json 存檔,擋牌會立刻出現,不用重按。
  const validation = validateReport(reportJson);
  const contractOk = validation.ok;

  // 下游步驟的開關:合約沒過,後面全部關閉。
  const canCheck = loaded;
  const canPreview = loaded && checked && contractOk;
  const canReview = canPreview && showPayload;
  const canMock = canPreview && showPayload;
  const showRealCommand = canReview && reviewed && contractOk;

  function resetFlow() {
    setLoaded(false);
    setChecked(false);
    setShowPayload(false);
    setReviewed(false);
    setMockResult(null);
    setCopied(false);
  }

  async function copyRealCommand() {
    try {
      await navigator.clipboard.writeText(REAL_SEND_COMMAND);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // 少數瀏覽器不開放剪貼簿:請手動選取指令文字複製。
      setCopied(false);
    }
  }

  return (
    <div className="dash">
      <header className="dash-header">
        <p className="eyebrow">U3 · 營運異常通知</p>
        <h2>營運異常 Dashboard</h2>
        <p className="dash-sub">
          資料來源:data-lab/report.json(唯一資料來源,畫面不另存副本)。
          這個網頁不會呼叫 LINE,真送只在終端機發生。
        </p>
        <button className="dash-reset" type="button" onClick={resetFlow}>
          重設流程
        </button>
      </header>

      <StepCard n={1} title="載入範例 report.json" done={loaded}>
        {!loaded ? (
          <button className="dash-btn" type="button" onClick={() => setLoaded(true)}>
            載入範例 report.json
          </button>
        ) : (
          <div className="dash-summary">
            <div className="dash-kv"><span>報表日期</span><strong>{String(reportJson.report_date ?? '(未提供)')}</strong></div>
            <div className="dash-kv"><span>風險等級</span><RiskBadge level={reportJson.risk_level} /></div>
            <div className="dash-kv"><span>總營收</span><strong>{typeof reportJson.total_revenue === 'number' ? formatMoney(reportJson.total_revenue) : String(reportJson.total_revenue)}</strong></div>
            <div className="dash-kv"><span>異常筆數</span><strong>{String(reportJson.anomaly_count ?? '(缺少)')}</strong></div>
            <div className="dash-kv"><span>Top product</span><strong>{String(reportJson.top_product ?? '(缺少)')}</strong></div>
            <div className="dash-kv"><span>Top channel</span><strong>{String(reportJson.top_channel ?? '(缺少)')}</strong></div>
            {Array.isArray(reportJson.action_items) && (
              <ol className="dash-actions">
                {reportJson.action_items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            )}
            <PushReadiness report={reportJson} />
          </div>
        )}
      </StepCard>

      <StepCard n={2} title="檢查資料合約" done={checked && contractOk} disabled={!canCheck}>
        {!checked ? (
          <button className="dash-btn" type="button" disabled={!canCheck} onClick={() => setChecked(true)}>
            檢查資料合約
          </button>
        ) : contractOk ? (
          <div className="dash-pass">
            資料合約通過:必要欄位齊全,risk_level = {reportJson.risk_level}
          </div>
        ) : (
          <BlockerBanner errors={validation.errors} />
        )}
      </StepCard>

      <StepCard n={3} title="生成 LINE Flex payload 預覽" done={showPayload && contractOk} disabled={!canPreview}>
        {!showPayload || !contractOk ? (
          <button className="dash-btn" type="button" disabled={!canPreview} onClick={() => setShowPayload(true)}>
            生成 Flex payload 預覽
          </button>
        ) : (
          <PayloadPreview report={reportJson} />
        )}
      </StepCard>

      <StepCard n={4} title="人工審核" done={reviewed && contractOk} disabled={!canReview}>
        <label className="dash-review">
          <input
            type="checkbox"
            checked={reviewed}
            disabled={!canReview}
            onChange={(event) => setReviewed(event.target.checked)}
          />
          我已人工審核通知內容
        </label>
        <p className="dash-caption">AI 做出來不算完成;你看過、勾了,才算通過這一關。</p>
      </StepCard>

      <StepCard n={5} title="顯示 mock send 結果" done={Boolean(mockResult) && contractOk} disabled={!canMock}>
        {!mockResult || !contractOk ? (
          <button
            className="dash-btn"
            type="button"
            disabled={!canMock}
            onClick={() => setMockResult({ time: new Date().toLocaleTimeString('zh-TW') })}
          >
            模擬送出(mock)
          </button>
        ) : (
          <div className="dash-mock">
            <code>[mock] LINE_REAL_SEND is not 1, no request sent.</code>
            <p className="dash-caption">
              {mockResult.time} 完成。這對應終端機的 `node line-lab/sendLineAlert.js --flex` mock:沒有呼叫 api.line.me,
              前端程式碼裡也沒有任何 token。真送只能在終端機執行。
            </p>
          </div>
        )}
      </StepCard>

      <StepCard n={6} title="真送指令(通過人工審核才會出現)" done={showRealCommand} disabled={!canReview}>
        {showRealCommand ? (
          <div className="dash-cmd-wrap">
            <div className="dash-cmd">
              <code>{REAL_SEND_COMMAND}</code>
              <button className="dash-copy" type="button" onClick={copyRealCommand}>
                {copied ? '已複製' : '複製指令'}
              </button>
            </div>
            <p className="dash-caption">Windows PowerShell 版:<code>{REAL_SEND_COMMAND_POWERSHELL}</code></p>
            <p className="dash-caption">真送永遠只在終端機發生,網頁不會幫你送。</p>
          </div>
        ) : (
          <p className="dash-caption">先完成 payload 預覽並勾選「我已人工審核通知內容」,這裡才會顯示可複製的真送指令。</p>
        )}
      </StepCard>

      <ReviewerChecklist />
    </div>
  );
}
