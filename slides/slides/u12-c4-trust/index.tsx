import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';
import caseShot from './assets/case.png';

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
if (typeof document !== 'undefined' && !document.getElementById('ts-u12c4')) { const el = document.createElement('style'); el.id = 'ts-u12c4'; el.textContent = css; document.head.appendChild(el); }
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
const BreakSlide = () => (
  <div style={{ ...fill, background: '#0e7a52' }}><div style={{ ...pad, color: '#fff' }}><span style={{ fontFamily: mono, fontSize: 26, letterSpacing: '0.2em', opacity: 0.85 }}>BREAK</span><div style={{ fontSize: 118, fontWeight: 900, marginTop: 16 }}>休息 10 分鐘</div><div style={{ fontSize: 35, opacity: 0.9, marginTop: 22 }}>回來練習怎麼把它講給不懂技術的主管聽。</div></div></div>
);
const ScenarioFrame = () => {
  const rows: [string, string, boolean][] = [['正常資料', '沒問題 → 直接交給 AI 分析', true], ['缺資料(某天沒進來)', '擋下 → 先要求人工確認,不硬算', false], ['錯誤輸入(負值/低於成本)', '擋下 → 標記問題,要人確認', false]];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 1500 }}>{rows.map(([s, r, ok], i) => (
      <div key={i} style={{ display: 'grid', gridTemplateColumns: '420px 1fr', gap: 24, alignItems: 'center', background: C.card, border: `1px solid ${ok ? '#bfe6d4' : '#f0c9c2'}`, borderRadius: 14, padding: '18px 26px' }}>
        <span style={{ fontFamily: mono, fontSize: 25, color: C.ink, fontWeight: 700 }}>{s}</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 27, color: ok ? '#0c5b3c' : RED }}><span style={{ flexShrink: 0, width: 34, height: 34, borderRadius: '50%', background: ok ? OK : RED, color: '#fff', display: 'grid', placeContent: 'center', fontSize: 21, fontWeight: 800 }}>{ok ? '✓' : '!'}</span>{r}</span>
      </div>
    ))}</div>
  );
};
const FileCard = ({ title, children }: { title: string; children: any }) => (
  <div style={{ background: '#0f1117', borderRadius: 16, overflow: 'hidden', border: '1px solid #232733', maxWidth: 1480 }}>
    <div style={{ padding: '11px 20px', background: '#161a22', borderBottom: '1px solid #232733', fontFamily: mono, fontSize: 18, color: '#8b93a3' }}>{title}</div>
    <pre style={{ margin: 0, padding: '18px 26px', fontFamily: mono, fontSize: 23, lineHeight: 1.6, color: '#cdd3df', whiteSpace: 'pre-wrap' }}>{children}</pre>
  </div>
);
const RealShot = ({ img, url, eyebrow, title, caption }: { img: string; url: string; eyebrow: string; title: string; caption: string }) => (
  <div style={fill}><div style={{ ...pad }}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}><Eyebrow>{eyebrow}</Eyebrow><span style={{ fontSize: 22, color: OK, fontFamily: mono, fontWeight: 700 }}>● 這是真的,不是示意圖</span></div>
    <Title size={44}>{title}</Title>
    <div style={{ marginTop: 18, background: '#fff', border: `1px solid ${C.line}`, borderRadius: 14, overflow: 'hidden', boxShadow: '0 18px 50px -28px rgba(30,30,40,0.4)', maxWidth: 1540 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 18px', background: '#f0f2f5', borderBottom: `1px solid ${C.line}` }}><div style={{ display: 'flex', gap: 7 }}>{['#ff5f57', '#febc2e', '#28c840'].map((c, i) => <span key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />)}</div><div style={{ flex: 1, background: '#fff', border: `1px solid ${C.line}`, borderRadius: 7, padding: '5px 14px', fontFamily: mono, fontSize: 16, color: C.faint }}>{url}</div></div>
      <img src={img} alt={title} style={{ display: 'block', width: '100%', maxHeight: 520, objectFit: 'cover', objectPosition: 'top' }} />
    </div>
    <div style={{ fontSize: 25, color: C.muted, marginTop: 14 }}>{caption}</div>
  </div><Foot label="U12 · 課4 · 真實成果" /></div>
);

// ── 開場 ──
const Cover: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>U12 · 第 4 堂 / 共 4 堂 · 4 小時 · M12 完課</Eyebrow>
    <div className="ts-rise" style={{ marginTop: 30 }}><Title size={100}>什麼時候<br />不該信它</Title><div style={{ marginTop: 22 }}><Lead>AI 很會講話,但它也會<B>自信地講錯</B>。今天我們教它:什麼時候要先停下來問人。</Lead></div></div>
  </div><Foot label="U12 · 課4" /></div>
);
const Recall: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>先回顧 M12 走到哪了</Eyebrow><Title size={50}>你已經做出了…</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 28, maxWidth: 1480 }}>
      {[['課1', '一個會讀資料、給建議的助理'], ['課2', '三個角色接力、固定四欄輸出'], ['課3', '一個按一下就跑的入口']].map(([a, b], i) => (
        <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '16px 24px' }}><span style={{ fontFamily: mono, fontSize: 22, color: C.orange, fontWeight: 800, width: 70 }}>{a}</span><span style={{ fontSize: 30 }}>{b}</span></div>
      ))}
    </div>
    <div style={{ marginTop: 22 }}><Lead>今天最後一塊拼圖:讓它<B>值得信任</B>。會跑不夠,要知道什麼時候不能信。</Lead></div>
  </div><Foot label="U12 · 課4 · 回顧" /></div>
);
const Outcome: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>下課時你的助理會</Eyebrow><Title size={48}>遇到髒資料,自己先喊停</Title>
    <div className="ts-rise" style={{ marginTop: 30 }}><ScenarioFrame /></div>
  </div><Foot label="U12 · 課4 · 成品" /></div>
);
const Why: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>先講為什麼</Eyebrow><Title size={54}>只測「會成功」的,是在騙自己</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 30 }}>
      <Lead>真正會出事的,是<B>資料缺了一塊、或有人打錯數字</B>的時候。那怎麼辦呢?我們先教它遇到這些,要停下來問人。</Lead>
      <Think q={<>「AI 不是很聰明嗎?它自己會發現吧?」</>} a={<>不一定。AI <B>很想給你答案</B>,資料缺一塊它也會「硬湊」一個看起來合理的結論。我們要它在這種時候誠實說「我先不算」。</>} />
    </div>
  </div><Foot label="U12 · 課4 · 為什麼" /></div>
);
const Roadmap: Page = () => {
  const items = [['案例 1', '訂兩條規則', '0:15', 'AI'], ['案例 2', '測壞掉的情況', '1:00', '手動'], ['案例 3', '講給主管聽', '2:40', '展示']];
  return (
    <div style={fill}><div style={pad}><Eyebrow>今天的路線 · 三個案例 + 完課</Eyebrow><Title>把它變成「可信任」</Title>
      <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22, marginTop: 44 }}>
        {items.map(([a, b, t, k], i) => <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '26px 24px' }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontFamily: mono, fontSize: 21, color: C.orange, fontWeight: 700 }}>{a}</span><span style={{ fontFamily: mono, fontSize: 18, color: C.faint }}>{t}</span></div><div style={{ fontSize: 32, fontWeight: 800, marginTop: 12 }}>{b}</div><div style={{ marginTop: 14 }}><CaseTag kind={k as any} /></div></div>)}
      </div></div><Foot label="U12 · 課4 · 路線" /></div>
  );
};
// ── 段1 訂規則 ──
const Sec1: Page = () => <Section no="1" title="訂兩條「要先問人」的規則" time="0:15 - 1:00" sub="AI 會自信地講錯。我們先給它兩條規則,碰到怪狀況就停下來提醒人。" />;
const C1Head: Page = () => (
  <div style={fill}><div style={pad}><CaseHead no="1" time="0:15 - 1:00" kind="AI" title="加兩條規則:碰到這些,先停下來問人" />
    <div className="ts-rise" style={{ marginTop: 34 }}><Lead>你有沒有發現,AI 講錯的時候也一樣很有自信?所以我們先給它兩條規則,讓它知道什麼時候該停。</Lead></div>
  </div><Foot label="U12 · 課4 · 案例1" /></div>
);
const C1Concept: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 1 · 概念</Eyebrow><Title size={52}>它不是壞,是太想幫你</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Analogy>像一個<B>很熱心、但不會說「不知道」的店員</B>:你問他庫存,他沒查就憑印象給你一個數字,還講得很肯定。我們要教 AI:沒把握就說「我先不算,要確認」。</Analogy>
      <Harvest>規則的用意:讓它在資料髒的時候,誠實喊停,而不是硬湊答案。</Harvest>
    </div>
  </div><Foot label="U12 · 課4 · 案例1" /></div>
);
const C1Rules: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 1 · 兩條規則,逐條看</Eyebrow><Title size={48}>只要這兩條</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 18, marginTop: 30 }}>
      {[['規則一 · 缺漏先停', '資料有缺,就說「資料不齊,需要人確認」,不硬算。'], ['規則二 · 沒依據不採用', 'AI 的建議若說不出依據,標成「不可直接採用」。']].map(([a, b], i) => (
        <div key={i} style={{ background: C.card, border: `2px solid ${C.orange}`, borderRadius: 16, padding: '26px 28px' }}><div style={{ fontSize: 32, fontWeight: 800, color: C.orange }}>{a}</div><div style={{ fontSize: 27, color: C.ink, marginTop: 12, lineHeight: 1.45 }}>{b}</div></div>
      ))}
    </div>
    <div style={{ marginTop: 22 }}><Harvest>一條管「資料髒」,一條管「亂講」。兩個最常出事的點。</Harvest></div>
  </div><Foot label="U12 · 課4 · 案例1" /></div>
);
const C1WhyRule: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 1 · 為什麼是這兩條</Eyebrow><Title size={50}>九成的錯,都是這兩種</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Think q={<>「規則不是越多越安全嗎?」</>} a={<>不是。規則太多,它每次都卡、什麼都不敢做。<B>抓最常出事的兩個</B>就好:資料髒、跟沒憑據亂講。其他真的出問題再加。</>} />
      <Lead>先用最少的規則,守住最大的風險。這是訂規則的訣竅。</Lead>
    </div>
  </div><Foot label="U12 · 課4 · 案例1" /></div>
);
const C1Prompt: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 1 · Prompt 卡</Eyebrow><Title size={46}>貼這段,加兩條規則</Title>
    <div style={{ marginTop: 18 }}><PromptCard size={26}>{`幫我加兩條規則:
1. 如果資料有缺漏,先說「資料不齊,需要人確認」,不要硬算。
2. 如果 AI 的建議沒有附依據,標成「不可直接採用」。
碰到這兩種,都要先停下來提醒人。`}</PromptCard></div>
    <div style={{ marginTop: 16 }}><Atom n={1} act={<><B>複製 → 貼到對話框 → <Key>Enter</Key></B>。</>} see="它回覆「已加入規則」之類的確認。" /></div>
  </div><Foot label="U12 · 課4 · 案例1" /></div>
);
const C1Verify: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 1 · 馬上驗一次</Eyebrow><Title size={48}>故意餵它缺漏,看它擋不擋</Title>
    <div style={{ marginTop: 18 }}><PromptCard size={26}>{`這是今天的資料,但其中有一天整個沒進來。
請你照剛剛的規則處理。`}</PromptCard></div>
    <div style={{ marginTop: 16 }}><SuccessRow>它說「資料不齊、需要人確認」而不是硬給數字 = 規則生效。</SuccessRow></div>
  </div><Foot label="U12 · 課4 · 案例1" /></div>
);
const C1ReadAfter: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 700px', gap: 50, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}><div><Eyebrow>案例 1 · 加規則後它變怎樣</Eyebrow><Title size={44}>它會「先說不確定」</Title></div><Lead>加規則前它硬給一個數;加規則後,它<B>先標出缺漏、停下來等你</B>。差別就在這。</Lead><Harvest>好的助理,敢說「我不確定」。</Harvest></div>
    <div className="ts-rise"><FileCard title="加規則後的回覆">{`risk_level: "需人工確認"
note: "6/3 整日資料缺漏,
       未納入計算,請先補齊。"`}</FileCard></div>
  </div><Foot label="U12 · 課4 · 案例1" /></div>
);
const C1Pit: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 1 · 卡住了?</Eyebrow><Title size={48}>兩個常見狀況</Title>
    <div className="ts-rise" style={{ marginTop: 26, maxWidth: 1500 }}><Pitfall items={[['它還是硬算了:', '把規則再貼一次,並加「這是硬規定,務必遵守」。'], ['它每次都說資料不齊:', '檢查你貼的資料是不是真的缺漏;正常資料應該要放行。']]} /></div>
  </div><Foot label="U12 · 課4 · 案例1" /></div>
);
// ── 段2 測試 ──
const Sec2: Page = () => <Section no="2" title="故意餵它三種情況" time="1:00 - 2:30" sub="先用嘴巴猜它會怎麼反應,再跑測試對答案。這叫「測壞掉的情況」。" />;
const C2Head: Page = () => (
  <div style={fill}><div style={pad}><CaseHead no="2" time="1:00 - 2:30" kind="手動" title="測三種:正常 / 缺資料 / 錯誤輸入" />
    <div className="ts-rise" style={{ marginTop: 34 }}><Lead>我們準備好三組資料,故意餵給它,看它擋不擋。重點:<B>先別急著跑,先用嘴巴猜</B>它會怎麼反應：猜過,你才會記得。</Lead></div>
  </div><Foot label="U12 · 課4 · 案例2" /></div>
);
const C2Data: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '460px 1fr', gap: 48, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}><div><Eyebrow>案例 2 · 三組資料長怎樣</Eyebrow><Title size={44}>三組,故意做了手腳</Title></div><Lead>右邊就是三組測試資料:一組正常、一組缺一天、一組有人打了負數。</Lead></div>
    <div className="ts-rise"><FileCard title="test 三組">{`① 正常   6/1,原味,120,55
② 缺漏   6/2 整天 → (沒有這行)
③ 錯誤   6/3,原味,-5,55  ← 負數`}</FileCard></div>
  </div><Foot label="U12 · 課4 · 案例2" /></div>
);
const C2Guess: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 先猜再驗</Eyebrow><Title size={48}>三種情況,你猜它放行還是擋?</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 28, maxWidth: 1500 }}>
      {[['正常資料', '你猜?'], ['缺一天的資料', '你猜?'], ['有人打了負數', '你猜?']].map(([a, b], i) => (
        <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '16px 24px' }}><span style={{ fontFamily: mono, fontSize: 24, fontWeight: 700, width: 280 }}>{a}</span><span style={{ fontSize: 28, color: C.muted }}>{b}</span></div>
      ))}
    </div>
    <div style={{ marginTop: 20 }}><Lead>猜完,跑 <Key>test_scenarios.py</Key> 對答案(老師有附;個人版請 AI 幫你建一個,手冊有 prompt)。</Lead></div>
  </div><Foot label="U12 · 課4 · 案例2" /></div>
);
const C2WhyEach: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 為什麼三種都要測</Eyebrow><Title size={48}>會出事的,都不是「正常」那種</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 26, maxWidth: 1500 }}>
      {[['正常', '基本款,確認它平常會正確放行。'], ['缺漏', '最常見:某天 POS 沒上傳、漏記一筆。'], ['錯誤', '人打錯:多一個零、漏負號、貼錯欄。']].map(([a, b], i) => (
        <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '15px 24px' }}><span style={{ fontFamily: mono, fontSize: 23, color: C.orange, fontWeight: 700, width: 110 }}>{a}</span><span style={{ fontSize: 27 }}>{b}</span></div>
      ))}
    </div>
    <div style={{ marginTop: 18 }}><Harvest>測「壞掉的情況」,才知道它把不把得了關。</Harvest></div>
  </div><Foot label="U12 · 課4 · 案例2" /></div>
);
const C2Run: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 動作</Eyebrow><Title size={48}>在終端機跑測試</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 26, maxWidth: 1520 }}>
      <Atom n={1} act={<>點下面的<B>終端機</B>(黑色區域),打 <Key>python test_scenarios.py</Key> 按 <Key>Enter</Key>。</>} see="它依序跑三種情況,每種印出結果。" />
      <Atom n={2} act={<>對照你剛剛的<B>猜測</B>:猜對幾個?</>} see="正常→放行;缺資料、錯誤→擋下要確認。" />
    </div>
  </div><Foot label="U12 · 課4 · 案例2" /></div>
);
const C2Answer: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 對答案</Eyebrow><Title size={48}>三種情況,它這樣反應</Title>
    <div className="ts-rise" style={{ marginTop: 28 }}><ScenarioFrame /></div>
  </div><Foot label="U12 · 課4 · 案例2" /></div>
);
const C2ReadEach: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 逐種讀懂</Eyebrow><Title size={48}>每一種,它說了什麼</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 26, maxWidth: 1500 }}>
      {[['正常', '放行,正常給四欄分析。', OK], ['缺漏', '「資料不齊,需要人確認」,不給數字。', RED], ['錯誤', '「偵測到負值,請確認」,標記不採用。', RED]].map(([a, b, col], i) => (
        <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '15px 24px' }}><span style={{ flexShrink: 0, width: 32, height: 32, borderRadius: '50%', background: col as string, color: '#fff', display: 'grid', placeContent: 'center', fontSize: 19, fontWeight: 800 }}>{col === OK ? '✓' : '!'}</span><span style={{ fontFamily: mono, fontSize: 22, fontWeight: 700, width: 90 }}>{a}</span><span style={{ fontSize: 27 }}>{b}</span></div>
      ))}
    </div>
  </div><Foot label="U12 · 課4 · 案例2" /></div>
);
const C2Real: Page = () => (
  <RealShot img={caseShot} url="stanley-1013.github.io/chainsea-leacture/case.html" eyebrow="案例 2 · 真實成果"
    title="真的跑出來:它抓到的那些「怪資料」" caption="這是真實資料跑出來的成果頁,下面就列出它抓到、要人確認的異常(負值、缺漏、售價低於成本)。把關真的有用,不是講講而已。" />
);
const C2Make: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 換你練習</Eyebrow><Title size={48}>自己造一筆錯資料,看它抓不抓</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 26, maxWidth: 1520 }}>
      <Atom n={1} act={<>在 CSV 隨便一行,把單價改成<B>比成本還低</B>(例如 1 元),存檔。</>} see="那格變成 1。" />
      <Atom n={2} act={<>再跑一次測試或按按鈕。</>} see="它應該把這筆標成「售價低於成本,要確認」。" />
    </div>
    <div style={{ marginTop: 18 }}><SuccessRow>你親手埋的雷,被它抓出來 = 你信得過這個把關了。</SuccessRow></div>
  </div><Foot label="U12 · 課4 · 案例2" /></div>
);
const C2Why: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 為什麼先猜再驗</Eyebrow><Title size={52}>先猜,你才真的學到</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Think q={<>「直接看答案不是比較快?」</>} a={<>快,但<B>記不住</B>。先猜一次,你的腦袋會「在意」答案;對到的那一刻才會印進去。這是學東西的小撇步。</>} />
      <Harvest>先猜、再驗、再修正：這比直接抄答案紮實得多。</Harvest>
    </div>
  </div><Foot label="U12 · 課4 · 案例2" /></div>
);
const C2Pit: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 卡住了?</Eyebrow><Title size={48}>兩個常見狀況</Title>
    <div className="ts-rise" style={{ marginTop: 26, maxWidth: 1500 }}><Pitfall items={[['測試跑出紅字:', '把最後幾行複製,貼給 AI 問怎麼修。'], ['三種都放行(沒擋):', '可能規則沒吃到,回上一段把規則再貼一次。']]} /></div>
  </div><Foot label="U12 · 課4 · 案例2" /></div>
);
const Break1: Page = () => <BreakSlide />;
// ── 段3 展示 ──
const Sec3: Page = () => <Section no="3" title="講給不懂技術的主管聽" time="2:40 - 3:30" sub="會做不夠,要會講。練習用三分鐘,讓主管聽懂你做了什麼、它的限制在哪。" />;
const C3Head: Page = () => (
  <div style={fill}><div style={pad}><CaseHead no="3" time="2:40 - 3:30" kind="展示" title="三分鐘,讓主管聽懂" />
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 30 }}>
      <Lead>不用做新簡報。就用你做好的東西,照下面三句講。</Lead>
      <Think q={<>「我又不會做簡報、不會講…」</>} a={<>不用簡報。<B>三句話</B>就夠:它幫我做什麼、最厲害的發現、什麼情況我不信它。會講,比會做更值錢。</>} />
    </div>
  </div><Foot label="U12 · 課4 · 案例3" /></div>
);
const C3Why: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 為什麼要練講</Eyebrow><Title size={50}>主管不在乎你怎麼做,在乎能不能信</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Lead>你跟主管講「我用了 crew、加了規則」,他沒感覺。他真正想知道的是:<B>它幫我省了什麼、什麼時候會出包</B>。</Lead>
      <Harvest>會講限制的人,比只會說「很厲害」的人,更讓人信得過。</Harvest>
    </div>
  </div><Foot label="U12 · 課4 · 案例3" /></div>
);
const C3Three: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 照這三句講</Eyebrow><Title size={50}>三句,就講完了</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 28, maxWidth: 1480 }}>
      {['這個助理幫我做什麼(讀資料、給建議)。', '它最厲害的一個發現是什麼。', '什麼情況我不會直接相信它,會自己再確認。'].map((t, i) => (
        <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '18px 24px' }}><span style={{ flexShrink: 0, width: 40, height: 40, borderRadius: '50%', background: C.ink, color: '#fff', display: 'grid', placeContent: 'center', fontFamily: mono, fontWeight: 700, fontSize: 22 }}>{i + 1}</span><span style={{ fontSize: 33, lineHeight: 1.4 }}>{t}</span></div>
      ))}
    </div>
  </div><Foot label="U12 · 課4 · 案例3" /></div>
);
const C3Demo: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 老師示範講一次</Eyebrow><Title size={46}>長這樣,照著套就好</Title>
    <div className="ts-rise" style={{ marginTop: 22 }}><div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '28px 34px', maxWidth: 1500, fontSize: 30, lineHeight: 1.6 }}>
      「這個助理會<B>幫我每天讀銷售資料、抓出怪的地方</B>。它最厲害的一次,是抓到<O>某天有一筆單價低於成本</O>,本來會把毛利算錯。但<B>資料缺一塊時,我不會直接信它</B>,會先補齊再看。」
    </div></div>
    <div style={{ marginTop: 18 }}><Harvest>把你自己的店名、你抓到的發現,填進去就好。</Harvest></div>
  </div><Foot label="U12 · 課4 · 案例3" /></div>
);
const C3Tips: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 講的三個小技巧</Eyebrow><Title size={48}>講給主管,記住這三點</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 26, maxWidth: 1500 }}>
      {[['不要講術語', '不要說 crew、prompt;說「助理」「我給它的指示」。'], ['先講好處', '先說省了什麼、抓到什麼,再講怎麼做。'], ['誠實講限制', '主動說什麼情況會出包,反而更被信任。']].map(([a, b], i) => (
        <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '15px 24px' }}><span style={{ fontFamily: mono, fontSize: 22, color: C.orange, fontWeight: 700, width: 180 }}>{a}</span><span style={{ fontSize: 27, flex: 1 }}>{b}</span></div>
      ))}
    </div>
  </div><Foot label="U12 · 課4 · 案例3" /></div>
);
const C3Practice: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 兩人一組,互講一次</Eyebrow><Title size={50}>現在,換你開口</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Lead>兩人一組,一個當「主管」、一個當「報告的人」,照三句講一次,再換手。每人 90 秒。</Lead>
      <SuccessRow>答得出第三句「什麼情況不該信它」= 你真的懂了,不是只會跑。</SuccessRow>
    </div>
  </div><Foot label="U12 · 課4 · 案例3" /></div>
);
// ── 段4 收束 + M12 完課 ──
const Punchline: Page = () => (
  <div style={{ ...fill, background: C.ink, color: '#fff' }}><div style={pad}><Eyebrow>今天 · 也是 M12 最重要的一句</Eyebrow><div style={{ fontSize: 76, fontWeight: 900, lineHeight: 1.2, marginTop: 26, maxWidth: 1560, letterSpacing: '-0.02em' }}>先檢查資料,再問 AI。<br />資料髒,AI 再聰明<br />也會給你<span style={{ color: C.orange }}>錯答案。</span></div><div style={{ fontSize: 31, color: 'rgba(255,255,255,0.7)', marginTop: 26, maxWidth: 1380, lineHeight: 1.55 }}>AI 講錯時跟講對時一樣有自信。你問它「為什麼」,答得出來才採用。</div></div><div style={{ position: 'absolute', left: 110, bottom: 44, fontFamily: mono, fontSize: 19, color: 'rgba(255,255,255,0.5)' }}>U12 · 課4 · 記住這句</div></div>
);
const Human: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>一個重要觀念 · 人工審核</Eyebrow><Title size={50}>什麼情況,先別急著信它</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 28, maxWidth: 1480 }}>
      {['資料明顯有缺、或有人打錯數字的時候。', '它講得很順,但說不出「為什麼」的時候。', '它的建議會花到錢、或影響顧客的時候。'].map((t, i) => (
        <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '16px 26px' }}><span style={{ flexShrink: 0, width: 36, height: 36, borderRadius: '50%', background: RED, color: '#fff', display: 'grid', placeContent: 'center', fontSize: 22, fontWeight: 800 }}>!</span><span style={{ fontSize: 30 }}>{t}</span></div>
      ))}
    </div>
    <div style={{ marginTop: 20 }}><Harvest>AI 幫你看得更快,但最後拍板、負責的人,永遠是你。</Harvest></div>
  </div><Foot label="U12 · 課4 · 人工審核" /></div>
);
const ModuleMap: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>M12 全模組 · 你蓋好的這條線</Eyebrow><Title size={48}>四堂,接成一個能信的助理</Title>
    <div className="ts-rise" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 30, maxWidth: 1540 }}>
      {['讀資料給建議', '三角色接力', '一鍵入口', '可信任把關'].map((t, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 12, padding: '16px 24px', fontSize: 28, fontWeight: 700 }}>{t}</span>
          {i < 3 && <span style={{ color: C.orange, fontSize: 30, fontWeight: 800 }}>→</span>}
        </div>
      ))}
    </div>
    <div style={{ marginTop: 26 }}><Harvest>從「會跑」到「能信」,你把整條都走完了。</Harvest></div>
  </div><Foot label="U12 · 課4 · M12 全圖" /></div>
);
const Recap: Page = () => {
  const pts = [['訂可信任規則', '碰到怪狀況先停下問人'], ['測壞掉的情況', '先猜再驗,不只測會成功的'], ['說得出限制', '會講比會做更值錢']];
  return (<div style={fill}><div style={pad}><Eyebrow>M12 完課 · 三件事</Eyebrow><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 36, maxWidth: 1500 }}>{pts.map(([a, b], i) => <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}><span style={{ fontFamily: mono, fontSize: 38, color: C.orange, fontWeight: 800 }}>{String(i + 1).padStart(2, '0')}</span><div><div style={{ fontSize: 40, fontWeight: 800 }}>{a}</div><div style={{ fontSize: 26, color: C.muted, marginTop: 4 }}>{b}</div></div></div>)}</div></div><Foot label="U12 · 課4 · 完課" /></div>);
};
const Homework: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>回家作業 · 輕量,只要一件</Eyebrow><Title>存好三個測試結果</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 36, maxWidth: 1480 }}>
      <div style={{ background: C.card, border: `2px solid ${C.orange}`, borderRadius: 16, padding: '24px 34px' }}><span style={{ fontFamily: mono, fontSize: 22, color: C.orange, fontWeight: 700 }}>必做</span><div style={{ fontSize: 34, marginTop: 8, lineHeight: 1.4 }}>保留最終版,存好<B>三個測試結果</B>(正常 / 缺資料 / 錯誤輸入)。</div></div>
      <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '20px 34px' }}><span style={{ fontFamily: mono, fontSize: 22, color: C.muted, fontWeight: 700 }}>選做</span><div style={{ fontSize: 28, marginTop: 6, color: C.muted, lineHeight: 1.4 }}>把你的三分鐘展示,練一次給家人聽。</div></div>
    </div></div><Foot label="U12 · 課4 · 回家作業" /></div>
);
const NextModule: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>下一個模組 · M13</Eyebrow><Title size={56}>把你的成果<span style={{ color: C.orange }}>公開上線</span>,<br />變成你的個人作品</Title><div style={{ fontSize: 32, color: C.muted, marginTop: 28, lineHeight: 1.5 }}>M12 完課了,你很不簡單。下個模組,我們做一個能放進履歷的網站。今天辛苦大家了。</div></div><Foot label="U12 · 課4 · 完課" /></div>
);

