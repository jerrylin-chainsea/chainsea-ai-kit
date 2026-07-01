import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';
import codexMarketShot from './assets/codex-marketplace.png';
import codexIdeShot from './assets/codex-ide-docs.png';

// ── 統一風格 tokens(沿用 U12-14 教學系列)────────────────────────────────
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
const OK = '#0e7a52'; const RED = '#c0392b'; const BLUE = '#2f5fb3'; const AMBER = '#c47d12'; const PUR = '#7a4cc4';
const mono = '"JetBrains Mono", "SF Mono", ui-monospace, monospace';

const css = `@keyframes ts-up{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.ts-rise>*{animation:ts-up .55s cubic-bezier(.16,1,.3,1) both}
.ts-rise>*:nth-child(2){animation-delay:.05s}.ts-rise>*:nth-child(3){animation-delay:.10s}
.ts-rise>*:nth-child(4){animation-delay:.15s}.ts-rise>*:nth-child(5){animation-delay:.20s}.ts-rise>*:nth-child(6){animation-delay:.25s}
@media (prefers-reduced-motion:reduce){.ts-rise>*{animation:none!important}}`;
if (typeof document !== 'undefined' && !document.getElementById('ts-u11c3')) {
  const el = document.createElement('style'); el.id = 'ts-u11c3'; el.textContent = css; document.head.appendChild(el);
}
const fill = { width: '100%', height: '100%', background: C.bg, color: C.ink, fontFamily: 'var(--osd-font-body)', position: 'relative' as const, overflow: 'hidden', display: 'flex' as const, flexDirection: 'column' as const, justifyContent: 'center' as const };
const pad = { padding: '0 110px 40px', width: '100%' as const };

const Eyebrow = ({ children }: { children: any }) => <span style={{ fontFamily: mono, fontSize: 22, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.orange, fontWeight: 700 }}>{children}</span>;
const Foot = ({ label }: { label: string }) => { const { current, total } = useSlidePageNumber(); return <div style={{ position: 'absolute', left: 110, right: 110, bottom: 44, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `1px solid ${C.line}`, paddingTop: 14 }}><span style={{ fontSize: 19, color: C.faint, fontFamily: mono }}>{label}</span><span style={{ fontSize: 19, color: C.faint, fontFamily: mono }}>{String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}</span></div>; };
const Title = ({ children, size = 64 }: { children: any; size?: number }) => <div style={{ fontSize: size, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.14 }}>{children}</div>;
const Lead = ({ children }: { children: any }) => <div style={{ fontSize: 33, color: C.muted, lineHeight: 1.6, maxWidth: 1480 }}>{children}</div>;
const B = ({ children }: { children: any }) => <strong style={{ color: C.ink }}>{children}</strong>;
const O = ({ children }: { children: any }) => <strong style={{ color: C.orange }}>{children}</strong>;

const Think = ({ q, a }: { q: any; a: any }) => (
  <div style={{ background: '#eef4ff', border: '1px solid #cfe0fb', borderRadius: 16, padding: '24px 30px', maxWidth: 1480 }}>
    <div style={{ fontFamily: mono, fontSize: 21, color: BLUE, fontWeight: 700, marginBottom: 10 }}>你可能會想說 …</div>
    <div style={{ fontSize: 31, color: '#26405f', lineHeight: 1.5 }}>{q}</div>
    <div style={{ fontSize: 31, color: C.ink, lineHeight: 1.55, marginTop: 14 }}><O>其實</O> {a}</div>
  </div>
);
const Analogy = ({ children }: { children: any }) => (
  <div style={{ background: '#fbf3ee', border: '1px solid #f3d6c4', borderRadius: 16, padding: '24px 30px', maxWidth: 1480 }}>
    <div style={{ fontFamily: mono, fontSize: 21, color: C.orange, fontWeight: 700, marginBottom: 10 }}>打個比方 🍳</div>
    <div style={{ fontSize: 32, color: C.ink, lineHeight: 1.55 }}>{children}</div>
  </div>
);
const Harvest = ({ children }: { children: any }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16, borderLeft: `6px solid ${C.orange}`, background: '#fff', padding: '18px 26px', borderRadius: '0 12px 12px 0', maxWidth: 1480, boxShadow: '0 6px 24px -16px rgba(30,30,40,.4)' }}>
    <span style={{ fontFamily: mono, fontSize: 18, color: C.orange, fontWeight: 700, whiteSpace: 'nowrap' }}>一句話帶走</span>
    <span style={{ fontSize: 31, fontWeight: 700, lineHeight: 1.4 }}>{children}</span>
  </div>
);
const Atom = ({ n, act, see }: { n: number; act: any; see: any }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
    <span style={{ flexShrink: 0, width: 42, height: 42, borderRadius: '50%', background: C.ink, color: '#fff', display: 'grid', placeContent: 'center', fontFamily: mono, fontWeight: 700, fontSize: 22 }}>{n}</span>
    <div><div style={{ fontSize: 30, lineHeight: 1.4 }}>{act}</div><div style={{ fontSize: 23, color: OK, marginTop: 5 }}>✓ 會看到:{see}</div></div>
  </div>
);
const Key = ({ children }: { children: any }) => <span style={{ fontFamily: mono, fontSize: 23, background: '#eceff3', border: '1px solid #cfd5dd', borderRadius: 6, padding: '2px 10px', margin: '0 3px', color: C.ink }}>{children}</span>;
const SuccessRow = ({ children }: { children: any }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16, background: '#eaf6f0', border: '1px solid #bfe6d4', borderRadius: 14, padding: '16px 24px', maxWidth: 1480 }}><span style={{ flexShrink: 0, width: 36, height: 36, borderRadius: '50%', background: OK, color: '#fff', display: 'grid', placeContent: 'center', fontSize: 22, fontWeight: 800 }}>✓</span><span style={{ fontSize: 28, color: '#0c5b3c', fontWeight: 600 }}>{children}</span></div>
);
const Pitfall = ({ items }: { items: [string, string][] }) => (
  <div style={{ background: '#fff7f4', border: `1px solid #f3d0c2`, borderRadius: 16, padding: '26px 32px' }}><div style={{ fontFamily: mono, fontSize: 21, color: RED, fontWeight: 700, marginBottom: 16 }}>卡住了?先看這裡</div><div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>{items.map(([q, a], i) => <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'baseline' }}><span style={{ flexShrink: 0, fontSize: 27, color: RED, fontWeight: 800 }}>?</span><div style={{ fontSize: 27, lineHeight: 1.4 }}><strong>{q}</strong>　<span style={{ color: C.muted }}>{a}</span></div></div>)}</div></div>
);
const Section = ({ no, title, time, sub }: { no: string; title: string; time: string; sub: string }) => (
  <div style={{ ...fill, background: C.ink, color: '#fff' }}><div style={{ ...pad }}><span style={{ fontFamily: mono, fontSize: 26, color: C.orange, letterSpacing: '0.2em' }}>段 {no} ・ {time}</span><div style={{ fontSize: 88, fontWeight: 900, marginTop: 22, letterSpacing: '-0.02em', lineHeight: 1.08 }}>{title}</div><div style={{ fontSize: 35, color: 'rgba(255,255,255,0.72)', marginTop: 26, maxWidth: 1300, lineHeight: 1.5 }}>{sub}</div></div></div>
);
const BreakSlide = ({ note }: { note: string }) => (
  <div style={{ ...fill, background: '#0e7a52' }}><div style={{ ...pad, color: '#fff' }}><span style={{ fontFamily: mono, fontSize: 26, letterSpacing: '0.2em', opacity: 0.85 }}>BREAK</span><div style={{ fontSize: 118, fontWeight: 900, marginTop: 16 }}>休息 10 分鐘</div><div style={{ fontSize: 35, opacity: 0.9, marginTop: 22 }}>{note}</div></div></div>
);
const Checkpoint = ({ items }: { items: string[] }) => (
  <div style={{ background: '#eef7f2', border: `1px solid #bfe6d4`, borderRadius: 16, padding: '24px 30px', maxWidth: 1480 }}>
    <div style={{ fontFamily: mono, fontSize: 20, color: OK, fontWeight: 700, marginBottom: 14 }}>✋ 檢查點 · 全班對齊再往下</div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>{items.map((t, i) => <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', fontSize: 27 }}><span style={{ color: OK, fontWeight: 800 }}>☐</span>{t}</div>)}</div>
  </div>
);
const PromptCard = ({ children, size = 27, label = '複製這段,貼到 Claude Code 面板' }: { children: any; size?: number; label?: string }) => (
  <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, overflow: 'hidden', boxShadow: '0 12px 40px -24px rgba(30,30,40,0.35)', maxWidth: 1560 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 22px', background: '#fbf3ee', borderBottom: `1px solid ${C.line}` }}><span style={{ width: 12, height: 12, borderRadius: '50%', background: C.orange }} /><span style={{ fontFamily: mono, fontSize: 19, color: C.orange, fontWeight: 700, letterSpacing: '0.06em' }}>{label}</span></div>
    <pre style={{ margin: 0, padding: '22px 28px', fontFamily: mono, fontSize: size, lineHeight: 1.5, color: C.ink, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{children}</pre>
  </div>
);

// Claude Code 面板(簡版,給除錯示意用)
const modeColor = (m: string) => m === 'plan' ? PUR : m === 'edit' ? OK : C.muted;
const ClaudePanel = ({ mode = 'plan', model = 'Opus', convo }: { mode?: string; model?: string; convo: { who: 'user' | 'ai'; text: string }[] }) => (
  <div style={{ background: '#1e1e1e', borderRadius: 14, overflow: 'hidden', border: '1px solid #333', boxShadow: '0 18px 50px -26px rgba(0,0,0,0.5)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 16px', background: '#2a2a2a', borderBottom: '1px solid #1b1b1b' }}>
      <span style={{ width: 22, height: 22, borderRadius: 6, background: C.orange, display: 'grid', placeContent: 'center', fontSize: 14 }}>✳</span>
      <span style={{ fontFamily: mono, fontSize: 18, color: '#e8eaed', fontWeight: 700 }}>Claude Code</span>
      <span style={{ marginLeft: 'auto', fontFamily: mono, fontSize: 16, color: '#cdd3df', background: '#3a3a3a', borderRadius: 999, padding: '4px 12px' }}>模型:{model}</span>
    </div>
    <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 10, minHeight: 140 }}>
      {convo.map((m, i) => (
        <div key={i} style={{ alignSelf: m.who === 'user' ? 'flex-end' : 'flex-start', maxWidth: '88%', background: m.who === 'user' ? '#3a3f4b' : '#272727', color: '#e3e6ea', borderRadius: m.who === 'user' ? '12px 12px 4px 12px' : '12px 12px 12px 4px', padding: '11px 15px', fontSize: 19, lineHeight: 1.45 }}>{m.text}</div>
      ))}
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 16px', background: '#181818', borderTop: '1px solid #2b2b2b' }}>
      <span style={{ width: 9, height: 9, borderRadius: '50%', background: modeColor(mode) }} />
      <span style={{ fontFamily: mono, fontSize: 16, color: modeColor(mode), fontWeight: 700 }}>{mode === 'plan' ? 'plan mode(只分析,不改檔)' : mode === 'edit' ? 'edit(允許修改)' : 'default'}</span>
    </div>
  </div>
);

// Codex 面板(對照用)
const CodexPanel = ({ mode = 'Chat', convo }: { mode?: string; convo: { who: 'user' | 'ai'; text: string }[] }) => (
  <div style={{ background: '#1a1a1a', borderRadius: 14, overflow: 'hidden', border: '1px solid #333', boxShadow: '0 18px 50px -26px rgba(0,0,0,0.5)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 16px', background: '#0d0d0d', borderBottom: '1px solid #2b2b2b' }}>
      <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#fff', display: 'grid', placeContent: 'center', fontSize: 13, color: '#000', fontWeight: 800 }}>◍</span>
      <span style={{ fontFamily: mono, fontSize: 18, color: '#e8eaed', fontWeight: 700 }}>Codex</span>
      <span style={{ marginLeft: 'auto', fontFamily: mono, fontSize: 16, color: '#cdd3df', background: '#2a2a2a', borderRadius: 999, padding: '4px 12px' }}>{mode} ⌄</span>
    </div>
    <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 10, minHeight: 140 }}>
      {convo.map((m, i) => (
        <div key={i} style={{ alignSelf: m.who === 'user' ? 'flex-end' : 'flex-start', maxWidth: '88%', background: m.who === 'user' ? '#33373f' : '#242424', color: '#e3e6ea', borderRadius: m.who === 'user' ? '12px 12px 4px 12px' : '12px 12px 12px 4px', padding: '11px 15px', fontSize: 19, lineHeight: 1.45 }}>{m.text}</div>
      ))}
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 16px', background: '#0d0d0d', borderTop: '1px solid #2b2b2b' }}>
      <span style={{ fontFamily: mono, fontSize: 15, color: '#9aa0a6' }}>核准模式:{mode} · reasoning: medium</span>
    </div>
  </div>
);

