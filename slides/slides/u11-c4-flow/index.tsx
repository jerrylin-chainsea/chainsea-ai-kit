import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';
import skillsShot from './assets/claude-skills-docs.png';
import mcpShot from './assets/mcp-intro.png';
import mcpChromeShot from './assets/mcp-chrome-devtools.png';
import weblabHome from './assets/weblab-home.png';

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
const OK = '#0e7a52'; const RED = '#c0392b'; const BLUE = '#2f5fb3';
const mono = '"JetBrains Mono", "SF Mono", ui-monospace, monospace';

const css = `@keyframes ts-up{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.ts-rise>*{animation:ts-up .55s cubic-bezier(.16,1,.3,1) both}
.ts-rise>*:nth-child(2){animation-delay:.05s}.ts-rise>*:nth-child(3){animation-delay:.10s}
.ts-rise>*:nth-child(4){animation-delay:.15s}.ts-rise>*:nth-child(5){animation-delay:.20s}.ts-rise>*:nth-child(6){animation-delay:.25s}
@media (prefers-reduced-motion:reduce){.ts-rise>*{animation:none!important}}`;
if (typeof document !== 'undefined' && !document.getElementById('ts-u11c4')) {
  const el = document.createElement('style'); el.id = 'ts-u11c4'; el.textContent = css; document.head.appendChild(el);
}
const fill = { width: '100%', height: '100%', background: C.bg, color: C.ink, fontFamily: 'var(--osd-font-body)', position: 'relative' as const, overflow: 'hidden', display: 'flex' as const, flexDirection: 'column' as const, justifyContent: 'center' as const };
const pad = { padding: '0 110px 40px', width: '100%' as const };

const Eyebrow = ({ children }: { children: any }) => <span style={{ fontFamily: mono, fontSize: 22, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.orange, fontWeight: 700 }}>{children}</span>;
const Foot = ({ label }: { label: string }) => { const { current, total } = useSlidePageNumber(); return <div style={{ position: 'absolute', left: 110, right: 110, bottom: 44, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `1px solid ${C.line}`, paddingTop: 14 }}><span style={{ fontSize: 19, color: C.faint, fontFamily: mono }}>{label}</span><span style={{ fontSize: 19, color: C.faint, fontFamily: mono }}>{String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}</span></div>; };
const Title = ({ children, size = 64 }: { children: any; size?: number }) => <div style={{ fontSize: size, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.14 }}>{children}</div>;
const Lead = ({ children }: { children: any }) => <div style={{ fontSize: 33, color: C.muted, lineHeight: 1.6, maxWidth: 1480 }}>{children}</div>;
const B = ({ children }: { children: any }) => <strong style={{ color: C.ink }}>{children}</strong>;
const O = ({ children }: { children: any }) => <strong style={{ color: C.orange }}>{children}</strong>;

const Analogy = ({ children }: { children: any }) => (
  <div style={{ background: '#fbf3ee', border: '1px solid #f3d6c4', borderRadius: 16, padding: '24px 30px', maxWidth: 1480 }}>
    <div style={{ fontFamily: mono, fontSize: 21, color: C.orange, fontWeight: 700, marginBottom: 10 }}>打個比方 🍳</div>
    <div style={{ fontSize: 32, color: C.ink, lineHeight: 1.55 }}>{children}</div>
  </div>
);
const Think = ({ q, a }: { q: any; a: any }) => (
  <div style={{ background: '#eef4ff', border: '1px solid #cfe0fb', borderRadius: 16, padding: '24px 30px', maxWidth: 1480 }}>
    <div style={{ fontFamily: mono, fontSize: 21, color: BLUE, fontWeight: 700, marginBottom: 10 }}>你可能會想說 …</div>
    <div style={{ fontSize: 31, color: '#26405f', lineHeight: 1.5 }}>{q}</div>
    <div style={{ fontSize: 31, color: C.ink, lineHeight: 1.55, marginTop: 14 }}><O>其實</O> {a}</div>
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
const PromptCard = ({ children, size = 27, label = '複製這段,貼到 AI 面板' }: { children: any; size?: number; label?: string }) => (
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

// 毛病頁(症狀 + 拉回 prompt)
const Flaw = ({ no, name, en, symptom, fix, fixLabel }: { no: string; name: string; en: string; symptom: any; fix: string; fixLabel: string }) => (
  <div style={fill}><div style={{ ...pad }}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}><Eyebrow>段 1 · 毛病 {no}</Eyebrow><span style={{ fontFamily: mono, fontSize: 20, color: C.faint }}>{en}</span></div>
    <Title size={50}>{name}</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30, marginTop: 26, alignItems: 'start' }}>
      <div style={{ background: '#fff7f4', border: `1px solid #f3d0c2`, borderRadius: 16, padding: '24px 28px' }}><div style={{ fontFamily: mono, fontSize: 20, color: RED, fontWeight: 700, marginBottom: 10 }}>症狀</div><div style={{ fontSize: 28, lineHeight: 1.5 }}>{symptom}</div></div>
      <div><div style={{ fontSize: 22, color: C.muted, marginBottom: 10 }}>↓ 這樣一句話,把它拉回來</div><PromptCard size={24} label={fixLabel}>{fix}</PromptCard></div>
    </div>
  </div><Foot label="U11 · 課4 · 段1" /></div>
);

// Claude 面板(對照用,簡版)
const ClaudePanel = ({ mode = 'plan', convo }: { mode?: string; convo: { who: 'user' | 'ai'; text: string }[] }) => (
  <div style={{ background: '#1e1e1e', borderRadius: 14, overflow: 'hidden', border: '1px solid #333', boxShadow: '0 18px 50px -26px rgba(0,0,0,0.5)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 16px', background: '#2a2a2a', borderBottom: '1px solid #1b1b1b' }}>
      <span style={{ width: 22, height: 22, borderRadius: 6, background: C.orange, display: 'grid', placeContent: 'center', fontSize: 14 }}>✳</span>
      <span style={{ fontFamily: mono, fontSize: 18, color: '#e8eaed', fontWeight: 700 }}>Claude Code</span>
    </div>
    <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 10, minHeight: 140 }}>
      {convo.map((m, i) => (
        <div key={i} style={{ alignSelf: m.who === 'user' ? 'flex-end' : 'flex-start', maxWidth: '88%', background: m.who === 'user' ? '#3a3f4b' : '#272727', color: '#e3e6ea', borderRadius: m.who === 'user' ? '12px 12px 4px 12px' : '12px 12px 12px 4px', padding: '11px 15px', fontSize: 19, lineHeight: 1.45 }}>{m.text}</div>
      ))}
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 16px', background: '#181818', borderTop: '1px solid #2b2b2b' }}>
      <span style={{ fontFamily: mono, fontSize: 15, color: '#9aa0a6' }}>模式:{mode} · shift+tab 切換</span>
    </div>
  </div>
);

// Skill 檔案框
const SkillFrame = () => (
  <div style={{ background: '#0f1117', borderRadius: 14, overflow: 'hidden', border: '1px solid #232733', boxShadow: '0 18px 50px -26px rgba(0,0,0,0.5)', maxWidth: 1200 }}>
    <div style={{ display: 'flex', gap: 9, padding: '12px 18px', background: '#161a22', borderBottom: '1px solid #232733' }}>{['#ff5f57', '#febc2e', '#28c840'].map((c, i) => <span key={i} style={{ width: 13, height: 13, borderRadius: '50%', background: c }} />)}<span style={{ fontFamily: mono, fontSize: 18, color: '#6b7280', marginLeft: 10 }}>skill/beginner-ai-project-workflow.md</span></div>
    <pre style={{ margin: 0, padding: '22px 28px', fontFamily: mono, fontSize: 22, lineHeight: 1.6, color: '#cdd3df' }}>
      <div style={{ color: '#6b7280' }}>---</div>
      <div><span style={{ color: C.orange }}>name:</span> beginner-ai-project-workflow</div>
      <div><span style={{ color: C.orange }}>description:</span> 初學者用 AI 操作 starter 專案時使用</div>
      <div style={{ color: '#6b7280' }}>---</div>
      <div style={{ height: 8 }} />
      <div>1. 先閱讀專案,不要直接改</div>
      <div>2. 先進入 Plan Mode(說會改什麼、風險、驗收)</div>
      <div>3. 修改時保持最小範圍</div>
      <div>4. 修改完成後回報(改了哪、怎麼驗收)</div>
      <div>5. 涉及資料:先檢查、標異常、沒依據不採用</div>
      <div>6. 最後提醒:run dev / git status / git diff / 再 commit</div>
    </pre>
  </div>
);

// MCP 連線圖
const McpMap = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 18, justifyContent: 'center' }}>
    <div style={{ background: '#eef4ff', border: `2px solid ${BLUE}`, borderRadius: 16, padding: '26px 30px', fontSize: 30, fontWeight: 800, color: BLUE }}>🤖 AI</div>
    <div style={{ color: C.faint, fontSize: 30 }}>⇄</div>
    <div style={{ background: '#fbf3ee', border: `2px solid ${C.orange}`, borderRadius: 16, padding: '26px 24px', fontSize: 26, fontWeight: 800, color: C.orange, textAlign: 'center' }}>MCP<div style={{ fontSize: 18, color: C.muted, fontWeight: 500, marginTop: 4 }}>授權的橋</div></div>
    <div style={{ color: C.faint, fontSize: 30 }}>⇄</div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {['Chrome 瀏覽器', '最新官方文件', '程式碼庫索引', 'GitHub / Figma…'].map((t, i) => <div key={i} style={{ background: '#fff', border: `1px solid ${C.line}`, borderRadius: 10, padding: '12px 22px', fontFamily: mono, fontSize: 23, fontWeight: 600 }}>{t}</div>)}
    </div>
  </div>
);

