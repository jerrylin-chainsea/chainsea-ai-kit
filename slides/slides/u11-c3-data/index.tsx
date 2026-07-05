import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';
import type { ReactNode } from 'react';
import pushOverview from './assets/push-center-overview.png';
import flexAnomaly from './assets/flex-preview-anomaly.png';
import flexOrder from './assets/flex-preview-order.png';

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
  green: '#0c8a55',
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
  | 'analogy'
  | 'ask'
  | 'shot'
  | 'twoshot';

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
  img?: string;
  img2?: string;
  caption?: string;
  caption2?: string;
  frame?: string;
  analogy?: string;
  ask?: string;
  answer?: string;
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
    <Foot label={slide.footer ?? 'U11 · C3 · 訂單可視化 + LINE Flex'} />
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
  <div style={{ display: 'flex', alignItems: 'stretch', gap: 10, maxWidth: 1600 }}>
    {steps.map((step, i) => (
      <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1 }}>
        <div style={{ background: C.card, border: `2px solid ${toneFor(i)}`, borderRadius: 16, minHeight: 128, padding: '18px 10px', display: 'grid', placeContent: 'center', textAlign: 'center', fontSize: 24, fontWeight: 850, whiteSpace: 'pre-wrap', lineHeight: 1.25 }}>{step}</div>
        {i < steps.length - 1 ? <span style={{ fontFamily: mono, color: C.faint, fontSize: 30 }}>→</span> : null}
      </div>
    ))}
  </div>
);

// 李宏毅式生活化比喻卡
const AnalogyCard = ({ text }: { text: string }) => (
  <div style={{ background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: 20, padding: '30px 36px', maxWidth: 1540, display: 'flex', gap: 22, alignItems: 'flex-start' }}>
    <span style={{ fontSize: 52, flexShrink: 0 }}>💡</span>
    <div style={{ fontSize: 34, lineHeight: 1.5, color: '#7a4a00', fontWeight: 650, whiteSpace: 'pre-wrap' }}>{text}</div>
  </div>
);

// 「你可能會問」— 先幫學生把最常見的疑問講出來
const AskCard = ({ ask, answer }: { ask: string; answer: string }) => (
  <div style={{ display: 'grid', gap: 16, maxWidth: 1500 }}>
    <div style={{ display: 'flex', gap: 14, alignItems: 'center', background: '#eef4ff', border: `2px solid ${C.blue}`, borderRadius: 16, padding: '20px 26px' }}>
      <span style={{ fontSize: 30 }}>🙋</span>
      <span style={{ fontSize: 30, fontWeight: 850, color: C.blue, lineHeight: 1.35 }}>你可能會問:{ask}</span>
    </div>
    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '22px 28px' }}>
      <span style={{ fontSize: 30, color: C.green }}>✓</span>
      <span style={{ fontSize: 29, lineHeight: 1.5, color: C.ink }}>{answer}</span>
    </div>
  </div>
);

// 真截圖:放進瀏覽器外框
const BrowserShot = ({ img, frame = 'localhost:5180', height = 560 }: { img: string; frame?: string; height?: number }) => (
  <div style={{ borderRadius: 16, overflow: 'hidden', border: `1px solid ${C.line}`, boxShadow: '0 30px 70px -40px rgba(20,37,31,.55)', background: '#fff', display: 'inline-block' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px', background: '#eef2f5', borderBottom: `1px solid ${C.line}` }}>
      {['#ff5f57', '#febc2e', '#28c840'].map((c) => <span key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />)}
      <span style={{ marginLeft: 10, fontFamily: mono, fontSize: 16, color: C.muted }}>{frame}</span>
    </div>
    <img src={img} alt="" style={{ display: 'block', height, width: 'auto', objectFit: 'contain' }} />
  </div>
);

const Shot = ({ slide }: { slide: SlideSpec }) => (
  <div style={{ display: 'grid', gap: 16, justifyItems: 'center' }}>
    <BrowserShot img={slide.img!} frame={slide.frame} height={560} />
    {slide.caption ? <div style={{ fontSize: 25, color: C.muted, lineHeight: 1.45, textAlign: 'center', maxWidth: 1300 }}>{slide.caption}</div> : null}
  </div>
);

const TwoShot = ({ slide }: { slide: SlideSpec }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 26, maxWidth: 1560, justifyItems: 'center' }}>
    <div style={{ display: 'grid', gap: 12, justifyItems: 'center' }}>
      <BrowserShot img={slide.img!} frame={slide.frame} height={470} />
      {slide.caption ? <div style={{ fontSize: 24, color: C.muted, textAlign: 'center' }}>{slide.caption}</div> : null}
    </div>
    <div style={{ display: 'grid', gap: 12, justifyItems: 'center' }}>
      <BrowserShot img={slide.img2!} frame={slide.frame} height={470} />
      {slide.caption2 ? <div style={{ fontSize: 24, color: C.muted, textAlign: 'center' }}>{slide.caption2}</div> : null}
    </div>
  </div>
);