// 官方頁真截圖框(瀏覽器外框 + 截圖)
const RealShot = ({ img, url, eyebrow, title, caption, foot, maxH = 540, pos = 'top' }: { img: string; url: string; eyebrow: string; title: string; caption: string; foot: string; maxH?: number; pos?: string }) => (
  <div style={fill}><div style={{ ...pad }}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}><Eyebrow>{eyebrow}</Eyebrow><span style={{ fontSize: 22, color: OK, fontFamily: mono, fontWeight: 700 }}>● 官方頁面,真截圖</span></div>
    <Title size={44}>{title}</Title>
    <div style={{ marginTop: 16, background: '#fff', border: `1px solid ${C.line}`, borderRadius: 14, overflow: 'hidden', boxShadow: '0 18px 50px -28px rgba(30,30,40,0.4)', maxWidth: 1560 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 18px', background: '#f0f2f5', borderBottom: `1px solid ${C.line}` }}><div style={{ display: 'flex', gap: 7 }}>{['#ff5f57', '#febc2e', '#28c840'].map((c, i) => <span key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />)}</div><div style={{ flex: 1, background: '#fff', border: `1px solid ${C.line}`, borderRadius: 7, padding: '5px 14px', fontFamily: mono, fontSize: 16, color: C.faint }}>{url}</div></div>
      <img src={img} alt={title} style={{ display: 'block', width: '100%', maxHeight: maxH, objectFit: 'cover', objectPosition: pos }} />
    </div>
    <div style={{ fontSize: 24, color: C.muted, marginTop: 14 }}>{caption}</div>
  </div><Foot label={foot} /></div>
);

// CSV 異常高亮表
const CsvTable = () => {
  const head = ['date', 'product', 'qty', 'revenue'];
  const rows: { cells: string[]; bad: number[]; color: string }[] = [
    { cells: ['2026-07-01', '海鹽餅乾', '30', '3600'], bad: [], color: '' },
    { cells: ['2026-07-02', '海鹽餅乾', '-5', '-600'], bad: [2, 3], color: RED },
    { cells: ['2026-07-03', '耳掛咖啡', '9999', '599940'], bad: [2, 3], color: AMBER },
    { cells: ['2026-07-04', '香氛蠟燭', '(空)', '(空)'], bad: [2, 3], color: C.faint },
    { cells: ['2026-07-05', '耳掛咖啡', '12', '720'], bad: [], color: '' },
  ];
  return (
    <div style={{ background: '#fff', border: `1px solid ${C.line}`, borderRadius: 14, overflow: 'hidden', boxShadow: '0 14px 40px -26px rgba(30,30,40,0.4)', maxWidth: 1080 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.2fr 1fr 1.2fr' }}>
        {head.map((h, i) => <div key={i} style={{ background: '#2a2d35', color: '#fff', fontFamily: mono, fontSize: 23, fontWeight: 700, padding: '14px 20px' }}>{h}</div>)}
        {rows.map((r, ri) => r.cells.map((cell, ci) => {
          const isBad = r.bad.includes(ci);
          return <div key={`${ri}-${ci}`} style={{ fontFamily: mono, fontSize: 24, padding: '14px 20px', borderTop: `1px solid ${C.line}`, background: isBad ? (r.color === RED ? '#fdecea' : r.color === AMBER ? '#fdf3e2' : '#eef0f3') : '#fff', color: isBad ? r.color : C.ink, fontWeight: isBad ? 800 : 400 }}>{cell}</div>;
        }))}
      </div>
    </div>
  );
};

// 四欄 JSON 輸出框
const JsonOut = ({ risk }: { risk: { v: string; bad?: boolean } }) => {
  const rows: [string, any][] = [
    ['insight', '"乾淨資料只有 2 列,先別急著下結論"'],
    ['anomalies', '["第2列 -5 負數", "第3列 9999 過大", "第4列 缺漏"]'],
    ['risk_level', risk.v],
    ['action_items', '["先查那幾筆是不是打錯"]'],
  ];
  return (
    <div style={{ background: '#0f1117', borderRadius: 16, overflow: 'hidden', border: '1px solid #232733', boxShadow: '0 18px 50px -26px rgba(0,0,0,0.5)', maxWidth: 1080 }}>
      <div style={{ display: 'flex', gap: 9, padding: '12px 20px', background: '#161a22', borderBottom: '1px solid #232733' }}>{['#ff5f57', '#febc2e', '#28c840'].map((c, i) => <span key={i} style={{ width: 13, height: 13, borderRadius: '50%', background: c }} />)}<span style={{ fontFamily: mono, fontSize: 18, color: '#6b7280', marginLeft: 10 }}>run.py · 四欄輸出</span></div>
      <pre style={{ margin: 0, padding: '22px 28px', fontFamily: mono, fontSize: 23, lineHeight: 1.7, color: '#cdd3df' }}><span style={{ color: '#6b7280' }}>{'{'}</span>{rows.map(([k, v], i) => <div key={i} style={{ paddingLeft: 22 }}><span style={{ color: C.orange }}>"{k}"</span><span style={{ color: '#6b7280' }}>: </span><span style={{ color: k === 'risk_level' && risk.bad ? '#ff8585' : '#7fd4a8' }}>{v}</span>{i < rows.length - 1 ? <span style={{ color: '#6b7280' }}>,</span> : null}</div>)}<span style={{ color: '#6b7280' }}>{'}'}</span></pre>
    </div>
  );
};

// ReAct 迴圈節點
const ReActNode = ({ word, zh, desc, color }: { word: string; zh: string; desc: string; color: string }) => (
  <div style={{ background: '#fff', border: `2px solid ${color}`, borderRadius: 16, padding: '22px 24px', width: 320 }}>
    <div style={{ fontFamily: mono, fontSize: 24, color, fontWeight: 800 }}>{word}</div>
    <div style={{ fontSize: 30, fontWeight: 800, marginTop: 4 }}>{zh}</div>
    <div style={{ fontSize: 23, color: C.muted, marginTop: 8, lineHeight: 1.4 }}>{desc}</div>
  </div>
);

// 異常細節卡
const AnomalyCard = ({ kind, color, bg, row, why, learn }: { kind: string; color: string; bg: string; row: string; why: string; learn: string }) => (
  <div style={fill}><div style={{ ...pad }}>
    <Eyebrow>段 1 · 異常類型</Eyebrow>
    <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 18 }}><span style={{ width: 30, height: 30, borderRadius: 8, background: color }} /><Title size={52}>{kind}</Title></div>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <div style={{ background: bg, border: `1px solid ${color}`, borderRadius: 14, padding: '20px 26px', fontFamily: mono, fontSize: 27, color }}>{row}</div>
      <Lead>{why}</Lead>
      <Harvest>{learn}</Harvest>
    </div>
  </div><Foot label="U11 · 課3 · 段1" /></div>
);

// 欄位細節卡
const FieldCard = ({ name, what, eg }: { name: string; what: string; eg: string }) => (
  <div style={fill}><div style={{ ...pad }}>
    <Eyebrow>段 2 · 四欄之一</Eyebrow>
    <div style={{ fontFamily: mono, fontSize: 60, color: C.orange, fontWeight: 800, marginTop: 14 }}>{name}</div>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 24 }}>
      <Lead>{what}</Lead>
      <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '20px 26px', fontSize: 27, lineHeight: 1.5 }}><span style={{ color: C.faint, fontFamily: mono, fontSize: 20 }}>例如</span><br />{eg}</div>
    </div>
  </div><Foot label="U11 · 課3 · 段2" /></div>
);