// ══════════ 開場 ══════════
const Cover: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>U11 · 第 4 堂 / 共 4 堂 · 4 小時 · 零基礎</Eyebrow>
    <div className="ts-rise" style={{ marginTop: 34 }}><div style={{ fontSize: 104, fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.04 }}>把平台流程<br />固定下來</div>
      <Lead>最後一堂把 U3 的 LINE Flex 流程放進<B> ops agent</B> 與 <B>GitHub Actions</B>:先產 artifact,再 reviewer / build / commit,最後帶走 <B>/ops-check</B> 與 <B>/ship-check</B>。</Lead></div>
  </div><div style={{ position: 'absolute', right: 110, bottom: 84, fontFamily: mono, fontSize: 21, color: C.faint }}>AI 專案操作基礎 · 把流程固定下來</div><Foot label="U11 · 課4" /></div>
);
const Recap0: Page = () => {
  const pts = ['課1:一鍵啟動、看過 BOBA TIDE 成品、改首頁標題、存檔', '課2:AGENTS/CLAUDE + planner→人審→implementer', '課3:訂單看板、LINE Flex mock、ReAct 修錯'];
  return (
    <div style={fill}><div style={{ ...pad }}><Eyebrow>先回顧 · 我們走到哪了</Eyebrow><Title size={52}>三堂課,你已經會這些</Title>
      <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 38, maxWidth: 1480 }}>
        {pts.map((t, i) => <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '18px 26px' }}><span style={{ fontFamily: mono, fontSize: 24, color: C.orange, fontWeight: 800 }}>0{i + 1}</span><span style={{ fontSize: 30 }}>{t}</span></div>)}
      </div>
      <div style={{ fontSize: 28, color: C.muted, marginTop: 34 }}>都會了。最後一哩路:讓它<B>每一次都這麼穩</B>。</div>
    </div><Foot label="U11 · 課4 · 回顧" /></div>
  );
};
const Why: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>先講為什麼</Eyebrow><Title size={54}>會用一次,跟每次都會用,差很多</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 32 }}>
      <Analogy>就像煮菜:你照食譜<B>成功一次</B>,不代表你會煮。要能<B>每次都煮出一樣的味道</B>,那才叫會。AI 協作也是 ── 重點是穩定、可重複。</Analogy>
      <Lead>今天補上「穩定」需要的東西:防止它走鐘、好好存檔、把流程寫成工具。</Lead>
    </div>
  </div><Foot label="U11 · 課4 · 為什麼" /></div>
);
const Roadmap: Page = () => {
  const items = [['段 1', 'ops agent', '三角色產 report', '0:15'], ['段 2', 'Actions', '產 Flex artifact,不真送', '1:05'], ['段 3', '交付', 'reviewer + build/commit', '1:55'], ['段 4', 'Skill / MCP', '/ops-check + /ship-check', '2:45']];
  return (
    <div style={fill}><div style={pad}><Eyebrow>今天的路線 · 四段 + 結業</Eyebrow><Title>把流程,變成你的習慣與工具</Title>
      <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 22, marginTop: 46 }}>
        {items.map(([a, b, c, t], i) => <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '24px 22px' }}><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ fontFamily: mono, fontSize: 21, color: C.orange, fontWeight: 700 }}>{a}</span><span style={{ fontFamily: mono, fontSize: 18, color: C.faint }}>{t}</span></div><div style={{ fontSize: 27, fontWeight: 800, marginTop: 12, lineHeight: 1.25 }}>{b}</div><div style={{ fontSize: 22, color: C.muted, marginTop: 8 }}>{c}</div></div>)}
      </div>
      <div style={{ fontSize: 27, color: C.muted, marginTop: 40, lineHeight: 1.5 }}>這是最後一堂。結尾會把整門課的成果,一次盤點給你看。</div>
    </div><Foot label="U11 · 課4 · 路線" /></div>
  );
};

const OpsAgentFlow: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>再多一個例子 · 自動化</Eyebrow><Title size={50}>一個小腳本,自動把資料變成建議</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18, marginTop: 34 }}>
      {[['第一步:檢查資料', '讀庫存 CSV,找低庫存與缺貨。'], ['第二步:判斷風險', '算出 risk_level 與是否需要推播。'], ['第三步:寫成建議', '寫出補貨 action_items,產出 report.json。']].map(([a, b]) => (
        <div key={a} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '24px 22px' }}><div style={{ fontFamily: mono, color: C.orange, fontSize: 22, fontWeight: 850 }}>{a}</div><div style={{ marginTop: 14, fontSize: 27, lineHeight: 1.4 }}>{b}</div></div>
      ))}
    </div>
    <div className="ts-rise" style={{ marginTop: 28 }}><PromptCard size={25} label="terminal">{`python ops-agent-lab/run_ops_check.py
python ops-agent-lab/run_ops_check.py --write-report
node line-lab/sendLineAlert.js --flex`}</PromptCard></div>
    <div style={{ marginTop: 18 }}><Harvest>重點不是多一套格式,而是自動產出的資料,跟 U3 手動填的格式完全一樣。</Harvest></div>
  </div><Foot label="U11 · 課4 · 自動化範例" /></div>
);

const ActionsFlow: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 2 · GitHub Actions</Eyebrow><Title size={50}>排程可以自動跑,送出仍要人審</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32, maxWidth: 1500 }}>
      {['checkout 專案', '設定 Python 與 Node', '跑 ops agent 寫回 report.json', '跑 LINE Flex mock 產 line-flex-payload.json', '上傳 artifact 給人審'].map((t, i) => (
        <div key={t} style={{ display: 'flex', gap: 18, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '16px 24px' }}><span style={{ fontFamily: mono, color: C.orange, fontWeight: 900, fontSize: 25 }}>{String(i + 1).padStart(2, '0')}</span><span style={{ fontSize: 29 }}>{t}</span></div>
      ))}
    </div>
    <div style={{ marginTop: 22 }}><SuccessRow>workflow 不設定 LINE_REAL_SEND=1,所以只會 mock,不會真送 LINE。</SuccessRow></div>
  </div><Foot label="U11 · 課4 · GitHub Actions" /></div>
);

// ══════════ 段 1:三個毛病 ══════════
const Sec1: Page = () => <Section no="1" title="三個讓 AI 走鐘的毛病" time="0:15 - 1:15" sub="跟 AI 處久了,會遇到三個固定狀況。先認得它們,各用一句話就能拉回來。" />;
const FlawsIntro: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 1 · 開場</Eyebrow><Title size={50}>三個會反覆出現的狀況</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 34, maxWidth: 1500 }}>
      {[['Context Drift', '越改越偏,離原目標越來越遠'], ['Prompt Debt', '零碎要求越補越亂,前後矛盾'], ['Regression', '改 A 壞 B,弄壞原本好的']].map(([a, b], i) => (
        <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '18px 26px' }}><span style={{ fontFamily: mono, fontSize: 24, color: C.orange, fontWeight: 800, minWidth: 230 }}>{a}</span><span style={{ fontSize: 27 }}>{b}</span></div>
      ))}
    </div>
    <div style={{ marginTop: 24 }}><Lead>它們不是「壞掉」,是和 AI 長時間互動的自然現象。重點是 ── 你有沒有一句話能拉回來。</Lead></div>
  </div><Foot label="U11 · 課4 · 段1" /></div>
);
const Drift: Page = () => (
  <Flaw no="1" name="Context Drift:越改越偏" en="CONTEXT DRIFT"
    symptom={<>你只是要改標題。它改著改著,<B>順便改了顏色、版面、又動了資料</B>。離原本目標越來越遠。</>}
    fixLabel="拉回來" fix={`請回到原本任務。
這次只處理標題修改。
不要修改其他區塊。`} />
);
const Debt: Page = () => (
  <Flaw no="2" name="Prompt Debt:越補越亂" en="PROMPT DEBT"
    symptom={<>你一直補一句、又補一句零碎要求。補到後面,<B>AI 自己也搞混了</B>,前後矛盾。</>}
    fixLabel="整理一次" fix={`請先整理目前最新狀態,不要修改。

請列出:
1. 目前已完成哪些功能
2. 目前仍要遵守哪些限制
3. 下一步只處理什麼
4. 哪些事情不要做`} />
);
const Regression: Page = () => (
  <Flaw no="3" name="Regression:改 A 壞 B" en="REGRESSION"
    symptom={<>它把你要的地方改好了,但<B>不小心弄壞了原本好好的另一個地方</B>。你沒注意,就上線了。</>}
    fixLabel="先列回歸檢查" fix={`請列出這次修改後需要回歸檢查的項目。

請包含:
1. 新修改要檢查什麼
2. 原本功能要檢查什麼
3. 哪些地方最容易被影響`} />
);
const FlawDemo: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '600px 1fr', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise"><ClaudePanel mode="default" convo={[{ who: 'ai', text: '我順便幫你美化了版面、加了動畫…' }, { who: 'user', text: '請回到原本任務,這次只改標題,其他還原。' }, { who: 'ai', text: '好的,已還原版面,只改標題。' }]} /></div>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div><Eyebrow>段 1 · 拉回示範</Eyebrow><Title size={46}>一句話,就拉回來了</Title></div>
      <Lead>AI 走鐘時,你<B>不用重開</B>。就在同一個對話,丟一句「回到原本任務」,它就會收斂回來。</Lead>
      <Harvest>拉回來的關鍵,是你心裡一直記得「原本要做什麼」。</Harvest>
    </div>
  </div><Foot label="U11 · 課4 · 段1" /></div>
);
const FlawDone: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 1 · 收一下</Eyebrow><Title size={50}>三個毛病,三句話</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 34, maxWidth: 1500 }}>
      {[['走鐘了', '「請回到原本任務,只處理這件事」'], ['變亂了', '「請先整理目前狀態,不要改」'], ['怕改壞', '「請列出需要回歸檢查的項目」']].map(([a, b], i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 24, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '18px 26px' }}><span style={{ fontSize: 28, fontWeight: 800, color: C.orange }}>{a}</span><span style={{ fontFamily: mono, fontSize: 25 }}>{b}</span></div>
      ))}
    </div>
    <div style={{ marginTop: 22 }}><Checkpoint items={['認得三個毛病的名字與症狀', '各會用一句話把 AI 拉回來']} /></div>
  </div><Foot label="U11 · 課4 · 段1" /></div>
);

