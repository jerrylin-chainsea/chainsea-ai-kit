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
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}><Eyebrow>{eyebrow}</Eyebrow><span style={{ fontSize: 22, color: OK, fontFamily: mono, fontWeight: 700 }}>今天的共同練習場{tag}</span></div>
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
        <div><span style={{ color: '#c586c0' }}>export const</span> <span style={{ color: '#9cdcfe' }}>brand</span> = {'{'}</div>
        <div style={{ paddingLeft: 24 }}><span style={{ color: '#9cdcfe' }}>name</span>: <span style={{ color: '#ce9178' }}>'BOBA TIDE'</span>,</div>
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
  <div style={fill}><div style={pad}><Eyebrow>U11 · 第 1 堂 / 共 4 堂 · 4 小時 · 零基礎</Eyebrow><div className="ts-rise" style={{ marginTop: 34 }}><div style={{ fontSize: 96, fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.04 }}>第一次建立<br />AI coding 工作流程</div><Lead>今天不是工具介紹。你會從 Claude 網頁版看到成果,再進 VSCode 跑起 web-lab、用 GitHub 保存版本,最後學會用 Claude Code / Codex 控制 AI。</Lead></div></div><Foot label="U11 · 課1" /></div>
);
const ClaudeWebDemo: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>0:00 - 0:15 · 開場</Eyebrow><Title size={54}>Claude 網頁版可以很快做出一個網頁</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 34 }}>
      <Analogy>先看到:只靠網頁版 AI,也能產出一個看起來像樣的頁面。</Analogy>
      <Think q="既然網頁版可以做,為什麼還要進 VSCode?" a={<span>因為真正開發要進專案:看檔案、改檔案、跑指令,還要用 Git 保存每一步。</span>} />
      <Harvest>網頁版是展示成果;VSCode 裡的 agent 才能進入專案工作。</Harvest>
    </div>
  </div><Foot label="U11 · 課1 · 開場" /></div>
);
const MainlineDoD: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>今天的主線</Eyebrow><Title size={48}>不是四個工具,是一條流程</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28, maxWidth: 1540 }}>
      <div style={{ fontFamily: mono, fontSize: 24, background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '20px 26px', lineHeight: 1.62 }}>Claude 網頁版成果 → VSCode → web-lab → Git / GitHub → Claude Code / Codex → 下一堂 AI 修改專案</div>
      <Harvest>今天先建立工作流程。下一堂才正式讓 AI 修改專案。</Harvest>
    </div>
  </div><Foot label="U11 · 課1 · 主線" /></div>
);
const Outcome: Page = () => (
  <RealShot img={weblabShot} url="localhost:5180" eyebrow="今天的共同練習場" title="BOBA TIDE:四個工具都圍繞它示範" caption="VSCode 段打開它、Git 段改首頁標題並存檔、Claude Code / Codex 段用它示範 AI 工具如何被控制。網頁上方可以切到備料控制台、訂單看板與 LINE 推播中心。" foot="U11 · 課1 · 成品預覽" maxH={530} pos="center" />
);
const Why: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>先講為什麼</Eyebrow><Title size={56}>真正開發要能進專案、能保存、能驗收</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 34 }}><Lead>真實工作不是只問一句「幫我做網站」。你要打開專案、知道它在哪、跑得起來,再讓 AI 動手。</Lead><Think q="會用 Claude 網頁版,是不是就會 AI 開發?" a={<span>還不夠。AI 開發要有<O>專案工具鏈</O>:VSCode 看檔案、Terminal 跑指令、Git 保存版本、AI agent 受你控制。</span>} /><Harvest>今天的目標:把這條鏈跑通一次。</Harvest></div></div><Foot label="U11 · 課1 · 為什麼" /></div>
);
const Roadmap: Page = () => {
  const items = [
    ['0:00 - 0:15', 'Claude 網頁版成果展示', '引出為什麼要用 VSCode'],
    ['0:15 - 1:20', 'VSCode、外掛、開教材、跑 web-lab', '第一階段過關點'],
    ['1:20 - 1:30', '休息', '排錯緩衝'],
    ['1:30 - 2:50', 'Git & GitHub,完成第一次 push', '第二階段過關點'],
    ['2:50 - 3:00', '休息', '排錯緩衝'],
    ['3:00 - 3:50', 'Claude Code / Codex 基本操作', '第三階段過關點'],
    ['3:50 - 4:00', '收束與下堂課銜接', '下一堂才讓 AI 改專案'],
  ];
  return <div style={fill}><div style={pad}><Eyebrow>今天路線 · 4 小時</Eyebrow><Title size={48}>照時間軸建立第一條 AI coding 流程</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 26, maxWidth: 1540 }}>{items.map(([t, b, c]) => <div key={t} style={{ display: 'grid', gridTemplateColumns: '220px 1fr 380px', gap: 20, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 12, padding: '12px 20px' }}><span style={{ fontFamily: mono, fontSize: 22, color: C.orange, fontWeight: 800 }}>{t}</span><span style={{ fontSize: 25, fontWeight: 800 }}>{b}</span><span style={{ fontSize: 21, color: C.muted }}>{c}</span></div>)}</div></div><Foot label="U11 · 課1 · 路線" /></div>;
};
const Rules: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>上課三個約定</Eyebrow><Title>照流程,每段都有過關點</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 44, maxWidth: 1450 }}><SuccessRow>只看老師指定的畫面,不要自行亂裝或亂改。</SuccessRow><SuccessRow>每段最後用檢查點對齊,過了再往下。</SuccessRow><SuccessRow>任何錯誤訊息先停下來,整段保留,不要急著關掉。</SuccessRow></div></div><Foot label="U11 · 課1 · 規則" /></div>
);
const Guardrails: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>全堂防呆機制</Eyebrow><Title size={52}>每次動手,都照這四步</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginTop: 38 }}>
      {[
        ['1', '先看位置', 'Terminal 提示字要在 web-lab;Git 要在正確 repo。'],
        ['2', '先看狀態', 'Git 動作前先 status;AI 動手前先 plan。'],
        ['3', '小步執行', '一次只改一件事,不要同時改十個需求。'],
        ['4', '立刻驗證', '看 localhost、git diff、必要時 npm run build。'],
      ].map(([n, t, d]) => <div key={n} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '24px 22px' }}><div style={{ fontFamily: mono, fontSize: 27, color: C.orange, fontWeight: 800 }}>{n}</div><div style={{ fontSize: 30, fontWeight: 800, marginTop: 10 }}>{t}</div><div style={{ fontSize: 22, color: C.muted, lineHeight: 1.45, marginTop: 8 }}>{d}</div></div>)}
    </div>
    <div style={{ marginTop: 26 }}><Harvest>防呆不是多做事,是每一步都留一個「我有沒有站錯地方」的檢查點。</Harvest></div>
  </div><Foot label="U11 · 課1 · 防呆" /></div>
);
const Tools: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>今天會碰到的工具</Eyebrow><Title size={52}>這不是工具大全,是重要角色</Title><div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 16, marginTop: 38 }}><ToolCard img={vscodeDevShot} name="VSCode" role="看專案與裝外掛" /><ToolCard img={gitShot} name="Git" role="本機版本紀錄" /><ToolCard img={githubShot} name="GitHub" role="雲端與協作" /><ToolCard img={nodeShot} name="Node.js" role="跑網頁專案" /><ToolCard img={npmShot} name="npm" role="裝套件與跑 scripts" /></div></div><Foot label="U11 · 課1 · 工具" /></div>
);
const Precheck: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 720px', gap: 46, alignItems: 'center' }}><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}><Eyebrow>課前檢查</Eyebrow><Title size={52}>看到版本號,就能上課</Title><Lead>今天主線只確認 Node、npm、Git。Python 之後資料課才會重點使用。</Lead></div><Term title="TERMINAL" rows={[['cmd', 'node -v'], ['ok', 'v22.x.x'], ['cmd', 'npm -v'], ['ok', '10.x.x'], ['cmd', 'git --version'], ['ok', 'git version 2.x.x']]} /></div><Foot label="U11 · 課1 · 環境" /></div>
);