export const meta: SlideMeta = { title: 'U12 課4：可信任規則 + 測試 + 展示', createdAt: '2026-06-22T10:30:00.000Z' };
export const notes: (string | undefined)[] = [
  '各位同學,這是 M12 最後一堂。AI 很會講話,它講錯的時候也一樣很有自信。所以今天,我們教它什麼時候要先停下來問人。',
  '先回顧一下 M12 走到哪。課1 做了會讀資料給建議的助理,課2 三角色接力固定四欄,課3 一個按一下就跑的入口。今天最後一塊拼圖:讓它值得信任。會跑不夠,要知道什麼時候不能信。',
  '先看下課時你的助理會變怎樣。正常資料它放行;缺資料、錯誤輸入它擋下來、要你確認。它學會自己先喊停。',
  '先講為什麼。很多人測東西只測會成功的,那是在騙自己。真正會出事的是資料缺一塊、有人打錯。你可能會想說 AI 很聰明它自己會發現?不一定,它很想給答案,缺一塊也會硬湊。我們要它在這時誠實說我先不算。',
  '看路線。三個案例:訂兩條規則、故意測壞掉的情況、最後練三分鐘講給主管聽。中間休息一次。',
  '第一段,訂兩條要先問人的規則。AI 會自信地講錯,我們先給它兩條規則,碰到怪狀況就停下來提醒人。',
  '案例一。你有沒有發現,AI 講錯時也一樣很有自信?所以先給它兩條規則,讓它知道什麼時候該停。',
  '打個比方,像一個很熱心、但不會說不知道的店員,沒查就憑印象給你數字還很肯定。我們要教 AI 沒把握就說我先不算、要確認。',
  '兩條規則逐條看:規則一缺漏先停,資料有缺就說資料不齊要人確認、不硬算;規則二沒依據不採用,建議說不出依據就標不可直接採用。一條管資料髒,一條管亂講,兩個最常出事的點。',
  '為什麼是這兩條?你可能會想說規則不是越多越安全?不是,規則太多它每次都卡、什麼都不敢做。抓最常出事的兩個就好,其他真的出問題再加。先用最少的規則守住最大的風險。',
  '貼這段,加兩條規則:資料缺漏就說資料不齊要人確認、不要硬算;沒附依據的建議標成不可直接採用。複製、貼、Enter,它會回覆已加入規則。',
  '馬上驗一次:貼這段,故意說其中一天沒進來,請它照規則處理。它說資料不齊、需要人確認,而不是硬給數字,規則就生效了。',
  '看一下加規則後它變怎樣。加規則前它硬給一個數;加規則後,它先標出缺漏、停下來等你。差別就在這。好的助理,敢說我不確定。',
  '卡住:它還是硬算,把規則再貼一次並加這是硬規定務必遵守;它每次都說資料不齊,檢查你的資料是不是真的缺漏,正常資料應該放行。',
  '第二段,故意餵它三種情況。重點:先用嘴巴猜它會怎麼反應,再跑測試對答案,猜過你才會記得。',
  '案例二,我們準備好三組資料故意餵它。先別急著跑,先用嘴巴猜。',
  '先看三組資料長怎樣:一組正常、一組缺一天整天沒進來、一組有人打了負數。右邊就是它們的樣子,故意做了手腳。',
  '先猜再驗:正常資料、缺一天的、有人打負數,你各猜它放行還是擋?猜完跑 test_scenarios.py 對答案,這個檔老師會附,個人版可以請 AI 幫你建一個,手冊裡有 prompt。',
  '為什麼三種都要測?會出事的都不是正常那種。正常是基本款,確認平常會放行;缺漏最常見,某天 POS 沒上傳;錯誤是人打錯,多一個零、漏負號。測壞掉的情況,才知道它把不把得了關。',
  '動作:點終端機,打 python test_scenarios.py 按 Enter,它依序跑三種、各印結果。對照你的猜測,猜對幾個?',
  '對答案:正常放行;缺資料、錯誤輸入擋下來要確認。這就是把關。',
  '逐種讀懂它說了什麼:正常,放行正常給四欄;缺漏,說資料不齊需要人確認、不給數字;錯誤,說偵測到負值請確認、標記不採用。',
  '給大家看個真的。這是真實資料跑出來的成果頁,下面列出它抓到要人確認的異常:負值、缺漏、售價低於成本。把關真的有用。',
  '換你練習:在 CSV 隨便一行把單價改成比成本還低例如 1 元、存檔;再跑一次測試或按按鈕。它應該把這筆標成售價低於成本要確認。你親手埋的雷被它抓出來,你就信得過這個把關了。',
  '講一下為什麼要先猜再驗。你可能想說直接看答案比較快?快,但記不住。先猜一次,腦袋會在意答案,對到的那刻才印進去。先猜再驗再修正,比抄答案紮實。',
  '卡住:測試跑出紅字,把最後幾行複製貼給 AI 問怎麼修;三種都放行沒擋,可能規則沒吃到,回上一段把規則再貼一次。好,休息十分鐘。',
  '休息十分鐘,回來練習怎麼把它講給不懂技術的主管聽。',
  '第三段,講給主管聽。會做不夠,要會講。',
  '案例三,不用做新簡報。你可能會想說我不會做簡報不會講?不用簡報,三句話就夠。會講比會做更值錢。',
  '先講為什麼要練講。你跟主管講我用了 crew、加了規則,他沒感覺。他真正想知道的是它幫我省了什麼、什麼時候會出包。會講限制的人,比只會說很厲害的人更讓人信得過。',
  '照這三句:這個助理幫我做什麼、它最厲害的一個發現、什麼情況我不會直接信它。',
  '老師示範講一次,長這樣:這個助理會幫我每天讀銷售資料、抓出怪的地方,它最厲害的一次是抓到某天有一筆單價低於成本本來會把毛利算錯,但資料缺一塊時我不會直接信它、會先補齊再看。把你自己的店名跟發現填進去就好。',
  '講給主管的三個小技巧:不要講術語,不要說 crew、prompt,說助理、我給它的指示;先講好處,先說省了什麼抓到什麼再講怎麼做;誠實講限制,主動說什麼情況會出包反而更被信任。',
  '現在兩人一組互講一次,一個當主管一個報告,每人 90 秒再換手。答得出第三句什麼情況不該信它,代表你真的懂。',
  '今天、也是整個 M12 最重要的一句:先檢查資料,再問 AI。資料髒,AI 再聰明也會給你錯答案。它講錯時跟講對時一樣有自信,你問它為什麼,答得出來才採用。',
  '人工審核:什麼情況先別信它?資料有缺或有人打錯、它講得很順卻說不出為什麼、它的建議會花到錢或影響顧客。AI 幫你看得快,但拍板負責的永遠是你。',
  '回頭看 M12 全圖:課1 讀資料給建議、課2 三角色接力、課3 一鍵入口、課4 可信任把關。從會跑到能信,你把整條都走完了,很不簡單。',
  '收尾,M12 完課三件事:訂規則、先猜再驗測壞掉的、說得出限制。',
  '回家作業:保留最終版、存好三個測試結果。選做是把三分鐘展示練一次給家人聽。',
  '下一個模組 M13,我們把你的成果公開上線,變成一個能放進履歷的個人作品。M12 辛苦大家了。',
];
export default [
  Cover, Recall, Outcome, Why, Roadmap,
  Sec1, C1Head, C1Concept, C1Rules, C1WhyRule, C1Prompt, C1Verify, C1ReadAfter, C1Pit,
  Sec2, C2Head, C2Data, C2Guess, C2WhyEach, C2Run, C2Answer, C2ReadEach, C2Real, C2Make, C2Why, C2Pit, Break1,
  Sec3, C3Head, C3Why, C3Three, C3Demo, C3Tips, C3Practice,
  Punchline, Human, ModuleMap, Recap, Homework, NextModule,
] satisfies Page[];
