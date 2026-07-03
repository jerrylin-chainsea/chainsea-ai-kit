import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';

// ── 統一風格 tokens(沿用 U11-c1 / U12-14 教學系列)────────────────────────
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
const OK = '#0e7a52'; const RED = '#c0392b'; const BLUE = '#2f5fb3'; const PUR = '#7a4cc4';
const mono = '"JetBrains Mono", "SF Mono", ui-monospace, monospace';

const css = `@keyframes ts-up{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.ts-rise>*{animation:ts-up .55s cubic-bezier(.16,1,.3,1) both}
.ts-rise>*:nth-child(2){animation-delay:.05s}.ts-rise>*:nth-child(3){animation-delay:.10s}
.ts-rise>*:nth-child(4){animation-delay:.15s}.ts-rise>*:nth-child(5){animation-delay:.20s}.ts-rise>*:nth-child(6){animation-delay:.25s}
@media (prefers-reduced-motion:reduce){.ts-rise>*{animation:none!important}}`;
if (typeof document !== 'undefined' && !document.getElementById('ts-u11c2')) {
  const el = document.createElement('style'); el.id = 'ts-u11c2'; el.textContent = css; document.head.appendChild(el);
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
const Term = ({ title, rows, size = 22 }: { title: string; rows: [string, string][]; size?: number }) => {
  const color = (k: string) => k === 'cmd' ? '#e8eaed' : k === 'ok' ? '#7fd4a8' : k === 'err' ? '#ff8585' : k === 'dim' ? '#6b7280' : '#cdd3df';
  return (
    <div style={{ background: '#0f1117', borderRadius: 14, overflow: 'hidden', border: '1px solid #232733', boxShadow: '0 18px 50px -26px rgba(0,0,0,0.5)' }}>
      <div style={{ display: 'flex', gap: 9, padding: '12px 18px', background: '#161a22', borderBottom: '1px solid #232733', alignItems: 'center' }}>{['#ff5f57', '#febc2e', '#28c840'].map((c, i) => <span key={i} style={{ width: 13, height: 13, borderRadius: '50%', background: c }} />)}<span style={{ fontFamily: mono, fontSize: 18, color: '#6b7280', marginLeft: 10 }}>{title}</span></div>
      <pre style={{ margin: 0, padding: '18px 24px', fontFamily: mono, fontSize: size, lineHeight: 1.7, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{rows.map(([k, t], i) => <div key={i} style={{ color: color(k) }}>{k === 'cmd' ? <span style={{ color: C.orange }}>$ </span> : null}{t}</div>)}</pre>
    </div>
  );
};

// ── Claude Code 面板(自製高擬真)─────────────────────────────
const modeColor = (m: string) => m === 'plan' ? PUR : m === 'auto' ? OK : C.muted;
const modeLabel = (m: string) => m === 'plan' ? 'plan mode（只計畫,不改檔）' : m === 'auto' ? 'auto-accept edits（直接改）' : 'default（每次問你）';
const ClaudePanel = ({ mode = 'default', model = 'Opus', convo, placeholder = '輸入訊息給 Claude…' }: { mode?: string; model?: string; convo?: { who: 'user' | 'ai'; text: string }[]; placeholder?: string }) => (
  <div style={{ background: '#1e1e1e', borderRadius: 14, overflow: 'hidden', border: '1px solid #333', boxShadow: '0 18px 50px -26px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 16px', background: '#2a2a2a', borderBottom: '1px solid #1b1b1b' }}>
      <span style={{ width: 22, height: 22, borderRadius: 6, background: C.orange, display: 'grid', placeContent: 'center', fontSize: 14 }}>✳</span>
      <span style={{ fontFamily: mono, fontSize: 18, color: '#e8eaed', fontWeight: 700 }}>Claude Code</span>
      <span style={{ marginLeft: 'auto', fontFamily: mono, fontSize: 16, color: '#cdd3df', background: '#3a3a3a', borderRadius: 999, padding: '4px 12px' }}>模型:{model} ⌄</span>
    </div>
    <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 10, minHeight: 150 }}>
      {(convo ?? []).map((m, i) => (
        <div key={i} style={{ alignSelf: m.who === 'user' ? 'flex-end' : 'flex-start', maxWidth: '86%', background: m.who === 'user' ? '#3a3f4b' : '#272727', color: '#e3e6ea', borderRadius: m.who === 'user' ? '12px 12px 4px 12px' : '12px 12px 12px 4px', padding: '11px 15px', fontSize: 19, lineHeight: 1.45 }}>{m.text}</div>
      ))}
    </div>
    <div style={{ margin: '0 14px 10px', border: '1px solid #3a3a3a', borderRadius: 10, padding: '10px 12px', background: '#252526' }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>{['@AGENTS.md', '@data.js'].map((t, i) => <span key={i} style={{ fontFamily: mono, fontSize: 15, color: '#9cdcfe', background: '#1e1e1e', border: '1px solid #3a3a3a', borderRadius: 6, padding: '2px 8px' }}>{t}</span>)}</div>
      <div style={{ fontFamily: mono, fontSize: 17, color: '#7c828c' }}>{placeholder}</div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 16px', background: '#181818', borderTop: '1px solid #2b2b2b' }}>
      <span style={{ width: 9, height: 9, borderRadius: '50%', background: modeColor(mode) }} />
      <span style={{ fontFamily: mono, fontSize: 16, color: modeColor(mode), fontWeight: 700 }}>{modeLabel(mode)}</span>
      <span style={{ marginLeft: 'auto', fontFamily: mono, fontSize: 15, color: '#6b7280' }}>shift+tab 切換</span>
    </div>
  </div>
);

// 兩欄分工卡
const SplitCol = ({ who, color, bg, items }: { who: string; color: string; bg: string; items: string[] }) => (
  <div style={{ flex: 1, background: bg, border: `2px solid ${color}`, borderRadius: 18, padding: '26px 30px' }}>
    <div style={{ fontSize: 32, fontWeight: 800, color }}>{who}</div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 }}>{items.map((t, i) => <div key={i} style={{ fontSize: 26, lineHeight: 1.35 }}>・{t}</div>)}</div>
  </div>
);

// 主線流程
const FlowStep = ({ n, label, kind }: { n: number; label: string; kind: 'ai' | 'you' | 'do' }) => {
  const c = kind === 'ai' ? BLUE : kind === 'you' ? C.orange : OK;
  const bg = kind === 'ai' ? '#eef4ff' : kind === 'you' ? '#fbf3ee' : '#eaf6f0';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, minWidth: 128 }}>
      <div style={{ width: 38, height: 38, borderRadius: '50%', background: c, color: '#fff', display: 'grid', placeContent: 'center', fontFamily: mono, fontWeight: 700, fontSize: 19 }}>{n}</div>
      <div style={{ background: bg, border: `2px solid ${c}`, borderRadius: 12, padding: '11px 8px', fontSize: 20, fontWeight: 700, textAlign: 'center', color: '#222', width: '100%' }}>{label}</div>
    </div>
  );
};
const Arrow = () => <div style={{ alignSelf: 'center', color: C.faint, fontSize: 28, marginTop: 28 }}>→</div>;
const FlowDiagram = () => (
  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: 6, flexWrap: 'wrap' }}>
    <FlowStep n={1} label="需求" kind="you" /><Arrow />
    <FlowStep n={2} label="planner 計畫" kind="ai" /><Arrow />
    <FlowStep n={3} label="人審計畫" kind="you" /><Arrow />
    <FlowStep n={4} label="implementer" kind="ai" /><Arrow />
    <FlowStep n={5} label="reviewer" kind="ai" /><Arrow />
    <FlowStep n={6} label="build" kind="do" /><Arrow />
    <FlowStep n={7} label="commit / push" kind="do" />
  </div>
);

// AI 小團隊三角色卡
const RoleCard = ({ icon, name, does, dont, color, bg }: { icon: string; name: string; does: string; dont: string; color: string; bg: string }) => (
  <div style={{ background: bg, border: `2px solid ${color}`, borderRadius: 18, padding: '26px 28px' }}>
    <div style={{ fontSize: 52 }}>{icon}</div>
    <div style={{ fontFamily: mono, fontSize: 30, fontWeight: 800, color, marginTop: 10 }}>{name}</div>
    <div style={{ fontSize: 25, lineHeight: 1.45, marginTop: 12 }}>{does}</div>
    <div style={{ fontSize: 22, lineHeight: 1.4, marginTop: 12, color: RED }}>✕ {dont}</div>
  </div>
);

// 守則檔案卡
const FileCard = ({ name, sub, lines, color }: { name: string; sub: string; lines: string[]; color: string }) => (
  <div style={{ background: '#fff', border: `2px solid ${color}`, borderRadius: 16, overflow: 'hidden', boxShadow: '0 12px 40px -24px rgba(30,30,40,0.35)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 20px', background: '#f0f2f5', borderBottom: `1px solid ${C.line}` }}>
      <span style={{ fontSize: 22 }}>📄</span><span style={{ fontFamily: mono, fontSize: 23, fontWeight: 800, color }}>{name}</span>
      <span style={{ marginLeft: 'auto', fontSize: 18, color: C.muted }}>{sub}</span>
    </div>
    <div style={{ padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: 8 }}>
      {lines.map((t, i) => <div key={i} style={{ fontFamily: mono, fontSize: 20, color: C.muted, lineHeight: 1.4 }}>{t}</div>)}
    </div>
  </div>
);

// Human-in-the-loop 拍板點卡
const GateCard = ({ n, name, q }: { n: string; name: string; q: string }) => (
  <div style={{ background: '#fbf3ee', border: `2px solid ${C.orange}`, borderRadius: 18, padding: '26px 28px' }}>
    <div style={{ fontFamily: mono, fontSize: 26, color: C.orange, fontWeight: 800 }}>{n}</div>
    <div style={{ fontSize: 33, fontWeight: 800, marginTop: 10 }}>{name}</div>
    <div style={{ fontSize: 25, color: C.muted, lineHeight: 1.45, marginTop: 12 }}>{q}</div>
  </div>
);