const Sec1: Page = () => <Section no="1" title="VSCode:你的專案工作台" time="0:15 - 1:20" sub="先開 RAR 解壓後的教材根目錄,再用 cd 走進 web-lab,用 npm 把 BOBA TIDE 跑起來。" />;
const VSIntro: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 1 · VSCode</Eyebrow><Title size={54}>先不寫程式,先認工作台</Title><div className="ts-rise" style={{ marginTop: 32 }}><VSCodeMap /></div></div><Foot label="U11 · 課1 · VSCode" /></div>;
const RegExplorer: Page = () => <RegionCard n="1" name="檔案總管 Explorer" what="左邊列出專案所有檔案。你要先知道專案裡有什麼,才知道要把哪裡交給 AI。" tip="找檔案、點開檔案,都從 Explorer 開始。" />;
const RegEditor: Page = () => <RegionCard n="3" name="編輯區 Editor" what="點開檔案後,中間就是內容。今天主要看 README、package.json、src/data.js。" tip="中間那一大片,就是看檔案內容的地方。" />;
const RegTerminal: Page = () => <RegionCard n="4" name="終端機 Terminal" what="下方黑色區域。它不是駭客畫面,只是用打字操控專案的遙控器。" tip="跑 npm、git、AI CLI,都會從 Terminal 開始。" />;
const RegOthers: Page = () => <RegionCard n="2 / 5 / 6" name="Search / Source Control / Extensions" what="Search 找字在哪;Source Control 看你改了什麼;Extensions 裝新功能。" tip="今天先認位置:找東西、看改動、裝 AI 助手。" />;
const ExtWhat: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 1 · Extensions</Eyebrow><Title size={50}>擴充功能:幫 VSCode 裝外掛</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}><Analogy>VSCode 本身是空工作台。擴充功能就像手機 App:要 AI 助手、語言包、本機預覽,就去 Extensions 裝。</Analogy><Atom n={1} act="點左邊像四個方塊的 Extensions 圖示。" see="看到外掛搜尋框。" /><Atom n={2} act={<span>搜尋 <Key>Claude Code</Key> 或 <Key>Codex</Key>,找到後按 Install。</span>} see="多出新的 AI 面板或指令。" /></div></div><Foot label="U11 · 課1 · VSCode" /></div>
);
const ExtRecommend: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 1 · 外掛清單</Eyebrow><Title size={48}>今天必裝只要這四個</Title><div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16, marginTop: 32, maxWidth: 1540 }}>{[['Claude Code', '先建立 coding agent 操作模型'], ['Codex', '用同一套控制邏輯對照'], ['中文(繁體)語言包', '把 VSCode 選單變中文'], ['Live Server', '之後預覽靜態頁面會用到']].map(([k, v]) => <div key={k} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '20px 26px' }}><div style={{ fontSize: 29, fontWeight: 800 }}>{k}</div><div style={{ fontSize: 23, color: C.muted, marginTop: 6 }}>{v}</div></div>)}</div><Harvest>今天不裝用不到的工具,先把 AI 助手與基本開發環境跑通。</Harvest></div><Foot label="U11 · 課1 · VSCode" /></div>
);
const OpenProject: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 1 · 動手</Eyebrow><Title size={52}>打開 RAR 解壓後的教材根目錄</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 28, maxWidth: 1500 }}><Atom n={1} act={<span>File → Open Folder,選 <Key>ai-project-foundation-kit</Key>。</span>} see="Explorer 裡看得到 web-lab、data-lab、prompts。" /><Atom n={2} act={<span>點開 <Key>web-lab</Key> 裡的 README 與 package.json。</span>} see="看得到專案說明與 scripts。" /><Atom n={3} act="打開 Terminal → New Terminal。" see="下方出現可輸入指令的黑色區域。" /></div></div><Foot label="U11 · 課1 · VSCode" /></div>;
const CodeTouchMap: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 1 · 學生真的會動到哪裡</Eyebrow><Title size={48}>今天不是整包都改,先改這幾個點</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 30, maxWidth: 1540 }}>
      {[
        ['src/data.js', '主要修改', '首頁標題、標語、四堂課卡片、流程文字。新手第一堂主要只動這裡。'],
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
const RunProject: Page = () => <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 720px', gap: 46, alignItems: 'center' }}><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}><Eyebrow>段 1 · 動手</Eyebrow><Title size={48}>把網站跑起來</Title><Atom n={1} act={<span>先打 <Key>cd web-lab</Key>。</span>} see="提示字尾是 web-lab。" /><Atom n={2} act={<span>第一次打 <Key>npm install</Key>。</span>} see="跑完回到提示字。" /><Atom n={3} act={<span>打 <Key>npm run dev</Key>。</span>} see="出現 localhost 網址。" /><Harvest>RAR 是取得教材;這三個指令讓教材裡的 web-lab 在本機跑起來。</Harvest></div><Term title="TERMINAL" rows={[['dim', 'C:\\ai-project-foundation-kit>'], ['cmd', 'cd web-lab'], ['cmd', 'npm install'], ['ok', 'added packages'], ['cmd', 'npm run dev'], ['ok', 'Local: http://localhost:5180/']]} /></div><Foot label="U11 · 課1 · VSCode" /></div>;
const Localhost: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 1 · localhost</Eyebrow><Title size={52}>localhost:網站先跑在你自己的電腦</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 34 }}><Analogy>localhost 就像「自己家裡試菜」。網站還沒公開上網,只在你這台電腦裡跑。冒號後面的 5180 是門牌號碼。</Analogy><Harvest>看到 localhost,代表你已經把一個網頁專案真的跑起來了。</Harvest></div></div><Foot label="U11 · 課1 · VSCode" /></div>;
const WebReal: Page = () => <RealShot img={weblabShot} url="localhost:5180" eyebrow="段 1 · 成功畫面" title="看到 BOBA TIDE,這段就成功" caption="這不是截圖假裝,而是本機 web-lab 跑起來後的畫面。之後 Git、Claude Code、Codex 都以它當練習場。" foot="U11 · 課1 · VSCode" maxH={530} pos="center" />;
const VsPit: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 1 · 卡住了?</Eyebrow><Title size={50}>VSCode / npm 常見狀況</Title><div className="ts-rise" style={{ marginTop: 28, maxWidth: 1500 }}><Pitfall items={[['找不到終端機:', '上方選單 Terminal → New Terminal。'], ['npm 說找不到 package.json:', '你還沒 cd 到 web-lab。'], ['npm run dev 停住:', '正常,代表網站正在跑,不要關。']]} /></div><div style={{ marginTop: 18 }}><Checkpoint items={['VSCode 開啟教材根目錄', '會開 Terminal', '成功執行 npm install', '成功執行 npm run dev', 'localhost 看得到 BOBA TIDE']} /></div></div><Foot label="U11 · 課1 · VSCode" /></div>;
const Break1: Page = () => <BreakSlide note="站起來走一走。回來我們改一個字,用 Git 和 GitHub 把成果存起來。" />;