// ══════════ 開場 ══════════
const Cover: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>U11 · 第 3 堂 / 共 4 堂 · 4 小時 · 零基礎</Eyebrow>
    <div className="ts-rise" style={{ marginTop: 34 }}><div style={{ fontSize: 96, fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.04 }}>做得出功能:<br />同一個任務,兩個 AI 都做</div>
      <Lead>這一堂真的<B>做出一個資料檢查功能</B>:加規則 → 固定輸出 → 製造一個指定錯誤 → 用 AI 修好。而且<O>同一個任務,Claude Code 和 Codex 各做一次</O>。</Lead></div>
  </div><div style={{ position: 'absolute', right: 110, bottom: 84, fontFamily: mono, fontSize: 21, color: C.faint }}>AI 專案操作基礎 · 做功能 · 固定輸出 · 修錯 · Claude × Codex</div><Foot label="U11 · 課3" /></div>
);
const Recap0: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>先接上一堂</Eyebrow><Title size={54}>會用插件改畫面了 ── 但世界不只有畫面</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 34 }}>
      <Lead>上一堂你用 Claude Code 的 Plan mode 安全地改了標語。但真實工作裡,更多時候你要 AI 幫你<B>看資料、給建議</B>。</Lead>
      <Think q={<>「資料丟給 AI,它那麼聰明,自己會分析吧?」</>} a={<>會分析,但<B>它不一定會懷疑</B>。如果資料裡有錯,它常常照單全收,還很有自信地給你建議。那就危險了。</>} />
    </div>
  </div><Foot label="U11 · 課3 · 接續" /></div>
);
const Why: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>先講為什麼</Eyebrow><Title size={54}>如果資料本身就有問題呢?</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 30 }}>
      <Lead>想像一份賣東西的資料,裡面藏著這些狀況:</Lead>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, maxWidth: 1540 }}>
        {['銷量是負數', '營收大到不合理', '某天資料整個缺掉'].map((t, i) => <span key={i} style={{ background: '#fff', border: `1px solid ${C.line}`, borderRadius: 999, padding: '12px 22px', fontSize: 27, color: C.ink }}>{t}</span>)}
      </div>
      <Harvest>AI 如果沒發現,還很有自信地給建議 ── 這比它不會還危險。</Harvest>
    </div>
  </div><Foot label="U11 · 課3 · 為什麼" /></div>
);
const Roadmap: Page = () => {
  const items = [['段 1', '看懂資料', '需求:CSV 與 JSON', '0:15'], ['段 2', '固定四欄', '輸出格式', '1:10'], ['段 3', '信任規則', '何時別信它', '2:00'], ['段 4', 'Claude 修錯', 'ReAct debug', '2:35'], ['段 5', '換 Codex 做', '同任務對照', '3:05']];
  return (
    <div style={fill}><div style={pad}><Eyebrow>今天的路線 · 五段 + 收束</Eyebrow><Title>從「做出功能」到「兩個 AI 都做給你看」</Title>
      <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 16, marginTop: 46 }}>
        {items.map(([a, b, c, t], i) => <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '22px 18px' }}><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ fontFamily: mono, fontSize: 19, color: C.orange, fontWeight: 700 }}>{a}</span><span style={{ fontFamily: mono, fontSize: 16, color: C.faint }}>{t}</span></div><div style={{ fontSize: 25, fontWeight: 800, marginTop: 12, lineHeight: 1.25 }}>{b}</div><div style={{ fontSize: 20, color: C.muted, marginTop: 8 }}>{c}</div></div>)}
      </div>
      <div style={{ fontSize: 27, color: C.muted, marginTop: 40, lineHeight: 1.5 }}>中間休息一次。我們用上一堂專案裡的 data-lab,還有第二堂裝好的 Claude Code 面板,段 5 再加裝 Codex。</div>
    </div><Foot label="U11 · 課3 · 路線" /></div>
  );
};

const AiSkills: Page = () => {
  const skills = ['說清楚目標', '指定檔案或資料', '要求固定格式', '先列異常再建議', '要求說根據', '給驗收標準', '錯誤訊息整段貼回', '修完看 diff'];
  return (
    <div style={fill}><div style={pad}><Eyebrow>AI 工具核心技能 · 今天會用到</Eyebrow><Title size={48}>不是問得越多越好,是問得可檢查</Title>
      <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14, marginTop: 34, maxWidth: 1540 }}>
        {skills.map((s, i) => <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 12, padding: '16px 24px' }}><span style={{ fontFamily: mono, fontSize: 24, color: C.orange, fontWeight: 800 }}>{String(i + 1).padStart(2, '0')}</span><span style={{ fontSize: 28, fontWeight: 700 }}>{s}</span></div>)}
      </div>
      <div style={{ marginTop: 24 }}><Harvest>今天每個 prompt 都會帶一個驗收點:看資料、看格式、看根據、看 diff。</Harvest></div>
    </div><Foot label="U11 · 課3 · AI 技能" /></div>
  );
};
const TeacherCadence: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>老師控場 · 每 10 到 15 分鐘一次</Eyebrow><Title size={48}>每段都照「Prompt → 操作 → 驗收 → 下一步」</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginTop: 34 }}>
      {[
        ['固定 prompt', '不要讓學生自由發想,直接貼同一段。'],
        ['固定操作', '全班做同一個指令或同一個點擊。'],
        ['固定驗收', '看到同一個畫面、同一欄輸出、同一段 diff。'],
        ['固定下一步', '過關才往下,卡住就先舉手。'],
      ].map(([a, b]) => <div key={a} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '22px 20px' }}><div style={{ fontSize: 28, fontWeight: 800 }}>{a}</div><div style={{ color: C.muted, fontSize: 22, lineHeight: 1.45, marginTop: 10 }}>{b}</div></div>)}
    </div>
  </div><Foot label="U11 · 課3 · 控場" /></div>
);
const DataJudgeWarmup: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>暖身判斷題 · 先不用 AI</Eyebrow><Title size={50}>這些資料可以直接拿來分析嗎?</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 34, maxWidth: 1540 }}>
      {[
        ['銷量 -5', '不行:負數要先確認'],
        ['營收 0,但銷量 20', '不行:欄位互相矛盾'],
        ['某天整列空白', '不行:缺漏不能腦補'],
        ['銷量 12,營收 720', '可以:看起來合理'],
      ].map(([a, b], i) => <div key={i} style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: 20, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 12, padding: '18px 26px' }}><span style={{ fontFamily: mono, fontSize: 28, color: i === 3 ? OK : RED, fontWeight: 800 }}>{a}</span><span style={{ fontSize: 28 }}>{b}</span></div>)}
    </div>
  </div><Foot label="U11 · 課3 · 判斷題" /></div>
);
const BadAiAnswer: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>錯誤情境 · AI 講得順但沒根據</Eyebrow><Title size={48}>看到這種答案,先踩煞車</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 30 }}>
      <div style={{ background: '#fff7f4', border: `2px solid ${RED}`, borderRadius: 16, padding: '24px 28px' }}><div style={{ fontFamily: mono, fontSize: 22, color: RED, fontWeight: 800 }}>AI 回答</div><div style={{ fontSize: 29, lineHeight: 1.5, marginTop: 12 }}>「營收明顯成長,建議提高備貨量。」</div></div>
      <div style={{ background: '#eaf6f0', border: `2px solid ${OK}`, borderRadius: 16, padding: '24px 28px' }}><div style={{ fontFamily: mono, fontSize: 22, color: OK, fontWeight: 800 }}>你要追問</div><div style={{ fontSize: 29, lineHeight: 1.5, marginTop: 12 }}>「請列出支持這句話的資料列。負數、過大、缺漏先排除。」</div></div>
    </div>
    <div style={{ marginTop: 26 }}><Harvest>沒有指到資料列,就不是可採用的分析。</Harvest></div>
  </div><Foot label="U11 · 課3 · 錯誤情境" /></div>
);
const FormatCheck: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>驗收清單 · 四欄輸出</Eyebrow><Title size={50}>AI 回答後,只檢查這四件事</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 15, marginTop: 34, maxWidth: 1500 }}>
      <SuccessRow>有 insight / anomalies / risk_level / action_items 四欄。</SuccessRow>
      <SuccessRow>anomalies 有列出資料列或原因,不是空泛形容詞。</SuccessRow>
      <SuccessRow>risk_level 只能是 low / medium / high。</SuccessRow>
      <SuccessRow>action_items 是下一步行動,不是「持續觀察」這種空話。</SuccessRow>
    </div>
  </div><Foot label="U11 · 課3 · 驗收" /></div>
);
const EvidencePrompt: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>Prompt 卡 · 要求根據</Eyebrow><Title size={46}>它講結論前,先叫它交證據</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 26, maxWidth: 1520 }}>
      <PromptCard size={24}>{`分析 sales.csv 時,請先列出你採用或排除的資料列。
規則:
- 負數、過大、缺漏都要放進 anomalies
- 沒有資料支持的結論,標成「不可採用」
- 每個 action_items 都要對應到一個 anomalies 或 insight`}</PromptCard>
      <Harvest>這張卡是防止 AI 編故事的剎車。</Harvest>
    </div>
  </div><Foot label="U11 · 課3 · Prompt" /></div>
);

