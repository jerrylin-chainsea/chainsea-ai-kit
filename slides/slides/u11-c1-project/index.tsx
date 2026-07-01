import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';
import vscodeDevShot from './assets/vscode-dev.png';
import githubShot from './assets/github-repo.png';
import nodeShot from './assets/nodejs-home.png';
import npmShot from './assets/npm-home.png';
import gitShot from './assets/git-home.png';
import weblabShot from './assets/weblab-localhost.png';

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
const mono = '"JetBrains Mono", "SF Mono", ui-monospace, monospace';

const css = `@keyframes ts-up{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.ts-rise>*{animation:ts-up .55s cubic-bezier(.16,1,.3,1) both}
.ts-rise>*:nth-child(2){animation-delay:.05s}.ts-rise>*:nth-child(3){animation-delay:.10s}
.ts-rise>*:nth-child(4){animation-delay:.15s}.ts-rise>*:nth-child(5){animation-delay:.20s}.ts-rise>*:nth-child(6){animation-delay:.25s}
@media (prefers-reduced-motion:reduce){.ts-rise>*{animation:none!important}}`;
if (typeof document !== 'undefined' && !document.getElementById('ts-u11c1')) {
  const el = document.createElement('style');
  el.id = 'ts-u11c1';
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
const Title = ({ children, size = 64 }: { children: any; size?: number }) => <div style={{ fontSize: size, fontWeight: 850, letterSpacing: '-0.02em', lineHeight: 1.14 }}>{children}</div>;
const Lead = ({ children }: { children: any }) => <div style={{ fontSize: 33, color: C.muted, lineHeight: 1.6, maxWidth: 1480 }}>{children}</div>;
const B = ({ children }: { children: any }) => <strong style={{ color: C.ink }}>{children}</strong>;
const O = ({ children }: { children: any }) => <strong style={{ color: C.orange }}>{children}</strong>;
const Key = ({ children }: { children: any }) => <span style={{ fontFamily: mono, fontSize: 23, background: '#eceff3', border: '1px solid #cfd5dd', borderRadius: 6, padding: '2px 10px', margin: '0 3px', color: C.ink }}>{children}</span>;

const Think = ({ q, a }: { q: any; a: any }) => (
  <div style={{ background: '#eef4ff', border: '1px solid #cfe0fb', borderRadius: 16, padding: '24px 30px', maxWidth: 1480 }}>
    <div style={{ fontFamily: mono, fontSize: 21, color: BLUE, fontWeight: 700, marginBottom: 10 }}>你可能會想說 ...</div>
    <div style={{ fontSize: 31, color: '#26405f', lineHeight: 1.5 }}>{q}</div>
    <div style={{ fontSize: 31, color: C.ink, lineHeight: 1.55, marginTop: 14 }}><O>其實</O> {a}</div>
  </div>
);
const Analogy = ({ children }: { children: any }) => (
  <div style={{ background: '#fbf3ee', border: '1px solid #f3d6c4', borderRadius: 16, padding: '24px 30px', maxWidth: 1480 }}>
    <div style={{ fontFamily: mono, fontSize: 21, color: C.orange, fontWeight: 700, marginBottom: 10 }}>打個比方</div>
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
const SuccessRow = ({ children }: { children: any }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16, background: '#eaf6f0', border: '1px solid #bfe6d4', borderRadius: 14, padding: '16px 24px', maxWidth: 1480 }}>
    <span style={{ flexShrink: 0, width: 36, height: 36, borderRadius: '50%', background: OK, color: '#fff', display: 'grid', placeContent: 'center', fontSize: 22, fontWeight: 800 }}>✓</span>
    <span style={{ fontSize: 28, color: '#0c5b3c', fontWeight: 600 }}>{children}</span>
  </div>
);
const Pitfall = ({ items }: { items: [string, string][] }) => (
  <div style={{ background: '#fff7f4', border: '1px solid #f3d0c2', borderRadius: 16, padding: '26px 32px' }}>
    <div style={{ fontFamily: mono, fontSize: 21, color: RED, fontWeight: 700, marginBottom: 16 }}>卡住了?先看這裡</div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {items.map(([q, a], i) => <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'baseline' }}><span style={{ flexShrink: 0, fontSize: 27, color: RED, fontWeight: 800 }}>?</span><div style={{ fontSize: 27, lineHeight: 1.4 }}><strong>{q}</strong>　<span style={{ color: C.muted }}>{a}</span></div></div>)}
    </div>
  </div>
);
const Checkpoint = ({ items }: { items: string[] }) => (
  <div style={{ background: '#eef7f2', border: '1px solid #bfe6d4', borderRadius: 16, padding: '24px 30px', maxWidth: 1480 }}>
    <div style={{ fontFamily: mono, fontSize: 20, color: OK, fontWeight: 700, marginBottom: 14 }}>檢查點 · 全班對齊再往下</div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>{items.map((t, i) => <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', fontSize: 27 }}><span style={{ color: OK, fontWeight: 800 }}>☐</span>{t}</div>)}</div>
  </div>
);
const Section = ({ no, title, time, sub }: { no: string; title: string; time: string; sub: string }) => (
  <div style={{ ...fill, background: C.ink, color: '#fff' }}>
    <div style={pad}><span style={{ fontFamily: mono, fontSize: 26, color: C.orange, letterSpacing: '0.2em' }}>段 {no} ・ {time}</span><div style={{ fontSize: 88, fontWeight: 900, marginTop: 22, letterSpacing: '-0.02em', lineHeight: 1.08 }}>{title}</div><div style={{ fontSize: 35, color: 'rgba(255,255,255,0.72)', marginTop: 26, maxWidth: 1320, lineHeight: 1.5 }}>{sub}</div></div>
  </div>
);
const BreakSlide = ({ note }: { note: string }) => (
  <div style={{ ...fill, background: OK }}><div style={{ ...pad, color: '#fff' }}><span style={{ fontFamily: mono, fontSize: 26, letterSpacing: '0.2em', opacity: 0.85 }}>BREAK</span><div style={{ fontSize: 118, fontWeight: 900, marginTop: 16 }}>休息 10 分鐘</div><div style={{ fontSize: 35, opacity: 0.9, marginTop: 22 }}>{note}</div></div></div>
);

const Term = ({ title, rows, size = 23 }: { title: string; rows: [string, string][]; size?: number }) => {
  const color = (k: string) => k === 'cmd' ? '#e8eaed' : k === 'ok' ? '#7fd4a8' : k === 'err' ? '#ff8585' : k === 'dim' ? '#6b7280' : '#cdd3df';
  return (
    <div style={{ background: '#0f1117', borderRadius: 14, overflow: 'hidden', border: '1px solid #232733', boxShadow: '0 18px 50px -26px rgba(0,0,0,0.5)', maxWidth: 1540 }}>
      <div style={{ display: 'flex', gap: 9, padding: '12px 18px', background: '#161a22', borderBottom: '1px solid #232733', alignItems: 'center' }}>{['#ff5f57', '#febc2e', '#28c840'].map((c, i) => <span key={i} style={{ width: 13, height: 13, borderRadius: '50%', background: c }} />)}<span style={{ fontFamily: mono, fontSize: 18, color: '#6b7280', marginLeft: 10 }}>{title}</span></div>
      <pre style={{ margin: 0, padding: '20px 26px', fontFamily: mono, fontSize: size, lineHeight: 1.65, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{rows.map(([k, t], i) => <div key={i} style={{ color: color(k) }}>{k === 'cmd' ? <span style={{ color: C.orange }}>$ </span> : null}{t}</div>)}</pre>
    </div>
  );
};
const RealShot = ({ img, url, eyebrow, title, caption, foot, maxH = 540, pos = 'top', tag = '這是真的,不是示意圖' }: { img: string; url: string; eyebrow: string; title: string; caption: string; foot: string; maxH?: number; pos?: string; tag?: string }) => (
  <div style={fill}><div style={pad}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}><Eyebrow>{eyebrow}</Eyebrow><span style={{ fontSize: 22, color: OK, fontFamily: mono, fontWeight: 700 }}>● {tag}</span></div>
    <Title size={44}>{title}</Title>
    <div style={{ marginTop: 16, background: '#fff', border: `1px solid ${C.line}`, borderRadius: 14, overflow: 'hidden', boxShadow: '0 18px 50px -28px rgba(30,30,40,0.4)', maxWidth: 1560 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 18px', background: '#f0f2f5', borderBottom: `1px solid ${C.line}` }}><div style={{ display: 'flex', gap: 7 }}>{['#ff5f57', '#febc2e', '#28c840'].map((c, i) => <span key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />)}</div><div style={{ flex: 1, background: '#fff', border: `1px solid ${C.line}`, borderRadius: 7, padding: '5px 14px', fontFamily: mono, fontSize: 16, color: C.faint }}>{url}</div></div>
      <img src={img} alt={title} style={{ display: 'block', width: '100%', maxHeight: maxH, objectFit: 'cover', objectPosition: pos }} />
    </div>
    <div style={{ fontSize: 24, color: C.muted, marginTop: 14 }}>{caption}</div>
  </div><Foot label={foot} /></div>
);
const ToolCard = ({ img, name, role }: { img: string; name: string; role: string }) => (
  <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 12, overflow: 'hidden', boxShadow: '0 10px 30px -22px rgba(30,30,40,0.4)' }}>
    <img src={img} alt={name} style={{ display: 'block', width: '100%', height: 150, objectFit: 'cover', objectPosition: 'top', borderBottom: `1px solid ${C.line}` }} />
    <div style={{ padding: '12px 16px' }}><div style={{ fontSize: 23, fontWeight: 800 }}>{name}</div><div style={{ fontSize: 19, color: C.muted, marginTop: 3, lineHeight: 1.35 }}>{role}</div></div>
  </div>
);

const VSCodeMap = () => (
  <div style={{ display: 'flex', height: 540, background: '#1e1e1e', borderRadius: 14, overflow: 'hidden', border: '1px solid #2b2b2b', boxShadow: '0 18px 50px -28px rgba(0,0,0,0.55)' }}>
    <div style={{ width: 76, background: '#333', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, paddingTop: 18 }}>{['檔', '搜', '源', '外'].map((icon, i) => <div key={i} style={{ fontSize: 23, color: '#fff', position: 'relative' }}>{icon}<span style={{ position: 'absolute', top: -8, right: -16, background: C.orange, color: '#fff', fontFamily: mono, fontSize: 14, fontWeight: 700, borderRadius: '50%', width: 20, height: 20, display: 'grid', placeContent: 'center' }}>{[1, 2, 5, 6][i]}</span></div>)}</div>
    <div style={{ width: 280, background: '#252526', borderRight: '1px solid #1b1b1b', padding: '14px 16px', color: '#cfcfcf', fontFamily: mono, fontSize: 18 }}>
      <div style={{ fontSize: 15, color: '#9aa0a6', letterSpacing: '0.1em', marginBottom: 12 }}>① 檔案總管</div>
      {['web-lab', 'README.md', 'package.json', 'src', 'App.jsx', 'data.js'].map((t, i) => <div key={i} style={{ lineHeight: 1.9, color: i === 5 ? '#fff' : '#cfcfcf', background: i === 5 ? '#37373d' : 'transparent', borderRadius: 4, paddingLeft: i > 0 ? 16 : 0 }}>{t}</div>)}
    </div>
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, background: '#1e1e1e', padding: '16px 22px', fontFamily: mono, fontSize: 17, color: '#9aa0a6' }}>
        <div style={{ fontSize: 15, color: '#9aa0a6', letterSpacing: '0.1em', marginBottom: 12 }}>③ 編輯區 · 看內容</div>
        <div><span style={{ color: '#c586c0' }}>export const</span> <span style={{ color: '#9cdcfe' }}>shop</span> = {'{'}</div>
        <div style={{ paddingLeft: 24 }}><span style={{ color: '#9cdcfe' }}>name</span>: <span style={{ color: '#ce9178' }}>'海風小店'</span>,</div>
        <div>{'}'}</div>
      </div>
      <div style={{ height: 168, background: '#181818', borderTop: '1px solid #2b2b2b', padding: '12px 22px', fontFamily: mono, fontSize: 17 }}>
        <div style={{ fontSize: 15, color: '#9aa0a6', letterSpacing: '0.1em', marginBottom: 10 }}>④ 終端機 · 打指令</div>
        <div style={{ color: '#cdd3df' }}><span style={{ color: C.orange }}>$ </span>npm run dev</div>
        <div style={{ color: '#7fd4a8' }}>  Local: http://localhost:5180/</div>
      </div>
    </div>
  </div>
);
const RegionCard = ({ n, name, what, tip }: { n: string; name: string; what: string; tip: string }) => (
  <div style={fill}><div style={pad}>
    <Eyebrow>段 1 · 第 {n} 塊</Eyebrow><Title size={56}>{name}</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 30 }}><Lead>{what}</Lead><Harvest>{tip}</Harvest></div>
  </div><Foot label="U11 · 課1 · VSCode" /></div>
);

