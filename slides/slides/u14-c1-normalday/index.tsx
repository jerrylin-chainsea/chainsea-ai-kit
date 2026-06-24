import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';
import journeyShot from './assets/journey.png';

export const design: DesignSystem = {
  palette: { bg: '#f5f6f8', text: '#181a1f', accent: '#e2570d' },
  fonts: { display: '"PingFang TC", "Noto Sans TC", "Microsoft JhengHei", system-ui, sans-serif', body: '"PingFang TC", "Noto Sans TC", "Microsoft JhengHei", system-ui, sans-serif' },
  typeScale: { hero: 132, body: 34 }, radius: 16,
};
const C = { bg: design.palette.bg, ink: design.palette.text, orange: design.palette.accent, muted: '#5a6270', faint: '#9aa1ad', line: '#e2e5ea', card: '#ffffff' };
const OK = '#0e7a52'; const RED = '#c0392b';
const mono = '"JetBrains Mono", "SF Mono", ui-monospace, monospace';
const css = `@keyframes ts-up{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.ts-rise>*{animation:ts-up .55s cubic-bezier(.16,1,.3,1) both}.ts-rise>*:nth-child(2){animation-delay:.05s}.ts-rise>*:nth-child(3){animation-delay:.10s}.ts-rise>*:nth-child(4){animation-delay:.15s}
@media (prefers-reduced-motion:reduce){.ts-rise>*{animation:none!important}}`;
if (typeof document !== 'undefined' && !document.getElementById('ts-u14c1')) { const el = document.createElement('style'); el.id = 'ts-u14c1'; el.textContent = css; document.head.appendChild(el); }
const fill = { width: '100%', height: '100%', background: C.bg, color: C.ink, fontFamily: 'var(--osd-font-body)', position: 'relative' as const, overflow: 'hidden', display: 'flex' as const, flexDirection: 'column' as const, justifyContent: 'center' as const };
const pad = { padding: '0 110px 40px', width: '100%' as const };
const Eyebrow = ({ children }: { children: any }) => <span style={{ fontFamily: mono, fontSize: 22, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.orange, fontWeight: 700 }}>{children}</span>;
const Foot = ({ label }: { label: string }) => { const { current, total } = useSlidePageNumber(); return <div style={{ position: 'absolute', left: 110, right: 110, bottom: 44, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `1px solid ${C.line}` }}><span style={{ fontSize: 19, color: C.faint, fontFamily: mono }}>{label}</span><span style={{ fontSize: 19, color: C.faint, fontFamily: mono }}>{String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}</span></div>; };
const Title = ({ children, size = 60 }: { children: any; size?: number }) => <div style={{ fontSize: size, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.14 }}>{children}</div>;
const Lead = ({ children }: { children: any }) => <div style={{ fontSize: 33, color: C.muted, lineHeight: 1.6, maxWidth: 1480 }}>{children}</div>;
const B = ({ children }: { children: any }) => <strong style={{ color: C.ink }}>{children}</strong>;
const O = ({ children }: { children: any }) => <strong style={{ color: C.orange }}>{children}</strong>;
const Think = ({ q, a }: { q: any; a: any }) => (
  <div style={{ background: '#eef4ff', border: '1px solid #cfe0fb', borderRadius: 16, padding: '22px 30px', maxWidth: 1480 }}><div style={{ fontFamily: mono, fontSize: 21, color: '#2f5fb3', fontWeight: 700, marginBottom: 8 }}>你可能會想說 …</div><div style={{ fontSize: 30, color: '#26405f', lineHeight: 1.5 }}>{q}</div><div style={{ fontSize: 30, color: C.ink, lineHeight: 1.55, marginTop: 12 }}><O>其實</O> {a}</div></div>
);
const Analogy = ({ children }: { children: any }) => (
  <div style={{ background: '#fbf3ee', border: '1px solid #f3d6c4', borderRadius: 16, padding: '22px 30px', maxWidth: 1480 }}><div style={{ fontFamily: mono, fontSize: 21, color: C.orange, fontWeight: 700, marginBottom: 8 }}>打個比方 🏪</div><div style={{ fontSize: 31, color: C.ink, lineHeight: 1.55 }}>{children}</div></div>
);
const Harvest = ({ children }: { children: any }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16, borderLeft: `6px solid ${C.orange}`, background: '#fff', padding: '16px 26px', borderRadius: '0 12px 12px 0', maxWidth: 1480, boxShadow: '0 6px 24px -16px rgba(30,30,40,.4)' }}><span style={{ fontFamily: mono, fontSize: 18, color: C.orange, fontWeight: 700, whiteSpace: 'nowrap' }}>一句話帶走</span><span style={{ fontSize: 30, fontWeight: 700, lineHeight: 1.4 }}>{children}</span></div>
);
const Atom = ({ n, act, see }: { n: number; act: any; see: any }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}><span style={{ flexShrink: 0, width: 42, height: 42, borderRadius: '50%', background: C.ink, color: '#fff', display: 'grid', placeContent: 'center', fontFamily: mono, fontWeight: 700, fontSize: 22 }}>{n}</span><div><div style={{ fontSize: 30, lineHeight: 1.42 }}>{act}</div><div style={{ fontSize: 23, color: OK, marginTop: 4 }}>✓ 會看到:{see}</div></div></div>
);
const Key = ({ children }: { children: any }) => <span style={{ fontFamily: mono, fontSize: 23, background: '#eceff3', border: '1px solid #cfd5dd', borderRadius: 6, padding: '2px 10px', margin: '0 3px', color: C.ink }}>{children}</span>;
const CaseTag = ({ kind }: { kind: '手動' | 'AI' | '展示' }) => { const bg = kind === 'AI' ? C.orange : kind === '手動' ? '#2a2d35' : OK; return <span style={{ fontFamily: mono, fontSize: 19, color: '#fff', background: bg, borderRadius: 999, padding: '5px 15px' }}>{kind}帶做</span>; };
const CaseHead = ({ no, time, kind, title, size = 46 }: { no: string; time: string; kind: '手動' | 'AI' | '展示'; title: string; size?: number }) => (
  <div><div style={{ display: 'flex', alignItems: 'center', gap: 16 }}><Eyebrow>案例 {no}</Eyebrow><span style={{ fontFamily: mono, fontSize: 19, color: C.muted }}>約 {time}</span><CaseTag kind={kind} /></div><div style={{ fontSize: size, fontWeight: 800, letterSpacing: '-0.02em', marginTop: 14, lineHeight: 1.16 }}>{title}</div></div>
);
const PromptCard = ({ children, size = 26 }: { children: any; size?: number }) => (
  <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, overflow: 'hidden', boxShadow: '0 12px 40px -24px rgba(30,30,40,0.35)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 22px', background: '#fbf3ee', borderBottom: `1px solid ${C.line}` }}><span style={{ width: 12, height: 12, borderRadius: '50%', background: C.orange }} /><span style={{ fontFamily: mono, fontSize: 19, color: C.orange, fontWeight: 700, letterSpacing: '0.08em' }}>複製這段,貼到對話框</span></div>
    <pre style={{ margin: 0, padding: '20px 28px', fontFamily: mono, fontSize: size, lineHeight: 1.5, color: C.ink, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{children}</pre>
  </div>
);
const SuccessRow = ({ children }: { children: any }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16, background: '#eaf6f0', border: '1px solid #bfe6d4', borderRadius: 14, padding: '15px 24px', maxWidth: 1480 }}><span style={{ flexShrink: 0, width: 36, height: 36, borderRadius: '50%', background: OK, color: '#fff', display: 'grid', placeContent: 'center', fontSize: 22, fontWeight: 800 }}>✓</span><span style={{ fontSize: 29, color: '#0c5b3c', fontWeight: 600 }}>{children}</span></div>
);
const Pitfall = ({ items }: { items: [string, string][] }) => (
  <div style={{ background: '#fff7f4', border: `1px solid #f3d0c2`, borderRadius: 16, padding: '24px 32px' }}><div style={{ fontFamily: mono, fontSize: 21, color: RED, fontWeight: 700, marginBottom: 14 }}>卡住了?先看這裡</div><div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>{items.map(([q, a], i) => <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'baseline' }}><span style={{ flexShrink: 0, fontSize: 27, color: RED, fontWeight: 800 }}>?</span><div style={{ fontSize: 27, lineHeight: 1.4 }}><strong>{q}</strong>　<span style={{ color: C.muted }}>{a}</span></div></div>)}</div></div>
);
const Section = ({ no, title, time, sub }: { no: string; title: string; time: string; sub: string }) => (
  <div style={{ ...fill, background: C.ink, color: '#fff' }}><div style={{ ...pad }}><span style={{ fontFamily: mono, fontSize: 26, color: C.orange, letterSpacing: '0.2em' }}>段 {no} ・ {time}</span><div style={{ fontSize: 88, fontWeight: 900, marginTop: 22, letterSpacing: '-0.02em', lineHeight: 1.08 }}>{title}</div><div style={{ fontSize: 35, color: 'rgba(255,255,255,0.72)', marginTop: 24, maxWidth: 1300, lineHeight: 1.5 }}>{sub}</div></div></div>
);
const BreakSlide = () => (
  <div style={{ ...fill, background: '#0e7a52' }}><div style={{ ...pad, color: '#fff' }}><span style={{ fontFamily: mono, fontSize: 26, letterSpacing: '0.2em', opacity: 0.85 }}>BREAK</span><div style={{ fontSize: 118, fontWeight: 900, marginTop: 16 }}>休息 10 分鐘</div><div style={{ fontSize: 35, opacity: 0.9, marginTop: 22 }}>回來看 AI 顧店一整年,前後差多少。</div></div></div>
);
const FileCard = ({ title, children }: { title: string; children: any }) => (
  <div style={{ background: '#0f1117', borderRadius: 16, overflow: 'hidden', border: '1px solid #232733', maxWidth: 1480 }}>
    <div style={{ padding: '11px 20px', background: '#161a22', borderBottom: '1px solid #232733', fontFamily: mono, fontSize: 18, color: '#8b93a3' }}>{title}</div>
    <pre style={{ margin: 0, padding: '18px 26px', fontFamily: mono, fontSize: 22, lineHeight: 1.6, color: '#cdd3df', whiteSpace: 'pre-wrap' }}>{children}</pre>
  </div>
);
const RealShot = ({ img, url, eyebrow, title, caption }: { img: string; url: string; eyebrow: string; title: string; caption: string }) => (
  <div style={fill}><div style={{ ...pad }}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}><Eyebrow>{eyebrow}</Eyebrow><span style={{ fontSize: 22, color: OK, fontFamily: mono, fontWeight: 700 }}>● 這是真的,不是示意圖</span></div>
    <Title size={44}>{title}</Title>
    <div style={{ marginTop: 18, background: '#fff', border: `1px solid ${C.line}`, borderRadius: 14, overflow: 'hidden', boxShadow: '0 18px 50px -28px rgba(30,30,40,0.4)', maxWidth: 1540 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 18px', background: '#f0f2f5', borderBottom: `1px solid ${C.line}` }}><div style={{ display: 'flex', gap: 7 }}>{['#ff5f57', '#febc2e', '#28c840'].map((c, i) => <span key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />)}</div><div style={{ flex: 1, background: '#fff', border: `1px solid ${C.line}`, borderRadius: 7, padding: '5px 14px', fontFamily: mono, fontSize: 16, color: C.faint }}>{url}</div></div>
      <img src={img} alt={title} style={{ display: 'block', width: '100%', maxHeight: 520, objectFit: 'contain', background: '#f3ead9' }} />
    </div>
    <div style={{ fontSize: 25, color: C.muted, marginTop: 14 }}>{caption}</div>
  </div><Foot label="U14 · 課1 · 真實成果" /></div>
);

// ── 開場 ──
const Cover: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>U14 · 第 1 堂 / 共 2 堂 · 4 小時</Eyebrow>
    <div className="ts-rise" style={{ marginTop: 30 }}><Title size={94}>把它們開起來,<br />當一間公司營運</Title><div style={{ marginTop: 22 }}><Lead>你已經有助理、有網站了。今天我們跑一次<B>正常營業日</B>,看資料怎麼從顧客流到 AI 建議。</Lead></div></div>
  </div><Foot label="U14 · 課1" /></div>
);
const Recall: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>到這裡,你手上有什麼</Eyebrow><Title size={50}>兩塊拼圖,今天合起來</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 28, maxWidth: 1480 }}>
      {[['M12', '一個會讀資料、抓異常、給建議的營運助理'], ['M13', '一個公開、能自己更新的個人網站']].map(([a, b], i) => (
        <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '16px 24px' }}><span style={{ fontFamily: mono, fontSize: 22, color: C.orange, fontWeight: 800, width: 80 }}>{a}</span><span style={{ fontSize: 29 }}>{b}</span></div>
      ))}
    </div>
    <div style={{ marginTop: 22 }}><Lead>今天不學新工具,是把這兩塊<B>當成一間公司開起來營運</B>。</Lead></div>
  </div><Foot label="U14 · 課1 · 回顧" /></div>
);
const Outcome: Page = () => (
  <RealShot img={journeyShot} url="stanley-1013.github.io/chainsea-leacture/journey/" eyebrow="今天的高潮預告"
    title="AI 顧店一整年,走向就此岔開" caption="這是真的:大甲鍋貼一年的營運史。AI 在第 6 個月介入,兩條線就分開了。今天先跑一個正常營業日,第二段再看這張。" />
);
const Why: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>先講今天在幹嘛</Eyebrow><Title size={52}>今天不是學新工具,是把學過的「開起來用」</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 30 }}>
      <Lead>你的 M12 助理、M13 網站,加上前面學的系統,合起來就是<B>一間 AI 公司</B>。今天我們像開店一樣,跑一次正常的營業日。</Lead>
      <Think q={<>「我前面有些沒做完,怎麼演練?」</>} a={<>沒關係,落後的部分<B>用老師的 starter 補位</B>,從乾淨起點接手就好。今天練的是「<O>把流程跑一遍</O>」,不是補完所有舊作業。</>} />
    </div>
  </div><Foot label="U14 · 課1 · 為什麼" /></div>
);
const Roadmap: Page = () => {
  const items = [['案例 1', '5 分鐘換成你的店', '0:15', '手動'], ['案例 2', '畫出營運地圖', '0:40', 'AI'], ['案例 3', '跑一次正常營業日', '1:30', 'AI'], ['案例 4', '看 AI 顧店一整年', '3:00', '展示']];
  return (
    <div style={fill}><div style={pad}><Eyebrow>今天的路線 · 四個案例 + 收束</Eyebrow><Title>像開店一樣跑一天</Title>
      <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, marginTop: 42 }}>
        {items.map(([a, b, t, k], i) => <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '22px 20px' }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontFamily: mono, fontSize: 20, color: C.orange, fontWeight: 700 }}>{a}</span><span style={{ fontFamily: mono, fontSize: 17, color: C.faint }}>{t}</span></div><div style={{ fontSize: 28, fontWeight: 800, marginTop: 10, lineHeight: 1.25 }}>{b}</div><div style={{ marginTop: 12 }}><CaseTag kind={k as any} /></div></div>)}
      </div></div><Foot label="U14 · 課1 · 路線" /></div>
  );
};
// ── 段1 這是我的公司 ──
const Sec1: Page = () => <Section no="1" title="先確認「這是我的公司」" time="0:15 - 1:00" sub="5 分鐘把品牌換成你的,再把你的系統畫成一張營運地圖。" />;
const C1Head: Page = () => (
  <div style={fill}><div style={pad}><CaseHead no="1" time="0:15 - 0:40" kind="手動" title="5 分鐘:把範例換成你的店" />
    <div className="ts-rise" style={{ marginTop: 34 }}><Lead>今天的範例是大甲鍋貼。但要有感,得是<B>你自己的店</B>。花 5 分鐘,把它換成你的。</Lead></div>
  </div><Foot label="U14 · 課1 · 案例1" /></div>
);
const C1Step: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 1 · 動作</Eyebrow><Title size={46}>三步,變成你的店</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 24, maxWidth: 1520 }}>
      <Atom n={1} act={<>取個品牌名,把「大甲鍋貼」換成你的(例如喵星人貓糧)。</>} see="你心裡有一個「我的店」。" />
      <Atom n={2} act={<>用一句話說<B>你賣什麼、賣給誰</B>。</>} see="一句清楚的業務描述。" />
      <Atom n={3} act={<>挑一個你<B>最在意的指標</B>(例如外送佔比、缺貨次數),演練時就盯它。</>} see="一個你今天要顧的數字。" />
    </div>
    <div style={{ marginTop: 18 }}><SuccessRow>能說出「這是我的公司、我最在意這個數字」= 完成。</SuccessRow></div>
  </div><Foot label="U14 · 課1 · 案例1" /></div>
);
const C1Why: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 1 · 為什麼先個人化</Eyebrow><Title size={50}>對著你自己的店,你才會「在意」</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Think q={<>「用範例的鍋貼練不行嗎?」</>} a={<>可以,但<B>沒感覺</B>。換成你自己的店、盯你自己在意的數字,等下看到 AI 抓出問題,你才會「啊,這真的有用」。</>} />
      <Harvest>把練習對到你真正關心的事,學起來才扎實。</Harvest>
    </div>
  </div><Foot label="U14 · 課1 · 案例1" /></div>
);
const C2Head: Page = () => (
  <div style={fill}><div style={pad}><CaseHead no="2" time="0:40 - 1:00" kind="AI" title="請 AI 幫你畫一張營運地圖" />
    <div className="ts-rise" style={{ marginTop: 34 }}><Lead>把你做過的東西,整理成一張「<B>資料怎麼流</B>」的地圖。不用畫得漂亮,看得懂就好。</Lead></div>
  </div><Foot label="U14 · 課1 · 案例2" /></div>
);
const C2Concept: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 比喻</Eyebrow><Title size={50}>營運地圖,就是店裡的動線圖</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Analogy>像畫一張<B>店裡的動線圖</B>:客人從哪進來、點餐單往哪送、廚房怎麼出餐。我們畫的,是「資料」的動線。</Analogy>
      <Harvest>看得懂資料怎麼流,你就知道哪裡斷了要去哪修。</Harvest>
    </div>
  </div><Foot label="U14 · 課1 · 案例2" /></div>
);
const C2Layers: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 三層</Eyebrow><Title size={48}>一間 AI 公司,分三層</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18, marginTop: 30 }}>
      {[['對外層', '顧客看到的:你的 M13 網站、社群、客服。'], ['內部營運層', '排班、成本、庫存、叫料這些流程。'], ['資料決策層', '營運資料表 + 你的 M12 決策助理。']].map(([a, b], i) => (
        <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '24px 24px' }}><div style={{ fontSize: 32, fontWeight: 800, color: C.orange }}>{a}</div><div style={{ fontSize: 25, color: C.muted, marginTop: 12, lineHeight: 1.45 }}>{b}</div></div>
      ))}
    </div>
    <div style={{ fontSize: 28, color: C.ink, marginTop: 24, fontFamily: mono }}>顧客下單 → 進資料 → M12 判讀 → 你決定。</div>
  </div><Foot label="U14 · 課1 · 案例2" /></div>
);
const C2Prompt: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · Prompt 卡</Eyebrow><Title size={46}>貼這段,整理成地圖</Title>
    <div style={{ marginTop: 18 }}><PromptCard size={26}>{`幫我把我的系統整理成一張營運地圖,分三層:
對外(網站/社群)、內部(庫存/流程)、資料與決策(M12 助理)。
標出資料從顧客到 AI 建議,是怎麼一步步流過去的。`}</PromptCard></div>
    <div style={{ marginTop: 16 }}><Atom n={1} act={<><B>複製 → 貼到對話框 → <Key>Enter</Key></B>。</>} see="它回一張分三層、標了資料流向的地圖。" /></div>
  </div><Foot label="U14 · 課1 · 案例2" /></div>
);
const C2Read: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 720px', gap: 50, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}><div><Eyebrow>案例 2 · 看懂這張地圖</Eyebrow><Title size={44}>順著箭頭走一次</Title></div><Lead>你不用看每個細節,<B>順著箭頭走一次</B>:顧客 → 資料 → AI → 你。能講出這條線,地圖就讀懂了。</Lead></div>
    <div className="ts-rise"><FileCard title="你的營運地圖">{`對外    顧客下單(網站/外送)
          │
內部    進到營運資料表
          │
決策    M12 讀資料、抓異常
          │
你      看建議、做決定`}</FileCard></div>
  </div><Foot label="U14 · 課1 · 案例2" /></div>
);
// ── 段2 正常營業日 ──
const Sec2: Page = () => <Section no="2" title="跑一次正常營業日" time="1:00 - 2:50" sub="情境:新品促銷日。公告新品、訂單湧入、老闆問生意,M12 給當日摘要。" />;
const C3Head: Page = () => (
  <div style={fill}><div style={pad}><CaseHead no="3" time="1:00 - 2:50" kind="AI" title="情境演練:新品促銷日,從開店到收店" />
    <div className="ts-rise" style={{ marginTop: 34 }}><Lead>今天大甲鍋貼推新品(泡菜鍋貼)。我們照一個營業日的順序跑一次,看每一步資料怎麼動。這是 M14 的<B>必做整合演練</B>。</Lead></div>
  </div><Foot label="U14 · 課1 · 案例3" /></div>
);
const C3Flow: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 一天的順序</Eyebrow><Title size={48}>四步,跑完一天</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 13, marginTop: 26, maxWidth: 1500 }}>
      {[['開店', '在 M13 網站/社群公告新品'], ['午餐尖峰', '訂單湧入、庫存下降,缺料提醒會響'], ['下午', '老闆問:今天生意如何?→ M12 讀當日資料'], ['收店', '用 AI 整理出可交接的當日摘要']].map(([a, b], i) => (
        <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '15px 24px' }}><span style={{ flexShrink: 0, fontFamily: mono, fontSize: 22, color: C.orange, fontWeight: 800, width: 90 }}>{a}</span><span style={{ fontSize: 28 }}>{b}</span></div>
      ))}
    </div>
  </div><Foot label="U14 · 課1 · 案例3" /></div>
);
const C3Open: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 開店這步 · Prompt 卡</Eyebrow><Title size={46}>請 AI 幫你寫新品公告</Title>
    <div style={{ marginTop: 18 }}><PromptCard size={26}>{`今天推新品「泡菜鍋貼」。
幫我寫一則開賣公告,放在我的網站跟社群,
語氣熱鬧、有食慾,附一句限時優惠。`}</PromptCard></div>
    <div style={{ marginTop: 16 }}><SuccessRow>拿到一則能直接貼的新品公告 = 開店這步完成。</SuccessRow></div>
  </div><Foot label="U14 · 課1 · 案例3" /></div>
);
const C3Peak: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 午餐尖峰</Eyebrow><Title size={48}>訂單湧入,缺料提醒會響</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 26 }}>
      <Lead>新品太受歡迎,某個料快用完。這時系統會<B>跳一個缺料提醒</B>。先別急著處理,記下來：這是下一堂「處理異常」的伏筆。</Lead>
      <FileCard title="缺料提醒">{`⚠ 泡菜內餡 剩餘 8%
   依目前售速,約 40 分鐘用完`}</FileCard>
    </div>
  </div><Foot label="U14 · 課1 · 案例3" /></div>
);
const C3Ask: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 下午這步 · Prompt 卡</Eyebrow><Title size={46}>老闆問生意,叫 M12 判讀當日</Title>
    <div style={{ marginTop: 18 }}><PromptCard size={26}>{`用今天(促銷日)的銷售資料,幫我判讀:
今天生意如何?有沒有哪裡要注意?
請用 insight / anomalies / risk / action 四欄回我。`}</PromptCard></div>
    <div style={{ marginTop: 16 }}><Atom n={1} act={<><B>複製 → 貼到對話框 → <Key>Enter</Key></B>。(這就是 M12 在 M14 裡的用法)</>} see="M12 給出當日摘要,抓到該注意的點。" /></div>
  </div><Foot label="U14 · 課1 · 案例3" /></div>
);
const C3Read: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 720px', gap: 50, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}><div><Eyebrow>案例 3 · 讀 M12 的當日摘要</Eyebrow><Title size={44}>四欄,一眼看懂今天</Title></div><Lead>還是你熟悉的那四欄:一句洞察、可疑處、風險、建議。M12 在 M14 裡,就是這樣每天幫你看一遍。</Lead></div>
    <div className="ts-rise"><FileCard title="M12 當日摘要">{`insight: "新品帶動整體 +18%"
anomalies: ["泡菜內餡快缺料"]
risk_level: "中"
action_items: ["下午補叫泡菜料"]`}</FileCard></div>
  </div><Foot label="U14 · 課1 · 案例3" /></div>
);
const C3Close: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 收店這步 · Prompt 卡</Eyebrow><Title size={46}>請 AI 整理可交接的當日摘要</Title>
    <div style={{ marginTop: 18 }}><PromptCard size={26}>{`幫我把今天的營運整理成一段交班摘要:
今天賣得如何、發生什麼狀況、明天要注意什麼。
三五句、口語,讓接班的人一看就懂。`}</PromptCard></div>
    <div style={{ marginTop: 16 }}><SuccessRow>拿到一段能傳給接班人的當日摘要 = 收店完成。</SuccessRow></div>
  </div><Foot label="U14 · 課1 · 案例3" /></div>
);
const C3Record: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 收店前 · 記錄四件事</Eyebrow><Title size={48}>跑完一天,記這四件</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16, marginTop: 28, maxWidth: 1500 }}>
      {[['成功', '哪條流程跑通了?'], ['斷點', '哪裡卡住、斷掉?'], ['人工接手', '哪裡一定要人介入?'], ['資料差異', '系統數字和實際對不對得上?']].map(([k, v], i) => (
        <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '20px 26px' }}><div style={{ fontSize: 30, fontWeight: 800, color: C.orange }}>{k}</div><div style={{ fontSize: 25, color: C.muted, marginTop: 8 }}>{v}</div></div>
      ))}
    </div>
    <div style={{ marginTop: 18 }}><Harvest>這四件,就是明天交接、和下一堂處理異常的依據。</Harvest></div>
  </div><Foot label="U14 · 課1 · 案例3" /></div>
);
const C3Why: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 這個演練的意義</Eyebrow><Title size={50}>你剛剛把學過的全部串起來了</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Lead>公告用到寫作、缺料用到資料、判讀用到 M12、交接用到整理。一個營業日,就把前面所有東西<B>接成一條線</B>。</Lead>
      <Harvest>這就是「營運」:不是一個功能,是把所有功能串起來每天跑。</Harvest>
    </div>
  </div><Foot label="U14 · 課1 · 案例3" /></div>
);
const C3Pit: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 卡住了?</Eyebrow><Title size={48}>兩個常見狀況</Title>
    <div className="ts-rise" style={{ marginTop: 26, maxWidth: 1500 }}><Pitfall items={[['沒有完整資料可跑:', '用老師 starter 的範例資料,一樣能把流程走一遍。'], ['某一步接不起來:', '記到「斷點」那欄,這正是下一堂要練的處理。']]} /></div>
  </div><Foot label="U14 · 課1 · 案例3" /></div>
);
const Break1: Page = () => <BreakSlide />;
// ── 段3 一年史 ──
const Sec3: Page = () => <Section no="3" title="看 AI 顧店一整年" time="3:00 - 3:40" sub="把一天放大成一年。AI 在第 6 個月才進來,你會看到走向整個岔開。" />;
const C4Head: Page = () => (
  <div style={fill}><div style={pad}><CaseHead no="4" time="3:00 - 3:40" kind="展示" title="一天 → 一年:兩條線的故事" />
    <div className="ts-rise" style={{ marginTop: 34 }}><Lead>剛剛你跑的是「一天」。現在把它放大成「一年」,而且做一個對照:同一間店,一條有 AI、一條沒有。</Lead></div>
  </div><Foot label="U14 · 課1 · 案例4" /></div>
);
const C4: Page = () => (
  <RealShot img={journeyShot} url="stanley-1013.github.io/chainsea-leacture/journey/" eyebrow="案例 4 · 真實成果"
    title="兩條線:有 AI vs 沒 AI" caption="這是真的、可以拖的時間軸:同一間店,AI 第 6 個月介入後,毛利從谷底回升;沒介入的那條(虛線)繼續往下。你跑的那一天,就是這條線上的一個點。" />
);
const C4Read: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 4 · 讀懂兩條線</Eyebrow><Title size={48}>實線是真的,虛線是「如果沒做」</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 26, maxWidth: 1500 }}>
      {[['實線', '有導入 AI 的真實走向:第 6 個月後回升。', OK], ['虛線', '假設「繼續純手動」的推估:一路往下。', C.muted], ['岔開的缺口', '兩條線之間的距離 = AI 帶來的差別。', C.orange]].map(([a, b, col], i) => (
        <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '15px 24px' }}><span style={{ width: 16, height: 16, borderRadius: '50%', background: col as string }} /><span style={{ fontFamily: mono, fontSize: 22, fontWeight: 700, width: 130 }}>{a}</span><span style={{ fontSize: 26 }}>{b}</span></div>
      ))}
    </div>
  </div><Foot label="U14 · 課1 · 案例4" /></div>
);
const C4Point: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 4 · 重點</Eyebrow><Title size={50}>你今天跑的「一天」,<br />就是這條線上的<span style={{ color: C.orange }}>一個點</span></Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Lead>不要小看那一天。一年那條往上的線,就是<B>一天一天這樣跑出來的</B>。</Lead>
    </div>
  </div><Foot label="U14 · 課1 · 案例4" /></div>
);
const C4Daily: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 4 · AI 每天都在做事</Eyebrow><Title size={50}>不是一次很猛,是每天都在顧</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Lead>AI 不是某天突然立大功。它<B>每天</B>讀資料、抓異常、提醒你。今天一點、明天一點,你常常感覺不到。</Lead>
      <Harvest>它的價值,藏在「每天都在」這四個字裡。</Harvest>
    </div>
  </div><Foot label="U14 · 課1 · 案例4" /></div>
);
const C4Cause: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 4 · 為什麼說 AI 是「原因」</Eyebrow><Title size={48}>同一間店,只差有沒有 AI</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Think q={<>「會不會只是剛好那半年生意變好?」</>} a={<>這就是為什麼要做<B>對照</B>。同一間店、同樣的市場,差別只在「<O>第 6 個月有沒有讓 AI 介入</O>」。所以這個缺口,指向的就是 AI。</>} />
    </div>
  </div><Foot label="U14 · 課1 · 案例4" /></div>
);
// ── 段4 收束 ──
const Punchline: Page = () => (
  <div style={{ ...fill, background: C.ink, color: '#fff' }}><div style={pad}><Eyebrow>今天記住這句</Eyebrow><div style={{ fontSize: 74, fontWeight: 900, lineHeight: 1.2, marginTop: 26, maxWidth: 1560, letterSpacing: '-0.02em' }}>同一間店,AI 第 6 個月<br />才進來;你看資料走向,<br /><span style={{ color: C.orange }}>就此岔開。</span></div><div style={{ fontSize: 31, color: 'rgba(255,255,255,0.7)', marginTop: 26, maxWidth: 1380, lineHeight: 1.55 }}>不是一次很猛,是每天都在顧。累積起來,就是看得見的差距。</div></div><div style={{ position: 'absolute', left: 110, bottom: 44, fontFamily: mono, fontSize: 19, color: 'rgba(255,255,255,0.5)' }}>U14 · 課1 · 記住這句</div></div>
);
const Recap: Page = () => {
  const pts = [['這是我的公司', '個人化 + 一張營運地圖'], ['跑一次正常的一天', '看資料怎麼流到 AI 建議'], ['AI 每天做事', '一年下來差很多']];
  return (<div style={fill}><div style={pad}><Eyebrow>今天我們做了三件事</Eyebrow><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 38, maxWidth: 1500 }}>{pts.map(([a, b], i) => <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}><span style={{ fontFamily: mono, fontSize: 38, color: C.orange, fontWeight: 800 }}>{String(i + 1).padStart(2, '0')}</span><div><div style={{ fontSize: 40, fontWeight: 800 }}>{a}</div><div style={{ fontSize: 27, color: C.muted, marginTop: 4 }}>{b}</div></div></div>)}</div></div><Foot label="U14 · 課1 · 收束" /></div>);
};
const Homework: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>回家作業 · 輕量,只要一件</Eyebrow><Title>保留今天的成功版本</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 36, maxWidth: 1480 }}>
      <div style={{ background: C.card, border: `2px solid ${C.orange}`, borderRadius: 16, padding: '24px 34px' }}><span style={{ fontFamily: mono, fontSize: 22, color: C.orange, fontWeight: 700 }}>必做</span><div style={{ fontSize: 34, marginTop: 8, lineHeight: 1.4 }}><B>保留</B>今天跑通的正常營業日版本,確認組內角色分工。</div></div>
      <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '20px 34px' }}><span style={{ fontFamily: mono, fontSize: 22, color: C.muted, fontWeight: 700 }}>選做</span><div style={{ fontSize: 28, marginTop: 6, color: C.muted, lineHeight: 1.4 }}>修一個次要小問題,但不要破壞成功版本。</div></div>
    </div></div><Foot label="U14 · 課1 · 回家作業" /></div>
);
const Next: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>下一堂預告</Eyebrow><Title size={54}>突發狀況來了:<br /><span style={{ color: C.orange }}>讓 AI 自己處置</span></Title><div style={{ fontSize: 32, color: C.muted, marginTop: 28, lineHeight: 1.5 }}>下一堂讓 agent 自己偵測、自動止血、小事自己處理;只有高風險才升級給你。你的角色:劃紅線。今天辛苦了。</div></div><Foot label="U14 · 課1 · 下一堂" /></div>
);