// ══════════ 段 1:CSV / JSON ══════════
const Sec1: Page = () => <Section no="1" title="看懂資料:CSV 與 JSON" time="0:15 - 1:10" sub="兩個常見的資料格式。今天只要你看得懂、看得出哪裡怪,不用會寫。" />;
const CsvHead: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 1 · 開場</Eyebrow><Title size={54}>CSV 像 Excel,JSON 像一張資料卡</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 32 }}>
      <Analogy><B>CSV</B> 就是用逗號隔開的表格,長得像 Excel:一列一筆、一欄一個項目。<B>JSON</B> 像一張資料卡:每個欄位有名字、有值,清清楚楚。</Analogy>
      <Lead>下一頁是一份真的資料 <O>sales.csv</O>。我故意在裡面藏了幾個問題,看你抓不抓得出來。</Lead>
    </div>
  </div><Foot label="U11 · 課3 · 段1" /></div>
);
const CsvShow: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 1 · 這份資料 · sales.csv</Eyebrow><Title size={46}>你沒學程式,也看得出哪裡怪吧?</Title>
    <div className="ts-rise" style={{ marginTop: 28, display: 'flex', gap: 40, alignItems: 'center' }}>
      <CsvTable />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        {[[RED, '紅色:負數', '銷量 -5、營收 -600,不可能'], [AMBER, '橘色:過大', '一天賣 9999,太極端'], [C.faint, '灰色:缺漏', '整列是空的']].map(([c, a, b]: any, i) => (
          <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}><span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: 5, background: c, marginTop: 6 }} /><div><div style={{ fontSize: 26, fontWeight: 800 }}>{a}</div><div style={{ fontSize: 22, color: C.muted }}>{b}</div></div></div>
        ))}
      </div>
    </div>
  </div><Foot label="U11 · 課3 · 段1" /></div>
);
const AnomNeg: Page = () => <AnomalyCard kind="負數:不可能的數字" color={RED} bg="#fdecea" row="2026-07-02 · 海鹽餅乾 · qty -5 · revenue -600" why="銷量、營收不可能是負的。多半是打錯、或退貨被記成負數。看到負號,先打個問號。" learn="負數 = 多半是打錯或記錯,先標記、別拿來算。" />;
const AnomBig: Page = () => <AnomalyCard kind="過大:大到不合理" color={AMBER} bg="#fdf3e2" row="2026-07-03 · 耳掛咖啡 · qty 9999 · revenue 599940" why="一家小店一天賣 9999 包?幾乎不可能。可能是多打了幾個 0,或測試資料忘了刪。" learn="極端值 = 先懷疑是不是打錯,而不是直接相信。" />;
const AnomMiss: Page = () => <AnomalyCard kind="缺漏:整格是空的" color={C.muted} bg="#eef0f3" row="2026-07-04 · 香氛蠟燭 · qty (空) · revenue (空)" why="那天的數字根本沒填。你不能把空的當 0,也不能猜 ── 缺了就是缺了,要先去問。" learn="缺漏 = 不要自己腦補,標出來、去把資料補齊。" />;
const CsvSpot: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 1 · 這就是「資料異常」的直覺</Eyebrow><Title size={50}>三種最常見的怪</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 34 }}>
      <Lead>負數、過大、缺漏。你不需要會寫程式,生活常識就抓得到。這份直覺,等下要拿來檢查 AI 給的答案。</Lead>
      <SuccessRow>你能指出 sales.csv 裡這 3 種異常 = 段 1 第一關過。</SuccessRow>
    </div>
  </div><Foot label="U11 · 課3 · 段1" /></div>
);
const JsonShow: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 700px', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div><Eyebrow>段 1 · 另一種格式 · JSON</Eyebrow><Title size={48}>JSON:有名字的資料卡</Title></div>
      <Lead>CSV 是「一排排」,JSON 是「一張卡」:每個值前面都有<B>名字(欄位)</B>,所以你一看就知道哪個數字是什麼。等下 AI 的輸出,就是 JSON。</Lead>
      <Harvest>看 JSON,先看「名字」,再看冒號後面的「值」。</Harvest>
    </div>
    <div className="ts-rise"><div style={{ background: '#0f1117', borderRadius: 14, overflow: 'hidden', border: '1px solid #232733' }}><div style={{ padding: '12px 18px', background: '#161a22', fontFamily: mono, fontSize: 18, color: '#6b7280' }}>一張資料卡(JSON)</div><pre style={{ margin: 0, padding: '20px 26px', fontFamily: mono, fontSize: 24, lineHeight: 1.7, color: '#cdd3df' }}>{`{
  "product": "海鹽餅乾",
  "qty": 30,
  "revenue": 3600
}`}</pre></div></div>
  </div><Foot label="U11 · 課3 · 段1" /></div>
);
const FeedAt: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 1 · 用面板看資料 · @</Eyebrow><Title size={48}>把 sales.csv 指給 AI 看</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 26, maxWidth: 1500 }}>
      <Lead>打開上一堂的 Claude Code 面板。我們用 <Key>@</Key> 把資料檔指給它,而不是整段複製。</Lead>
      <Atom n={1} act={<>在面板輸入框打 <Key>@</Key>,選 <Key>data-lab/data/sales.csv</Key>。</>} see="輸入框上方出現一個檔案標籤。" />
      <Atom n={2} act={<>切到 <B>Plan mode</B>(它只會看、不會改)。</>} see="底部出現 plan mode。" />
    </div>
    <div style={{ marginTop: 22 }}><SuccessRow>檔案標籤出現、底部是 plan mode = 可以開始問它資料的事了。</SuccessRow></div>
  </div><Foot label="U11 · 課3 · 段1" /></div>
);
const Sec1Done: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 1 · 檢查點</Eyebrow><Title size={52}>看得懂、抓得到怪</Title>
    <div className="ts-rise" style={{ marginTop: 32 }}><Checkpoint items={['知道 CSV 像 Excel、JSON 像資料卡', '能指出 sales.csv 的 3 種異常(負數/過大/缺漏)', '會用 @ 把 sales.csv 指給面板']} /></div>
  </div><Foot label="U11 · 課3 · 段1" /></div>
);

// ══════════ 段 2:固定四欄 ══════════
const Sec2: Page = () => <Section no="2" title="固定四欄:讓輸出每次一樣" time="1:10 - 2:20" sub="AI 如果每次都寫一大段作文,你後面很難用。我們要它每次都用固定四欄回答。" />;
const FixedHead: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 2 · 開場</Eyebrow><Title size={54}>別讓 AI 寫作文,讓它填表</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 32 }}>
      <Think q={<>「它講得落落長、很詳細,不是很好嗎?」</>} a={<>當下好像很好,但<B>下次格式又不一樣</B>,你每次都要重讀、重找重點。固定四個欄位,你一眼就知道去哪看。</>} />
      <Lead>四個欄位:<O>insight、anomalies、risk_level、action_items</O>。我們一欄一欄看。</Lead>
    </div>
  </div><Foot label="U11 · 課3 · 段2" /></div>
);
const FourFields: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 2 · 四個欄位總覽</Eyebrow><Title size={50}>四欄,各管一件事</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 18, marginTop: 36, maxWidth: 1540 }}>
      {[['insight', '一句話總結:最近的關鍵發現'], ['anomalies', '看起來怪、需要你確認的地方'], ['risk_level', '風險高 / 中 / 低'], ['action_items', '具體可以做的事']].map(([k, v], i) => (
        <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '22px 26px' }}><div style={{ fontFamily: mono, fontSize: 26, color: C.orange, fontWeight: 700 }}>{k}</div><div style={{ fontSize: 26, marginTop: 8, lineHeight: 1.4 }}>{v}</div></div>
      ))}
    </div>
  </div><Foot label="U11 · 課3 · 段2" /></div>
);
const FInsight: Page = () => <FieldCard name="insight" what="一句話的洞察。先看這句就抓到重點 ── 它是整份報告的「標題」。" eg="「最近三天資料只有兩天可信,先別下結論。」" />;
const FAnom: Page = () => <FieldCard name="anomalies" what="它把看起來怪、需要你確認的地方列出來。就是你段 1 學的負數、過大、缺漏。" eg={'["第2列 -5 負數", "第3列 9999 過大", "第4列 缺漏"]'} />;
const FRisk: Page = () => <FieldCard name="risk_level" what="風險等級,只能是 low / medium / high,讓你一眼知道嚴不嚴重。固定三個值,後面才好自動處理。" eg='"high"(因為髒資料太多)' />;
const FAction: Page = () => <FieldCard name="action_items" what="具體、能馬上做的事。不是空話,是「你現在可以去做什麼」。" eg={'["先查那兩筆是不是打錯", "退貨另外記"]'} />;
const DataPrompt: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 2 · Prompt 卡</Eyebrow><Title size={44}>規定它:就用這四欄回我</Title>
    <div style={{ marginTop: 18 }}><PromptCard size={24}>{`請根據我給你的 sales.csv 內容,輸出固定四欄:

insight:
anomalies:
risk_level:
action_items:

限制:
1. 如果資料有負數、過大數字、缺漏,請列在 anomalies
2. 如果資料不足,請不要硬給結論
3. 沒有資料依據的建議,請標成「不可採用」
4. risk_level 只能是 low、medium、high`}</PromptCard></div>
  </div><Foot label="U11 · 課3 · 段2" /></div>
);
const JsonSee: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '480px 1fr', gap: 50, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div><Eyebrow>段 2 · 你會看到</Eyebrow><Title size={48}>四欄,每次都長一樣</Title></div>
      <Lead>它把那幾筆怪資料挑進 anomalies,而且因為資料被汙染,<B>它不硬算營收</B>,先叫你去查。</Lead>
    </div>
    <div className="ts-rise"><JsonOut risk={{ v: '"high"' }} /></div>
  </div><Foot label="U11 · 課3 · 段2" /></div>
);
const BadGood: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 2 · 對照</Eyebrow><Title size={50}>同一份資料,兩種回答</Title>
    <div className="ts-rise" style={{ display: 'flex', gap: 24, marginTop: 36 }}>
      <div style={{ flex: 1, background: '#fff7f4', border: `2px solid ${RED}`, borderRadius: 16, padding: '24px 28px' }}><div style={{ fontSize: 28, fontWeight: 800, color: RED }}>❌ 作文式</div><div style={{ fontSize: 24, marginTop: 12, lineHeight: 1.5, color: C.muted }}>「整體來說生意還不錯,建議多進貨,可以考慮促銷…」── 落落長,沒指出髒資料,還叫你進貨。</div></div>
      <div style={{ flex: 1, background: '#eaf6f0', border: `2px solid ${OK}`, borderRadius: 16, padding: '24px 28px' }}><div style={{ fontSize: 28, fontWeight: 800, color: OK }}>✅ 四欄式</div><div style={{ fontSize: 24, marginTop: 12, lineHeight: 1.5, color: C.muted }}>insight 一句、anomalies 列出三筆怪、risk high、action 先查單據 ── 一眼看懂、能行動。</div></div>
    </div>
    <div style={{ marginTop: 26 }}><Harvest>同一個 AI,規定格式前後,差很多。格式就是品質。</Harvest></div>
  </div><Foot label="U11 · 課3 · 段2" /></div>
);
const WhyFixed: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 2 · 為什麼要「固定」</Eyebrow><Title size={54}>每次都長一樣,才信得過</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 30 }}>
      <Analogy>就像<B>發票</B>:格式固定,你掃一眼就知道去哪看金額、去哪看品項。每張長得不一樣,你每次都要重找,還會看錯。</Analogy>
      <Harvest>規定格式不是龜毛,是讓 AI 的輸出「可以被信任、可以被自動接下去」。</Harvest>
      <Checkpoint items={['拿到一份四欄輸出', '看得懂每一欄;risk_level 是 low/medium/high']} />
    </div>
  </div><Foot label="U11 · 課3 · 段2" /></div>
);
const Break1: Page = () => <BreakSlide note="回來我們先講「什麼時候別信 AI」,再故意製造一個錯,用流程把它修好。" />;