// ══════════ 開場:Vibe Coding,但要有護欄 ══════════
const Cover: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>U11 · 第 2 堂 / 共 4 堂 · 4 小時 · 實戰</Eyebrow>
    <div className="ts-rise" style={{ marginTop: 34 }}><div style={{ fontSize: 100, fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.06 }}>Vibe Coding<br />with Guardrails</div>
      <Lead>用 Claude Code <B>管理一個 AI 小團隊</B>,完成你的第一個功能:智慧推薦區塊。今天不教工具,直接開工。</Lead></div>
  </div><div style={{ position: 'absolute', right: 110, bottom: 84, fontFamily: mono, fontSize: 21, color: C.faint }}>AGENTS.md · planner / implementer / reviewer · git 收尾</div><Foot label="U11 · 課2" /></div>
);
const RecapC1: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>先接上一堂</Eyebrow><Title size={54}>工具你都摸過了,今天直接用</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 34 }}>
      <Lead>上一堂你已經會:VSCode、跑起 web-lab、git status / diff / commit / push、Claude Code 面板、Plan Mode、AI 動手前先計畫。</Lead>
      <Think q={<>「所以今天繼續認識工具?」</>} a={<>不。今天是<B>第一個真正的 AI 開發 workflow</B>:你出需求、AI 分工做事、你把關驗收,做出一個看得到的功能。</>} />
    </div>
  </div><Foot label="U11 · 課2 · 接續" /></div>
);
const VibeDef: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>先補一個現代名詞</Eyebrow><Title size={54}>What is Vibe Coding?</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 26, marginTop: 36 }}>
      <div style={{ borderLeft: `6px solid ${C.orange}`, paddingLeft: 34, maxWidth: 1440 }}>
        <div style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.4 }}>用自然語言描述想法,讓 AI 直接產生、修改、串接程式;人一邊看結果,一邊迭代。</div>
      </div>
      <Lead>不寫每一行程式,而是<B>用講的推進專案</B>。這已經是業界真實的工作方式 ── 但做得好跟做得爛,差別很大。</Lead>
    </div>
  </div><Foot label="U11 · 課2 · Vibe Coding" /></div>
);
const VibeGood: Page = () => {
  const items = [['快速看到畫面', '講完一句話,幾分鐘後畫面就變了'], ['適合 prototype', '想法先跑起來,再決定要不要做細'], ['不熟語法也能開始', '你負責想清楚,語法 AI 處理'], ['想法快速變雛形', '從「我想要…」到「可以點的東西」']];
  return (
    <div style={fill}><div style={pad}><Eyebrow>好處 · 為什麼大家都在做</Eyebrow><Title size={54}>Vibe Coding 的好處</Title>
      <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 22, marginTop: 40, maxWidth: 1540 }}>
        {items.map(([a, b], i) => <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '26px 28px' }}><div style={{ fontSize: 32, fontWeight: 800, color: OK }}>{a}</div><div style={{ fontSize: 25, color: C.muted, marginTop: 8, lineHeight: 1.45 }}>{b}</div></div>)}
      </div>
    </div><Foot label="U11 · 課2 · Vibe Coding" /></div>
  );
};
const VibeRisk: Page = () => {
  const items = [['AI 會猜', '你沒說清楚的,它自己腦補'], ['AI 會多改', '你要一個區塊,它順便「優化」三個檔'], ['能跑 ≠ 好維護', '畫面對了,裡面可能一團亂'], ['不看 diff 就是在賭', '你不檢查,就等於閉著眼睛簽名']];
  return (
    <div style={fill}><div style={pad}><Eyebrow>風險 · 為什麼會出事</Eyebrow><Title size={54}>Vibe Coding 的風險</Title>
      <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 22, marginTop: 40, maxWidth: 1540 }}>
        {items.map(([a, b], i) => <div key={i} style={{ background: '#fff7f4', border: '1px solid #f3d0c2', borderRadius: 16, padding: '26px 28px' }}><div style={{ fontSize: 32, fontWeight: 800, color: RED }}>{a}</div><div style={{ fontSize: 25, color: C.muted, marginTop: 8, lineHeight: 1.45 }}>{b}</div></div>)}
      </div>
    </div><Foot label="U11 · 課2 · Vibe Coding" /></div>
  );
};
const VibePunch: Page = () => (
  <div style={{ ...fill, background: C.ink, color: '#fff' }}><div style={{ ...pad }}>
    <Eyebrow>本堂 punchline</Eyebrow>
    <div style={{ fontSize: 82, fontWeight: 900, lineHeight: 1.2, marginTop: 28, maxWidth: 1560, letterSpacing: '-0.02em' }}>Vibe Coding 不是<span style={{ color: C.orange }}>亂感覺</span>,<br />是<span style={{ color: C.orange }}>有護欄</span>的快速迭代。</div>
    <div style={{ fontSize: 31, color: 'rgba(255,255,255,0.7)', marginTop: 34, maxWidth: 1380, lineHeight: 1.55 }}>速度是 AI 給的;護欄是你架的。規則寫進 repo、流程固定節奏、每一輪都有人把關 ── 這樣的快,才能交付。</div>
  </div><div style={{ position: 'absolute', left: 110, bottom: 44, fontFamily: mono, fontSize: 19, color: 'rgba(255,255,255,0.5)' }}>U11 · 課2 · 記住這句</div></div>
);
const TodayTask: Page = () => {
  const items = ['一份 AGENTS.md(寫給 AI 的專案守則)', '一份 CLAUDE.md(Claude Code 的入口)', '一個「智慧推薦區塊」新功能', '一輪 planner → implementer → reviewer 分工', '一次 diff → build → commit → push 收尾'];
  return (
    <div style={fill}><div style={pad}><Eyebrow>今天要帶走的東西</Eyebrow><Title size={54}>下課前,你的 repo 裡會多出這些</Title>
      <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 36, maxWidth: 1480 }}>
        {items.map((t, i) => <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 12, padding: '16px 24px' }}><span style={{ fontFamily: mono, fontSize: 22, color: C.orange, fontWeight: 800 }}>0{i + 1}</span><span style={{ fontSize: 28 }}>{t}</span></div>)}
      </div>
      <div style={{ fontSize: 26, color: C.muted, marginTop: 26 }}>所有 prompt 老師都準備好了 ── 你負責<B>照貼、照看、照驗收</B>。</div>
    </div><Foot label="U11 · 課2 · 任務" /></div>
  );
};
const Roadmap: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>今天的主線 · 一條走到底</Eyebrow><Title size={50}>把規則寫好,再讓 AI 小團隊上工</Title>
    <div className="ts-rise" style={{ marginTop: 44 }}><FlowDiagram /></div>
    <div style={{ fontSize: 27, color: C.muted, marginTop: 44, lineHeight: 1.55, textAlign: 'center' }}>先寫 <Key>AGENTS.md</Key> / <Key>CLAUDE.md</Key> → 定義功能 → 第一輪做出來 → 需求變更再來一輪 → reviewer 檢查 → git 收尾。<br />橘色的步驟是<O>你拍板</O>,藍色是 AI,綠色是驗收動作。中間休息一次。</div>
  </div><Foot label="U11 · 課2 · 路線" /></div>
);
const MainlineDoD: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>你現在在哪條流水線</Eyebrow><Title size={46}>整門課只做一個作品:營運異常 Dashboard</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28, maxWidth: 1520 }}>
      <div style={{ fontFamily: mono, fontSize: 25, background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '20px 26px', lineHeight: 1.6 }}>資料進來 → 檢查資料 → <span style={{ color: C.orange, fontWeight: 800 }}>資料合約 → AI 串接功能(今天)</span> → Dashboard 呈現 → ReAct 修錯 → reviewer 驗收 → build / commit</div>
      <Lead>今天的守則檔與 workflow,都是為了下一堂能安全地把功能做出來。<B>data-lab/report.json</B> 是整個作品的資料合約 —— 欄位固定、值有規則,畫面與通知都吃同一份。</Lead>
      <Harvest>AI 做出來不算完成,通過驗收才算完成。驗收包含:畫面/輸出/diff/build/human review。</Harvest>
    </div>
  </div><Foot label="U11 · 課2 · 主線" /></div>
);
// ══════════ 段 1:專案守則檔 ══════════
const Sec1: Page = () => <Section no="1" title="把規則寫進 repo:AGENTS.md / CLAUDE.md" time="0:12 - 0:30" sub="AI 不該每次都從零理解你的專案。團隊守則寫成檔案放進 repo,每個 AI 進來都先讀它。" />;
const PainDemo: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '620px 1fr', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise"><ClaudePanel mode="default" convo={[{ who: 'user', text: '幫我把首頁標語改一下就好。' }, { who: 'ai', text: '已完成!我順便重排了版面、統一了配色、還把 App.jsx 拆成三個元件,並更新了 package.json…' }, { who: 'user', text: '(git status:7 個檔案被改)' }]} /></div>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div><Eyebrow>段 1 · 先痛一次 · 老師示範</Eyebrow><Title size={46}>只叫它改標語,它動了 7 個檔</Title></div>
      <Lead>這就是<B>沒有護欄的 AI</B>:能力很強、熱心過頭。你要的是一行,它給你一次「大翻修」。記住這個 diff 的樣子 ──</Lead>
      <Harvest>這就是為什麼要有 AGENTS.md / CLAUDE.md,以及等一下的 planner → 人審 → implementer 流程。</Harvest>
    </div>
  </div><Foot label="U11 · 課2 · 段1" /></div>
);
const WhyRules: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 1 · 為什麼需要守則檔</Eyebrow><Title size={54}>新同事報到,第一件事是看團隊守則</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 32 }}>
      <Analogy>AI 每次開新對話,就像<B>新同事第一天報到</B>:能力很強,但不知道這個專案哪些檔能動、怎麼驗收。你可以每次口頭交代 ── 或者,把守則寫成檔案放在門口。</Analogy>
      <Lead>守則檔就是<B>寫給 AI 看的專案規則</B>:專案是什麼、哪些檔可以改、哪些不准碰、改完怎麼驗收。寫一次,每輪對話都自動生效。</Lead>
      <Harvest>與其每次用嘴管 AI,不如把規則寫進 repo。</Harvest>
    </div>
  </div><Foot label="U11 · 課2 · 段1" /></div>
);
const WhatAgentsMd: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 1 · 檔案一</Eyebrow><Title size={56}>AGENTS.md 是什麼?</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 34, maxWidth: 1480 }}>
      {[['通用的 agent rule file', '不是只給 Claude ── 是給「所有 coding agent」看的專案規則'], ['寫專案的遊戲規則', '專案怎麼跑、哪些檔可改、哪些不可改、驗收指令是什麼'], ['跨工具通用', 'Codex、其他 coding agent 也讀得懂這個檔']].map(([a, b], i) => (
        <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'baseline', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '20px 26px' }}><span style={{ flexShrink: 0, fontFamily: mono, fontSize: 22, color: C.orange, fontWeight: 800 }}>0{i + 1}</span><div><div style={{ fontSize: 30, fontWeight: 800 }}>{a}</div><div style={{ fontSize: 25, color: C.muted, marginTop: 4, lineHeight: 1.4 }}>{b}</div></div></div>
      ))}
    </div>
  </div><Foot label="U11 · 課2 · 段1" /></div>
);
const WhatClaudeMd: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 1 · 檔案二</Eyebrow><Title size={56}>CLAUDE.md 是什麼?</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 34, maxWidth: 1480 }}>
      {[['Claude Code 的專案記憶', 'Claude Code 每次啟動,主要讀的就是這個檔'], ['寫 Claude 專屬的規則', '例如「動手前先 Plan Mode」「碰 package.json 先停下來問」'], ['可以 @AGENTS.md 引入共用規則', '一行 import,共用守則不用抄兩份']].map(([a, b], i) => (
        <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'baseline', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '20px 26px' }}><span style={{ flexShrink: 0, fontFamily: mono, fontSize: 22, color: C.orange, fontWeight: 800 }}>0{i + 1}</span><div><div style={{ fontSize: 30, fontWeight: 800 }}>{a}</div><div style={{ fontSize: 25, color: C.muted, marginTop: 4, lineHeight: 1.4 }}>{b}</div></div></div>
      ))}
    </div>
  </div><Foot label="U11 · 課2 · 段1" /></div>
);
const FileRelation: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 1 · 兩檔怎麼搭</Eyebrow><Title size={50}>共用規則寫一份,誰來都讀得到</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 90px 1fr', gap: 0, alignItems: 'center', marginTop: 40, maxWidth: 1540 }}>
      <FileCard name="CLAUDE.md" sub="Claude Code 讀這個" color={C.orange} lines={['@AGENTS.md  ← 引入共用規則', '## Claude Code specific', 'Use Plan Mode before editing.']} />
      <div style={{ textAlign: 'center', fontSize: 40, color: C.faint }}>→</div>
      <FileCard name="AGENTS.md" sub="所有 agent 都讀得懂" color={BLUE} lines={['## Allowed files / Do not edit', '## Workflow', '## Git rules']} />
    </div>
    <div style={{ marginTop: 34 }}><Harvest>規則寫在 AGENTS.md,CLAUDE.md 引用它 ── 未來換工具,守則直接帶著走。</Harvest></div>
  </div><Foot label="U11 · 課2 · 段1" /></div>
);
const RuleLimits: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 1 · 重要限制 · 先講清楚</Eyebrow><Title size={52}>守則檔是 context,不是保險箱</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 32 }}>
      <Think q={<>「規則寫好了,AI 就不會出錯了吧?」</>} a={<>不是。這些檔案是<B>給 AI 的背景說明</B>,不是硬性安全鎖 ── AI 仍可能忘記、仍可能出錯。</>} />
      <Lead>真正的保險,還是今天整套流程:<B>Plan Mode</B> 先計畫、<B>權限</B>控制動手、<B>human review</B> 把關、<B>git diff</B> 驗收。守則檔讓 AI 比較不會走偏,護欄讓走偏時傷不到你。</Lead>
    </div>
  </div><Foot label="U11 · 課2 · 段1" /></div>
);
const AgentsSkeleton: Page = () => {
  const rows = [['## Project', '這是什麼專案'], ['## Allowed files', '這堂課只准改哪三個檔'], ['## Do not edit', '碰都不准碰的清單'], ['## Workflow', '先計畫、核准才改、改最小範圍'], ['## Git rules', '改前 status、改後 diff、人同意才 push']];
  return (
    <div style={fill}><div style={pad}><Eyebrow>段 1 · 我們的 AGENTS.md 長這樣</Eyebrow><Title size={52}>五個區塊,就是五條家規</Title>
      <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 13, marginTop: 34, maxWidth: 1500 }}>
        {rows.map(([a, b], i) => <div key={i} style={{ display: 'grid', gridTemplateColumns: '420px 1fr', gap: 24, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 12, padding: '16px 26px' }}><span style={{ fontFamily: mono, fontSize: 28, color: C.orange, fontWeight: 800 }}>{a}</span><span style={{ fontSize: 26, color: C.muted }}>{b}</span></div>)}
      </div>
      <div style={{ fontSize: 25, color: C.muted, marginTop: 24 }}>下一頁是完整內容 ── 照抄就好,不用自己發明。</div>
    </div><Foot label="U11 · 課2 · 段1" /></div>
  );
};
const AgentsContent: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 1 · 照抄卡 · AGENTS.md</Eyebrow><Title size={44}>建立 AGENTS.md,貼上這份內容</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, marginTop: 24, maxWidth: 1600 }}>
      <PromptCard size={20} label="AGENTS.md(前半)">{`# AGENTS.md

## Project
This is a React/Vite practice project for U11.

## Allowed files for this lesson
- src/data.js
- src/App.jsx
- src/styles.css

## Do not edit
- package.json
- package-lock.json
- node_modules/
- .git/`}</PromptCard>
      <PromptCard size={20} label="AGENTS.md(後半,接著貼)">{`## Workflow
1. Plan first.
2. Do not edit before approval.
3. Make the smallest change.
4. After editing, summarize changed files.
5. Run npm run build before commit.

## Git rules
- Check git status before editing.
- Use git diff after editing.
- Do not push unless the human confirms.`}</PromptCard>
    </div>
  </div><Foot label="U11 · 課2 · 段1" /></div>
);
const ClaudeContent: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 1 · 照抄卡 · CLAUDE.md</Eyebrow><Title size={44}>再建立 CLAUDE.md,一樣照貼</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 640px', gap: 30, marginTop: 24, alignItems: 'start', maxWidth: 1620 }}>
      <PromptCard size={22} label="CLAUDE.md(完整內容)">{`# CLAUDE.md

@AGENTS.md

## Claude Code specific
Use Plan Mode before editing.
Ask before changing files.
If the requested change touches package.json, stop and ask first.`}</PromptCard>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Atom n={1} act={<>在 web-lab 專案根目錄建檔:終端機打 <Key>code AGENTS.md</Key>、<Key>code CLAUDE.md</Key>,或 Explorer 右鍵 New File。</>} see="兩個新分頁打開。" />
        <Atom n={2} act={<>分別貼上老師給的內容,<B>存檔</B>。</>} see="Explorer 出現兩個檔案。" />
      </div>
    </div>
  </div><Foot label="U11 · 課2 · 段1" /></div>
);
const RulesPit: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 1 · 卡住了?+ 檢查點</Eyebrow><Title size={50}>兩個檔案就位才往下</Title>
    <div className="ts-rise" style={{ marginTop: 30, maxWidth: 1500 }}><Pitfall items={[['檔名打錯:', '一定是大寫的 AGENTS.md / CLAUDE.md,而且放在 web-lab 專案根目錄(跟 package.json 同層)。'], ['貼完沒存檔:', '分頁標題有黑點 = 沒存。Ctrl+S 存檔。'], ['兩份內容貼反:', 'CLAUDE.md 開頭是 @AGENTS.md;AGENTS.md 開頭是 # AGENTS.md。']]} /></div>
    <div style={{ marginTop: 20 }}><Checkpoint items={['Explorer 看得到 AGENTS.md', 'Explorer 看得到 CLAUDE.md', 'CLAUDE.md 開頭附近有 @AGENTS.md']} /></div>
  </div><Foot label="U11 · 課2 · 段1" /></div>
);

