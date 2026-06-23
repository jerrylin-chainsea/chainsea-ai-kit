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
if (typeof document !== 'undefined' && !document.getElementById('ts-u12c3')) { const el = document.createElement('style'); el.id = 'ts-u12c3'; el.textContent = css; document.head.appendChild(el); }
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
  <div style={{ ...fill, background: '#0e7a52' }}><div style={{ ...pad, color: '#fff' }}><span style={{ fontFamily: mono, fontSize: 26, letterSpacing: '0.2em', opacity: 0.85 }}>BREAK</span><div style={{ fontSize: 118, fontWeight: 900, marginTop: 16 }}>休息 10 分鐘</div><div style={{ fontSize: 35, opacity: 0.9, marginTop: 22 }}>回來看「兩種觸發」,還有讓它自己傳 LINE。</div></div></div>
);
const BrowserFrame = () => (
  <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 18, overflow: 'hidden', boxShadow: '0 18px 50px -28px rgba(30,30,40,0.4)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 18px', background: '#f0f2f5', borderBottom: `1px solid ${C.line}` }}><div style={{ display: 'flex', gap: 7 }}>{['#ff5f57', '#febc2e', '#28c840'].map((c, i) => <span key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />)}</div><div style={{ flex: 1, background: '#fff', border: `1px solid ${C.line}`, borderRadius: 7, padding: '6px 14px', fontFamily: mono, fontSize: 17, color: C.faint }}>localhost:8000</div></div>
    <div style={{ padding: '26px 32px 30px' }}><div style={{ fontSize: 28, fontWeight: 800 }}>大甲鍋貼 · AI 決策助理</div>
      <button style={{ marginTop: 18, background: C.orange, color: '#fff', border: 0, borderRadius: 999, padding: '13px 26px', fontSize: 23, fontWeight: 700, fontFamily: 'inherit' }}>▶ 跑一次 AI 決策助理</button>
      <div style={{ marginTop: 18, background: '#0f1117', borderRadius: 12, padding: '16px 20px', fontFamily: mono, fontSize: 19, lineHeight: 1.6, color: '#cdd3df' }}><div><span style={{ color: C.orange }}>"insight"</span>: <span style={{ color: '#7fd4a8' }}>"資料被汙染,先別下結論"</span></div><div><span style={{ color: C.orange }}>"risk_level"</span>: <span style={{ color: '#7fd4a8' }}>"高"</span></div></div>
    </div>
  </div>
);
const FileCard = ({ title, children }: { title: string; children: any }) => (
  <div style={{ background: '#0f1117', borderRadius: 16, overflow: 'hidden', border: '1px solid #232733', maxWidth: 1480 }}>
    <div style={{ padding: '11px 20px', background: '#161a22', borderBottom: '1px solid #232733', fontFamily: mono, fontSize: 18, color: '#8b93a3' }}>{title}</div>
    <pre style={{ margin: 0, padding: '18px 26px', fontFamily: mono, fontSize: 23, lineHeight: 1.6, color: '#cdd3df', whiteSpace: 'pre-wrap' }}>{children}</pre>
  </div>
);
const Term = ({ children }: { children: any }) => (
  <div style={{ background: '#0f1117', borderRadius: 16, overflow: 'hidden', border: '1px solid #232733', maxWidth: 1480 }}>
    <div style={{ display: 'flex', gap: 9, padding: '11px 20px', background: '#161a22', borderBottom: '1px solid #232733' }}>{['#ff5f57', '#febc2e', '#28c840'].map((c, i) => <span key={i} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />)}<span style={{ fontFamily: mono, fontSize: 17, color: '#6b7280', marginLeft: 10 }}>終端機</span></div>
    <pre style={{ margin: 0, padding: '18px 26px', fontFamily: mono, fontSize: 22, lineHeight: 1.6, color: '#cdd3df', whiteSpace: 'pre-wrap' }}>{children}</pre>
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
  </div><Foot label="U12 · 課3 · 真實成果" /></div>
);