// ══════════ 段 3:信任規則 ══════════
const Sec3: Page = () => <Section no="3" title="信任規則:什麼時候別信它" time="2:20 - 3:05" sub="AI 講得很順,不代表它講得對。三條規則,幫你決定何時該踩煞車。" />;
const TrustHead: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 3 · 開場</Eyebrow><Title size={54}>順,不等於對</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 32 }}>
      <Lead>AI 講錯的時候,跟講對的時候<B>一樣有自信</B>。所以你不能只看它「講得順不順」,要看它「有沒有根據」。</Lead>
      <Lead>記三句話就好,簡單到你今天就能用。</Lead>
    </div>
  </div><Foot label="U11 · 課3 · 段3" /></div>
);
const ThreeRules: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 3 · 三條信任規則</Eyebrow><Title size={50}>背起來,當口訣</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22, marginTop: 44 }}>
      {[['資料不齊,先停', '缺漏、被汙染,就先別下結論'], ['沒有依據,不採用', '它說不出「為什麼」,就先別信'], ['高風險,找人確認', '會花錢、影響顧客的,找人看過']].map(([a, b], i) => (
        <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '28px 26px' }}><div style={{ fontSize: 32, fontWeight: 800, color: C.orange }}>{i + 1}</div><div style={{ fontSize: 32, fontWeight: 800, marginTop: 8 }}>{a}</div><div style={{ fontSize: 24, color: C.muted, marginTop: 10, lineHeight: 1.45 }}>{b}</div></div>
      ))}
    </div>
  </div><Foot label="U11 · 課3 · 段3" /></div>
);
const Scenario: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 3 · 情境練習</Eyebrow><Title size={50}>這幾種情況,你會信嗎?</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 34, maxWidth: 1520 }}>
      {[['AI 說「營收成長 20%」,但那天資料是空的', '不信 ── 資料不齊,先停'], ['AI 說「建議下架 A 商品」,但說不出根據', '不採用 ── 沒有依據'], ['AI 說「把售價砍半衝買氣」', '找人確認 ── 高風險,會影響營收'], ['AI 說「第 3 筆 9999 可能打錯,要確認」', '可信 ── 有依據、而且是請你確認']].map(([a, b], i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 12, padding: '16px 24px' }}><span style={{ fontSize: 25, lineHeight: 1.35 }}>{a}</span><span style={{ fontSize: 23, color: i === 3 ? OK : RED, fontWeight: 700 }}>{b}</span></div>
      ))}
    </div>
  </div><Foot label="U11 · 課3 · 段3" /></div>
);
const HITL: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 3 · 一個重要觀念 · Human-in-the-loop</Eyebrow><Title size={48}>AI 先判斷,關鍵的人來拍板</Title>
    <div className="ts-rise" style={{ marginTop: 38, display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap', justifyContent: 'center' }}>
      <div style={{ background: '#eef4ff', border: `2px solid ${BLUE}`, borderRadius: 16, padding: '22px 28px', fontSize: 27, fontWeight: 700, color: BLUE }}>🤖 AI 先看資料、先給判斷</div>
      <div style={{ color: C.faint, fontSize: 34 }}>→</div>
      <div style={{ background: '#fbf3ee', border: `2px solid ${C.orange}`, borderRadius: 16, padding: '22px 28px', fontSize: 27, fontWeight: 700, color: C.orange }}>🧑 關鍵決策,人看過</div>
      <div style={{ color: C.faint, fontSize: 34 }}>→</div>
      <div style={{ background: '#eaf6f0', border: `2px solid ${OK}`, borderRadius: 16, padding: '22px 28px', fontSize: 27, fontWeight: 700, color: OK }}>✅ 才真的執行</div>
    </div>
    <div style={{ marginTop: 36 }}><Harvest>Human-in-the-loop:AI 幫你看得更快,但最後拍板、負責的人,永遠是你。</Harvest></div>
  </div><Foot label="U11 · 課3 · 段3" /></div>
);
const TrustDone: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 3 · 檢查點</Eyebrow><Title size={52}>你會踩煞車了</Title>
    <div className="ts-rise" style={{ marginTop: 32 }}><Checkpoint items={['能背出三條信任規則', '看一個 AI 建議,能判斷該不該信', '知道高風險決策要人工確認']} /></div>
  </div><Foot label="U11 · 課3 · 段3" /></div>
);

