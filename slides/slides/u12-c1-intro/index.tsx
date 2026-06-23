import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';
import traceShot from './assets/trace.png';
import caseShot from './assets/case.png';

// ── 統一風格 tokens(整個 U12-14 教學系列共用)──────────────────────────
export const design: DesignSystem = {
  palette: { bg: '#f5f6f8', text: '#181a1f', accent: '#e2570d' },
  fonts: {
    display: '"PingFang TC", "Noto Sans TC", "Microsoft JhengHei", system-ui, sans-serif',
    body: '"PingFang TC", "Noto Sans TC", "Microsoft JhengHei", system-ui, sans-serif',
  },
  typeScale: { hero: 132, body: 34 }, radius: 16,
};
const C = { bg: design.palette.bg, ink: design.palette.text, orange: design.palette.accent,
  muted: '#5a6270', faint: '#9aa1ad', line: '#e2e5ea', card: '#ffffff' };
const OK = '#0e7a52'; const RED = '#c0392b';
const mono = '"JetBrains Mono", "SF Mono", ui-monospace, monospace';

const css = `@keyframes ts-up{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.ts-rise>*{animation:ts-up .55s cubic-bezier(.16,1,.3,1) both}
.ts-rise>*:nth-child(2){animation-delay:.05s}.ts-rise>*:nth-child(3){animation-delay:.10s}
.ts-rise>*:nth-child(4){animation-delay:.15s}.ts-rise>*:nth-child(5){animation-delay:.20s}.ts-rise>*:nth-child(6){animation-delay:.25s}
@media (prefers-reduced-motion:reduce){.ts-rise>*{animation:none!important}}`;
if (typeof document !== 'undefined' && !document.getElementById('ts-u12c1')) {
  const el = document.createElement('style'); el.id = 'ts-u12c1'; el.textContent = css; document.head.appendChild(el);
}
const fill = { width: '100%', height: '100%', background: C.bg, color: C.ink, fontFamily: 'var(--osd-font-body)', position: 'relative' as const, overflow: 'hidden', display: 'flex' as const, flexDirection: 'column' as const, justifyContent: 'center' as const };
const pad = { padding: '0 110px 40px', width: '100%' as const };
const Eyebrow = ({ children }: { children: any }) => <span style={{ fontFamily: mono, fontSize: 22, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.orange, fontWeight: 700 }}>{children}</span>;
const Foot = ({ label }: { label: string }) => { const { current, total } = useSlidePageNumber(); return <div style={{ position: 'absolute', left: 110, right: 110, bottom: 44, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `1px solid ${C.line}` }}><span style={{ fontSize: 19, color: C.faint, fontFamily: mono }}>{label}</span><span style={{ fontSize: 19, color: C.faint, fontFamily: mono }}>{String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}</span></div>; };
const Title = ({ children, size = 64 }: { children: any; size?: number }) => <div style={{ fontSize: size, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.14 }}>{children}</div>;
const Lead = ({ children }: { children: any }) => <div style={{ fontSize: 33, color: C.muted, lineHeight: 1.6, maxWidth: 1480 }}>{children}</div>;
const B = ({ children }: { children: any }) => <strong style={{ color: C.ink }}>{children}</strong>;
const O = ({ children }: { children: any }) => <strong style={{ color: C.orange }}>{children}</strong>;

