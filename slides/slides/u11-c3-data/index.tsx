import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';
import type { ReactNode } from 'react';

export const design: DesignSystem = {
  palette: { bg: '#f5f6f8', text: '#181a1f', accent: '#e2570d' },
  fonts: {
    display: '"PingFang TC", "Noto Sans TC", "Microsoft JhengHei", system-ui, sans-serif',
    body: '"PingFang TC", "Noto Sans TC", "Microsoft JhengHei", system-ui, sans-serif',
  },
  typeScale: { hero: 120, body: 32 },
  radius: 18,
};

const C = {
  bg: '#f5f6f8',
  ink: '#181a1f',
  line: '#e2e5ea',
  orange: '#e2570d',
  dark: '#181a1f',
  card: '#ffffff',
  muted: '#5f6f66',
  faint: '#9caaa2',
  amber: '#c87900',
  red: '#b42318',
  blue: '#2764b5',
};
const mono = '"JetBrains Mono", "SF Mono", ui-monospace, monospace';

const css = `@keyframes c3-rise{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
.c3-rise>*{animation:c3-rise .48s cubic-bezier(.16,1,.3,1) both}
.c3-rise>*:nth-child(2){animation-delay:.05s}.c3-rise>*:nth-child(3){animation-delay:.1s}.c3-rise>*:nth-child(4){animation-delay:.15s}
@media (prefers-reduced-motion:reduce){.c3-rise>*{animation:none!important}}`;

if (typeof document !== 'undefined' && !document.getElementById('u11-c3-line-oa')) {
  const el = document.createElement('style');
  el.id = 'u11-c3-line-oa';
  el.textContent = css;
  document.head.appendChild(el);
}

type Kind =
  | 'cover'
  | 'section'
  | 'bullets'
  | 'cards'
  | 'code'
  | 'prompt'
  | 'flow'
  | 'review'
  | 'payload'
  | 'mock'
  | 'network'
  | 'terminal';

type CardSpec = { title: string; body: string; color?: string };
type SlideSpec = {
  kind: Kind;
  eyebrow?: string;
  title: string;
  lead?: string;
  bullets?: string[];
  cards?: CardSpec[];
  code?: string;
  label?: string;
  steps?: string[];
  time?: string;
  sectionNo?: string;
  footer?: string;
};

const fill = {
  width: '100%',
  height: '100%',
  background: C.bg,
  color: C.ink,
  fontFamily: 'var(--osd-font-body)',
  position: 'relative' as const,
  overflow: 'hidden',
  display: 'flex' as const,
  flexDirection: 'column' as const,
  justifyContent: 'center' as const,
};
const pad = { padding: '0 108px 42px', width: '100%' as const };

const toneFor = (i: number) => [C.orange, C.blue, C.amber, C.red, '#5a6270'][i % 5];

const Foot = ({ label }: { label: string }) => {
  const { current, total } = useSlidePageNumber();
  return (
    <div style={{ position: 'absolute', left: 108, right: 108, bottom: 42, borderTop: `1px solid ${C.line}`, paddingTop: 14, display: 'flex', justifyContent: 'space-between', fontFamily: mono, color: C.faint, fontSize: 19 }}>
      <span>{label}</span>
      <span>{String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
    </div>
  );
};

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <span style={{ display: 'inline-flex', padding: '8px 14px', borderRadius: 999, background: '#fbf3ee', color: C.orange, fontFamily: mono, fontSize: 20, fontWeight: 850, letterSpacing: '.1em', textTransform: 'uppercase' }}>{children}</span>
);

const Title = ({ children, size = 62 }: { children: ReactNode; size?: number }) => (
  <div style={{ fontSize: size, fontWeight: 900, letterSpacing: '-.025em', lineHeight: 1.08, whiteSpace: 'pre-wrap' }}>{children}</div>
);

const Lead = ({ children }: { children: ReactNode }) => (
  <div style={{ fontSize: 31, color: C.muted, lineHeight: 1.5, maxWidth: 1460 }}>{children}</div>
);