// ══════════ 段 4:Debug / ReAct ══════════
const Sec4: Page = () => <Section no="4" title="用 Claude Code 修一次錯:ReAct" time="2:35 - 3:05" sub="我們故意讓程式出一個錯。重點不是它壞了,而是怎麼在 Claude Code 面板帶它照流程修好 ── 等一下 Codex 會做同一件事。" />;
const BugHead: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 760px', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div><Eyebrow>段 4 · 先看見錯</Eyebrow><Title size={48}>跑一下,你會看到怪怪的</Title></div>
      <Lead>跑 <Key>python run.py</Key>,你會發現 <B>risk_level 印出「嚴重」</B>。但我們的規格說:它<O>只能</O>是 low、medium、high。</Lead>
      <Lead>這時候不要說「AI 壞了」。我們要帶著它,照流程修。</Lead>
    </div>
    <div className="ts-rise"><JsonOut risk={{ v: '"嚴重"  ← 不對!', bad: true }} /></div>
  </div><Foot label="U11 · 課3 · 段4" /></div>
);
const ReActHead: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 4 · 除錯的節奏 · ReAct</Eyebrow><Title size={50}>先想 → 做一步 → 看結果</Title>
    <div className="ts-rise" style={{ marginTop: 40, display: 'flex', gap: 20, alignItems: 'center', justifyContent: 'center' }}>
      <ReActNode word="Reason" zh="先想" desc="這個錯可能是什麼意思、可能哪裡出問題" color={BLUE} />
      <div style={{ color: C.faint, fontSize: 34 }}>→</div>
      <ReActNode word="Act" zh="做一步" desc="看一個檔、或跑一個指令" color={C.orange} />
      <div style={{ color: C.faint, fontSize: 34 }}>→</div>
      <ReActNode word="Observe" zh="看結果" desc="看錯誤訊息或輸出,對不對?" color={OK} />
    </div>
    <div style={{ marginTop: 30, fontSize: 25, color: C.muted, textAlign: 'center' }}>沒修好?就再來一輪。這就是 AI 在 Plan mode 幫你除錯時做的事。</div>
  </div><Foot label="U11 · 課3 · 段4" /></div>
);
const DebugPrompt: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 4 · Prompt 卡 · 第 1 步:Plan mode 先分析</Eyebrow><Title size={42}>切到 Plan mode,叫它先 Reason</Title>
    <div style={{ marginTop: 16 }}><PromptCard size={23}>{`(請先切到 Plan mode,不要改檔)

我的 python run.py 輸出中,risk_level 不是 low/medium/high,
而是輸出了其他文字(例如「嚴重」)。

請先分析:
1. 這個問題可能是什麼意思
2. 可能原因有哪些
3. 可能相關檔案
4. 你會怎麼確認問題
5. 建議修正方式`}</PromptCard></div>
  </div><Foot label="U11 · 課3 · 段4" /></div>
);
const DebugAnalysis: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '600px 1fr', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise"><ClaudePanel mode="plan" model="Opus" convo={[{ who: 'user', text: 'risk_level 印成「嚴重」,先別改、先分析' }, { who: 'ai', text: '可能原因:程式把英文等級翻成中文了。' }, { who: 'ai', text: '相關檔案:run.py 裡組 risk_level 的那段。' }, { who: 'ai', text: '(Plan mode:尚未修改)' }]} /></div>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div><Eyebrow>段 4 · 你會看到</Eyebrow><Title size={46}>它先講「為什麼」</Title></div>
      <Lead>它推測:程式把英文等級「翻成中文」了,問題在 run.py 某一段。<B>而且因為是 Plan mode,它還沒動任何檔。</B></Lead>
      <Harvest>先看它的分析合不合理,再決定要不要放它修。</Harvest>
    </div>
  </div><Foot label="U11 · 課3 · 段4" /></div>
);
const FixPrompt: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 4 · Prompt 卡 · 第 2 步:切 Edit,放行</Eyebrow><Title size={44}>覺得合理,才讓它改</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 20, maxWidth: 1500 }}>
      <Atom n={1} act={<>用 <Key>shift+tab</Key> 切離 Plan mode。</>} see="底部模式變了。" />
    </div>
    <div style={{ marginTop: 14 }}><PromptCard size={25}>{`同意,請照你的分析修正。
請只修改必要檔案(run.py)。

修完後請告訴我:改了哪裡、為什麼這樣改、我要怎麼確認修好了。`}</PromptCard></div>
  </div><Foot label="U11 · 課3 · 段4" /></div>
);
const DebugVerify: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 760px', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div><Eyebrow>段 4 · 驗收</Eyebrow><Title size={46}>再跑一次,確認修好</Title></div>
      <Atom n={1} act={<>回終端機,再打一次 <Key>python run.py</Key>。</>} see="重新印出四欄。" />
      <Atom n={2} act={<>看 <B>risk_level</B> 這欄。</>} see={<>變成 <O>low / medium / high</O>。</>} />
      <Atom n={3} act={<><Key>git diff</Key> 看它改了哪裡。</>} see="只動了該動的那段。" />
    </div>
    <div className="ts-rise"><JsonOut risk={{ v: '"high"  ← 修好了' }} /></div>
  </div><Foot label="U11 · 課3 · 段4" /></div>
);
const DebugDiff: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 760px', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div><Eyebrow>段 4 · 看它改了什麼</Eyebrow><Title size={46}>git diff:就動這一段</Title></div>
      <Lead>跟第二堂一樣,用 git diff 確認它<B>只動了該動的</B>:把「翻成中文」那行拿掉,直接用英文等級。</Lead>
      <Harvest>修完一定看 diff ── 確認它沒順手改別的。</Harvest>
    </div>
    <div className="ts-rise"><div style={{ background: '#0f1117', borderRadius: 14, overflow: 'hidden', border: '1px solid #232733' }}><div style={{ padding: '12px 18px', background: '#161a22', fontFamily: mono, fontSize: 18, color: '#6b7280' }}>git diff · run.py</div><pre style={{ margin: 0, padding: '20px 26px', fontFamily: mono, fontSize: 21, lineHeight: 1.7 }}><div style={{ color: '#6b7280' }}>  level = "high"</div><div style={{ color: '#ff8585' }}>-  risk_level = zh[level]  # 翻成中文</div><div style={{ color: '#7fd4a8' }}>+  risk_level = level       # 直接用 low/medium/high</div></pre></div></div>
  </div><Foot label="U11 · 課3 · 段4" /></div>
);
const DebugDone: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 4 · 過關標準</Eyebrow><Title size={52}>你剛剛完整修好一個 bug</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 36 }}>
      <SuccessRow>risk_level 變成 low / medium / high = 你用 ReAct 修好了一個錯。記得 commit。</SuccessRow>
      <Harvest>遇到錯不要怕,也不要瞎改:Plan mode 先想、再放它做、再看結果,一輪一輪收斂。</Harvest>
    </div>
  </div><Foot label="U11 · 課3 · 段4" /></div>
);
const Pit: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 4 · 卡住了?</Eyebrow><Title size={50}>除錯時的常見狀況</Title>
    <div className="ts-rise" style={{ marginTop: 32, maxWidth: 1500 }}><Pitfall items={[['它一上來就要改:', '先確認你在 Plan mode;還是要改就回它「先只分析,不要改」。'], ['修完還是錯:', '把新的錯誤訊息整段貼回面板,再走一輪 ReAct。'], ['看不懂它的分析:', '叫它「用我聽得懂的話,講一個最可能的原因就好」。']]} /></div>
    <div style={{ marginTop: 20 }}><Checkpoint items={['先 Plan mode 分析、再 Edit 修', 'risk_level 變成 low/medium/high', 'git diff 看過、已 commit']} /></div>
  </div><Foot label="U11 · 課3 · 段4" /></div>
);

// ══════════ 收束 ══════════
// ══════════ 段 5:同一個任務,換 Codex 再做一次 ══════════
const SecCodex: Page = () => <Section no="5" title="同一個任務,換 Codex 再做一次" time="3:05 - 3:50" sub="剛剛用 Claude Code 修好了 risk_level。現在換 OpenAI 的 Codex,做一模一樣的任務 ── 你會發現:名字不同,流程一樣。" />;
const WhatIsCodexC3: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 5 · 開場</Eyebrow><Title size={52}>Codex:另一個會接手專案的 AI</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 32 }}>
      <Lead>Codex 是 OpenAI 的 coding agent,跟 Claude Code 一樣<B>會讀專案、幫你改、做 review</B>,也是一個 VS Code 插件。</Lead>
      <Analogy>像兩台不同牌子的車。今天<B>不是比車</B>,是讓你知道:會開一台,另一台也會開 ── 因為你會的是<O>流程</O>,不是某個按鈕。</Analogy>
    </div>
  </div><Foot label="U11 · 課3 · 段5" /></div>
);
const CodexMarketReal: Page = () => (
  <RealShot img={codexMarketShot} url="marketplace.visualstudio.com · Codex" eyebrow="段 5 · 從哪裡裝" title="VS Code Marketplace 上的 Codex(OpenAI)"
    caption="擴充功能商店裡的 Codex,發行者是 OpenAI。裝法跟第二堂的 Claude Code 一樣:搜尋、Install、登入。" foot="U11 · 課3 · 段5" />
);
const InstallCodexC3: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 5 · 動手裝 Codex</Eyebrow><Title size={48}>跟裝 Claude Code 一樣的流程</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 26, maxWidth: 1500 }}>
      <Atom n={1} act={<>擴充功能搜尋 <Key>Codex</Key>(認明發行者 OpenAI)→ 按 Install。</>} see="多出一個 Codex 面板。" />
      <Atom n={2} act={<>打開面板,用你的 <B>ChatGPT 帳號</B>登入、授權。</>} see="面板可以打字。" />
      <Atom n={3} act={<>看面板上方的<B>模式</B>與<B>模型</B>選項。</>} see="你現在有兩個 AI 助手了。" />
    </div>
    <div style={{ marginTop: 22 }}><Pitfall items={[['搜尋到很多類似的:', '認明發行者是 OpenAI、名稱含 Codex。'], ['面板沒出現:', '看右側欄或活動列新圖示,再不行重開 VS Code。']]} /></div>
  </div><Foot label="U11 · 課3 · 段5" /></div>
);
const CodexModesC3: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 5 · Codex 的模式 · 跟 Claude 不一樣</Eyebrow><Title size={46}>Chat / Agent / Agent(Full Access)</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 30, maxWidth: 1540 }}>
      {[['Chat', '像諮詢、只討論不動手 ≈ Claude 的 Plan', BLUE], ['Agent', '它自己動手改,但有你監督 ≈ Claude 的 Auto', C.orange], ['Agent(Full Access)', '最大自主權 ── 最小心使用', RED]].map(([a, b, c]: any, i) => (
        <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '18px 26px' }}><span style={{ fontFamily: mono, fontSize: 24, color: c, fontWeight: 800, minWidth: 320 }}>{a}</span><span style={{ fontSize: 25 }}>{b}</span></div>
      ))}
    </div>
    <div style={{ marginTop: 20 }}><Harvest>Claude 用 shift+tab 切 Plan/Auto;Codex 是選 Chat/Agent。名字不同,精神一樣:你決定它能動多少。還能調 reasoning(low/med/high)。</Harvest></div>
  </div><Foot label="U11 · 課3 · 段5" /></div>
);
const CodexIdeReal: Page = () => (
  <RealShot img={codexIdeShot} url="developers.openai.com/codex/ide/features" eyebrow="段 5 · 官方頁佐證" title="官方「Codex IDE features」頁"
    caption="官方功能頁列的正是我們要用的:Switch between models(換模型)、Adjust reasoning effort(調思考深度)、Choose an approval mode(選 Chat/Agent)。" foot="U11 · 課3 · 段5" />
);
const CodexDebugSame: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 640px', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div><Eyebrow>段 5 · 同一個 bug,用 Codex 修</Eyebrow><Title size={42}>一模一樣的 prompt,換 Codex 跑</Title></div>
      <Lead>用<B>同一段</B> debug prompt(先 Chat 分析、再 Agent 動手),讓 Codex 修 <Key>risk_level</Key> 的 bug。</Lead>
      <Atom n={1} act={<>用 <B>Chat 模式</B>貼 debug prompt,先問分析、不要改。</>} see="它列出可能原因(中文轉換那段)。" />
      <Atom n={2} act={<>覺得合理 → 切 <B>Agent</B>,放它改。</>} see="它只改 run.py。" />
      <Atom n={3} act={<>再跑 <Key>python run.py</Key>。</>} see="risk_level 變 high。" />
    </div>
    <div className="ts-rise"><CodexPanel mode="Chat" convo={[{ who: 'user', text: 'risk_level 印出「嚴重」,規格只能 low/med/high。先別改,先分析。' }, { who: 'ai', text: '可能是把英文等級翻成中文了,問題在 run.py。要我切 Agent 修嗎?' }]} /></div>
  </div><Foot label="U11 · 課3 · 段5" /></div>
);
const CompareC3: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 5 · Claude × Codex · 同一個任務</Eyebrow><Title size={46}>同樣的事,不同的按鈕</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, marginTop: 28, maxWidth: 1580, border: `1px solid ${C.line}`, borderRadius: 14, overflow: 'hidden' }}>
      {[['要做的事', 'Claude Code', 'Codex'], ['只分析不改', 'Plan mode(shift+tab)', 'Chat 模式'], ['放它動手', 'Auto-Accept', 'Agent'], ['換模型 / 深度', '/model', '模型選單 + reasoning'], ['看它改了什麼', 'git diff / /review', 'git diff / diff 審閱'], ['修好 risk_level', '✓ 變 high', '✓ 變 high']].map((row, ri) => row.map((cell, ci) => (
        <div key={`${ri}-${ci}`} style={{ padding: '15px 22px', borderTop: ri ? `1px solid ${C.line}` : 'none', borderLeft: ci ? `1px solid ${C.line}` : 'none', background: ri === 0 ? '#2a2d35' : ci === 0 ? '#f7f8fa' : '#fff', color: ri === 0 ? '#fff' : C.ink, fontWeight: ri === 0 || ci === 0 ? 800 : 500, fontSize: ri === 0 ? 24 : 23, fontFamily: ci === 0 || ri === 0 ? undefined : mono }}>{cell}</div>
      )))}
    </div>
    <div style={{ marginTop: 20 }}><Harvest>兩邊都把同一個 bug 修好了。你會的是流程,不是某個工具 ── 換工具照樣會。</Harvest></div>
  </div><Foot label="U11 · 課3 · 段5" /></div>
);
const DualDone: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 5 · 檢查點</Eyebrow><Title size={50}>同一個功能,你用兩個 AI 都做出來了</Title>
    <div className="ts-rise" style={{ marginTop: 32 }}><Checkpoint items={['裝好 Codex、登入能打字', '知道 Codex 的 Chat/Agent 對應 Claude 的 Plan/Auto', '同一個 risk_level bug,兩個 AI 各修好一次', '兩邊 python run.py 都印出 low/medium/high']} /></div>
  </div><Foot label="U11 · 課3 · 段5" /></div>
);