// 你可能會想說 … 其實 …(接住疑問)
const Think = ({ q, a }: { q: any; a: any }) => (
  <div style={{ background: '#eef4ff', border: '1px solid #cfe0fb', borderRadius: 16, padding: '24px 30px', maxWidth: 1480 }}>
    <div style={{ fontFamily: mono, fontSize: 21, color: '#2f5fb3', fontWeight: 700, marginBottom: 10 }}>你可能會想說 …</div>
    <div style={{ fontSize: 31, color: '#26405f', lineHeight: 1.5 }}>{q}</div>
    <div style={{ fontSize: 31, color: C.ink, lineHeight: 1.55, marginTop: 14 }}><O>其實</O> {a}</div>
  </div>
);
// 打個比方(生活比喻)
const Analogy = ({ children }: { children: any }) => (
  <div style={{ background: '#fbf3ee', border: '1px solid #f3d6c4', borderRadius: 16, padding: '24px 30px', maxWidth: 1480 }}>
    <div style={{ fontFamily: mono, fontSize: 21, color: C.orange, fontWeight: 700, marginBottom: 10 }}>打個比方 🍳</div>
    <div style={{ fontSize: 32, color: C.ink, lineHeight: 1.55 }}>{children}</div>
  </div>
);
// 一句話帶走
const Harvest = ({ children }: { children: any }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16, borderLeft: `6px solid ${C.orange}`, background: '#fff', padding: '18px 26px', borderRadius: '0 12px 12px 0', maxWidth: 1480, boxShadow: '0 6px 24px -16px rgba(30,30,40,.4)' }}>
    <span style={{ fontFamily: mono, fontSize: 18, color: C.orange, fontWeight: 700, whiteSpace: 'nowrap' }}>一句話帶走</span>
    <span style={{ fontSize: 31, fontWeight: 700, lineHeight: 1.4 }}>{children}</span>
  </div>
);
const CaseTag = ({ kind }: { kind: '手動' | 'AI' | '展示' }) => { const bg = kind === 'AI' ? C.orange : kind === '手動' ? '#2a2d35' : OK; return <span style={{ fontFamily: mono, fontSize: 19, color: '#fff', background: bg, borderRadius: 999, padding: '5px 15px' }}>{kind}帶做</span>; };
const CaseHead = ({ no, time, kind, title, size = 52 }: { no: string; time: string; kind: '手動' | 'AI' | '展示'; title: string; size?: number }) => (
  <div><div style={{ display: 'flex', alignItems: 'center', gap: 16 }}><Eyebrow>案例 {no}</Eyebrow><span style={{ fontFamily: mono, fontSize: 19, color: C.muted }}>約 {time}</span><CaseTag kind={kind} /></div><div style={{ fontSize: size, fontWeight: 800, letterSpacing: '-0.02em', marginTop: 14, lineHeight: 1.16 }}>{title}</div></div>
);
// 原子步驟:做什麼 → 會看到什麼
const Atom = ({ n, act, see }: { n: number; act: any; see: any }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
    <span style={{ flexShrink: 0, width: 42, height: 42, borderRadius: '50%', background: C.ink, color: '#fff', display: 'grid', placeContent: 'center', fontFamily: mono, fontWeight: 700, fontSize: 22 }}>{n}</span>
    <div><div style={{ fontSize: 31, lineHeight: 1.42 }}>{act}</div><div style={{ fontSize: 24, color: OK, marginTop: 5 }}>✓ 會看到:{see}</div></div>
  </div>
);
// 鍵帽
const Key = ({ children }: { children: any }) => <span style={{ fontFamily: mono, fontSize: 23, background: '#eceff3', border: '1px solid #cfd5dd', borderRadius: 6, padding: '2px 10px', margin: '0 3px', color: C.ink }}>{children}</span>;
// 按鈕位置小圖(一條工具列,標出該點哪個)
const LocBar = ({ items, hot, caption }: { items: string[]; hot: number; caption: string }) => (
  <div>
    <div style={{ display: 'flex', gap: 8, background: '#0f1117', borderRadius: 10, padding: '10px 12px', alignItems: 'center', width: 'fit-content' }}>
      {items.map((t, i) => (
        <span key={i} style={{ fontFamily: mono, fontSize: 21, padding: '7px 14px', borderRadius: 7, color: i === hot ? '#fff' : '#8b93a3', background: i === hot ? C.orange : 'transparent', border: i === hot ? 'none' : '1px solid #2a3142', fontWeight: i === hot ? 700 : 400 }}>{t}</span>
      ))}
    </div>
    <div style={{ fontSize: 23, color: C.muted, marginTop: 10 }}>↑ {caption}</div>
  </div>
);
const PromptCard = ({ children, size = 27 }: { children: any; size?: number }) => (
  <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, overflow: 'hidden', boxShadow: '0 12px 40px -24px rgba(30,30,40,0.35)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 22px', background: '#fbf3ee', borderBottom: `1px solid ${C.line}` }}><span style={{ width: 12, height: 12, borderRadius: '50%', background: C.orange }} /><span style={{ fontFamily: mono, fontSize: 19, color: C.orange, fontWeight: 700, letterSpacing: '0.08em' }}>複製這段,貼到對話框</span></div>
    <pre style={{ margin: 0, padding: '22px 28px', fontFamily: mono, fontSize: size, lineHeight: 1.5, color: C.ink, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{children}</pre>
  </div>
);
const SuccessRow = ({ children }: { children: any }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16, background: '#eaf6f0', border: '1px solid #bfe6d4', borderRadius: 14, padding: '16px 24px', maxWidth: 1480 }}><span style={{ flexShrink: 0, width: 36, height: 36, borderRadius: '50%', background: OK, color: '#fff', display: 'grid', placeContent: 'center', fontSize: 22, fontWeight: 800 }}>✓</span><span style={{ fontSize: 29, color: '#0c5b3c', fontWeight: 600 }}>{children}</span></div>
);
const Pitfall = ({ items }: { items: [string, string][] }) => (
  <div style={{ background: '#fff7f4', border: `1px solid #f3d0c2`, borderRadius: 16, padding: '26px 32px' }}><div style={{ fontFamily: mono, fontSize: 21, color: RED, fontWeight: 700, marginBottom: 16 }}>卡住了?先看這裡</div><div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>{items.map(([q, a], i) => <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'baseline' }}><span style={{ flexShrink: 0, fontSize: 27, color: RED, fontWeight: 800 }}>?</span><div style={{ fontSize: 28, lineHeight: 1.4 }}><strong>{q}</strong>　<span style={{ color: C.muted }}>{a}</span></div></div>)}</div></div>
);
const Section = ({ no, title, time, sub }: { no: string; title: string; time: string; sub: string }) => (
  <div style={{ ...fill, background: C.ink, color: '#fff' }}><div style={{ ...pad }}><span style={{ fontFamily: mono, fontSize: 26, color: C.orange, letterSpacing: '0.2em' }}>段 {no} ・ {time}</span><div style={{ fontSize: 92, fontWeight: 900, marginTop: 22, letterSpacing: '-0.02em', lineHeight: 1.08 }}>{title}</div><div style={{ fontSize: 35, color: 'rgba(255,255,255,0.72)', marginTop: 26, maxWidth: 1300, lineHeight: 1.5 }}>{sub}</div></div></div>
);
const BreakSlide = () => (
  <div style={{ ...fill, background: '#0e7a52' }}><div style={{ ...pad, color: '#fff' }}><span style={{ fontFamily: mono, fontSize: 26, letterSpacing: '0.2em', opacity: 0.85 }}>BREAK</span><div style={{ fontSize: 118, fontWeight: 900, marginTop: 16 }}>休息 10 分鐘</div><div style={{ fontSize: 35, opacity: 0.9, marginTop: 22 }}>喝口水。回來我們把它變成一個真的、跑得起來的專案。</div></div></div>
);
const IDEMap = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '290px 1fr', gridTemplateRows: '1fr 140px', gap: 12, height: 520, background: '#0f1117', borderRadius: 16, padding: 12, border: '1px solid #232733' }}>
    {[['① 檔案樹', '你的專案檔案在這', { gridRow: '1 / 3' }], ['② 對話框', '用講的,叫 AI 幫你做', {}], ['③ 終端機', '看程式跑、看結果', { gridColumn: '2', gridRow: '2' }]].map(([t, d, st]: any, i) => (
      <div key={i} style={{ ...st, background: i === 1 ? '#1b2030' : '#161a22', border: `2px solid ${i === 1 ? C.orange : '#2a3142'}`, borderRadius: 12, padding: '18px 20px' }}><div style={{ fontFamily: mono, fontSize: 25, color: i === 1 ? C.orange : '#cdd3df', fontWeight: 700 }}>{t}</div><div style={{ fontSize: 23, color: '#8b93a3', marginTop: 8, lineHeight: 1.4 }}>{d}</div></div>
    ))}
  </div>
);
const ChatFrame = () => (
  <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 18, overflow: 'hidden', boxShadow: '0 18px 50px -28px rgba(30,30,40,0.4)' }}>
    <div style={{ display: 'flex', gap: 9, padding: '12px 20px', background: '#f0f2f5', borderBottom: `1px solid ${C.line}` }}>{['#e2570d', '#e6b800', '#0e7a52'].map((c, i) => <span key={i} style={{ width: 13, height: 13, borderRadius: '50%', background: c }} />)}<span style={{ fontFamily: mono, fontSize: 18, color: C.faint, marginLeft: 10 }}>對話框</span></div>
    <div style={{ padding: '20px 26px', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ alignSelf: 'flex-end', maxWidth: '78%', background: '#1f2430', color: '#fff', borderRadius: '16px 16px 4px 16px', padding: '13px 18px', fontSize: 22 }}>請你扮三個角色看這份鍋貼資料…</div>
      {[['資料檢查員', '第 3 筆 -5、第 5 筆 300,怪怪的,要先確認。'], ['分析員', '原味鍋貼資料被汙染,先別拿來算。'], ['決策員', '今天先查那兩筆是不是打錯。']].map(([w, t], i) => (
        <div key={i} style={{ alignSelf: 'flex-start', maxWidth: '88%', background: '#f3f5f8', borderRadius: '16px 16px 16px 4px', padding: '13px 18px' }}><span style={{ fontFamily: mono, fontSize: 18, color: C.orange, fontWeight: 700 }}>{w}</span><div style={{ fontSize: 23, color: C.ink, marginTop: 5, lineHeight: 1.4 }}>{t}</div></div>
      ))}
    </div>
  </div>
);
const ResultFrame = () => {
  const rows: [string, string][] = [['insight', '"資料只有 3 天又被汙染,先別下結論"'], ['anomalies', '["數量 -5 負值", "數量 300 太極端", "售價低於成本"]'], ['risk_level', '"高"'], ['action_items', '["先查那兩筆單據", "退貨另外記,別混進銷售"]']];
  return (
    <div style={{ background: '#0f1117', borderRadius: 18, overflow: 'hidden', border: '1px solid #232733', boxShadow: '0 18px 50px -26px rgba(0,0,0,0.5)' }}>
      <div style={{ display: 'flex', gap: 9, padding: '12px 20px', background: '#161a22', borderBottom: '1px solid #232733' }}>{['#ff5f57', '#febc2e', '#28c840'].map((c, i) => <span key={i} style={{ width: 13, height: 13, borderRadius: '50%', background: c }} />)}<span style={{ fontFamily: mono, fontSize: 18, color: '#6b7280', marginLeft: 10 }}>run.py · 決策摘要</span></div>
      <pre style={{ margin: 0, padding: '22px 28px', fontFamily: mono, fontSize: 23, lineHeight: 1.6, color: '#cdd3df' }}><span style={{ color: '#6b7280' }}>{'{'}</span>{rows.map(([k, v], i) => <div key={i} style={{ paddingLeft: 22 }}><span style={{ color: C.orange }}>"{k}"</span><span style={{ color: '#6b7280' }}>: </span><span style={{ color: '#7fd4a8' }}>{v}</span>{i < rows.length - 1 ? <span style={{ color: '#6b7280' }}>,</span> : null}</div>)}<span style={{ color: '#6b7280' }}>{'}'}</span></pre>
    </div>
  );
};
const RealShot = ({ img, url, eyebrow, title, caption }: { img: string; url: string; eyebrow: string; title: string; caption: string }) => (
  <div style={fill}><div style={{ ...pad }}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}><Eyebrow>{eyebrow}</Eyebrow><span style={{ fontSize: 22, color: OK, fontFamily: mono, fontWeight: 700 }}>● 這是真的,不是示意圖</span></div>
    <Title size={44}>{title}</Title>
    <div style={{ marginTop: 18, background: '#fff', border: `1px solid ${C.line}`, borderRadius: 14, overflow: 'hidden', boxShadow: '0 18px 50px -28px rgba(30,30,40,0.4)', maxWidth: 1540 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 18px', background: '#f0f2f5', borderBottom: `1px solid ${C.line}` }}><div style={{ display: 'flex', gap: 7 }}>{['#ff5f57', '#febc2e', '#28c840'].map((c, i) => <span key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />)}</div><div style={{ flex: 1, background: '#fff', border: `1px solid ${C.line}`, borderRadius: 7, padding: '5px 14px', fontFamily: mono, fontSize: 16, color: C.faint }}>{url}</div></div>
      <img src={img} alt={title} style={{ display: 'block', width: '100%', maxHeight: 540, objectFit: 'cover', objectPosition: 'top' }} />
    </div>
    <div style={{ fontSize: 25, color: C.muted, marginTop: 16 }}>{caption}</div>
  </div><Foot label="U12 · 課1 · 真實成果" /></div>
);

// ══ 開場 ══
const Cover: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>U12 · 第 1 堂 / 共 4 堂 · 4 小時 · 零基礎</Eyebrow>
    <div className="ts-rise" style={{ marginTop: 34 }}><div style={{ fontSize: 116, fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.02 }}>做出你的第一個<br />營運分析助理</div>
      <Lead>今天你會做出一個小幫手,它幫你讀資料、給建議。怎麼做?<B>用講的,AI 幫你做</B>：複製、貼上、點滑鼠,不打程式。</Lead></div>
  </div><div style={{ position: 'absolute', right: 110, bottom: 84, fontFamily: mono, fontSize: 21, color: C.faint }}>AI 營運決策助理 · 大甲鍋貼</div><Foot label="U12 · 課1" /></div>
);
const Outcome: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '560px 1fr', gap: 60, alignItems: 'center' }}>
    <div><Eyebrow>下課時你手上會有</Eyebrow><Title size={56}>一個會「讀資料、<br />挑問題、給建議」<br />的小幫手</Title><div style={{ fontSize: 28, color: C.muted, marginTop: 22, lineHeight: 1.5 }}>右邊就是它跑出來的樣子。現在看不懂沒關係,今天一步步把它做出來。</div></div>
    <div className="ts-rise"><ResultFrame /></div>
  </div><Foot label="U12 · 課1 · 成品" /></div>
);
const Why: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>先講為什麼這對你有用</Eyebrow>
    <Title size={58}>老闆問:「我最近生意到底好不好?」</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 36 }}>
      <Lead>你手上有一張賣鍋貼的資料。以前怎麼辦?自己一行一行看、自己加總、自己想哪裡怪。資料一多,看到眼花,還不一定看得出問題。</Lead>
      <Think q={<>「不就一行行看嗎?有那麼難?」</> } a={<>真正難的不是「看」,是<B>看出哪裡不對勁</B>:哪筆是打錯的、哪個數字怪到不能信。這件事,AI 比我們快、也比我們不會累。</>} />
      <Harvest>這堂課的成品,就是這個「幫你看資料、挑問題、給建議」的小幫手。</Harvest>
    </div>
  </div><Foot label="U12 · 課1 · 為什麼" /></div>
);
const Roadmap: Page = () => {
  const items = [['案例 1', '把畫面變乾淨', '0:15', '手動'], ['案例 2', '請 AI 扮三個人', '0:45', 'AI'], ['案例 3', '跑出結構化分析', '1:40', 'AI'], ['案例 4', '換一個問題再跑', '2:50', 'AI']];
  return (
    <div style={fill}><div style={pad}><Eyebrow>今天的路線 · 四個案例 + 收束</Eyebrow><Title>四個小案例,各約 10 到 30 分鐘</Title>
      <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 22, marginTop: 48 }}>
        {items.map(([a, b, t, k], i) => <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '24px 22px' }}><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ fontFamily: mono, fontSize: 21, color: C.orange, fontWeight: 700 }}>{a}</span><span style={{ fontFamily: mono, fontSize: 18, color: C.faint }}>{t}</span></div><div style={{ fontSize: 30, fontWeight: 800, marginTop: 12, lineHeight: 1.25 }}>{b}</div><div style={{ marginTop: 14 }}><CaseTag kind={k as any} /></div></div>)}
      </div>
      <div style={{ fontSize: 27, color: C.muted, marginTop: 40, lineHeight: 1.5 }}>中間休息一次。現場跟著跑通就好;<B>換自己的內容、多練幾次,是回家作業。</B></div>
    </div><Foot label="U12 · 課1 · 路線" /></div>
  );
};
const Rules: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>上課三個約定</Eyebrow><Title>記住這三件,你就不會慌</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 50, maxWidth: 1450 }}>
      {[['只看三個地方', '檔案樹、對話框、終端機。其他先不管。'], ['只要貼 + 點', '我給你的字,複製、貼上、按 Enter。不用自己想怎麼打。'], ['卡住就舉手', '不要默默卡著。每頁右下角都會告訴你「成功長怎樣」。']].map(([a, b], i) => (
        <div key={i} style={{ display: 'flex', gap: 22, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '22px 30px' }}><span style={{ flexShrink: 0, width: 48, height: 48, borderRadius: '50%', background: C.orange, color: '#fff', display: 'grid', placeContent: 'center', fontFamily: mono, fontWeight: 800, fontSize: 25 }}>{i + 1}</span><div><div style={{ fontSize: 36, fontWeight: 800 }}>{a}</div><div style={{ fontSize: 27, color: C.muted, marginTop: 5 }}>{b}</div></div></div>
      ))}
    </div>
  </div><Foot label="U12 · 課1 · 約定" /></div>
);