// ══════════ 段 2:交付(reviewer + 四問 + build/commit)══════════
const Sec2: Page = () => <Section no="2" title="交付:reviewer、四問、build、commit" time="1:15 - 2:15" sub="AI 做完不等於交付。先讓 reviewer 檢查 diff,再用交付前四問把關,最後 build、commit 收乾淨。" />;
const ReviewerCard: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 2 · reviewer</Eyebrow><Title size={44}>commit 之前,讓另一個角色查一次帳</Title>
    <div className="ts-rise" style={{ marginTop: 22 }}>
      <PromptCard size={21} label="reviewer 卡(prompts/07-reviewer.md)">{`你現在扮演 reviewer。
請根據 AGENTS.md、CLAUDE.md、目前需求與 git diff 做檢查。
不要改檔。

請固定輸出:
Verdict:PASS 或 BLOCK
Changed Files / Scope Check / Package Check / Contract Check
UI Check / Regression Risk
Human Review:人還要親自看什麼
Next Step:PASS 下一步做什麼;BLOCK 先修什麼`}</PromptCard>
    </div>
    <div style={{ marginTop: 18 }}><Harvest>PASS → 先做 Human Review 欄指定的事;BLOCK → 照 Next Step 修完重跑。reviewer 是省力,不是背書 ── 最後拍板的永遠是人。</Harvest></div>
  </div><Foot label="U11 · 課4 · 段2" /></div>
);
const FourQ: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 2 · 交付前四問</Eyebrow><Title size={50}>四格都打勾,才叫交付</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 30, maxWidth: 1500 }}>
      {[['1', '畫面 / 輸出對了嗎?'], ['2', 'git diff 只有預期變更嗎?'], ['3', 'build 過了嗎?(npm run build)'], ['4', 'commit 訊息說得出「改了什麼、為什麼」嗎?']].map(([n, q]) => (
        <div key={n} style={{ display: 'flex', gap: 18, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '18px 26px' }}><span style={{ flexShrink: 0, width: 42, height: 42, borderRadius: 12, background: C.orange, color: '#fff', display: 'grid', placeContent: 'center', fontFamily: mono, fontSize: 23, fontWeight: 800 }}>{n}</span><span style={{ fontSize: 30, fontWeight: 700 }}>{q}</span></div>
      ))}
    </div>
    <div style={{ marginTop: 20 }}><Harvest>看到 diff 乾淨、build 通過、commit 成功,這次才叫交付。</Harvest></div>
  </div><Foot label="U11 · 課4 · 段2" /></div>
);
const CommitWhy: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 2 · 為什麼定期存</Eyebrow><Title size={52}>每做完一件事,就存一次</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 32 }}>
      <Analogy>像打電動,<B>過一關就存一次檔</B>。AI 幫你改完一個段落、你驗收 OK,就 commit。下一步出事,隨時退回這個乾淨點。</Analogy>
      <Lead>尤其在讓 AI 連續改很多東西之前 ── 先存一次,等於先買保險。</Lead>
    </div>
  </div><Foot label="U11 · 課4 · 段2" /></div>
);
const Commit: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 760px', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div><Eyebrow>段 2 · 完整一次</Eyebrow><Title size={46}>四步,幫成果拍張照</Title></div>
      <Atom n={1} act={<><Key>git status</Key> 看有哪些改動。</>} see="列出被改的檔。" />
      <Atom n={2} act={<><Key>git diff</Key> 確認改的內容沒問題。</>} see="綠加紅刪。" />
      <Atom n={3} act={<><Key>git add .</Key> 把改動收進來。</>} see="檔案進入待提交。" />
      <Atom n={4} act={<><Key>git commit -m "完成營運異常通知交付"</Key>(之後有遠端再 <Key>git push</Key>)</>} see="出現一筆存檔紀錄。" />
    </div>
    <div className="ts-rise"><Term title="TERMINAL" rows={[['cmd', 'npm run build'], ['ok', '✓ built in 0.9s'], ['cmd', 'git status'], ['err', '  modified: data-lab/report.json'], ['cmd', 'git add .'], ['cmd', 'git commit -m "完成營運異常通知交付"'], ['ok', '[main 9f2c1a0] 完成營運異常通知交付'], ['dim', ' 1 file changed']]} /></div>
  </div><Foot label="U11 · 課4 · 段2" /></div>
);
const CommitDone: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 2 · 檢查點</Eyebrow><Title size={52}>你存下了一個穩定版本</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 36 }}>
      <Harvest>Git 在這裡不是考試題,是你在 AI 改完之後,幫成果拍的一張照。</Harvest>
      <Checkpoint items={['reviewer 回報 Verdict,且你對照過 git diff', '交付前四問逐格答「是」', 'build 通過、完整跑過 status → diff → add → commit']} />
    </div>
  </div><Foot label="U11 · 課4 · 段2" /></div>
);
const Break1: Page = () => <BreakSlide note="回來我們把平台檢查與交付檢查固定成 Skills,自建 /ops-check 與 /ship-check。" />;

// ══════════ 段 3:Skills + /ship-check(把流程固定成工具)══════════
const Sec3: Page = () => <Section no="3" title="把流程固定成 Skills,自建 /ops-check 與 /ship-check" time="2:45 - 3:25" sub="每次都要提醒 AI 同一套規矩,那就把它寫下來。這堂親手把平台檢查與交付前四問封裝成指令帶走。" />;

