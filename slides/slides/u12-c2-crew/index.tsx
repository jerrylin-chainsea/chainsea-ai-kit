import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';
import traceShot from './assets/trace.png';

export const design: DesignSystem = {
  palette: { bg: '#f5f6f8', text: '#181a1f', accent: '#e2570d' },
  fonts: { display: '"PingFang TC", "Noto Sans TC", "Microsoft JhengHei", system-ui, sans-serif', body: '"PingFang TC", "Noto Sans TC", "Microsoft JhengHei", system-ui, sans-serif' },
  typeScale: { hero: 132, body: 34 }, radius: 16,
};
const C = { bg: design.palette.bg, ink: design.palette.text, orange: design.palette.accent, muted: '#5a6270', faint: '#9aa1ad', line: '#e2e5ea', card: '#ffffff' };
const OK = '#0e7a52'; const RED = '#c0392b';
const mono = '"JetBrains Mono", "SF Mono", ui-monospace, monospace';
const css = `@keyframes ts-up{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.ts-rise>*{animation:ts-up .55s cubic-bezier(.16,1,.3,1) both}.ts-rise>*:nth-child(2){animation-delay:.05s}.ts-rise>*:nth-child(3){animation-delay:.10s}.ts-rise>*:nth-child(4){animation-delay:.15s}.ts-rise>*:nth-child(5){animation-delay:.20s}
@media (prefers-reduced-motion:reduce){.ts-rise>*{animation:none!important}}`;
if (typeof document !== 'undefined' && !document.getElementById('ts-u12c2')) { const el = document.createElement('style'); el.id = 'ts-u12c2'; el.textContent = css; document.head.appendChild(el); }
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
  <div style={{ background: '#fbf3ee', border: '1px solid #f3d6c4', borderRadius: 16, padding: '22px 30px', maxWidth: 1480 }}><div style={{ fontFamily: mono, fontSize: 21, color: C.orange, fontWeight: 700, marginBottom: 8 }}>打個比方 🍳</div><div style={{ fontSize: 31, color: C.ink, lineHeight: 1.55 }}>{children}</div></div>
);
const Harvest = ({ children }: { children: any }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16, borderLeft: `6px solid ${C.orange}`, background: '#fff', padding: '16px 26px', borderRadius: '0 12px 12px 0', maxWidth: 1480, boxShadow: '0 6px 24px -16px rgba(30,30,40,.4)' }}><span style={{ fontFamily: mono, fontSize: 18, color: C.orange, fontWeight: 700, whiteSpace: 'nowrap' }}>一句話帶走</span><span style={{ fontSize: 30, fontWeight: 700, lineHeight: 1.4 }}>{children}</span></div>
);
const Atom = ({ n, act, see }: { n: number; act: any; see: any }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}><span style={{ flexShrink: 0, width: 42, height: 42, borderRadius: '50%', background: C.ink, color: '#fff', display: 'grid', placeContent: 'center', fontFamily: mono, fontWeight: 700, fontSize: 22 }}>{n}</span><div><div style={{ fontSize: 30, lineHeight: 1.42 }}>{act}</div><div style={{ fontSize: 23, color: OK, marginTop: 4 }}>✓ 會看到:{see}</div></div></div>
);
const Key = ({ children }: { children: any }) => <span style={{ fontFamily: mono, fontSize: 23, background: '#eceff3', border: '1px solid #cfd5dd', borderRadius: 6, padding: '2px 10px', margin: '0 3px', color: C.ink }}>{children}</span>;
const CaseTag = ({ kind }: { kind: '手動' | 'AI' | '展示' }) => { const bg = kind === 'AI' ? C.orange : kind === '手動' ? '#2a2d35' : OK; return <span style={{ fontFamily: mono, fontSize: 19, color: '#fff', background: bg, borderRadius: 999, padding: '5px 15px' }}>{kind}帶做</span>; };
const CaseHead = ({ no, time, kind, title, size = 48 }: { no: string; time: string; kind: '手動' | 'AI' | '展示'; title: string; size?: number }) => (
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
const BreakSlide = ({ sub }: { sub: string }) => (
  <div style={{ ...fill, background: '#0e7a52' }}><div style={{ ...pad, color: '#fff' }}><span style={{ fontFamily: mono, fontSize: 26, letterSpacing: '0.2em', opacity: 0.85 }}>BREAK</span><div style={{ fontSize: 118, fontWeight: 900, marginTop: 16 }}>休息 10 分鐘</div><div style={{ fontSize: 35, opacity: 0.9, marginTop: 22 }}>{sub}</div></div></div>
);
const ChatFrame = () => (
  <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 18, overflow: 'hidden', boxShadow: '0 18px 50px -28px rgba(30,30,40,0.4)' }}>
    <div style={{ display: 'flex', gap: 9, padding: '11px 20px', background: '#f0f2f5', borderBottom: `1px solid ${C.line}` }}>{['#e2570d', '#e6b800', '#0e7a52'].map((c, i) => <span key={i} style={{ width: 13, height: 13, borderRadius: '50%', background: c }} />)}<span style={{ fontFamily: mono, fontSize: 18, color: C.faint, marginLeft: 10 }}>終端機 · 三角色 verbose</span></div>
    <div style={{ padding: '18px 26px', display: 'flex', flexDirection: 'column', gap: 11 }}>
      {[['# 資料檢查員', '挑出 3 筆問題:負值、極端值、售價低於成本。'], ['# 分析洞察員', '原味鍋貼資料被汙染,毛利會被高估,先別下結論。'], ['# 決策摘要員(改口語後)', '老闆,今天先查那兩筆是不是打錯,它們會把帳算歪。']].map(([w, t], i) => (
        <div key={i} style={{ background: '#f3f5f8', borderRadius: 12, padding: '12px 18px' }}><span style={{ fontFamily: mono, fontSize: 18, color: C.orange, fontWeight: 700 }}>{w}</span><div style={{ fontSize: 22, color: C.ink, marginTop: 4, lineHeight: 1.4 }}>{t}</div></div>
      ))}
    </div>
  </div>
);
const ResultFrame = () => {
  const rows: [string, string][] = [['insight', '"資料被汙染,先別下結論"'], ['anomalies', '["數量 -5 負值", "數量 300 太極端", "售價低於成本"]'], ['risk_level', '"高"'], ['action_items', '["先查那兩筆單據", "退貨另外記"]']];
  return (
    <div style={{ background: '#0f1117', borderRadius: 18, overflow: 'hidden', border: '1px solid #232733', boxShadow: '0 18px 50px -26px rgba(0,0,0,0.5)' }}>
      <div style={{ display: 'flex', gap: 9, padding: '11px 20px', background: '#161a22', borderBottom: '1px solid #232733' }}>{['#ff5f57', '#febc2e', '#28c840'].map((c, i) => <span key={i} style={{ width: 13, height: 13, borderRadius: '50%', background: c }} />)}<span style={{ fontFamily: mono, fontSize: 18, color: '#6b7280', marginLeft: 10 }}>run.py · 決策摘要</span></div>
      <pre style={{ margin: 0, padding: '20px 28px', fontFamily: mono, fontSize: 22, lineHeight: 1.6, color: '#cdd3df' }}><span style={{ color: '#6b7280' }}>{'{'}</span>{rows.map(([k, v], i) => <div key={i} style={{ paddingLeft: 22 }}><span style={{ color: C.orange }}>"{k}"</span><span style={{ color: '#6b7280' }}>: </span><span style={{ color: '#7fd4a8' }}>{v}</span>{i < rows.length - 1 ? <span style={{ color: '#6b7280' }}>,</span> : null}</div>)}<span style={{ color: '#6b7280' }}>{'}'}</span></pre>
    </div>
  );
};
const RealShot = ({ img, url, eyebrow, title, caption }: { img: string; url: string; eyebrow: string; title: string; caption: string }) => (
  <div style={fill}><div style={{ ...pad }}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}><Eyebrow>{eyebrow}</Eyebrow><span style={{ fontSize: 22, color: OK, fontFamily: mono, fontWeight: 700 }}>● 這是真的,不是示意圖</span></div>
    <Title size={44}>{title}</Title>
    <div style={{ marginTop: 18, background: '#fff', border: `1px solid ${C.line}`, borderRadius: 14, overflow: 'hidden', boxShadow: '0 18px 50px -28px rgba(30,30,40,0.4)', maxWidth: 1540 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 18px', background: '#f0f2f5', borderBottom: `1px solid ${C.line}` }}><div style={{ display: 'flex', gap: 7 }}>{['#ff5f57', '#febc2e', '#28c840'].map((c, i) => <span key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />)}</div><div style={{ flex: 1, background: '#fff', border: `1px solid ${C.line}`, borderRadius: 7, padding: '5px 14px', fontFamily: mono, fontSize: 16, color: C.faint }}>{url}</div></div>
      <img src={img} alt={title} style={{ display: 'block', width: '100%', maxHeight: 520, objectFit: 'cover', objectPosition: 'top' }} />
    </div>
    <div style={{ fontSize: 25, color: C.muted, marginTop: 14 }}>{caption}</div>
  </div><Foot label="U12 · 課2 · 真實成果" /></div>
);
const FileCard = ({ title, children }: { title: string; children: any }) => (
  <div style={{ background: '#0f1117', borderRadius: 16, overflow: 'hidden', border: '1px solid #232733', maxWidth: 1480 }}>
    <div style={{ padding: '11px 20px', background: '#161a22', borderBottom: '1px solid #232733', fontFamily: mono, fontSize: 18, color: '#8b93a3' }}>{title}</div>
    <pre style={{ margin: 0, padding: '20px 26px', fontFamily: mono, fontSize: 24, lineHeight: 1.55, color: '#cdd3df', whiteSpace: 'pre-wrap' }}>{children}</pre>
  </div>
);

// ── 開場 ──
const Cover: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>U12 · 第 2 堂 / 共 4 堂 · 4 小時</Eyebrow>
    <div className="ts-rise" style={{ marginTop: 30 }}><Title size={104}>把它長成<br />三角色專案</Title><div style={{ marginTop: 22 }}><Lead>上一堂是一個人看資料。今天我們把它變成<B>三個人接力</B>的小團隊。一樣,你只要貼跟點。</Lead></div></div>
  </div><Foot label="U12 · 課2" /></div>
);
const Recall: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>先回顧上一堂</Eyebrow><Title size={50}>你已經會的事</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 26, maxWidth: 1480 }}>
      {['貼一段話,讓 AI 幫你讀資料、挑出怪數字。', '跑一個現成專案,得到固定四欄的決策摘要。', '記住一句:AI 的結論要說得出依據,說不出就別信。'].map((t, i) => (
        <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '15px 24px' }}><span style={{ width: 34, height: 34, borderRadius: '50%', background: OK, color: '#fff', display: 'grid', placeContent: 'center', fontSize: 20, fontWeight: 800 }}>✓</span><span style={{ fontSize: 28 }}>{t}</span></div>
      ))}
    </div>
    <div style={{ marginTop: 22 }}><Lead>今天我們把那個「一個 AI」,變成<B>三個分工的角色</B>。</Lead></div>
  </div><Foot label="U12 · 課2 · 回顧" /></div>
);
const Outcome: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '540px 1fr', gap: 54, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}><div><Eyebrow>下課時你會有</Eyebrow><Title size={52}>一個三個人<br />接力跑的助理</Title></div><Lead>右邊就是它真的跑起來的樣子:檢查 → 分析 → 決策,一棒一棒接下去。</Lead></div>
    <div className="ts-rise"><ChatFrame /></div>
  </div><Foot label="U12 · 課2 · 成品" /></div>
);
const Why: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>先講為什麼要三個人</Eyebrow><Title size={54}>一個人看會累、會漏 ── 怎麼辦呢?</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Lead>你一個人從頭看到尾,看到第 50 筆就累了,自然會漏。這不是你的問題,人就是這樣。</Lead>
      <Think q={<>「那不是還是同一個 AI?分三個有差嗎?」</>} a={<>有。每個角色<B>只專心一件事</B>,就不會「挑錯挑到一半,急著下結論」。分工是為了<O>不把錯誤帶到下一步</O>。</>} />
      <Harvest>找人分工:一個挑錯、一個分析、一個給建議。</Harvest>
    </div>
  </div><Foot label="U12 · 課2 · 為什麼" /></div>
);
const Roadmap: Page = () => {
  const items = [['案例 1', '看懂三個角色', '0:15', '手動'], ['案例 2', '改角色講的話', '0:50', 'AI'], ['案例 3', '規定輸出格式', '1:50', 'AI'], ['案例 4', '老師示範錄一鍵', '3:10', '展示']];
  return (
    <div style={fill}><div style={pad}><Eyebrow>今天的路線 · 四個案例 + 收束</Eyebrow><Title>四個案例,一樣是貼 + 點</Title>
      <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, marginTop: 42 }}>
        {items.map(([a, b, t, k], i) => <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '22px 20px' }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontFamily: mono, fontSize: 20, color: C.orange, fontWeight: 700 }}>{a}</span><span style={{ fontFamily: mono, fontSize: 17, color: C.faint }}>{t}</span></div><div style={{ fontSize: 29, fontWeight: 800, marginTop: 10, lineHeight: 1.25 }}>{b}</div><div style={{ marginTop: 12 }}><CaseTag kind={k as any} /></div></div>)}
      </div></div><Foot label="U12 · 課2 · 路線" /></div>
  );
};
// ── 段1 看懂角色 ──
const Sec1: Page = () => <Section no="1" title="先看懂這三個人" time="0:15 - 0:50" sub="不急著動手。先搞清楚每個角色負責什麼,等下改起來才有方向。" />;
const C1Head: Page = () => (
  <div style={fill}><div style={pad}><CaseHead no="1" time="0:15 - 0:50" kind="手動" title="看懂:檢查 / 分析 / 決策,各做什麼" />
    <div className="ts-rise" style={{ marginTop: 34 }}><Lead>這個案例不用 AI,你先讀懂三個角色。等下你要改的,就是這三個人「講的話」。所以先看懂,再改。</Lead></div>
  </div><Foot label="U12 · 課2 · 案例1" /></div>
);
const C1Roles: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 1 · 三個角色</Eyebrow><Title size={50}>一人一件事,接力做完</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 26 }}>
      <Analogy>像一家餐廳:<B>備料的</B>先挑掉壞菜、<B>掌廚的</B>專心煮、<B>出菜的</B>擺盤送出。一個人全包,忙起來就把壞菜也煮下去了。</Analogy>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
        {[['1. 資料檢查員', '只挑問題,不分析。'], ['2. 分析洞察員', '看趨勢與風險,要有依據。'], ['3. 決策摘要員', '整理成店長能做的事。']].map(([a, b], i) => (
          <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '18px 22px' }}><div style={{ fontSize: 27, fontWeight: 800, color: C.orange }}>{a}</div><div style={{ fontSize: 23, color: C.muted, marginTop: 6, lineHeight: 1.4 }}>{b}</div></div>
        ))}
      </div>
    </div>
  </div><Foot label="U12 · 課2 · 案例1" /></div>
);
const C1Look: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '520px 1fr', gap: 50, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}><div><Eyebrow>案例 1 · 角色長怎樣</Eyebrow><Title size={46}>角色,其實只是一段文字</Title></div><Lead>打開 starter 的角色設定,你會看到右邊這種東西:<B>每個角色就是「他叫什麼、他要做什麼」幾句話</B>而已。</Lead><Harvest>看清楚這點,你就知道「改角色」改的是哪裡。</Harvest></div>
    <div className="ts-rise"><FileCard title="src/crew.py · 角色設定(片段)">{`role = "資料檢查員"
goal = "只挑出資料裡怪怪、要人確認的地方"
backstory = "你謹慎細心,只負責確認資料能不能信"`}</FileCard></div>
  </div><Foot label="U12 · 課2 · 案例1" /></div>
);
const C1Guess: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 1 · 先猜猜看</Eyebrow><Title size={48}>同一筆怪資料,三個人各會說什麼?</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 26, maxWidth: 1500 }}>
      {[['資料檢查員', '你猜他會說…?', '(提示:他只挑問題)'], ['分析洞察員', '你猜他會說…?', '(提示:他看趨勢風險)'], ['決策摘要員', '你猜他會說…?', '(提示:他給能做的事)']].map(([a, b, c], i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '220px 1fr 360px', gap: 18, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '14px 24px' }}><span style={{ fontFamily: mono, fontSize: 23, color: C.orange, fontWeight: 700 }}>{a}</span><span style={{ fontSize: 27 }}>{b}</span><span style={{ fontSize: 22, color: C.muted }}>{c}</span></div>
      ))}
    </div>
    <div style={{ marginTop: 22 }}><Harvest>能猜出每個人會說什麼 = 你真的懂分工了。等下對答案。</Harvest></div>
  </div><Foot label="U12 · 課2 · 案例1" /></div>
);
const C1Handoff: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 1 · 關鍵字:交接</Eyebrow><Title size={52}>前一個人的結果,<br />是下一個人的材料</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 26 }}>
      <Lead>檢查員挑完,分析員才在「乾淨的」資料上分析;分析完,決策員才給建議。這個「交接」很重要,等下你會看到它真的一棒一棒跑。</Lead>
      <Harvest>能用一句話跟旁邊的人複述每個角色 = 你懂了。</Harvest>
    </div>
  </div><Foot label="U12 · 課2 · 案例1" /></div>
);
// ── 段2 改角色文字 ──
const Sec2: Page = () => <Section no="2" title="改角色講的話" time="0:50 - 1:50" sub="重點觀念:你改的是「文字」,不是程式。改完馬上跑,看三段輸出。" />;
const C2Head: Page = () => (
  <div style={fill}><div style={pad}><CaseHead no="2" time="0:50 - 1:50" kind="AI" title="貼一段話,請 AI 改角色、再跑一次" />
    <div className="ts-rise" style={{ marginTop: 34 }}><Lead>角色的個性,就是剛剛你看到的<B>那幾句文字</B>。我們請 AI 幫你改、幫你跑,你不用自己翻檔案。</Lead></div>
  </div><Foot label="U12 · 課2 · 案例2" /></div>
);
const C2Fork: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 步驟 1 · 複製範本</Eyebrow><Title size={46}>fork 一份、開出環境</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 22, maxWidth: 1520 }}>
      <Atom n={1} act={<>點老師發的<B>三角色範本連結</B>,看到 GitHub 專案頁。</>} see="網頁上方有專案名稱。" />
      <Atom n={2} act={<>右上角按 <Key>Fork</Key> → 下一頁按 <Key>Create fork</Key>。</>} see="網址變成「你的帳號 / 專案名」。" />
      <Atom n={3} act={<>按綠色 <Key>&lt;&gt; Code</Key> → 選 <Key>Codespaces</Key> → <Key>Create codespace</Key>。</>} see="瀏覽器開出編輯器、跑進度條。" />
    </div>
    <div style={{ marginTop: 16 }}><Analogy>fork 就是<O>把老師的食譜影印一份變你自己的</O>,改壞了也不影響別人。</Analogy></div>
  </div><Foot label="U12 · 課2 · 案例2" /></div>
);
const C2Open: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 步驟 2 · 開對話框</Eyebrow><Title size={46}>把對話框叫出來</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 24, maxWidth: 1520 }}>
      <Atom n={1} act={<>看左邊那排圖示,找到<B>對話泡泡 / 星星</B>的圖示,點它一下。</>} see="側邊打開一個聊天面板。" />
      <Atom n={2} act={<>第一次它請你<B>登入帳號</B>,跟著按「Sign in / 登入」「Authorize / 同意」。</>} see="聊天面板可以打字了。" />
      <Atom n={3} act={<>點一下<B>最下面的輸入框</B>。</>} see="輸入框出現閃動的游標。" />
    </div>
  </div><Foot label="U12 · 課2 · 案例2" /></div>
);
const C2Paste: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 步驟 3 · Prompt 卡</Eyebrow><Title size={44}>複製這段、貼上、按 Enter</Title>
    <div style={{ marginTop: 16 }}><PromptCard size={26}>{`請把「決策摘要員」這個角色改得更像在跟店長講話:
語氣口語一點、每個建議都附上「為什麼」。
改完直接幫我跑一次,讓我看到三段輸出。`}</PromptCard></div>
    <div style={{ marginTop: 14 }}><Atom n={1} act={<>框右上角<B>複製鈕</B>(或選取後 <Key>Ctrl</Key>+<Key>C</Key>)→ 點對話框 <Key>Ctrl</Key>+<Key>V</Key> → <Key>Enter</Key>。</>} see="AI 開始動檔案、跑幾行字。" /></div>
  </div><Foot label="U12 · 課2 · 案例2" /></div>
);
const C2Run: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 步驟 4 · 等它跑</Eyebrow><Title size={48}>它在動的時候,別急</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 26 }}>
      <Lead>你會看到它<B>打開一個檔案、改幾行字、再自己跑一次</B>。整個過程它會邊做邊說。你只要等,看到它說「完成」或印出三段就好。</Lead>
      <Think q={<>「它在跑一堆字,我看不懂,是不是壞了?」</>} a={<>沒壞。那是它<B>邊做邊報告</B>。你不用看懂每一行,看最後有沒有出現三段結果就好。</>} />
    </div>
  </div><Foot label="U12 · 課2 · 案例2" /></div>
);
const C2See: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '540px 1fr', gap: 54, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}><div><Eyebrow>案例 2 · 你會看到</Eyebrow><Title size={50}>三段,一棒接一棒</Title></div><Lead>你會發現,改的只是<B>決策員講話的方式</B>而已,不是程式。</Lead></div>
    <div className="ts-rise"><ChatFrame /></div>
  </div><Foot label="U12 · 課2 · 案例2" /></div>
);
const C2Read: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 讀懂三段</Eyebrow><Title size={48}>三段,各看一件事</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 24, maxWidth: 1500 }}>
      {[['檢查員', '挑出 -5、300、售價低於成本 → 它只「標記」,不自己刪。'], ['分析員', '說資料被汙染、毛利會被高估 → 它不硬算髒資料。'], ['決策員(你剛改的)', '用口語跟你講「先查那兩筆,因為會把帳算歪」→ 有附理由了。']].map(([a, b], i) => (
        <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '15px 24px' }}><span style={{ fontFamily: mono, fontSize: 20, color: C.orange, fontWeight: 700 }}># {a}</span><div style={{ fontSize: 27, marginTop: 4, lineHeight: 1.35 }}>{b}</div></div>
      ))}
    </div>
    <div style={{ marginTop: 18 }}><Harvest>第三段變口語、有附理由,就是你剛剛那段話的功勞。</Harvest></div>
  </div><Foot label="U12 · 課2 · 案例2" /></div>
);
const C2Real: Page = () => (
  <RealShot img={traceShot} url="stanley-1013.github.io/chainsea-leacture/trace/" eyebrow="案例 2 · 真實成果"
    title="三角色真的一棒接一棒跑(可點開每一棒)" caption="這是真實執行歷程:左邊每條都是一次跑,點開就是檢查 → 分析 → 決策三個角色各自的輸入與輸出。" />
);
const C2Practice: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 換你練習</Eyebrow><Title size={48}>換改「檢查員」試試</Title>
    <div style={{ fontSize: 28, color: C.muted, margin: '18px 0 16px', maxWidth: 1480 }}>剛剛改了決策員。換你貼這段,改另一個角色:</div>
    <PromptCard size={26}>{`請把「資料檢查員」改得更嚴格一點:
連「數字看起來太完美、可能是假資料」也要標出來。
改完再跑一次。`}</PromptCard>
    <div style={{ marginTop: 14 }}><SuccessRow>檢查員開始挑出更多可疑的地方 = 你會自己改角色了。</SuccessRow></div>
  </div><Foot label="U12 · 課2 · 案例2" /></div>
);
const C2Pit: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 卡住了?</Eyebrow><Title size={48}>三個常見狀況</Title>
    <div className="ts-rise" style={{ marginTop: 26, maxWidth: 1500 }}><Pitfall items={[['它改完沒跑:', '補一句「請直接幫我執行一次」。'], ['只看到一段、沒有三段:', '確認你 fork 的是三角色版的 starter;或舉手。'], ['看到紅字:', '把那段紅字整段複製,貼回去問它怎麼修。']]} /></div>
  </div><Foot label="U12 · 課2 · 案例2" /></div>
);
const Break1: Page = () => <BreakSlide sub="回來規定它的輸出格式,讓它每次都長一樣。" />;
// ── 段3 格式藍圖 ──
const Sec3: Page = () => <Section no="3" title="規定它一定要交哪幾欄" time="2:00 - 3:00" sub="這叫「格式藍圖」。其實就是先講好「你一定要給我這幾欄」而已。" />;
const C3Head: Page = () => (
  <div style={fill}><div style={pad}><CaseHead no="3" time="2:00 - 3:00" kind="AI" title="用「格式藍圖」鎖死輸出的四欄" />
    <div className="ts-rise" style={{ marginTop: 34 }}><Lead>每次輸出長得不一樣,你就很難用,對不對?<B>怎麼辦呢?</B> 先跟它講好,回我的時候一定要有這四欄,缺一不可。</Lead></div>
  </div><Foot label="U12 · 課2 · 案例3" /></div>
);
const C3Before: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
    <div className="ts-rise"><div style={{ fontFamily: mono, fontSize: 20, color: RED, fontWeight: 700, marginBottom: 10 }}>沒規定格式(每次不一樣)</div><FileCard title="第一次問">{`生意看起來還行,但有幾筆怪怪的,
建議你看一下…`}</FileCard><div style={{ height: 12 }} /><FileCard title="第二次問">{`風險:中。原味鍋貼數量異常。
詳細請見上方。`}</FileCard></div>
    <div className="ts-rise"><div style={{ fontFamily: mono, fontSize: 20, color: OK, fontWeight: 700, marginBottom: 10 }}>規定四欄(每次一樣)</div><ResultFrame /></div>
  </div><Foot label="U12 · 課2 · 案例3" /></div>
);
const C3Concept: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 為什麼要一樣</Eyebrow><Title size={50}>格式固定,才看得快</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 26 }}>
      <Analogy>像<B>發票</B>:格式固定,你掃一眼就知道去哪看金額、去哪看品項。如果每張發票長得都不一樣,你每次都要重新找,還會看錯。</Analogy>
      <Harvest>左邊那種每次不一樣,你根本沒法快速抓重點;右邊四欄,一眼就懂。</Harvest>
    </div>
  </div><Foot label="U12 · 課2 · 案例3" /></div>
);
const C3Prompt: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · Prompt 卡</Eyebrow><Title size={46}>貼這段,鎖死四欄</Title>
    <div style={{ marginTop: 16 }}><PromptCard size={26}>{`請規定決策摘要一定要有這四欄,缺一不可:
insight(一句洞察)、anomalies(可疑的地方)、
risk_level(風險高中低)、action_items(建議行動)。
之後每次都用這個格式回我。`}</PromptCard></div>
    <div style={{ marginTop: 14 }}><Atom n={1} act={<><B>複製 → 貼到對話框 → <Key>Enter</Key></B>。</>} see="它確認規則,並用四欄重跑一次。" /></div>
  </div><Foot label="U12 · 課2 · 案例3" /></div>
);
const C3See: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '540px 1fr', gap: 54, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}><div><Eyebrow>案例 3 · 你會看到</Eyebrow><Title size={50}>每次都長一樣的四欄</Title></div><Lead>不管你問幾次,它都用這四欄回你:一句洞察、可疑處、風險、建議。</Lead></div>
    <div className="ts-rise"><ResultFrame /></div>
  </div><Foot label="U12 · 課2 · 案例3" /></div>
);
const C3Read: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 四欄各是什麼</Eyebrow><Title size={48}>看懂這四欄</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14, marginTop: 24, maxWidth: 1520 }}>
      {[['insight', '一句話總結。先看這句抓重點。'], ['anomalies', '怪、要你確認的地方(像 -5、300)。'], ['risk_level', '風險高 / 中 / 低,一眼看嚴不嚴重。'], ['action_items', '具體能做的事,照著做就好。']].map(([k, v], i) => (
        <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '18px 24px' }}><div style={{ fontFamily: mono, fontSize: 25, color: C.orange, fontWeight: 700 }}>{k}</div><div style={{ fontSize: 26, marginTop: 6, lineHeight: 1.4 }}>{v}</div></div>
      ))}
    </div>
  </div><Foot label="U12 · 課2 · 案例3" /></div>
);
const C3Why: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 為什麼這很重要</Eyebrow><Title size={52}>格式固定,才信得過、才能自動化</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 26 }}>
      <Think q={<>「規定這麼死,不會很麻煩嗎?」</>} a={<>剛好相反。格式固定,之後才能<B>自動接到別的地方</B>(像自動傳 LINE);格式亂跳,什麼都接不了。</>} />
      <Harvest>規定格式不是龜毛,是讓 AI 的輸出可以被信任、被自動化。</Harvest>
    </div>
  </div><Foot label="U12 · 課2 · 案例3" /></div>
);
const C3Practice: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 換你練習</Eyebrow><Title size={48}>換個問題,看格式有沒有守住</Title>
    <div style={{ fontSize: 28, color: C.muted, margin: '18px 0 16px', maxWidth: 1480 }}>貼這句,問一個完全不同的問題,確認它<B>還是用那四欄</B>回你:</div>
    <PromptCard size={26}>{`改問:哪一個品項最需要注意?一樣用那四欄回我。`}</PromptCard>
    <div style={{ marginTop: 14 }}><SuccessRow>問題變了、但格式還是那四欄 = 格式藍圖真的守住了。</SuccessRow></div>
  </div><Foot label="U12 · 課2 · 案例3" /></div>
);
const C3Pit: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 卡住了?</Eyebrow><Title size={48}>兩個常見狀況</Title>
    <div className="ts-rise" style={{ marginTop: 26, maxWidth: 1500 }}><Pitfall items={[['它有時候少一欄:', '再貼一次「四欄缺一不可,沒有就寫無」。'], ['欄位名稱跑掉:', '把四個欄位名再貼一次,請它照這個英文用。']]} /></div>
  </div><Foot label="U12 · 課2 · 案例3" /></div>
);
// ── 段4 錄一鍵 ──
const Sec4: Page = () => <Section no="4" title="老師示範:把流程錄成一鍵" time="3:10 - 3:30" sub="你不用會,看過就好。重點是知道:連叫 AI 做事,以後都能錄成一鍵。" />;
const C4Demo: Page = () => (
  <div style={fill}><div style={pad}><CaseHead no="4" time="3:10 - 3:30" kind="展示" title="Codex Record & Replay:做一次,變一鍵" />
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Lead>有個新工具:老師做一次流程,它在旁邊錄起來,變成一個<B>一鍵就能重跑</B>的 skill。下次帶不同資料,它自己重跑一遍。</Lead>
      <Harvest>連「叫 AI 做事」這件事,以後都能錄成一鍵。(目前進階、給老師端用)</Harvest>
    </div>
  </div><Foot label="U12 · 課2 · 案例4" /></div>
);
const C4Why: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 4 · 為什麼讓你看這個</Eyebrow><Title size={50}>讓你知道「天花板在哪」</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 26 }}>
      <Lead>你今天是一步步貼。但你要知道:<B>連這些步驟,以後都能自動化</B>。今天打好基礎,將來就接得上這些更強的工具。</Lead>
      <Think q={<>「那我幹嘛還要一步步學?」</>} a={<>因為你<B>要先懂每步在幹嘛</B>,錄出來的一鍵才靠得住。看不懂就一鍵,出錯你也不知道哪裡壞。</>} />
    </div>
  </div><Foot label="U12 · 課2 · 案例4" /></div>
);
// ── 段5 收束 ──
const Punchline: Page = () => (
  <div style={{ ...fill, background: C.ink, color: '#fff' }}><div style={pad}><Eyebrow>今天記住這句</Eyebrow><div style={{ fontSize: 86, fontWeight: 900, lineHeight: 1.2, marginTop: 26, maxWidth: 1520, letterSpacing: '-0.02em' }}>三個人接力,<br />比一個人從頭做到尾,<br /><span style={{ color: C.orange }}>更不容易出錯。</span></div><div style={{ fontSize: 31, color: 'rgba(255,255,255,0.7)', marginTop: 26, maxWidth: 1380, lineHeight: 1.55 }}>分角色不是為了複雜,是為了<B style={{ color: '#fff' }}>穩</B>:每個人只顧一件事,錯誤就不會一路帶下去。</div></div><div style={{ position: 'absolute', left: 110, bottom: 44, fontFamily: mono, fontSize: 19, color: 'rgba(255,255,255,0.5)' }}>U12 · 課2 · 記住這句</div></div>
);
const Recap: Page = () => {
  const pts = [['角色 / 任務 / 交接', '分工把事情接起來,不把錯誤帶下去'], ['改的是「話」不是程式', '貼一段就改好'], ['格式藍圖', '先講好要哪幾欄,輸出才穩']];
  return (<div style={fill}><div style={pad}><Eyebrow>今天我們學了三件事</Eyebrow><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 36, maxWidth: 1500 }}>{pts.map(([a, b], i) => <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}><span style={{ fontFamily: mono, fontSize: 38, color: C.orange, fontWeight: 800 }}>{String(i + 1).padStart(2, '0')}</span><div><div style={{ fontSize: 38, fontWeight: 800 }}>{a}</div><div style={{ fontSize: 26, color: C.muted, marginTop: 4 }}>{b}</div></div></div>)}</div></div><Foot label="U12 · 課2 · 收束" /></div>);
};
const Homework: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>回家作業 · 輕量,只要一件</Eyebrow><Title>保留成功版,微調一個角色比較看看</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 36, maxWidth: 1480 }}>
      <div style={{ background: C.card, border: `2px solid ${C.orange}`, borderRadius: 16, padding: '24px 34px' }}><span style={{ fontFamily: mono, fontSize: 22, color: C.orange, fontWeight: 700 }}>必做</span><div style={{ fontSize: 34, marginTop: 8, lineHeight: 1.4 }}><B>保留</B>今天跑通的成功版,不要改壞它(下一堂要接著用)。</div></div>
      <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '20px 34px' }}><span style={{ fontFamily: mono, fontSize: 22, color: C.muted, fontWeight: 700 }}>選做</span><div style={{ fontSize: 28, marginTop: 6, color: C.muted, lineHeight: 1.4 }}>微調一個角色的 prompt,比較前後差在哪。</div></div>
    </div></div><Foot label="U12 · 課2 · 回家作業" /></div>
);
const Next: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>下一堂預告</Eyebrow><Title size={56}>把它接上真實一點的資料,<br />做一個「按一下就跑」的入口</Title><div style={{ fontSize: 32, color: C.muted, marginTop: 28, lineHeight: 1.5 }}>有卡住的現在舉手,留十分鐘自由練習。今天辛苦了。</div></div><Foot label="U12 · 課2 · 下一堂" /></div>
);