export const meta: SlideMeta = { title: 'U14 課1：正常營業日 + 一年營運史', createdAt: '2026-06-22T11:30:00.000Z' };
export const notes: (string | undefined)[] = [
  '各位同學,進到最後一個模組 U14。前面你做了營運助理、公開網站。這個模組不是學新工具,是把你學過的全部開起來,當成一間公司來營運。今天我們跑一次正常營業日,看資料怎麼從顧客流到 AI 建議。',
  '到這裡你手上有兩塊拼圖:M12 一個會讀資料、抓異常、給建議的營運助理;M13 一個公開、能自己更新的個人網站。今天不學新工具,是把這兩塊當成一間公司開起來營運。',
  '先給大家看今天的高潮預告。這是真的:大甲鍋貼一年的營運史。AI 在第 6 個月介入,兩條線就分開了。今天先跑一個正常營業日,第二段再回來看這張。',
  '先講今天在幹嘛。今天不是學新工具,是把學過的開起來用。你的 M12 助理、M13 網站,加上前面的系統,合起來就是一間 AI 公司。你可能會想說前面有些沒做完怎麼演練?沒關係,落後的用老師 starter 補位,從乾淨起點接手。今天練的是把流程跑一遍,不是補完所有舊作業。',
  '看路線。四個案例:5 分鐘把品牌換成你的、請 AI 畫營運地圖、跑一次正常營業日、最後看 AI 顧店一整年。中間休息一次。',
  '第一段,先確認這是我的公司。5 分鐘把品牌換成你的,再把系統畫成一張地圖。',
  '案例一,今天範例是大甲鍋貼,但要有感得是你自己的店。花 5 分鐘換成你的。',
  '三步變成你的店:取個品牌名把大甲鍋貼換成你的;用一句話說你賣什麼賣給誰;挑一個你最在意的指標,例如外送佔比、缺貨次數,演練時就盯它。能說出這是我的公司、我最在意這個數字就完成。',
  '為什麼先個人化?你可能會想說用範例的鍋貼練不行嗎?可以,但沒感覺。換成你自己的店、盯你自己在意的數字,等下看到 AI 抓出問題你才會啊這真的有用。把練習對到你真正關心的事,學起來才扎實。',
  '案例二,請 AI 幫你畫一張營運地圖,把你做過的東西整理成資料怎麼流的圖。不用漂亮,看得懂就好。',
  '用比喻講:營運地圖就是店裡的動線圖,客人從哪進來、點餐單往哪送、廚房怎麼出餐;我們畫的是資料的動線。看得懂資料怎麼流,你就知道哪裡斷了要去哪修。',
  '先講一間 AI 公司分三層:對外層是顧客看到的,網站、社群、客服;內部營運層是排班、成本、庫存、叫料;資料決策層是營運資料表加 M12 助理。顧客下單、進資料、M12 判讀、你決定。',
  '貼這段,請它把你的系統整理成三層地圖,標出資料從顧客到 AI 建議怎麼一步步流。它回一張分三層、標了資料流向的地圖。',
  '看懂這張地圖:你不用看每個細節,順著箭頭走一次,顧客、資料、AI、你。能講出這條線,地圖就讀懂了。',
  '第二段,跑一次正常營業日。情境是新品促銷日:公告新品、訂單湧入、老闆問生意、M12 給當日摘要。',
  '案例三,今天大甲鍋貼推新品泡菜鍋貼。我們照一個營業日的順序跑一次。這是 M14 的必做整合演練。',
  '一天的順序四步:開店在網站社群公告新品;午餐尖峰訂單湧入、庫存下降、缺料提醒會響;下午老闆問今天生意如何,M12 讀當日資料;收店用 AI 整理出可交接的當日摘要。',
  '開店這步,貼這段請 AI 幫你寫新品公告,放網站跟社群、語氣熱鬧有食慾、附一句限時優惠。拿到一則能直接貼的公告,開店這步就完成。',
  '午餐尖峰,新品太受歡迎某個料快用完,系統跳一個缺料提醒。先別急著處理,記下來,這是下一堂處理異常的伏筆。',
  '下午這步是重點。貼這段,用今天促銷日的資料叫 M12 判讀:今天生意如何、有沒有要注意的,用四欄回我。複製、貼、Enter,這就是 M12 在 M14 裡的用法。M12 給出當日摘要、抓到該注意的點。',
  '讀 M12 的當日摘要,還是你熟悉的那四欄:一句洞察、可疑處、風險、建議。M12 在 M14 裡就是這樣每天幫你看一遍。',
  '收店這步,貼這段請 AI 把今天營運整理成一段交班摘要:今天賣得如何、發生什麼狀況、明天要注意什麼,三五句口語讓接班的人一看就懂。拿到能傳給接班人的摘要,收店就完成。',
  '收店前記四件事:成功,哪條流程跑通了;斷點,哪裡卡住斷掉;人工接手,哪裡一定要人介入;資料差異,系統數字和實際對不對得上。這四件就是明天交接、和下一堂處理異常的依據。',
  '這個演練的意義:公告用到寫作、缺料用到資料、判讀用到 M12、交接用到整理,一個營業日就把前面所有東西接成一條線。這就是營運,不是一個功能,是把所有功能串起來每天跑。',
  '卡住:沒有完整資料可跑,用老師 starter 範例資料一樣能把流程走一遍;某一步接不起來,記到斷點那欄,這正是下一堂要練的處理。好,休息十分鐘。',
  '休息十分鐘,回來看 AI 顧店一整年,前後差多少。',
  '回來了。第三段,看 AI 顧店一整年。把一天放大成一年,AI 在第 6 個月才進來,你會看到走向整個岔開。',
  '案例四,剛剛你跑的是一天,現在把它放大成一年,而且做一個對照:同一間店,一條有 AI、一條沒有。',
  '看這張真的、可以拖的時間軸。同一間店,AI 第 6 個月介入後毛利從谷底回升;沒介入的那條虛線繼續往下。你今天跑的那一天,就是這條線上的一個點。',
  '讀懂兩條線:實線是有導入 AI 的真實走向,第 6 個月後回升;虛線是假設繼續純手動的推估,一路往下;兩條線之間的缺口,就是 AI 帶來的差別。',
  '這裡的重點:你今天跑的一天,就是這條線上的一個點。不要小看那一天,一年那條往上的線,就是一天一天這樣跑出來的。',
  'AI 每天都在做事,不是某天突然立大功。它每天讀資料、抓異常、提醒你,今天一點明天一點,你常常感覺不到。它的價值,藏在每天都在這四個字裡。',
  '為什麼說 AI 是原因?你可能會想說會不會只是剛好那半年生意變好?這就是為什麼要做對照。同一間店、同樣市場,差別只在第 6 個月有沒有讓 AI 介入,所以這個缺口指向的就是 AI。',
  '今天最重要的一句:同一間店,AI 第 6 個月才進來,你看資料走向就此岔開。不是一次很猛,是每天都在顧,累積起來就是看得見的差距。',
  '收尾,今天三件事:確認這是我的公司加一張地圖、跑一次正常的一天、AI 每天做事一年差很多。',
  '回家作業只有一件:保留今天跑通的正常營業日版本,確認組內角色分工。選做是修一個次要小問題,但不要破壞成功版本。',
  '下一堂,突發狀況來了。還記得那個缺料提醒嗎?下一堂讓 agent 自己偵測、自動止血、小事自己處理,只有高風險才升級給你。你的角色是劃紅線。今天辛苦大家了。',
];
export default [
  Cover, Recall, Outcome, Why, Roadmap,
  Sec1, C1Head, C1Step, C1Why, C2Head, C2Concept, C2Layers, C2Prompt, C2Read,
  Sec2, C3Head, C3Flow, C3Open, C3Peak, C3Ask, C3Read, C3Close, C3Record, C3Why, C3Pit, Break1,
  Sec3, C4Head, C4, C4Read, C4Point, C4Daily, C4Cause,
  Punchline, Recap, Homework, Next,
] satisfies Page[];