const Sec2: Page = () => <Section no="2" title="Git & GitHub:把自己的版本推上去" time="1:30 - 2:50" sub="RAR 是取得教材,Git 是保存開發紀錄。這段只驗收一件事:成功 push 到自己的 GitHub repo。" />;
const EditDo: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 2 · 先製造一個改動</Eyebrow><Title size={50}>改 data.js 裡的首頁標題</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 30 }}><Atom n={1} act={<span>打開 <Key>web-lab/src/data.js</Key>。</span>} see="看到 name: 'BOBA TIDE'。" /><Atom n={2} act="把引號裡的標題加上分店名稱。" see="瀏覽器畫面跟著變。" /><Atom n={3} act="按 Ctrl+S 存檔。" see="VSCode 分頁上的小點消失。" /><Harvest>要先有改動,Git 才有東西可以看。</Harvest></div></div><Foot label="U11 · 課1 · Git" /></div>;
const GitHead: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 2 · Git</Eyebrow><Title size={52}>RAR 拿教材,Git 留紀錄</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 34 }}><Analogy>RAR 像老師發下來的一包材料。Git 像你的工作日誌,記錄你解壓後怎麼改、什麼時候存成一版。</Analogy><Harvest>AI 協作時,Git 是你看清楚 AI 動了什麼的工具。</Harvest></div></div><Foot label="U11 · 課1 · Git" /></div>;
const GitStatus: Page = () => <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 720px', gap: 46, alignItems: 'center' }}><div className="ts-rise"><Eyebrow>段 2 · git init / status</Eyebrow><Title size={50}>先讓 web-lab 開始被 Git 管</Title><Lead>站在 web-lab 裡初始化。status 只看狀態,不會改檔案。</Lead></div><Term title="TERMINAL" rows={[['cmd', 'git init'], ['ok', 'Initialized empty Git repository'], ['cmd', 'git status'], ['out', 'Untracked files:'], ['dim', '  index.html / package.json / src/...']]} /></div><Foot label="U11 · 課1 · Git" /></div>;
const GitDiff: Page = () => <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 720px', gap: 46, alignItems: 'center' }}><div className="ts-rise"><Eyebrow>段 2 · git diff</Eyebrow><Title size={50}>再看到底改了哪幾行</Title><Lead>紅色是原本,綠色是改完。之後 AI 幫你改完,第一件事也是看 diff。</Lead></div><Term title="git diff · src/data.js" rows={[['dim', 'export const brand = {'], ['err', "-  name: 'BOBA TIDE',"], ['ok', "+  name: 'BOBA TIDE｜校園店',"], ['dim', '};']]} /></div><Foot label="U11 · 課1 · Git" /></div>;
const GitCommit: Page = () => <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 720px', gap: 46, alignItems: 'center' }}><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}><Eyebrow>段 2 · commit</Eyebrow><Title size={50}>把解壓後的專案存成第一版</Title><Atom n={1} act={<span><Key>git add .</Key> 把檔案放進暫存區。</span>} see="檔案從 untracked 變成 staged。" /><Atom n={2} act={<span><Key>git commit -m "init project"</Key></span>} see="出現第一筆提交紀錄。" /></div><Term title="TERMINAL" rows={[['cmd', 'git add .'], ['cmd', 'git commit -m "init project"'], ['ok', '[main a1b2c3d] init project'], ['dim', 'files changed']]} /></div><Foot label="U11 · 課1 · Git" /></div>;
const GitHubWhat: Page = () => <RealShot img={githubShot} url="github.com" eyebrow="段 2 · GitHub" title="GitHub:把 Git 存檔放到雲端" caption="Git 是本機存檔;GitHub 是雲端倉庫。多人合作、備份、Pull Request,都從這裡開始。" foot="U11 · 課1 · GitHub" maxH={520} pos="top" />;
const CloneFromTeacher: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 760px', gap: 44, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Eyebrow>段 2 · GitHub repo</Eyebrow><Title size={46}>先在 GitHub 建自己的空 repo</Title>
      <Lead>repo 可以叫 <B>web-lab</B> 或 <B>ai-course-web-lab</B>。不要勾 README,因為本機已經有完整教材。</Lead>
      <Harvest>複製自己的 GitHub repo URL,等一下接到本機 web-lab。</Harvest>
    </div>
    <Term title="GitHub · 建立 repo" size={20} rows={[
      ['out', 'Repository name: web-lab'],
      ['out', 'Public 或 Private 都可以'],
      ['out', '不要勾 Add a README file'],
      ['ok', '複製 https://github.com/你的帳號/web-lab.git'],
    ]} />
  </div><Foot label="U11 · 課1 · GitHub" /></div>
);
const OwnRepoFlow: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 760px', gap: 44, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Eyebrow>段 2 · 接到自己的 repo</Eyebrow><Title size={46}>把本機 web-lab 接到 GitHub</Title>
      <Lead>這一步只做一次。之後這個 web-lab 的版本紀錄,就會推到你自己的 repo。</Lead>
      <Harvest>origin 就是你的雲端目的地。</Harvest>
    </div>
    <Term title="TERMINAL · 接上 GitHub" size={19} rows={[
      ['cmd', 'git remote add origin <自己的 GitHub repo URL>'],
      ['cmd', 'git branch -M main'],
      ['cmd', 'git push -u origin main'],
      ['ok', 'branch main set up to track origin/main'],
    ]} />
  </div><Foot label="U11 · 課1 · GitHub" /></div>
);
const RemoteRoles: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 2 · 狀態名詞</Eyebrow><Title size={48}>status 會看到這幾種狀態</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20, marginTop: 34, maxWidth: 1540 }}>
      <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '22px 28px' }}><div style={{ fontFamily: mono, fontSize: 28, color: RED, fontWeight: 800 }}>untracked</div><div style={{ fontSize: 25, color: C.muted, lineHeight: 1.45, marginTop: 8 }}>Git 還沒開始追蹤的新檔。</div></div>
      <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '22px 28px' }}><div style={{ fontFamily: mono, fontSize: 28, color: AMBER, fontWeight: 800 }}>modified</div><div style={{ fontSize: 25, color: C.muted, lineHeight: 1.45, marginTop: 8 }}>已追蹤檔案被修改。</div></div>
      <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '22px 28px' }}><div style={{ fontFamily: mono, fontSize: 28, color: BLUE, fontWeight: 800 }}>staged</div><div style={{ fontSize: 25, color: C.muted, lineHeight: 1.45, marginTop: 8 }}>已經 add,準備 commit。</div></div>
      <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '22px 28px' }}><div style={{ fontFamily: mono, fontSize: 28, color: OK, fontWeight: 800 }}>commit / push</div><div style={{ fontSize: 25, color: C.muted, lineHeight: 1.45, marginTop: 8 }}>commit 存本機;push 送 GitHub。</div></div>
    </div>
    <div style={{ marginTop: 28 }}><Harvest>這段的驗收只有一個:自己的 web-lab 成功 push 到自己的 GitHub repo。</Harvest></div>
  </div><Foot label="U11 · 課1 · GitHub" /></div>
);
const PushGuard: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 760px', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Eyebrow>段 2 · push 前防呆</Eyebrow><Title size={48}>先確認你要推到哪裡</Title>
      <Lead><Key>origin</Key> 必須是自己的 repo。看不懂網址就先停,不要猜。</Lead>
      <Pitfall items={[
        ['remote add 打錯:', '用 git remote -v 看目前 origin 是哪個 URL。'],
        ['Invalid username or token:', 'GitHub 不接受密碼。改用 VSCode/GitHub 登入、GitHub CLI,或 Personal Access Token。'],
        ['不知道現在會推去哪:', '不要猜,先 git remote -v。'],
      ]} />
    </div>
    <Term title="push 前檢查" rows={[
      ['cmd', 'git remote -v'],
      ['ok', 'origin    https://github.com/你的帳號/你的repo.git'],
      ['cmd', 'git status'],
      ['out', 'nothing to commit, working tree clean'],
    ]} />
  </div><Foot label="U11 · 課1 · GitHub 防呆" /></div>
);
const GitPush: Page = () => <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 720px', gap: 46, alignItems: 'center' }}><div className="ts-rise"><Eyebrow>段 2 · push</Eyebrow><Title size={50}>push:把第一版送上 GitHub</Title><Lead>commit 只存在你電腦。push 才會把那筆版本送到雲端倉庫。</Lead><Harvest>第二階段到這裡就驗收:自己的 GitHub repo 看得到 web-lab。</Harvest></div><Term title="TERMINAL" rows={[['cmd', 'git push -u origin main'], ['ok', 'To github.com:你的帳號/web-lab.git'], ['ok', 'main -> main']]} /></div><Foot label="U11 · 課1 · GitHub" /></div>;
const GitPull: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 2 · 概念先知道</Eyebrow><Title size={50}>這些 Git 名詞今天先不當主要實作</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 28 }}>{[['fetch', '只看看雲端有什麼,先不合併'], ['pull', '把雲端更新拉回來'], ['branch', '開安全分支,不要直接弄壞 main'], ['tag', '幫重要版本插旗'], ['git flow', '團隊開分支、PR、review、merge 的工作法']].map(([a, b]) => <div key={a} style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: 20, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '14px 24px', maxWidth: 1480 }}><span style={{ fontFamily: mono, fontSize: 24, color: C.orange, fontWeight: 800 }}>{a}</span><span style={{ fontSize: 25 }}>{b}</span></div>)}<Harvest>課 1 不要求完整學會 Git flow。今天先把第一次 push 做完。</Harvest></div></div><Foot label="U11 · 課1 · Git 概念" /></div>;
const BranchWhy: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 2 · branch</Eyebrow><Title size={50}>branch:開一個平行宇宙來改</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 30 }}><Analogy>分支像另開一個存檔格。在新分支上怎麼改,都不會動到 main 主線。</Analogy><Think q="AI 會改很多檔,我怎麼降低風險?" a={<span>先開分支給 AI 改。滿意再合併,不滿意就丟掉分支。</span>} /></div></div><Foot label="U11 · 課1 · Git" /></div>;
const BranchPage: Page = () => <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 780px', gap: 42, alignItems: 'center' }}><div className="ts-rise"><Eyebrow>段 2 · 分支圖</Eyebrow><Title size={48}>main 保持乾淨,feature 放新改動</Title><Term title="TERMINAL" rows={[['cmd', 'git checkout -b feature/ai-edit'], ['ok', 'Switched to a new branch'], ['cmd', 'git checkout main'], ['ok', 'Switched to branch main']]} /></div><BranchDiagram /></div><Foot label="U11 · 課1 · Git" /></div>;
const TagPage: Page = () => <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 700px', gap: 46, alignItems: 'center' }}><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}><Eyebrow>段 2 · tag</Eyebrow><Title size={48}>tag:幫重要版本插旗子</Title><Analogy>tag 像在時間軸上插旗:「這一版是 v1.0 正式版」。之後找版本,找旗子最快。</Analogy></div><Term title="TERMINAL" rows={[['cmd', 'git tag v1.0'], ['cmd', 'git tag'], ['out', 'v1.0']]} /></div><Foot label="U11 · 課1 · Git" /></div>;
const GitFlowPage: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 2 · git flow</Eyebrow><Title size={48}>團隊大概這樣協作</Title><div className="ts-rise" style={{ marginTop: 30 }}><GitFlowDiagram /></div><div style={{ marginTop: 28 }}><Harvest>先從 main 開 feature,在 feature commit,開 PR 給人看,通過後 merge 回 main。</Harvest></div></div><Foot label="U11 · 課1 · Git" /></div>;
const GitPit: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 2 · 卡住了?</Eyebrow><Title size={50}>Git 常見狀況</Title><div className="ts-rise" style={{ marginTop: 28, maxWidth: 1500 }}><Pitfall items={[['not a git repository:', '目前資料夾還不是 Git 專案,或你站錯位置。'], ['commit 要名字 email:', '第一次會要求設定身份,照老師給的指令設定。'], ['push 要登入:', '照 VSCode 或 GitHub 的登入提示完成授權。']]} /></div><div style={{ marginTop: 18 }}><Checkpoint items={['GitHub repo 建好', 'git init 成功', 'git status 看得懂基本狀態', '完成第一次 commit', '成功 push 到自己的 GitHub repo']} /></div></div><Foot label="U11 · 課1 · Git" /></div>;
const Break2: Page = () => <BreakSlide note="回來看 Claude Code / Codex:同一套 AI 控制方式,兩個工具對照。" />;

