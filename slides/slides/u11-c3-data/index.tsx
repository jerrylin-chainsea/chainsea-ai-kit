import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';
import targetCanadaShot from './assets/case-target-canada-cbc.png';
import zillowShot from './assets/case-zillow-axios.png';
import jpmorganShot from './assets/case-jpmorgan-newyorker.png';

export const design: DesignSystem = {
  palette: { bg: '#f5f6f8', text: '#181a1f', accent: '#e2570d' },
  fonts: {
    display: '"PingFang TC", "Noto Sans TC", "Microsoft JhengHei", system-ui, sans-serif',
    body: '"PingFang TC", "Noto Sans TC", "Microsoft JhengHei", system-ui, sans-serif',
  },
  typeScale: { hero: 132, body: 34 },
  radius: 16,
};

const C = {
  bg: design.palette.bg,
  ink: design.palette.text,
  orange: design.palette.accent,
  muted: '#5a6270',
  faint: '#9aa1ad',
  line: '#e2e5ea',
  card: '#ffffff',
};
const OK = '#0e7a52';
const RED = '#c0392b';
const BLUE = '#2f5fb3';
const AMBER = '#c47d12';
const PURPLE = '#7a4cc4';
const mono = '"JetBrains Mono", "SF Mono", ui-monospace, monospace';

const css = `@keyframes ts-up{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.ts-rise>*{animation:ts-up .55s cubic-bezier(.16,1,.3,1) both}
.ts-rise>*:nth-child(2){animation-delay:.05s}.ts-rise>*:nth-child(3){animation-delay:.10s}
.ts-rise>*:nth-child(4){animation-delay:.15s}.ts-rise>*:nth-child(5){animation-delay:.20s}.ts-rise>*:nth-child(6){animation-delay:.25s}
@media (prefers-reduced-motion:reduce){.ts-rise>*{animation:none!important}}`;
if (typeof document !== 'undefined' && !document.getElementById('ts-u11c3')) {
  const el = document.createElement('style');
  el.id = 'ts-u11c3';
  el.textContent = css;
  document.head.appendChild(el);
}

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
const pad = { padding: '0 110px 40px', width: '100%' as const };

const Eyebrow = ({ children }: { children: any }) => (
  <span style={{ fontFamily: mono, fontSize: 22, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.orange, fontWeight: 700 }}>{children}</span>
);
const Foot = ({ label }: { label: string }) => {
  const { current, total } = useSlidePageNumber();
  return (
    <div style={{ position: 'absolute', left: 110, right: 110, bottom: 44, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `1px solid ${C.line}`, paddingTop: 14 }}>
      <span style={{ fontSize: 19, color: C.faint, fontFamily: mono }}>{label}</span>
      <span style={{ fontSize: 19, color: C.faint, fontFamily: mono }}>{String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
    </div>
  );
};
const Title = ({ children, size = 58 }: { children: any; size?: number }) => (
  <div style={{ fontSize: size, fontWeight: 850, letterSpacing: '-0.02em', lineHeight: 1.12 }}>{children}</div>
);
const Lead = ({ children }: { children: any }) => <div style={{ fontSize: 32, color: C.muted, lineHeight: 1.55, maxWidth: 1480 }}>{children}</div>;
const B = ({ children }: { children: any }) => <strong style={{ color: C.ink }}>{children}</strong>;
const O = ({ children }: { children: any }) => <strong style={{ color: C.orange }}>{children}</strong>;

type CardSpec = { title: string; body: string; color?: string };
type TableSpec = { headers: string[]; rows: string[][]; highlight?: number[] };
type SlideSpec = {
  kind: 'cover' | 'section' | 'bullets' | 'cards' | 'code' | 'prompt' | 'table' | 'flow' | 'dashboard' | 'source';
  eyebrow?: string;
  title: string;
  lead?: string;
  bullets?: string[];
  cards?: CardSpec[];
  code?: string;
  label?: string;
  table?: TableSpec;
  steps?: string[];
  note?: string;
  time?: string;
  sectionNo?: string;
  footer?: string;
  img?: string;
  url?: string;
};

const toneFor = (i: number) => [C.orange, BLUE, OK, AMBER, PURPLE, RED][i % 6];

const Shell = ({ slide, children }: { slide: SlideSpec; children: any }) => (
  <div style={fill}>
    <div style={pad}>
      {slide.eyebrow ? <Eyebrow>{slide.eyebrow}</Eyebrow> : null}
      <div style={{ marginTop: slide.eyebrow ? 18 : 0 }}><Title>{slide.title}</Title></div>
      {slide.lead ? <div style={{ marginTop: 22 }}><Lead>{slide.lead}</Lead></div> : null}
      <div className="ts-rise" style={{ marginTop: 30 }}>{children}</div>
    </div>
    <Foot label={slide.footer ?? 'U11 · 課3'} />
  </div>
);

const SectionSlide = ({ slide }: { slide: SlideSpec }) => (
  <div style={{ ...fill, background: C.ink, color: '#fff' }}>
    <div style={pad}>
      <span style={{ fontFamily: mono, fontSize: 26, color: C.orange, letterSpacing: '0.18em' }}>段 {slide.sectionNo} · {slide.time}</span>
      <div style={{ fontSize: 84, fontWeight: 900, marginTop: 22, letterSpacing: '-0.02em', lineHeight: 1.08 }}>{slide.title}</div>
      <div style={{ fontSize: 35, color: 'rgba(255,255,255,0.72)', marginTop: 26, maxWidth: 1320, lineHeight: 1.5 }}>{slide.lead}</div>
    </div>
  </div>
);

const Bullets = ({ items }: { items: string[] }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 1480 }}>
    {items.map((item, i) => (
      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, background: '#fff', border: `1px solid ${C.line}`, borderRadius: 14, padding: '17px 24px' }}>
        <span style={{ flexShrink: 0, width: 36, height: 36, borderRadius: 10, background: toneFor(i), color: '#fff', display: 'grid', placeContent: 'center', fontFamily: mono, fontWeight: 800, fontSize: 20 }}>{i + 1}</span>
        <span style={{ fontSize: 29, lineHeight: 1.42 }}>{item}</span>
      </div>
    ))}
  </div>
);