// ── 開場 ──
const Cover: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>U12 · 第 3 堂 / 共 4 堂 · 4 小時</Eyebrow>
    <div className="ts-rise" style={{ marginTop: 30 }}><Title size={100}>接資料,做一個<br />「按一下就跑」</Title><div style={{ marginTop: 22 }}><Lead>老闆不會自己去打指令跑程式嘛。所以今天,我們做一個<B>按鈕</B>:按下去,結果就出來。</Lead></div></div>
  </div><Foot label="U12 · 課3" /></div>
);
const Recall: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>先回顧上一堂</Eyebrow><Title size={50}>你已經會的事</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 26, maxWidth: 1480 }}>
      {['把助理長成三個角色:檢查、分析、決策,一棒接一棒。', '用一句話改角色講的話,不用碰程式。', '規定輸出一定要有那四欄,每次都長一樣。'].map((t, i) => (
        <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '15px 24px' }}><span style={{ width: 34, height: 34, borderRadius: '50%', background: OK, color: '#fff', display: 'grid', placeContent: 'center', fontSize: 20, fontWeight: 800 }}>✓</span><span style={{ fontSize: 28 }}>{t}</span></div>
      ))}
    </div>
    <div style={{ marginTop: 22 }}><Lead>但有個問題:<B>它跑起來要打指令</B>。店長不會打。今天就來解決這件事。</Lead></div>
  </div><Foot label="U12 · 課3 · 回顧" /></div>
);
const Outcome: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '540px 1fr', gap: 54, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}><div><Eyebrow>下課時你會有</Eyebrow><Title size={52}>一個按鈕,<br />按下去就出結果</Title></div><Lead>右邊就是它的樣子:一個按鈕,按下去 AI 幫你跑、結果出現在畫面。</Lead></div>
    <div className="ts-rise"><BrowserFrame /></div>
  </div><Foot label="U12 · 課3 · 成品" /></div>
);
const Why: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>先講為什麼要按鈕</Eyebrow><Title size={54}>助理再聰明,沒入口也沒人會用</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Lead>店長不會打指令、不會看程式。<B>怎麼辦呢?</B> 給他一個按鈕,按下去就出結果。今天就做這個。</Lead>
      <Harvest>好工具要有人用得起來,才算數。入口,就是讓人用得起來的關鍵。</Harvest>
    </div>
  </div><Foot label="U12 · 課3 · 為什麼" /></div>
);
const Roadmap: Page = () => {
  const items = [['案例 1', '換成自己的資料', '0:15', '手動'], ['案例 2', '用指令跑一次', '0:55', '手動'], ['案例 3', '讓 AI 做按鈕', '1:30', 'AI'], ['案例 4', '兩種觸發 + LINE', '3:10', 'AI']];
  return (
    <div style={fill}><div style={pad}><Eyebrow>今天的路線 · 四個案例 + 收束</Eyebrow><Title>從資料,到一個按鈕</Title>
      <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, marginTop: 42 }}>
        {items.map(([a, b, t, k], i) => <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '22px 20px' }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontFamily: mono, fontSize: 20, color: C.orange, fontWeight: 700 }}>{a}</span><span style={{ fontFamily: mono, fontSize: 17, color: C.faint }}>{t}</span></div><div style={{ fontSize: 29, fontWeight: 800, marginTop: 10, lineHeight: 1.25 }}>{b}</div><div style={{ marginTop: 12 }}><CaseTag kind={k as any} /></div></div>)}
      </div></div><Foot label="U12 · 課3 · 路線" /></div>
  );
};
// ── 段1 換資料 ──
const Sec1: Page = () => <Section no="1" title="先換成你自己的資料" time="0:15 - 0:55" sub="先親手換一次,你才知道資料長怎樣、從哪裡進來。之後出錯,你才找得到。" />;
const C1Head: Page = () => (
  <div style={fill}><div style={pad}><CaseHead no="1" time="0:15 - 0:55" kind="手動" title="自己動手,換一個品項進去" />
    <div className="ts-rise" style={{ marginTop: 34 }}><Lead>不用 AI,你自己手動換。為什麼?因為你要先認識資料,之後它出錯,你才找得到問題在哪。</Lead></div>
  </div><Foot label="U12 · 課3 · 案例1" /></div>
);
const C1Concept: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '500px 1fr', gap: 50, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}><div><Eyebrow>案例 1 · CSV 是什麼</Eyebrow><Title size={46}>CSV,其實就是一張表</Title></div><Analogy>聽起來專業的 CSV,其實就是<O>用逗號分欄的一張表</O>:日期、店、品項、數量、單價。右邊就是它打開的樣子。</Analogy></div>
    <div className="ts-rise"><FileCard title="data/sales_sample.csv">{`日期,店,品項,數量,單價
6/1,大甲店,原味鍋貼,120,55
6/1,大甲店,韭菜鍋貼,80,60
6/2,大甲店,原味鍋貼,-5,55  ← 怪`}</FileCard></div>
  </div><Foot label="U12 · 課3 · 案例1" /></div>
);
const C1Step: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 1 · 動作</Eyebrow><Title size={46}>打開檔案、改一格、存檔</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 24, maxWidth: 1520 }}>
      <Atom n={1} act={<>左邊<B>檔案樹</B>點開 <Key>data</Key> 資料夾 → 點裡面那個 <Key>.csv</Key> 檔。</>} see="中間打開一張表格(很多行字)。" />
      <Atom n={2} act={<>找到「原味鍋貼」<B>那格文字</B>,雙擊選起來,打成你想賣的(例如「韭菜鍋貼」)。</>} see="那格文字變成你打的。" />
      <Atom n={3} act={<>只改品項、<B>數字先別動</B>,然後按 <Key>Ctrl</Key>+<Key>S</Key> 存檔。</>} see="檔名旁邊的小白點消失 = 存好了。" />
    </div>
    <div style={{ marginTop: 18 }}><SuccessRow>檔案裡出現你的品項、存檔成功 = 完成。</SuccessRow></div>
  </div><Foot label="U12 · 課3 · 案例1" /></div>
);
const C1Verify: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 1 · 確認改對了</Eyebrow><Title size={48}>存檔前,先看這兩件事</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 26, maxWidth: 1500 }}>
      {[['只改了「品項」那一格', '日期、數量、單價的位置沒被你不小心刪掉。'], ['逗號還在', 'CSV 靠逗號分欄,逗號被刪掉那行就會亂掉。']].map(([a, b], i) => (
        <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '16px 24px' }}><span style={{ width: 34, height: 34, borderRadius: '50%', background: OK, color: '#fff', display: 'grid', placeContent: 'center', fontSize: 20, fontWeight: 800 }}>✓</span><div style={{ fontSize: 28, lineHeight: 1.35 }}><B>{a}</B>　<span style={{ color: C.muted }}>{b}</span></div></div>
      ))}
    </div>
    <div style={{ marginTop: 20 }}><Harvest>改資料最常出錯的就是「不小心刪到逗號」。看一眼再存。</Harvest></div>
  </div><Foot label="U12 · 課3 · 案例1" /></div>
);
const C1Pit: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 1 · 卡住了?</Eyebrow><Title size={48}>兩個常見狀況</Title>
    <div className="ts-rise" style={{ marginTop: 26, maxWidth: 1500 }}><Pitfall items={[['找不到 data 資料夾:', '在左邊檔案樹最上面,點專案名稱展開就看得到。'], ['存檔後想復原:', '按 Ctrl+Z 可以一步步退回;真的亂了就重新 fork 一份。']]} /></div>
  </div><Foot label="U12 · 課3 · 案例1" /></div>
);
// ── 段2 手動跑 ──
const Sec2: Page = () => <Section no="2" title="先手動,跑一次給自己看" time="0:55 - 1:30" sub="在按鈕出現前,你先親手打一行指令跑一次。懂了「跑一次」是什麼,再交給 AI。" />;
const C2Head: Page = () => (
  <div style={fill}><div style={pad}><CaseHead no="2" time="0:55 - 1:30" kind="手動" title="在終端機打一行,手動跑一次" />
    <div className="ts-rise" style={{ marginTop: 34 }}><Lead>這是「手動版」的觸發。你親手打一行,讓它跑一次,看到你換的品項出現在結果裡。懂了「跑一次」是什麼感覺,等下才知道 AI 在幫你做什麼。</Lead></div>
  </div><Foot label="U12 · 課3 · 案例2" /></div>
);
const C2Concept: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 跑一次 = 什麼</Eyebrow><Title size={50}>「跑一次」是把資料餵給三角色</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 26 }}>
      <Analogy>你打 <Key>python run.py</Key>,就像<B>按下廚房的開工鈴</B>:你剛換的那張表,被送進去給檢查、分析、決策三個人接力處理一遍。</Analogy>
      <div style={{ fontFamily: mono, fontSize: 28, color: C.ink, background: C.card, border: `1px solid ${C.line}`, borderRadius: 12, padding: '16px 24px' }}>你的 CSV → 檢查員 → 分析員 → 決策員 → 四欄結果</div>
    </div>
  </div><Foot label="U12 · 課3 · 案例2" /></div>
);
const C2Step: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 動作</Eyebrow><Title size={46}>打開終端機、打一行、Enter</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 24, maxWidth: 1520 }}>
      <Atom n={1} act={<>看畫面<B>最下面那塊黑色區域</B>(終端機)。沒看到就點上面選單 <Key>Terminal</Key> → <Key>New Terminal</Key>。</>} see="下面出現一塊黑底、有游標的區域。" />
      <Atom n={2} act={<>在黑色區域點一下,打字:<Key>python run.py</Key>,然後按 <Key>Enter</Key>。</>} see="它跑幾行字,最後印出一段結果。" />
    </div>
    <div style={{ marginTop: 18 }}><SuccessRow>終端機印出四欄、看得到你換的品項 = 你會手動跑了。</SuccessRow></div>
  </div><Foot label="U12 · 課3 · 案例2" /></div>
);
const C2Read: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 720px', gap: 50, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}><div><Eyebrow>案例 2 · 讀懂輸出</Eyebrow><Title size={44}>看最後那段就好</Title></div><Lead>中間跑的字看不懂沒關係,<B>看最後印出的四欄</B>:有沒有你的品項、風險高不高。</Lead><Harvest>不用看懂每一行,看最後結果就好。</Harvest></div>
    <div className="ts-rise"><Term>{`$ python run.py
... 檢查員執行中
... 分析員執行中
{
  "insight": "韭菜鍋貼數量正常",
  "risk_level": "低",
  "action_items": ["維持現狀"]
}`}</Term></div>
  </div><Foot label="U12 · 課3 · 案例2" /></div>
);
const C2Pit: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 卡住了?</Eyebrow><Title size={48}>兩個常見狀況</Title>
    <div className="ts-rise" style={{ marginTop: 26, maxWidth: 1500 }}><Pitfall items={[['它說 command not found:', '可能要打 python3 run.py;或確認你在專案資料夾裡。'], ['跑出一堆紅字:', '把紅字最後幾行複製,貼到對話框問 AI 怎麼修。']]} /></div>
  </div><Foot label="U12 · 課3 · 案例2" /></div>
);
// ── 段3 AI 按鈕 ──
const Sec3: Page = () => <Section no="3" title="讓 AI 把它變成一個按鈕" time="1:30 - 3:00" sub="手動會了,現在請 AI 幫你做網頁按鈕。同一件事,從你打指令,變成按一下。" />;
const C3Head: Page = () => (
  <div style={fill}><div style={pad}><CaseHead no="3" time="1:30 - 3:00" kind="AI" title="請 AI 做一個按鈕,按下去就跑" />
    <div className="ts-rise" style={{ marginTop: 34 }}><Lead>剛剛你手動打了 <Key>python run.py</Key>。現在請 AI 把這件事,<B>包成一個按鈕</B>：同一件事,你不用再打指令,點一下就好。</Lead></div>
  </div><Foot label="U12 · 課3 · 案例3" /></div>
);
const C3Concept: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 按鈕是什麼</Eyebrow><Title size={50}>按鈕,就是把那行指令藏起來</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 26 }}>
      <Analogy>像<B>電鍋的開關</B>:裡面其實是一連串加熱動作,但你只看到一個「煮飯」鍵。按鈕就是把 <Key>python run.py</Key> 藏在後面,前面只留一顆鈕。</Analogy>
      <Harvest>按鈕沒有變魔法,它按下去做的,就是你剛剛手動打的那一行。</Harvest>
    </div>
  </div><Foot label="U12 · 課3 · 案例3" /></div>
);
const C3Think: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 先別緊張</Eyebrow><Title size={50}>「做網頁」不用你會寫網頁</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Think q={<>「做一個網頁按鈕,我不會寫網頁耶?」</>} a={<>你不用會。你<B>用講的</B>,AI 寫。你只要會「複製這段話、貼上、按 Enter、看結果」,剩下它做。</>} />
      <Lead>這一整堂的核心心法就是這個:<O>你負責說要什麼,AI 負責動手做</O>。</Lead>
    </div>
  </div><Foot label="U12 · 課3 · 案例3" /></div>
);
const C3Prompt: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · Prompt 卡</Eyebrow><Title size={46}>貼這段,請它做按鈕</Title>
    <div style={{ marginTop: 16 }}><PromptCard size={26}>{`幫我做一個很簡單的網頁:上面一個按鈕,
按下去就去跑這個 crew,然後把四欄結果顯示在頁面上。
不用漂亮,能按、能看到結果就好。`}</PromptCard></div>
    <div style={{ marginTop: 14 }}><Atom n={1} act={<><B>複製 → 貼到對話框 → <Key>Enter</Key></B>。它會建檔、把網頁開起來。</>} see="它給你一個網址(或要你按「在瀏覽器開啟」)。" /></div>
  </div><Foot label="U12 · 課3 · 案例3" /></div>
);
const C3Run: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 它在建的時候</Eyebrow><Title size={48}>它會做兩件事,你等著看</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 26, maxWidth: 1500 }}>
      <Atom n={1} act={<>它<B>新增一個網頁檔</B>(你會看到檔案樹多一個檔)。</>} see="左邊檔案樹冒出新檔案。" />
      <Atom n={2} act={<>它<B>把網頁服務開起來</B>,給你一個 localhost 網址。</>} see="它印出「running on ...」之類,或彈出開啟提示。" />
    </div>
    <div style={{ marginTop: 18 }}><Think q={<>「它叫我開一個網址,安全嗎?」</>} a={<>安全。那是<B>只有你看得到</B>的本機網址(localhost),還沒公開給別人。</>} /></div>
  </div><Foot label="U12 · 課3 · 案例3" /></div>
);
const C3See: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '540px 1fr', gap: 54, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}><div><Eyebrow>案例 3 · 你會看到</Eyebrow><Title size={50}>一個能按的按鈕</Title></div><Lead>按下去 → 它去跑 → 結果出現在畫面。剛剛是你手動打指令,現在 AI 幫你接成<B>一鍵</B>,連店長都會用。</Lead></div>
    <div className="ts-rise"><BrowserFrame /></div>
  </div><Foot label="U12 · 課3 · 案例3" /></div>
);
const C3Read: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 頁面三塊</Eyebrow><Title size={48}>這個頁面,只有三塊</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 28 }}>
      {[['標題', '寫你的店名,讓人知道這是什麼。'], ['一顆按鈕', '按下去 = 跑一次(就是你剛的指令)。'], ['結果區', '四欄結果出現的地方。']].map(([a, b], i) => (
        <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '20px 22px' }}><div style={{ fontFamily: mono, fontSize: 20, color: C.orange, fontWeight: 700 }}>{i + 1}</div><div style={{ fontSize: 28, fontWeight: 800, marginTop: 6 }}>{a}</div><div style={{ fontSize: 23, color: C.muted, marginTop: 6, lineHeight: 1.4 }}>{b}</div></div>
      ))}
    </div>
    <div style={{ marginTop: 22 }}><Harvest>看懂這三塊,之後要改哪裡你就找得到。</Harvest></div>
  </div><Foot label="U12 · 課3 · 案例3" /></div>
);
const C3Real: Page = () => (
  <RealShot img={caseShot} url="stanley-1013.github.io/chainsea-leacture/case.html" eyebrow="案例 3 · 真實成果"
    title="按鈕背後跑的,就是這種真分析" caption="這是用真實鍋貼資料跑出來、放上網的成果:決策摘要、抓到的異常、分級行動,全是真的。你的按鈕背後,跑的就是這個。" />
);
const C3Practice: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 換你練習</Eyebrow><Title size={48}>改個數字,再按一次按鈕</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 26, maxWidth: 1520 }}>
      <Atom n={1} act={<>回到 CSV,把某個品項的數量改成一個<B>很誇張的數</B>(例如 9999)、存檔。</>} see="表格那格變成 9999。" />
      <Atom n={2} act={<>回網頁,<B>再按一次</B>按鈕。</>} see="結果區的風險、異常,跟著變了。" />
    </div>
    <div style={{ marginTop: 18 }}><SuccessRow>改資料 → 按一下 → 結果跟著變 = 你懂這個按鈕在做什麼了。</SuccessRow></div>
  </div><Foot label="U12 · 課3 · 案例3" /></div>
);
const C3Two: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 重要觀念</Eyebrow><Title size={50}>觸發,有兩種</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 26 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 18 }}>
        {[['上課版 · 按鈕', '人想看就按一下,馬上出結果。(今天做的)'], ['營運版 · 排程', '讓它每天自動跑一次,不用有人在。(下一頁細講)']].map(([a, b], i) => (
          <div key={i} style={{ background: C.card, border: `2px solid ${i ? C.line : C.orange}`, borderRadius: 16, padding: '22px 26px' }}><div style={{ fontSize: 31, fontWeight: 800, color: i ? C.ink : C.orange }}>{a}</div><div style={{ fontSize: 25, color: C.muted, marginTop: 10, lineHeight: 1.45 }}>{b}</div></div>
        ))}
      </div>
      <Harvest>同一個助理,只是「誰去按執行鍵」不一樣而已。</Harvest>
    </div>
  </div><Foot label="U12 · 課3 · 案例3" /></div>
);
const C3Pit: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 卡住了?</Eyebrow><Title size={48}>兩個常見狀況</Title>
    <div className="ts-rise" style={{ marginTop: 26, maxWidth: 1500 }}><Pitfall items={[['給了網址但打不開:', '看它有沒有說「在某個 port 開好了」,點那個連結;或舉手。'], ['按了沒反應:', '把畫面截圖貼回去問它:按了沒反應怎麼辦。']]} /></div>
  </div><Foot label="U12 · 課3 · 案例3" /></div>
);
const Break1: Page = () => <BreakSlide />;
// ── 段4 兩種觸發深入 + LINE ──
const Sec4: Page = () => <Section no="4" title="讓它「自己跑」與「自己傳」" time="3:10 - 3:50" sub="按鈕是人來按。但 AI 理論上每天都該做事：怎麼讓它不用人按、自己跑?" />;
const C4Cron: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段4 · 排程 = 自己跑</Eyebrow><Title size={50}>排程,就是設一個鬧鐘給它</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 26 }}>
      <Analogy>像<B>定時電鍋</B>:你設好「每天早上 8 點」,時間到它自己開工,不用你守在旁邊按。排程就是給程式設一個鬧鐘。</Analogy>
      <Think q={<>「那要學很難的設定嗎?」</>} a={<>不用。你一樣<B>用講的</B>:跟 AI 說「幫我設成每天早上自動跑一次」,它幫你設好。</>} />
    </div>
  </div><Foot label="U12 · 課3 · 段4" /></div>
);
const C4Options: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段4 · 排程有幾種做法</Eyebrow><Title size={48}>三種「自動跑」的方式</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 26, maxWidth: 1520 }}>
      {[['GitHub 排程(最推薦)', '寫在專案裡,免費、不用自己開電腦。', '推薦'], ['n8n / 自動化平台', '拖拉式介面,適合接很多服務串起來。', ''], ['本機 cron', '在自己電腦設,缺點是電腦關了就不跑。', '']].map(([a, b, tag], i) => (
        <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'center', background: C.card, border: `${tag ? 2 : 1}px solid ${tag ? C.orange : C.line}`, borderRadius: 14, padding: '16px 24px' }}><span style={{ fontSize: 28, fontWeight: 800, color: tag ? C.orange : C.ink, minWidth: 360 }}>{a}</span><span style={{ fontSize: 25, color: C.muted, flex: 1 }}>{b}</span>{tag ? <span style={{ fontFamily: mono, fontSize: 18, color: '#fff', background: C.orange, borderRadius: 999, padding: '4px 14px' }}>{tag}</span> : null}</div>
      ))}
    </div>
    <div style={{ marginTop: 18 }}><Harvest>課堂用按鈕就夠;要它每天自己跑,選 GitHub 排程最省事。</Harvest></div>
  </div><Foot label="U12 · 課3 · 段4" /></div>
);
const C4Line: Page = () => (
  <div style={fill}><div style={pad}><CaseHead no="4" time="3:30 - 3:50" kind="AI" title="選配:把結果推到你的 LINE" />
    <div style={{ marginTop: 18 }}><PromptCard size={26}>{`幫我把跑完的四欄結果,推一則訊息到我的 LINE。
用我之前 U8-9 設好的 LINE OA。`}</PromptCard></div>
    <div style={{ marginTop: 16 }}><SuccessRow>LINE 收到一則決策摘要 = 成功。沒做也沒關係,這是加分題。</SuccessRow></div>
    <div style={{ marginTop: 14, fontSize: 24, color: RED }}>⚠ LINE 的 token 只放 Secrets / 環境變數,<B>別貼進對話框或程式碼、別 commit</B>。</div>
  </div><Foot label="U12 · 課3 · 案例4" /></div>
);
const C4Why: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段4 · 為什麼要推 LINE</Eyebrow><Title size={50}>「自己跑」加「自己傳」= 你不用記得去看</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Lead>排程讓它<B>自己跑</B>;推 LINE 讓它<B>自己傳給你</B>。兩個合起來,你連「記得去看」都不用,有狀況它主動敲你。</Lead>
      <Harvest>從「我去查」變成「它來報」,這才是助理真正在幫你顧店。</Harvest>
    </div>
  </div><Foot label="U12 · 課3 · 段4" /></div>
);
// ── 段5 收束 ──
const Punchline: Page = () => (
  <div style={{ ...fill, background: C.ink, color: '#fff' }}><div style={pad}><Eyebrow>今天記住這句</Eyebrow><div style={{ fontSize: 78, fontWeight: 900, lineHeight: 1.22, marginTop: 26, maxWidth: 1560, letterSpacing: '-0.02em' }}>觸發有兩種:<br />上課版是<span style={{ color: C.orange }}>按鈕</span>(想看就按),<br />營運版是<span style={{ color: C.orange }}>排程</span>(每天自動)。</div><div style={{ fontSize: 31, color: 'rgba(255,255,255,0.7)', marginTop: 26, maxWidth: 1380, lineHeight: 1.55 }}>先手動點一次是為了懂它在幹嘛;之後讓 AI 接成一鍵,人人都會用。</div></div><div style={{ position: 'absolute', left: 110, bottom: 44, fontFamily: mono, fontSize: 19, color: 'rgba(255,255,255,0.5)' }}>U12 · 課3 · 記住這句</div></div>
);
const Recap: Page = () => {
  const pts = [['先手動、再按鈕', '懂了流程,排錯才不慌'], ['一個入口', '讓不會打指令的人也能用'], ['兩種觸發', '按鈕想看就按、排程每天自動']];
  return (<div style={fill}><div style={pad}><Eyebrow>今天我們學了三件事</Eyebrow><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 36, maxWidth: 1500 }}>{pts.map(([a, b], i) => <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}><span style={{ fontFamily: mono, fontSize: 38, color: C.orange, fontWeight: 800 }}>{String(i + 1).padStart(2, '0')}</span><div><div style={{ fontSize: 38, fontWeight: 800 }}>{a}</div><div style={{ fontSize: 26, color: C.muted, marginTop: 4 }}>{b}</div></div></div>)}</div></div><Foot label="U12 · 課3 · 收束" /></div>);
};
const Homework: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>回家作業 · 輕量,只要一件</Eyebrow><Title>把資料換成你自己的,讓按鈕跑出你的結果</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 36, maxWidth: 1480 }}>
      <div style={{ background: C.card, border: `2px solid ${C.orange}`, borderRadius: 16, padding: '24px 34px' }}><span style={{ fontFamily: mono, fontSize: 22, color: C.orange, fontWeight: 700 }}>必做</span><div style={{ fontSize: 34, marginTop: 8, lineHeight: 1.4 }}>換成<B>你自己的資料</B>,確認按鈕能跑出你的結果。</div></div>
      <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '20px 34px' }}><span style={{ fontFamily: mono, fontSize: 22, color: C.muted, fontWeight: 700 }}>選做</span><div style={{ fontSize: 28, marginTop: 6, color: C.muted, lineHeight: 1.4 }}>把結果推到 LINE,讓它自己傳給你。</div></div>
    </div></div><Foot label="U12 · 課3 · 回家作業" /></div>
);
const Next: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>下一堂預告</Eyebrow><Title size={56}>教它「什麼時候不該信」,<br />還要故意測它壞掉的情況</Title><div style={{ fontSize: 32, color: C.muted, marginTop: 28, lineHeight: 1.5 }}>有卡住的現在舉手,留十分鐘自由練習。今天辛苦了。</div></div><Foot label="U12 · 課3 · 下一堂" /></div>
);