const CmdMenu = ({ title, items }: { title: string; items: [string, string][] }) => (
  <div style={{ background: '#0f1117', borderRadius: 14, border: '1px solid #232733', overflow: 'hidden', boxShadow: '0 18px 50px -26px rgba(0,0,0,0.5)', maxWidth: 940 }}>
    <div style={{ padding: '14px 22px', borderBottom: '1px solid #232733', fontFamily: mono, fontSize: 22, color: '#e8eaed' }}><span style={{ color: C.orange, fontWeight: 700 }}>/</span> {title}</div>
    {items.map(([c, d], i) => <div key={i} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 18, padding: '13px 22px', background: i === 0 ? '#1b2130' : 'transparent', borderLeft: `3px solid ${i === 0 ? C.orange : 'transparent'}` }}><span style={{ fontFamily: mono, fontSize: 22, color: C.orange, fontWeight: 700 }}>{c}</span><span style={{ fontSize: 21, color: '#cdd3df' }}>{d}</span></div>)}
  </div>
);
const ModeSwitch = ({ modes, activeIdx }: { modes: [string, string][]; activeIdx: number }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 1460 }}>
    {modes.map(([n, d], i) => <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 18, background: i === activeIdx ? '#eef4ff' : C.card, border: `2px solid ${i === activeIdx ? BLUE : C.line}`, borderRadius: 14, padding: '17px 26px' }}><span style={{ flexShrink: 0, fontFamily: mono, fontSize: 18, color: i === activeIdx ? BLUE : C.faint, fontWeight: 700, width: 34 }}>{i + 1}</span><div style={{ flex: 1 }}><div style={{ fontSize: 29, fontWeight: 800 }}>{n}</div><div style={{ fontSize: 23, color: C.muted, marginTop: 3 }}>{d}</div></div>{i === activeIdx && <span style={{ fontFamily: mono, fontSize: 18, color: BLUE, fontWeight: 700 }}>目前</span>}</div>)}
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 6 }}><Key>Shift</Key><span style={{ fontSize: 23, color: C.muted }}>+</span><Key>Tab</Key><span style={{ fontSize: 24, color: C.muted }}>循環切換模式</span></div>
  </div>
);
const ApprovalLadder = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 1540 }}>
    {[
      ['Chat', '要求核准', '只討論、出計畫,不主動改檔。', BLUE],
      ['Agent', '代我核准', '在工作資料夾內自動讀寫與執行,出界才問。', OK],
      ['Agent Full Access', '完整存取權', '權限最大、速度最快,也最需要小心。', RED],
    ].map(([n, sub, d, col], i) => <div key={i} style={{ display: 'flex', gap: 20, background: C.card, border: `1px solid ${C.line}`, borderLeft: `8px solid ${col}`, borderRadius: 14, padding: '17px 26px' }}><span style={{ width: 46, height: 46, borderRadius: 12, background: col, color: '#fff', display: 'grid', placeContent: 'center', fontFamily: mono, fontWeight: 800, fontSize: 22 }}>{i + 1}</span><div><div style={{ fontSize: 30, fontWeight: 800 }}>{n} <span style={{ fontFamily: mono, fontSize: 20, color: col }}>{sub}</span></div><div style={{ fontSize: 23, color: C.muted, marginTop: 4 }}>{d}</div></div></div>)}
  </div>
);
const ReasoningDial = () => (
  <div style={{ display: 'flex', gap: 14, maxWidth: 1540 }}>
    {[
      ['低', '快、省'],
      ['中', '日常預設'],
      ['高', '難題'],
      ['超高', '部分模型'],
    ].map(([l, s], i) => <div key={i} style={{ flex: 1, background: i === 1 ? C.ink : C.card, color: i === 1 ? '#fff' : C.ink, border: `2px solid ${i === 1 ? C.ink : C.line}`, borderRadius: 16, padding: '22px 16px', textAlign: 'center' }}><div style={{ fontSize: 28, fontWeight: 800 }}>{l}</div><div style={{ fontSize: 21, marginTop: 8, color: i === 1 ? 'rgba(255,255,255,.75)' : C.muted }}>{s}</div></div>)}
  </div>
);
const BranchDiagram = () => (
  <div style={{ background: '#0f1117', borderRadius: 14, border: '1px solid #232733', padding: 24, maxWidth: 1260 }}>
    <svg viewBox="0 0 1100 260" style={{ display: 'block', width: '100%', height: 260 }}>
      <path d="M60 80 H1010" stroke="#7fd4a8" strokeWidth="8" fill="none" />
      <path d="M380 80 C470 80 470 170 560 170 H790 C870 170 870 80 950 80" stroke={C.orange} strokeWidth="8" fill="none" />
      {[60, 260, 380, 950, 1010].map((x) => <circle key={x} cx={x} cy="80" r="13" fill="#7fd4a8" stroke="#0f1117" strokeWidth="3" />)}
      {[560, 680, 790].map((x) => <circle key={x} cx={x} cy="170" r="13" fill={C.orange} stroke="#0f1117" strokeWidth="3" />)}
      <text x="60" y="48" fill="#7fd4a8" fontSize="24" fontFamily={mono}>main 主線</text>
      <text x="520" y="218" fill={C.orange} fontSize="24" fontFamily={mono}>feature 分支</text>
      <text x="880" y="48" fill="#9aa0a6" fontSize="19" fontFamily={mono}>merge 回來</text>
    </svg>
  </div>
);
const GitFlowDiagram = () => (
  <div style={{ display: 'flex', alignItems: 'stretch', gap: 12, maxWidth: 1600 }}>
    {[
      ['1', 'main 主線', '穩定版本'],
      ['2', 'feature 分支', '開新功能'],
      ['3', 'commits', '小步存檔'],
      ['4', 'PR / review', '請人檢查'],
      ['5', 'merge', '合回主線'],
    ].map(([n, t, d], i) => <div key={i} style={{ flex: 1, background: C.card, border: `1px solid ${C.line}`, borderTop: `5px solid ${i === 0 || i === 4 ? OK : C.orange}`, borderRadius: 14, padding: '18px 15px' }}><div style={{ fontFamily: mono, fontSize: 25, color: i === 0 || i === 4 ? OK : C.orange, fontWeight: 800 }}>{n}</div><div style={{ fontSize: 25, fontWeight: 800, marginTop: 8 }}>{t}</div><div style={{ fontSize: 20, color: C.muted, marginTop: 6 }}>{d}</div></div>)}
  </div>
);