const Sec3: Page = () => <Section no="3" title="Claude Code / Codex:控制 AI 進專案工作" time="3:00 - 3:50" sub="先用 Claude Code 建立操作模型,再用 Codex 對照 slash command、shift+tab、Plan 與核准權限。" />;
const AIGuard: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 3 · AI 動手前防呆</Eyebrow><Title size={48}>先把 AI 關在安全範圍內</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 28 }}>
      <Checkpoint items={['先開 feature 分支或確認剛 commit 過', '先用 Plan / Ask before edits,不要一開始 Full Access', '提示詞寫清楚:只改哪個檔案、不要改哪裡', '改完必看 git diff,再跑 localhost 或 npm run build']} />
      <Term title="給 AI 的安全提示範本" size={22} rows={[
        ['cmd', '請先讀 src/data.js,只提出計畫,不要改檔。'],
        ['cmd', '如果要修改,只能改 src/data.js 的首頁標題與標語。'],
        ['cmd', '完成後列出改了哪些檔案,我會用 git diff 檢查。'],
      ]} />
    </div>
  </div><Foot label="U11 · 課1 · AI 防呆" /></div>
);
const CCWhat: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 3 · Claude Code</Eyebrow><Title size={52}>先用 Claude Code 建立操作模型</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 30 }}><Analogy>Claude Code 看得到你的檔案、能改檔、能跑指令。它不是聊天網頁,而是住在 VSCode / Terminal 裡的 coding agent。</Analogy><Think q="那我直接叫它全改就好?" a={<span>先別。你要用 slash command 看狀態、用模式管權限、用 Git 看它做了什麼。</span>} /></div></div><Foot label="U11 · 課1 · Claude Code" /></div>;
const CCTerm: Page = () => <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 720px', gap: 46, alignItems: 'center' }}><div className="ts-rise"><Eyebrow>段 3 · 登入與 hello</Eyebrow><Title size={46}>第一次先登入,再做 hello 測試</Title><Lead>登入授權是正常流程。今天只確認它能回應,不要求它改專案。</Lead></div><Term title="Claude Code" size={21} rows={[['cmd', 'hello'], ['ok', '你好!我可以協助讀專案、規劃、改檔與執行指令。'], ['cmd', '請先說明你看得到哪些專案檔,不要修改。'], ['dim', '等待回覆...']]} /></div><Foot label="U11 · 課1 · Claude Code" /></div>;
const CCSlash: Page = () => <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 900px', gap: 40, alignItems: 'center' }}><div className="ts-rise"><Eyebrow>段 3 · slash commands</Eyebrow><Title size={48}>打一個 /,叫出 AI 控制台</Title><Lead>slash command 是控制 AI 狀態、模型、用量、目標、上下文與權限的工具,不是要背的指令表。</Lead></div><CmdMenu title="Claude Code 常用指令" items={[['/model', '切換模型'], ['/effort', '調整思考深度'], ['/usage', '查看用量'], ['/compact', '壓縮上下文'], ['/goal', '設定任務目標'], ['/btw', '插入問題']]} /></div><Foot label="U11 · 課1 · Claude Code" /></div>;
const CCCompact: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 3 · /compact</Eyebrow><Title size={50}>Context 快滿時,先壓縮</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 30 }}><Analogy>AI 的上下文像桌面。聊太久,桌面堆滿文件,它會變慢或忘東忘西。<Key>/compact</Key> 就是把前面整理成摘要,騰出空間。</Analogy><SuccessRow>看到 context 快用完、或 AI 開始答非所問,先 /compact。</SuccessRow></div></div><Foot label="U11 · 課1 · Claude Code" /></div>;
const CCMenuPage: Page = () => <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 820px', gap: 42, alignItems: 'center' }}><div className="ts-rise"><Eyebrow>段 3 · 模型差異</Eyebrow><Title size={48}>模型不用背,先知道快、穩、強</Title><Lead>Haiku 偏快省、Sonnet 日常平衡、Opus 較強但慢也更花費。實際名稱以當天工具 UI 為準。</Lead></div><div style={{ background: '#252526', borderRadius: 12, border: '1px solid #1b1b1b', overflow: 'hidden' }}><div style={{ padding: '13px 20px', background: '#1e1e1e', color: '#9aa0a6', fontFamily: mono, fontSize: 18 }}>Claude Code · Model / Effort</div>{[['Haiku', '快、省,簡單問題'], ['Sonnet', '平衡,日常主力'], ['Opus', '強,較慢且較花'], ['Effort', 'low / medium / high']].map(([l, v]) => <div key={l} style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 22px', borderTop: '1px solid #333' }}><span style={{ color: '#e8eaed', fontSize: 25, fontWeight: 700 }}>{l}</span><span style={{ color: C.orange, fontFamily: mono, fontSize: 21 }}>{v}</span></div>)}</div></div><Foot label="U11 · 課1 · Claude Code" /></div>;
const CCModes: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 3 · Modes</Eyebrow><Title size={48}>它能不能自己動手,你決定</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 24 }}><ModeSwitch modes={[['Ask before edits', '每次改檔前先問你,新手推薦'], ['Edit automatically', '直接改檔,速度快但要盯著 diff'], ['Plan Mode', '只出計畫,先不動手']]} activeIdx={0} /><Harvest>新手先用 Ask before edits 或 Plan Mode,不要一開始就全放權。</Harvest></div></div><Foot label="U11 · 課1 · Claude Code" /></div>;
const CCTakeaway: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 3 · Claude Code 小結</Eyebrow><Title size={50}>叫得動,更要管得住</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 30 }}><Analogy>把 Claude Code 當能幹但需要交代清楚的新同事:用 /goal 定方向、用 Modes 管權限、用 Git diff 查結果。</Analogy><Checkpoint items={['登入後能做 hello 測試', '知道 /model /effort /usage /compact /goal /btw 的用途', '知道 shift+tab 可以切模式', '知道改檔前要用 Git 看狀態']} /></div></div><Foot label="U11 · 課1 · Claude Code" /></div>;
const Break3: Page = () => <BreakSlide note="最後一段認識 Codex:同類工具,但權限與推理設定名稱不同。" />;