export const meta: SlideMeta = { title: 'U12 課2：長成三角色專案', createdAt: '2026-06-22T10:10:00.000Z' };
export const notes: (string | undefined)[] = [
  '各位同學大家好啊,我們上第二堂。上一堂做了一個人看資料的小幫手;今天把它長成三個人接力的小團隊。一樣,你只要貼跟點,不會變難。',
  '先回顧上一堂你已經會的事:貼一段話讓 AI 讀資料挑怪數字、跑一個現成專案得到固定四欄、還有那句 AI 的結論要說得出依據。今天我們把那個一個 AI,變成三個分工的角色。',
  '先看下課時你會有什麼。右邊就是三個角色真的跑起來的樣子:檢查、分析、決策一棒一棒。',
  '先講為什麼要三個人。你一個人從頭看到尾,看到第五十筆就累、就會漏。你可能會想說那不是同一個 AI、分三個有差嗎?有,每個角色只專心一件事,就不會挑到一半急著下結論。分工是為了不把錯誤帶到下一步。',
  '看路線。四個案例:看懂角色、改角色講的話、規定輸出格式、最後示範錄一鍵。中間休息一次。',
  '第一段,先看懂這三個人。先不動手,搞清楚每個角色負責什麼,等下改起來才有方向。',
  '案例一不用 AI,先讀懂三個角色,因為等下你要改的就是他們講的話。',
  '打個比方,像餐廳:備料的挑壞菜、掌廚的煮、出菜的擺盤。一個人全包,忙起來就把壞菜也煮下去。對應到這:檢查員只挑問題、分析員看趨勢要有依據、決策員整理成店長能做的事。',
  '我給大家看角色長怎樣。打開 starter 的角色設定,你會看到右邊這種:每個角色就是他叫什麼、要做什麼幾句話。看清楚這點,你就知道改角色改的是哪裡。',
  '先猜猜看:同一筆怪資料,三個人各會說什麼?檢查員只挑問題、分析員看趨勢風險、決策員給能做的事。能猜出來,代表你真的懂分工了,等下對答案。',
  '關鍵字是交接:前一個人的結果是下一個人的材料。檢查員挑乾淨,分析員才不會被髒資料帶歪。能用一句話複述每個角色,你就懂了。',
  '第二段,改角色講的話。重點觀念:你改的是文字,不是程式。改完馬上跑,看三段。',
  '案例二,角色的個性就是剛剛你看到的那幾句文字。我們請 AI 幫你改、幫你跑,不用自己翻檔案。',
  '步驟一,fork 一份開環境。點範本連結看到專案頁,右上角 Fork、Create fork,網址變成你的;再點綠色 Code、選 Codespaces、Create codespace。fork 就是把老師的食譜影印一份變你的,改壞不影響別人。',
  '步驟二,把對話框叫出來。左邊找對話泡泡圖示點開;第一次登入你自己的帳號,按登入、同意;點一下最下面輸入框,游標在閃就好。',
  '步驟三,這就是 Prompt 卡。把決策員改得更口語、每個建議附理由,改完直接跑。框右上角複製鈕或 Ctrl C,點對話框 Ctrl V,按 Enter。',
  '步驟四,它在動的時候別急。你會看到它打開一個檔案、改幾行字、再自己跑一次,邊做邊說。你可能會想說它在跑一堆字我看不懂是不是壞了?沒壞,那是它邊做邊報告,你看最後有沒有出現三段就好。',
  '跑出來三段,一棒接一棒。你會發現改的只是決策員講話的方式而已,不是程式。',
  '我們一段一段讀。檢查員挑出 -5、300、售價低於成本,它只標記不自己刪;分析員說資料被汙染、不硬算;決策員用口語跟你講先查那兩筆因為會把帳算歪,有附理由了。第三段變口語、有理由,就是你剛那段話的功勞。',
  '給大家看個真的,不是示意圖。左邊每條都是一次真的跑,點開就是三個角色各自的輸入輸出。',
  '換你練習,換改檢查員試試。貼這段,把檢查員改得更嚴格,連數字太完美可能是假資料也標出來,改完再跑。檢查員開始挑出更多可疑的,你就會自己改角色了。',
  '卡住的話:改完沒跑補一句請直接執行;只有一段確認 fork 的是三角色版;紅字整段複製貼回去問它。好,休息十分鐘。',
  '休息十分鐘,回來規定它的輸出格式,讓它每次都長一樣。',
  '第三段,規定它一定要交哪幾欄,這叫格式藍圖,其實就是先講好要哪幾欄而已。',
  '案例三,每次輸出長不一樣你就很難用,怎麼辦呢?先跟它講好四欄缺一不可。',
  '看左右對照:左邊沒規定格式,第一次第二次回的長得都不一樣,你根本沒法快速抓重點;右邊規定四欄,每次一樣,一眼就懂。',
  '為什麼要一樣?打個比方像發票,格式固定你掃一眼就知道去哪看金額;每張不一樣你每次都要重找還會看錯。',
  '貼這段,鎖死 insight、anomalies、risk_level、action_items 四欄。複製、貼、Enter,它確認規則並用四欄重跑。',
  '跑出來,不管問幾次都用這四欄回你。',
  '看懂這四欄:insight 先看抓重點、anomalies 是要你確認的地方、risk_level 一眼看嚴不嚴重、action_items 照著做就好。',
  '為什麼重要?你可能想說規定這麼死很麻煩?剛好相反,格式固定之後才能自動接到別的地方像自動傳 LINE;格式亂跳什麼都接不了。',
  '換你練習,貼這句問一個完全不同的問題,確認它還是用那四欄回你。問題變了格式還在,代表格式藍圖真的守住了。',
  '卡住:有時少一欄,再貼一次缺一不可、沒有就寫無;欄位名跑掉,把四個英文名再貼一次請它照用。',
  '第四段,老師示範把流程錄成一鍵。你不用會,看過就好。',
  '案例四,有個新工具 Codex Record and Replay,老師做一次流程它錄起來,變成一鍵能重跑的 skill,下次帶不同資料自己重跑。連叫 AI 做事都能錄成一鍵,目前進階給老師端用。',
  '為什麼讓你看這個?讓你知道天花板在哪:連這些步驟以後都能自動化。你可能會想說那我幹嘛還要一步步學?因為你要先懂每步在幹嘛,錄出來的一鍵才靠得住;看不懂就一鍵,出錯你也不知道哪裡壞。',
  '今天最重要的一句:三個人接力,比一個人從頭做到尾更不容易出錯。分角色不是為了複雜,是為了穩。',
  '收尾三件事:角色和交接、改的是話不是程式、格式藍圖讓輸出穩。',
  '回家作業一件:保留今天的成功版不要改壞,下一堂要接著用。選做才是微調一個角色比較前後。',
  '下一堂,把它接上真實一點的資料,做一個按一下就跑的入口。有卡住的舉手,留十分鐘自由練習。辛苦了。',
];
export default [
  Cover, Recall, Outcome, Why, Roadmap,
  Sec1, C1Head, C1Roles, C1Look, C1Guess, C1Handoff,
  Sec2, C2Head, C2Fork, C2Open, C2Paste, C2Run, C2See, C2Read, C2Real, C2Practice, C2Pit, Break1,
  Sec3, C3Head, C3Before, C3Concept, C3Prompt, C3See, C3Read, C3Why, C3Practice, C3Pit,
  Sec4, C4Demo, C4Why,
  Punchline, Recap, Homework, Next,
] satisfies Page[];