const Cover: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>U11 · 第 1 堂 / 共 4 堂 · 4 小時 · 零基礎</Eyebrow><div className="ts-rise" style={{ marginTop: 34 }}><div style={{ fontSize: 100, fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.04 }}>四個工具,<br />開始指揮 AI 做專案</div><Lead>今天不背工具名。我們用「海風小店」同一個專案,認識 VSCode、Git & GitHub、Claude Code、Codex 這四個把手。</Lead></div></div><Foot label="U11 · 課1" /></div>
);
const Outcome: Page = () => (
  <RealShot img={weblabShot} url="localhost:5180" eyebrow="今天的共同練習場" title="海風小店:四個工具都圍繞它示範" caption="VSCode 段打開它、Git 段改店名並存檔、Claude Code / Codex 段用它示範 AI 工具如何被控制。" foot="U11 · 課1 · 成品預覽" maxH={530} pos="center" />
);
const Why: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>先講為什麼</Eyebrow><Title size={56}>AI 很會做事,但你要有工具把它管住</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 34 }}><Lead>真實工作不是只問一句「幫我做網站」。你要打開專案、知道它在哪、存得回來,再讓 AI 動手。</Lead><Think q="會用 ChatGPT,是不是就會 AI 開發?" a={<span>還不夠。AI 開發要有<O>專案工具鏈</O>:看檔案、跑指令、版本控制、AI 助手與權限。</span>} /><Harvest>今天的目標:知道四個工具各管哪一段流程。</Harvest></div></div><Foot label="U11 · 課1 · 為什麼" /></div>
);
const Roadmap: Page = () => {
  const items = [['段 1', 'VSCode', '工作台 · 外掛 · npm', '0:15'], ['段 2', 'Git & GitHub', '存檔 · 雲端 · 分支', '1:15'], ['段 3', 'Claude Code', '指令 · 選單 · 模式', '2:15'], ['段 4', 'Codex', '核准 · 推理 · 規劃', '3:10']];
  return <div style={fill}><div style={pad}><Eyebrow>今天路線 · 四個工具</Eyebrow><Title>前兩個是基本功,後兩個是 AI 助手</Title><div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18, marginTop: 46 }}>{items.map(([a, b, c, t]) => <div key={b} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '24px 22px' }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontFamily: mono, fontSize: 20, color: C.orange, fontWeight: 700 }}>{a}</span><span style={{ fontFamily: mono, fontSize: 17, color: C.faint }}>{t}</span></div><div style={{ fontSize: 30, fontWeight: 800, marginTop: 12 }}>{b}</div><div style={{ fontSize: 21, color: C.muted, marginTop: 8 }}>{c}</div></div>)}</div><Lead>現場跟著做就好,先把流程跑通。</Lead></div><Foot label="U11 · 課1 · 路線" /></div>;
};
const Rules: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>上課三個約定</Eyebrow><Title>照流程,每段都有過關點</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 44, maxWidth: 1450 }}><SuccessRow>只看老師指定的畫面,不要自行亂裝或亂改。</SuccessRow><SuccessRow>每段最後用檢查點對齊,過了再往下。</SuccessRow><SuccessRow>任何錯誤訊息先停下來,整段保留,不要急著關掉。</SuccessRow></div></div><Foot label="U11 · 課1 · 規則" /></div>
);
const Tools: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>今天會碰到的工具</Eyebrow><Title size={52}>這不是工具大全,是重要角色</Title><div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 16, marginTop: 38 }}><ToolCard img={vscodeDevShot} name="VSCode" role="看專案與裝外掛" /><ToolCard img={gitShot} name="Git" role="本機版本紀錄" /><ToolCard img={githubShot} name="GitHub" role="雲端與協作" /><ToolCard img={nodeShot} name="Node.js" role="跑網頁專案" /><ToolCard img={npmShot} name="npm" role="裝套件與跑 scripts" /></div></div><Foot label="U11 · 課1 · 工具" /></div>
);
const Precheck: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 720px', gap: 46, alignItems: 'center' }}><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}><Eyebrow>課前檢查</Eyebrow><Title size={52}>看到版本號,就能上課</Title><Lead>今天主線只確認 Node、npm、Git。Python 之後資料課才會重點使用。</Lead></div><Term title="TERMINAL" rows={[['cmd', 'node -v'], ['ok', 'v22.x.x'], ['cmd', 'npm -v'], ['ok', '10.x.x'], ['cmd', 'git --version'], ['ok', 'git version 2.x.x']]} /></div><Foot label="U11 · 課1 · 環境" /></div>
);