const Sec5: Page = () => <Section no="6" title="收束 + 一句重要的話" time="3:50 - 4:00" sub="今天你做出一個資料檢查功能,還讓兩個 AI 都幫你修好同一個錯。" />;
const Punchline: Page = () => (
  <div style={{ ...fill, background: C.ink, color: '#fff' }}><div style={{ ...pad }}>
    <Eyebrow>今天最重要的一句</Eyebrow>
    <div style={{ fontSize: 80, fontWeight: 900, lineHeight: 1.2, marginTop: 28, maxWidth: 1540, letterSpacing: '-0.02em' }}>AI 講得很<span style={{ color: C.orange }}>順</span>,<br />不代表它講得<span style={{ color: C.orange }}>對</span>;<br />你要看它<span style={{ color: C.orange }}>有沒有根據</span>。</div>
    <div style={{ fontSize: 31, color: 'rgba(255,255,255,0.7)', marginTop: 34, maxWidth: 1380, lineHeight: 1.55 }}>資料髒,答案就髒。它說不出為什麼,就先別信。會花錢、影響顧客的,找人確認。你的常識,就是 AI 最好的煞車。</div>
  </div><div style={{ position: 'absolute', left: 110, bottom: 44, fontFamily: mono, fontSize: 19, color: 'rgba(255,255,255,0.5)' }}>U11 · 課3 · 記住這句</div></div>
);
const Recap: Page = () => {
  const pts = [['看懂資料 + 固定四欄', '需求與輸出格式:insight / anomalies / risk_level / action_items。'], ['信任規則', '不齊先停、沒依據不採用、高風險找人。'], ['ReAct 修錯', 'Plan 先想 → Edit 做 → 看結果,把 risk_level 修好。'], ['兩個 AI 都做', '同一個任務,Claude Code 與 Codex 各修好一次。']];
  return (
    <div style={fill}><div style={pad}><Eyebrow>今天我們學了四件事</Eyebrow>
      <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 42, maxWidth: 1520 }}>
        {pts.map(([a, b], i) => <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}><span style={{ fontFamily: mono, fontSize: 34, color: C.orange, fontWeight: 800, lineHeight: 1.2 }}>{String(i + 1).padStart(2, '0')}</span><div><div style={{ fontSize: 36, fontWeight: 800 }}>{a}</div><div style={{ fontSize: 26, color: C.muted, marginTop: 4 }}>{b}</div></div></div>)}
      </div>
    </div><Foot label="U11 · 課3 · 收束" /></div>
  );
};
const Homework: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>回家作業 · 輕量,只要一件</Eyebrow><Title>讓 AI 看一份資料,並挑出它的問題</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 44, maxWidth: 1480 }}>
      <div style={{ background: C.card, border: `2px solid ${C.orange}`, borderRadius: 16, padding: '24px 34px' }}><span style={{ fontFamily: mono, fontSize: 22, color: C.orange, fontWeight: 700 }}>必做(15 分鐘)</span><div style={{ fontSize: 32, marginTop: 10, lineHeight: 1.4 }}>用 @ + 四欄 prompt 讓 AI 分析 sales.csv,然後<B>找出一個它判斷錯、或沒依據的地方</B>,記下來。</div></div>
      <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '22px 34px' }}><span style={{ fontFamily: mono, fontSize: 22, color: C.muted, fontWeight: 700 }}>選做</span><div style={{ fontSize: 27, marginTop: 8, color: C.muted, lineHeight: 1.4 }}>自己在 csv 裡多塞一個怪數字,看 AI 抓不抓得到。</div></div>
    </div>
  </div><Foot label="U11 · 課3 · 回家作業" /></div>
);
const Next: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>下一堂預告</Eyebrow><Title size={58}>做得出功能了,<br />那 ── 怎麼每次都收得乾淨?</Title><div style={{ fontSize: 32, color: C.muted, marginTop: 30, lineHeight: 1.5 }}>最後一堂「收得乾淨」:Git 完整驗收、防走鐘三症、把整套流程固定成 <B>Skills</B> 與 <B>MCP</B>,交接得出去。今天辛苦了。</div></div><Foot label="U11 · 課3 · 下一堂" /></div>
);

export const meta: SlideMeta = { title: 'U11 課3:做得出功能 — 同一個任務,兩個 AI 都做給你看', createdAt: '2026-06-30T04:13:30.000Z' };