const Shell = ({ slide, children }: { slide: SlideSpec; children: ReactNode }) => (
  <div style={fill}>
    <div style={pad}>
      {slide.eyebrow ? <Eyebrow>{slide.eyebrow}</Eyebrow> : null}
      <div style={{ marginTop: slide.eyebrow ? 18 : 0 }}><Title>{slide.title}</Title></div>
      {slide.lead ? <div style={{ marginTop: 20 }}><Lead>{slide.lead}</Lead></div> : null}
      <div className="c3-rise" style={{ marginTop: 30 }}>{children}</div>
    </div>
    <Foot label={slide.footer ?? 'U11 · C3 · LINE OA Lab'} />
  </div>
);

const SectionSlide = ({ slide }: { slide: SlideSpec }) => (
  <div style={{ ...fill, background: C.dark, color: '#fff' }}>
    <div style={pad}>
      <span style={{ fontFamily: mono, fontSize: 26, color: C.orange, letterSpacing: '.14em' }}>段 {slide.sectionNo} · {slide.time}</span>
      <div style={{ marginTop: 22 }}><Title size={88}>{slide.title}</Title></div>
      {slide.lead ? <div style={{ marginTop: 28, fontSize: 34, color: 'rgba(255,255,255,.72)', lineHeight: 1.5, maxWidth: 1380 }}>{slide.lead}</div> : null}
    </div>
    {slide.footer ? <div style={{ position: 'absolute', left: 108, bottom: 42, fontFamily: mono, fontSize: 21, color: 'rgba(255,255,255,.55)' }}>📖 {slide.footer}</div> : null}
  </div>
);

const Bullets = ({ items }: { items: string[] }) => (
  <div style={{ display: 'grid', gap: 15, maxWidth: 1500 }}>
    {items.map((item, i) => (
      <div key={item} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '18px 24px' }}>
        <span style={{ flexShrink: 0, width: 38, height: 38, borderRadius: 12, background: toneFor(i), color: '#fff', display: 'grid', placeContent: 'center', fontFamily: mono, fontSize: 20, fontWeight: 850 }}>{i + 1}</span>
        <span style={{ fontSize: 29, lineHeight: 1.42 }}>{item}</span>
      </div>
    ))}
  </div>
);

const Cards = ({ cards }: { cards: CardSpec[] }) => (
  <div style={{ display: 'grid', gridTemplateColumns: cards.length <= 3 ? `repeat(${cards.length}, 1fr)` : 'repeat(2, 1fr)', gap: 18, maxWidth: 1510 }}>
    {cards.map((card, i) => {
      const color = card.color ?? toneFor(i);
      return (
        <div key={card.title} style={{ background: C.card, border: `1px solid ${C.line}`, borderTop: `7px solid ${color}`, borderRadius: 16, padding: '24px 28px', minHeight: 150 }}>
          <div style={{ fontSize: 30, fontWeight: 850, color, lineHeight: 1.22 }}>{card.title}</div>
          <div style={{ fontSize: 25, color: C.muted, lineHeight: 1.45, marginTop: 12 }}>{card.body}</div>
        </div>
      );
    })}
  </div>
);