const Sec1: Page = () => <Section no="1" title="VSCode:你的專案工作台" time="0:15 - 1:15" sub="先認畫面、認外掛、用 cd 走進專案,再用 npm 把海風小店跑起來。" />;
const VSIntro: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 1 · VSCode</Eyebrow><Title size={54}>先不寫程式,先認工作台</Title><div className="ts-rise" style={{ marginTop: 32 }}><VSCodeMap /></div></div><Foot label="U11 · 課1 · VSCode" /></div>;
const RegExplorer: Page = () => <RegionCard n="1" name="檔案總管 Explorer" what="左邊列出專案所有檔案。你要先知道專案裡有什麼,才知道要把哪裡交給 AI。" tip="找檔案、點開檔案,都從 Explorer 開始。" />;
const RegEditor: Page = () => <RegionCard n="3" name="編輯區 Editor" what="點開檔案後,中間就是內容。今天主要看 README、package.json、src/data.js。" tip="中間那一大片,就是看檔案內容的地方。" />;
const RegTerminal: Page = () => <RegionCard n="4" name="終端機 Terminal" what="下方黑色區域。它不是駭客畫面,只是用打字操控專案的遙控器。" tip="跑 npm、git、AI CLI,都會從 Terminal 開始。" />;
const RegOthers: Page = () => <RegionCard n="2 / 5 / 6" name="Search / Source Control / Extensions" what="Search 找字在哪;Source Control 看你改了什麼;Extensions 裝新功能。" tip="今天先認位置:找東西、看改動、裝 AI 助手。" />;
const ExtWhat: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 1 · Extensions</Eyebrow><Title size={50}>擴充功能:幫 VSCode 裝外掛</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}><Analogy>VSCode 本身是空工作台。擴充功能就像手機 App:要 AI 助手、語言包、格式化,就去 Extensions 裝。</Analogy><Atom n={1} act="點左邊像四個方塊的 Extensions 圖示。" see="看到外掛搜尋框。" /><Atom n={2} act={<span>搜尋 <Key>Claude Code</Key> 或 <Key>Codex</Key>,找到後按 Install。</span>} see="多出新的 AI 面板或指令。" /></div></div><Foot label="U11 · 課1 · VSCode" /></div>
);
const ExtRecommend: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 1 · 外掛清單</Eyebrow><Title size={48}>今天先知道這幾個名字</Title><div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16, marginTop: 32, maxWidth: 1540 }}>{[['Claude Code', '段 3 的 AI 夥伴'], ['Codex', '段 4 的 AI 助手'], ['中文(繁體)語言包', '把 VSCode 選單變中文'], ['Prettier', '自動排版,之後再用']].map(([k, v]) => <div key={k} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '20px 26px' }}><div style={{ fontSize: 29, fontWeight: 800 }}>{k}</div><div style={{ fontSize: 23, color: C.muted, marginTop: 6 }}>{v}</div></div>)}</div><Harvest>今天重點不是裝一堆,是知道 AI 工具通常以外掛形式進 VSCode。</Harvest></div><Foot label="U11 · 課1 · VSCode" /></div>
);
const OpenProject: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 1 · 動手</Eyebrow><Title size={52}>打開海風小店資料夾</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 28, maxWidth: 1500 }}><Atom n={1} act={<span>File → Open Folder,選 <Key>ai-project-foundation-kit/web-lab</Key>。</span>} see="Explorer 出現 README、package.json、src。" /><Atom n={2} act="點開 README 與 package.json。" see="看得到專案說明與 scripts。" /><Atom n={3} act="打開 Terminal → New Terminal。" see="下方出現可輸入指令的黑色區域。" /></div></div><Foot label="U11 · 課1 · VSCode" /></div>;
const CodeTouchMap: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 1 · 學生真的會動到哪裡</Eyebrow><Title size={48}>今天不是整包都改,先改這幾個點</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 30, maxWidth: 1540 }}>
      {[
        ['src/data.js', '主要修改', '店名、標語、商品、流程文字。新手第一堂主要只動這裡。'],
        ['src/App.jsx', '先看懂', '首頁怎麼把 data.js 的資料畫出來。今天通常不手改。'],
        ['src/styles.css', '選做修改', '顏色、間距、字級。想改視覺時才碰。'],
        ['src/Beach.jsx', '今天不改', '會動的海灘主視覺。知道它存在即可,避免一開始改壞。'],
        ['package.json', '看 scripts', '知道 npm run dev / build 從這裡來。不要亂改套件。'],
        ['index.html / main.jsx', '只認位置', 'React app 的入口。第一堂不用改。'],
      ].map(([file, role, desc]) => (
        <div key={file} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '18px 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'baseline' }}><span style={{ fontFamily: mono, fontSize: 24, color: C.orange, fontWeight: 800 }}>{file}</span><span style={{ fontSize: 20, color: OK, fontWeight: 800 }}>{role}</span></div>
          <div style={{ fontSize: 23, color: C.muted, lineHeight: 1.45, marginTop: 8 }}>{desc}</div>
        </div>
      ))}
    </div>
    <div style={{ marginTop: 22 }}><Harvest>第一堂真正會改的程式碼:先鎖定 data.js。其他檔案先認角色,不要一次全部打開改。</Harvest></div>
  </div><Foot label="U11 · 課1 · 程式碼地圖" /></div>
);
const CdPage: Page = () => <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 720px', gap: 46, alignItems: 'center' }}><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}><Eyebrow>段 1 · cd</Eyebrow><Title size={50}>cd:走進資料夾</Title><Analogy><Key>cd</Key> = change directory,就是用打字走進資料夾。像在檔案總管點兩下進去,只是改用指令。</Analogy></div><Term title="TERMINAL" rows={[['dim', 'C:\\ai-project-foundation-kit>'], ['cmd', 'cd web-lab'], ['dim', 'C:\\...\\web-lab>'], ['out', '提示字尾出現 web-lab = 你進來了'], ['cmd', 'cd ..'], ['out', '回上一層']]} /></div><Foot label="U11 · 課1 · VSCode" /></div>;
const NpmWhat: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 1 · npm</Eyebrow><Title size={50}>Node 是引擎,npm 是補給站</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 26 }}><Analogy><B>Node.js</B> 讓網頁專案能在你電腦上跑。<B>npm</B> 幫你安裝專案需要的零件,並執行 package.json 裡的 scripts。</Analogy>{[['npm install', '第一次安裝需要的套件'], ['npm run dev', '把網站跑起來'], ['npm run build', '檢查能不能正式打包']].map(([a, b]) => <div key={a} style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 20, background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '16px 24px', maxWidth: 1480 }}><span style={{ fontFamily: mono, fontSize: 25, color: C.orange, fontWeight: 800 }}>{a}</span><span style={{ fontSize: 25 }}>{b}</span></div>)}</div></div><Foot label="U11 · 課1 · VSCode" /></div>
);
const RunProject: Page = () => <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 720px', gap: 46, alignItems: 'center' }}><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}><Eyebrow>段 1 · 動手</Eyebrow><Title size={48}>把網站跑起來</Title><Atom n={1} act={<span>確認你在 <Key>web-lab</Key>。</span>} see="提示字尾是 web-lab。" /><Atom n={2} act={<span>第一次打 <Key>npm install</Key>。</span>} see="跑完回到提示字。" /><Atom n={3} act={<span>打 <Key>npm run dev</Key>。</span>} see="出現 localhost 網址。" /></div><Term title="TERMINAL" rows={[['cmd', 'npm install'], ['ok', 'added packages'], ['cmd', 'npm run dev'], ['ok', 'Local: http://localhost:5180/']]} /></div><Foot label="U11 · 課1 · VSCode" /></div>;
const Localhost: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 1 · localhost</Eyebrow><Title size={52}>localhost:網站先跑在你自己的電腦</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 34 }}><Analogy>localhost 就像「自己家裡試菜」。網站還沒公開上網,只在你這台電腦裡跑。冒號後面的 5180 是門牌號碼。</Analogy><Harvest>看到 localhost,代表你已經把一個網頁專案真的跑起來了。</Harvest></div></div><Foot label="U11 · 課1 · VSCode" /></div>;
const WebReal: Page = () => <RealShot img={weblabShot} url="localhost:5180" eyebrow="段 1 · 成功畫面" title="看到海風小店,這段就成功" caption="這不是截圖假裝,而是本機 web-lab 跑起來後的畫面。之後 Git、Claude Code、Codex 都以它當練習場。" foot="U11 · 課1 · VSCode" maxH={530} pos="center" />;
const VsPit: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 1 · 卡住了?</Eyebrow><Title size={50}>VSCode / npm 常見狀況</Title><div className="ts-rise" style={{ marginTop: 32, maxWidth: 1500 }}><Pitfall items={[['找不到終端機:', '上方選單 Terminal → New Terminal。'], ['npm 說找不到 package.json:', '你還沒 cd 到 web-lab。'], ['npm run dev 停住:', '正常,代表網站正在跑,不要關。']]} /></div><div style={{ marginTop: 20 }}><Checkpoint items={['VSCode 打得開 web-lab', '知道 Extensions 在哪', '會 cd 進資料夾', 'localhost 看得到海風小店']} /></div></div><Foot label="U11 · 課1 · VSCode" /></div>;
const Break1: Page = () => <BreakSlide note="站起來走一走。回來我們改一個字,用 Git 和 GitHub 把成果存起來。" />;