const Cards = ({ cards }: { cards: CardSpec[] }) => (
  <div style={{ display: 'grid', gridTemplateColumns: cards.length <= 3 ? `repeat(${cards.length}, 1fr)` : 'repeat(2, 1fr)', gap: 18, maxWidth: 1500 }}>
    {cards.map((card, i) => {
      const color = card.color ?? toneFor(i);
      return (
        <div key={i} style={{ background: '#fff', border: `1px solid ${C.line}`, borderTop: `7px solid ${color}`, borderRadius: 14, padding: '24px 28px', minHeight: 150 }}>
          <div style={{ fontSize: 30, fontWeight: 800, color, lineHeight: 1.25 }}>{card.title}</div>
          <div style={{ fontSize: 25, color: C.muted, lineHeight: 1.45, marginTop: 12 }}>{card.body}</div>
        </div>
      );
    })}
  </div>
);

const CodeBlock = ({ code, label = 'terminal' }: { code: string; label?: string }) => (
  <div style={{ background: '#0f1117', borderRadius: 16, overflow: 'hidden', border: '1px solid #232733', boxShadow: '0 18px 50px -26px rgba(0,0,0,0.5)', maxWidth: 1540 }}>
    <div style={{ display: 'flex', gap: 9, padding: '12px 20px', background: '#161a22', borderBottom: '1px solid #232733' }}>
      {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => <span key={i} style={{ width: 13, height: 13, borderRadius: '50%', background: c }} />)}
      <span style={{ fontFamily: mono, fontSize: 18, color: '#98a2b3', marginLeft: 10 }}>{label}</span>
    </div>
    <pre style={{ margin: 0, padding: '24px 30px', fontFamily: mono, fontSize: 24, lineHeight: 1.55, color: '#d8dee9', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{code}</pre>
  </div>
);

const PromptCard = ({ prompt, label = '複製這段,貼到 Claude Code 面板' }: { prompt: string; label?: string }) => (
  <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, overflow: 'hidden', boxShadow: '0 12px 40px -24px rgba(30,30,40,0.35)', maxWidth: 1560 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 22px', background: '#fbf3ee', borderBottom: `1px solid ${C.line}` }}>
      <span style={{ width: 12, height: 12, borderRadius: '50%', background: C.orange }} />
      <span style={{ fontFamily: mono, fontSize: 19, color: C.orange, fontWeight: 700, letterSpacing: '0.06em' }}>{label}</span>
    </div>
    <pre style={{ margin: 0, padding: '22px 28px', fontFamily: mono, fontSize: 22, lineHeight: 1.45, color: C.ink, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{prompt}</pre>
  </div>
);

const DataTable = ({ table }: { table: TableSpec }) => (
  <div style={{ background: '#fff', border: `1px solid ${C.line}`, borderRadius: 14, overflow: 'hidden', boxShadow: '0 14px 40px -26px rgba(30,30,40,0.4)', maxWidth: 1560 }}>
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${table.headers.length}, minmax(0, 1fr))` }}>
      {table.headers.map((h, i) => <div key={i} style={{ background: '#2a2d35', color: '#fff', fontFamily: mono, fontSize: 20, fontWeight: 700, padding: '13px 14px' }}>{h}</div>)}
      {table.rows.map((row, ri) => row.map((cell, ci) => {
        const bad = table.highlight?.includes(ri);
        return <div key={`${ri}-${ci}`} style={{ fontFamily: mono, fontSize: 19, padding: '12px 14px', borderTop: `1px solid ${C.line}`, background: bad ? '#fff7ed' : '#fff', color: bad ? C.orange : C.ink, fontWeight: bad ? 750 : 400 }}>{cell}</div>;
      }))}
    </div>
  </div>
);

const Flow = ({ steps }: { steps: string[] }) => (
  <div style={{ display: 'flex', alignItems: 'stretch', gap: 12, maxWidth: 1540 }}>
    {steps.map((step, i) => (
      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1 }}>
        <div style={{ background: '#fff', border: `2px solid ${toneFor(i)}`, borderRadius: 14, padding: '24px 18px', minHeight: 132, display: 'grid', placeContent: 'center', textAlign: 'center', fontSize: 27, fontWeight: 800, lineHeight: 1.25, color: C.ink, width: '100%' }}>{step}</div>
        {i < steps.length - 1 ? <span style={{ fontFamily: mono, fontSize: 34, color: C.faint }}>→</span> : null}
      </div>
    ))}
  </div>
);

const DashboardMock = () => (
  <div style={{ background: '#111827', borderRadius: 18, padding: 18, maxWidth: 1500, boxShadow: '0 22px 55px -30px rgba(0,0,0,.55)' }}>
    <div style={{ background: '#f8fafc', borderRadius: 12, padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div><div style={{ fontFamily: mono, fontSize: 18, color: C.orange, fontWeight: 800 }}>營運 Dashboard</div><div style={{ fontSize: 36, fontWeight: 850, marginTop: 5 }}>夏季活動資料驗收</div></div>
        <div style={{ background: '#fee2e2', color: RED, border: '1px solid #fecaca', borderRadius: 999, padding: '10px 18px', fontFamily: mono, fontSize: 21, fontWeight: 800 }}>risk: high</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginTop: 24 }}>
        {[
          ['total_revenue', '128,400'],
          ['valid_rows', '36'],
          ['anomaly_count', '5'],
          ['top_product', '耳掛咖啡'],
        ].map(([k, v]) => <div key={k} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 10, padding: '18px 20px' }}><div style={{ fontFamily: mono, fontSize: 16, color: C.faint }}>{k}</div><div style={{ fontSize: 30, fontWeight: 850, marginTop: 6 }}>{v}</div></div>)}
      </div>
      <div style={{ marginTop: 18, background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: 10, padding: '18px 20px', fontSize: 25, lineHeight: 1.45 }}>
        anomalies: 第 8 列 revenue 與 qty * unit_price 不一致。第 17 列 stock = 0 但仍有銷售。
      </div>
    </div>
  </div>
);

const SourceShot = ({ slide }: { slide: SlideSpec }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 24, alignItems: 'stretch', maxWidth: 1560 }}>
    <div style={{ background: '#fff', border: `1px solid ${C.line}`, borderRadius: 14, overflow: 'hidden', boxShadow: '0 18px 50px -28px rgba(30,30,40,0.4)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px', background: '#f0f2f5', borderBottom: `1px solid ${C.line}` }}>
        <div style={{ display: 'flex', gap: 7 }}>{['#ff5f57', '#febc2e', '#28c840'].map((c, i) => <span key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />)}</div>
        <div style={{ flex: 1, background: '#fff', border: `1px solid ${C.line}`, borderRadius: 7, padding: '5px 12px', fontFamily: mono, fontSize: 14, color: C.faint, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{slide.url}</div>
      </div>
      <img src={slide.img} alt={slide.title} style={{ display: 'block', width: '100%', height: 500, objectFit: 'cover', objectPosition: 'top left' }} />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {(slide.cards ?? []).map((card, i) => {
        const color = card.color ?? toneFor(i);
        return (
          <div key={i} style={{ background: '#fff', border: `1px solid ${C.line}`, borderLeft: `7px solid ${color}`, borderRadius: 14, padding: '22px 26px' }}>
            <div style={{ fontSize: 29, fontWeight: 850, color, lineHeight: 1.25 }}>{card.title}</div>
            <div style={{ fontSize: 24, color: C.muted, lineHeight: 1.45, marginTop: 10 }}>{card.body}</div>
          </div>
        );
      })}
    </div>
  </div>
);

const DeckPage = ({ slide }: { slide: SlideSpec }) => {
  if (slide.kind === 'cover') {
    return (
      <div style={fill}>
        <div style={pad}>
          <Eyebrow>{slide.eyebrow}</Eyebrow>
          <div className="ts-rise" style={{ marginTop: 32 }}>
            <div style={{ fontSize: 92, fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.04 }}>{slide.title}</div>
            <div style={{ marginTop: 28 }}><Lead>{slide.lead}</Lead></div>
          </div>
        </div>
        <div style={{ position: 'absolute', right: 110, bottom: 84, fontFamily: mono, fontSize: 21, color: C.faint }}>資料合約 · Dashboard · ReAct · Reviewer · Git</div>
        <Foot label="U11 · 課3" />
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
      {slide.kind === 'table' && slide.table ? <DataTable table={slide.table} /> : null}
      {slide.kind === 'flow' && slide.steps ? <Flow steps={slide.steps} /> : null}
      {slide.kind === 'dashboard' ? <DashboardMock /> : null}
      {slide.kind === 'source' ? <SourceShot slide={slide} /> : null}
    </Shell>
  );
};

const salesRows = [
  ['2026-07-01', '海鹽餅乾', '30', '3600'],
  ['2026-07-02', '海鹽餅乾', '-5', '-600'],
  ['2026-07-03', '耳掛咖啡', '9999', '599940'],
  ['2026-07-04', '香氛蠟燭', '(空)', '(空)'],
  ['2026-07-05', '耳掛咖啡', '12', '720'],
];

const campaignRows = [
  ['2026-07-01', '耳掛咖啡', '飲品', '18', '80', '1440', 'LINE', '42', 'summer'],
  ['2026-07-01', '海鹽餅乾', '點心', '25', '120', '3000', 'Store', '18', 'summer'],
  ['2026-07-02', '香氛蠟燭', '生活', '-3', '390', '-1170', 'Instagram', '12', 'summer'],
  ['2026-07-02', '耳掛咖啡', '飲品', '9999', '80', '799920', 'Line', '30', 'summer'],
  ['2026-07-03', '冷泡茶包', '飲品', '14', '95', '', 'line', '24', 'summer'],
  ['2026-07-03', '海鹽餅乾', '點心', '8', '120', '1080', 'Store', '0', 'summer'],
  ['2026-07-04', '耳掛咖啡', '飲品', '20', '80', '1600', 'LINE', '22', 'summer'],
  ['2026-07-04', '耳掛咖啡', '飲品', '20', '80', '1600', 'LINE', '22', 'summer'],
];

const realCaseRows = [
  ['Target Canada', '庫存 / 補貨資料不可信', '貨架空、倉庫有貨、顧客不回來', 'stock 與 sales 要一起驗收'],
  ['Zillow Offers', '房價預測太樂觀', '買房決策失準,業務線關閉', '模型輸出要看誤差與風險'],
  ['JPMorgan London Whale', 'VaR 風險模型 / 試算表錯誤', '風險被低估,損失擴大', '單一指標不能直接當真相'],
];

const slides: SlideSpec[] = [
  { kind: 'cover', eyebrow: 'U11 · 第 3 堂 / 共 4 堂 · 4 小時', title: 'AI 專案整合與驗收:\n把營運資料接進活動頁 Dashboard', lead: 'AI 做出畫面只是第一步。資料正確、格式穩定、驗收通過,才叫完成。' },
  { kind: 'bullets', eyebrow: '先接上一堂', title: 'C2 到 C3:從做功能到驗收功能', bullets: ['C2:你讓 AI 做出一個可見功能。', 'C3:你要讓功能吃資料、能驗收、能修錯。', '驗收不能只看畫面,還要看資料、格式、錯誤、diff、build。'] },
  { kind: 'cards', eyebrow: '今天最後會看到什麼', title: '一個能交付的活動頁 Dashboard', cards: [
    { title: '一個 Dashboard', body: '營收、異常數、風險等級、Top product。' },
    { title: '一份 report.json', body: 'Python 產生,前端照固定合約讀取。' },
    { title: '三次驗收', body: '資料輸出、前端畫面、git diff/build。' },
    { title: '一次 commit / push', body: '只在驗收通過後交付。' },
  ] },
  { kind: 'flow', eyebrow: '今天的主線', title: '資料進來,功能才算開始', steps: ['CSV', 'run.py', 'report.json', 'Dashboard', 'ReAct', 'Reviewer', 'Git'] },

  { kind: 'section', sectionNo: '1', time: '0:12 - 0:35', title: '小資料暖身', lead: '先用 sales.csv 的 5 筆資料練看異常。抓得到小表裡的問題,再進正式活動資料。' },
  { kind: 'cards', eyebrow: '段 1 · CSV / JSON', title: '兩種資料長相,先看得懂就好', cards: [
    { title: 'CSV 像表格', body: '一列一筆,逗號隔開欄位。適合人工快速掃描。' },
    { title: 'JSON 像資料包', body: '欄位有名字和值。程式讀取時更穩定。' },
    { title: '今天先看物件', body: 'report.json 會是一個物件,裡面包 metrics 與 anomalies。' },
  ] },
  { kind: 'table', eyebrow: '段 1 · sales.csv', title: '你沒學程式,也看得出哪裡怪', table: { headers: ['date', 'product', 'qty', 'revenue'], rows: salesRows, highlight: [1, 2, 3] } },
  { kind: 'cards', eyebrow: '段 1 · 60 秒圈問題', title: '先自己找,不要急著丟 AI', cards: [
    { title: '負數', body: 'qty -5、revenue -600。銷售數字不該是負的。', color: RED },
    { title: '超大值', body: 'qty 9999。小店一天賣 9999 包通常不合理。', color: AMBER },
    { title: '缺值', body: 'qty 與 revenue 空白。不能當 0,也不能自己猜。', color: C.muted },
  ] },
  { kind: 'prompt', eyebrow: '段 1 · 用 Claude Code @sales.csv', title: '先問它看見什麼,不要叫它改檔', label: '暖身 prompt', code: `請先不要寫程式。
請只根據 sales.csv 內容,指出看起來不合理的資料列。

每個問題都要說明:
1. row number
2. 欄位
3. 原因

沒有資料支持的推論不要寫。` },
  { kind: 'bullets', eyebrow: '段 1 · 收束', title: '小資料的任務只有一件事:建立異常直覺', bullets: ['看得出負數、超大值、缺值。', '知道 AI 的答案也要檢查資料根據。', '暖身結束後,正式專案需要更完整的活動營運資料。'] },
  { kind: 'section', sectionNo: '案例', time: '0:35 - 0:55', title: '真實案例:資料錯,決策就會錯', lead: '接下來不是假設題。公開案例裡,公司真的因為庫存、預測、風險指標失真付出代價。' },
  { kind: 'table', eyebrow: '真實案例 · 先看總表', title: '三個案例,同一個教訓:Dashboard 不能盲信', table: { headers: ['案例', '資料問題', '結果', '今天要學的驗收'], rows: realCaseRows, highlight: [0, 1, 2] } },
  { kind: 'source', eyebrow: '真實案例 1 · Target Canada', title: '貨架空,不代表倉庫真的沒貨', img: targetCanadaShot, url: 'cbc.ca · Target closes all 133 stores in Canada', cards: [
    { title: '發生什麼', body: 'Target 2013 年快速進加拿大,門市常出現空貨架與補貨問題。', color: RED },
    { title: '資料問題', body: '公開報導把問題指向新庫存系統、供應鏈資料與上線時間不足。' },
    { title: '這堂怎麼用', body: '看到 stock = 0 或銷售異常時,不能只看單一欄位。要讓 AI 列 row number 與人工確認項。', color: OK },
  ] },
  { kind: 'source', eyebrow: '真實案例 2 · Zillow Offers', title: '估價模型太樂觀,買賣決策就會失準', img: zillowShot, url: 'axios.com · Zillow abandons its home-flipping algorithm', cards: [
    { title: '發生什麼', body: 'Zillow 2021 年關閉 Zillow Offers,並裁減約 25% 人力。', color: RED },
    { title: '資料問題', body: '房價預測波動超過預期,估價模型無法穩定支撐買房決策。' },
    { title: '這堂怎麼用', body: 'AI 算出 total_revenue 或 top_product 時,要同時看異常數與風險等級。', color: OK },
  ] },
  { kind: 'source', eyebrow: '真實案例 3 · JPMorgan London Whale', title: '風險指標算錯,不是小數字問題', img: jpmorganShot, url: 'newyorker.com · London Whale trades', cards: [
    { title: '發生什麼', body: 'JPMorgan 2012 年 London Whale 交易事件造成超過 60 億美元損失。', color: RED },
    { title: '資料問題', body: '風險模型與試算表問題讓 VaR 指標低估風險。' },
    { title: '這堂怎麼用', body: 'risk_level 不能只是 AI 寫出來的字。它要能追到 anomalies 與計算規則。', color: OK },
  ] },
  { kind: 'bullets', eyebrow: '真實案例 · 來源', title: '這些案例對應到今天的三個驗收動作', bullets: ['Target Canada:庫存和補貨資料要驗收,不然 Dashboard 會騙你。', 'Zillow Offers:預測不是答案,要看誤差、風險、可否回查。', 'JPMorgan London Whale:單一風險指標不能盲信,公式與資料來源都要檢查。', '來源:Target Canada closure/coverage、Axios/Wired 對 Zillow Offers、JPMorgan London Whale 監管與新聞報導。'] },

  { kind: 'section', sectionNo: '2', time: '0:55 - 1:20', title: '增加正式資料集', lead: '不擴大 sales.csv。保留暖身小表,新增 campaign_sales.csv 才像真的活動營運資料。' },
  { kind: 'bullets', eyebrow: '段 2 · 為什麼要新增', title: '5 筆資料只能練觀察,撐不起 Dashboard', bullets: ['30 到 50 筆才看得出通路、商品、活動表現。', '資料量足夠,才有 Top product、Top channel、風險等級。', '兩份資料各司其職:sales.csv 暖身,campaign_sales.csv 實作。'] },
  { kind: 'table', eyebrow: '段 2 · campaign_sales.csv', title: '只顯示前幾列,不要把整張表塞滿', table: { headers: ['date', 'product', 'category', 'qty', 'unit_price', 'revenue', 'channel', 'stock', 'campaign'], rows: campaignRows, highlight: [2, 3, 4, 5, 7] } },
  { kind: 'cards', eyebrow: '段 2 · 欄位地圖', title: '先知道每個欄位代表什麼', cards: [
    { title: '商品與分類', body: 'product、category 說明賣的是什麼。' },
    { title: '數量與金額', body: 'qty、unit_price、revenue 用來算營收。' },
    { title: '營運脈絡', body: 'channel、stock、campaign 說明從哪裡賣、庫存與活動。' },
    { title: '時間', body: 'date 讓報表能對齊一天一天的營運變化。' },
  ] },
  { kind: 'cards', eyebrow: '段 2 · 這份資料藏了什麼', title: '正式資料集要有足夠的問題可以驗收', cards: [
    { title: '數值異常', body: 'qty 負數或 9999。', color: RED },
    { title: '缺值', body: 'revenue 空白。', color: C.muted },
    { title: '計算不一致', body: 'revenue 不等於 qty * unit_price。', color: AMBER },
    { title: '分類不一致', body: 'Line、LINE、line。', color: PURPLE },
    { title: '業務規則衝突', body: 'stock = 0 但仍有銷售。', color: BLUE },
    { title: '重複列', body: '同一天同商品重複出現。', color: OK },
  ] },
  { kind: 'bullets', eyebrow: '段 2 · 固定規則', title: '資料規則先固定,不要讓 AI 自己猜', bullets: ['revenue 應等於 qty * unit_price。', 'qty 不能小於 0。', 'stock = 0 時不應仍有 qty > 0 的銷售。', 'channel 統一成 LINE / Instagram / Store。', '缺值要列出 row number 與欄位。'] },
  { kind: 'prompt', eyebrow: '段 2 · 資料檢查 prompt', title: '讓 AI 先檢查,但不要修改檔案', label: 'data check prompt', code: `請檢查 data/campaign_sales.csv。

規則:
1. qty 不可小於 0
2. revenue 應等於 qty * unit_price
3. stock = 0 時,不應有 qty > 0 的銷售
4. channel 必須統一成 LINE、Instagram、Store
5. 缺值要列出 row number 與欄位

先不要修改檔案。
請只輸出:
1. 你檢查了哪些欄位
2. 發現哪些異常
3. 哪些需要人工確認` },
  { kind: 'prompt', eyebrow: '段 2 · 案例練習 prompt', title: '把 7 個案例變成可檢查輸出', label: 'case practice prompt', code: `請針對 campaign_sales.csv 裡的異常資料,用案例表輸出。

每個案例請輸出:
1. case_id
2. row number
3. 問題類型
4. 是否納入 total_revenue
5. 需要人工確認什麼

限制:
- 不要修改檔案
- 不要猜測沒有資料支持的原因
- 不確定就寫「需要人工確認」` },

  { kind: 'section', sectionNo: '3', time: '1:20 - 2:05', title: '資料合約 report.json', lead: '把固定四欄升級成程式會讀的資料合約。AI 不是交作文,是交給前端讀的資料包。' },
  { kind: 'cards', eyebrow: '段 3 · 不要讓 AI 寫作文', title: '作文好讀,但程式不好接', cards: [
    { title: '作文式輸出', body: '每次段落不同、欄位不同、很難自動讀。', color: RED },
    { title: '資料合約', body: '欄位名稱固定、型別固定、允許值固定。', color: OK },
    { title: '缺欄位要抓得到', body: '前端要 fallback,不能整頁壞掉。', color: BLUE },
  ] },
  { kind: 'bullets', eyebrow: '段 3 · 什麼是資料合約', title: '先定格式,再叫 AI 和程式照著走', bullets: ['欄位名稱固定:metrics、anomalies、risk_level。', '型別固定:數字就是數字,清單就是清單。', '允許值固定:risk_level 只能 low / medium / high。', '資料不完整時,畫面要有 fallback。'] },
  { kind: 'code', eyebrow: '段 3 · report.json 合約總覽', title: '前端會讀這個形狀', label: 'report.json', code: `{
  "insight": "耳掛咖啡是本週營收最高商品。",
  "metrics": {
    "total_revenue": 128400,
    "valid_rows": 36,
    "anomaly_count": 5,
    "top_product": "耳掛咖啡",
    "top_channel": "LINE"
  },
  "anomalies": [
    {
      "row": 8,
      "field": "revenue",
      "problem": "revenue 與 qty * unit_price 不一致"
    }
  ],
  "risk_level": "high",
  "action_items": [
    "先人工確認第 8 列與第 17 列的營收資料。"
  ]
}` },
  { kind: 'cards', eyebrow: '段 3 · metrics', title: 'Dashboard 上方四個數字從這裡來', cards: [
    { title: 'total_revenue', body: '有效資料列加總後的營收。' },
    { title: 'valid_rows', body: '可採用資料筆數。' },
    { title: 'anomaly_count', body: '異常資料數量。' },
    { title: 'top_product / top_channel', body: '營收最高商品與通路。' },
  ] },
  { kind: 'cards', eyebrow: '段 3 · anomalies', title: '每個異常都要能追到 row number', cards: [
    { title: 'row', body: '資料列位置,方便人工回查。' },
    { title: 'field', body: '哪個欄位出問題。' },
    { title: 'problem', body: '問題原因,不能只寫怪怪的。' },
  ] },
  { kind: 'code', eyebrow: '段 3 · risk_level', title: '允許值只能三個', label: 'contract rule', code: `risk_level 只能是:
- low
- medium
- high

不能是:
- 輕微
- 中等
- 嚴重
- very high
- 空字串` },
  { kind: 'code', eyebrow: '段 3 · Python 產出報表', title: '真正會動的第一個指令', label: 'terminal', code: `cd ai-project-foundation-kit/data-lab
python run.py` },
  { kind: 'bullets', eyebrow: '段 3 · 看 report.json', title: '跑完後你要驗收四件事', bullets: ['metrics 有數字。', 'anomalies 有 row number。', 'risk_level 是英文 low / medium / high。', 'action_items 有對應原因,不是空話。'] },
  { kind: 'flow', eyebrow: '段 3 · 可動檔案主線', title: '今天一定要知道真正會動的是哪些檔案', steps: ['data/campaign_sales.csv', 'data-lab/run.py', 'data-lab/report.json', 'web-lab/src/App.jsx', '瀏覽器 Dashboard'] },
  { kind: 'cards', eyebrow: '段 3 · run.py 負責什麼', title: 'Python 端只做資料整理與輸出', cards: [
    { title: '讀 CSV', body: '讀取 campaign_sales.csv。' },
    { title: '檢查異常', body: '照規則列出 anomalies。' },
    { title: '計算 metrics', body: '總營收、有效筆數、Top product、Top channel。' },
    { title: '寫 JSON', body: '產生固定格式 report.json。' },
  ] },

  { kind: 'section', sectionNo: '4', time: '2:15 - 2:55', title: 'Claude Code 接 Dashboard', lead: '讓 AI 把 report.json 接進活動頁。人先審計畫,再放它做,最後用畫面與 diff 驗收。' },
  { kind: 'dashboard', eyebrow: '段 4 · 今天要 AI 做什麼', title: '把資料變成可見的營運 Dashboard', lead: '顯示 metrics、anomalies、risk_level。risk high 時要有明顯警示樣式。' },
  { kind: 'bullets', eyebrow: '段 4 · 允許修改檔案', title: '先把改動範圍講死', bullets: ['web-lab/src/App.jsx', 'web-lab/src/styles.css', '必要時 web-lab/src/data/report.json 或等效資料檔', '其他檔案先不要碰。'] },
  { kind: 'bullets', eyebrow: '段 4 · 禁止修改檔案', title: '今天不新增套件,也不改設定', bullets: ['不要改 package.json。', '不要改 package-lock.json。', '不要碰 .git/。', '不要動 node_modules/。', '不要重構整個專案。'] },
  { kind: 'code', eyebrow: '段 4 · 開始前檢查', title: '先確認站在自己的 repo', label: 'terminal', code: `git status
git remote -v

# origin 必須是你自己的 repo
# 如果 origin 是課程範例 repo,停止,先修 remote` },
  { kind: 'prompt', eyebrow: '段 4 · Planner prompt', title: '先要計畫,不要先改檔', label: 'planner prompt', code: `你現在扮演 planner。

請讀:
- AGENTS.md
- CLAUDE.md
- ai-project-foundation-kit/data-lab/report.json
- web-lab/src/App.jsx
- web-lab/src/styles.css

我要在活動頁新增「營運 Dashboard」。
先不要改檔。

Dashboard 需求:
1. 顯示 total_revenue
2. 顯示 valid_rows
3. 顯示 anomaly_count
4. 顯示 top_product
5. 顯示 risk_level
6. 顯示 anomalies 清單
7. risk_level 為 high 時要有明顯警示樣式
8. report.json 缺欄位時,畫面不可整頁壞掉

限制:
1. 只能改 web-lab/src/App.jsx 和 web-lab/src/styles.css
2. 不要新增套件
3. 不要改 package.json
4. 不要重構整個專案

請輸出:
1. 會改哪些檔案
2. 每個檔案改什麼
3. 如何處理缺欄位
4. 如何驗收
5. 可能風險` },
  { kind: 'cards', eyebrow: '段 4 · Human-in-the-loop', title: '人審計畫,不是看熱鬧', cards: [
    { title: '範圍', body: '它是否只改允許檔案。' },
    { title: '套件', body: '它是否想新增套件或改 package.json。' },
    { title: '重構', body: '它是否想重寫整個頁面。' },
    { title: 'fallback', body: '它是否處理 report.json 缺欄位。' },
    { title: '驗收', body: '它是否列出 localhost、build、diff。' },
  ] },
  { kind: 'prompt', eyebrow: '段 4 · Implementer prompt', title: '計畫合理,才放它改', label: 'implementer prompt', code: `你現在扮演 implementer。

請照剛剛核准的計畫實作。

限制:
1. 只能改 web-lab/src/App.jsx 和 web-lab/src/styles.css
2. 不要新增套件
3. 不要改 package.json
4. 不要重構整個專案
5. 完成後列出實際改了哪些檔案` },
  { kind: 'code', eyebrow: '段 4 · localhost 驗收', title: '先看畫面,但不要只看畫面', label: 'terminal', code: `cd web-lab
npm run dev

# 畫面要看到:
# Dashboard 區塊
# 營收數字
# 異常數
# 風險等級
# anomalies 清單` },

  { kind: 'section', sectionNo: '5', time: '2:55 - 3:35', title: 'ReAct 修錯', lead: '三個指定 bug,每個都走 Reason、Act、Observe、Verify。重點是根因修正,不是只把畫面糊過去。' },
  { kind: 'flow', eyebrow: '段 5 · ReAct', title: '除錯不是瞎改,是一輪一輪收斂', steps: ['Reason\n先想原因', 'Act\n做一步確認', 'Observe\n看證據', 'Verify\n重跑驗收'] },
  { kind: 'cards', eyebrow: '段 5 · 三個指定 bug', title: '每個 bug 都練一個真專案能力', cards: [
    { title: 'Bug 1:格式錯', body: 'risk_level 印出「嚴重」,但合約只能 low / medium / high。', color: RED },
    { title: 'Bug 2:計算錯', body: 'total_revenue 把異常列也算進去。', color: AMBER },
    { title: 'Bug 3:前端 regression', body: 'Dashboard 出現,但原本活動頁樣式壞掉。', color: PURPLE },
  ] },
  { kind: 'bullets', eyebrow: '段 5 · Bug 1', title: '格式錯:合約被中文化了', bullets: ['現象:risk_level 印出「嚴重」。', '根因常在 run.py 把英文等級翻成中文。', '修完要重跑 python run.py。', '驗收:risk_level 回到 low / medium / high。'] },
  { kind: 'prompt', eyebrow: '段 5 · Bug 1 prompt', title: '先分析,不要直接改', label: 'debugger prompt', code: `你現在扮演 debugger。

請先不要改檔。
目前錯誤現象:
report.json 的 risk_level 是「嚴重」,
但資料合約規定只能是 low / medium / high。

請用 ReAct 分析:
Reason:
- 這個錯最可能是什麼原因?

Act:
- 你需要看哪個檔案或跑哪個指令確認?

Observe:
- 你預期會看到什麼證據?

最後請提出最小修改方案。` },
  { kind: 'bullets', eyebrow: '段 5 · Bug 2', title: '計算錯:不是所有資料都能直接加總', bullets: ['現象:total_revenue 包含異常列。', 'AI 必須說清楚採用 / 排除哪些列。', 'revenue != qty * unit_price 的列要進 anomalies。', 'action_items 要能追到 anomalies。'] },
  { kind: 'prompt', eyebrow: '段 5 · Bug 2 prompt', title: '追問它採用哪些列', label: 'debugger prompt', code: `請先不要改檔。

目前錯誤現象:
total_revenue 看起來把異常資料列也加總了。

請用 ReAct 分析:
1. 哪些資料列應該被排除?
2. 哪些資料列仍可採用?
3. total_revenue 應該根據哪些列計算?
4. anomalies 與 action_items 要如何對應?

最後提出最小修改方案。` },
  { kind: 'bullets', eyebrow: '段 5 · Bug 3', title: '前端顯示錯:新功能不能弄壞舊功能', bullets: ['現象:Dashboard 出現了,但原本活動頁樣式壞掉。', '這是 context drift 或 regression。', '用 git diff 看它是否改到不該改的區塊。', '修法是回到最小範圍,不要重構整頁。'] },
  { kind: 'prompt', eyebrow: '段 5 · Bug 3 prompt', title: '讓 AI 先看 diff 再提修法', label: 'debugger prompt', code: `請先不要改檔。

目前錯誤現象:
Dashboard 出現了,但原本活動頁樣式壞掉。

請先檢查目前 git diff,用 ReAct 分析:
Reason:
- 哪些修改最可能造成 regression?

Act:
- 你要看哪些檔案或 diff 區塊?

Observe:
- 什麼證據代表它改超出範圍?

最後提出最小修改方案。
不要新增套件,不要重構。` },
  { kind: 'prompt', eyebrow: '段 5 · 放行修正', title: '同意最小方案後,才讓它改', label: 'fix approval prompt', code: `我同意你的最小修改方案。

請只修改必要檔案。
不要新增套件。
不要改 package.json。
不要重構。

完成後請回報:
1. 改了哪些檔案
2. 改了哪一段邏輯
3. 我應該跑什麼指令驗收` },
  { kind: 'code', eyebrow: '段 5 · 驗收指令', title: '修完一定要重跑,不能只相信回報', label: 'terminal', code: `python run.py
npm run build
git diff` },
  { kind: 'bullets', eyebrow: '段 5 · 收束', title: 'ReAct 的重點不是名詞,是節奏', bullets: ['Reason:先講最可能原因。', 'Act:只做一個確認步驟。', 'Observe:拿證據,不是憑感覺。', 'Verify:重跑指令與 diff。'] },

  { kind: 'section', sectionNo: '6', time: '3:35 - 4:00', title: 'Reviewer + Git 收尾', lead: 'AI 做完不等於交付。人類驗收 diff、build、remote,才 commit / push。' },
  { kind: 'prompt', eyebrow: '段 6 · Reviewer prompt', title: '讓 reviewer 只檢查,不要改檔', label: 'reviewer prompt', code: `你現在扮演 reviewer。

請根據 AGENTS.md / CLAUDE.md 檢查目前 git diff。
不要改檔。

請回報:
1. 實際修改了哪些檔案
2. 是否有超出允許範圍
3. 是否有修改 package.json
4. 是否有過度重構
5. Dashboard 是否符合需求
6. 資料合約是否仍符合 report.json 格式
7. 還需要人工確認什麼` },
  { kind: 'code', eyebrow: '段 6 · Git diff 指令頁', title: '人工看 diff,不要只看 AI 說法', label: 'terminal', code: `git status
git diff
git diff -- package.json

# git diff -- package.json 應該沒有輸出` },
  { kind: 'cards', eyebrow: '段 6 · diff 看什麼', title: '三個紅燈,看到就先停', cards: [
    { title: '改到 package.json', body: '今天不新增套件,要救回來。', color: RED },
    { title: '改到大量舊樣式', body: '可能是 regression,先要求列出無關修改。', color: AMBER },
    { title: '看不出 Dashboard 邏輯', body: '功能可能只做了表面,要回到需求逐項驗收。', color: PURPLE },
  ] },
  { kind: 'code', eyebrow: '段 6 · Build 驗收', title: '通過 build 才能 commit', label: 'terminal', code: `npm run build

# 紅字就不要 commit
# 把完整錯誤貼回 Claude Code 修` },
  { kind: 'prompt', eyebrow: '段 6 · AI 超界救援', title: '它改過頭時,先停止擴散', label: '救援 prompt', code: `你改到任務範圍外了。

請先不要繼續改。
請列出所有和「營運 Dashboard」無關的修改。
等我同意後,只還原那些無關修改。

不要改 package.json。
不要新增套件。
不要重構。` },
  { kind: 'code', eyebrow: '段 6 · Commit', title: 'commit 訊息要說做了什麼', label: 'terminal', code: `git add .
git commit -m "新增營運資料 Dashboard"` },
  { kind: 'code', eyebrow: '段 6 · Push 前 remote 檢查', title: '確認 origin 是自己的 repo', label: 'terminal', code: `git remote -v

# origin 必須是你自己的 repo
# upstream 才應該是課程範例 repo
# 如果 origin 指向課程範例 repo,不要 push` },
  { kind: 'code', eyebrow: '段 6 · Push', title: '最後一步才推上 GitHub', label: 'terminal', code: `git push` },
  { kind: 'cards', eyebrow: '段 6 · Codex 在今天的位置', title: '同一套驗收流程,未來可以搬到 Codex', cards: [
    { title: '工具會換', body: 'Claude Code 和 Codex 都只是 coding agent。' },
    { title: '流程可遷移', body: '資料合約、Plan before edit、Human review、ReAct debug。' },
    { title: '今天不重做', body: '不安裝 Codex,不再用同一個 bug 做對照。' },
  ] },
  { kind: 'bullets', eyebrow: '段 6 · 輕輕帶到 C4', title: '今天只點名,下一堂再展開', bullets: ['Context drift:AI 做著做著偏離任務。', 'Prompt debt:一直口頭補規則,不如整理進 AGENTS.md / CLAUDE.md。', 'Regression:新功能出現,舊功能壞掉。'] },
  { kind: 'cards', eyebrow: '防呆總表', title: '今天要跑完的十個安全扣', cards: [
    { title: '開始', body: 'git status、git remote -v。' },
    { title: '規劃', body: 'AI 計畫審核 checklist、允許/禁止檔案。' },
    { title: '資料', body: 'python run.py 驗證 report.json。' },
    { title: '前端', body: 'npm run build 驗證。' },
    { title: 'Git', body: 'git diff -- package.json 無輸出,commit 前看 diff。' },
    { title: '救援', body: 'AI 超界救援 prompt,push 前再次確認 remote。' },
  ] },
  { kind: 'bullets', eyebrow: '作業 · 必做', title: '交付的是成果,不是只說有做', bullets: ['把營運 Dashboard push 到自己的 repo。', '提交 Dashboard 截圖。', '提交 report.json 截圖或內容片段。', '提交 git log --oneline -1。', '貼上 reviewer 回報中的「實際修改檔案」與「是否超出範圍」。'] },
  { kind: 'bullets', eyebrow: '作業 · 選做', title: '自己加一筆異常,看系統是否跟著變', bullets: ['在 campaign_sales.csv 多加一筆異常資料。', '重跑 python run.py。', '確認 Dashboard 的 anomaly_count 是否變化。'] },
  { kind: 'flow', eyebrow: '最後收束', title: 'C3 看起來要像一堂真正的專案課', steps: ['資料不能盲信', 'AI 輸出要有合約', '功能要能驗收', '除錯走 ReAct', '看 diff', 'build 後才交付'] },
];

const pages = slides.map((slide) => (() => <DeckPage slide={slide} />) as Page);

export const meta: SlideMeta = {
  title: 'U11 課3:AI 專案整合與驗收',
  createdAt: '2026-07-02T00:00:00.000Z',
};

export const notes: (string | undefined)[] = slides.map((slide, i) => slide.note ?? `${i + 1}. ${slide.title.replace(/\n/g, ' ')}`);

export default pages satisfies Page[];