const CodeBlock = ({ code, label = 'terminal' }: { code: string; label?: string }) => (
  <div style={{ background: '#101418', color: '#dce7df', borderRadius: 18, overflow: 'hidden', border: '1px solid #26332c', maxWidth: 1540, boxShadow: '0 24px 60px -34px rgba(0,0,0,.55)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '13px 20px', background: '#17211c', borderBottom: '1px solid #26332c' }}>
      {['#ff5f57', '#febc2e', '#28c840'].map((c) => <span key={c} style={{ width: 13, height: 13, borderRadius: '50%', background: c }} />)}
      <span style={{ marginLeft: 10, fontFamily: mono, fontSize: 18, color: '#9fb1a8' }}>{label}</span>
    </div>
    <pre style={{ margin: 0, padding: '24px 30px', fontFamily: mono, fontSize: 23, lineHeight: 1.52, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{code}</pre>
  </div>
);

const PromptCard = ({ prompt, label = '固定學生 prompt' }: { prompt: string; label?: string }) => (
  <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 18, overflow: 'hidden', maxWidth: 1560, boxShadow: '0 20px 50px -34px rgba(20,37,31,.45)' }}>
    <div style={{ padding: '13px 22px', background: '#fbf3ee', borderBottom: `1px solid ${C.line}`, color: C.orange, fontFamily: mono, fontSize: 19, fontWeight: 850 }}>{label}</div>
    <pre style={{ margin: 0, padding: '22px 28px', fontFamily: mono, fontSize: 21, lineHeight: 1.45, color: C.ink, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{prompt}</pre>
  </div>
);

const Flow = ({ steps }: { steps: string[] }) => (
  <div style={{ display: 'flex', alignItems: 'stretch', gap: 12, maxWidth: 1550 }}>
    {steps.map((step, i) => (
      <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1 }}>
        <div style={{ background: C.card, border: `2px solid ${toneFor(i)}`, borderRadius: 16, minHeight: 135, padding: '20px 14px', display: 'grid', placeContent: 'center', textAlign: 'center', fontSize: 27, fontWeight: 850, whiteSpace: 'pre-wrap', lineHeight: 1.25 }}>{step}</div>
        {i < steps.length - 1 ? <span style={{ fontFamily: mono, color: C.faint, fontSize: 34 }}>→</span> : null}
      </div>
    ))}
  </div>
);

const ReviewMock = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, maxWidth: 1540 }}>
    <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 18, padding: 26 }}>
      <div style={{ fontFamily: mono, color: C.orange, fontWeight: 850, fontSize: 19 }}>通知審核區</div>
      <div style={{ marginTop: 16, fontSize: 34, fontWeight: 900 }}>營運異常通知</div>
      <div style={{ marginTop: 18, display: 'grid', gap: 13, fontSize: 25 }}>
        <div><b>risk_level:</b> high</div>
        <div><b>total_revenue:</b> NT$128,400</div>
        <div><b>anomaly_count:</b> 5</div>
        <div><b>top_product:</b> 耳掛咖啡</div>
        <div><b>top_channel:</b> LINE</div>
      </div>
    </div>
    <div style={{ background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: 18, padding: 26 }}>
      <div style={{ fontFamily: mono, color: C.amber, fontWeight: 850, fontSize: 19 }}>Human-in-the-loop</div>
      <div style={{ marginTop: 16, fontSize: 30, fontWeight: 900 }}>人工確認後才放行</div>
      <ul style={{ marginTop: 18, paddingLeft: 28, fontSize: 25, lineHeight: 1.55 }}>
        <li>是否真的要通知營運群組</li>
        <li>風險等級是否合理</li>
        <li>action_items 是否可執行</li>
        <li>是否進入 --confirm 發送階段</li>
      </ul>
    </div>
  </div>
);

const payloadJson = `{
  "to": "Uxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "messages": [
    {
      "type": "text",
      "text": "[營運異常通知]\\n風險等級: high\\n總營收: NT$128,400\\n異常筆數: 5\\nTop product: 耳掛咖啡\\nTop channel: LINE\\nAction items:\\n1. 先人工確認第 8 列與第 17 列營收資料。\\n2. 暫停把異常列納入週報。"
    }
  ]
}`;

const PayloadMock = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '.95fr 1.05fr', gap: 22, maxWidth: 1540 }}>
    <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 18, padding: 26 }}>
      <div style={{ fontFamily: mono, color: C.orange, fontWeight: 850, fontSize: 19 }}>LINE payload 預覽區</div>
      <div style={{ marginTop: 18, fontSize: 29, lineHeight: 1.45 }}>payload 是要交給 LINE API 的 JSON，不是給人看的作文。</div>
      <div style={{ marginTop: 20, display: 'grid', gap: 12, fontSize: 24 }}>
        <div><b>to</b>: userId / groupId / roomId</div>
        <div><b>messages</b>: 最多 5 則 message object</div>
        <div><b>text</b>: 這堂固定只用一則 text message</div>
      </div>
    </div>
    <CodeBlock code={payloadJson} label="line-alert-payload.json" />
  </div>
);