const Sec2: Page = () => <Section no="2" title="Git & GitHub:存檔與協作" time="1:15 - 2:15" sub="先製造一個小改動,再看 status / diff / commit,接著認識 GitHub、pull、branch、tag、git flow。" />;
const EditDo: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 2 · 先製造一個改動</Eyebrow><Title size={50}>改 data.js 裡的店名</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 30 }}><Atom n={1} act={<span>打開 <Key>src/data.js</Key>。</span>} see="看到 name: '海風小店'。" /><Atom n={2} act="把引號裡的店名改成自己的名字。" see="瀏覽器畫面跟著變。" /><Atom n={3} act="按 Ctrl+S 存檔。" see="VSCode 分頁上的小點消失。" /><Harvest>要先有改動,Git 才有東西可以看。</Harvest></div></div><Foot label="U11 · 課1 · Git" /></div>;
const GitHead: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 2 · Git</Eyebrow><Title size={52}>Git 不是炫技,是專案存檔</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 34 }}><Analogy>Git 像遊戲存檔點。改到安全位置,存一筆;後面改壞了,就知道哪裡開始壞。</Analogy><Harvest>AI 協作時,Git 是你看清楚 AI 動了什麼的工具。</Harvest></div></div><Foot label="U11 · 課1 · Git" /></div>;
const GitStatus: Page = () => <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 720px', gap: 46, alignItems: 'center' }}><div className="ts-rise"><Eyebrow>段 2 · git status</Eyebrow><Title size={50}>先看現在改了什麼</Title><Lead>status 不會改檔案,只是告訴你目前工作區狀態。</Lead></div><Term title="TERMINAL" rows={[['cmd', 'git status'], ['out', 'modified: src/data.js'], ['dim', '紅色 modified = 這個檔案被改過']]} /></div><Foot label="U11 · 課1 · Git" /></div>;
const GitDiff: Page = () => <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 720px', gap: 46, alignItems: 'center' }}><div className="ts-rise"><Eyebrow>段 2 · git diff</Eyebrow><Title size={50}>再看到底改了哪幾行</Title><Lead>紅色是原本,綠色是改完。之後 AI 幫你改完,第一件事也是看 diff。</Lead></div><Term title="git diff · src/data.js" rows={[['dim', 'export const shop = {'], ['err', "-  name: '海風小店',"], ['ok', "+  name: '小明快炒店',"], ['dim', '};']]} /></div><Foot label="U11 · 課1 · Git" /></div>;
const GitCommit: Page = () => <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 720px', gap: 46, alignItems: 'center' }}><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}><Eyebrow>段 2 · commit</Eyebrow><Title size={50}>確認沒問題,拍一張照</Title><Atom n={1} act={<span><Key>git add .</Key> 把改動收進來。</span>} see="沒消息通常就是好消息。" /><Atom n={2} act={<span><Key>git commit -m "改店名"</Key></span>} see="出現一筆提交紀錄。" /></div><Term title="TERMINAL" rows={[['cmd', 'git add .'], ['cmd', 'git commit -m "改店名"'], ['ok', '[main a1b2c3d] 改店名'], ['dim', '1 file changed']]} /></div><Foot label="U11 · 課1 · Git" /></div>;
const GitHubWhat: Page = () => <RealShot img={githubShot} url="github.com" eyebrow="段 2 · GitHub" title="GitHub:把 Git 存檔放到雲端" caption="Git 是本機存檔;GitHub 是雲端倉庫。多人合作、備份、Pull Request,都從這裡開始。" foot="U11 · 課1 · GitHub" maxH={520} pos="top" />;
const CloneFromTeacher: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 760px', gap: 44, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Eyebrow>段 2 · 第一步:從老師 repo clone</Eyebrow><Title size={46}>先把教材複製到自己電腦</Title>
      <Lead>學生一開始會從老師公開的 repo clone。這一步只是把教材拿下來,還不是自己的 GitHub repo。</Lead>
      <Harvest>clone 完後,本機的 origin 會先指向老師 repo,這是正常的。</Harvest>
    </div>
    <Term title="TERMINAL · 先拿到教材" size={19} rows={[
      ['cmd', 'git clone https://github.com/HanLi-Chainsea/chainsea-ai-course-kit.git'],
      ['cmd', 'cd chainsea-ai-course-kit'],
      ['cmd', 'git remote -v'],
      ['out', 'origin  https://github.com/HanLi-Chainsea/chainsea-ai-course-kit.git'],
    ]} />
  </div><Foot label="U11 · 課1 · GitHub" /></div>
);
const OwnRepoFlow: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 760px', gap: 44, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Eyebrow>段 2 · 第二步:接到自己的 repo</Eyebrow><Title size={46}>clone 下來後,不要推回老師那邊</Title>
      <Lead>接著到 GitHub 建一個自己的空 repo,例如 <B>chainsea-ai-kit</B>。不要勾 README,因為本機已經有完整教材。</Lead>
      <Harvest>把老師 repo 改名 upstream,自己的 repo 設成 origin。之後 push 都推到自己的 GitHub。</Harvest>
    </div>
    <Term title="TERMINAL · 把遠端換成自己的" size={18} rows={[
      ['cmd', 'git remote -v'],
      ['out', 'origin  https://github.com/teacher/course-kit.git'],
      ['cmd', 'git remote rename origin upstream'],
      ['cmd', 'git remote add origin https://github.com/你的帳號/你的repo.git'],
      ['cmd', 'git branch -M main'],
      ['cmd', 'git push -u origin main'],
      ['ok', '之後 git push 就會推到自己的 repo'],
    ]} />
  </div><Foot label="U11 · 課1 · GitHub" /></div>
);
const RemoteRoles: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 2 · 記住兩個 remote 角色</Eyebrow><Title size={48}>origin 是自己的,upstream 是老師的</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 34, maxWidth: 1540 }}>
      <div style={{ background: '#eef7f2', border: '1px solid #bfe6d4', borderRadius: 16, padding: '26px 30px' }}><div style={{ fontFamily: mono, fontSize: 30, color: OK, fontWeight: 800 }}>origin</div><div style={{ fontSize: 28, fontWeight: 800, marginTop: 10 }}>你的 GitHub repo</div><div style={{ fontSize: 24, color: C.muted, lineHeight: 1.45, marginTop: 8 }}>你交作業、保存修改、日常 push 的地方。</div><div style={{ marginTop: 16 }}><Key>git push</Key></div></div>
      <div style={{ background: '#eef4ff', border: '1px solid #cfe0fb', borderRadius: 16, padding: '26px 30px' }}><div style={{ fontFamily: mono, fontSize: 30, color: BLUE, fontWeight: 800 }}>upstream</div><div style={{ fontSize: 28, fontWeight: 800, marginTop: 10 }}>老師的原始 repo</div><div style={{ fontSize: 24, color: C.muted, lineHeight: 1.45, marginTop: 8 }}>老師更新教材時,你從這裡拉新版。</div><div style={{ marginTop: 16 }}><Key>git pull upstream main</Key></div></div>
    </div>
    <div style={{ marginTop: 28 }}><Harvest>日常推自己的 origin;要拿老師更新,才 pull upstream。</Harvest></div>
  </div><Foot label="U11 · 課1 · GitHub" /></div>
);
const GitPush: Page = () => <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 720px', gap: 46, alignItems: 'center' }}><div className="ts-rise"><Eyebrow>段 2 · push</Eyebrow><Title size={50}>push:把本機 commit 推上 GitHub</Title><Lead>commit 只存在你電腦。push 才會把那筆版本送到雲端倉庫。</Lead><Harvest>本機 Git 管版本,GitHub 管分享與協作。</Harvest></div><Term title="TERMINAL" rows={[['cmd', 'git push origin main'], ['ok', 'To github.com:your/repo.git'], ['ok', 'main -> main']]} /></div><Foot label="U11 · 課1 · GitHub" /></div>;
const GitPull: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 2 · pull</Eyebrow><Title size={50}>pull:把別人的更新拉下來</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 28 }}>{[['git clone <網址>', '第一次:複製一整份專案'], ['git pull', '之後:抓雲端最新版並合併'], ['git fetch', '只看看雲端有什麼,先不合併']].map(([a, b]) => <div key={a} style={{ display: 'grid', gridTemplateColumns: '330px 1fr', gap: 20, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '18px 24px', maxWidth: 1480 }}><span style={{ fontFamily: mono, fontSize: 24, color: C.orange, fontWeight: 800 }}>{a}</span><span style={{ fontSize: 25 }}>{b}</span></div>)}<Analogy>多人合作前先 pull,像開共享文件前先同步最新版。</Analogy></div></div><Foot label="U11 · 課1 · GitHub" /></div>;
const BranchWhy: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 2 · branch</Eyebrow><Title size={50}>branch:開一個平行宇宙來改</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 30 }}><Analogy>分支像另開一個存檔格。在新分支上怎麼改,都不會動到 main 主線。</Analogy><Think q="AI 會改很多檔,我怎麼降低風險?" a={<span>先開分支給 AI 改。滿意再合併,不滿意就丟掉分支。</span>} /></div></div><Foot label="U11 · 課1 · Git" /></div>;
const BranchPage: Page = () => <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 780px', gap: 42, alignItems: 'center' }}><div className="ts-rise"><Eyebrow>段 2 · 分支圖</Eyebrow><Title size={48}>main 保持乾淨,feature 放新改動</Title><Term title="TERMINAL" rows={[['cmd', 'git checkout -b feature/ai-edit'], ['ok', 'Switched to a new branch'], ['cmd', 'git checkout main'], ['ok', 'Switched to branch main']]} /></div><BranchDiagram /></div><Foot label="U11 · 課1 · Git" /></div>;
const TagPage: Page = () => <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 700px', gap: 46, alignItems: 'center' }}><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}><Eyebrow>段 2 · tag</Eyebrow><Title size={48}>tag:幫重要版本插旗子</Title><Analogy>tag 像在時間軸上插旗:「這一版是 v1.0 正式版」。之後找版本,找旗子最快。</Analogy></div><Term title="TERMINAL" rows={[['cmd', 'git tag v1.0'], ['cmd', 'git tag'], ['out', 'v1.0']]} /></div><Foot label="U11 · 課1 · Git" /></div>;
const GitFlowPage: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 2 · git flow</Eyebrow><Title size={48}>團隊大概這樣協作</Title><div className="ts-rise" style={{ marginTop: 30 }}><GitFlowDiagram /></div><div style={{ marginTop: 28 }}><Harvest>先從 main 開 feature,在 feature commit,開 PR 給人看,通過後 merge 回 main。</Harvest></div></div><Foot label="U11 · 課1 · Git" /></div>;
const GitPit: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 2 · 卡住了?</Eyebrow><Title size={50}>Git 常見狀況</Title><div className="ts-rise" style={{ marginTop: 32, maxWidth: 1500 }}><Pitfall items={[['not a git repository:', '目前資料夾還不是 Git 專案,或你站錯位置。'], ['commit 要名字 email:', '第一次會要求設定身份,照老師給的指令設定。'], ['push 被拒絕:', '通常是雲端比較新,先 git pull 再處理。']]} /></div><div style={{ marginTop: 20 }}><Checkpoint items={['會 status / diff / add / commit', '知道 GitHub 是雲端倉庫', '知道 pull / branch / tag / git flow 的白話用途']} /></div></div><Foot label="U11 · 課1 · Git" /></div>;
const Break2: Page = () => <BreakSlide note="回來換今天的第一個 AI 夥伴:Claude Code。" />;