// ══ 段 1 ══
const Sec1: Page = () => <Section no="1" title="進場:把畫面整理乾淨" time="0:15 - 0:45" sub="第一次進開發環境。先不寫任何東西,只把畫面弄到你不害怕。" />;
const C1Head: Page = () => (
  <div style={fill}><div style={{ ...pad }}><CaseHead no="1" time="0:15 - 0:45" kind="手動" title="打開雲端環境,把畫面整理到只剩三個地方" />
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 40 }}>
      <Lead>這個案例你不用 AI,自己手動點。為什麼?因為這是你第一次看到開發環境,先親手熟悉,之後跟 AI 合作時才不會迷路。</Lead>
      <Think q={<>「我又不是工程師,看到那種畫面就怕。」</>} a={<>那個畫面 99% 的按鈕你一輩子都不會碰。我們等下就把多餘的<B>全部收起來</B>,只留你真正會用的三個地方。</>} />
    </div>
  </div><Foot label="U12 · 課1 · 案例1" /></div>
);
const C1Step1: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 1 · 步驟 1</Eyebrow><Title size={48}>打開連結,等它準備好</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 30, maxWidth: 1500 }}>
      <Atom n={1} act={<>打開老師傳的<B>連結</B>(在 LINE 群 / 課程頁),用滑鼠點一下。</>} see="瀏覽器跳出一個新分頁。" />
      <Atom n={2} act={<>分頁上方可能出現「Create / 建立 codespace」按鈕,就<B>點它一次</B>(沒有就跳過)。</>} see="畫面開始載入、跑一條綠色進度條。" />
      <Atom n={3} act={<>什麼都別按,<B>等它跑完</B>(第一次約 1~2 分鐘)。</>} see="進度條消失,出現一個像編輯器的黑底畫面。" />
      <Atom n={4} act={<>看到<B>左邊有一排檔案、中間一大片空白</B>,就成功了。</>} see="左邊檔案、中間空白、下面一條黑色區域。" />
    </div>
    <div style={{ marginTop: 26 }}><SuccessRow>瀏覽器裡出現一個像編輯器的畫面 = 環境開好了。</SuccessRow></div>
  </div><Foot label="U12 · 課1 · 案例1" /></div>
);
const C1Map: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '560px 1fr', gap: 50, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div><Eyebrow>案例 1 · 步驟 2</Eyebrow><Title size={50}>這輩子只要看三個地方</Title></div>
      <Analogy>就像進別人家的廚房,你不用認識每個櫃子。你只要知道:<B>食材在哪(檔案樹)、怎麼下指令(對話框)、爐火結果在哪(終端機)</B>,就能做菜了。</Analogy>
      <Harvest>檔案樹放東西、對話框下指令、終端機看結果。其他先收起來。</Harvest>
    </div>
    <div className="ts-rise"><IDEMap /></div>
  </div><Foot label="U12 · 課1 · 案例1" /></div>
);
const C1Step3: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 1 · 步驟 3</Eyebrow><Title size={48}>把多餘的東西收起來</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28, maxWidth: 1500 }}>
      <Atom n={1} act={<>看<B>最左邊那排直的小圖示</B>。最上面那個(像兩張紙疊著)就是檔案,我們只用它。</>} see="左邊一排直立的圖示。" />
      <Atom n={2} act={<>其他圖示(放大鏡、四方塊…)<B>看到也別點</B>。不小心點開了,再點一次就收起來。</>} see="左邊那欄展開或收合。" />
      <Atom n={3} act={<>畫面右下角若跳出小視窗,把滑鼠移上去、按它的 <Key>×</Key> 關掉。</>} see="小視窗消失。" />
    </div>
    <div style={{ marginTop: 26 }}><SuccessRow>畫面乾乾淨淨,只剩:左邊檔案、中間空白、下面終端機 = 成功。</SuccessRow></div>
  </div><Foot label="U12 · 課1 · 案例1" /></div>
);
const C1Pit: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>案例 1 · 卡住了?</Eyebrow><Title size={50}>最常見的兩個狀況</Title>
    <div className="ts-rise" style={{ marginTop: 40, maxWidth: 1480 }}><Pitfall items={[['進度條跑很久、好像卡住了:', '正常,第一次開要一兩分鐘。超過五分鐘還沒好,再舉手。'], ['畫面跟老師的不一樣、找不到對話框:', '側邊或右下角找一下,或直接舉手,我過去幫你叫出來。']]} /></div>
  </div><Foot label="U12 · 課1 · 案例1" /></div>
);