const MockSuccess = () => (
  <div style={{ background: '#181a1f', color: '#f4f1ed', borderRadius: 22, padding: 34, maxWidth: 1520, boxShadow: '0 24px 70px -36px rgba(0,0,0,.6)' }}>
    <div style={{ fontFamily: mono, color: C.orange, fontSize: 22, fontWeight: 850 }}>mock send success</div>
    <div style={{ marginTop: 20, fontSize: 46, fontWeight: 900 }}>沒有真的呼叫 LINE API</div>
    <pre style={{ margin: '26px 0 0', padding: 24, borderRadius: 16, background: '#101217', border: '1px solid #30343d', fontFamily: mono, fontSize: 25, lineHeight: 1.5, whiteSpace: 'pre-wrap' }}>{`payload written: line-lab/line-alert-payload.json
[mock] LINE_REAL_SEND is not 1, no request sent.
review required before --confirm`}</pre>
  </div>
);

const NetworkMock = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, maxWidth: 1540 }}>
    <div style={{ background: '#111827', color: '#d1d5db', borderRadius: 18, overflow: 'hidden', border: '1px solid #263244' }}>
      <div style={{ padding: '14px 20px', background: '#1f2937', fontFamily: mono, color: '#93c5fd' }}>Console</div>
      <pre style={{ margin: 0, padding: 24, fontFamily: mono, fontSize: 23, lineHeight: 1.55 }}>{`> node line-lab/sendLineAlert.js
payload written: line-lab/line-alert-payload.json
[mock] LINE_REAL_SEND is not 1, no request sent.

No errors`}</pre>
    </div>
    <div style={{ background: '#fff', border: `1px solid ${C.line}`, borderRadius: 18, overflow: 'hidden' }}>
      <div style={{ padding: '14px 20px', background: '#edf2ee', fontFamily: mono, color: C.muted }}>Network</div>
      <div style={{ padding: 24, display: 'grid', gap: 16, fontSize: 25 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 8 }}><b>mock mode</b><span>no request</span></div>
        <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 8 }}><b>real send</b><span>POST /v2/bot/message/push</span></div>
        <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 8 }}><b>header</b><span>Authorization: Bearer token</span></div>
        <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 8 }}><b>failure</b><span>print status code + response body</span></div>
      </div>
    </div>
  </div>
);