const Sec3: Page = () => <Section no="3" title="Claude Code:你的第一個 AI 夥伴" time="2:15 - 3:10" sub="住在 VSCode / 終端機裡的 AI 助手。今天學斜線指令、擴充選單與 Modes。" />;
const CCWhat: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 3 · Claude Code</Eyebrow><Title size={52}>它不是聊天網頁,它住在專案裡</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 30 }}><Analogy>Claude Code 看得到你的檔案、能改檔、能跑指令。像一個能動手的助理坐在 VSCode 裡。</Analogy><Think q="那我直接叫它全改就好?" a={<span>先別。你要用模式管權限,用 Git 看它做了什麼。</span>} /></div></div><Foot label="U11 · 課1 · Claude Code" /></div>;
const CCTerm: Page = () => <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 720px', gap: 46, alignItems: 'center' }}><div className="ts-rise"><Eyebrow>段 3 · 對話示意</Eyebrow><Title size={46}>你交代任務,它回報動作</Title><Lead>重點不是讓它自由發揮,是要求它說清楚「會改哪裡、怎麼驗收」。</Lead></div><Term title="Claude Code" size={21} rows={[['cmd', '請把首頁標題放大一點,先說你會改哪裡'], ['ok', '我會查看 src/App.jsx 與 styles.css'], ['out', '計畫:只改 hero title 的字級'], ['dim', '等待你同意...']]} /></div><Foot label="U11 · 課1 · Claude Code" /></div>;
const CCSlash: Page = () => <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 900px', gap: 40, alignItems: 'center' }}><div className="ts-rise"><Eyebrow>段 3 · slash commands</Eyebrow><Title size={48}>打一個 /,叫出控制台</Title><Lead>斜線指令不是要背,是你需要時叫出工具狀態、模型、用量、壓縮上下文。</Lead></div><CmdMenu title="Claude Code 常用指令" items={[['/model', '切換模型'], ['/effort', '調整思考深度'], ['/usage', '查看用量'], ['/compact', '壓縮上下文'], ['/goal', '設定任務目標'], ['/btw', '插入問題']]} /></div><Foot label="U11 · 課1 · Claude Code" /></div>;
const CCCompact: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 3 · /compact</Eyebrow><Title size={50}>Context 快滿時,先壓縮</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 30 }}><Analogy>AI 的上下文像桌面。聊太久,桌面堆滿文件,它會變慢或忘東忘西。<Key>/compact</Key> 就是把前面整理成摘要,騰出空間。</Analogy><SuccessRow>看到 context 快用完、或 AI 開始答非所問,先 /compact。</SuccessRow></div></div><Foot label="U11 · 課1 · Claude Code" /></div>;
const CCMenuPage: Page = () => <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 820px', gap: 42, alignItems: 'center' }}><div className="ts-rise"><Eyebrow>段 3 · 擴充選單</Eyebrow><Title size={48}>不想打指令,選單也點得到</Title><Lead>VSCode 外掛版也有 command menu。模型、思考深度、用量,都可以從選單調。</Lead></div><div style={{ background: '#252526', borderRadius: 12, border: '1px solid #1b1b1b', overflow: 'hidden' }}><div style={{ padding: '13px 20px', background: '#1e1e1e', color: '#9aa0a6', fontFamily: mono, fontSize: 18 }}>Claude Code · Show command menu</div>{[['Model', 'Opus / Sonnet'], ['Effort', 'low / medium / high'], ['Thinking', 'on / off'], ['Account & Usage', '查看用量']].map(([l, v]) => <div key={l} style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 22px', borderTop: '1px solid #333' }}><span style={{ color: '#e8eaed', fontSize: 25, fontWeight: 700 }}>{l}</span><span style={{ color: C.orange, fontFamily: mono, fontSize: 21 }}>{v}</span></div>)}</div></div><Foot label="U11 · 課1 · Claude Code" /></div>;
const CCModes: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 3 · Modes</Eyebrow><Title size={48}>它能不能自己動手,你決定</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 24 }}><ModeSwitch modes={[['Ask before edits', '每次改檔前先問你,新手推薦'], ['Edit automatically', '直接改檔,速度快但要盯著 diff'], ['Plan Mode', '只出計畫,先不動手']]} activeIdx={0} /><Harvest>新手先用 Ask before edits 或 Plan Mode,不要一開始就全放權。</Harvest></div></div><Foot label="U11 · 課1 · Claude Code" /></div>;
const CCTakeaway: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 3 · 收束</Eyebrow><Title size={50}>叫得動,更要管得住</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 30 }}><Analogy>把 Claude Code 當能幹但需要交代清楚的新同事:用 /goal 定方向、用 Modes 管權限、用 Git diff 查結果。</Analogy><Checkpoint items={['知道 /model /effort /usage /compact /goal /btw 的用途', '知道 command menu 也能調設定', '知道三種 Modes 差別']} /></div></div><Foot label="U11 · 課1 · Claude Code" /></div>;
const Break3: Page = () => <BreakSlide note="最後一段認識 Codex:同類工具,但權限與推理設定名稱不同。" />;