const slides: SlideSpec[] = [
  { kind: 'cover', eyebrow: 'U11 · 第 3 堂 / 共 4 堂 · 4 小時', title: '訂單可視化 + LINE OA Flex\n做一則真的會送出去的通知', lead: '今天先看訂單資料如何變成互動畫面，再把同一筆訂單做成 LINE Flex Message：載入資料、生成預覽、人工審核，最後真的推播到 LINE OA。' },

  { kind: 'analogy', eyebrow: '先建立直覺', footer: 'U11·C3 ｜ 講義:U3/STEP-01', title: '資料不是表格而已，它可以變成畫面，也可以變成訊息', analogy: '訂單資料先變成畫面狀態：流程點、顏色、動畫位置。\n\n接著同一筆訂單會變成 LINE Flex 卡片，真的送到 LINE OA。\n\nC3 要讓學生感覺到：原來資料不是死的，資料可以變成一個會被人收到的產品體驗。' },

  { kind: 'bullets', eyebrow: '今天多學三個前端詞', footer: 'U11·C3 ｜ 講義:U3/STEP-01', title: '你不需要從零寫 React，但要看得懂專案怎麼拆', bullets: ['component：OrderFlow.jsx 裡的 OrderLane，把一筆訂單畫成一條流程。', 'CSS：styles.css 裡的 flow-dot / order-lane，決定狀態顏色與版面。', 'src：前端主要程式都在 web-lab/src，不要看到資料夾就慌。', 'three.js：OrderFlowCanvas.jsx 把訂單狀態變成流動箱子動畫。'] },

  { kind: 'flow', eyebrow: '今日主線', footer: 'U11·C3 ｜ 講義:U3/START-HERE.md', title: '同一筆訂單，走成一個真的通知', steps: ['訂單資料\n狀態欄位', 'React / CSS\n互動畫面', 'LINE Flex\n卡片預覽', '人工審核\ncheckbox', 'LINE OA\n真推播', '驗收\n收到訊息'] },

  { kind: 'shot', eyebrow: '今日成果畫面', footer: 'U11·C3 ｜ 講義:U3/ACCEPTANCE.md', title: '這就是今天要做出來的「推播中心」', img: pushOverview, caption: '上面是範本切換(營運異常 / 訂單資訊),下面是五步:載入 → 檢查 → 預覽 → 人審 → 推播。整條線在同一個畫面上完成。' },

  { kind: 'cards', eyebrow: '完成的定義 · DoD', footer: 'U11·C3 ｜ 講義:START-HERE.md(DoD)', title: 'AI/系統做出來不算完成,通過驗收才算完成', cards: [
    { title: '畫面', body: '訂單可視化正常，訂單資訊 Flex 預覽正確。', color: C.orange },
    { title: '推播', body: '按鈕按下去，LINE OA / 群組 / 手機真的收到訊息。', color: C.blue },
    { title: 'diff', body: 'git diff 只有本堂允許檔案。', color: C.amber },
    { title: 'build', body: 'npm run build 綠色通過、bundle 無 token。', color: C.red },
    { title: 'human review', body: 'checkbox 是你勾的、修正是你放行的。', color: '#5a6270' },
  ] },

  // ── 段 1 ─────────────────────────────────────────────
  { kind: 'section', sectionNo: '1', footer: '講義:U3/STEP-01-dashboard-buttons.md', time: '0:15 - 1:20', title: '先看訂單可視化，再進推播中心', lead: '一鍵啟動，先切到「訂單可視化」看資料如何驅動畫面，再切到「LINE 推播中心」走按鈕主線。' },

  { kind: 'cards', eyebrow: '段 1 · 訂單可視化', footer: 'U11·C3 ｜ 講義:U3/STEP-01 §1–2', title: '一筆訂單會影響四種畫面訊號', cards: [
    { title: 'status', body: '待揀貨 / 已揀貨 / 待出貨 / 缺料等待，決定流程點位置與顏色。', color: C.orange },
    { title: 'zone', body: '顯示訂單所在區域，讓後台與動畫有一致語言。', color: C.blue },
    { title: 'amount', body: '顯示風險金額，不只是裝飾數字。', color: C.amber },
    { title: 'eta', body: '對營運來說，下一步要看 ETA 是否會延遲。', color: C.red },
  ] },

  { kind: 'code', eyebrow: '段 1 · 前端檔案', footer: 'U11·C3 ｜ 講義:U3/STEP-01 §2', title: '三個檔案先看懂，不需要整個 React 都會', label: 'web-lab/src', code: `OrderFlow.jsx        // React component:一筆訂單畫成一條 lane
OrderFlowCanvas.jsx  // three.js:訂單流動動畫
styles.css           // CSS:狀態顏色、版面、RWD` },

  { kind: 'code', eyebrow: '段 1 · LINE 資料來源', footer: 'U11·C3 ｜ 講義:U3/STEP-01 §2', title: '今天要送出去的是這筆訂單', label: 'data-lab/orders.json', code: `{
  "order_id": "SO-20260705-021",
  "customer": "朗日餐飲集團",
  "channel": "LINE OA",
  "status": "待出貨",
  "amount": 4860,
  "eta": "15:10",
  "items": [
    { "name": "批發出貨封箱耗材組", "qty": 6 },
    { "name": "溫控紀錄貼片", "qty": 8 }
  ]
}` },

  { kind: 'cards', eyebrow: '段 1 · 今天先收斂', footer: 'U11·C3 ｜ 講義:U3/STEP-01', title: '先做好一則真的能送出的訂單通知', cards: [
    { title: '訂單資訊', body: '讀 data-lab/orders.json。卡片內容是客戶、通路、狀態、金額、品項明細。', color: C.blue },
    { title: 'Flex 預覽', body: '先看 LINE 上大概長什麼樣，不要急著送。', color: C.orange },
    { title: '真推播', body: '人審後送到 LINE OA。收到訊息才是今天的核心成果。', color: C.green },
  ] },

  { kind: 'cards', eyebrow: '段 1 · Button 1-3', footer: 'U11·C3 ｜ 講義:U3/STEP-01 §2–4', title: '照順序按,每按一步就驗一步', cards: [
    { title: '1 載入範例資料', body: '畫面出現該範本的欄位摘要(異常:high 徽章;訂單:客戶與品項)。', color: C.orange },
    { title: '2 檢查資料合約', body: '綠色「資料合約通過:必要欄位齊全」。', color: C.blue },
    { title: '3 生成 Flex 視覺預覽', body: '看到 LINE 上大概長怎樣的卡片;還可切「看 JSON」。', color: C.amber },
  ] },

  { kind: 'twoshot', eyebrow: '段 1 · 視覺預覽', footer: 'U11·C3 ｜ 講義:U3/STEP-01 §4', title: '預覽是「LINE 上長怎樣」，不是一串 JSON 作文', img: flexOrder, caption: '今天主線：訂單資訊 Flex', img2: flexAnomaly, caption2: '補充範本：營運異常' },

  // ── 段 2 ─────────────────────────────────────────────
  { kind: 'section', sectionNo: '2', footer: '講義:U3/STEP-02-hitl-review.md', time: '1:20 - 2:10', title: 'Human-in-the-loop：真的送出前，人要負責', lead: '系統把通知準備好，不代表可以送。人審是發送前的閘門，沒勾 checkbox，推播按鈕就是暗的。' },

  { kind: 'prompt', eyebrow: '段 2 · Prompt 卡 1', footer: 'U11·C3 ｜ 講義:U3/PROMPT-CARD 卡 1', title: 'Flex Message 內容審核，不改檔', label: '固定學生 prompt', code: `請檢查目前 LINE 推播中心的 Flex 視覺預覽。
不要改檔。
請判斷:
1. 這張卡片要送給誰
2. 訂單編號、客戶、狀態、金額是否合理
3. 文字看起來像不像真的營運通知
4. 送出前還需要人類確認什麼
5. 可不可以按「推播 LINE Flex」` },

  { kind: 'cards', eyebrow: '段 2 · 真送驗收', footer: 'U11·C3 ｜ 講義:U3/STEP-02 §5', title: '按下「推播 LINE Flex」後，要真的收到', cards: [
    { title: '畫面證據', body: '推播中心顯示已送出。', color: C.green },
    { title: '手機證據', body: 'LINE OA / 群組 / 手機收到 Flex Message。', color: C.blue },
    { title: '課堂證據', body: '可以截圖放進報告，token 不入鏡。', color: C.orange },
  ] },

  { kind: 'cards', eyebrow: '段 2 · 三種狀態', footer: 'U11·C3 ｜ 講義:U3/PITFALL.md', title: '如果結果不是收到訊息，就看狀態回頭修', cards: [
    { title: 'sent', body: '主線成功：LINE OA 真的收到 Flex Message。', color: C.green },
    { title: '[mock]', body: '設定還沒進真送模式，檢查 .env 與重啟 dev。', color: C.blue },
    { title: 'blocked / 合約錯', body: '沒勾人審、或資料合約沒過，系統會擋下。', color: C.red },
  ] },

  // ── 段 3 ─────────────────────────────────────────────
  { kind: 'section', sectionNo: '3', footer: '講義:U3/API-FLOW.md', time: '2:10 - 2:35', title: '只講必要邊界：token 不能進前端', lead: '這不是 API 細節課。學生只要知道：Flex 是卡片資料，token 是 LINE OA 鑰匙，送出橋接由老師寫好。' },

  { kind: 'analogy', eyebrow: '段 3 · 建立直覺', footer: 'U11·C3 ｜ 講義:U3/STEP-02 §4', title: 'token 就像你家鑰匙', analogy: 'channel access token 代表「用你的 LINE 官方帳號發訊息」的權限。\n\n把它放進前端 = 把鑰匙貼在大門上,每個打開網頁的人都拿得到。\n\n所以:前端只按門鈴(呼叫自己的後端),真正開門(打 api.line.me)的是後端。鑰匙只留在後端。' },

  // ── 段 4 ─────────────────────────────────────────────
  { kind: 'section', sectionNo: '4', footer: '講義:U3/STEP-02 §5', time: '2:35 - 3:05', title: '今天就真送：設好 .env，按鈕才算有成果', lead: '老師提供 LINE OA 設定值。學生完成 Flex 預覽與人審後，按下推播，真的在 LINE 收到訊息。' },

  { kind: 'code', eyebrow: '段 4 · 真送三條件', footer: 'U11·C3 ｜ 講義:U3/STEP-02 §5', title: '複製 .env.example → 填三個變數 → 重啟 dev', label: 'line-lab/.env(不會被 commit)', code: `LINE_CHANNEL_ACCESS_TOKEN=你的 channel access token
LINE_TARGET_ID=你的 userId 或 groupId
LINE_REAL_SEND=1

# 重要:改完 .env 一定要「重新啟動 npm run dev」才會生效
# 之後在 LINE 推播中心按「推播 LINE Flex」→ 手機真的收到` },

  { kind: 'bullets', eyebrow: '段 4 · 排錯', footer: 'U11·C3 ｜ 講義:U3/PITFALL.md', title: '真送沒成功時，先查這四件事', bullets: ['看到 [mock]：LINE_REAL_SEND 不是 1，或 dev server 沒重啟。', '按了沒反應 / network error：多半是在 build/preview 模式，回到 npm run dev。', '401 / 403：token 錯或過期，換老師提供的新 token。', '顯示成功但沒收到：檢查 LINE_TARGET_ID 是否是正確 userId / groupId。'] },

  // ── 段 5:ReAct 修錯(保留這堂的除錯訓練)──────────────
  { kind: 'section', sectionNo: '5', footer: '講義:U3/STEP-03-react-debug.md', time: '3:05 - 3:35', title: '製造合約錯 → ReAct 修好', lead: '親手把 risk_level 改成中文「嚴重」。擋牌會自己出現、推播按鈕變暗 —— 然後用固定格式把它修好。' },

  { kind: 'code', eyebrow: '段 5 · 製造指定錯誤', footer: 'U11·C3 ｜ 講義:U3/STEP-03 §1–2', title: '改值,不改語法', label: 'data-lab/report.json', code: `"risk_level": "high"   →   "risk_level": "嚴重"

# 存檔後(不按任何按鈕):
# 畫面:紅色擋牌出現,預覽 / 推播按鈕全部關閉
#   資料合約錯誤: risk_level 必須是 low / medium / high,目前是 "嚴重"
# 後端:handlePush 也會回 contract_error(同一句錯誤)` },

  { kind: 'prompt', eyebrow: '段 5 · Prompt 卡 2', footer: 'U11·C3 ｜ 講義:U3/PROMPT-CARD 卡 2', title: 'ReAct debug:先分析,不改檔', label: '固定學生 prompt', code: `你現在扮演 debugger。先不要改檔。
目前問題:LINE 推播中心出現紅色擋牌,risk_level 變成中文「嚴重」,
但資料合約規定只能是 low / medium / high。
請用以下格式回答:
Expected / Actual / Reason / Act / Observe /
Minimal Patch / Verify / Blocker` },

  { kind: 'flow', eyebrow: '段 5 · ReAct', footer: 'U11·C3 ｜ 講義:U3/STEP-03 §3', title: '除錯不是瞎改,是固定節奏', steps: ['Expected\n合約允許值', 'Actual\nrisk_level=嚴重', 'Reason · Act\nObserve', 'Minimal Patch\n只改一行', 'Verify\n擋牌消失'] },

  // ── 段 6:收尾 ────────────────────────────────────────
  { kind: 'code', eyebrow: '段 6 · 收尾', footer: 'U11·C3 ｜ 講義:U3/STEP-03 §5', time: '3:35 - 3:55', title: '最後照這組指令收乾淨', label: 'terminal', code: `cd web-lab
npm run build
cd ..
git status
git diff
git add .
git commit -m "完成訂單可視化與 LINE OA Flex 真推播"` },

  { kind: 'bullets', eyebrow: '段 6 · 驗收標準', footer: 'U11·C3 ｜ 講義:U3/ACCEPTANCE.md', title: '看到這些才算完成', bullets: ['訂單資訊走通：載入 → 檢查 → 預覽 → 人審 → 推播。', 'LINE OA / 群組 / 手機真的收到 Flex Message。', '未勾 checkbox 時推播按鈕是暗的、按不下去。', 'token 只在 line-lab/.env，沒有進前端、簡報或 commit。', 'npm run build 通過。', 'ReAct 是加分：把「嚴重」修回合約允許值，擋牌消失。'] },

  { kind: 'cards', eyebrow: '收束 · 回顧四堂', title: '你從「會問 AI」正在變成「會做、會管」', cards: [
    { title: 'C1 進得了專案', body: '打開、跑起來、改一個字、存檔。' },
    { title: 'C2 管得住 AI', body: 'AGENTS/CLAUDE + planner→人審→implementer。' },
    { title: 'C3 做出真推播(今天)', body: '訂單可視化、Flex 預覽、人審、LINE OA 真推播。', color: C.orange },
    { title: 'C4 下一堂', body: '把流程自動化,再用三個 MCP 幫 AI 接上外部工具。' },
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
        <div style={{ position: 'absolute', right: 108, bottom: 86, fontFamily: mono, color: C.muted, fontSize: 22 }}>訂單可視化 · 推播中心 · Human Review · ReAct</div>
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
      {slide.kind === 'analogy' && slide.analogy ? <AnalogyCard text={slide.analogy} /> : null}
      {slide.kind === 'ask' && slide.ask ? <AskCard ask={slide.ask} answer={slide.answer ?? ''} /> : null}
      {slide.kind === 'shot' ? <Shot slide={slide} /> : null}
      {slide.kind === 'twoshot' ? <TwoShot slide={slide} /> : null}
    </Shell>
  );
};

const pages = slides.map((slide) => (() => <DeckPage slide={slide} />) as Page);

export const meta: SlideMeta = {
  title: 'U11-C3: 訂單可視化 + LINE OA Flex 真推播',
  createdAt: '2026-07-04T00:00:00.000Z',
};

export const notes: (string | undefined)[] = slides.map((slide, i) => `${i + 1}. ${slide.title.replace(/\n/g, ' ')}`);

export default pages satisfies Page[];