// ══════════ 段 3:Skills + MCP(把流程固定成工具）══════════
// 7 要素卡:用途 / 設定或安裝 / 固定操作 / 固定 prompt / 預期結果 / 驗收 / 保底
const SevenCard = ({ title, tag, rows }: { title: string; tag: string; rows: [string, any][] }) => (
  <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '22px 30px', maxWidth: 1600 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
      <span style={{ fontFamily: mono, fontSize: 26, color: C.orange, fontWeight: 800 }}>{title}</span>
      <span style={{ fontFamily: mono, fontSize: 16, color: C.muted, background: '#eef0f3', borderRadius: 999, padding: '3px 12px' }}>{tag}</span>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '9px 18px' }}>
      {rows.map(([k, v], i) => (<>
        <span key={`k${i}`} style={{ fontFamily: mono, fontSize: 19, color: C.faint, fontWeight: 700, textAlign: 'right' }}>{k}</span>
        <span key={`v${i}`} style={{ fontSize: 22, lineHeight: 1.4, color: k === '保底' ? OK : C.ink }}>{v}</span>
      </>))}
    </div>
  </div>
);
const SkillHead: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 3 · Skills</Eyebrow><Title size={52}>每次都要交代的事,寫成一份就好</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 32 }}>
      <Lead>這四堂課你一直在提醒 AI:先讀、先 Plan、不要亂改、改完要驗收。如果<B>每次都要重講</B> ── 那它其實可以寫成一份固定的 SOP。</Lead>
      <Analogy>Skill 就像給新人的<B>工作守則</B>:貼在牆上,每個人進來都照這個做,你不用每次重講一遍。放在 <Key>.claude/skills/</Key>,打 <Key>/名字</Key> 呼叫。</Analogy>
    </div>
  </div><Foot label="U11 · 課4 · 段3" /></div>
);
const SkillCatalog: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 3 · 本課附的 5 支 Skill · 已放進 starter</Eyebrow><Title size={44}>clone 專案就帶著,打 / 就看得到</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 11, marginTop: 24, maxWidth: 1580 }}>
      {[
        ['/beginner-ai-project-workflow', '接手任何專案的總守則:先讀→plan→最小改→回報→Git'],
        ['/data-check-fixed-output', '看資料一律輸出固定四欄,格式每次一致'],
        ['/debug-react', '用 ReAct 修錯:先分析、同意後才只改必要檔'],
        ['/git-verify', '收尾三件套:status → diff → commit,不亂丟改動'],
        ['/review-diff', '逐檔檢視 diff,抓出越界修改與可疑變更'],
      ].map(([a, b]) => <div key={a} style={{ display: 'grid', gridTemplateColumns: '480px 1fr', gap: 20, background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '16px 24px', alignItems: 'center' }}><span style={{ fontFamily: mono, fontSize: 23, color: C.orange, fontWeight: 800 }}>{a}</span><span style={{ fontSize: 24, color: C.muted, lineHeight: 1.35 }}>{b}</span></div>)}
    </div>
    <div style={{ marginTop: 20 }}><Harvest>五支 Skill = 這門課的流程,變成 AI 打開專案就自帶的習慣。</Harvest></div>
  </div><Foot label="U11 · 課4 · 段3" /></div>
);
const SkillMake: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 720px', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div><Eyebrow>段 3 · 自己做一支 Skill</Eyebrow><Title size={44}>三步,把叮嚀變成 AI 的內建習慣</Title></div>
      <Atom n={1} act={<>在專案建 <Key>.claude/skills/名字/SKILL.md</Key>。</>} see="檔案建好。" />
      <Atom n={2} act={<>最上面 frontmatter 寫 <Key>name</Key> 和 <Key>description</Key>,下面寫步驟。</>} see="description 決定它何時自動觸發。" />
      <Atom n={3} act={<>打 <Key>/名字</Key> 呼叫;相關情境它也會自己用。</>} see="AI 照這份 SOP 走。" />
      <Harvest>規矩想改就改這份檔,一處改、全部跟著變。</Harvest>
    </div>
    <div className="ts-rise"><Term title=".claude/skills/git-verify/SKILL.md" size={20} rows={[['dim', '---'], ['ok', 'name: git-verify'], ['ok', 'description: 收尾驗收時用,'], ['dim', '  引導 status→diff→commit'], ['dim', '---'], ['out', ''], ['out', '1. git status 看動了哪些檔'], ['out', '2. git diff 逐檔說明'], ['out', '3. 範圍 OK 才 add / commit'], ['out', '4. 不主動 reset/checkout']]} /></div>
  </div><Foot label="U11 · 課4 · 段3" /></div>
);
const SkillReal: Page = () => (
  <RealShot img={skillsShot} url="code.claude.com/docs/en/skills" eyebrow="段 3 · Skills 是官方功能" title="Skills:把一套做法教給 AI,重複使用"
    caption="這是官方文件對 Skills 的說明。概念就是:把固定做法寫成一份檔案,之後 AI 每次都照它做,不用你重講。本課 5 支就是這樣寫的。" foot="U11 · 課4 · 段3" />
);
const ShipCheck: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 760px', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div><Eyebrow>段 3 · 動手 · 你的第一個自建指令</Eyebrow><Title size={44}>把交付前四問,封裝成 /ship-check</Title></div>
      <Atom n={1} act={<>建立 <Key>.claude/commands/ship-check.md</Key>。</>} see="檔案建好。" />
      <Atom n={2} act={<>貼入右邊的 prompt 內容,存檔。</>} see="內容就是交付前檢查。" />
      <Atom n={3} act={<>對話框打 <Key>/ship-check</Key>。</>} see="AI 回四點,而且不改檔。" />
      <Harvest>以後每次要 commit 前,一個指令跑完交付前四問。這就是「把流程固化成 SOP」。</Harvest>
    </div>
    <div className="ts-rise"><PromptCard size={22} label=".claude/commands/ship-check.md">{`請根據目前 git status、git diff 與 build 結果,
幫我做交付前檢查。
不要改檔。
請回答:
1. 是否可交付
2. 風險最高的是哪一點
3. commit 訊息建議
4. 如果要退回,最先該退哪個檔案`}</PromptCard></div>
  </div><Foot label="U11 · 課4 · 段3" /></div>
);

const OpsCheck: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 760px', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div><Eyebrow>段 3 · 動手 · 平台流程檢查</Eyebrow><Title size={44}>先把 ops agent / Actions 封裝成 /ops-check</Title></div>
      <Atom n={1} act={<>建立 <Key>.claude/commands/ops-check.md</Key>。</>} see="檔案建好。" />
      <Atom n={2} act={<>貼入右邊的 prompt 內容,存檔。</>} see="檢查 ops agent、Flex mock、Actions artifact。" />
      <Atom n={3} act={<>對話框打 <Key>/ops-check</Key>。</>} see="AI 回四點,而且不改檔。" />
      <Harvest>這是 C4 的平台檢查:排程可以自動跑,真送仍要人審。</Harvest>
    </div>
    <div className="ts-rise"><PromptCard size={20} label=".claude/commands/ops-check.md">{`請檢查 U11 ops agent 自動化流程。
不要改檔。

請根據目前檔案與輸出回答:
1. run_ops_check.py 是否會產生符合 report.json 合約的資料?
2. sendLineAlert.js --flex 是否仍是 mock 優先?
3. u11-ops-check.yml 是否只產 artifact、不真送 LINE?
4. 人工審核前還缺哪一個證據?`}</PromptCard></div>
  </div><Foot label="U11 · 課4 · 段3" /></div>
);