// ══ 段 2 ══
const Sec2: Page = () => <Section no="2" title="請 AI 一次扮三個人" time="0:45 - 1:30" sub="今天的重頭戲。你會親眼看到:貼一段話,AI 就分三個角色,幫你把資料看一遍。" />;
const C2Head: Page = () => (
  <div style={fill}><div style={{ ...pad }}><CaseHead no="2" time="0:45 - 1:30" kind="AI" title="一個人看會漏,那 ── 怎麼辦呢?" />
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 38 }}>
      <Lead>你自己一個人從頭看到尾,看到第 50 筆就累了、就會漏。這不是你的問題,人就是這樣。<B>怎麼辦呢?</B></Lead>
      <Lead><O>找人分工。</O> 一個人專心挑錯、一個人專心分析、一個人專心給建議：我們等下就請 AI 一次扮這三個人。</Lead>
    </div>
  </div><Foot label="U12 · 課1 · 案例2" /></div>
);
const C2Concept: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>案例 2 · 為什麼要三個人</Eyebrow><Title size={50}>三個人,各做一件事,互相補</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 32 }}>
      <Analogy>就像一家餐廳:<B>備料的</B>先挑掉壞掉的菜、<B>掌廚的</B>專心煮、<B>出菜的</B>負責擺盤送出。如果一個人全包,忙起來就會把壞菜也煮下去。分工,是為了<B>不要把錯誤帶到下一步</B>。</Analogy>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
        {[['資料檢查員', '先挑出怪數字、要人確認的地方。不分析。'], ['分析員', '在乾淨資料上看趨勢、看風險。每句話有依據。'], ['決策員', '整理成「店長現在可以做什麼」。']].map(([a, b], i) => (
          <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '20px 22px' }}><div style={{ fontSize: 28, fontWeight: 800, color: C.orange }}>{i + 1}. {a}</div><div style={{ fontSize: 24, color: C.muted, marginTop: 8, lineHeight: 1.4 }}>{b}</div></div>
        ))}
      </div>
      <Harvest>檢查員挑乾淨 → 分析員才不會被髒資料帶歪 → 決策員才給得出能用的建議。</Harvest>
    </div>
  </div><Foot label="U12 · 課1 · 案例2" /></div>
);
const C2Step1: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 步驟 1</Eyebrow><Title size={48}>把對話框叫出來</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 26, maxWidth: 1500 }}>
      <Atom n={1} act={<>看左邊那排圖示,找到<B>對話框圖示</B>(通常像一個對話泡泡 / 星星),點它一下。</>} see="畫面右側或左側打開一個聊天面板。" />
      <Atom n={2} act={<>第一次它會請你<B>登入你自己的帳號</B>。跟著畫面按「Sign in / 登入」「Authorize / 同意」。</>} see="登入完,聊天面板可以打字了。" />
      <Atom n={3} act={<>用滑鼠<B>點一下最下面的輸入框</B>(寫著「Ask… / 輸入…」那條)。</>} see="輸入框出現一條閃動的游標。" />
    </div>
    <div style={{ marginTop: 24 }}><SuccessRow>輸入框游標在閃、可以打字 = 準備好了。</SuccessRow></div>
  </div><Foot label="U12 · 課1 · 案例2" /></div>
);
const C2Paste: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 步驟 2 · 怎麼「複製貼上」</Eyebrow><Title size={48}>三個動作,把字送進去</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 26, maxWidth: 1500 }}>
      <Atom n={1} act={<>到<B>下一頁</B>的框,按右上角的<B>「複製」鈕</B>(或滑鼠從頭選到尾、按 <Key>Ctrl</Key>+<Key>C</Key>)。</>} see="出現「已複製 / Copied」,或反白變藍。" />
      <Atom n={2} act={<>回到對話框,點一下輸入框,按 <Key>Ctrl</Key>+<Key>V</Key> 貼上。</>} see="剛剛那整段文字出現在輸入框裡。" />
      <Atom n={3} act={<>按一下鍵盤的 <Key>Enter</Key> 把它送出去。</>} see="文字送出,下面開始一行一行跑出回覆。" />
    </div>
    <div style={{ fontSize: 25, color: C.muted, marginTop: 22 }}>(Mac 的話,<Key>Ctrl</Key> 換成 <Key>⌘ Cmd</Key>。)</div>
  </div><Foot label="U12 · 課1 · 案例2" /></div>
);
const C2Prompt: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>案例 2 · 步驟 2 · Prompt 卡</Eyebrow><Title size={46}>把這整段貼進去,按 Enter</Title>
    <div style={{ marginTop: 22 }}><PromptCard size={25}>{`請你同時扮演三個角色,一棒接一棒看下面這份鍋貼店資料:
1. 資料檢查員:只挑出看起來怪、需要人確認的地方(例如負數、極端值)。
2. 分析員:根據檢查結果,說出趨勢與風險,每個結論都要有依據。
3. 決策員:整理成「店長今天可以做什麼」的建議。

資料:
date,store,item,qty,unit_price,cost
2026-06-01,大甲店,原味鍋貼,120,5,3
2026-06-02,大甲店,原味鍋貼,-5,5,3
2026-06-03,大甲店,原味鍋貼,300,5,3`}</PromptCard></div>
  </div><Foot label="U12 · 課1 · 案例2" /></div>
);
const C2Explain: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 這段話為什麼這樣寫</Eyebrow><Title size={50}>拆給你看,每一句都有用意</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 38, maxWidth: 1500 }}>
      {[['「扮演三個角色,一棒接一棒」', '叫它分工。不分工,它常常挑一半就急著下結論。'], ['「只挑怪的,例如負數、極端值」', '我故意塞了 -5 跟 300。等下看它抓不抓得到 ── 這是在測它。'], ['「每個結論都要有依據」', '這句最重要。逼它說「為什麼」,它就不敢憑空亂講。'], ['「店長今天可以做什麼」', '把分析變成能行動的建議,不是給你一堆看不懂的數字。']].map(([a, b], i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '540px 1fr', gap: 24, alignItems: 'baseline', borderBottom: `1px dashed ${C.line}`, paddingBottom: 13 }}><span style={{ fontFamily: mono, fontSize: 24, color: C.orange }}>{a}</span><span style={{ fontSize: 28, color: C.ink, lineHeight: 1.4 }}>{b}</span></div>
      ))}
    </div>
    <div style={{ marginTop: 24 }}><Harvest>寫 prompt 的訣竅:把你「希望它怎麼做」一條一條講清楚,它就照做。</Harvest></div>
  </div><Foot label="U12 · 課1 · 案例2" /></div>
);
const C2See: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '540px 1fr', gap: 54, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div><Eyebrow>案例 2 · 你會看到</Eyebrow><Title size={52}>對話框,啪,出三段</Title></div>
      <Lead>你會發現,它真的把 <O>-5</O> 跟 <O>300</O> 挑出來了,還說「要先確認」。你只是貼了一段話,沒寫半行程式。</Lead>
      <Harvest>這就是「分工」的感覺:挑錯、分析、給建議,一棒接一棒。</Harvest>
    </div>
    <div className="ts-rise"><ChatFrame /></div>
  </div><Foot label="U12 · 課1 · 案例2" /></div>
);
const C2Read: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 讀懂它回了什麼</Eyebrow><Title size={50}>三段,各看一件事</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 36, maxWidth: 1500 }}>
      {[['第一段(檢查員)', '挑出 -5 是負數、300 太大,說這兩筆要先確認。', '它沒有自作主張刪掉,只是「標記」,把判斷權留給你。'], ['第二段(分析員)', '說這品項資料被汙染,先別拿來算營收。', '你會發現它不會硬算 ── 因為髒資料算出來會騙人。'], ['第三段(決策員)', '叫你今天先去查那兩筆是不是打錯。', '這是「能做的事」,不是空話。']].map(([a, b, c], i) => (
        <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '18px 24px' }}><span style={{ fontFamily: mono, fontSize: 21, color: C.orange, fontWeight: 700 }}>{a}</span><div style={{ fontSize: 28, marginTop: 6, lineHeight: 1.35 }}>{b}</div><div style={{ fontSize: 23, color: C.muted, marginTop: 6 }}>↳ {c}</div></div>
      ))}
    </div>
  </div><Foot label="U12 · 課1 · 案例2" /></div>
);
const C2Real: Page = () => (
  <RealShot img={traceShot} url="stanley-1013.github.io/chainsea-leacture/trace/" eyebrow="案例 2 · 真實成果"
    title="三角色真的會這樣一棒接一棒跑" caption="這是助理一次真實執行的歷程:資料檢查員 → 分析洞察員 → 決策摘要員。左邊每一條都是一次真的跑,點開看得到每個角色的輸入輸出。" />
);
const C2Pit: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>案例 2 · 卡住了?</Eyebrow><Title size={50}>三個常見狀況</Title>
    <div className="ts-rise" style={{ marginTop: 38, maxWidth: 1500 }}><Pitfall items={[['貼上去沒反應:', '看看有沒有按到 Enter;或它還在想,等個幾秒。'], ['它用英文回我:', '在後面補一句「請用繁體中文回答」再送一次。'], ['它沒抓到 -5 跟 300:', '把資料再貼一次,確認三筆都有貼進去。']]} /></div>
  </div><Foot label="U12 · 課1 · 案例2" /></div>
);
const C2Practice: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 換句話,你來指揮</Eyebrow><Title size={52}>同一個對話,接著問它</Title>
    <div style={{ fontSize: 29, color: C.muted, margin: '22px 0 22px', maxWidth: 1400 }}>貼這句,看它怎麼把剛剛的分析,濃縮成一句重點:</div>
    <PromptCard size={28}>{`同一份資料,請只用一句話告訴我:今天我最該擔心什麼?`}</PromptCard>
    <div style={{ marginTop: 30 }}><SuccessRow>它能用一句話回你重點 = 你已經會「用講的」指揮它了。</SuccessRow></div>
  </div><Foot label="U12 · 課1 · 案例2" /></div>
);
const Break1: Page = () => <BreakSlide />;