// ══════════ 段 2:Workflow + sub-agent ══════════
const Sec2: Page = () => <Section no="2" title="把 vibe 變流程:workflow 與 AI 小團隊" time="0:30 - 0:45" sub="規則寫好了,再來固定節奏:誰先做、誰檢查、人在哪裡拍板。" />;
const WhatWorkflow: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 2 · Workflow 是什麼</Eyebrow><Title size={54}>不是想到什麼就問什麼</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 32 }}>
      <Lead>Workflow = 每一輪都固定照<B>「先讀、先計畫、再改、再驗收」</B>走。不管需求多小、多急,節奏不變。</Lead>
      <Analogy>像餐廳出餐:點單 → 主廚確認 → 做菜 → 出餐前檢查。生意再忙,<B>沒有一道菜跳過檢查就上桌</B>。</Analogy>
      <Harvest>vibe 給速度,workflow 給節奏 ── 兩個都要。</Harvest>
    </div>
  </div><Foot label="U11 · 課2 · 段2" /></div>
);
const TodayFlow: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 2 · 本堂固定 workflow</Eyebrow><Title size={50}>今天每一輪,都走這一條</Title>
    <div className="ts-rise" style={{ marginTop: 46 }}><FlowDiagram /></div>
    <div style={{ fontSize: 27, color: C.muted, marginTop: 46, lineHeight: 1.55, textAlign: 'center' }}>需求 → planner 列計畫 → <O>人審計畫</O> → implementer 照計畫改 → reviewer 查 diff → build → commit / push。<br />待會第一輪、第二輪需求變更,走的都是同一條。</div>
  </div><Foot label="U11 · 課2 · 段2" /></div>
);
const HumanGates: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 2 · Human-in-the-loop</Eyebrow><Title size={52}>人不寫程式,但人拍板三次</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 40, maxWidth: 1600 }}>
      <GateCard n="拍板 1" name="需求拍板" q="今天只做智慧推薦 ── 不做購物車、不做登入。" />
      <GateCard n="拍板 2" name="計畫拍板" q="AI 要改哪些檔?人先看過、先同意,才准動手。" />
      <GateCard n="拍板 3" name="結果拍板" q="看過 diff、build 通過,人才 commit / push。" />
    </div>
  </div><Foot label="U11 · 課2 · 段2" /></div>
);
const WhatSubAgent: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 2 · Sub-agent 是什麼</Eyebrow><Title size={54}>把 AI 當一個小團隊用</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 32 }}>
      <Lead>與其叫一個 AI「從頭做到尾」,不如讓它<B>分成不同角色、輪流上場</B>:有人只負責計畫、有人只負責動手、有人只負責檢查。</Lead>
      <Analogy>就像工地不會讓同一個人<B>又畫圖、又施工、又驗收</B> ── 自己驗自己的,問題看不見。角色分開,盲點才會被抓到。</Analogy>
      <Harvest>你不是在用一個 AI,你是在帶一個 AI 小團隊。</Harvest>
    </div>
  </div><Foot label="U11 · 課2 · 段2" /></div>
);
const ThreeRoles: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 2 · 三個角色</Eyebrow><Title size={52}>planner / implementer / reviewer</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 36, maxWidth: 1600 }}>
      <RoleCard icon="🧠" name="planner" does="只讀專案、列出計畫:要改哪些檔、怎麼驗收。" dont="不改任何檔案" color={PUR} bg="#f4effc" />
      <RoleCard icon="🔧" name="implementer" does="照「人核准過的計畫」動手,改最小範圍。" dont="不自己加需求" color={BLUE} bg="#eef4ff" />
      <RoleCard icon="🔍" name="reviewer" does="拿著 AGENTS.md 檢查 git diff,回報有沒有超界。" dont="不動手修改" color={OK} bg="#eaf6f0" />
    </div>
    <div style={{ fontSize: 24, color: C.muted, marginTop: 28, textAlign: 'center' }}>今天不深入 agent 架構 ── 我們用<B>老師給的 prompt</B> 讓 Claude Code 輪流扮演這三個角色,就夠了。</div>
  </div><Foot label="U11 · 課2 · 段2" /></div>
);
// ══════════ 段 3:任務規格:智慧推薦區塊 ══════════
const Sec3: Page = () => <Section no="3" title="今天的功能:智慧推薦區塊" time="0:45 - 1:10" sub="比改標語有料,但範圍可控。規格、資料規則、驗收標準,先全部講死,AI 才沒有腦補空間。" />;
const FeatureLook: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 720px', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div><Eyebrow>段 3 · 成品長相</Eyebrow><Title size={50}>網站首頁多一個「今日推薦」</Title></div>
      <Lead>從商品清單裡<B>自動挑一個</B>出來推薦,並說明「為什麼推薦它」。挑選的邏輯,就是我們要 AI 寫的程式。</Lead>
      <Harvest>畫面四個欄位:商品名稱、分類、價格、推薦理由。</Harvest>
    </div>
    <div className="ts-rise">
      <div style={{ background: '#fff', border: `2px solid ${C.orange}`, borderRadius: 18, padding: '30px 34px', boxShadow: '0 18px 50px -26px rgba(30,30,40,0.4)' }}>
        <div style={{ fontFamily: mono, fontSize: 20, color: C.orange, fontWeight: 800, letterSpacing: '0.15em' }}>⭐ 今日推薦</div>
        <div style={{ fontSize: 40, fontWeight: 900, marginTop: 14 }}>🧂 海鹽焦糖醬</div>
        <div style={{ display: 'flex', gap: 14, marginTop: 12 }}><span style={{ fontSize: 22, background: '#eceff3', borderRadius: 999, padding: '4px 16px' }}>手作食品</span><span style={{ fontSize: 24, color: C.orange, fontWeight: 800 }}>NT$ 180</span></div>
        <div style={{ fontSize: 23, color: C.muted, marginTop: 16, lineHeight: 1.5 }}>推薦理由:本店主打商品,目前有庫存,今日精選。</div>
      </div>
    </div>
  </div><Foot label="U11 · 課2 · 段3" /></div>
);
const FeatureSpec: Page = () => {
  const rules = ['從商品清單中選出一個推薦商品', '如果有 featured: true 且 stock > 0,優先推薦它', '否則推薦 rating >= 4.5 且 stock > 0 的商品', '如果都沒有,顯示「今天沒有推薦商品」', '顯示商品名稱、分類、價格、推薦理由'];
  return (
    <div style={fill}><div style={pad}><Eyebrow>段 3 · 功能規格 · 講死不留腦補</Eyebrow><Title size={52}>推薦邏輯只有這五條</Title>
      <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 13, marginTop: 34, maxWidth: 1500 }}>
        {rules.map((t, i) => <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 12, padding: '17px 26px' }}><span style={{ flexShrink: 0, width: 40, height: 40, borderRadius: '50%', background: C.ink, color: '#fff', display: 'grid', placeContent: 'center', fontFamily: mono, fontWeight: 700, fontSize: 21 }}>{i + 1}</span><span style={{ fontSize: 28, fontFamily: i === 1 || i === 2 ? mono : undefined }}>{t}</span></div>)}
      </div>
    </div><Foot label="U11 · 課2 · 段3" /></div>
  );
};
const DataRules: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 700px', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div><Eyebrow>段 3 · 資料規則</Eyebrow><Title size={48}>現在的商品資料,還缺欄位</Title></div>
      <Lead>web-lab 的 <Key>src/data.js</Key> 商品目前只有名稱、描述、價格 ── <B>沒有 featured、stock、rating、分類</B>。</Lead>
      <Lead>所以 planner 的計畫裡,<B>應該包含「在 data.js 幫商品補上這些欄位」</B>。這在允許範圍內,不算超界。</Lead>
    </div>
    <div className="ts-rise"><Term title="src/data.js · 補完欄位後的樣子" size={20} rows={[['dim', '{'], ['dim', "  id: 'p1', title: '海鹽焦糖醬', price: 180,"], ['ok', "  category: '手作食品',"], ['ok', '  featured: true,'], ['ok', '  stock: 5,'], ['ok', '  rating: 4.8,'], ['dim', '},']]} /></div>
  </div><Foot label="U11 · 課2 · 段3" /></div>
);
const FileScope: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 3 · 邊界 · 防呆</Eyebrow><Title size={52}>允許改的 / 不准碰的</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 36, maxWidth: 1540 }}>
      <SplitCol who="✅ 只能改這三個" color={OK} bg="#eaf6f0" items={['src/data.js', 'src/App.jsx', 'src/styles.css']} />
      <SplitCol who="⛔ 碰都不准碰" color={RED} bg="#fff7f4" items={['package.json', 'package-lock.json', 'node_modules/', '.git/']} />
    </div>
    <div style={{ marginTop: 26 }}><Harvest>這份清單已經寫進 AGENTS.md ── 待會 reviewer 就拿它對答案。</Harvest></div>
  </div><Foot label="U11 · 課2 · 段3" /></div>
);
const AcceptUI: Page = () => {
  const items = ['首頁看得到「今日推薦」區塊', '有商品名稱、分類、價格、推薦理由', 'featured 商品優先被推薦', '沒庫存的商品不會被推薦', '無符合商品時顯示「今天沒有推薦商品」'];
  return (
    <div style={fill}><div style={pad}><Eyebrow>段 3 · 驗收標準 1/2 · 畫面</Eyebrow><Title size={52}>畫面過不過,看這五條</Title>
      <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 34, maxWidth: 1480 }}>
        {items.map((t, i) => <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 12, padding: '16px 24px', fontSize: 28 }}><span style={{ color: OK, fontWeight: 800, fontSize: 27 }}>☐</span>{t}</div>)}
      </div>
    </div><Foot label="U11 · 課2 · 段3" /></div>
  );
};
const AcceptGit: Page = () => {
  const items = ['git diff 只出現允許的三個檔案(和守則檔)', 'package.json 完全沒變', 'npm run build 通過'];
  return (
    <div style={fill}><div style={pad}><Eyebrow>段 3 · 驗收標準 2/2 · Git</Eyebrow><Title size={52}>Git 過不過,看這三條</Title>
      <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 34, maxWidth: 1480 }}>
        {items.map((t, i) => <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 12, padding: '16px 24px', fontSize: 28 }}><span style={{ color: OK, fontWeight: 800, fontSize: 27 }}>☐</span>{t}</div>)}
      </div>
      <div style={{ marginTop: 28 }}><Harvest>畫面對了只是一半;Git 乾淨,成果才算可交付。</Harvest></div>
    </div><Foot label="U11 · 課2 · 段3" /></div>
  );
};