// ══════════ 段 4:MCP(概念 + 老師示範;安裝細節在附錄)══════════
const Sec4Mcp: Page = () => <Section no="4" title="MCP:概念與老師示範" time="3:25 - 3:50" sub="MCP 是幫 AI 接上外部工具的「安全的線」。今天只講概念、看老師示範;安裝細節放在附錄,想玩的課後照著做。" />;
const McpHead: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 4 · MCP</Eyebrow><Title size={54}>MCP:讓 AI 接上外部工具</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 30 }}>
      <Analogy>沒有 MCP,你要自己把資料複製給 AI。有了 MCP,AI 可以<B>在你授權的範圍內</B>,自己去工具裡讀資料。像幫 AI 接上一條條安全的線。</Analogy>
    </div>
    <div className="ts-rise" style={{ marginTop: 34 }}><McpMap /></div>
  </div><Foot label="U11 · 課4 · 段3" /></div>
);
const McpInstall: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 2 · 裝 MCP · 一行指令</Eyebrow><Title size={46}>三台今天要用的,裝法都一樣</Title>
    <div className="ts-rise" style={{ marginTop: 22 }}><Term title="TERMINAL · 安裝三台 MCP" size={20} rows={[
      ['dim', '# 瀏覽器驗收(看 console、截圖)'],
      ['cmd', 'claude mcp add chrome-devtools -- npx chrome-devtools-mcp@latest'],
      ['dim', '# 查套件最新官方文件'],
      ['cmd', 'claude mcp add context7 -- npx -y @upstash/context7-mcp'],
      ['dim', '# 讓 AI 記住整個程式碼庫(全本地、免 API key;會自動設定 Claude Code)'],
      ['cmd', 'curl -fsSL https://raw.githubusercontent.com/DeusData/codebase-memory-mcp/main/install.sh | bash'],
      ['dim', '# Windows:下載 install.ps1 後執行(見 repo README)'],
      ['ok', '✓ 裝完打 /mcp 應該看到這三台'],
    ]} /></div>
    <div style={{ marginTop: 18 }}><Harvest>本課 starter 附了 .mcp.json(前兩台免手打);codebase-memory 的安裝腳本會自動幫你設定好。</Harvest></div>
  </div><Foot label="U11 · 課4 · 段3" /></div>
);
const McpChrome: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 2 · MCP 一 · 七要素</Eyebrow><Title size={44}>Chrome DevTools MCP:驗收 web-lab</Title>
    <div className="ts-rise" style={{ marginTop: 22 }}><SevenCard title="chrome-devtools" tag="開源 · 需 Node + Chrome" rows={[
      ['用途', '讓 AI 開真的 Chrome,看 console / DOM、截圖 ── 拿來驗收 web-lab。'],
      ['安裝', <><Key>claude mcp add chrome-devtools -- npx chrome-devtools-mcp@latest</Key></>],
      ['固定操作', <>先 <Key>npm run dev</Key> 跑起 web-lab → 請 AI 開 localhost、看 console、截圖。</>],
      ['固定 prompt', '「請用 Chrome DevTools 開 http://localhost:5180,列出 console 有沒有錯誤,截一張首頁的圖。」'],
      ['預期結果', 'AI 回報 console 狀況 + 一張截圖。'],
      ['驗收', <><Key>/mcp</Key> 列出 chrome-devtools;真的拿到截圖。</>],
      ['保底', '連不上 → 自己在瀏覽器按 F12 看 console。'],
    ]} /></div>
  </div><Foot label="U11 · 課4 · 段3" /></div>
);
const McpContext7: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 2 · MCP 二 · 七要素</Eyebrow><Title size={44}>Context7 MCP:查套件最新文件</Title>
    <div className="ts-rise" style={{ marginTop: 22 }}><SevenCard title="context7" tag="開源 · 選填 API 金鑰" rows={[
      ['用途', '把套件「最新官方文件」餵給 AI,避免它用過時 API 亂寫。'],
      ['安裝', <><Key>claude mcp add context7 -- npx -y @upstash/context7-mcp</Key>(免費金鑰於 context7.com/dashboard)</>],
      ['固定操作', <>問套件用法時,句尾加 <Key>use context7</Key>。</>],
      ['固定 prompt', '「用 vite 設定 dev server 埠號,請參考最新官方文件。use context7」'],
      ['預期結果', 'AI 依最新文件回答,而不是憑記憶。'],
      ['驗收', <><Key>/mcp</Key> 列出 context7;答案附上文件出處。</>],
      ['保底', '沒金鑰被限流 → 改看官方網站,或 /model 換更強模型。'],
    ]} /></div>
  </div><Foot label="U11 · 課4 · 段3" /></div>
);
const McpCodebaseMemory: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 2 · MCP 三 · 七要素</Eyebrow><Title size={44}>Codebase Memory MCP:讓 AI 記住整個專案</Title>
    <div className="ts-rise" style={{ marginTop: 22 }}><SevenCard title="codebase-memory-mcp" tag="開源 · 全本地 · 免 API key" rows={[
      ['用途', '把程式碼庫索引成知識圖譜:AI 能查架構總覽、呼叫關係、找死碼,不用一檔一檔翻。'],
      ['安裝', <>Windows PowerShell 下載執行 <Key>install.ps1</Key>;mac/Linux 一行 <Key>curl -fsSL .../install.sh | bash</Key>(會自動幫 Claude Code 等 agent 設定好)。</>],
      ['固定操作', <>先請 AI <Key>index_repository</Key> 索引專案 → 再問架構問題。</>],
      ['固定 prompt', '「請先索引這個專案,然後告訴我:整體架構長怎樣?ShopConsole.jsx 與 shopLogic.js 怎麼互動?」'],
      ['預期結果', 'AI 用圖譜回答架構與呼叫關係,不再逐檔猜。'],
      ['驗收', <><Key>/mcp</Key> 列出 codebase-memory;架構問題答得出檔案關係。</>],
      ['保底', '裝不起來 → 用 /init 讓 AI 讀專案,或直接看 README;不擋進度。'],
    ]} /></div>
  </div><Foot label="U11 · 課4 · 附錄" /></div>
);
const McpSafety: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 4 · MCP 的安全提醒</Eyebrow><Title size={50}>不是接越多越好</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 34, maxWidth: 1500 }}>
      {[['它能讀到什麼?', '接上去之前,先搞清楚 AI 看得到哪些資料。'], ['它能不能寫入?', '只能讀,還是也能改?能改的權限要更小心。'], ['會不會碰到正式資料?', '別讓它直接動到真實營運的資料庫。']].map(([a, b], i) => (
        <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '18px 26px' }}><span style={{ flexShrink: 0, fontSize: 28 }}>🔒</span><div><span style={{ fontSize: 29, fontWeight: 800 }}>{a}</span><span style={{ fontSize: 26, color: C.muted }}>　{b}</span></div></div>
      ))}
    </div>
    <div style={{ marginTop: 22 }}><Harvest>MCP 代表 AI 能碰外部資料。方便,但權限要給得剛剛好。</Harvest></div>
  </div><Foot label="U11 · 課4 · 段3" /></div>
);
const SlashWrap: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 4 · slash 收尾 · 內建 vs 自建</Eyebrow><Title size={46}>兩排指令,分清楚誰是誰</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 22, marginTop: 28, maxWidth: 1580 }}>
      <div style={{ background: '#eef4ff', border: `2px solid ${BLUE}`, borderRadius: 16, padding: '22px 28px' }}>
        <div style={{ fontSize: 28, fontWeight: 800, color: BLUE }}>內建(打 /help 都看得到)</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 14 }}>{['/clear', '/compact', '/review', '/status', '/model', '/permissions', '/mcp', '/init'].map(c => <span key={c} style={{ fontFamily: mono, fontSize: 21, background: '#fff', border: `1px solid ${C.line}`, borderRadius: 8, padding: '5px 12px' }}>{c}</span>)}</div>
        <div style={{ fontSize: 21, color: C.muted, marginTop: 14, lineHeight: 1.4 }}>Plan 是<B>模式</B>(shift+tab),不是指令。</div>
      </div>
      <div style={{ background: '#fdf6ef', border: `2px solid ${C.orange}`, borderRadius: 16, padding: '22px 28px' }}>
        <div style={{ fontSize: 28, fontWeight: 800, color: C.orange }}>自建(放 .claude/commands/)</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 14 }}>{['/plan-review', '/debug', '/data-check', '/review-diff', '/commit-msg', '/ops-check', '/ship-check'].map(c => <span key={c} style={{ fontFamily: mono, fontSize: 21, background: '#fff', border: `1px solid ${C.line}`, borderRadius: 8, padding: '5px 12px' }}>{c}</span>)}</div>
        <div style={{ fontSize: 21, color: C.muted, marginTop: 14, lineHeight: 1.4 }}>starter 已內建前五個;/ops-check 與 /ship-check 是你今天親手建的。</div>
      </div>
    </div>
    <div style={{ marginTop: 22 }}><Harvest>不用背:流程就是先讀、先計畫、放行、看 diff。指令只是把它叫出來的捷徑。</Harvest></div>
  </div><Foot label="U11 · 課4 · 段3" /></div>
);
const ToolsDone: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 4 · 檢查點</Eyebrow><Title size={52}>你把整套做法,變成了工具</Title>
    <div className="ts-rise" style={{ marginTop: 32 }}><Checkpoint items={['看得懂一份 Skill,知道它是 AI 的 SOP', '親手建好 /ops-check 與 /ship-check,而且它們回固定格式、不改檔', '說得出 MCP 權限三問(能讀什麼、能不能寫、碰不碰正式資料)', '分得清內建 slash 與自建 slash']} /></div>
  </div><Foot label="U11 · 課4 · 段4" /></div>
);

// ══════════ 結業 ══════════
const Sec5: Page = () => <Section no="5" title="結業:你做到的事" time="3:50 - 4:00" sub="四堂課走完了。我們把你真正帶走的東西,一次盤點。" />;
const Punchline: Page = () => (
  <div style={{ ...fill, background: C.ink, color: '#fff' }}><div style={{ ...pad }}>
    <Eyebrow>整門課最重要的一句</Eyebrow>
    <div style={{ fontSize: 80, fontWeight: 900, lineHeight: 1.2, marginTop: 28, maxWidth: 1540, letterSpacing: '-0.02em' }}>會用 AI 一次<span style={{ color: C.orange }}>不稀奇</span>;<br />能讓 AI <span style={{ color: C.orange }}>每次照流程做</span>,<br />才是真本事。</div>
    <div style={{ fontSize: 31, color: 'rgba(255,255,255,0.7)', marginTop: 34, maxWidth: 1380, lineHeight: 1.55 }}>從打開專案,到讀、計畫、護欄、驗收、修錯、存檔,再到寫成 Skill ── 你學的從來不是某個工具,是一套讓 AI 穩定幫你做事的流程。</div>
  </div><div style={{ position: 'absolute', left: 110, bottom: 44, fontFamily: mono, fontSize: 19, color: 'rgba(255,255,255,0.5)' }}>U11 · 課4 · 記住這句</div></div>
);
const NineOutcomes: Page = () => {
  const outs = ['一鍵啟動跑起專案', 'BOBA TIDE 首頁', '備料控制台 action rule', '訂單看板動態畫面', '一次 planner A–F 計畫與人審', '一次小範圍 shopLogic 修改 + git diff', '一份 LINE Flex payload 預覽', '一次 mock 送出 + [blocked] 驗證', '一次 ReAct 修錯(擋牌出現又消失)', '自建 /ops-check 與 /ship-check', '三個 MCP 親手裝起來', 'Astro 技術 blog'];
  return (
    <div style={fill}><div style={pad}><Eyebrow>整門課 · 你手上會有這些</Eyebrow><Title size={46}>你親手做出來的成果</Title>
      <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12, marginTop: 30, maxWidth: 1560 }}>
        {outs.map((t, i) => <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 12, padding: '13px 22px' }}><span style={{ flexShrink: 0, width: 30, height: 30, borderRadius: '50%', background: OK, color: '#fff', display: 'grid', placeContent: 'center', fontSize: 17, fontWeight: 800 }}>✓</span><span style={{ fontSize: 24 }}>{t}</span></div>)}
      </div>
    </div><Foot label="U11 · 課4 · 整門課產出" /></div>
  );
};
const Recap: Page = () => {
  const pts = [['ops agent', '三個角色產出符合合約的 report.json。'], ['GitHub Actions', '排程產 Flex artifact,不真送 LINE。'], ['交付', 'reviewer 檢查 → build → commit。'], ['固定成工具', '自建 /ops-check、/ship-check,再理解 MCP 權限三問。']];
  return (
    <div style={fill}><div style={pad}><Eyebrow>這一堂我們學了四件事</Eyebrow>
      <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 42, maxWidth: 1520 }}>
        {pts.map(([a, b], i) => <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}><span style={{ fontFamily: mono, fontSize: 34, color: C.orange, fontWeight: 800, lineHeight: 1.2 }}>{String(i + 1).padStart(2, '0')}</span><div><div style={{ fontSize: 36, fontWeight: 800 }}>{a}</div><div style={{ fontSize: 25, color: C.muted, marginTop: 4 }}>{b}</div></div></div>)}
      </div>
    </div><Foot label="U11 · 課4 · 收束" /></div>
  );
};
const CourseArc: Page = () => {
  const arc = [['課1', '進得了專案,先看到成果'], ['課2', '管得住 AI(守則 + 工作流)‧控制輸出'], ['課3', '接上平台(訂單看板 + LINE OA Flex)‧控制行動'], ['課4', 'Skills + MCP + blog‧擴充能力']];
  return (
    <div style={fill}><div style={pad}><Eyebrow>整門課四堂 · 一條線</Eyebrow><Title size={50}>四堂課,串成一句話</Title>
      <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 36, maxWidth: 1500 }}>
        {arc.map(([a, b], i) => <div key={i} style={{ display: 'flex', gap: 20, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '18px 28px' }}><span style={{ fontFamily: mono, fontSize: 24, color: C.orange, fontWeight: 800, minWidth: 90 }}>{a}</span><span style={{ fontSize: 30, fontWeight: 700 }}>{b}</span></div>)}
      </div>
      <div style={{ marginTop: 24 }}><Harvest>AI 很會做事,但它不是老闆;你已經學會當 AI 的主管。</Harvest></div>
    </div><Foot label="U11 · 課4 · 整門課" /></div>
  );
};
const End: Page = () => (
  <div style={{ ...fill, background: C.ink, color: '#fff' }}><div style={{ ...pad }}><Eyebrow>結業</Eyebrow><Title size={62}>你不再只是「會問 AI」,<br />你會<span style={{ color: C.orange }}>管理</span> AI 做事。</Title><div style={{ fontSize: 32, color: 'rgba(255,255,255,0.72)', marginTop: 30, lineHeight: 1.5, maxWidth: 1400 }}>把今天的 Skill 留著,下次接到新專案,照同一套流程走就好。四堂課辛苦了,我們下一個模組見。</div></div><div style={{ position: 'absolute', left: 110, bottom: 44, fontFamily: mono, fontSize: 19, color: 'rgba(255,255,255,0.5)' }}>U11 · 課4 · 謝謝大家</div></div>
);