// ══ 段 3 ══
const Sec3: Page = () => <Section no="3" title="跑出「每次都一樣」的結果" time="1:40 - 2:40" sub="從聊天升級成一個小專案。重點:讓它每次都用固定四欄回你,這樣才信得過、才能自動化。" />;
const C3Head: Page = () => (
  <div style={fill}><div style={{ ...pad }}><CaseHead no="3" time="1:40 - 2:40" kind="AI" title="聊天很好,但 ── 怎麼天天用?" />
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 38 }}>
      <Lead>剛剛用聊的很順,但你總不能每天重貼一次那段話、每次格式還不一樣吧?<B>怎麼辦呢?</B></Lead>
      <Lead>我們用一個現成的小專案(starter),把它<O>固定下來</O>:每次跑,都用一樣的四個欄位回你。</Lead>
    </div>
  </div><Foot label="U12 · 課1 · 案例3" /></div>
);
const C3ForkWhat: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 步驟 1 · 先懂 fork</Eyebrow><Title size={50}>fork = 把老師的影印一份</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 30 }}>
      <Analogy><B>fork</B> 聽起來很專業,其實就是<O>「把老師的食譜影印一份,變成你自己的」</O>而已。你在影本上塗塗改改,不會動到老師的正本。</Analogy>
      <Harvest>所以放心亂改,改壞了刪掉再 fork 一次就好。</Harvest>
    </div>
  </div><Foot label="U12 · 課1 · 案例3" /></div>
);
const C3Fork: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 步驟 1 · 動作</Eyebrow><Title size={48}>複製一份、開出環境</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 24, maxWidth: 1520 }}>
      <Atom n={1} act={<>點老師發的<B>範本連結</B>,會看到一個 GitHub 專案頁。</>} see="網頁上方有專案名稱。" />
      <Atom n={2} act={<>看<B>右上角</B>,找到 <Key>Fork</Key> 按鈕,點它;下一頁按綠色 <Key>Create fork</Key>。</>} see="網址變成「你的帳號 / 專案名」。" />
      <Atom n={3} act={<>在你這份上,點綠色的 <Key>&lt;&gt; Code</Key> 按鈕。</>} see="跳出一個小選單。" />
      <Atom n={4} act={<>選上面的 <Key>Codespaces</Key> 分頁 → 按 <Key>Create codespace</Key>。</>} see="開始載入開發環境(跟案例 1 一樣)。" />
    </div>
    <div style={{ marginTop: 16 }}><LocBar items={['Code ⌄', 'Issues', 'Pull requests', 'Fork']} hot={3} caption="Fork 在專案頁的右上角這一排" /></div>
  </div><Foot label="U12 · 課1 · 案例3" /></div>
);
const C3Prompt: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>案例 3 · 步驟 2 · Prompt 卡</Eyebrow><Title size={46}>貼這段,請它跑起來</Title>
    <div style={{ marginTop: 22 }}><PromptCard size={27}>{`請幫我跑這個專案的 run.py,讀 data 資料夾裡的鍋貼資料,
然後把結果用四個欄位整理好給我:
insight(一句洞察)、anomalies(可疑的地方)、
risk_level(風險高中低)、action_items(建議行動)。`}</PromptCard></div>
    <div style={{ fontSize: 27, color: C.muted, marginTop: 26 }}>它可能會先幫你裝一些東西、跑幾行字,正常的,等它跑完。</div>
  </div><Foot label="U12 · 課1 · 案例3" /></div>
);
const C3See: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '540px 1fr', gap: 54, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div><Eyebrow>案例 3 · 你會看到</Eyebrow><Title size={52}>固定的四個欄位</Title></div>
      <Lead>終端機最後會印出像右邊這樣一段。不管你跑幾次,它<B>都長這個樣子</B>:一句洞察、可疑處、風險、建議。</Lead>
    </div>
    <div className="ts-rise"><ResultFrame /></div>
  </div><Foot label="U12 · 課1 · 案例3" /></div>
);
const C3Fields: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 四個欄位各是什麼</Eyebrow><Title size={50}>看懂這四欄,你就看得懂它的報告</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 18, marginTop: 38, maxWidth: 1520 }}>
      {[['insight', '一句話總結:最近生意的關鍵發現。先看這句抓重點。'], ['anomalies', '看起來怪、需要你確認的地方(像那個 -5 跟 300)。'], ['risk_level', '風險高 / 中 / 低,讓你一眼知道嚴不嚴重。'], ['action_items', '具體可以做的事,照著做就好,不是空話。']].map(([k, v], i) => (
        <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '22px 26px' }}><div style={{ fontFamily: mono, fontSize: 26, color: C.orange, fontWeight: 700 }}>{k}</div><div style={{ fontSize: 27, marginTop: 8, lineHeight: 1.4 }}>{v}</div></div>
      ))}
    </div>
  </div><Foot label="U12 · 課1 · 案例3" /></div>
);
const C3Why: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>案例 3 · 為什麼要「固定」四欄</Eyebrow><Title size={54}>每次都長一樣,才信得過。</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 32 }}>
      <Analogy>就像<B>發票</B>:格式固定,你才掃一眼就知道去哪看金額、去哪看品項。如果每張發票長得都不一樣,你每次都要重新找,還會看錯。</Analogy>
      <Think q={<>「規定這麼死,不會很麻煩嗎?」</>} a={<>剛好相反。<B>格式固定,之後才能自動接下去</B> ── 例如自動把摘要傳到你的 LINE。格式亂跳,什麼都接不了。</>} />
      <Harvest>規定格式不是龜毛,是讓 AI 的輸出「可以被信任、可以被自動化」。</Harvest>
    </div>
  </div><Foot label="U12 · 課1 · 案例3" /></div>
);
const C3Pit: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>案例 3 · 卡住了?</Eyebrow><Title size={50}>看到紅紅的字別怕</Title>
    <div className="ts-rise" style={{ marginTop: 38, maxWidth: 1500 }}><Pitfall items={[['它說「還沒有可用的金鑰」:', '這不是壞掉,是 key 還沒設好。跟著畫面提示設一下,或舉手。'], ['跑出一堆紅字:', '把那段紅字「整段複製」,貼回對話框問它:這是什麼意思、怎麼修。'], ['跑很久沒結束:', '正常,它在想。超過一兩分鐘還沒好再舉手。']]} /></div>
  </div><Foot label="U12 · 課1 · 案例3" /></div>
);