const Sec4: Page = () => <Section no="3" title="Codex:用同一套模型對照" time="3:00 - 3:50" sub="不用重教一輪。看 slash command、權限、推理等級與規劃模式怎麼對照 Claude Code。" />;
const CodexWhat: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 3 · Codex 對照</Eyebrow><Title size={52}>同類工具,不同牌子</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 26 }}><Analogy>Codex 和 Claude Code 都是 coding agent:能讀專案、改檔案、跑指令。差別在模型、介面名稱、權限設定。</Analogy><Harvest>先學會控制流程,換工具才不會迷路。</Harvest></div></div><Foot label="U11 · 課1 · Codex" /></div>;
const CodexSlash: Page = () => <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 900px', gap: 40, alignItems: 'center' }}><div className="ts-rise"><Eyebrow>段 3 · Codex slash commands</Eyebrow><Title size={48}>一樣打 /,先看狀態再定目標</Title><Lead><Key>/status</Key> 看設定、權限、用量;<Key>/goal</Key> 設定任務目標。大任務先定方向。</Lead></div><CmdMenu title="Codex 常用指令" items={[['/status', '看設定、權限、用量'], ['/goal', '設定或清除任務目標'], ['/model', '換模型與推理等級'], ['/approve', '核准被擋下的動作'], ['/compact', '壓縮上下文'], ['/plan', '進入規劃模式']]} /></div><Foot label="U11 · 課1 · Codex" /></div>;
const CodexApproval: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 3 · 核准權限</Eyebrow><Title size={48}>Plan / Chat / Agent / Full Access 風險不同</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 22 }}><ApprovalLadder /><Harvest>放權越多越快,也越要小心。新手從 Plan、Chat 或 Agent 開始,Full Access 只給很明確的任務。</Harvest></div></div><Foot label="U11 · 課1 · Codex" /></div>;
const CodexReasoning: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 3 · 推理等級</Eyebrow><Title size={50}>低 / 中 / 高 / 超高:想多深</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 30 }}><Lead>推理等級像思考時間。越高通常越慢、越花額度;日常任務用中等,難題再往上。</Lead><ReasoningDial /><Harvest>超高不是每個模型都有,需要時再開。</Harvest></div></div><Foot label="U11 · 課1 · Codex" /></div>;
const CodexPlan: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 3 · 規劃模式</Eyebrow><Title size={50}>Shift + Tab:先看計畫,再動手</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 28 }}><Analogy>Plan 就是先讓它寫施工圖。你看懂它要拆哪裡、改哪裡,再讓它真的動手。</Analogy><div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><Key>Shift</Key><span style={{ fontSize: 24, color: C.muted }}>+</span><Key>Tab</Key><span style={{ fontSize: 26, color: C.muted }}>切換模式</span></div><Harvest>和 Claude Code 的 Plan Mode 是同一個精神。</Harvest></div></div><Foot label="U11 · 課1 · Codex" /></div>;
const CodexPit: Page = () => <div style={fill}><div style={pad}><Eyebrow>段 3 · 過關點</Eyebrow><Title size={50}>Claude Code / Codex 不求背指令,求會控制</Title><div className="ts-rise" style={{ marginTop: 28, maxWidth: 1520 }}><Pitfall items={[['它一直要核准:', '這代表權限保守。先看它要做什麼,信任再提高權限。'], ['不確定目前設定:', '打 /status,看模型、權限、用量。'], ['答案太快太粗:', '提高推理等級,或先進規劃模式。']]} /></div><div style={{ marginTop: 18 }}><Checkpoint items={['Claude Code / Codex 至少一個能登入', '知道 slash command 的用途', '知道 shift+tab 可以切模式', '知道 Plan / Chat / Agent / Full Access 不同權限風險']} /></div></div><Foot label="U11 · 課1 · Codex" /></div>;