// ── v2 追加頁 ─────────────────────────────────────────────
const DriftPractice: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 1 · 換你拉回</Eyebrow><Title size={48}>練習:它跑偏了,你怎麼說?</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28, maxWidth: 1500 }}>
      <div style={{ background: '#fff7f4', border: `1px solid #f3d0c2`, borderRadius: 14, padding: '20px 26px', fontSize: 27, lineHeight: 1.5 }}>情境:你只要它「把按鈕變大一點」,它卻開始改顏色、加陰影、還動了排版。</div>
      <Lead>換你出手。照三毛病的口訣,挑一句拉回它:</Lead>
      <PromptCard size={27} label="你會怎麼下這句?(參考)">{`請回到原本任務。
這次只把按鈕變大,其他都不要改。`}</PromptCard>
    </div>
    <div style={{ marginTop: 20 }}><SuccessRow>你能在它走鐘時,立刻丟出一句把它拉回來 = 段 1 過關。</SuccessRow></div>
  </div><Foot label="U11 · 課4 · 段1" /></div>
);
const SkillHow: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 3 · Skill 怎麼用</Eyebrow><Title size={48}>放進專案,AI 就會照著做</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 28, maxWidth: 1500 }}>
      <Atom n={1} act={<>把 Skill 檔放到專案的 <Key>.claude/skills/</Key> 資料夾。</>} see="檔案出現在專案裡。" />
      <Atom n={2} act={<>之後請 AI 做事時,它會<B>照這份 SOP 的規矩</B>來。</>} see="它自動先讀、先計畫、不亂改。" />
      <Atom n={3} act={<>規矩想改,就改這份檔 ── <B>一處改,全部跟著變</B>。</>} see="下次起就照新規矩。" />
    </div>
    <div style={{ marginTop: 20 }}><Harvest>Skill = 把「你每次的叮嚀」變成 AI 的內建習慣。</Harvest></div>
  </div><Foot label="U11 · 課4 · 段3" /></div>
);
const McpExample: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>附錄 · MCP 一個情境</Eyebrow><Title size={48}>有了 GitHub MCP,你可以這樣說</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 30 }}>
      <PromptCard size={27} label="情境示意(需先接好 GitHub MCP)">{`幫我看一下 GitHub 上最新的 3 個 issue,
整理成一句重點 + 建議先處理哪一個。`}</PromptCard>
      <Lead>你<B>沒有自己複製貼上任何 issue</B>。AI 透過 MCP,在你授權範圍內自己去讀。沒有 MCP,你就得一筆筆貼給它。</Lead>
    </div>
  </div><Foot label="U11 · 課4 · 段4" /></div>
);

// ── 附錄分隔頁 ─────────────────────────────────────────
const AppendixHead: Page = () => (
  <div style={{ ...fill, background: C.ink, color: '#fff' }}><div style={pad}>
    <span style={{ fontFamily: mono, fontSize: 26, color: C.orange, letterSpacing: '.14em' }}>附錄 · 課後自修</span>
    <div style={{ marginTop: 22 }}><Title size={80}>MCP 安裝細節</Title></div>
    <div style={{ marginTop: 28, fontSize: 34, color: 'rgba(255,255,255,.72)', lineHeight: 1.5, maxWidth: 1380 }}>主線到 /ops-check 與 /ship-check 就結束了。以下安裝頁不佔課堂時間 ── 想把 MCP 接起來的同學,課後照著做,裝完打 /mcp 檢查。</div>
  </div></div>
);

// ── 官方頁佐證(真截圖)─────────────────────────────────
const McpChromeDoc: Page = () => (
  <RealShot img={mcpChromeShot} url="github.com/ChromeDevTools/chrome-devtools-mcp" eyebrow="段 4 · MCP 真實例子" title="Chrome DevTools MCP:這門課的網頁截圖,就是它拍的"
    caption="這是一個真的 MCP server(給 coding agent 用的 Chrome DevTools)。接上它,AI 就能自己開瀏覽器、點頁面、看 console、截圖 ── 本課的官方頁與 localhost 截圖正是用它拍的。MCP 不是魔法,是一條一條接上去的能力。" foot="U11 · 課4 · 段3" />
);