export const notes: (string | undefined)[] = [
  '各位同學好,第三堂。前兩堂都在改畫面,這一堂換資料。主題一句話:資料會說謊,你要看它有沒有根據。我們會學怎麼看出資料異常、怎麼讓 AI 固定格式回答、還會在 Claude Code 面板裡故意製造一個錯再修好。',
  '先接上一堂。你已經會用 Plan mode 安全改標語。但真實工作更多時候是要 AI 幫你看資料、給建議。你可能會想說資料丟給 AI 它那麼聰明會自己分析吧?會分析,但它不一定會懷疑。資料有錯它常常照單全收還很有自信給建議,那就危險。',
  '先講為什麼。想像一份賣東西的資料,藏著銷量負數、營收大到不合理、某天整個缺掉。AI 如果沒發現還很有自信給建議,這比它不會還危險。',
  '看路線。五段:看懂資料、固定四欄、信任規則、用 Claude Code 修錯、換 Codex 做同一件事。中間休息一次。我們用上一堂專案的 data-lab,還有第二堂裝好的 Claude Code 面板,段五再加裝 Codex。',
  '今天先補八個 AI 工具核心技能:說清楚目標、指定檔案或資料、要求固定格式、先列異常再建議、要求說根據、給驗收標準、錯誤訊息整段貼回、修完看 diff。重點不是問得多,是問得可檢查。',
  '老師控場記住一個節奏:每十到十五分鐘一次,固定 prompt、固定操作、固定驗收、固定下一步。不要把學生丟去自由發想,同一段做完、同一個結果過關,才往下一步。',
  '暖身判斷題,先不用 AI。銷量 -5 不行,要先確認;營收 0 但銷量 20 不行,欄位互相矛盾;某天整列空白不行,缺漏不能腦補;銷量 12 營收 720 看起來合理。',
  '錯誤情境:AI 說營收明顯成長,建議提高備貨量。聽起來很順,但如果它沒列資料列,就先踩煞車。追問它:請列出支持這句話的資料列,負數過大缺漏先排除。',
  '四欄輸出有四個驗收點:有 insight anomalies risk_level action_items;anomalies 有資料列或原因;risk_level 只能 low medium high;action_items 是下一步行動,不是持續觀察這種空話。',
  '這張 Prompt 卡是防止 AI 編故事的剎車。分析 sales.csv 時先列採用或排除的資料列,負數過大缺漏放進 anomalies,沒有資料支持就標不可採用,每個 action item 要對應到 anomalies 或 insight。',
  '段一,看懂資料,CSV 與 JSON。今天只要你看得懂、看得出哪裡怪,不用會寫。',
  'CSV 像 Excel,JSON 像一張資料卡。CSV 逗號隔開一列一筆一欄一項;JSON 每個欄位有名字有值。下一頁是一份真的 sales.csv,我故意藏了幾個問題看你抓不抓得出來。',
  '這就是那份資料。你沒學程式也看得出哪裡怪吧?紅色負數銷量 -5 不可能、橘色過大一天賣 9999 太極端、灰色缺漏整列空的。三種顏色三種怪。',
  '第一種,負數。第 2 列銷量 -5、營收 -600。銷量營收不可能是負的,多半是打錯或退貨記成負數。看到負號先打問號:負數多半是打錯或記錯,先標記別拿來算。',
  '第二種,過大。第 3 列 9999、營收近六十萬。小店一天賣 9999 包幾乎不可能,可能多打幾個 0 或測試資料忘了刪。極端值先懷疑是不是打錯,而不是直接相信。',
  '第三種,缺漏。第 4 列整格空的。那天數字根本沒填,你不能把空的當 0 也不能猜,缺了就是缺了要先去問。缺漏不要自己腦補,標出來、去補齊。',
  '這就是資料異常的直覺:負數、過大、缺漏。不需要會寫程式,生活常識就抓得到。這份直覺等下要拿來檢查 AI 的答案。能指出這三種異常,段一第一關過。',
  '另一種格式 JSON。CSV 是一排排,JSON 是一張卡,每個值前面有名字,你一看就知道哪個數字是什麼。等下 AI 的輸出就是 JSON。看 JSON 先看名字,再看冒號後面的值。',
  '用面板看資料,@。打開上一堂的 Claude Code 面板,我們用 @ 把資料檔指給它而不是整段複製。輸入框打 @ 選 sales.csv;切到 Plan mode 它只看不改。檔案標籤出現、底部 plan mode,就可以開始問它資料的事。',
  '段一檢查點:知道 CSV 像 Excel JSON 像資料卡、能指出三種異常、會用 @ 把 sales.csv 指給面板。',
  '段二,固定四欄,讓輸出每次一樣。',
  '別讓 AI 寫作文,讓它填表。你可能會想說它講得詳細不是很好嗎?當下好像好,但下次格式又不一樣,你每次重讀重找。固定四個欄位 insight、anomalies、risk_level、action_items,一眼知道去哪看。我們一欄一欄看。',
  '四欄總覽,各管一件事:insight 一句總結、anomalies 怪的地方、risk_level 高中低、action_items 能做的事。',
  '第一欄 insight,一句話洞察,先看這句抓重點,它是整份報告的標題。例如最近三天資料只有兩天可信先別下結論。',
  '第二欄 anomalies,把怪的、需要你確認的列出來,就是你段一學的負數過大缺漏。',
  '第三欄 risk_level,風險等級只能 low medium high,一眼知道嚴不嚴重。固定三個值後面才好自動處理 —— 這點等下除錯會用到。',
  '第四欄 action_items,具體能馬上做的事,不是空話,是你現在可以去做什麼。例如先查那兩筆是不是打錯。',
  '這是 Prompt 卡,規定它就用四欄回我,加四條限制:有負數過大缺漏列進 anomalies、資料不足不要硬給、沒依據標不可採用、risk_level 只能 low medium high。',
  '貼下去你會看到四欄,每次都長一樣。它把怪資料挑進 anomalies,因為資料被汙染它不硬算營收,先叫你去查。',
  '對照一下,同一份資料兩種回答。作文式落落長沒指出髒資料還叫你進貨;四欄式 insight 一句、anomalies 三筆怪、risk high、action 先查單據,一眼看懂能行動。同一個 AI 規定格式前後差很多,格式就是品質。',
  '為什麼要固定?打個比方像發票,格式固定你掃一眼就知道去哪看金額。規定格式不是龜毛,是讓輸出可以被信任、被自動接下去。檢查點:拿到四欄、看得懂每欄、risk 是 low medium high。',
  '休息十分鐘。回來我們先講什麼時候別信 AI,再故意製造一個錯用流程修好。',
  '回來了。段三,信任規則,什麼時候別信它。',
  '順,不等於對。AI 講錯跟講對一樣有自信。所以不能只看它講得順不順,要看有沒有根據。記三句話就好。',
  '三條信任規則,當口訣背:資料不齊先停、沒有依據不採用、高風險找人確認。',
  '情境練習,這幾種你會信嗎?AI 說營收成長 20% 但那天資料空的,不信,資料不齊先停;說建議下架但說不出根據,不採用;說把售價砍半,找人確認,高風險;說第 3 筆 9999 可能打錯要確認,可信,有依據而且是請你確認。',
  '一個重要觀念 Human-in-the-loop。AI 先看先給判斷,關鍵決策人看過,才真的執行。AI 幫你看得更快,但最後拍板負責的永遠是你。',
  '段三檢查點:能背三條規則、看一個建議能判斷該不該信、知道高風險要人工確認。',
  '段四,修一次錯,在面板裡 ReAct。我們故意讓程式出一個錯,重點不是它壞了,是怎麼在面板帶它照流程修。',
  '先看見錯。跑 python run.py,risk_level 印出嚴重。但規格說只能 low medium high。這時候不要說 AI 壞了,帶著它照流程修。',
  '除錯節奏叫 ReAct:Reason 先想可能什麼意思、Act 做一步看個檔或跑指令、Observe 看結果對不對。沒修好再來一輪。這就是 AI 在 Plan mode 幫你除錯時做的事。',
  '第一步的 Prompt 卡,Plan mode 先分析。先切 Plan mode 不要改檔,告訴它 risk_level 印出其他文字,請它先分析可能什麼意思、原因、相關檔案、怎麼確認、建議怎麼修。',
  '你會看到它先講為什麼。它推測程式把英文等級翻成中文了,問題在 run.py 某段,而且因為 Plan mode 它還沒動任何檔。先看它分析合不合理,再決定要不要放它修。',
  '第二步,切 Edit 放行。覺得合理才讓它改:shift tab 切離 Plan mode;貼同意請照分析修正、只改 run.py、改完告訴我改哪、為什麼、怎麼確認。',
  '驗收,再跑一次確認修好。回終端機再打 python run.py,看 risk_level 變成 low medium high,再 git diff 看只動該動的段。',
  '看它改了什麼。跟第二堂一樣 git diff 確認它只動該動的:把翻成中文那行拿掉,直接用英文等級。修完一定看 diff,確認沒順手改別的。',
  '你剛剛完整修好一個 bug。risk_level 變成 low medium high,你用 ReAct 修好了,記得 commit。遇到錯不要怕也不要瞎改:Plan mode 先想、再放它做、再看結果,一輪一輪收斂。',
  '除錯卡住:它一上來就要改,先確認你在 Plan mode,還要改就回它先只分析;修完還是錯,把新錯誤訊息整段貼回面板再走一輪;看不懂分析,叫它用聽得懂的話講一個最可能原因。檢查點:先 Plan 分析再 Edit 修、risk 變正確、diff 看過已 commit。',
  '段五,同一個任務換 Codex 再做一次。剛剛用 Claude Code 修好 risk_level,現在換 OpenAI 的 Codex 做一模一樣的任務,你會發現名字不同流程一樣。',
  'Codex 是 OpenAI 的 coding agent,跟 Claude Code 一樣會讀專案、幫你改、做 review,也是 VS Code 插件。打個比方像兩台不同牌子的車,今天不是比車,是讓你知道會開一台另一台也會開,因為你會的是流程不是某個按鈕。',
  '這是擴充功能商店裡的 Codex,發行者是 OpenAI。裝法跟第二堂的 Claude Code 一樣:搜尋、Install、登入。',
  '動手裝 Codex,跟裝 Claude Code 一樣:擴充功能搜尋 Codex 認明發行者 OpenAI 按 Install;打開面板用 ChatGPT 帳號登入授權;看面板上方模式與模型。搜尋到很多類似的就認發行者,面板沒出現看側欄或重開 VS Code。',
  'Codex 的模式跟 Claude 不一樣:Chat 只討論不動手大約等於 Claude 的 Plan、Agent 自己動手但有你監督大約等於 Auto、Agent Full Access 最大自主權最小心用。名字不同精神一樣:你決定它能動多少,還能調 reasoning 低中高。',
  '這是官方 Codex IDE features 頁,佐證剛剛的模式。官方列的正是我們要用的:換模型、調思考深度、選核准模式。',
  '同一個 bug 用 Codex 修。用同一段 debug prompt,先用 Chat 模式問分析不要改,它會推測是把英文等級翻成中文了;覺得合理再切 Agent 放它改;再跑 python run.py,risk_level 一樣變 high。同一段話兩個工具都吃。',
  '把兩邊並排對照:只分析不改 Claude 是 Plan、Codex 是 Chat;放它動手 Claude 是 Auto、Codex 是 Agent;換模型調深度看 diff 也各有方式;最後兩邊都把 risk_level 修成 high。你會的是流程不是某個工具,換工具照樣會。',
  '段五檢查點:裝好 Codex 登入能打字、知道 Chat Agent 對應 Plan Auto、同一個 bug 兩個 AI 各修好一次、兩邊 run.py 都印出 low medium high。',
  '最後一段,收束。今天你做出一個資料檢查功能,還讓兩個 AI 都幫你修好同一個錯。',
  '今天最重要的一句:AI 講得很順不代表它講得對,你要看它有沒有根據。資料髒答案就髒,它說不出為什麼就先別信,會花錢影響顧客的找人確認。你的常識就是 AI 最好的煞車。',
  '今天四件事:看懂資料加固定四欄、三條信任規則、ReAct 修好 risk_level、同一個任務用 Claude Code 和 Codex 各做一次。',
  '回家作業一件:用 @ 加四欄 prompt 讓 AI 分析 sales.csv,找出一個它判斷錯或沒依據的地方記下來。選做是自己多塞一個怪數字看它抓不抓得到。',
  '下一堂預告:會改、會看資料、會修錯了,那怎麼每次都做得一樣好?最後一堂把整套流程固定下來:Git、再裝一個 Codex 插件對照、Skills、MCP。今天辛苦了。',
];

export default [
  Cover, Recap0, Why, Roadmap,
  AiSkills, TeacherCadence, DataJudgeWarmup, BadAiAnswer, FormatCheck, EvidencePrompt,
  Sec1, CsvHead, CsvShow, AnomNeg, AnomBig, AnomMiss, CsvSpot, JsonShow, FeedAt, Sec1Done,
  Sec2, FixedHead, FourFields, FInsight, FAnom, FRisk, FAction, DataPrompt, JsonSee, BadGood, WhyFixed, Break1,
  Sec3, TrustHead, ThreeRules, Scenario, HITL, TrustDone,
  Sec4, BugHead, ReActHead, DebugPrompt, DebugAnalysis, FixPrompt, DebugVerify, DebugDiff, DebugDone, Pit,
  SecCodex, WhatIsCodexC3, CodexMarketReal, InstallCodexC3, CodexModesC3, CodexIdeReal, CodexDebugSame, CompareC3, DualDone,
  Sec5, Punchline, Recap, Homework, Next,
] satisfies Page[];