const SecEnd: Page = () => <Section no="收束" title="你已經建立第一條 AI coding 流程" time="3:50 - 4:00" sub="網頁版看成果,VSCode 跑專案,GitHub 保存版本,Claude Code / Codex 受你控制。" />;
const Recap: Page = () => <div style={fill}><div style={pad}><Eyebrow>今天結束時,你要說得出來</Eyebrow><Title size={48}>這不是工具清單,是一條工作流</Title><div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 30, maxWidth: 1540 }}>{[['01', '我為什麼不能只靠 Claude 網頁版'], ['02', '我怎麼用 VSCode 打開教材專案'], ['03', '我怎麼讓 web-lab 跑起來'], ['04', '我怎麼把專案推到自己的 GitHub'], ['05', '我怎麼用 slash command 控制 AI'], ['06', '我知道下一堂才正式讓 AI 修改專案']].map(([a, b]) => <div key={a} style={{ display: 'flex', alignItems: 'center', gap: 18, background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '18px 22px' }}><span style={{ fontFamily: mono, fontSize: 26, color: C.orange, fontWeight: 800, minWidth: 44 }}>{a}</span><span style={{ fontSize: 26, color: C.ink, fontWeight: 700 }}>{b}</span></div>)}</div></div><Foot label="U11 · 課1 · 收束" /></div>;
const Punchline: Page = () => <div style={{ ...fill, background: C.ink, color: '#fff' }}><div style={pad}><Eyebrow>今天最重要的一句</Eyebrow><div style={{ fontSize: 74, fontWeight: 900, lineHeight: 1.2, marginTop: 28, maxWidth: 1560, letterSpacing: '-0.02em' }}>工具不是拿來炫技,<br />是你<span style={{ color: C.orange }}>指揮 AI</span> 的把手。</div><div style={{ fontSize: 31, color: 'rgba(255,255,255,0.7)', marginTop: 34, maxWidth: 1420, lineHeight: 1.55 }}>會打開、會存檔、會調 AI、會管權限,AI 才是幫手,不是亂源。</div></div><div style={{ position: 'absolute', left: 110, bottom: 44, fontFamily: mono, fontSize: 19, color: 'rgba(255,255,255,0.5)' }}>U11 · 課1 · 記住這句</div></div>;
const Homework: Page = () => <div style={fill}><div style={pad}><Eyebrow>回家作業</Eyebrow><Title size={50}>把今天流程重跑一次</Title><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 38, maxWidth: 1480 }}><SuccessRow>VSCode:開教材根目錄,cd web-lab,跑 npm run dev。</SuccessRow><SuccessRow>GitHub:確認自己的 repo 看得到第一次 push。</SuccessRow><SuccessRow>Claude Code 或 Codex:用 Plan / Chat 問它「如果我要改首頁標語,會改哪裡?」先不要讓它改。</SuccessRow></div></div><Foot label="U11 · 課1 · 作業" /></div>;
const Next: Page = () => <div style={fill}><div style={pad}><Eyebrow>下一堂預告</Eyebrow><Title size={56}>工具認得了,<br />下一堂正式讓 AI 幫你改專案</Title><Lead>下一堂會把今天的 Git、Plan、權限觀念接起來,練「先讀、先計畫、加護欄、再修改」。今天先不要追求 AI 完成功能。</Lead></div><Foot label="U11 · 課1 · 下一堂" /></div>;