// ══════════ 段 4:第一輪 Claude Code ══════════
const Sec4: Page = () => <Section no="4" title="第一輪:Plan → 人審 → Execute" time="1:10 - 2:05" sub="prompt 老師都寫好了。你負責貼、負責看、負責在拍板點說可以或不行。" />;
const PreCheck: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 700px', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div><Eyebrow>段 4 · 開工前 · 防呆</Eyebrow><Title size={50}>先 git status,乾淨才開工</Title></div>
      <Atom n={1} act={<>在 web-lab 終端機跑 <Key>git status</Key>。</>} see="working tree clean。" />
      <Atom n={2} act={<>如果<B>不乾淨</B>(上一堂殘留的修改),舉手 ── 老師帶你先 commit 或還原。</>} see="處理完再跑一次,變乾淨。" />
    </div>
    <div className="ts-rise"><Term title="終端機 · 開工前檢查" rows={[['cmd', 'git status'], ['ok', 'On branch main'], ['ok', 'nothing to commit, working tree clean']]} /></div>
  </div><Foot label="U11 · 課2 · 段4" /></div>
);
const PlannerPrompt1: Page = () => (
  <div style={fill}><div style={pad}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}><Eyebrow>段 4 · Prompt 卡 1 · planner</Eyebrow><span style={{ fontFamily: mono, fontSize: 20, color: PUR, fontWeight: 700 }}>● 先切到 Plan Mode(shift+tab 或 /plan)再貼</span></div>
    <Title size={40}>叫出 planner:整段是同一份 prompt,兩欄一起貼</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, marginTop: 20, maxWidth: 1620 }}>
      <PromptCard size={19} label="planner prompt(前半)">{`你現在先扮演 planner。

請讀:
- AGENTS.md
- CLAUDE.md
- src/data.js
- src/App.jsx
- src/styles.css

我要新增「智慧推薦區塊」。
先不要改檔。

功能規格:
1. 從商品清單中選出一個推薦商品
2. 如果有 featured: true 且 stock > 0,優先推薦它
3. 否則推薦 rating >= 4.5 且 stock > 0 的商品
4. 如果都沒有,顯示「今天沒有推薦商品」
5. 畫面要顯示商品名稱、分類、價格、推薦理由`}</PromptCard>
      <PromptCard size={19} label="planner prompt(後半,接著同一則訊息)">{`限制:
1. 只能改 src/data.js、src/App.jsx、src/styles.css
2. 不要新增套件
3. 不要改 package.json
4. 不要重構整個專案
5. 需要新增檔案,先說明原因,不可直接做

請只用以下格式回答:
A. 你準備修改的檔案
B. 每個檔案各改什麼
C. 資料(data.js 欄位)會如何被使用
D. 驗收方式
E. 可能風險
F. 哪一步需要人類拍板`}</PromptCard>
    </div>
  </div><Foot label="U11 · 課2 · 段4" /></div>
);
const PlanReview1: Page = () => {
  const items = ['它有沒有只改允許檔案?', '它有沒有要新增套件?', '它有沒有要改 package.json?', '它有沒有要重構整個專案?', '它有沒有寫驗收方式?'];
  return (
    <div style={fill}><div style={pad}><Eyebrow>段 4 · 拍板 2 · 人審計畫 · 防呆</Eyebrow><Title size={52}>計畫來了,五個問題問過才放行</Title>
      <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 32, maxWidth: 1480 }}>
        {items.map((t, i) => <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 12, padding: '16px 24px', fontSize: 28 }}><span style={{ flexShrink: 0, fontFamily: mono, fontSize: 21, color: C.orange, fontWeight: 800 }}>Q{i + 1}</span>{t}</div>)}
      </div>
      <div style={{ fontSize: 25, color: C.muted, marginTop: 22 }}>任何一題答案不對 ── <B>不放行</B>,叫它重新計畫。這就是你的工作。</div>
    </div><Foot label="U11 · 課2 · 段4" /></div>
  );
};
const PlanSample: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 640px', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div><Eyebrow>段 4 · 計畫長怎樣(示意)</Eyebrow><Title size={48}>好的計畫,看起來像這樣</Title></div>
      <Lead>檔案清單只有三個允許檔、每檔寫清楚改什麼、有驗收方式、有風險 ── 五題都過,才說「同意,照計畫做」。</Lead>
      <Harvest>看不懂程式沒關係;看得懂「它要動哪些檔」就能把關。</Harvest>
    </div>
    <div className="ts-rise"><ClaudePanel mode="plan" model="Opus" convo={[{ who: 'user', text: '你現在先扮演 planner…(貼上 prompt 卡)' }, { who: 'ai', text: '【計畫】1. data.js:補 category/featured/stock/rating 2. App.jsx:加推薦區塊與挑選邏輯 3. styles.css:區塊樣式。驗收:npm run dev 看首頁。風險:欄位命名需一致。(未改任何檔)' }]} /></div>
  </div><Foot label="U11 · 課2 · 段4" /></div>
);
const ImplPrompt1: Page = () => (
  <div style={fill}><div style={pad}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}><Eyebrow>段 4 · Prompt 卡 2 · implementer</Eyebrow><span style={{ fontFamily: mono, fontSize: 20, color: OK, fontWeight: 700 }}>● 計畫核准後,切出 Plan Mode 再貼</span></div>
    <Title size={44}>換 implementer 上場,照核准的計畫做</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 600px', gap: 30, marginTop: 22, alignItems: 'start', maxWidth: 1620 }}>
      <PromptCard size={20} label="implementer prompt">{`你現在扮演 implementer。
請依照「剛剛已核准的計畫」實作。

限制:
1. 只能修改 AGENTS.md 允許的檔案
2. 不要新增套件
3. 不要改 package.json
4. 不要重構整個專案
5. 超出原計畫,先停下來回報,不可直接修改

完成後請固定回報:
A. 實際修改的檔案
B. 每個檔案改了什麼
C. 哪裡對應到資料欄位
D. 我現在要怎麼手動驗收
E. 哪些地方你沒有改`}</PromptCard>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Atom n={1} act={<>按 <Key>shift</Key>+<Key>tab</Key> 切出 Plan Mode(回 default)。</>} see="面板底部不再是 plan mode。" />
        <Atom n={2} act={<>貼上左邊的 prompt,送出。</>} see="它開始逐檔修改、會請你允許。" />
      </div>
    </div>
  </div><Foot label="U11 · 課2 · 段4" /></div>
);
const WatchList: Page = () => {
  const items = [['它開始改「非允許」的檔案', '例如突然要動 package.json 或新檔案'], ['它要求安裝套件', 'npm install 任何東西都不行'], ['它突然大重構', '「順便整理了整個 App.jsx」= 紅旗'], ['有任何疑慮', '先停,不要按同意 ── 問老師']];
  return (
    <div style={fill}><div style={pad}><Eyebrow>段 4 · AI 動手時,你在幹嘛</Eyebrow><Title size={52}>盯這四件事,有問題就喊停</Title>
      <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 22, marginTop: 36, maxWidth: 1540 }}>
        {items.map(([a, b], i) => <div key={i} style={{ background: '#fff7f4', border: '1px solid #f3d0c2', borderRadius: 16, padding: '24px 28px' }}><div style={{ fontSize: 29, fontWeight: 800, color: RED }}>🚩 {a}</div><div style={{ fontSize: 24, color: C.muted, marginTop: 8, lineHeight: 1.45 }}>{b}</div></div>)}
      </div>
    </div><Foot label="U11 · 課2 · 段4" /></div>
  );
};
const DevVerify1: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 700px', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div><Eyebrow>段 4 · 拍板 3 前半 · 畫面驗收</Eyebrow><Title size={48}>跑起來,自己看一次</Title></div>
      <Atom n={1} act={<>終端機跑 <Key>npm run dev</Key>,開 localhost。</>} see="首頁多了「今日推薦」區塊。" />
      <Atom n={2} act={<>對照驗收標準:名稱、分類、價格、推薦理由都在?</>} see="文案和商品資訊合理。" />
      <Atom n={3} act={<>整頁滑一遍 ── 原本的畫面有沒有壞?</>} see="其他區塊都正常。" />
    </div>
    <div className="ts-rise"><Term title="終端機 · web-lab" rows={[['cmd', 'npm run dev'], ['ok', '  VITE ready in 421 ms'], ['ok', '  ➜  Local:   http://localhost:5173/']]} /></div>
  </div><Foot label="U11 · 課2 · 段4" /></div>
);
const Round1Pit: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 4 · 卡住了?</Eyebrow><Title size={50}>第一輪常見狀況</Title>
    <div className="ts-rise" style={{ marginTop: 32, maxWidth: 1500 }}><Pitfall items={[['它改了不該改的檔:', '先不要接受。跟它說「這超出 AGENTS.md 允許範圍,請撤回」。'], ['它說要裝套件才能做:', '拒絕。這個功能用現有的 React 就寫得出來。'], ['畫面沒變:', '確認 npm run dev 還活著、瀏覽器重新整理;再看它是不是真的改完了。']]} /></div>
    <div style={{ marginTop: 22 }}><Checkpoint items={['首頁看得到「今日推薦」區塊', '四個欄位都有、內容合理', '過程中它沒動過 package.json']} /></div>
  </div><Foot label="U11 · 課2 · 段4" /></div>
);