const slides: SlideSpec[] = [
  { kind: 'cover', eyebrow: 'U11 · 第 3 堂 / 共 4 堂 · 4 小時', title: '營運異常 Dashboard\n用按鈕走完一次可交付的通知流程', lead: '這不是自由探索課。今天在畫面上按按鈕走完主線：載入資料、檢查合約、預覽 payload、人工審核、mock 送出；再親手弄壞資料、用 ReAct 修好。指令只剩三類：啟動、build、commit。' },
  { kind: 'flow', eyebrow: '你現在在哪條流水線', footer: 'U11·C3 ｜ 講義:START-HERE.md(主線圖)', title: '今日主線：按鈕優先，固定流程', steps: ['載入\nreport.json', '檢查\n資料合約', 'payload\n預覽', '人工審核\ncheckbox', 'mock 送出', 'ReAct\n修錯', 'build · diff\ncommit'] },
  { kind: 'cards', eyebrow: '完成的定義 · DoD', footer: 'U11·C3 ｜ 講義:START-HERE.md(DoD)', title: 'AI 做出來不算完成，通過驗收才算完成', cards: [
    { title: '畫面', body: 'Dashboard 六步卡走通、擋牌能出現也能消失。', color: C.orange },
    { title: '輸出', body: '[mock]、[blocked]、合約錯誤三句親眼看過。', color: C.blue },
    { title: 'diff', body: 'git diff 只有本堂允許檔案。', color: C.amber },
    { title: 'build', body: 'npm run build 綠色通過。', color: C.red },
    { title: 'human review', body: 'checkbox 是你勾的、修正是你放行的。', color: '#5a6270' },
  ] },
  { kind: 'cards', eyebrow: '今日成果畫面', footer: 'U11·C3 ｜ 講義:U3/ACCEPTANCE.md', title: '最後要交付什麼', cards: [
    { title: '一個可互動 Dashboard', body: '載入 → 檢查 → 預覽 → 審核 → mock 全通。' },
    { title: '一份 payload 預覽', body: '與 line-lab/line-alert-payload.json 逐字相同。' },
    { title: '一次 ReAct 修錯', body: '擋牌出現 → 最小修正 → 恢復綠色。' },
    { title: '一次乾淨收尾', body: 'build 通過、diff 乾淨、commit 完成。' },
  ] },
  { kind: 'bullets', eyebrow: '企業場景', footer: 'U11·C3 ｜ 講義:U3/STEP-01(開頭)', title: '為什麼企業開發常要接外部平台', bullets: ['系統不只在自己網站裡運作，還要通知 LINE、Slack、Email、CRM。', '外部平台有 token、payload、限制、錯誤碼，不能靠感覺串。', 'AI coding agent 的價值是幫你照規格做整合，不是自由發想功能。', '真正交付前，要能 mock 驗收、人工審核、看 diff。'] },

  { kind: 'section', sectionNo: '1', footer: '講義:U3/STEP-01-dashboard-buttons.md', time: '0:15 - 1:20', title: '按鈕走主線：載入 → 檢查 → 預覽', lead: '一鍵啟動，切到「營運異常 Dashboard」。今天大多數操作都在同一個畫面上，照 1 → 2 → 3 的順序按。' },
  { kind: 'cards', eyebrow: '段 1 · 課堂邊界', footer: 'U11·C3 ｜ 講義:U3/STEP-01 §0 允許檔案', title: '今天的最高原則', cards: [
    { title: '固定劇本', body: '學生照老師步驟做，輸出要可預期。', color: C.orange },
    { title: '固定 prompt', body: 'Prompt 卡原文複製，不自行改需求。', color: C.blue },
    { title: '按鈕優先', body: '主線在畫面上完成；指令只剩啟動、build、commit。', color: C.amber },
    { title: '固定驗收', body: '照驗收單走，不因 AI 回報成功就相信。', color: C.red },
  ] },
  { kind: 'code', eyebrow: '段 1 · report.json', footer: 'U11·C3 ｜ 講義:U3/STEP-01 §2(合約複習:U2/STEP-01)', title: '整個作品的唯一資料來源', label: 'ai-project-foundation-kit/data-lab/report.json', code: `{
  "report_date": "2026-07-02",
  "risk_level": "high",
  "total_revenue": 128400,
  "anomaly_count": 5,
  "top_product": "耳掛咖啡",
  "top_channel": "LINE",
  "action_items": [
    "先人工確認第 8 列與第 17 列營收資料。",
    "暫停把異常列納入週報。"
  ]
}` },
  { kind: 'cards', eyebrow: '段 1 · 合約欄位', footer: 'U11·C3 ｜ 講義:U3/STEP-01 §2', title: '每個欄位都會進畫面與通知', cards: [
    { title: 'risk_level', body: '只能是 low / medium / high。格式錯就阻擋。' },
    { title: 'total_revenue', body: '營收金額，畫面與通知顯示為 NT$ 格式。' },
    { title: 'anomaly_count', body: '異常筆數，讓營運知道嚴重程度。' },
    { title: 'top_product / top_channel', body: '用來說明異常最相關的商品與通路。' },
    { title: 'action_items', body: '通知收件人下一步要做什麼。' },
  ] },
  { kind: 'bullets', eyebrow: '段 1 · 一份合約，兩道防線', footer: 'U11·C3 ｜ 講義:U3/STEP-01 §0(雙胞胎)', title: '同一份 report.json，餵給兩個下游', bullets: ['畫面：web-lab Dashboard 直接讀 report.json，不另存副本。', '通知：line-lab/sendLineAlert.js 讀同一份檔產生 payload。', '合約沒過：畫面出紅色擋牌、腳本在送出前阻擋 —— 同一句錯誤訊息。', 'reportContract.js 與 sendLineAlert.js 是雙胞胎檔案，今天兩邊都不改。'] },
  { kind: 'cards', eyebrow: '段 1 · Button 1-3', footer: 'U11·C3 ｜ 講義:U3/STEP-01 §2–4', title: '照順序按，每按一步就驗一步', cards: [
    { title: '1 載入範例 report.json', body: '畫面出現 high 徽章、NT$128,400、異常 5 筆、3 條 action items。', color: C.orange },
    { title: '2 檢查資料合約', body: '綠色「資料合約通過：必要欄位齊全，risk_level = high」。', color: C.blue },
    { title: '3 生成 payload 預覽', body: '上半通知文字、下半 payload JSON。與 line-alert-payload.json 逐字相同。', color: C.amber },
  ] },
  { kind: 'payload', eyebrow: '段 1 · payload', footer: 'U11·C3 ｜ 講義:U3/STEP-01 §4', title: 'LINE API 要的是 JSON payload，不是段落作文' },

  { kind: 'section', sectionNo: '2', footer: '講義:U3/STEP-02-hitl-review.md', time: '1:20 - 2:00', title: 'Human-in-the-loop：勾了 checkbox，才有真送指令', lead: 'AI 產生通知，不代表可以送。人類審核是發送前的閘門 —— 沒勾 checkbox，畫面連真送指令都不給你。' },
  { kind: 'review', eyebrow: '段 2 · 成果畫面', footer: 'U11·C3 ｜ 講義:U3/STEP-02 §1', title: '通知送出前，先進人工審核區', lead: '這就是 Dashboard 的第 4 步：AI 產生內容，人決定能不能送。' },
  { kind: 'prompt', eyebrow: '段 2 · Prompt 卡 1', footer: 'U11·C3 ｜ 講義:U3/PROMPT-CARD 卡 1', title: 'Human-in-the-loop 檢查，不改檔', code: `請檢查目前 LINE 通知內容（Dashboard payload 預覽中的文字）。
不要改檔。
請判斷這則通知是否適合送出，並列出：
1. 通知風險等級
2. 通知對象
3. 是否需要人工確認
4. 是否可以進入 --confirm 發送階段` },
  { kind: 'cards', eyebrow: '段 2 · 雙重確認', footer: 'U11·C3 ｜ 講義:U3/STEP-02 §3', title: '真送需要兩道確認，缺一不可', cards: [
    { title: '防止誤送', body: 'LINE_REAL_SEND=1 仍不夠，少了 --confirm 就阻擋。', color: C.orange },
    { title: '留下人類決策點', body: '通知內容和對象要先被人工審核（checkbox）。', color: C.blue },
    { title: 'mock 與真送分離', body: '課堂驗收到 mock 為止；真送永遠只在終端機。', color: C.amber },
  ] },
  { kind: 'mock', eyebrow: '段 2 · mock send', footer: 'U11·C3 ｜ 講義:U3/STEP-02 §2', title: '看到 [mock] 才算對，不是手機收到才算對' },
  { kind: 'code', eyebrow: '段 2 · 終端機對照', footer: 'U11·C3 ｜ 講義:U3/STEP-02 §4', title: '今天僅有的對照指令（三行）', label: 'terminal', code: `node line-lab/sendLineAlert.js
# → payload written + [mock] LINE_REAL_SEND is not 1, no request sent.

LINE_REAL_SEND=1 node line-lab/sendLineAlert.js
# → [blocked] LINE_REAL_SEND=1 but --confirm missing; no request sent.

# 驗收：F12 → Network，全程零請求，沒有 api.line.me` },

  { kind: 'section', sectionNo: '3', footer: '講義:U3/STEP-03-react-debug.md', time: '2:15 - 3:20', title: '製造合約錯 → ReAct 修好', lead: '親手把 risk_level 改成「嚴重」。擋牌會自己出現、下游全部消失 —— 然後用固定格式把它修好。' },
  { kind: 'code', eyebrow: '段 3 · 製造指定錯誤', footer: 'U11·C3 ｜ 講義:U3/STEP-03 §1–2', title: '改值，不改語法', label: 'data-lab/report.json', code: `"risk_level": "high"   →   "risk_level": "嚴重"

# 存檔後（不按任何按鈕）：
# 畫面：紅色擋牌出現，payload / mock / 真送指令全部消失
#   資料合約錯誤: risk_level 必須是 low / medium / high，目前是 "嚴重"
# 終端機：node line-lab/sendLineAlert.js → 同一句錯誤` },
  { kind: 'prompt', eyebrow: '段 3 · Prompt 卡 2', footer: 'U11·C3 ｜ 講義:U3/PROMPT-CARD 卡 2(STEP-03 §3)', title: 'ReAct debug：先分析，不改檔', code: `你現在扮演 debugger。
先不要改檔。

目前問題：
Dashboard 出現紅色擋牌：risk_level 變成中文「嚴重」，
但資料合約規定只能是 low / medium / high。

請用以下格式回答：
Expected：正確行為應該是什麼
Actual：目前實際發生什麼
Reason：你推測的原因
Act：你要查看哪些檔案 / 執行哪些指令
Observe：你預期看到什麼證據
Minimal Patch：你建議的最小修改
Verify：修正後的驗收方式
Blocker：哪裡需要人類決定` },
  { kind: 'prompt', eyebrow: '段 3 · Prompt 卡 3', footer: 'U11·C3 ｜ 講義:U3/PROMPT-CARD 卡 3(STEP-03 §4)', title: '放行最小修正', code: `同意你的 Minimal Patch。
請只修改必要檔案。
不要新增套件。
不要改 package.json。
不要重構。
修正目標：讓 report.json 重新符合資料合約（risk_level 回到 low / medium / high）。
完成後告訴我：改了哪裡、我要怎麼在畫面和終端機各驗收一次。` },
  { kind: 'flow', eyebrow: '段 3 · ReAct', footer: 'U11·C3 ｜ 講義:U3/STEP-03 §3', title: '除錯不是瞎改，是固定節奏', steps: ['Expected\n合約允許值', 'Actual\nrisk_level=嚴重', 'Reason · Act\nObserve', 'Minimal Patch\n只改一行', 'Verify\n畫面+終端機'] },

  { kind: 'section', sectionNo: '4', footer: '講義:U3/STEP-02 §5 + u11-c3-line-oa-lab.md 附錄', time: '3:20 - 3:55', title: '老師示範真送 + build / commit 收尾', lead: '真送是老師示範／進階組。學生的完成標準到 mock 為止；最後用 build、diff、commit 收乾淨。' },
  { kind: 'cards', eyebrow: '段 4 · 白話說明', footer: 'U11·C3 ｜ 講義:u11-c3-line-oa-lab.md 附錄', title: 'LINE OA / Messaging API 是什麼', cards: [
    { title: 'LINE OA', body: '企業或組織的官方帳號。' },
    { title: 'Messaging API', body: '讓程式透過官方帳號發送訊息。' },
    { title: 'Push message', body: '主動把訊息送到 userId、groupId 或 roomId。' },
    { title: 'Text message', body: '這堂固定只用 type: text，避免設計分歧。' },
  ] },
  { kind: 'bullets', eyebrow: '段 4 · token 安全', footer: 'U11·C3 ｜ 講義:u11-c3-line-oa-lab.md 附錄 A2', title: 'token 為什麼不能放前端', bullets: ['channel access token 代表你的 OA 發訊權限。', '放進前端 bundle 等於交給所有使用者看。', 'token 只能放伺服端或本機環境變數，不寫死在程式碼。', '.env 不能 commit；教材只 commit .env.example。Dashboard 上的 to 永遠是示範 ID。'] },
  { kind: 'code', eyebrow: '段 4 · 老師示範', footer: 'U11·C3 ｜ 講義:u11-c3-line-oa-lab.md 附錄 A5', title: '真送需要三個條件同時成立', label: 'terminal（老師示範）', code: `# 1. LINE_CHANNEL_ACCESS_TOKEN 已設定（line-lab/.env）
# 2. LINE_TARGET_ID 已設定
# 3. LINE_REAL_SEND=1 且加上 --confirm

LINE_REAL_SEND=1 node line-lab/sendLineAlert.js --confirm

# 官方後台設定（Business ID → OA → Messaging API → token → targetId）
# 只給進階組：見 u11-c3-line-oa-lab.md 附錄` },
  { kind: 'network', eyebrow: '段 4 · Console / Network', footer: 'U11·C3 ｜ 講義:U3/STEP-02 §5', title: '真送示範要看 Console 與 Network，不只看 LINE 手機' },
  { kind: 'bullets', eyebrow: '段 4 · 保底', footer: 'U11·C3 ｜ 講義:U3/PITFALL.md', title: '現場狀況不阻塞課堂', bullets: ['沒有 LINE OA：mock 完成即過關（真送本來就是示範）。', '畫面跑不動：用終端機 node line-lab/sendLineAlert.js 完成同段驗收。', 'JSON 改壞語法出現全螢幕錯誤：改回原樣即恢復。', '網路不穩：payload 產生與 mock 驗收就是完成標準。'] },
  { kind: 'terminal', eyebrow: '段 4 · 收尾指令', footer: 'U11·C3 ｜ 講義:U3/STEP-03 §5', title: '最後照這組指令收尾', code: `cd web-lab
npm run build
cd ..
git status
git diff
git diff -- web-lab/package.json
git add .
git commit -m "完成 Dashboard 通知流程與 ReAct 修錯練習"` },
  { kind: 'bullets', eyebrow: '段 4 · 驗收標準', footer: 'U11·C3 ｜ 講義:U3/ACCEPTANCE.md', title: '看到這些才算完成', bullets: ['Dashboard 六步卡走通；擋牌能出現也能消失。', 'payload 預覽與 line-alert-payload.json 的通知文字逐字相同。', '[mock] 與 [blocked] 都親眼看過；Network 全程零請求。', '未勾 checkbox 時看不到真送指令。', 'npm run build 通過；package.json 沒有被改、.env 沒有被 commit。', 'git diff 只出現本堂允許修改的檔案。'] },
  { kind: 'cards', eyebrow: '收束', title: '今天學到的是可控交付，不是 AI 表演', cards: [
    { title: 'AI 是執行工具', body: '需求、限制、驗收由人固定。' },
    { title: '資料合約是防線', body: '一份合約、兩道防線：畫面擋牌 + 腳本阻擋。' },
    { title: '通知要 HITL', body: '營運訊息送出前必須有人類審核。' },
    { title: '交付看 diff 和 build', body: 'build 通過、diff 乾淨，才 commit。' },
  ] },
];