const Sec4: Page = () => <Section no="4" title="Codex:另一個 AI 助手" time="3:10 - 3:50" sub="OpenAI 的 AI 開發助手。操作邏輯和 Claude Code 相通,重點看核准權限、推理等級與規劃模式。" />;
const CodexWhat: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 4 · Codex</Eyebrow><Title size={52}>同類工具,不同牌子</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 26 }}><Analogy>Codex 和 Claude Code 都是 coding agent:能讀專案、改檔案、跑指令。差別在模型、介面名稱、權限設定。</Analogy><Harvest>學會一套控制流程,換工具不會迷路。</Harvest></div></div><Foot label="U11 · 課1 · Codex" /></div>;
const CodexSlash: Page = () => <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 900px', gap: 40, alignItems: 'center' }}><div className="ts-rise"><Eyebrow>段 4 · slash commands</Eyebrow><Title size={48}>一樣打 /,先看狀態再定目標</Title><Lead><Key>/status</Key> 看目前設定與用量;<Key>/goal</Key> 設定任務目標。大任務先定方向。</Lead></div><CmdMenu title="Codex 常用指令" items={[['/status', '看設定、權限、用量'], ['/goal', '設定或清除任務目標'], ['/model', '換模型與推理等級'], ['/approve', '核准被擋下的動作'], ['/compact', '壓縮上下文'], ['/plan', '進入規劃模式']]} /></div><Foot label="U11 · 課1 · Codex" /></div>;
const CodexApproval: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 4 · 核准權限</Eyebrow><Title size={48}>放多少權給它,你自己決定</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 22 }}><ApprovalLadder /><Harvest>放權越多越快,也越要小心。新手從 Chat 或 Agent 開始,Full Access 只給很明確的任務。</Harvest></div></div><Foot label="U11 · 課1 · Codex" /></div>;
const CodexReasoning: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 4 · 推理等級</Eyebrow><Title size={50}>低 / 中 / 高 / 超高:想多深</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 30 }}><Lead>推理等級像思考時間。越高通常越慢、越花額度;日常任務用中等,難題再往上。</Lead><ReasoningDial /><Harvest>超高不是每個模型都有,需要時再開。</Harvest></div></div><Foot label="U11 · 課1 · Codex" /></div>;
const CodexPlan: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 4 · 規劃模式</Eyebrow><Title size={50}>Shift + Tab:先看計畫,再動手</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}><Analogy>Plan 就是先讓它寫施工圖。你看懂它要拆哪裡、改哪裡,再讓它真的動手。</Analogy><div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><Key>Shift</Key><span style={{ fontSize: 24, color: C.muted }}>+</span><Key>Tab</Key><span style={{ fontSize: 26, color: C.muted }}>切換規劃模式</span></div><Harvest>和 Claude Code 的 Plan Mode 是同一個精神。</Harvest></div></div><Foot label="U11 · 課1 · Codex" /></div>;
const CodexPit: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 4 · 卡住了?</Eyebrow><Title size={50}>Codex 常見狀況</Title><div className="ts-rise" style={{ marginTop: 30, maxWidth: 1520 }}><Pitfall items={[['它一直要核准:', '這代表權限保守。先看它要做什麼,信任再提高權限。'], ['不確定目前設定:', '打 /status,看模型、權限、用量。'], ['答案太快太粗:', '提高推理等級,或先進規劃模式。']]} /></div><div style={{ marginTop: 22 }}><Checkpoint items={['知道 Chat / Agent / Full Access 差別', '會用 /status 看狀態、/goal 定目標', '知道推理等級與規劃模式的用途']} /></div></div><Foot label="U11 · 課1 · Codex" /></div>;

const SecEnd: Page = () => <Section no="收束" title="四個工具,串成一條流程" time="3:50 - 4:00" sub="VSCode 看得到、Git 收得回、Claude Code 與 Codex 動得了手。" />;
const Recap: Page = () => <div style={fill}><div style={pad}><Eyebrow>今天四個工具,一次收攏</Eyebrow><Title size={50}>不是工具清單,是一條工作流</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 34, maxWidth: 1540 }}>{[['VSCode', '打開專案、裝外掛、用 npm 跑網站。'], ['Git & GitHub', 'diff / commit 存檔、push 上雲、branch 控風險。'], ['Claude Code', '斜線指令調它、Modes 管它能不能動手。'], ['Codex', '核准權限、推理等級、規劃模式。']].map(([a, b], i) => <div key={a} style={{ display: 'flex', alignItems: 'flex-start', gap: 22 }}><span style={{ fontFamily: mono, fontSize: 30, color: C.orange, fontWeight: 800, minWidth: 60 }}>{String(i + 1).padStart(2, '0')}</span><div><div style={{ fontSize: 33, fontWeight: 800 }}>{a}</div><div style={{ fontSize: 25, color: C.muted, marginTop: 3 }}>{b}</div></div></div>)}</div></div><Foot label="U11 · 課1 · 收束" /></div>;
const Punchline: Page = () => <div style={{ ...fill, background: C.ink, color: '#fff' }}><div style={pad}><Eyebrow>今天最重要的一句</Eyebrow><div style={{ fontSize: 74, fontWeight: 900, lineHeight: 1.2, marginTop: 28, maxWidth: 1560, letterSpacing: '-0.02em' }}>工具不是拿來炫技,<br />是你<span style={{ color: C.orange }}>指揮 AI</span> 的四個把手。</div><div style={{ fontSize: 31, color: 'rgba(255,255,255,0.7)', marginTop: 34, maxWidth: 1420, lineHeight: 1.55 }}>會打開、會存檔、會調 AI、會管權限,AI 才是幫手,不是亂源。</div></div><div style={{ position: 'absolute', left: 110, bottom: 44, fontFamily: mono, fontSize: 19, color: 'rgba(255,255,255,0.5)' }}>U11 · 課1 · 記住這句</div></div>;
const Homework: Page = () => <div style={fill}><div style={pad}><Eyebrow>回家作業</Eyebrow><Title size={50}>把四個工具各做一次最小動作</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 38, maxWidth: 1480 }}><SuccessRow>VSCode:重開 web-lab,跑 npm run dev。</SuccessRow><SuccessRow>Git:改一個 data.js 文字,git diff 後 commit。</SuccessRow><SuccessRow>Claude Code 或 Codex:用 Plan / Chat 問它「如果我要改首頁標語,會改哪裡?」先不要讓它改。</SuccessRow></div></div><Foot label="U11 · 課1 · 作業" /></div>;
const Next: Page = () => <div style={fill}><div style={pad}><Eyebrow>下一堂預告</Eyebrow><Title size={56}>工具認得了,<br />下一堂正式讓 AI 幫你改專案</Title><Lead>下一堂會把今天的 Git、Plan、權限觀念接起來,練「先讀、先計畫、加護欄、再修改」。</Lead></div><Foot label="U11 · 課1 · 下一堂" /></div>;