const Break1: Page = () => <BreakSlide note="回來直接做第二輪:需求變更 ── 流程一模一樣,你會發現快很多。" />;

// ══════════ 段 5:第二輪需求變更 ══════════
const Sec5: Page = () => <Section no="5" title="第二輪:需求變更,流程不變" time="2:15 - 2:55" sub="老闆改主意了 ── 這就是真實世界。vibe coding 的快,要建立在每一輪都照 workflow 走。" />;
const ChangeReq: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 5 · 需求變更</Eyebrow><Title size={52}>改推薦策略:低庫存促銷優先</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 32 }}>
      <Lead>新策略:<B>不再優先 featured</B>,改成「快賣完的商品優先推」── 庫存 3 個以下、評分還不錯的,推出去促銷。</Lead>
      <Think q={<>「才剛做完又要改,不會很麻煩嗎?」</>} a={<>這就是 vibe coding 的強項:<B>迭代很快</B>。但再快,也是 planner → 人審 → implementer,一步都不跳。</>} />
      <Harvest>需求會一直變;流程不變,才是專業。</Harvest>
    </div>
  </div><Foot label="U11 · 課2 · 段5" /></div>
);
const PlannerPrompt2: Page = () => (
  <div style={fill}><div style={pad}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}><Eyebrow>段 5 · Prompt 卡 3 · planner 第二輪</Eyebrow><span style={{ fontFamily: mono, fontSize: 20, color: PUR, fontWeight: 700 }}>● 一樣先切 Plan Mode 再貼</span></div>
    <Title size={44}>第二輪一樣從 planner 開始</Title>
    <div className="ts-rise" style={{ marginTop: 22, maxWidth: 1560 }}>
      <PromptCard size={21} label="planner prompt · 第二輪">{`你現在先扮演 planner。

現在要修改推薦規則。
先不要改檔。

新規則:
1. 不要優先 featured
2. stock > 0
3. stock <= 3 的商品優先
4. rating >= 4.0
5. 推薦理由要說明「庫存不多,適合促銷」

請只用以下格式回答:
A. 你準備修改的檔案
B. 每個檔案各改什麼
C. 資料(data.js 欄位)會如何被使用
D. 驗收方式
E. 可能風險
F. 哪一步需要人類拍板`}</PromptCard>
    </div>
  </div><Foot label="U11 · 課2 · 段5" /></div>
);
const PlanReview2: Page = () => {
  const items = ['要改的檔案,還是只有允許的那幾個?', '它有沒有趁機改版面、改樣式以外的東西?', '它有沒有趁機加套件、動 package.json?', '推薦邏輯改哪一段,它講得出來?'];
  return (
    <div style={fill}><div style={pad}><Eyebrow>段 5 · 人審第二輪計畫 · 防呆</Eyebrow><Title size={50}>變更愈小,愈要盯「有沒有趁機多做」</Title>
      <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 32, maxWidth: 1480 }}>
        {items.map((t, i) => <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 12, padding: '16px 24px', fontSize: 28 }}><span style={{ flexShrink: 0, fontFamily: mono, fontSize: 21, color: C.orange, fontWeight: 800 }}>Q{i + 1}</span>{t}</div>)}
      </div>
      <div style={{ fontSize: 25, color: C.muted, marginTop: 22 }}>第二輪最常見的走鐘:AI「順便」把第一輪的東西重寫一遍。<B>不准</B>。</div>
    </div><Foot label="U11 · 課2 · 段5" /></div>
  );
};
const ExecPrompt2: Page = () => (
  <div style={fill}><div style={pad}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}><Eyebrow>段 5 · Prompt 卡 4 · 執行第二輪</Eyebrow><span style={{ fontFamily: mono, fontSize: 20, color: OK, fontWeight: 700 }}>● 核准後,切出 Plan Mode 再貼</span></div>
    <Title size={44}>放行,照第二輪計畫改</Title>
    <div className="ts-rise" style={{ marginTop: 22, maxWidth: 1560 }}>
      <PromptCard size={21} label="execute prompt · 第二輪">{`你現在扮演 implementer。
請照剛剛核准的第二輪計畫修改。

限制不變:
1. 只能改 src/data.js、src/App.jsx、src/styles.css
2. 不要新增套件
3. 不要改 package.json
4. 不要重構
5. 超出原計畫,先停下來回報

完成後請固定回報:
A. 實際修改的檔案
B. 每個檔案改了什麼
C. 哪裡對應到資料欄位
D. 我現在要怎麼手動驗收
E. 哪些地方你沒有改`}</PromptCard>
    </div>
  </div><Foot label="U11 · 課2 · 段5" /></div>
);
const DevVerify2: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 5 · 第二輪畫面驗收</Eyebrow><Title size={50}>重新整理,看三件事</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 30, maxWidth: 1500 }}>
      <Atom n={1} act={<>推薦的商品換了嗎?應該變成<B>低庫存(stock ≤ 3)</B>的商品。</>} see="featured 商品不再霸榜。" />
      <Atom n={2} act={<>推薦理由變了嗎?</>} see="出現「庫存不多,適合促銷」。" />
      <Atom n={3} act={<>其他畫面還正常嗎?</>} see="只有推薦區塊的內容變了。" />
    </div>
    <div style={{ marginTop: 24 }}><SuccessRow>兩輪需求、同一條 workflow ── 你已經帶著 AI 團隊迭代過一次了。</SuccessRow></div>
  </div><Foot label="U11 · 課2 · 段5" /></div>
);
// ══════════ 段 6:Reviewer + 修偏 ══════════
const Sec6: Page = () => <Section no="6" title="Reviewer:讓 AI 檢查 AI" time="2:55 - 3:30" sub="第三個角色上場:拿著 AGENTS.md 查 diff。AI 檢查完,人再用 git 指令做最後把關。" />;
const ReviewerPrompt: Page = () => (
  <div style={fill}><div style={pad}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}><Eyebrow>段 6 · Prompt 卡 5 · reviewer</Eyebrow><span style={{ fontFamily: mono, fontSize: 20, color: OK, fontWeight: 700 }}>● reviewer 只檢查、不修改</span></div>
    <Title size={44}>換 reviewer 上場,對著守則查 diff</Title>
    <div className="ts-rise" style={{ marginTop: 22, maxWidth: 1560 }}>
      <PromptCard size={19} label="reviewer prompt(Pass / Block 格式)">{`你現在扮演 reviewer。
請根據 AGENTS.md、CLAUDE.md、目前需求與 git diff 做檢查。
不要改檔。

請固定輸出:
Verdict:PASS 或 BLOCK
Changed Files:實際改了哪些檔
Scope Check:是否超出允許範圍
Package Check:是否修改 package.json / 新增套件
UI Check:功能是否符合第二輪需求
Regression Risk:最可能壞掉的地方
Human Review:人還要親自看什麼
Next Step:PASS 下一步做什麼;BLOCK 先修什麼`}</PromptCard>
    </div>
  </div><Foot label="U11 · 課2 · 段6" /></div>
);
const DiffCmds: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 760px', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div><Eyebrow>段 6 · 人的驗收 · 防呆</Eyebrow><Title size={48}>AI 說沒問題?你自己 diff 一次</Title></div>
      <Lead>reviewer 的回報是參考,<B>git diff 才是證據</B>。三行指令,第三行最關鍵:</Lead>
      <Harvest>git diff -- package.json 必須「什麼都沒印」── 有輸出就是出事。</Harvest>
    </div>
    <div className="ts-rise"><Term title="終端機 · 用 diff 對答案" size={21} rows={[['cmd', 'git status'], ['dim', 'modified: src/App.jsx  src/data.js  src/styles.css'], ['cmd', 'git diff -- src/data.js src/App.jsx src/styles.css'], ['dim', '(逐行看:都是推薦區塊相關的修改)'], ['cmd', 'git diff -- package.json'], ['ok', '(沒有任何輸出 = 過關)']]} /></div>
  </div><Foot label="U11 · 課2 · 段6" /></div>
);
const ReadReview: Page = () => {
  const items = [['Verdict', '第一行就是結論:PASS 進下一步;BLOCK 照 Next Step 先修'], ['Scope / Package Check', '有沒有點名允許清單以外的檔、動 package.json?'], ['Regression Risk', '它說最可能壞掉的地方,就去看那裡'], ['Human Review', 'reviewer 說還要人看什麼,就去看什麼']];
  return (
    <div style={fill}><div style={pad}><Eyebrow>段 6 · 讀 reviewer 回報</Eyebrow><Title size={52}>回報回來,重點看這四格</Title>
      <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 22, marginTop: 36, maxWidth: 1540 }}>
        {items.map(([a, b], i) => <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '24px 28px' }}><div style={{ fontSize: 30, fontWeight: 800, color: OK }}>{a}</div><div style={{ fontSize: 25, color: C.muted, marginTop: 8, lineHeight: 1.45 }}>{b}</div></div>)}
      </div>
    </div><Foot label="U11 · 課2 · 段6" /></div>
  );
};
const RescuePrompt: Page = () => (
  <div style={fill}><div style={pad}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}><Eyebrow>段 6 · Prompt 卡 6 · 救援 · 防呆</Eyebrow><span style={{ fontFamily: mono, fontSize: 20, color: RED, fontWeight: 700 }}>● AI 超界時才用這張</span></div>
    <Title size={44}>發現超界修改?用救援 prompt 拉回來</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 600px', gap: 30, marginTop: 22, alignItems: 'start', maxWidth: 1620 }}>
      <PromptCard size={22} label="救援 prompt">{`請只保留「智慧推薦區塊」相關修改。
把所有和這個功能無關的修改還原。
不要改 package.json。
不要新增套件。
不要重構。

先列出你會還原哪些地方,等我同意後再改。`}</PromptCard>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Lead>注意最後一行:<B>它要先列清單、你同意才動</B> ── 救援也走「先計畫、再執行」。</Lead>
        <Lead>還原完,重跑一次 <Key>git diff</Key> 確認乾淨。</Lead>
      </div>
    </div>
  </div><Foot label="U11 · 課2 · 段6" /></div>
);
const BuildVerify: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 700px', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div><Eyebrow>段 6 · Build 驗收 · 防呆</Eyebrow><Title size={50}>build 過了,才准進 Git 收尾</Title></div>
      <Lead><Key>npm run dev</Key> 會動,不代表<B>正式打包</B>沒問題。commit 前一定跑一次 <Key>npm run build</Key>。</Lead>
      <Lead>出現紅字?<B>整段錯誤訊息貼給 Claude Code</B>,叫它只修這個錯,修完再跑一次。</Lead>
    </div>
    <div className="ts-rise"><Term title="終端機 · 打包驗收" rows={[['cmd', 'npm run build'], ['dim', 'vite v5.x building for production...'], ['ok', '✓ built in 1.32s'], ['ok', '(有 ✓ 沒紅字 = 過關)']]} /></div>
  </div><Foot label="U11 · 課2 · 段6" /></div>
);
const ReviewPit: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 6 · 卡住了?+ 檢查點</Eyebrow><Title size={50}>Reviewer 段常見狀況</Title>
    <div className="ts-rise" style={{ marginTop: 30, maxWidth: 1500 }}><Pitfall items={[['git diff -- package.json 有輸出:', '出事了。用上一頁的救援 prompt,把無關修改還原。'], ['reviewer 說有超界,但 diff 看起來沒有:', '以 git diff 為準;AI 的回報要驗證,不要照單全收。'], ['build 一直紅字:', '把完整錯誤貼給 Claude Code 修;修不動就舉手,不要硬 commit。']]} /></div>
    <div style={{ marginTop: 20 }}><Checkpoint items={['reviewer 回報第一行是 Verdict,而且你對照過 diff', 'git diff -- package.json 沒有輸出', 'npm run build 綠燈通過']} /></div>
  </div><Foot label="U11 · 課2 · 段6" /></div>
);