// ══ 段 4 ══
const Sec4: Page = () => <Section no="4" title="換個問題,你來指揮" time="2:50 - 3:10" sub="同一份資料、同一個助理,你只要換問題,輸出就跟著變。這就是核心能力。" />;
const C4Prompt: Page = () => (
  <div style={fill}><div style={{ ...pad }}><CaseHead no="4" time="2:50 - 3:10" kind="AI" title="換成你想問的問題,看輸出怎麼變" />
    <div style={{ fontSize: 29, color: C.muted, margin: '20px 0 22px', maxWidth: 1400, lineHeight: 1.5 }}>在對話框接著貼這段。注意:你沒有改任何程式,只是<B>換了一個問題</B>。</div>
    <PromptCard size={27}>{`一樣的資料,改問:這三天裡,哪一天最不正常?為什麼?
請一樣用那四個欄位回答我。`}</PromptCard>
    <div style={{ marginTop: 28 }}><SuccessRow>輸出跟著你的問題改變 = 你已經會用講的指揮 AI 了。</SuccessRow></div>
  </div><Foot label="U12 · 課1 · 案例4" /></div>
);
const C4Practice: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>案例 4 · 換你自己的問題</Eyebrow><Title size={56}>現在,你來出題</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 32 }}>
      <Lead>想一個你自己會想問老闆的問題,打進去試試。例如:「外送跟內用,哪個比較賺?」</Lead>
      <Think q={<>「我問得不夠專業,它會不會聽不懂?」</>} a={<>不會。你<B>用平常講話的方式問就好</B>。記住一個訣竅:問題越<O>具體</O>,它答得越準。「最近怎樣」很模糊;「這三天哪天最不正常」就很好答。</>} />
    </div>
  </div><Foot label="U12 · 課1 · 案例4" /></div>
);