// ══════════ v3 重構:三個 MCP 變主線、前段壓縮 ══════════
const CoverMcp: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>U11 · 第 4 堂 / 共 4 堂 · 4 小時 · 零基礎</Eyebrow>
    <div className="ts-rise" style={{ marginTop: 34 }}><div style={{ fontSize: 100, fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.04 }}>幫 AI 接上<br />三條外部工具的線</div>
      <Lead>U3 你已經做過一次 AI 安全閘門(human-in-the-loop + token 邊界)。今天先把常提醒 AI 的規矩寫成 <B>Skills</B>,再進主線:<B>三個 MCP</B> ── 讓 AI 自己開瀏覽器驗收、查最新文件、記住整個專案。最後補一個自動化小範例、寫一篇技術 blog。</Lead></div>
  </div><div style={{ position: 'absolute', right: 110, bottom: 84, fontFamily: mono, fontSize: 21, color: C.faint }}>Skills · 三個 MCP · 自動化 · blog</div><Foot label="U11 · 課4" /></div>
);
const WhyMcp: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>先講為什麼</Eyebrow><Title size={52}>AI 很聰明,但它「看不到」你的工具</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 32 }}>
      <Analogy>AI 像一個很強的新同事,但他<B>沒有你公司的門禁卡</B>:進不了瀏覽器、看不到最新文件、也不知道你專案長怎樣。你只能一直複製貼上餵給它。</Analogy>
      <Lead>MCP 就是那張<B>門禁卡</B> ── 在你授權的範圍內,讓 AI 自己去讀。今天裝三張:看畫面、查文件、記專案。</Lead>
    </div>
  </div><Foot label="U11 · 課4 · 為什麼" /></div>
);
const RoadmapMcp: Page = () => {
  const items = [['段 1', 'Skills', '把常提醒 AI 的規矩,寫成固定指令', '0:15'], ['段 2', '三個 MCP(主線)', '看畫面 / 查文件 / 記專案,親手裝', '0:45'], ['段 3', '安全 + 自動化 + blog', '權限三問、自動產報表、技術紀錄', '2:45']];
  return (
    <div style={fill}><div style={pad}><Eyebrow>今天的路線 · 三段 + 結業</Eyebrow><Title>先把規矩收乾淨,主線放在三個 MCP</Title>
      <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22, marginTop: 46 }}>
        {items.map(([a, b, c, t], i) => <div key={i} style={{ background: i === 1 ? '#fbf3ee' : C.card, border: `${i === 1 ? 2 : 1}px solid ${i === 1 ? C.orange : C.line}`, borderRadius: 16, padding: '24px 22px' }}><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ fontFamily: mono, fontSize: 21, color: C.orange, fontWeight: 700 }}>{a}</span><span style={{ fontFamily: mono, fontSize: 18, color: C.faint }}>{t}</span></div><div style={{ fontSize: 27, fontWeight: 800, marginTop: 12, lineHeight: 1.25 }}>{b}</div><div style={{ fontSize: 22, color: C.muted, marginTop: 8 }}>{c}</div></div>)}
      </div>
      <div style={{ fontSize: 27, color: C.muted, marginTop: 40, lineHeight: 1.5 }}>段 2 是今天的主角:三個 MCP 一個一個裝、一個一個驗收。</div>
    </div><Foot label="U11 · 課4 · 路線" /></div>
  );
};
const SecAuto: Page = () => <Section no="1" title="把常提醒的事,寫成 Skills" time="0:15 - 0:45" sub="這三堂課你一直在提醒 AI 同一套規矩,與其每次重講,不如寫成一份固定指令,帶著走。" />;
const AutoDone: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 1 · 檢查點</Eyebrow><Title size={50}>Skills 這段,你手上有這些</Title>
    <div className="ts-rise" style={{ marginTop: 30 }}><Checkpoint items={['看得懂一份 Skill,知道它是 AI 的 SOP', '自建 /ops-check 與 /ship-check,回固定格式、不改檔']} /></div>
    <div style={{ marginTop: 20 }}><Harvest>規矩固定好了。接下來:讓 AI 能自己去「碰」外部工具 —— 這就是 MCP。</Harvest></div>
  </div><Foot label="U11 · 課4 · 段1" /></div>
);
const BreakMcp: Page = () => <BreakSlide note="回來,今天的主線:把三個 MCP 一個一個裝起來、一個一個驗收。" />;
const SecMcp: Page = () => <Section no="2" title="三個 MCP:幫 AI 接上外部工具" time="1:30 - 3:20" sub="今天的主線。每個 MCP 都:先看它解決什麼痛 → 一行裝起來 → 固定操作用一次 → /mcp 驗收 → 裝不起來的保底。學生親手裝三個。" />;
const Pain = ({ tag, title, pain, fix }: { tag: string; title: string; pain: any; fix: any }) => (
  <div style={fill}><div style={{ ...pad }}>
    <Eyebrow>段 2 · 痛一次 · {tag}</Eyebrow>
    <Title size={48}>{title}</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30, marginTop: 26, alignItems: 'start' }}>
      <div style={{ background: '#fff7f4', border: `1px solid #f3d0c2`, borderRadius: 16, padding: '24px 28px' }}><div style={{ fontFamily: mono, fontSize: 20, color: RED, fontWeight: 700, marginBottom: 10 }}>沒有這個 MCP 時</div><div style={{ fontSize: 29, lineHeight: 1.5 }}>{pain}</div></div>
      <div style={{ background: '#eef7f2', border: `1px solid #bfe6d4`, borderRadius: 16, padding: '24px 28px' }}><div style={{ fontFamily: mono, fontSize: 20, color: OK, fontWeight: 700, marginBottom: 10 }}>接上之後</div><div style={{ fontSize: 29, lineHeight: 1.5 }}>{fix}</div></div>
    </div>
  </div><Foot label="U11 · 課4 · 段2" /></div>
);
const PainChrome: Page = () => (
  <Pain tag="MCP 一 · chrome-devtools" title="AI 說「改好了」,你怎麼知道畫面對不對?"
    pain={<>AI 回你「已完成」,但你得<B>自己開瀏覽器、自己按 F12</B> 看有沒有錯,改一次看一次,很累。</>}
    fix={<>讓 AI <B>自己開 Chrome、看 console、截圖</B> 回報。本課那些 localhost 截圖,就是它拍的。</>} />
);
const McpChromeArtifact: Page = () => (
  <RealShot img={weblabHome} url="localhost:5180 · chrome-devtools MCP 截的" eyebrow="段 2 · chrome-devtools 產出" title="這張首頁截圖,就是 AI 透過 MCP 自己拍的"
    caption="接上 chrome-devtools MCP 後,對 AI 說『開 localhost:5180、看 console、截一張首頁』── 它就會回報 console 狀況並給你這張圖。驗收 web-lab 不用你自己截。" foot="U11 · 課4 · 段2" maxH={520} />
);
const PainContext7: Page = () => (
  <Pain tag="MCP 二 · context7" title="AI 憑「舊記憶」寫,結果裝不起來"
    pain={<>套件改版很快,AI 用<B>過時的 API</B> 寫給你,照著做卻一直報錯,查半天。</>}
    fix={<>句尾加 <Key>use context7</Key>,把<B>最新官方文件</B>餵給它,它照現在的用法回答。</>} />
);
const PainCodebase: Page = () => (
  <Pain tag="MCP 三 · codebase-memory" title="專案一大,AI 一檔一檔猜、還常改越界"
    pain={<>問「ShopConsole 和 shopLogic 怎麼互動?」它得一檔一檔翻、常常猜錯,改東西還<B>誤傷別的檔</B>。</>}
    fix={<>先 <Key>index_repository</Key> 把專案<B>索引成地圖</B>,架構、呼叫關係一問秒答。</>} />
);
const McpDone: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 2 · 檢查點</Eyebrow><Title size={50}>三個 MCP,你都裝起來了</Title>
    <div className="ts-rise" style={{ marginTop: 30 }}><Checkpoint items={['/mcp 列得出 chrome-devtools、context7、codebase-memory', 'chrome-devtools:AI 真的回報 console + 截圖', 'context7:答案有附文件出處', 'codebase-memory:架構問題答得出檔案關係']} /></div>
    <div style={{ marginTop: 20 }}><Harvest>MCP 不是魔法,是一條一條接上去的能力。裝越多,AI 能自己做的事越多。</Harvest></div>
  </div><Foot label="U11 · 課4 · 段2" /></div>
);
const SecSafe: Page = () => <Section no="3" title="用得安全,再把指令收成一張表" time="3:20 - 3:50" sub="MCP 讓 AI 能碰外部資料,方便,但權限要給得剛剛好。最後把內建與自建的 slash 分清楚。" />;
const RecapMcp: Page = () => {
  const pts = [['Skills', '把常提醒 AI 的規矩,寫成 /ops-check、/ship-check 這類固定指令。'], ['chrome-devtools', '讓 AI 自己開瀏覽器、看 console、截圖驗收。'], ['context7', '把最新官方文件餵給 AI,不再用過時 API。'], ['codebase-memory', '把專案索引成地圖,問架構秒答。'], ['自動化 + blog', '一個小腳本自動產生 report.json,再寫成技術 blog。']];
  return (
    <div style={fill}><div style={pad}><Eyebrow>這一堂我們學了這些</Eyebrow>
      <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 13, marginTop: 34, maxWidth: 1520 }}>
        {pts.map(([a, b], i) => <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 22 }}><span style={{ fontFamily: mono, fontSize: 30, color: C.orange, fontWeight: 800, lineHeight: 1.2 }}>{String(i + 1).padStart(2, '0')}</span><div><div style={{ fontSize: 31, fontWeight: 800 }}>{a}</div><div style={{ fontSize: 23, color: C.muted, marginTop: 3 }}>{b}</div></div></div>)}
      </div>
    </div><Foot label="U11 · 課4 · 收束" /></div>
  );
};
const AppendixFlaws: Page = () => (
  <div style={{ ...fill, background: C.ink, color: '#fff' }}><div style={pad}>
    <span style={{ fontFamily: mono, fontSize: 26, color: C.orange, letterSpacing: '.14em' }}>附錄 · 加碼</span>
    <div style={{ marginTop: 22 }}><Title size={78}>AI 走鐘時,三句話拉回來</Title></div>
    <div style={{ marginTop: 28, fontSize: 34, color: 'rgba(255,255,255,.72)', lineHeight: 1.5, maxWidth: 1380 }}>和 AI 處久了會遇到三個固定狀況:越改越偏、越補越亂、改 A 壞 B。認得它們,各用一句話就能拉回。時間夠就講,不夠留課後看。</div>
  </div></div>
);

const AstroBlog: Page = () => (
  <div style={fill}><div style={pad}>
    <Eyebrow>結業前 · 技術紀錄</Eyebrow>
    <div style={{ marginTop: 22 }}><Title size={62}>最後不是交一句「我用 AI 做了」<br />而是交一篇能被企業看懂的技術 blog</Title></div>
    <div className="ts-rise" style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 24, alignItems: 'start' }}>
      <PromptCard size={24} label="Astro blog 文章主題">{`我如何用 AI coding agent
接手並交付一個 BOBA TIDE 手搖飲控制台系統

必放:
1. 企業題目怎麼拆
2. 備料控制台 / 訂單看板 / LINE Flex 截圖
3. component、CSS、API payload、token 邊界
4. AGENTS.md / CLAUDE.md / Plan Mode
5. build、mock、DevTools、diff 驗收證據`}</PromptCard>
      <Checkpoint items={[
        '不要寫 AI 口號文,要寫技術決策。',
        '每張截圖都要說明驗收了什麼。',
        '把踩坑與限制寫清楚,企業才看得出你有頭腦。',
        '可放 GitHub Pages / Astro preview 連結。'
      ]} />
    </div>
  </div><Foot label="U11 · 課4 · Astro blog" /></div>
);

export const meta: SlideMeta = { title: 'U11 課4:Skills + MCP + 自動化 + Astro 技術紀錄', createdAt: '2026-07-04T00:00:00.000Z' };