// ══════════ 段 7:Git 收尾 ══════════
const Sec7: Page = () => <Section no="7" title="收尾:讓成果可交付" time="3:30 - 3:50" sub="功能會動只是一半;存進 Git、推上自己的 repo,成果才算數。" />;
const FinalCheck: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 700px', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div><Eyebrow>段 7 · Commit 前最後檢查</Eyebrow><Title size={48}>三連發,全綠才 commit</Title></div>
      <Atom n={1} act={<><Key>git status</Key> ── 動到的檔案都在預期內?</>} see="只有允許檔案(和守則檔)。" />
      <Atom n={2} act={<><Key>git diff</Key> ── 最後掃一眼所有修改。</>} see="都是推薦區塊相關。" />
      <Atom n={3} act={<><Key>npm run build</Key> ── 再確認一次能打包。</>} see="✓ built,沒紅字。" />
    </div>
    <div className="ts-rise"><Term title="終端機 · commit 前三連發" size={21} rows={[['cmd', 'git status'], ['cmd', 'git diff'], ['cmd', 'npm run build'], ['ok', '✓ built in 1.32s']]} /></div>
  </div><Foot label="U11 · 課2 · 段7" /></div>
);
const CommitPage: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 700px', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div><Eyebrow>段 7 · Commit</Eyebrow><Title size={50}>拍照存檔:這一輪的成果</Title></div>
      <Lead>跟上一堂一樣:<Key>git add .</Key> 把修改放上桌,<Key>git commit</Key> 拍照。訊息寫清楚<B>做了什麼</B>。</Lead>
      <Harvest>commit 了,AI 的工作才真正變成「你的成果」。</Harvest>
    </div>
    <div className="ts-rise"><Term title="終端機 · 存檔" rows={[['cmd', 'git add .'], ['cmd', 'git commit -m "新增智慧推薦區塊"'], ['ok', '[main a1b2c3d] 新增智慧推薦區塊'], ['dim', ' 5 files changed'], ['dim', ' (含 AGENTS.md / CLAUDE.md 兩個新守則檔)']]} /></div>
  </div><Foot label="U11 · 課2 · 段7" /></div>
);
const PushPage: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 700px', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div><Eyebrow>段 7 · Push · 防呆</Eyebrow><Title size={50}>push 前,先看 remote 是誰的</Title></div>
      <Lead>先跑 <Key>git remote -v</Key>:<B>origin 必須是你自己帳號的 repo</B>。</Lead>
      <div style={{ background: '#fff7f4', border: '1px solid #f3d0c2', borderRadius: 14, padding: '18px 26px', fontSize: 27, lineHeight: 1.5 }}>🚫 網址裡看到<B>老師的帳號</B>?<strong style={{ color: RED }}>停,不要 push</strong> ── 舉手,老師帶你換 remote。</div>
    </div>
    <div className="ts-rise"><Term title="終端機 · 推上自己的 repo" size={21} rows={[['cmd', 'git remote -v'], ['ok', 'origin  https://github.com/你的帳號/web-lab.git'], ['cmd', 'git push'], ['ok', 'main -> main ✓']]} /></div>
  </div><Foot label="U11 · 課2 · 段7" /></div>
);
const DoneCheck: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 7 · 全班對齊</Eyebrow><Title size={52}>交付完成的樣子</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 34 }}>
      <Checkpoint items={['首頁有智慧推薦區塊(第二輪:低庫存促銷版)', 'git log --oneline -1 看得到「新增智慧推薦區塊」', '已 push 到自己的 GitHub repo']} />
      <SuccessRow>從需求到 push ── 你完整跑完了一次有護欄的 AI 開發 workflow。</SuccessRow>
    </div>
  </div><Foot label="U11 · 課2 · 段7" /></div>
);
// ══════════ 收束 ══════════
const RealLearn: Page = () => {
  const items = [['Vibe Coding', '用講的推進專案,快速迭代'], ['Rule files', 'AGENTS.md / CLAUDE.md,規則寫進 repo'], ['Workflow', '先計畫、人核准、再動手、再驗收'], ['Sub-agent 分工', 'planner / implementer / reviewer'], ['Human review', '三個拍板點,人做最後決定'], ['Git 收尾', 'diff → build → commit → push']];
  return (
    <div style={fill}><div style={pad}><Eyebrow>收束 · 3:50 - 4:00</Eyebrow><Title size={52}>今天真正學到的,不是推薦商品</Title>
      <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 36, maxWidth: 1600 }}>
        {items.map(([a, b], i) => <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '22px 26px' }}><div style={{ fontFamily: mono, fontSize: 20, color: C.orange, fontWeight: 800 }}>0{i + 1}</div><div style={{ fontSize: 29, fontWeight: 800, marginTop: 8 }}>{a}</div><div style={{ fontSize: 22, color: C.muted, marginTop: 6, lineHeight: 1.4 }}>{b}</div></div>)}
      </div>
      <div style={{ fontSize: 25, color: C.muted, marginTop: 26 }}>推薦區塊只是載體 ── 這六件事,才是你以後每個 AI 專案都會用到的。</div>
    </div><Foot label="U11 · 課2 · 收束" /></div>
  );
};
const WhyAgentsMd: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>收束 · 一頁帶過 Codex</Eyebrow><Title size={52}>為什麼我們同時寫 AGENTS.md?</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 15, marginTop: 32, maxWidth: 1480 }}>
      {['Claude Code 主要讀 CLAUDE.md', 'CLAUDE.md 可以用 @AGENTS.md 引入共用規則', 'Codex、其他 coding agent 讀得懂 AGENTS.md', '所以共用守則寫在 AGENTS.md ── 未來換工具,規則直接跟著走'].map((t, i) => (
        <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 12, padding: '17px 24px', fontSize: 28 }}><span style={{ flexShrink: 0, fontFamily: mono, fontSize: 21, color: C.orange, fontWeight: 800 }}>0{i + 1}</span>{t}</div>
      ))}
      <Harvest>今天的整套 workflow,不是 Claude 專屬 ── 是你帶任何 coding agent 的方法。</Harvest>
    </div>
  </div><Foot label="U11 · 課2 · 收束" /></div>
);
const Punchline: Page = () => (
  <div style={{ ...fill, background: C.ink, color: '#fff' }}><div style={{ ...pad }}>
    <Eyebrow>今天最重要的一句</Eyebrow>
    <div style={{ fontSize: 78, fontWeight: 900, lineHeight: 1.22, marginTop: 28, maxWidth: 1560, letterSpacing: '-0.02em' }}>會 vibe coding <span style={{ color: C.orange }}>不稀奇</span>;<br />能讓 AI 每一輪都<span style={{ color: C.orange }}>照流程交付</span>,才是真本事。</div>
    <div style={{ fontSize: 31, color: 'rgba(255,255,255,0.7)', marginTop: 34, maxWidth: 1380, lineHeight: 1.55 }}>規則在 repo 裡、計畫先過人、diff 見真章、build 過才交付 ── 這套你今天做完了一整輪。</div>
  </div><div style={{ position: 'absolute', left: 110, bottom: 44, fontFamily: mono, fontSize: 19, color: 'rgba(255,255,255,0.5)' }}>U11 · 課2 · 記住這句</div></div>
);
const Homework: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>回家作業</Eyebrow><Title size={54}>交三樣東西</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 34, maxWidth: 1500 }}>
      <Atom n={1} act={<>把智慧推薦區塊 <B>push 到自己的 repo</B>(課堂上沒完成的,回家補完)。</>} see="GitHub 上看得到最新 commit。" />
      <Atom n={2} act={<>截圖兩張:<B>網站畫面</B> + 終端機跑 <Key>git log --oneline -1</Key> 的結果。</>} see="畫面有推薦區塊、log 有你的 commit。" />
      <Atom n={3} act={<>把 <B>reviewer 的固定回報(Verdict 開頭)</B>複製下來,一起貼到作業區。</>} see="老師會看它有沒有抓到重點。" />
    </div>
  </div><Foot label="U11 · 課2 · 作業" /></div>
);
const NextClass: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>下一堂預告</Eyebrow><Title size={54}>畫面會做了,資料呢?</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 32 }}>
      <Lead>下一堂進主線核心:在<B>營運異常 Dashboard</B> 上按按鈕走完「載入 → 檢查合約 → payload 預覽 → 人工審核 → mock 送出」,再親手弄壞 <Key>report.json</Key>、看擋牌出現、用 ReAct 修好。</Lead>
      <Harvest>今天你學會帶 AI 團隊;下一堂,學會不被 AI 唬住 ── 資料合約就是防線。</Harvest>
    </div>
  </div><Foot label="U11 · 課2 · 預告" /></div>
);