// ══ 段 5 ══
const Sec5: Page = () => <Section no="5" title="收束 + 一個重要觀念" time="3:20 - 4:00" sub="最後,一句你一定要帶走的話,還有今天的回家作業。" />;
const Punchline: Page = () => (
  <div style={{ ...fill, background: C.ink, color: '#fff' }}><div style={{ ...pad }}>
    <Eyebrow>今天最重要的一句</Eyebrow>
    <div style={{ fontSize: 84, fontWeight: 900, lineHeight: 1.18, marginTop: 28, maxWidth: 1520, letterSpacing: '-0.02em' }}>AI 給的每個結論,<br />都要說得出<span style={{ color: C.orange }}>依據</span>;<br />說不出,就先別信。</div>
    <div style={{ fontSize: 31, color: 'rgba(255,255,255,0.7)', marginTop: 34, maxWidth: 1380, lineHeight: 1.55 }}>因為 AI 講錯的時候,跟講對的時候<B style={{ color: '#fff' }}>一樣有自信</B>。你問它「為什麼」,它答得出來,你才採用;答不出來,那很可能是它在唬你。</div>
  </div><div style={{ position: 'absolute', left: 110, bottom: 44, fontFamily: mono, fontSize: 19, color: 'rgba(255,255,255,0.5)' }}>U12 · 課1 · 記住這句</div></div>
);
const Human: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>一個重要觀念 · 人工審核</Eyebrow><Title size={52}>什麼情況,先別急著信它</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 38, maxWidth: 1480 }}>
      {['資料明顯有缺、或有人打錯數字的時候。', '它講得很順,但說不出「為什麼」的時候。', '它的建議會花到錢、或影響顧客的時候。'].map((t, i) => (
        <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '18px 26px' }}><span style={{ flexShrink: 0, width: 36, height: 36, borderRadius: '50%', background: RED, color: '#fff', display: 'grid', placeContent: 'center', fontSize: 22, fontWeight: 800 }}>!</span><span style={{ fontSize: 30 }}>{t}</span></div>
      ))}
    </div>
    <div style={{ marginTop: 26 }}><Harvest>AI 幫你看得更快,但最後拍板、負責的人,永遠是你。</Harvest></div>
  </div><Foot label="U12 · 課1 · 人工審核" /></div>
);
const Recap: Page = () => {
  const pts = [['資料 → 洞察 → 行動', '先檢查資料,再問 AI。資料髒,答案就髒。'], ['三個角色接力', '分工,是為了不把錯誤帶到下一步。'], ['固定四欄輸出', '每次一樣,才信得過、才能自動化。']];
  return (
    <div style={fill}><div style={pad}><Eyebrow>今天我們學了三件事</Eyebrow>
      <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 48, maxWidth: 1500 }}>
        {pts.map(([a, b], i) => <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}><span style={{ fontFamily: mono, fontSize: 38, color: C.orange, fontWeight: 800, lineHeight: 1.2 }}>{String(i + 1).padStart(2, '0')}</span><div><div style={{ fontSize: 40, fontWeight: 800 }}>{a}</div><div style={{ fontSize: 28, color: C.muted, marginTop: 4 }}>{b}</div></div></div>)}
      </div>
    </div><Foot label="U12 · 課1 · 收束" /></div>
  );
};
const Homework: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>回家作業 · 輕量,只要一件</Eyebrow><Title>把今天的助理,換個問題再跑一次</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 46, maxWidth: 1480 }}>
      <div style={{ background: C.card, border: `2px solid ${C.orange}`, borderRadius: 16, padding: '26px 34px' }}><span style={{ fontFamily: mono, fontSize: 22, color: C.orange, fontWeight: 700 }}>必做(15 分鐘)</span><div style={{ fontSize: 35, marginTop: 10, lineHeight: 1.4 }}>用<B>另一個管理者會問的問題</B>跑一次,並記下<B>一個它的錯誤或限制</B>。</div><div style={{ fontSize: 25, color: C.muted, marginTop: 8 }}>記限制這件事很重要 ── 你越知道它哪裡不行,就越會用它。</div></div>
      <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '22px 34px' }}><span style={{ fontFamily: mono, fontSize: 22, color: C.muted, fontWeight: 700 }}>選做</span><div style={{ fontSize: 29, marginTop: 8, color: C.muted, lineHeight: 1.4 }}>換成你自己的資料,重做一次資料檢查。</div></div>
    </div>
  </div><Foot label="U12 · 課1 · 回家作業" /></div>
);
const Next: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>下一堂預告</Eyebrow><Title size={60}>把今天的單一分析,<br />長成一個「三角色專案」</Title><div style={{ fontSize: 32, color: C.muted, marginTop: 30, lineHeight: 1.5 }}>有任何卡住的,現在可以舉手,我們留十分鐘自由練習。今天辛苦了。</div></div><Foot label="U12 · 課1 · 下一堂" /></div>
);

export const meta: SlideMeta = { title: 'U12 課1：做出你的第一個營運分析助理', createdAt: '2026-06-22T10:00:00.000Z' };