export const meta: SlideMeta = { title: 'U11 課1:四大工具第一堂課', createdAt: '2026-06-30T04:11:13.208Z' };

export const notes: (string | undefined)[] = [
  '今天第一堂改成四個工具支柱:VSCode、Git 與 GitHub、Claude Code、Codex。海風小店會當整堂課的共同練習場。',
  '先讓大家看到成品。今天不是抽象講工具,而是每個工具都會圍繞同一個 web-lab 專案示範。',
  '先講為什麼。AI 很會做事,但工程流程不是只問一句話。你需要知道專案在哪,怎麼跑,怎麼存回來,再讓 AI 動手。',
  '今天路線四段:VSCode 是工作台,Git 和 GitHub 是版本與協作,Claude Code 和 Codex 是兩個 AI 助手。',
  '上課三個約定:不要自由探索、每段都有檢查點、錯誤訊息不要關掉。',
  '今天會碰到的基本工具:VSCode、Git、GitHub、Node、npm。它們各自有一個清楚角色。',
  '先做環境檢查。今天主線只需要 Node、npm、Git,看到版本號就能繼續。',
  '段一開始。VSCode 是你的專案工作台,今天先認畫面、裝外掛、用 npm 跑網站。',
  '這是 VSCode 的全景。記住檔案總管、編輯區、終端機、搜尋、Source Control、Extensions。',
  'Explorer 是看專案內容的地方。你自己知道檔案在哪,才知道要 AI 看哪裡。',
  'Editor 是看檔案內容的地方。今天先看 README、package.json、data.js。',
  'Terminal 是打指令的地方。它不是嚇人的黑盒,只是操控專案的遙控器。',
  'Search、Source Control、Extensions 分別負責找字、看改動、裝外掛。',
  'Extensions 就像 VSCode 的 App 商店。Claude Code 和 Codex 都會以外掛形式進到 VSCode。',
  '今天先知道這幾個外掛名字。Claude Code、Codex 是主角,語言包和 Prettier 只是補充。',
  '動手打開 web-lab。確認 Explorer 裡有 README、package.json、src。',
  '這頁要講清楚學生真的會動哪些程式碼。第一堂主要改 src/data.js;App.jsx 先看懂;styles.css 選做;Beach.jsx 不改;package.json 只看 scripts。',
  'cd 是走進資料夾。提示字尾巴變成 web-lab,就代表你站到正確位置。',
  'Node 是引擎,npm 是補給站。package.json 裡的 scripts 會用 npm 跑。',
  '現在跑 npm install 和 npm run dev。第一次 install 會花時間,不要急著關。',
  'localhost 是你自己電腦上的網站。看到 localhost,代表專案真的跑起來。',
  '看到海風小店畫面,段一最重要的任務就完成了。',
  '常見卡住點:終端機找不到、站錯資料夾、npm run dev 停住。逐一對照即可。',
  '休息。回來進 Git 和 GitHub。',
  '段二開始。先改 data.js 裡的店名,製造一個 Git 可以追蹤的改動。',
  'Git 是存檔系統。之後 AI 改完,我們就靠 Git 看它動了哪些地方。',
  'git status 看現在改了什麼。它只看狀態,不會改檔案。',
  'git diff 看具體改動。紅色是原本,綠色是改完。',
  '確認沒問題後,git add 和 git commit 把版本存起來。',
  'GitHub 是把本機 Git 紀錄放到雲端,方便備份與協作。',
  '學生第一步會從老師公開 repo clone 教材。clone 後 origin 先指向老師 repo,這是正常的。',
  '接著學生要在 GitHub 建自己的空 repo,把老師 repo 改名 upstream,再把自己的 repo 加成 origin,最後 git push -u origin main。',
  '記住兩個 remote 角色:origin 是自己的作業 repo,upstream 是老師的原始教材 repo。日常 push 到 origin;要拿老師更新才 pull upstream main。',
  'push 是把本機 commit 推上 GitHub。commit 是本機, push 是雲端。',
  'clone、pull、fetch 是從雲端拿東西回來。多人合作前常常先 pull。',
  'branch 是平行宇宙。在分支上改,main 主線可以保持乾淨。',
  '用圖看分支。feature 從 main 分出去,完成後再 merge 回來。',
  'tag 是重要版本的旗子。v1.0 這種正式版通常會用 tag 標起來。',
  '團隊常見流程:main、feature、commit、PR、merge。今天先看懂概念。',
  'Git 常見卡住點:站錯資料夾、身份未設定、push 被拒絕。',
  '休息。回來看 Claude Code。',
  'Claude Code 是住在專案裡的 AI 助手,不是單純聊天網頁。',
  '對話示意:你要它先說會改哪裡,不是一開始就讓它亂改。',
  '斜線指令是 Claude Code 的控制台。今天知道 model、effort、usage、compact、goal、btw。',
  '/compact 特別重要。上下文快滿或 AI 開始混亂時,先壓縮。',
  '不想打指令,VSCode 外掛的 command menu 也能調模型、effort、usage。',
  'Modes 決定它能不能自己動手。新手先用 Ask before edits 或 Plan Mode。',
  'Claude Code 的重點是叫得動也管得住:目標、模式、diff。',
  '短休息,最後看 Codex。',
  'Codex 是 OpenAI 的同類工具。工具名不同,控制邏輯相通。',
  'Codex 也有 slash commands。先用 /status 看狀態,用 /goal 定任務。',
  '核准權限有三段:Chat、Agent、Agent Full Access。權限越大越快,風險也越高。',
  '推理等級決定它想多深。日常中等,難題再升高。',
  '規劃模式是先看計畫再動手。和 Claude Code 的 Plan Mode 精神一樣。',
  'Codex 常見卡住點:一直要核准、不知道設定、答案太粗。',
  '收束。四個工具要串成一條流程。',
  '今天四個工具的角色:VSCode 看得到,Git 收得回,Claude Code 和 Codex 動得了手。',
  '最重要一句:工具是你指揮 AI 的四個把手。',
  '作業是每個工具做一次最小動作。',
  '下一堂會正式練 AI 改專案:先讀、先計畫、加護欄、再修改。',
];

export default [
  Cover, Outcome, Why, Roadmap, Rules, Tools, Precheck,
  Sec1, VSIntro, RegExplorer, RegEditor, RegTerminal, RegOthers, ExtWhat, ExtRecommend, OpenProject, CodeTouchMap, CdPage, NpmWhat, RunProject, Localhost, WebReal, VsPit, Break1,
  Sec2, EditDo, GitHead, GitStatus, GitDiff, GitCommit, GitHubWhat, CloneFromTeacher, OwnRepoFlow, RemoteRoles, GitPush, GitPull, BranchWhy, BranchPage, TagPage, GitFlowPage, GitPit, Break2,
  Sec3, CCWhat, CCTerm, CCSlash, CCCompact, CCMenuPage, CCModes, CCTakeaway, Break3,
  Sec4, CodexWhat, CodexSlash, CodexApproval, CodexReasoning, CodexPlan, CodexPit,
  SecEnd, Recap, Punchline, Homework, Next,
] satisfies Page[];
