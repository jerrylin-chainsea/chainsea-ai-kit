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
    <Foot label={slide.footer ?? 'U11 · C3 · 訂單看板 + LINE Flex'} />
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
  { kind: 'cover', eyebrow: 'U11 · 第 3 堂 / 共 4 堂 · 4 小時', title: '從「看到資料」到\n「真的送出 LINE Flex」', lead: '今天把 BOBA TIDE 的一筆訂單，從訂單看板一路送成真的 LINE Flex 通知：生成預覽、人工審核，最後真的推播到 LINE OA。' },

  { kind: 'analogy', eyebrow: 'U2 回顧 → U3 定位', footer: 'U11·C3 ｜ 講義:U3/STEP-01', title: 'U2 管住的是 AI 改 code；U3 換成資料真的送出去', analogy: 'U2 練的是：AI 改程式碼要可控，計畫先過人審，實作才小範圍動手。\n\n今天資料不再只留在畫面上：同一筆訂單會真的變成一則送到 LINE OA 的通知，送出去之前，一樣要先過人審。\n\n控制的對象從「AI 改了什麼」擴大成「系統送出了什麼」。' },

  { kind: 'cards', eyebrow: '先講清楚全局 · Agentic Engineering', footer: 'U11·C3 ｜ 這三堂課同一條主線', title: '這三堂課，其實都是同一件事', lead: 'Agentic Engineering──設計「會做事」的 AI 系統──拆成三塊，U2 到 U4 各教一塊，今天輪到中間這塊。', cards: [
    { title: 'U2 · 控制輸出', body: 'AI 能寫什麼 code：planner → 人審 → implementer，決定 AI 能改哪些檔案。', color: C.blue },
    { title: 'U3 · 控制行動（今天）', body: 'AI 能不能對真實世界採取行動：human-in-the-loop 閘門 + token 工具邊界，決定這則通知能不能真的送出去。', color: C.orange },
    { title: 'U4 · 擴充能力', body: 'AI 能碰到哪些外部工具、能不能多個角色協作：MCP 接外部工具、ops agent 三角色分工。', color: '#5a6270' },
  ] },

  { kind: 'flow', eyebrow: '今日主線 · 大 picture', footer: 'U11·C3 ｜ 講義:U3/START-HERE.md', title: '一筆訂單，怎麼變成一則真的通知', steps: ['資料 data\n訂單欄位', 'payload\n包成固定格式', 'API\n呼叫自己的後端', 'token\n後端拿鑰匙開門', 'LINE OA\n真的送出'] },

  { kind: 'cards', eyebrow: '今天先講清楚五個詞', footer: 'U11·C3 ｜ 講義:U3/API-FLOW.md', title: '這五個詞，今天會一直用到', cards: [
    { title: '資料 data', body: '一筆訂單本身：客戶、通路、狀態、金額。今天放在 shopData.js 與 data-lab/orders.json。', color: C.orange },
    { title: 'payload', body: '把資料包成「別的系統看得懂」的固定格式，準備送出去的那包內容。', color: C.blue },
    { title: 'API', body: '一個固定的門：送對格式，它回你結果。今天呼叫的是自己的後端 /api/send-line-flex。', color: C.amber },
    { title: 'token', body: '證明「有權限用這個 LINE OA 帳號發訊息」的密鑰，只放在 line-lab/.env。這就是 agentic engineering 說的工具邊界。', color: C.red },
    { title: 'webhook', body: 'LINE 平台主動打回來的訊息，方向跟今天的推播相反，先知道概念就好。', color: '#5a6270' },
  ] },

  { kind: 'shot', eyebrow: '今日成果畫面', footer: 'U11·C3 ｜ 講義:U3/ACCEPTANCE.md', title: '這就是今天要做出來的「推播中心」', img: pushOverview, caption: '這張是推播中心 UI 示意：上面是範本切換(營運異常 / 訂單資訊)，下面是五步：載入 → 檢查 → 預覽 → 人審 → 推播，整條線在同一個畫面上完成。' },

  { kind: 'cards', eyebrow: '完成的定義 · DoD', footer: 'U11·C3 ｜ 講義:START-HERE.md(DoD)', title: 'AI / 系統做出來不算完成,通過驗收才算完成', cards: [
    { title: '畫面', body: '訂單看板正常，訂單資訊 Flex 預覽正確。', color: C.orange },
    { title: '推播', body: '按鈕按下去，LINE OA / 群組 / 手機真的收到訊息。', color: C.blue },
    { title: 'diff', body: 'git diff 只有本堂允許檔案。', color: C.amber },
    { title: 'build', body: 'npm run build 綠色通過、bundle 無 token。', color: C.red },
    { title: 'human review', body: 'checkbox 是你勾的、修正是你放行的。', color: '#5a6270' },
  ] },

  // ── 段 1：BOBA TIDE 情境，訂單怎麼進到訂單看板 ──────────
  { kind: 'section', sectionNo: '1', footer: '講義:U3/STEP-01-dashboard-buttons.md', time: '0:15 - 0:50', title: 'BOBA TIDE 情境：訂單怎麼進到訂單看板', lead: '備料控制台的下一步，是把同一批訂單攤開成看得懂的看板：每一筆訂單的狀態變成一條畫面上的流程。' },

  { kind: 'code', eyebrow: '段 1 · 資料在哪', footer: 'U11·C3 ｜ 講義:U3/STEP-01 §1', title: '訂單看板讀的是這份 shopData.js', label: 'web-lab/src/shopData.js', code: `export const drinkOrders = [
  {
    id: 'BT-20260706-021',
    customer: '林小姐',
    channel: 'LINE OA',
    status: '製作中',
    amount: 65,
    eta: '15:10',
  },
  // ...其他訂單
];` },

  { kind: 'cards', eyebrow: '段 1 · 一筆訂單的四個欄位', footer: 'U11·C3 ｜ 講義:U3/STEP-01 §1–2', title: '這四個欄位決定畫面長怎樣', cards: [
    { title: 'channel', body: 'LINE OA / 外送平台 / 櫃台。今天要真的送出去的是 LINE OA 這一種。', color: C.orange },
    { title: 'status', body: '待製作 / 製作中 / 待取餐 / 已取餐 / 缺料等待，決定流程點位置與顏色。', color: C.blue },
    { title: 'amount', body: '這筆訂單的金額，不是裝飾數字。', color: C.amber },
    { title: 'eta', body: '客人預期什麼時候拿到；快超過就是提醒的理由。', color: C.red },
  ] },

  { kind: 'code', eyebrow: '段 1 · 前端檔案', footer: 'U11·C3 ｜ 講義:U3/STEP-01 §2', title: '三個檔案先看懂，不需要整個 React 都會', label: 'web-lab/src', code: `OrderBoard.jsx        // React component:一筆訂單畫成一條 lane
OrderBoardCanvas.jsx  // three.js:訂單狀態動畫
styles.css            // CSS:狀態顏色、版面、RWD` },

  // ── 段 2：Flex Message，同一筆訂單變成可預覽的 LINE 卡片 ──
  { kind: 'section', sectionNo: '2', footer: '講義:U3/STEP-01-dashboard-buttons.md', time: '0:50 - 1:25', title: '同一筆訂單，變成一張 LINE 卡片', lead: '訂單看板是給你看的畫面；Flex Message 是給 LINE OA 用的 payload。兩邊講的是同一種資料語言。' },

  { kind: 'code', eyebrow: '段 2 · 這筆會變成 Flex', footer: 'U11·C3 ｜ 講義:U3/STEP-01 §2', title: 'LINE 推播中心讀的是這份範例', label: 'data-lab/orders.json', code: `{
  "order_id": "BT-20260706-018",
  "customer": "陳同學",
  "channel": "外送平台",
  "status": "待製作",
  "amount": 130,
  "items": [
    { "name": "黑糖珍珠鮮奶", "qty": 2, "price": 65 }
  ]
}` },

  { kind: 'bullets', eyebrow: '段 2 · 兩份資料不是同一份', footer: 'U11·C3 ｜ 講義:U3/STEP-01 §2', title: '訂單看板跟推播中心，讀的是兩個檔案', bullets: ['訂單看板讀 shopData.js 的整批 drinkOrders，用來畫看板上的每一條 lane。', 'LINE 推播中心的「訂單資訊」範本讀的是另一份 data-lab/orders.json，一次只示範送出「一筆」。', '兩邊欄位語言一致(channel / status / amount)，但檔案是分開的：改了 shopData.js，data-lab/orders.json 不會跟著變。'] },

  { kind: 'cards', eyebrow: '段 2 · Button 1-3', footer: 'U11·C3 ｜ 講義:U3/STEP-01 §2–4', title: '照順序按,每按一步就驗一步', cards: [
    { title: '1 載入範例資料', body: '畫面出現這筆訂單的欄位摘要：客戶、通路、狀態、金額、品項。', color: C.orange },
    { title: '2 檢查資料合約', body: '綠色「資料合約通過:必要欄位齊全」。', color: C.blue },
    { title: '3 生成 Flex 視覺預覽', body: '看到 LINE 上大概長怎樣的卡片;還可切「看 JSON」。', color: C.amber },
  ] },

  { kind: 'twoshot', eyebrow: '段 2 · 視覺預覽', footer: 'U11·C3 ｜ 講義:U3/STEP-01 §4', title: '預覽是「LINE 上長怎樣」，不是一串 JSON 作文', img: flexOrder, caption: '今天主線：訂單資訊 Flex', img2: flexAnomaly, caption2: '補充範本：營運異常' },

  // ── 段 3：Mock vs Real ───────────────────────────────
  { kind: 'section', sectionNo: '3', footer: '講義:U3/STEP-02-hitl-review.md', time: '1:25 - 1:45', title: 'Mock 是安全預設，真送才是今天的主線', lead: '沒設定 token 時，系統會自動走 mock，不會真的打到 LINE。真送需要 .env 與重啟 dev server，是今天要做到的成果。' },

  { kind: 'cards', eyebrow: '段 3 · 兩種模式', footer: 'U11·C3 ｜ 講義:U3/STEP-02 §5', title: '差別在有沒有這三個條件都齊', cards: [
    { title: 'mock（預設 fallback）', body: '沒有 token、沒有 LINE_REAL_SEND=1：安全防線，不會真的呼叫 LINE。', color: C.blue },
    { title: 'real（今天的主線）', body: '填好 .env 三個變數＋重啟 dev：按下推播，手機真的收到。', color: C.green },
  ] },

  // ── 段 4：Human-in-the-loop ──────────────────────────
  { kind: 'section', sectionNo: '4', footer: '講義:U3/STEP-02-hitl-review.md', time: '1:45 - 2:00', title: 'Human-in-the-loop：沒勾，就送不出去', lead: '系統把通知準備好，不代表可以送。人審是發送前的閘門，沒勾 checkbox，推播按鈕就是暗的。' },

  { kind: 'prompt', eyebrow: '段 4 · Prompt 卡 1', footer: 'U11·C3 ｜ 講義:U3/PROMPT-CARD 卡 1', title: 'Flex Message 內容審核，不改檔', label: '固定學生 prompt', code: `請檢查目前 LINE 推播中心的 Flex 視覺預覽。
不要改檔。
請判斷:
1. 這張卡片要送給誰
2. 訂單編號、客戶、狀態、金額是否合理
3. 文字看起來像不像真的營運通知
4. 送出前還需要人類確認什麼
5. 可不可以按「推播 LINE Flex」` },

  // ── 段 5：真送流程 ───────────────────────────────────
  { kind: 'section', sectionNo: '5', footer: '講義:U3/API-FLOW.md', time: '2:00 - 2:50', title: '真送流程：前端只按門鈴，後端才開門', lead: '前端永遠不會直接打 api.line.me。推播按鈕呼叫的是本機後端 /api/send-line-flex，token 只留在 line-lab/.env。' },

  { kind: 'analogy', eyebrow: '段 5 · 建立直覺', footer: 'U11·C3 ｜ 講義:U3/STEP-02 §4', title: 'token 就像你家鑰匙', analogy: 'channel access token 代表「用這個 LINE OA 帳號發訊息」的權限。\n\n放進前端 = 把鑰匙貼在大門上,打開網頁的每個人都拿得到。\n\n所以:前端只打自己的 /api/send-line-flex(按門鈴),真正打 api.line.me(開門)的是後端。鑰匙全程留在 line-lab/.env,不進前端、不進簡報、不進 git diff、不進截圖。' },

  { kind: 'flow', eyebrow: '段 5 · 實際路徑', footer: 'U11·C3 ｜ 講義:U3/API-FLOW.md', title: '按一次推播，實際走的路徑', steps: ['瀏覽器\n按下推播', '/api/send-line-flex\n本機後端', 'line-lab/.env\n讀 token', 'api.line.me\n真正呼叫', 'LINE OA\n手機收到'] },

  { kind: 'code', eyebrow: '段 5 · 真送三條件', footer: 'U11·C3 ｜ 講義:U3/STEP-02 §5', title: '複製 .env.example → 填三個變數 → 重啟 dev', label: 'line-lab/.env(不會被 commit)', code: `LINE_CHANNEL_ACCESS_TOKEN=你的 channel access token
LINE_TARGET_ID=你的 userId 或 groupId
LINE_REAL_SEND=1

# 重要:改完 .env 一定要「重新啟動 npm run dev」才會生效
# 之後在 LINE 推播中心按「推播 LINE Flex」→ 手機真的收到` },

  { kind: 'bullets', eyebrow: '段 5 · 排錯', footer: 'U11·C3 ｜ 講義:U3/PITFALL.md', title: '真送沒成功時，先查這四件事', bullets: ['看到 [mock]：LINE_REAL_SEND 不是 1，或 dev server 沒重啟。', '按了沒反應 / network error：多半是在 build/preview 模式，回到 npm run dev。', '401 / 403：token 錯或過期，換老師提供的新 token。', '顯示成功但沒收到：檢查 LINE_TARGET_ID 是否是正確 userId / groupId。'] },

  { kind: 'cards', eyebrow: '段 5 · 真送驗收', footer: 'U11·C3 ｜ 講義:U3/STEP-02 §5', title: '按下「推播 LINE Flex」後，要真的收到', cards: [
    { title: '畫面證據', body: '推播中心顯示已送出。', color: C.green },
    { title: '手機證據', body: 'LINE OA / 群組 / 手機收到 Flex Message。', color: C.blue },
    { title: '課堂證據', body: '可以截圖放進報告，token 不入鏡。', color: C.orange },
  ] },

  { kind: 'cards', eyebrow: '段 5 · 三種狀態', footer: 'U11·C3 ｜ 講義:U3/PITFALL.md', title: '如果結果不是收到訊息，就看狀態回頭修', cards: [
    { title: 'sent', body: '主線成功：LINE OA 真的收到 Flex Message。', color: C.green },
    { title: '[mock]', body: '設定還沒進真送模式，檢查 .env 與重啟 dev。', color: C.blue },
    { title: 'blocked / 合約錯', body: '沒勾人審、或資料合約沒過，系統會擋下。', color: C.red },
  ] },

  // ── 段 6：ReAct 修錯 ─────────────────────────────────
  { kind: 'section', sectionNo: '6', footer: '講義:U3/STEP-03-react-debug.md', time: '2:50 - 3:25', title: '製造合約錯 → ReAct 修好', lead: '親手把 risk_level 改成中文「嚴重」。擋牌會自己出現、推播按鈕變暗 —— 然後用固定格式把它修好。' },

  { kind: 'code', eyebrow: '段 6 · 製造指定錯誤', footer: 'U11·C3 ｜ 講義:U3/STEP-03 §1–2', title: '改值,不改語法', label: 'data-lab/report.json', code: `"risk_level": "high"   →   "risk_level": "嚴重"

# 存檔後(不按任何按鈕):
# 畫面:紅色擋牌出現,預覽 / 推播按鈕全部關閉
#   資料合約錯誤: risk_level 必須是 low / medium / high,目前是 "嚴重"
# 後端:handlePush 也會回 contract_error(同一句錯誤)` },

  { kind: 'prompt', eyebrow: '段 6 · Prompt 卡 2', footer: 'U11·C3 ｜ 講義:U3/PROMPT-CARD 卡 2', title: 'ReAct debug:先分析,不改檔', label: '固定學生 prompt', code: `你現在扮演 debugger。先不要改檔。
目前問題:LINE 推播中心出現紅色擋牌,risk_level 變成中文「嚴重」,
但資料合約規定只能是 low / medium / high。
請用以下格式回答:
Expected / Actual / Reason / Act / Observe /
Minimal Patch / Verify / Blocker` },

  { kind: 'flow', eyebrow: '段 6 · ReAct', footer: 'U11·C3 ｜ 講義:U3/STEP-03 §3', title: '除錯不是瞎改,是固定節奏', steps: ['Expected\n合約允許值', 'Actual\nrisk_level=嚴重', 'Reason · Act\nObserve', 'Minimal Patch\n只改一行', 'Verify\n擋牌消失'] },

  // ── 段 7：驗收收束 ───────────────────────────────────
  { kind: 'code', eyebrow: '段 7 · 收尾', footer: 'U11·C3 ｜ 講義:U3/STEP-03 §5', time: '3:25 - 3:50', title: '最後照這組指令收乾淨', label: 'terminal', code: `cd web-lab
npm run build
cd ..
git status
git diff
git add .
git commit -m "完成訂單看板與 LINE OA Flex 真推播"` },

  { kind: 'bullets', eyebrow: '段 7 · 驗收標準', footer: 'U11·C3 ｜ 講義:U3/ACCEPTANCE.md', title: '看到這些才算完成', bullets: ['訂單資訊走通：載入 → 檢查 → 預覽 → 人審 → 推播。', 'LINE OA / 群組 / 手機真的收到 Flex Message。', '未勾 checkbox 時推播按鈕是暗的、按不下去。', 'token 只在 line-lab/.env，沒有進前端、簡報或 commit。', 'npm run build 通過。', 'ReAct 是加分：把「嚴重」修回合約允許值，擋牌消失。'] },

  { kind: 'cards', eyebrow: '收束 · 回顧四堂', title: '從「會問 AI」到「會做、會管」', cards: [
    { title: 'C1 進得了專案', body: '打開、跑起來、改一個字、存檔。' },
    { title: 'C2 管得住 AI', body: 'AGENTS/CLAUDE + planner→人審→implementer。(Agentic Engineering：控制輸出)' },
    { title: 'C3 做出真推播(今天)', body: 'BOBA TIDE 訂單看板、Flex 預覽、人審、LINE OA 真推播。(Agentic Engineering：控制行動)', color: C.orange },
    { title: 'C4 下一堂', body: '把流程自動化,再用三個 MCP 幫 AI 接上外部工具。(Agentic Engineering：擴充能力)' },
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
        <div style={{ position: 'absolute', right: 108, bottom: 86, fontFamily: mono, color: C.muted, fontSize: 22 }}>訂單看板 · 推播中心 · Human Review · ReAct</div>
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
  title: 'U11-C3: 從看到資料到真的送出 LINE Flex',
  createdAt: '2026-07-04T00:00:00.000Z',
};

export const notes: (string | undefined)[] = slides.map((slide, i) => `${i + 1}. ${slide.title.replace(/\n/g, ' ')}`);

export default pages satisfies Page[];