export const notes: (string | undefined)[] = [
  '各位同學大家好啊,我們開始上課吧。今天是 U12 第一堂,也是整門課第一次進開發環境,所以我會帶得很慢、很軟。一句話講今天:你會用 AI 做出第一個會讀資料、給你建議的小幫手。全程就是複製、貼上、點滑鼠,不用打程式。',
  '先讓大家看一下,下課的時候你手上會有什麼。右邊這個就是它跑出來的樣子:一句洞察、可疑的地方、風險、還有建議。現在看不懂沒關係,今天我們會一步一步把它做出來。',
  '我先不講工具,先講為什麼這對你有用。老闆問你最近生意好不好,你以前要自己一行行看、自己算,很累。你可能會想說,看資料有那麼難嗎?難的不是看,是看出哪裡不對勁:哪筆打錯了、哪個數字怪到不能信。這件事 AI 比我們快、又不會累。',
  '看一下今天的路線,心裡有個底就不會慌。四個小案例,中間休息一次。第一個案例是手動的、後面是 AI。現場跟著跑通就好,換自己的東西、多練幾次是回家作業。',
  '上課前跟大家約定三件事:只看三個地方、只要貼加點、卡住就舉手。每一頁右下角我都會告訴你成功長怎樣。',
  '好,進入第一段:進場,把畫面整理乾淨。這一段先不寫任何東西,只把畫面弄到你不害怕。',
  '案例一是手動的。為什麼不直接用 AI?因為這是你第一次看到這個畫面,先親手熟悉。你可能會想說,我又不是工程師、看到那種畫面就怕。放心,那畫面九成的按鈕你一輩子不會碰,我們等下把多餘的全收起來。',
  '步驟一,點開連結,它在瀏覽器開一個開發環境。第一次會跑綠色進度條,正常的別關掉。看到左邊有檔案、中間空白就開好了。',
  '步驟二,記住這個比方:就像進別人家的廚房,你不用認識每個櫃子,只要知道食材在哪、怎麼下指令、結果在哪。對應到這裡就是檔案樹、對話框、終端機。橘色框那個對話框最常用。',
  '步驟三,把多餘側欄收起來。左邊小圖示只用最上面那個檔案,跳出視窗按叉關掉。目標是畫面乾乾淨淨只剩三塊。',
  '卡住的話兩個常見狀況:進度條久是正常、等一兩分鐘;畫面跟我不一樣就舉手。好,這段成功我們進重頭戲。',
  '第二段,今天的重頭戲:請 AI 一次扮三個人。',
  '先講為什麼。你一個人從頭看到尾,看到第五十筆就累了、就會漏,這不是你的問題,人就是這樣。怎麼辦呢?找人分工。一個挑錯、一個分析、一個給建議。',
  '為什麼分三個?打個比方,像餐廳:備料的先挑掉壞菜、掌廚的專心煮、出菜的擺盤。一個人全包,忙起來就把壞菜也煮下去。分工是為了不把錯誤帶到下一步。所以檢查員挑乾淨,分析員才不會被髒資料帶歪,決策員才給得出能用的建議。',
  '步驟一,把對話框叫出來。看左邊圖示找對話泡泡點開;第一次要登入你自己的帳號,跟著按登入、同意;最後點一下最下面的輸入框,看到游標在閃就好。',
  '這頁專門教複製貼上,很多人卡在這。下一頁那個框右上角有複製鈕,按它;或滑鼠從頭選到尾按 Ctrl C。回對話框點輸入框按 Ctrl V 貼上,再按 Enter 送出。Mac 的 Ctrl 換成 Cmd。',
  '步驟二,這就是 Prompt 卡,整段原封不動複製、貼上、按 Enter。注意我在資料裡塞了 -5 跟 300,等下看它抓不抓得到。',
  '貼之前帶大家看這段為什麼這樣寫。第一句叫它分工,不分工它常常挑一半就下結論;第二句叫它挑怪的,我故意塞了 -5 跟 300 是在測它;第三句逼它講依據,它就不敢亂講;第四句把分析變成能做的事。訣竅就是:你希望它怎麼做,一條一條講清楚。',
  '貼下去按 Enter,對話框啪出三段。你會發現它真的把 -5 跟 300 挑出來、還說要先確認。你只是貼了一段話,沒寫半行程式。這就是分工的感覺。',
  '我們一段一段讀。第一段檢查員只「標記」不自作主張刪,把判斷權留給你;第二段分析員不硬算,因為髒資料算出來會騙人;第三段決策員給的是能做的事,不是空話。',
  '我給大家看個真的,不是示意圖。這是同一套助理真的跑出來的歷程,放在網路上,左邊每條都是一次跑,點開就是三個角色各自的輸入輸出。你做出來的就是這個。',
  '卡住的話:沒反應看有沒有按 Enter;用英文回你就補一句請用繁體中文;沒抓到 -5 跟 300 就把資料再貼一次。',
  '換你指揮看看,接著貼這句,看它怎麼把分析濃縮成一句重點。它能用一句話回你,代表你會用講的指揮它了。',
  '好,我們休息十分鐘。喝口水,回來我們把它變成一個真的、跑得起來的專案。',
  '回來了。第三段:跑出每次都一樣的結果。',
  '案例三,剛剛用聊的很順,但你總不能每天重貼一次、格式還每次不一樣吧?怎麼辦呢?我們用一個現成小專案,把它固定下來。',
  '先解釋 fork。fork 聽起來專業,其實就是把老師的食譜影印一份變你自己的,你在影本上塗改不會動到正本。所以放心亂改,改壞了刪掉再 fork 一次就好。',
  '步驟一的動作:點範本連結看到 GitHub 專案頁;右上角找到 Fork 按下去、再按 Create fork,網址就變成你的帳號;然後點綠色的 Code,選 Codespaces 分頁,按 Create codespace,它就開始載入。',
  '步驟二,貼這段,請它跑 run.py、讀資料、用四欄整理。它會先裝東西、跑幾行字,正常的等它跑完。',
  '跑完終端機印出像右邊這段。不管跑幾次,它都長這個樣子:一句洞察、可疑處、風險、建議。',
  '看懂這四欄:insight 先看抓重點、anomalies 是要你確認的地方、risk_level 一眼看嚴不嚴重、action_items 照著做就好。',
  '這裡特別講為什麼要固定。打個比方,像發票:格式固定你才掃一眼就知道去哪看金額。你可能會想說規定這麼死很麻煩?剛好相反,格式固定之後才能自動接下去,例如自動傳 LINE;格式亂跳什麼都接不了。',
  '看到紅字別怕:說沒金鑰不是壞掉是 key 沒設;一堆紅字就整段複製貼回去問它怎麼修;跑很久是它在想。',
  '第四段很短:換個問題,你來指揮。',
  '接著貼這段,改問哪一天最不正常。注意你沒改任何程式,只換了一個問題。輸出跟著變,代表你會用講的指揮 AI 了。',
  '現在換你出題,想一個你會問老闆的問題打進去。你可能會想說問得不夠專業它聽不懂?不會,用平常講話問就好,訣竅是問題越具體答得越準。',
  '最後一段,收束加一個重要觀念。',
  '今天最重要的一句:AI 給的每個結論都要說得出依據,說不出就先別信。為什麼?因為 AI 講錯的時候跟講對的時候一樣有自信。你問它為什麼,答得出來才採用,答不出來很可能是在唬你。',
  '人工審核:什麼情況先別信它?資料有缺或有人打錯、它講得很順卻說不出為什麼、它的建議會花到錢或影響顧客。AI 幫你看得快,但拍板負責的永遠是你。',
  '收尾,今天三件事:先檢查資料再問 AI、三個角色分工不把錯誤帶下去、固定四欄才能信任跟自動化。',
  '回家作業只有一件:用另一個問題跑一次,記下一個它的錯誤或限制。記限制很重要,你越知道它哪裡不行就越會用它。不要回家大改,沿用今天的版本。',
  '下一堂,我們把今天的單一分析長成一個三角色專案。有卡住的舉手,留十分鐘自由練習。今天辛苦了。',
];

export default [
  Cover, Outcome, Why, Roadmap, Rules,
  Sec1, C1Head, C1Step1, C1Map, C1Step3, C1Pit,
  Sec2, C2Head, C2Concept, C2Step1, C2Paste, C2Prompt, C2Explain, C2See, C2Read, C2Real, C2Pit, C2Practice, Break1,
  Sec3, C3Head, C3ForkWhat, C3Fork, C3Prompt, C3See, C3Fields, C3Why, C3Pit,
  Sec4, C4Prompt, C4Practice,
  Sec5, Punchline, Human, Recap, Homework, Next,
] satisfies Page[];