export const meta: SlideMeta = { title: 'U11 課1:四大工具第一堂課', createdAt: '2026-06-30T04:11:13.208Z' };

export const notes: (string | undefined)[] = [
  '開場先用 Claude 網頁版做一個小網頁,再問學生:既然網頁版可以做,為什麼還要進 VSCode?',
  '主線不是四個工具介紹,而是第一次建立 AI coding 工作流程。',
  '時間軸照 0:00 到 4:00 走,每段都要有過關點。',
  '第一階段重點:VSCode 開教材根目錄,Terminal 進 web-lab,跑 npm install 和 npm run dev。',
  '外掛只帶四個:Claude Code、Codex、中文繁體語言包、Live Server。',
  '第二階段重點:RAR 是取得教材,Git 是保存開發紀錄。',
  'Git 主流程是 web-lab 裡 git init、status、add、commit、remote add origin、branch main、push。',
  'fetch、pull、branch、tag、git flow 先知道概念,不是本堂主要實作驗收。',
  '第三階段先用 Claude Code 建立操作模型:登入、hello、slash command、shift+tab、模式。',
  'Codex 不重教一輪,只對照 /status、/goal、/model、/approve、/compact、/plan 和權限核准。',
  '收束回扣:工具不是拿來炫技,是你指揮 AI 的把手。下一堂才正式讓 AI 修改專案。',
];

export default [
  Cover, ClaudeWebDemo, MainlineDoD, Why, Outcome, Roadmap, Rules, Guardrails, Tools, Precheck,
  Sec1, VSIntro, RegExplorer, RegEditor, RegTerminal, RegOthers, ExtWhat, ExtRecommend, OpenProject, CodeTouchMap, CdPage, NpmWhat, RunProject, Localhost, WebReal, VsPit, Break1,
  Sec2, EditDo, GitHead, GitStatus, GitDiff, GitCommit, GitHubWhat, CloneFromTeacher, OwnRepoFlow, RemoteRoles, PushGuard, GitPush, GitPull, GitPit, Break2,
  Sec3, AIGuard, CCWhat, CCTerm, CCSlash, CCCompact, CCMenuPage, CCModes, CCTakeaway,
  CodexWhat, CodexSlash, CodexApproval, CodexReasoning, CodexPlan, CodexPit,
  SecEnd, Recap, Punchline, Homework, Next,
] satisfies Page[];