export const notes: (string | undefined)[] = [
  '各位同學好,最後一堂。今天分三塊:先把常提醒 AI 的規矩寫成 Skills,接著主線 —— 三個 MCP,讓 AI 自己開瀏覽器驗收、查最新文件、記住整個專案,最後補一個自動化小範例、寫一篇技術 blog。',
  '先回顧走到哪。課一一鍵啟動、看過 BOBA TIDE 成品、改首頁標題存檔;課二 AGENTS/CLAUDE + planner 人審 implementer;課三訂單看板與 LINE Flex mock、ReAct 修錯。今天把常提醒的規矩寫成工具,再幫 AI 接上更多外部能力。',
  '看路線。三段:段一 Skills(把規矩寫成固定指令)、段二三個 MCP(今天主線、親手裝)、段三用得安全 + 自動化範例 + blog。段二是主角,三個 MCP 一個一個裝、一個一個驗收。',
  '段一,把常提醒 AI 的事寫成 Skills。這三堂課你一直在提醒 AI 同一套規矩,與其每次重講,不如寫成一份固定指令帶著走。',
  '把這些叮嚀寫成 Skill。打個比方 Skill 像給新人的工作守則,貼牆上每個人照做,你不用每次重講。放 .claude/skills/名字/SKILL.md,frontmatter 寫 name 與 description,打 /名字 呼叫,相關情境也會自動觸發。',
  '動手一:建 .claude/commands/ops-check.md,檢查自動化腳本是否符合合約、Flex 是否仍 mock。打 /ops-check,它回四點且不改檔。',
  '動手二:建 .claude/commands/ship-check.md,把交付前四問封裝起來。打 /ship-check,它回是否可交付、最高風險、commit 訊息建議、要退先退哪個檔,一樣不改檔。',
  '段一檢查點:看得懂一份 Skill、知道它是 AI 的 SOP;自建的兩個指令回固定格式、不改檔。規矩固定好了,接下來讓 AI 能自己碰外部工具。',
  '休息十分鐘。回來進今天的主線:三個 MCP,一個一個裝、一個一個驗收。',
  '段二,三個 MCP,今天的主角。每個都同一套節奏:先看它解決什麼痛 → 一行裝起來 → 固定操作用一次 → /mcp 驗收 → 裝不起來的保底。學生親手裝三個。',
  'MCP 是什麼?沒有 MCP 你要自己複製資料給 AI;有了 MCP,AI 可以在你授權範圍內自己去工具裡讀,像幫它接上一條條安全的線。右邊圖:AI ⇄ MCP ⇄ 瀏覽器 / 文件 / 程式碼庫。',
  '三台的裝法都一樣、都一行:chrome-devtools 與 context7 用 claude mcp add(starter 的 .mcp.json 已附,開資料夾會問要不要啟用);codebase-memory 用官方安裝腳本,會自動幫 agent 設定。裝完打 /mcp 應看到三台。',
  '痛一次,第一台。AI 回你「改好了」,但你怎麼知道畫面對不對?你得自己開瀏覽器、自己按 F12,改一次看一次很累。接上 chrome-devtools MCP,就讓 AI 自己開 Chrome、看 console、截圖回報。',
  'Chrome DevTools MCP 七要素卡:用途驗收 web-lab、一行安裝、固定操作(先 npm run dev 再請 AI 開 localhost:5180 截圖)、固定 prompt、預期結果、/mcp 驗收、連不上就自己 F12 保底。',
  '這張首頁截圖,就是 AI 透過 chrome-devtools MCP 自己拍的。對它說開 localhost:5180、看 console、截一張首頁,它就回報 console 狀況並給你這張圖。驗收 web-lab 不用你自己截。',
  '這是官方頁面真截圖:chrome-devtools-mcp 是一個真的 MCP server。接上它 AI 就能自己開瀏覽器、看 console、截圖。本課的官方頁與 localhost 截圖就是用它拍的。MCP 不是魔法,是一條一條接上去的能力。',
  '痛一次,第二台。套件改版很快,AI 憑舊記憶用過時 API 寫給你,照著做一直報錯查半天。句尾加 use context7,把最新官方文件餵給它,它就照現在的用法回答。',
  'Context7 MCP 七要素卡:用途餵最新文件、一行安裝(免費金鑰選填)、固定操作(問套件用法句尾加 use context7)、固定 prompt、預期結果附文件出處、/mcp 驗收、被限流就看官網或換更強模型保底。',
  '痛一次,第三台。專案一大,問「ShopConsole 被誰用?」AI 得一檔一檔翻、常猜錯,改東西還誤傷別的檔。先 index_repository 把專案索引成地圖,架構、呼叫關係一問秒答。',
  'Codebase Memory MCP 七要素卡:把程式碼庫索引成知識圖譜,查架構、呼叫關係、死碼不用逐檔翻;全本地、免 API key。固定操作先 index_repository 再問架構;裝不起來用 /init 或看 README 保底。',
  '段二檢查點:/mcp 列得出三台;chrome-devtools 真的回報 console 加截圖、context7 答案附出處、codebase-memory 架構問題答得出檔案關係。MCP 不是魔法,是一條一條接上去的能力,裝越多 AI 能自己做的越多。',
  '段三,用得安全再收尾。MCP 讓 AI 能碰外部資料很方便,但權限要給得剛剛好。',
  'MCP 權限三問,裝之前先問:它能讀到什麼、能不能寫入、會不會碰到正式資料。能改的權限要更小心,別讓它直接動真實營運資料庫。',
  '把 slash 收成一張表:內建的有 /clear、/compact、/review、/status、/model、/permissions、/mcp;自建的放 .claude/commands,starter 內建五個,/ops-check 與 /ship-check 是你今天親手建的。Plan 是模式不是指令。',
  '段三檢查點:看得懂一份 Skill、親手建好 /ops-check 與 /ship-check、說得出 MCP 權限三問、分得清內建與自建 slash。',
  '再多一個自動化例子。這個小腳本依序做三件事:檢查庫存 CSV、判斷風險、寫成補貨建議,自動產出跟 U3 一模一樣格式的 report.json,不用你手動填。',
  '結業前,把成果收成 Astro 技術 blog。不是寫「我用 AI 做了」,而是寫企業題目怎麼拆、你改了哪些功能、component/CSS/API/token 邊界、AGENTS/CLAUDE/Plan Mode 如何限制 AI,以及 build、mock、DevTools、diff 這些驗收證據。',
  '最後,結業。四堂課走完了,把你真正帶走的東西一次盤點。',
  '整門課最重要的一句:會用 AI 一次不稀奇,能讓 AI 每次照流程做才是真本事。你學的從來不是某個工具,是一套讓 AI 穩定幫你做事的流程。',
  '看一下你親手做出來的成果:一鍵啟動、BOBA TIDE 首頁、備料控制台、訂單看板動態畫面、LINE Flex 推播 mock 與 blocked、ReAct 修錯、自建 /ops-check 與 /ship-check、三個 MCP,最後還有 Astro 技術 blog。',
  '這一堂學了這些:Skills(把規矩寫成固定指令)、三個 MCP(chrome-devtools 看畫面、context7 查文件、codebase-memory 記專案)、自動化小範例,以及一篇技術 blog。',
  '整門課四堂串成一條線:課一進得了專案、課二管得住 AI、課三接上訂單看板與 LINE OA Flex、課四把規矩寫成 Skills 再幫 AI 接上三個 MCP,並用 blog 說清楚成果。AI 很會做事但它不是老闆,你已經學會當 AI 的主管。',
  '結業。你不再只是會問 AI,你會管理 AI 做事。把今天的 /ops-check、/ship-check 與三個 MCP 留著,下次接新專案照同一套流程走就好。四堂課辛苦了,我們下一個模組見。',
  '附錄加碼(時間夠再講):和 AI 處久了會遇到三個固定狀況,認得它們各用一句話拉回。',
  '三個毛病:Context Drift 越改越偏、Prompt Debt 越補越亂、Regression 改 A 壞 B。不是壞掉,是長時間互動的自然現象,重點是有沒有一句話拉回來。',
  '三個毛病三句話:走鐘了「請回到原本任務,只處理這件事」、變亂了「請先整理目前狀態,不要改」、怕改壞「請列出需要回歸檢查的項目」。',
];

export default [
  CoverMcp, Recap0, RoadmapMcp,
  // 段 1:Skills(把常提醒的規矩寫成固定指令)
  SecAuto, SkillHead, OpsCheck, ShipCheck, AutoDone,
  BreakMcp,
  // 段 2:三個 MCP(主線,學生動手裝)
  SecMcp, McpHead, McpInstall,
  PainChrome, McpChrome, McpChromeArtifact, McpChromeDoc,
  PainContext7, McpContext7,
  PainCodebase, McpCodebaseMemory,
  McpDone,
  // 段 3:用得安全 + slash 收尾
  SecSafe, McpSafety, SlashWrap, ToolsDone,
  // 再一個自動化範例 + blog
  OpsAgentFlow, AstroBlog,
  // 結業
  Sec5, Punchline, NineOutcomes, RecapMcp, CourseArc, End,
  // 附錄 · 加碼:AI 走鐘三句話拉回
  AppendixFlaws, FlawsIntro, FlawDone,
] satisfies Page[];