const DeckPage = ({ slide }: { slide: SlideSpec }) => {
  if (slide.kind === 'cover') {
    return (
      <div style={{ ...fill, background: 'radial-gradient(circle at 78% 20%, #ffe0c8 0, transparent 28%), linear-gradient(135deg, #f5f6f8 0%, #fbf3ee 48%, #f6f0df 100%)' }}>
        <div style={pad}>
          {slide.eyebrow ? <Eyebrow>{slide.eyebrow}</Eyebrow> : null}
          <div className="c3-rise" style={{ marginTop: 34 }}>
            <Title size={92}>{slide.title}</Title>
            {slide.lead ? <div style={{ marginTop: 28 }}><Lead>{slide.lead}</Lead></div> : null}
          </div>
        </div>
        <div style={{ position: 'absolute', right: 108, bottom: 86, fontFamily: mono, color: C.muted, fontSize: 22 }}>Dashboard · Human Review · Mock · ReAct · Git</div>
        <Foot label="U11 · C3" />
      </div>
    );
  }
  if (slide.kind === 'section') return <SectionSlide slide={slide} />;
  return (
    <Shell slide={slide}>
      {slide.kind === 'bullets' && slide.bullets ? <Bullets items={slide.bullets} /> : null}
      {slide.kind === 'cards' && slide.cards ? <Cards cards={slide.cards} /> : null}
      {slide.kind === 'code' && slide.code ? <CodeBlock code={slide.code} label={slide.label} /> : null}
      {slide.kind === 'prompt' && slide.code ? <PromptCard prompt={slide.code} label={slide.label} /> : null}
      {slide.kind === 'flow' && slide.steps ? <Flow steps={slide.steps} /> : null}
      {slide.kind === 'review' ? <ReviewMock /> : null}
      {slide.kind === 'payload' ? <PayloadMock /> : null}
      {slide.kind === 'mock' ? <MockSuccess /> : null}
      {slide.kind === 'network' ? <NetworkMock /> : null}
      {slide.kind === 'terminal' && slide.code ? <CodeBlock code={slide.code} label={slide.label ?? 'terminal'} /> : null}
    </Shell>
  );
};

const pages = slides.map((slide) => (() => <DeckPage slide={slide} />) as Page);

export const meta: SlideMeta = {
  title: 'U11-C3: 營運異常 Dashboard + LINE mock 通知',
  createdAt: '2026-07-02T00:00:00.000Z',
};

export const notes: (string | undefined)[] = slides.map((slide, i) => `${i + 1}. ${slide.title.replace(/\n/g, ' ')}`);

export default pages satisfies Page[];