export const meta: SlideMeta = { title: 'U12 課3：接資料 + 觸發入口', createdAt: '2026-06-22T10:20:00.000Z' };
export const notes: (string | undefined)[] = [
  '各位同學,上第三堂。前兩堂做出了三角色助理。今天的問題是,這助理再聰明,老闆也不會自己去打指令跑它嘛。所以今天我們做一個按一下就跑的按鈕。',
  '先回顧上一堂你會的:把助理長成三個角色一棒接一棒、用一句話改角色講的話、規定輸出那四欄每次一樣。但有個問題:它跑起來要打指令,店長不會打。今天就解決這件事。',
  '先看下課時你會有什麼。右邊這個,一個按鈕,按下去 AI 幫你跑、結果出現在畫面。今天就是把這個做出來。',
  '先講為什麼要按鈕。助理再聰明,沒入口就沒人會用。店長不會打指令、不會看程式,怎麼辦呢?給他一個按鈕。好工具要有人用得起來才算數。',
  '看路線。四個案例:先自己換資料、用指令手動跑、讓 AI 做按鈕、最後兩種觸發加傳 LINE。中間休息一次。',
  '第一段,先換成你自己的資料。先親手換一次,你才知道資料長怎樣、從哪進來,之後出錯才找得到。',
  '案例一,不用 AI,你自己手動換。為什麼?因為你要先認識資料,之後它出錯你才找得到問題在哪。',
  '先認識 CSV。聽起來專業,其實就是一張用逗號分欄的表:日期、店、品項、數量、單價。右邊就是它打開的樣子,你把品項那格改掉就換好了。',
  '動作:左邊檔案樹點開 data、點那個 csv,中間打開一張表;找到原味鍋貼那格雙擊選起來、打成你想賣的;只改品項、數字別動,按 Ctrl S 存檔,檔名旁小白點消失就存好了。',
  '存檔前看兩件事:只改了品項那格、別的位置沒被刪掉;還有逗號還在,CSV 靠逗號分欄,逗號刪掉那行就亂了。改資料最常出錯就是不小心刪到逗號,看一眼再存。',
  '卡住:找不到 data 資料夾,在左邊檔案樹最上面點專案名稱展開;存檔後想復原按 Ctrl Z,真的亂了就重新 fork 一份。',
  '第二段,先手動跑一次給自己看。在按鈕出現前,你先親手打一行,懂了跑一次是什麼,再交給 AI。',
  '案例二,這是手動版觸發。你親手打一行,看到你換的品項出現在結果裡,就知道跑一次是什麼感覺。',
  '先講跑一次是什麼。你打 python run.py,就像按下廚房的開工鈴:你剛換的那張表,被送進去給檢查、分析、決策三個人接力處理一遍。流程就是你的 CSV 進去、三角色接力、四欄結果出來。',
  '動作:看最下面那塊黑色區域,就是終端機;沒看到就點上面 Terminal、New Terminal。在黑色區域點一下,打 python run.py,按 Enter。它跑幾行字、印出結果。看到四欄、看到你的品項就會手動跑了。',
  '讀懂輸出。中間跑的字看不懂沒關係,看最後印出的四欄:有沒有你的品項、風險高不高。不用看懂每一行,看最後結果就好。',
  '卡住:它說 command not found,可能要打 python3 run.py、或確認你在專案資料夾;跑出紅字,把最後幾行複製貼到對話框問 AI 怎麼修。',
  '第三段,讓 AI 把它變成按鈕。手動會了,現在請 AI 幫你做網頁按鈕。同一件事,從你打指令變成按一下。',
  '案例三,剛剛你手動打了 python run.py,現在請 AI 把這件事包成一個按鈕。',
  '先講按鈕是什麼。像電鍋的開關:裡面是一連串加熱動作,但你只看到一個煮飯鍵。按鈕就是把 python run.py 藏在後面,前面只留一顆鈕。按鈕沒變魔法,按下去做的就是你剛手動打的那一行。',
  '先別緊張。你可能會想說做網頁我不會寫網頁?你不用會,你用講的、AI 寫。你只要會複製貼上按 Enter 看結果。這一整堂的核心心法就是:你負責說要什麼,AI 負責動手做。',
  '貼這段,請它做一個很簡單的網頁、一個按鈕按下去跑、結果顯示在頁面。複製、貼到對話框、Enter。它會建檔、把網頁開起來,給你一個網址或要你按在瀏覽器開啟。記住不用漂亮。',
  '它在建的時候會做兩件事:新增一個網頁檔,你會看到檔案樹多一個檔;再把網頁服務開起來,給你一個 localhost 網址。你可能會想說叫我開網址安全嗎?安全,那是只有你看得到的本機網址,還沒公開。',
  '跑出來一個按鈕,按下去它去跑、結果出現,連店長都會用。剛剛你手動打指令,現在 AI 幫你接成一鍵。',
  '這個頁面其實只有三塊:標題寫你的店名、一顆按鈕按下去就是跑一次、結果區是四欄出現的地方。看懂這三塊,之後要改哪裡你就找得到。',
  '給大家看個真的成果。這是真實鍋貼資料跑出來放上網的:決策摘要、抓到的異常、分級行動全是真的。你的按鈕背後跑的就是這個。',
  '換你練習:回 CSV 把某個品項數量改成很誇張的數例如 9999、存檔;回網頁再按一次按鈕。你會看到結果區的風險、異常跟著變了。改資料、按一下、結果跟著變,你就懂這個按鈕在做什麼了。',
  '一個重要觀念,觸發有兩種:上課版是按鈕,人想看就按;營運版是排程,讓它每天自動跑。同一個助理,只是誰去按執行鍵不一樣。',
  '卡住:給網址打不開,看有沒有說在某個 port 開好了、點那連結;按了沒反應,把畫面截圖貼回去問它。好,休息十分鐘。',
  '休息十分鐘,回來看兩種觸發,還有讓它自己傳 LINE。',
  '第四段,讓它自己跑、自己傳。按鈕是人來按,但 AI 理論上每天都該做事,怎麼讓它不用人按、自己跑?',
  '先講排程。排程就是設一個鬧鐘給它,像定時電鍋,你設好每天早上 8 點,時間到它自己開工。你可能會想說要學很難的設定嗎?不用,你一樣用講的,跟 AI 說幫我設成每天早上自動跑一次,它幫你設好。',
  '排程有三種做法:GitHub 排程最推薦,寫在專案裡、免費、不用自己開電腦;n8n 那種自動化平台,拖拉式介面適合接很多服務;本機 cron,在自己電腦設,缺點是電腦關了就不跑。課堂用按鈕就夠,要每天自己跑選 GitHub 排程最省事。',
  '案例四選配,願意的組貼這段,把四欄結果推一則到 LINE,用前面 U8-9 設好的 LINE OA。LINE 收到一則決策摘要就成功,沒做也沒關係,加分題。',
  '為什麼要推 LINE?排程讓它自己跑,推 LINE 讓它自己傳給你。兩個合起來,你連記得去看都不用,有狀況它主動敲你。從我去查變成它來報,這才是助理真正在幫你顧店。',
  '今天最重要的一句:觸發有兩種,上課版按鈕、營運版排程。先手動點一次是為了懂它,之後讓 AI 接成一鍵,人人都會用。',
  '收尾三件事:先手動再按鈕、做一個讓人人會用的入口、兩種觸發。',
  '回家作業:把資料換成你自己的,讓按鈕跑出你的結果。選做是推到 LINE。',
  '下一堂,教它什麼時候不該信它自己,還要故意測它壞掉的情況。有卡住的舉手,留十分鐘自由練習。辛苦了。',
];
export default [
  Cover, Recall, Outcome, Why, Roadmap,
  Sec1, C1Head, C1Concept, C1Step, C1Verify, C1Pit,
  Sec2, C2Head, C2Concept, C2Step, C2Read, C2Pit,
  Sec3, C3Head, C3Concept, C3Think, C3Prompt, C3Run, C3See, C3Read, C3Real, C3Practice, C3Two, C3Pit, Break1,
  Sec4, C4Cron, C4Options, C4Line, C4Why,
  Punchline, Recap, Homework, Next,
] satisfies Page[];