export const meta: SlideMeta = { title: 'U11 課2:Vibe Coding with Guardrails', createdAt: '2026-06-30T04:12:30.000Z' };

export const notes: (string | undefined)[] = [
  '各位同學好,第二堂。今天的標題是 Vibe Coding with Guardrails:用 Claude Code 管理一個 AI 小團隊,做出你的第一個功能「智慧推薦區塊」。上一堂工具都認識過了,今天不重教工具,直接開工。所有 prompt 我都準備好了,你們負責照貼、照看、照驗收。',
  '先接上一堂。你已經會 VSCode、跑 web-lab、git 基本流、Claude Code 面板和 Plan Mode。你可能想說今天繼續認識工具?不,今天是第一個真正的 AI 開發 workflow:你出需求、AI 分工做事、你把關驗收,最後做出一個看得到的功能。',
  '先補一個現代名詞,Vibe Coding。定義念一次:用自然語言描述想法,讓 AI 直接產生、修改、串接程式;人一邊看結果一邊迭代。重點是你不寫每一行程式,而是用講的推進專案。這已經是業界真實工作方式,但做得好跟做得爛差很大。',
  'Vibe coding 的好處四個:快速看到畫面、適合 prototype、不熟語法也能開始、想法快速變雛形。對零基礎的你們來說,這是巨大的解放:你負責想清楚,語法 AI 處理。',
  '但風險也四個:AI 會猜,你沒說清楚的它自己腦補;AI 會多改,你要一個區塊它順便優化三個檔;能跑不代表好維護;最重要的是,不看 diff 就是在賭。這四個風險,今天整堂課就是在教你怎麼防。',
  '所以本堂 punchline:Vibe Coding 不是亂感覺,是有護欄的快速迭代。速度是 AI 給的,護欄是你架的。規則寫進 repo、流程固定節奏、每輪都有人把關,這樣的快才能交付。',
  '今天下課前,你的 repo 會多五樣東西:AGENTS.md、CLAUDE.md、智慧推薦區塊功能、一輪 planner-implementer-reviewer 分工、一次完整 git 收尾。再強調一次:prompt 全部老師提供,你們不用自己發明。',
  '今天的主線一條走到底:先寫守則檔、定義功能、第一輪做出來、需求變更再一輪、reviewer 檢查、git 收尾。看顏色:橘色的步驟是你拍板,藍色是 AI 做事,綠色是驗收動作。中間休息一次。',
  '把今天放回整門課的流水線:整門課只做一個作品,營運異常 Dashboard。今天的守則檔與 workflow 是為了下一堂能安全做出功能;data-lab/report.json 是資料合約,畫面與通知都吃同一份。唸一次 DoD:AI 做出來不算完成,通過驗收才算完成 —— 畫面、輸出、diff、build、human review。這句每一堂都會出現。',
  '段一,把規則寫進 repo。AI 不該每次都從零理解你的專案,團隊守則寫成檔案放進 repo,每個 AI 進來都先讀它。',
  '先痛一次,老師示範:只叫 AI 改標語,不加任何限制。看它順便重排版面、統一配色、還動了 package.json,git status 七個檔被改。讓學生記住這個 diff 的樣子 —— 這就是為什麼需要守則檔和固定流程。示範完記得 git restore 還原。',
  '為什麼需要守則檔?打個比方,AI 每次開新對話就像新同事第一天報到:能力很強,但不知道哪些檔能動、怎麼驗收。你可以每次口頭交代,或者把守則寫成檔案放門口。與其每次用嘴管 AI,不如把規則寫進 repo。',
  'AGENTS.md 是什麼?三件事:它是通用的 agent rule file,不是只給 Claude;內容寫專案的遊戲規則,怎麼跑、哪些檔可改不可改、驗收指令;而且跨工具通用,Codex 和其他 coding agent 也讀得懂。',
  'CLAUDE.md 是什麼?它是 Claude Code 的專案記憶,Claude Code 每次啟動主要讀這個檔;可以寫 Claude 專屬規則,像動手前先 Plan Mode;還可以用 @AGENTS.md 一行把共用規則引進來,不用抄兩份。',
  '兩檔怎麼搭:共用規則寫一份在 AGENTS.md,CLAUDE.md 引用它。這樣未來換工具,守則直接帶著走。這是業界處理多 agent 的常見做法。',
  '重要限制先講清楚。你可能想說規則寫好 AI 就不會出錯了吧?不是。守則檔是 context、是背景說明,不是硬性安全鎖,AI 仍可能忘記或出錯。真正的保險還是整套流程:Plan Mode、權限、human review、git diff。守則讓 AI 不容易走偏,護欄讓走偏時傷不到你。',
  '我們的 AGENTS.md 長這樣,五個區塊就是五條家規:Project 這是什麼專案、Allowed files 只准改哪三個檔、Do not edit 碰都不准碰、Workflow 先計畫核准才改、Git rules 改前 status 改後 diff 人同意才 push。下一頁完整內容照抄。',
  '照抄卡。左邊前半:Project、Allowed files 三個檔、Do not edit 四個。右邊後半:Workflow 五條、Git rules 三條。兩欄合起來是同一個檔案的完整內容,等下建檔照貼。',
  '再建 CLAUDE.md。內容短:第一行附近 @AGENTS.md 引入共用規則,下面三條 Claude 專屬:動手前 Plan Mode、改檔先問、碰到 package.json 停下來問。建檔方式:終端機 code AGENTS.md、code CLAUDE.md,或 Explorer 右鍵 New File,貼完記得存檔。',
  '常見狀況:檔名一定是大寫 AGENTS.md、CLAUDE.md,放在 web-lab 根目錄跟 package.json 同層;分頁標題有黑點是沒存檔;兩份內容別貼反。檢查點:Explorer 看得到兩個檔、CLAUDE.md 開頭附近有 @AGENTS.md。全班到齊再往下。',
  '段二,把 vibe 變流程。規則寫好了,再來固定節奏:誰先做、誰檢查、人在哪裡拍板。',
  'Workflow 是什麼?不是想到什麼就問什麼,而是每輪固定照「先讀、先計畫、再改、再驗收」走。打個比方像餐廳出餐:點單、主廚確認、做菜、出餐前檢查,生意再忙沒有一道菜跳過檢查就上桌。vibe 給速度,workflow 給節奏。',
  '本堂固定 workflow 一條:需求、planner 列計畫、人審計畫、implementer 照計畫改、reviewer 查 diff、build、commit push。待會第一輪第二輪走的都是這條,一步不跳。',
  'Human-in-the-loop,人不寫程式但拍板三次:需求拍板,今天只做智慧推薦不做購物車不做登入;計畫拍板,AI 要改哪些檔人先同意;結果拍板,看過 diff、build 通過,人才 commit push。',
  'Sub-agent 是什麼?把 AI 當一個小團隊用:有人只計畫、有人只動手、有人只檢查。打個比方,工地不會讓同一個人又畫圖又施工又驗收,自己驗自己的問題看不見,角色分開盲點才會被抓到。',
  '三個角色:planner 只讀專案列計畫、不改檔;implementer 照人核准過的計畫動手、不自己加需求;reviewer 拿著 AGENTS.md 檢查 git diff、不動手修改。今天不深入 agent 架構,就用老師給的 prompt 讓 Claude Code 輪流扮演這三個角色。',
  '段三,今天的功能:智慧推薦區塊。比改標語有料,但範圍可控。規格、資料規則、驗收標準先全部講死,AI 才沒有腦補空間。',
  '成品長相:首頁多一個今日推薦,從商品清單自動挑一個出來,說明為什麼推薦它。畫面四個欄位:商品名稱、分類、價格、推薦理由。右邊是示意圖。',
  '推薦邏輯只有五條,念一次:選一個推薦商品;有 featured true 且 stock 大於 0 優先;否則 rating 大於等於 4.5 且有庫存;都沒有就顯示今天沒有推薦商品;畫面顯示名稱分類價格理由。就這五條,多的都不要。',
  '資料規則。web-lab 的 data.js 商品目前只有名稱描述價格,沒有 featured、stock、rating、分類。所以 planner 的計畫應該包含在 data.js 幫商品補這些欄位,這在允許範圍內不算超界。右邊是補完後一筆商品的樣子。',
  '邊界,防呆頁。允許改的只有三個:src/data.js、src/App.jsx、src/styles.css。碰都不准碰的:package.json、package-lock.json、node_modules、.git。這份清單已經寫進 AGENTS.md,待會 reviewer 就拿它對答案。',
  '驗收標準畫面五條:看得到今日推薦、四個欄位齊、featured 優先、沒庫存不推、無符合商品有 fallback。等下驗收就照這張打勾。',
  '驗收標準 Git 三條:diff 只出現允許檔案、package.json 完全沒變、npm run build 通過。畫面對了只是一半,Git 乾淨成果才算可交付。',
  '段四,第一輪。prompt 都寫好了,你負責貼、負責看、負責在拍板點說可以或不行。這段最長,大家跟緊。',
  '開工前防呆:git status,要看到 working tree clean。不乾淨的舉手,老師帶你先 commit 或還原,處理完再開工。起點乾淨,等下 diff 才乾淨。',
  'Prompt 卡一,planner。注意上面紅字:先切到 Plan Mode 再貼,shift+tab 或 /plan。這兩欄是同一份 prompt,前半是角色、要讀的五個檔、功能規格五條;後半是限制四條和要它輸出的五項。一起複製、一則訊息貼出去。',
  '計畫回來了,拍板二:人審計畫,五個問題。只改允許檔案?要新增套件?要改 package.json?要重構?有寫驗收方式?任何一題不對就不放行,叫它重新計畫。這就是你的工作,不用會寫程式也能做。',
  '好的計畫長這樣(示意):檔案清單只有三個允許檔、每檔寫清楚改什麼、有驗收方式、有風險。看不懂程式沒關係,看得懂它要動哪些檔就能把關。五題都過,才回它「同意,照計畫做」。',
  'Prompt 卡二,implementer。先 shift+tab 切出 Plan Mode,然後貼:你現在扮演 implementer,照剛剛核准的計畫實作,限制五條。它會開始逐檔修改、請你允許。',
  'AI 動手時你不是看戲,盯四件事:它開始改非允許檔案、它要求裝套件、它突然大重構、任何疑慮。出現任何一個就先停,不要按同意,問老師。',
  '畫面驗收:npm run dev 開 localhost,看今日推薦出現了沒、四個欄位合理嗎、整頁滑一遍原本的畫面沒壞。這是拍板三的前半,Git 的後半在段六。',
  '第一輪常見狀況:改了不該改的檔就先不接受,跟它說超出 AGENTS.md 範圍請撤回;說要裝套件就拒絕,這功能現有 React 寫得出來;畫面沒變先確認 dev server 活著。檢查點:區塊出現、欄位齊、沒動過 package.json。',
  '休息十分鐘。回來直接做第二輪需求變更,流程一模一樣,你會發現快很多。',
  '段五,第二輪:需求變更,流程不變。老闆改主意了,這就是真實世界。vibe coding 的快,要建立在每一輪都照 workflow 走。',
  '需求變更:改推薦策略,低庫存促銷優先。不再優先 featured,改成快賣完的商品優先推:庫存 3 個以下、評分還行的推出去促銷。你可能想說才做完又改很麻煩?這正是 vibe coding 的強項,迭代快,但再快也是 planner、人審、implementer,一步不跳。',
  'Prompt 卡三,第二輪 planner。一樣先切 Plan Mode。新規則五條:不優先 featured、stock 大於 0、stock 小於等於 3 優先、rating 大於等於 4.0、推薦理由要說庫存不多適合促銷。要它先列改哪些檔、改哪段、風險、驗收。',
  '人審第二輪,重點變成:有沒有趁機多做。檔案還是只有允許的?有沒有趁機改版面?有沒有加套件?邏輯改哪段講得出來?第二輪最常見的走鐘是 AI 順便把第一輪的東西重寫一遍,不准。',
  'Prompt 卡四,執行第二輪。核准後切出 Plan Mode,貼:照剛剛核准的第二輪計畫修改,限制不變四條,完成後列出實際改了哪些檔。',
  '第二輪畫面驗收三件事:推薦的商品換成低庫存的了、推薦理由出現庫存不多適合促銷、其他畫面正常。兩輪需求同一條 workflow,你已經帶著 AI 團隊迭代過一次了。',
  '段六,reviewer 上場:讓 AI 檢查 AI,人做最後把關。',
  'Prompt 卡五,reviewer。它只檢查不修改:根據 AGENTS.md 和 CLAUDE.md 檢查目前 git diff,回報六項:改了哪些檔、有沒有超界、有沒有動 package.json、有沒有過度重構、功能符不符合第二輪需求、還需要人工檢查什麼。',
  'AI 說沒問題,你自己 diff 一次,git diff 才是證據。三行指令:git status 看清單、git diff 三個允許檔逐行看、git diff -- package.json。最後這行必須什麼都沒印,有輸出就是出事。這是今天最重要的防呆之一。',
  '讀 reviewer 回報,重點四格:改的檔案清單跟核准計畫一致嗎、有沒有點名超界的檔、有沒有順便重寫的段落、它建議人工檢查什麼就去看什麼。',
  '如果真的超界了,救援 prompt:只保留智慧推薦區塊相關修改,無關的還原,不改 package.json、不加套件、不重構。注意最後一行:它要先列還原清單、你同意才動,救援也走先計畫再執行。還原完重跑 git diff 確認。',
  'Build 驗收。dev 會動不代表正式打包沒問題,commit 前一定跑 npm run build。有紅字就整段錯誤貼給 Claude Code,叫它只修這個錯,修完再跑一次。build 過了才准進 git 收尾。',
  'Reviewer 段常見狀況:diff 的 package.json 有輸出就用救援 prompt;reviewer 說有超界但 diff 沒有,以 diff 為準,AI 回報要驗證;build 一直紅字就貼給 AI 修,修不動舉手,不要硬 commit。檢查點:六項回報拿到、package.json diff 乾淨、build 綠燈。',
  '段七,收尾:讓成果可交付。功能會動只是一半,存進 Git、推上自己的 repo 才算數。',
  'Commit 前三連發,全綠才 commit:git status 檔案都在預期內、git diff 最後掃一眼、npm run build 再確認一次。',
  'Commit。git add 點、git commit -m 新增智慧推薦區塊。這次 diff 裡會多 AGENTS.md 和 CLAUDE.md 兩個新守則檔,正常,它們本來就該進 repo。commit 了,AI 的工作才真正變成你的成果。',
  'Push 前防呆:git remote -v,origin 必須是你自己帳號的 repo。網址裡看到老師的帳號就停,不要 push,舉手換 remote。確認是自己的,git push。',
  '交付完成的樣子,檢查點:首頁有推薦區塊而且是第二輪低庫存促銷版、git log 最新一筆是新增智慧推薦區塊、已 push 到自己的 GitHub。全班對齊,今天的實作就完成了。',
  '收束。今天真正學到的不是推薦商品,是六件事:vibe coding、rule files、workflow、sub-agent 分工、human review、git 收尾。推薦區塊只是載體,這六件事是你以後每個 AI 專案都會用到的。',
  '一頁帶過 Codex。為什麼我們同時寫 AGENTS.md?因為 Claude Code 主要讀 CLAUDE.md,CLAUDE.md 可以 @AGENTS.md 引入共用規則,而 Codex 和其他 coding agent 讀得懂 AGENTS.md。共用守則寫在 AGENTS.md,未來換工具規則直接跟著走。今天的 workflow 不是 Claude 專屬,是你帶任何 coding agent 的方法。',
  '今天最重要的一句:會 vibe coding 不稀奇,能讓 AI 每一輪都照流程交付,才是真本事。規則在 repo 裡、計畫先過人、diff 見真章、build 過才交付,這套你今天做完了一整輪。',
  '作業三樣:把智慧推薦區塊 push 到自己的 repo;截圖兩張,網站畫面加 git log --oneline -1;把 reviewer 六項回報貼到作業區。',
  '下一堂預告:畫面會做了,資料呢?下一堂進主線核心:在營運異常 Dashboard 上按按鈕走完載入、檢查合約、payload 預覽、人工審核、mock 送出,再親手弄壞 report.json 看擋牌出現、用 ReAct 修好。資料合約就是防線。今天辛苦了。',
];

export default [
  Cover, RecapC1, VibeDef, VibeGood, VibeRisk, VibePunch, TodayTask, Roadmap, MainlineDoD,
  Sec1, PainDemo, WhyRules, WhatAgentsMd, WhatClaudeMd, FileRelation, RuleLimits, AgentsSkeleton, AgentsContent, ClaudeContent, RulesPit,
  Sec2, WhatWorkflow, TodayFlow, HumanGates, WhatSubAgent, ThreeRoles,
  Sec3, FeatureLook, FeatureSpec, DataRules, FileScope, AcceptUI, AcceptGit,
  Sec4, PreCheck, PlannerPrompt1, PlanReview1, PlanSample, ImplPrompt1, WatchList, DevVerify1, Round1Pit,
  Break1,
  Sec5, ChangeReq, PlannerPrompt2, PlanReview2, ExecPrompt2, DevVerify2,
  Sec6, ReviewerPrompt, DiffCmds, ReadReview, RescuePrompt, BuildVerify, ReviewPit,
  Sec7, FinalCheck, CommitPage, PushPage, DoneCheck,
  RealLearn, WhyAgentsMd, Punchline, Homework, NextClass,
] satisfies Page[];
