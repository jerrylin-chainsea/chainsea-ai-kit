import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';
import claudeDocsShot from './assets/claude-vscode-docs.png';
import claudeMarketShot from './assets/claude-marketplace.png';
import modelsShot from './assets/models-overview.png';
import slashShot from './assets/claude-slash-docs.png';

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
      <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>{['@data.js', '@App.jsx'].map((t, i) => <span key={i} style={{ fontFamily: mono, fontSize: 15, color: '#9cdcfe', background: '#1e1e1e', border: '1px solid #3a3a3a', borderRadius: 6, padding: '2px 8px' }}>{t}</span>)}</div>
      <div style={{ fontFamily: mono, fontSize: 17, color: '#7c828c' }}>{placeholder}</div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 16px', background: '#181818', borderTop: '1px solid #2b2b2b' }}>
      <span style={{ width: 9, height: 9, borderRadius: '50%', background: modeColor(mode) }} />
      <span style={{ fontFamily: mono, fontSize: 16, color: modeColor(mode), fontWeight: 700 }}>{modeLabel(mode)}</span>
      <span style={{ marginLeft: 'auto', fontFamily: mono, fontSize: 15, color: '#6b7280' }}>shift+tab 切換</span>
    </div>
  </div>
);

// shift+tab 模式循環
const ModePill = ({ name, sub, color, active }: { name: string; sub: string; color: string; active?: boolean }) => (
  <div style={{ background: active ? color : '#fff', color: active ? '#fff' : C.ink, border: `2px solid ${color}`, borderRadius: 14, padding: '16px 18px', minWidth: 200, textAlign: 'center' }}>
    <div style={{ fontFamily: mono, fontSize: 22, fontWeight: 800 }}>{name}</div>
    <div style={{ fontSize: 18, marginTop: 4, color: active ? 'rgba(255,255,255,0.9)' : C.muted }}>{sub}</div>
  </div>
);
const ModeCycle = ({ active = 'plan' }: { active?: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
    <ModePill name="Default" sub="每次問你" color={C.muted} active={active === 'default'} />
    <div style={{ color: C.faint, fontFamily: mono, fontSize: 18 }}>shift+tab →</div>
    <ModePill name="Auto-Accept" sub="直接改不問" color={OK} active={active === 'auto'} />
    <div style={{ color: C.faint, fontFamily: mono, fontSize: 18 }}>shift+tab →</div>
    <ModePill name="Plan" sub="只計畫不改" color={PUR} active={active === 'plan'} />
  </div>
);

// 模型選單
const ModelPicker = () => (
  <div style={{ background: '#1e1e1e', borderRadius: 12, overflow: 'hidden', border: '1px solid #333', boxShadow: '0 18px 50px -26px rgba(0,0,0,0.5)', width: 520 }}>
    <div style={{ padding: '12px 18px', background: '#2a2a2a', fontFamily: mono, fontSize: 17, color: '#cdd3df', borderBottom: '1px solid #1b1b1b' }}>選擇模型 <span style={{ color: '#7c828c' }}>(/model)</span></div>
    {[['Opus', '最聰明、最會想 ── 難題、要計畫時用', true], ['Sonnet', '快、省額度 ── 日常小修改夠用', false]].map(([n, d, sel]: any, i) => (
      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', borderBottom: i === 0 ? '1px solid #2b2b2b' : 'none', background: sel ? '#2d2a22' : 'transparent' }}>
        <span style={{ color: sel ? C.orange : '#3a3a3a', fontSize: 20 }}>{sel ? '◉' : '○'}</span>
        <div><div style={{ fontFamily: mono, fontSize: 21, color: '#e8eaed', fontWeight: 700 }}>Claude {n}</div><div style={{ fontSize: 17, color: '#9aa0a6', marginTop: 2 }}>{d}</div></div>
      </div>
    ))}
    <div style={{ padding: '10px 18px', background: '#181818', fontFamily: mono, fontSize: 14, color: '#6b7280' }}>版本號(如 Opus 4.x / Sonnet 4.x)依你安裝顯示,選新的就好</div>
  </div>
);

// Vibe 分工
const SplitCol = ({ who, color, bg, items }: { who: string; color: string; bg: string; items: string[] }) => (
  <div style={{ flex: 1, background: bg, border: `2px solid ${color}`, borderRadius: 18, padding: '26px 30px' }}>
    <div style={{ fontSize: 32, fontWeight: 800, color }}>{who}</div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 }}>{items.map((t, i) => <div key={i} style={{ fontSize: 26, lineHeight: 1.35 }}>・{t}</div>)}</div>
  </div>
);

// 七步流程
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
    <FlowStep n={1} label="讀專案" kind="ai" /><Arrow />
    <FlowStep n={2} label="說它看到啥" kind="ai" /><Arrow />
    <FlowStep n={3} label="Plan 計畫" kind="ai" /><Arrow />
    <FlowStep n={4} label="你確認" kind="you" /><Arrow />
    <FlowStep n={5} label="切 Edit 改" kind="do" /><Arrow />
    <FlowStep n={6} label="你驗收" kind="you" /><Arrow />
    <FlowStep n={7} label="git diff" kind="do" />
  </div>
);

// ══════════ 開場 ══════════
const Cover: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>U11 · 第 2 堂 / 共 4 堂 · 4 小時 · 零基礎</Eyebrow>
    <div className="ts-rise" style={{ marginTop: 34 }}><div style={{ fontSize: 104, fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.04 }}>不要讓 AI<br />一開始就動手</div>
      <Lead>U11 主線:<B>從會問 AI,變成會指揮 AI 完成一個專案</B>。今天在 VS Code 裝上 AI 助手,學先讀、再計畫、再修改,並補官方 slash commands。</Lead></div>
  </div><div style={{ position: 'absolute', right: 110, bottom: 84, fontFamily: mono, fontSize: 21, color: C.faint }}>AI 專案操作基礎 · Claude Code 插件 · 讀→計畫→改</div><Foot label="U11 · 課2" /></div>
);
const Recap0: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>先接上一堂</Eyebrow><Title size={54}>你已經會「打開、跑、改、存檔」</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 34 }}>
      <Lead>上一堂你打開了 web-lab、跑起網站、把店名改成自己的、還 git commit 存了一次。那 ── 是不是可以開始叫 AI 幫你改了?</Lead>
      <Think q={<>「會跑會改了,直接叫 AI 改不就好?」</>} a={<>可以叫,但<B>不能一上來就讓它動手</B>。今天就示範:不先約束,AI 會幫你「幫到出事」。</>} />
    </div>
  </div><Foot label="U11 · 課2 · 接續" /></div>
);
const Why: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>先講為什麼</Eyebrow><Title size={54}>你說「改漂亮一點」,它會怎樣?</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 30 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, maxWidth: 1540 }}>
        {['改了顏色', '改了版面', '加了動畫', '順便加登入', '甚至重構整個專案'].map((t, i) => <span key={i} style={{ background: '#fff', border: `1px solid ${C.line}`, borderRadius: 999, padding: '12px 22px', fontSize: 26, color: C.ink }}>{t}</span>)}
      </div>
      <Analogy>你本來只想換一個標題。結果它像<B>實習生第一天上班</B> ── 你說「整理一下店面」,他直接把整間店重新裝潢了。熱心,但失控。</Analogy>
      <Harvest>所以方法出現了:先讀專案 → 再計畫 → 再修改。</Harvest>
    </div>
  </div><Foot label="U11 · 課2 · 為什麼" /></div>
);
const Method: Page = () => {
  const steps = [['先讀', '叫 AI 先看懂專案,先別碰'], ['再計畫', '叫它說「打算怎麼改」,你看過'], ['再修改', '同意後才動手,而且只改該改的']];
  return (
    <div style={fill}><div style={pad}><Eyebrow>今天的核心方法 · 三步</Eyebrow><Title>把「叫 AI 改」拆成三步</Title>
      <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 50 }}>
        {steps.map(([a, b], i) => <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '28px 26px' }}><div style={{ fontFamily: mono, fontSize: 30, color: C.orange, fontWeight: 800 }}>0{i + 1}</div><div style={{ fontSize: 36, fontWeight: 800, marginTop: 10 }}>{a}</div><div style={{ fontSize: 26, color: C.muted, marginTop: 8, lineHeight: 1.45 }}>{b}</div></div>)}
      </div>
      <div style={{ fontSize: 28, color: C.muted, marginTop: 40, lineHeight: 1.5 }}>這三步,等下會對應到 Claude Code 的<B>三個模式</B> ── 工具天生就為這個流程設計。</div>
    </div><Foot label="U11 · 課2 · 方法" /></div>
  );
};
const Roadmap: Page = () => {
  const items = [['段 1', '裝 + 認識插件', 'Claude Code 面板', '0:15'], ['段 2', '模式 + 模型', '兩個關鍵旋鈕', '1:10'], ['段 3', 'Vibe + 讀專案', '先讀不先改', '2:20'], ['段 4', 'Plan + 護欄', '改一次給你看', '3:05']];
  return (
    <div style={fill}><div style={pad}><Eyebrow>今天的路線 · 四段 + 收束</Eyebrow><Title>從「裝插件」到「安全改一次」</Title>
      <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 22, marginTop: 46 }}>
        {items.map(([a, b, c, t], i) => <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '24px 22px' }}><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ fontFamily: mono, fontSize: 21, color: C.orange, fontWeight: 700 }}>{a}</span><span style={{ fontFamily: mono, fontSize: 18, color: C.faint }}>{t}</span></div><div style={{ fontSize: 27, fontWeight: 800, marginTop: 12, lineHeight: 1.25 }}>{b}</div><div style={{ fontSize: 22, color: C.muted, marginTop: 8 }}>{c}</div></div>)}
      </div>
      <div style={{ fontSize: 27, color: C.muted, marginTop: 40, lineHeight: 1.5 }}>中間休息一次。今天 AI 我們<B>用插件面板</B>操作,不用打終端機指令。</div>
    </div><Foot label="U11 · 課2 · 路線" /></div>
  );
};

const WebVsProject: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>先補一個重要分工</Eyebrow><Title size={50}>網頁版 AI 跟專案型 AI,不是同一種用法</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 36 }}>
      <div style={{ background: '#eef4ff', border: `2px solid ${BLUE}`, borderRadius: 16, padding: '26px 30px' }}><div style={{ fontSize: 32, fontWeight: 800, color: BLUE }}>ChatGPT / Claude 網頁版</div><div style={{ fontSize: 26, lineHeight: 1.5, marginTop: 14 }}>適合問概念、產生片段、解釋錯誤、整理 Prompt。<B>它看不到你整個專案,除非你貼給它。</B></div></div>
      <div style={{ background: '#eaf6f0', border: `2px solid ${OK}`, borderRadius: 16, padding: '26px 30px' }}><div style={{ fontSize: 32, fontWeight: 800, color: OK }}>Claude Code / Codex</div><div style={{ fontSize: 26, lineHeight: 1.5, marginTop: 14 }}>適合讀整個專案、找檔案、修改檔案、跑指令、看 diff、debug。<B>它坐在專案裡工作。</B></div></div>
    </div>
    <div style={{ marginTop: 26 }}><Harvest>問想法用網頁版;要動專案,用 Claude Code 或 Codex。</Harvest></div>
  </div><Foot label="U11 · 課2 · 對照" /></div>
);
const SameTaskWeb: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>同一任務 · 網頁版做法</Eyebrow><Title size={48}>任務:把網站標語改得更清楚</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 26, maxWidth: 1520 }}>
      <Lead>在 ChatGPT / Claude 網頁版,不要叫它「直接幫我改專案」。它沒有你的檔案樹。你要它做的是<B>幫你想、幫你整理</B>。</Lead>
      <PromptCard size={25} label="貼到網頁版 AI">{`我有一個小店網站,目前標語太模糊。
請幫我產生 5 個更清楚的中文標語,
每個不超過 18 個字,
風格要像新手 AI 專案練習作品。`}</PromptCard>
      <SuccessRow>產出的是「候選文字」或「Prompt 草稿」,不是已經改好的專案。</SuccessRow>
    </div>
  </div><Foot label="U11 · 課2 · 網頁版" /></div>
);
const SameTaskAgent: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>同一任務 · 專案型做法</Eyebrow><Title size={48}>Claude Code / Codex 會真的進專案找檔案</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 26, maxWidth: 1520 }}>
      <Lead>在專案裡,你可以要求它先讀、找標語在哪、提出計畫。通過後才讓它改檔。</Lead>
      <PromptCard size={24}>{`請先進入只計畫模式,不要改檔。
讀這個專案,找出網站標語在哪個檔案、哪一段。
回答:
1. 檔案路徑
2. 目前標語
3. 建議改成什麼
4. 驗收方式`}</PromptCard>
      <SuccessRow>它應該回報檔案位置,而不是只給你一段通用建議。</SuccessRow>
    </div>
  </div><Foot label="U11 · 課2 · 專案型" /></div>
);
const BoundaryQuiz: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>判斷題 · 這題該用哪個?</Eyebrow><Title size={50}>老師問,全班喊答案</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 13, marginTop: 34, maxWidth: 1540 }}>
      {[
        ['「解釋 npm run dev 是什麼」', '網頁版也可以'],
        ['「幫我找標語在哪個檔案」', 'Claude Code / Codex'],
        ['「把錯誤訊息翻成白話」', '網頁版也可以'],
        ['「修 run.py 並跑 python run.py 驗收」', 'Claude Code / Codex'],
        ['「整理一段好 Prompt」', '網頁版也可以'],
      ].map(([a, b], i) => <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 20, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 12, padding: '17px 24px' }}><div style={{ fontSize: 28 }}>{a}</div><div style={{ fontSize: 25, color: i === 1 || i === 3 ? OK : BLUE, fontWeight: 800 }}>{b}</div></div>)}
    </div>
  </div><Foot label="U11 · 課2 · 判斷題" /></div>
);
const HandoffPrompt: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>老師控場流程</Eyebrow><Title size={48}>網頁版可以先幫你整理,但最後要回專案驗收</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 26, maxWidth: 1520 }}>
      <Lead>安全流程是:網頁版整理想法 → 專案型工具找檔/改檔 → 你用瀏覽器和 git diff 驗收。</Lead>
      <PromptCard size={24} label="把網頁版產物帶回專案型 AI">{`請把標語改成「靠海的手作選物,我的第一個 AI 小店」。
限制:
- 先找出標語在哪個檔
- 只改標語文字
- 不要改版面、顏色、套件
- 完成後告訴我怎麼用瀏覽器和 git diff 驗收`}</PromptCard>
      <Harvest>網頁版給方向;專案型工具做事;git diff 收尾。</Harvest>
    </div>
  </div><Foot label="U11 · 課2 · 流程" /></div>
);

// ══════════ 段 1:裝 + 認識插件 ══════════
const Sec1: Page = () => <Section no="1" title="裝上、打開 Claude Code 插件" time="0:15 - 1:10" sub="上一堂你看過「擴充功能」在哪。今天就在那裡裝一個 AI 助手,並認識它的面板。" />;
const WhatIsCC: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 1 · 開場</Eyebrow><Title size={54}>Claude Code 是什麼?</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 32 }}>
      <Lead>Claude Code 是一個會讀你整個專案、用講的就幫你改檔案的 AI 助手。它可以在終端機跑,<B>也可以裝成 VS Code 的插件、變成一個面板</B>。</Lead>
      <Analogy>就像找了一個<B>很厲害的工讀生坐在你旁邊</B>:你用講的,它幫你做。今天我們讓它坐進 VS Code 的側邊欄。</Analogy>
      <Harvest>今天用「插件面板」版,對零基礎最友善 ── 看得到、用點的。</Harvest>
    </div>
  </div><Foot label="U11 · 課2 · 段1" /></div>
);
const CCDocs: Page = () => (
  <RealShot img={claudeDocsShot} url="code.claude.com/docs" eyebrow="段 1 · 官方說明" title="官方文件:在 VS Code 裡用 Claude Code"
    caption="這是官方文件頁。它說明:裝上 Claude Code 擴充後,可在 VS Code 裡用,有行內 diff、plan mode、快捷鍵 ── 這些今天都會用到。" foot="U11 · 課2 · 段1" />
);
const CCMarket: Page = () => (
  <RealShot img={claudeMarketShot} url="marketplace.visualstudio.com" eyebrow="段 1 · 從哪裡裝" title="VS Code Marketplace 上的 Claude Code"
    caption="這是擴充功能商店裡的「Claude Code for VS Code」。等下我們在 VS Code 裡搜尋同一個名字、按 Install 就能裝。" foot="U11 · 課2 · 段1" />
);
const Install: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 1 · 動手 1 · 裝插件</Eyebrow><Title size={48}>在 VS Code 裡裝 Claude Code</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 26, maxWidth: 1500 }}>
      <Atom n={1} act={<>點左邊活動列的<B>擴充功能</B>圖示(四個方塊)。</>} see="左邊打開擴充功能面板。" />
      <Atom n={2} act={<>搜尋框打 <Key>Claude Code</Key>,找到 Anthropic 出的那個。</>} see="出現 Claude Code 的卡片。" />
      <Atom n={3} act={<>按 <Key>Install</Key>,等它裝好。</>} see="按鈕變成「已安裝 / Uninstall」。" />
    </div>
    <div style={{ marginTop: 24 }}><SuccessRow>右邊或左邊多出一個 Claude Code 的圖示/面板 = 裝好了。</SuccessRow></div>
  </div><Foot label="U11 · 課2 · 段1" /></div>
);
const OpenPanel: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 1 · 動手 2 · 開面板 + 登入</Eyebrow><Title size={48}>打開面板、登入你的帳號</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 26, maxWidth: 1500 }}>
      <Atom n={1} act={<>點剛剛多出來的 <B>Claude Code 圖示</B>,把面板打開。</>} see="側邊出現一個聊天面板。" />
      <Atom n={2} act={<>第一次會請你<B>登入 / 授權</B>,跟著畫面按 Sign in、Authorize。</>} see="登入完,面板可以打字了。" />
      <Atom n={3} act={<>點一下最下面的<B>輸入框</B>。</>} see="游標在閃,可以輸入。" />
    </div>
    <div style={{ marginTop: 24 }}><SuccessRow>面板能打字了 = 準備好了。先別急著叫它做事。</SuccessRow></div>
  </div><Foot label="U11 · 課2 · 段1" /></div>
);
const PanelTour: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '600px 1fr', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise"><ClaudePanel mode="default" model="Opus" convo={[{ who: 'user', text: '哈囉' }, { who: 'ai', text: '嗨!需要我做什麼?' }]} /></div>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div><Eyebrow>段 1 · 面板導覽</Eyebrow><Title size={42}>認得面板五個地方</Title></div>
      {[['上面', '插件名稱 + 右邊的「模型」標籤'], ['中間', '對話:你問、它答'], ['輸入框上方', '@ 帶進來的檔案(context)'], ['輸入框', '打字、貼 prompt 的地方'], ['最底部', '模式指示器(plan / auto / default)']].map(([a, b], i) => (
        <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}><span style={{ fontFamily: mono, fontSize: 18, color: C.orange, fontWeight: 700, minWidth: 110 }}>{a}</span><span style={{ fontSize: 23 }}>{b}</span></div>
      ))}
    </div>
  </div><Foot label="U11 · 課2 · 段1" /></div>
);
const PanelAt: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 1 · 一個超好用的功能 · @</Eyebrow><Title size={50}>用 @ 把檔案「指給」AI 看</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 30 }}>
      <Lead>在輸入框打 <Key>@</Key>,會跳出檔案清單,選一個(例如 <Key>@data.js</Key>),AI 就會<B>專心看那個檔</B>。比你整段貼上去乾淨多了。</Lead>
      <Analogy>就像跟工讀生說話時,<B>把那份文件直接放到他桌上</B>:「看這個」,而不是用念的把整份念給他聽。</Analogy>
      <Harvest>要 AI 看哪個檔,就 @ 它。要它看選取的幾行,先選起來再問。</Harvest>
    </div>
  </div><Foot label="U11 · 課2 · 段1" /></div>
);
const CCPit: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 1 · 卡住了?</Eyebrow><Title size={50}>裝 / 登入常見狀況</Title>
    <div className="ts-rise" style={{ marginTop: 32, maxWidth: 1500 }}><Pitfall items={[['搜尋不到插件:', '確認名字打對(Claude Code),或網路有沒有通。'], ['登入卡住、轉圈圈:', '它會開瀏覽器讓你授權,授權完回到 VS Code 等幾秒。'], ['面板找不到:', '看右側欄、或最左活動列有沒有新圖示;再不行重開 VS Code。']]} /></div>
    <div style={{ marginTop: 22 }}><Checkpoint items={['Claude Code 插件已安裝', '面板打得開、登入完成、能打字']} /></div>
  </div><Foot label="U11 · 課2 · 段1" /></div>
);

// ══════════ 段 2:模式 + 模型 ══════════
const Sec2: Page = () => <Section no="2" title="兩個關鍵旋鈕:模式 + 模型" time="1:10 - 2:20" sub="這是今天最重要的一段。學會這兩個旋鈕,你就能控制 AI「能動多少」「用多強的腦」。" />;
const ModesHead: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 2 · 旋鈕一 · 模式</Eyebrow><Title size={52}>模式 = 你給 AI 多少「動手權」</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 32 }}>
      <Lead>Claude Code 有三個模式,差別只有一件事:<B>它能不能、要不要先問你,就直接改檔案</B>。</Lead>
      <Analogy>像開車的<B>檔位</B>:同一台車,你換個檔,它的「衝勁」就不一樣。模式就是 AI 的檔位。</Analogy>
    </div>
  </div><Foot label="U11 · 課2 · 段2" /></div>
);
const ModeCyclePage: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 2 · 三個模式 · 用 shift+tab 循環</Eyebrow><Title size={46}>按一次 shift+tab,換一個模式</Title>
    <div className="ts-rise" style={{ marginTop: 44 }}><ModeCycle active="plan" /></div>
    <div style={{ fontSize: 26, color: C.muted, marginTop: 44, lineHeight: 1.5, textAlign: 'center' }}>在面板裡按 <Key>shift</Key>+<Key>tab</Key>,底部的模式指示器就跟著換。一直按會繞一圈回到原點。</div>
  </div><Foot label="U11 · 課2 · 段2" /></div>
);
const ModeDefault: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 560px', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div><Eyebrow>段 2 · 模式 A</Eyebrow><Title size={50}>Default:每次都問你</Title></div>
      <Lead>AI 要改任何檔案<B>之前,都先停下來問你「可以嗎?」</B>。最安全、最慢。新手預設就用這個。</Lead>
      <Harvest>不確定的時候,留在 Default 最安全。</Harvest>
    </div>
    <div className="ts-rise"><ClaudePanel mode="default" model="Opus" convo={[{ who: 'ai', text: '我想修改 data.js,可以嗎?[是/否]' }]} /></div>
  </div><Foot label="U11 · 課2 · 段2" /></div>
);
const ModeAuto: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 560px', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div><Eyebrow>段 2 · 模式 B</Eyebrow><Title size={48}>Auto-Accept Edits:直接改</Title></div>
      <Lead>AI 改檔案<B>不再每次問</B>,直接動手,速度快。適合「你已經很清楚要做什麼」的重複小事。</Lead>
      <Think q={<>「那不就放生它了?」</>} a={<>它只自動<B>改檔</B>;其他危險動作(像跑指令)還是會問你。但新手還是先少用。</>} />
    </div>
    <div className="ts-rise"><ClaudePanel mode="auto" model="Sonnet" convo={[{ who: 'ai', text: '已直接修改 data.js ✓(未詢問)' }]} /></div>
  </div><Foot label="U11 · 課2 · 段2" /></div>
);
const ModePlan: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 560px', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div><Eyebrow>段 2 · 模式 C · 今天主角</Eyebrow><Title size={52}>Plan:只計畫,不改</Title></div>
      <Lead>AI <B>完全不准動檔案</B>,只能先讀、先想、先說「我打算這樣改」。你看過、點頭,才換模式讓它真的動手。</Lead>
      <Harvest>Plan mode 就是「先讀、再計畫」這兩步的開關。今天的核心。</Harvest>
    </div>
    <div className="ts-rise"><ClaudePanel mode="plan" model="Opus" convo={[{ who: 'user', text: '請先讀專案,不要改' }, { who: 'ai', text: '【計畫】我會改 data.js 的標語…(未動任何檔)' }]} /></div>
  </div><Foot label="U11 · 課2 · 段2" /></div>
);
const ModeHow: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 2 · 怎麼切模式</Eyebrow><Title size={50}>三種切法,記一種就好</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 34, maxWidth: 1500 }}>
      {[['按快捷鍵', <>在面板裡按 <Key>shift</Key>+<Key>tab</Key> 循環切換</>], ['點指示器', '用滑鼠點面板底部的模式字樣,選一個'], ['打指令', <>在輸入框打 <Key>/plan</Key> 直接進 Plan mode</>]].map(([a, b], i) => (
        <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '18px 26px' }}><span style={{ flexShrink: 0, width: 40, height: 40, borderRadius: '50%', background: C.orange, color: '#fff', display: 'grid', placeContent: 'center', fontWeight: 800, fontSize: 22 }}>{i + 1}</span><div><div style={{ fontSize: 28, fontWeight: 800 }}>{a}</div><div style={{ fontSize: 25, color: C.muted, marginTop: 2 }}>{b}</div></div></div>
      ))}
    </div>
  </div><Foot label="U11 · 課2 · 段2" /></div>
);
const ModePit: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 2 · 卡住了?</Eyebrow><Title size={50}>shift+tab 沒切到 Plan?</Title>
    <div className="ts-rise" style={{ marginTop: 32, maxWidth: 1500 }}><Pitfall items={[['Windows 上 shift+tab 只在兩個模式跳:', '已知狀況。改用 /plan 指令,或直接點面板底部的模式字樣來選。'], ['不確定現在哪個模式:', '看面板最底部那行字 ── 它永遠寫著目前模式。'], ['怕它亂改:', '先確定底部寫著 plan mode 再送 prompt,就一定不會動到檔。']]} /></div>
    <div style={{ marginTop: 22 }}><Checkpoint items={['會用 shift+tab 或 /plan 切到 Plan mode', '看得懂面板底部現在是哪個模式']} /></div>
  </div><Foot label="U11 · 課2 · 段2" /></div>
);
const ModelHead: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 2 · 旋鈕二 · 模型</Eyebrow><Title size={52}>模型 = 你讓 AI 用「多強的腦」</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 32 }}>
      <Lead>同一個 Claude Code,可以選不同「模型」。最常見兩種:<O>Opus</O>(最聰明、較慢)和 <O>Sonnet</O>(快、省)。</Lead>
      <Analogy>像找人幫忙:<B>Opus 是資深老師傅</B>,難題交給他;<B>Sonnet 是俐落的熟手</B>,日常小事又快又好。</Analogy>
    </div>
  </div><Foot label="U11 · 課2 · 段2" /></div>
);
const ModelPick: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 560px', gap: 50, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div><Eyebrow>段 2 · 模型選單</Eyebrow><Title size={46}>怎麼換模型</Title></div>
      <Atom n={1} act={<>點面板上面的<B>模型標籤</B>,或在輸入框打 <Key>/model</Key>。</>} see="跳出一個模型清單。" />
      <Atom n={2} act={<>選 <B>Opus</B> 或 <B>Sonnet</B>(版本選最新的就好)。</>} see="上面的模型標籤跟著變。" />
    </div>
    <div className="ts-rise"><ModelPicker /></div>
  </div><Foot label="U11 · 課2 · 段2" /></div>
);
const ModelWhich: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 2 · 何時用哪個</Eyebrow><Title size={50}>一張表,選不錯</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 22, marginTop: 40 }}>
      <div style={{ background: '#fdf6ef', border: `2px solid ${C.orange}`, borderRadius: 16, padding: '26px 30px' }}><div style={{ fontSize: 32, fontWeight: 800, color: C.orange }}>用 Opus</div><div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16, fontSize: 25 }}>{['要它先讀懂整個專案、做計畫', '比較難、比較重要的修改', '它一直做錯、需要更會想時'].map((t, i) => <div key={i}>・{t}</div>)}</div></div>
      <div style={{ background: '#eef4ff', border: `2px solid ${BLUE}`, borderRadius: 16, padding: '26px 30px' }}><div style={{ fontSize: 32, fontWeight: 800, color: BLUE }}>用 Sonnet</div><div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16, fontSize: 25 }}>{['改個文字、換個顏色這種小事', '想快一點、想省額度', '反覆試很多次的時候'].map((t, i) => <div key={i}>・{t}</div>)}</div></div>
    </div>
    <div style={{ marginTop: 26 }}><Harvest>不知道選哪個?難題用 Opus,小事用 Sonnet。</Harvest></div>
  </div><Foot label="U11 · 課2 · 段2" /></div>
);
const MoreFeatures: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 2 · 面板還有這些 · 先知道有就好</Eyebrow><Title size={48}>更多功能,日後慢慢用</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14, marginTop: 32, maxWidth: 1540 }}>
      {[['/ 斜線指令', '打 / 叫出常用指令(/plan、/model、/clear…)'], ['Diff 審閱', 'AI 改完,面板會給你綠加紅刪,可逐項接受/拒絕'], ['Checkpoint / 還原', '改壞了可以退回先前狀態'], ['對話歷史 / 分頁', '開多個對話,查得到之前問過什麼'], ['貼圖片', '把截圖貼進去,讓它看畫面'], ['MCP', '接外部工具(第四堂講)']].map(([a, b], i) => (
        <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 12, padding: '16px 22px' }}><div style={{ fontFamily: mono, fontSize: 22, color: C.orange, fontWeight: 700 }}>{a}</div><div style={{ fontSize: 22, color: C.ink, marginTop: 5, lineHeight: 1.35 }}>{b}</div></div>
      ))}
    </div>
  </div><Foot label="U11 · 課2 · 段2" /></div>
);
const Break1: Page = () => <BreakSlide note="回來我們用這個面板,真的請 AI 安全地改一次標語。" />;

// ══════════ 段 3:Vibe + 共同流程 + 讀專案 ══════════
const Sec3: Page = () => <Section no="3" title="先讀、不先改:讓 AI 看懂專案" time="2:20 - 3:05" sub="有了面板和模式,先別急著改。我們先用 Plan mode 讓 AI 讀懂專案。" />;
const VibeHead: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 3 · 觀念 · Vibe Coding</Eyebrow><Title size={54}>你負責想,AI 負責做</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 32 }}>
      <Think q={<>「Vibe Coding ── 就是放給 AI 自由發揮?」</>} a={<>不是。是<B>人說清楚意圖、限制與驗收,AI 負責實作,人負責檢查</B>。你出一張嘴,但要出對。</>} />
      <Lead>講白:<O>你負責思考與決策,AI 負責實現與建議。</O> 你是主管,不是旁觀者。</Lead>
    </div>
  </div><Foot label="U11 · 課2 · 段3" /></div>
);
const VibeSplit: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 3 · 分工</Eyebrow><Title size={50}>同一件事,兩個角色各做一半</Title>
    <div className="ts-rise" style={{ display: 'flex', gap: 28, marginTop: 36 }}>
      <SplitCol who="🧑 你(主管)" color={C.orange} bg="#fbf3ee" items={['想清楚要什麼', '訂限制、訂規則', '驗收結果', '最後拍板、負責']} />
      <SplitCol who="🤖 AI(實作者)" color={BLUE} bg="#eef4ff" items={['讀專案、找資料', '提建議、給方案', '寫程式、改檔案', '回報它做了什麼']} />
    </div>
    <div style={{ marginTop: 24 }}><Harvest>AI 很會做事,但它不是老闆。你要先學會當 AI 的主管。</Harvest></div>
  </div><Foot label="U11 · 課2 · 段3" /></div>
);
const Flow: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 3 · 七步固定流程</Eyebrow><Title size={46}>藍色 AI 做、橘色你把關</Title>
    <div className="ts-rise" style={{ marginTop: 40 }}><FlowDiagram /></div>
    <div style={{ display: 'flex', gap: 26, marginTop: 38, fontSize: 22, color: C.muted }}>
      <span><span style={{ color: BLUE, fontWeight: 800 }}>●</span> AI 先看、先想(Plan mode)</span>
      <span><span style={{ color: C.orange, fontWeight: 800 }}>●</span> 你來把關(關鍵)</span>
      <span><span style={{ color: OK, fontWeight: 800 }}>●</span> 動手與檢查(切 Edit)</span>
    </div>
  </div><Foot label="U11 · 課2 · 段3" /></div>
);
const ReadPrompt: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 3 · Prompt 卡 · 先讀</Eyebrow><Title size={44}>切到 Plan mode,叫它先讀專案</Title>
    <div style={{ marginTop: 18 }}><PromptCard size={25}>{`請先閱讀目前專案,不要修改任何檔案。

請回答:
1. 這個專案是做什麼的
2. 啟動方式是什麼
3. 主要檔案在哪裡
4. 樣式檔在哪裡
5. 如果我要修改首頁標語,可能要改哪裡`}</PromptCard></div>
    <div style={{ fontSize: 24, color: C.muted, marginTop: 20 }}>送出前先確認:面板底部寫著 <B>plan mode</B>。這樣它就只會讀、不會改。</div>
  </div><Foot label="U11 · 課2 · 段3" /></div>
);
const ReadDo: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 3 · 動手 · 讓它讀</Eyebrow><Title size={48}>三步,拿到一份專案摘要</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 26, maxWidth: 1500 }}>
      <Atom n={1} act={<>用 <Key>shift+tab</Key> 或 <Key>/plan</Key> 切到 <B>Plan mode</B>。</>} see="底部出現 plan mode。" />
      <Atom n={2} act={<>(可選)打 <Key>@</Key> 把 <Key>data.js</Key> 指給它,再貼上上一頁的 prompt、按 Enter。</>} see="它開始讀、跑字。" />
      <Atom n={3} act={<>看它回的<B>摘要</B>,並確認它<B>沒有改任何檔</B>。</>} see="一段專案理解 + 檔案沒被動。" />
    </div>
    <div style={{ marginTop: 22 }}><SuccessRow>拿到摘要、git status 乾淨 = 段 3 過關。</SuccessRow></div>
  </div><Foot label="U11 · 課2 · 段3" /></div>
);
const ReadResult: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '600px 1fr', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise"><ClaudePanel mode="plan" model="Opus" convo={[{ who: 'user', text: '請先閱讀專案,不要改' }, { who: 'ai', text: '這是一個 React 小店;啟動用 npm run dev;標語在 src/data.js 的 tagline。' }, { who: 'ai', text: '(Plan mode:我沒有修改任何檔案)' }]} /></div>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div><Eyebrow>段 3 · 你會看到</Eyebrow><Title size={46}>它讀懂了,而且沒亂動</Title></div>
      <Lead>它告訴你標語在哪、怎麼啟動 ── 而且因為是 Plan mode,<B>一個檔都沒改</B>。這就是「先讀」的安全感。</Lead>
      <Checkpoint items={['面板底部是 plan mode', '拿到一份看得懂的專案摘要']} />
    </div>
  </div><Foot label="U11 · 課2 · 段3" /></div>
);

// ══════════ 段 4:Plan 實作 + Guardrails ══════════
const Sec4: Page = () => <Section no="4" title="計畫 → 護欄 → 安全改一次" time="3:05 - 3:55" sub="讀懂了,現在讓它報計畫、加護欄、才動手 ── 把標語改成『我的第一個 AI 小店』。" />;
const PlanHead: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 4 · 開場</Eyebrow><Title size={52}>Plan-and-Execute:先想清楚再做</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 32 }}>
      <Analogy>像出門前<B>先看一下路線</B>,而不是上車就開。先想清楚要走哪,真的上路才不會迷路。</Analogy>
      <Lead>今天要改的事很小:把<B>標語</B>改成「靠海的手作選物,我的第一個 AI 小店」。但我們<O>故意</O>先叫它報計畫。</Lead>
    </div>
  </div><Foot label="U11 · 課2 · 段4" /></div>
);
const PlanPrompt: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 4 · Prompt 卡 · 報計畫</Eyebrow><Title size={44}>還在 Plan mode,叫它先說怎麼改</Title>
    <div style={{ marginTop: 16 }}><PromptCard size={24}>{`(維持 Plan mode,先不要改)

我要把首頁標語改成:
「靠海的手作選物,我的第一個 AI 小店」

限制:
1. 只修改標語文字
2. 不要改版面、不要改店名
3. 不要新增套件
4. 不要修改其他區塊

請先回答:
1. 你會修改哪個檔案
2. 你會修改哪一段
3. 是否會影響其他功能
4. 我要怎麼驗收`}</PromptCard></div>
  </div><Foot label="U11 · 課2 · 段4" /></div>
);
const PlanReview: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '600px 1fr', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise"><ClaudePanel mode="plan" model="Opus" convo={[{ who: 'ai', text: '【計畫】1. 改 src/data.js 的 tagline 一行' }, { who: 'ai', text: '2. 不動店名與版面 3. 不裝套件' }, { who: 'ai', text: '4. 驗收:看網站標語變了、git diff 只有一行' }]} /></div>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div><Eyebrow>段 4 · 讀懂計畫</Eyebrow><Title size={46}>看它「想改多少」</Title></div>
      <Lead>它說只改 data.js 的 tagline 一行、不動別的 ── 範圍很小,<B>符合你要的</B>。如果它說「順便優化版面」就要踩煞車。</Lead>
      <Harvest>看計畫,就是在看 AI 有沒有想做超過你要的事。</Harvest>
    </div>
  </div><Foot label="U11 · 課2 · 段4" /></div>
);
const GuardHead: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 4 · Guardrails</Eyebrow><Title size={54}>放行前,先給護欄</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 32 }}>
      <Analogy>像保齡球道兩邊的<B>護欄</B>:不是讓你丟更強,是讓球不要掉到溝裡。護欄不是讓 AI 更厲害,是讓它<O>不要掉下去</O>。</Analogy>
      <Lead>護欄就是幾句話,你在放行時順手加上去。</Lead>
    </div>
  </div><Foot label="U11 · 課2 · 段4" /></div>
);
const GuardLines: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 4 · 常用護欄句型</Eyebrow><Title size={50}>挑需要的,貼上去</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14, marginTop: 36, maxWidth: 1540 }}>
      {['請只修改指定檔案。', '請不要新增套件。', '請不要重構整個專案。', '請不要新增登入、後台、資料庫。', '請不要修改不相關區塊。', '請修改前先說明。'].map((t, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, background: C.card, border: `1px solid ${C.line}`, borderRadius: 12, padding: '18px 24px' }}><span style={{ color: C.orange, fontSize: 26, fontWeight: 800 }}>🛡</span><span style={{ fontFamily: mono, fontSize: 25, color: C.ink }}>{t}</span></div>
      ))}
    </div>
  </div><Foot label="U11 · 課2 · 段4" /></div>
);
const ExecPrompt: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 4 · 放行 · 切到 Edit</Eyebrow><Title size={44}>計畫 OK,才讓它真的改</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 22, maxWidth: 1500 }}>
      <Atom n={1} act={<>用 <Key>shift+tab</Key> 切離 Plan mode(回 Default 或 Auto-Accept)。</>} see="底部模式變了。" />
      <Atom n={2} act={<>貼下面這段,按 Enter。</>} see="它開始真的改檔。" />
    </div>
    <div style={{ marginTop: 16 }}><PromptCard size={26}>{`同意,請照剛剛的計畫修改。
請只修改必要部分。
完成後請告訴我:改了哪個檔、改了什麼、怎麼驗收。`}</PromptCard></div>
  </div><Foot label="U11 · 課2 · 段4" /></div>
);
const Verify: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 720px', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div><Eyebrow>段 4 · 驗收</Eyebrow><Title size={46}>自己看一次,別全信它</Title></div>
      <Atom n={1} act={<>看瀏覽器 ── 標語變成「…我的第一個 AI 小店」了嗎?</>} see="網站標語更新(熱更新)。" />
      <Atom n={2} act={<><Key>git status</Key> ── 它動了幾個檔?</>} see="最好只有 data.js。" />
      <Atom n={3} act={<><Key>git diff</Key> ── 到底改了哪幾行?</>} see="只有 tagline 那行。" />
    </div>
    <div className="ts-rise"><Term title="git diff · src/data.js" rows={[['dim', 'export const shop = {'], ['dim', "  name: '小明快炒店',"], ['err', "-  tagline: '靠海的手作選物…',"], ['ok', "+  tagline: '靠海的手作選物,我的第一個 AI 小店',"], ['dim', '};']]} /></div>
  </div><Foot label="U11 · 課2 · 段4" /></div>
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
const VerifyDone: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 4 · 過關標準</Eyebrow><Title size={52}>只改了一行,而且是你要的那行</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 36 }}>
      <SuccessRow>標語改好 + git diff 只有那一行 = 你成功讓 AI「只改該改的」。</SuccessRow>
      <Harvest>git diff 是你的照妖鏡:AI 有沒有亂改,一看就知道。記得最後 commit 一次。</Harvest>
    </div>
  </div><Foot label="U11 · 課2 · 段4" /></div>
);
const Pit: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 4 · 卡住了?</Eyebrow><Title size={50}>AI 不受控時怎麼辦</Title>
    <div className="ts-rise" style={{ marginTop: 32, maxWidth: 1500 }}><Pitfall items={[['它改了一堆你沒要的:', 'git diff 看清楚,再叫它「請只保留標語修改,其他還原」。'], ['它在 Plan mode 卻說要改:', '它只是「說」,不會真的改。看計畫覺得不行就重下指令。'], ['它要重構 / 加功能:', '直接拒絕:「這次只改標語,其他不要做。」']]} /></div>
    <div style={{ marginTop: 20 }}><Checkpoint items={['標語在瀏覽器變了', 'git diff 只有 tagline 一行', '已 commit 存檔']} /></div>
  </div><Foot label="U11 · 課2 · 段4" /></div>
);

// ══════════ 收束 ══════════
const Sec5: Page = () => <Section no="5" title="收束 + 一句重要的話" time="3:55 - 4:00" sub="你今天做了一件很專業的事:讓 AI 改東西,而且全程在你的掌握裡。" />;
const Punchline: Page = () => (
  <div style={{ ...fill, background: C.ink, color: '#fff' }}><div style={{ ...pad }}>
    <Eyebrow>今天最重要的一句</Eyebrow>
    <div style={{ fontSize: 84, fontWeight: 900, lineHeight: 1.18, marginTop: 28, maxWidth: 1540, letterSpacing: '-0.02em' }}>AI 不是<span style={{ color: C.orange }}>不能改</span>,<br />是不能<span style={{ color: C.orange }}>一開始就改</span>。</div>
    <div style={{ fontSize: 31, color: 'rgba(255,255,255,0.7)', marginTop: 34, maxWidth: 1380, lineHeight: 1.55 }}>Plan mode 先讀、先計畫,你點頭,再切 Edit 動手,最後 git diff 驗收。順序對了,AI 是好用的工讀生;順序錯了,它是失控的裝潢工。</div>
  </div><div style={{ position: 'absolute', left: 110, bottom: 44, fontFamily: mono, fontSize: 19, color: 'rgba(255,255,255,0.5)' }}>U11 · 課2 · 記住這句</div></div>
);
const Recap: Page = () => {
  const pts = [['裝 + 面板', '在 VS Code 裝 Claude Code,認得面板五個地方。'], ['模式', 'shift+tab 切 Default / Auto-Accept / Plan。'], ['模型', 'Opus 難題、Sonnet 日常,用 /model 切。'], ['流程', 'Plan 讀→看計畫→護欄→切 Edit 改→git diff 驗收。']];
  return (
    <div style={fill}><div style={pad}><Eyebrow>今天我們學了四件事</Eyebrow>
      <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 42, maxWidth: 1520 }}>
        {pts.map(([a, b], i) => <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}><span style={{ fontFamily: mono, fontSize: 34, color: C.orange, fontWeight: 800, lineHeight: 1.2 }}>{String(i + 1).padStart(2, '0')}</span><div><div style={{ fontSize: 36, fontWeight: 800 }}>{a}</div><div style={{ fontSize: 26, color: C.muted, marginTop: 4 }}>{b}</div></div></div>)}
      </div>
    </div><Foot label="U11 · 課2 · 收束" /></div>
  );
};
const Homework: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>回家作業 · 輕量,只要一件</Eyebrow><Title>再用插件,安全改一個小地方</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 44, maxWidth: 1480 }}>
      <div style={{ background: C.card, border: `2px solid ${C.orange}`, borderRadius: 16, padding: '24px 34px' }}><span style={{ fontFamily: mono, fontSize: 22, color: C.orange, fontWeight: 700 }}>必做(15 分鐘)</span><div style={{ fontSize: 32, marginTop: 10, lineHeight: 1.4 }}>用<B>Plan mode → 看計畫 → 護欄 → Edit</B> 的流程,請 Claude Code 改一個商品名稱,並用 <B>git diff</B> 確認它沒亂改。</div></div>
      <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '22px 34px' }}><span style={{ fontFamily: mono, fontSize: 22, color: C.muted, fontWeight: 700 }}>選做</span><div style={{ fontSize: 27, marginTop: 8, color: C.muted, lineHeight: 1.4 }}>故意給它模糊指令(「弄好看一點」),在 Plan mode 看它想改多少,記下來。</div></div>
    </div>
  </div><Foot label="U11 · 課2 · 回家作業" /></div>
);
const Next: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>下一堂預告</Eyebrow><Title size={58}>會改畫面了,<br />那 ── 資料呢?</Title><div style={{ fontSize: 32, color: C.muted, marginTop: 30, lineHeight: 1.5 }}>下一堂處理「資料」:AI 講得很順,不代表它講得對。我們會看資料的異常、要它固定格式輸出、還會在面板裡修一次它的錯。今天辛苦了。</div></div><Foot label="U11 · 課2 · 下一堂" /></div>
);

// ── v2 追加頁 ─────────────────────────────────────────────
const PanelVsTerm: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 1 · 為什麼用面板</Eyebrow><Title size={50}>面板 vs 終端機:今天用面板</Title>
    <div className="ts-rise" style={{ display: 'flex', gap: 24, marginTop: 36 }}>
      <div style={{ flex: 1, background: '#eef4ff', border: `2px solid ${BLUE}`, borderRadius: 16, padding: '24px 28px' }}><div style={{ fontSize: 30, fontWeight: 800, color: BLUE }}>插件面板(今天)</div><div style={{ fontSize: 25, marginTop: 12, lineHeight: 1.5 }}>看得到、用點的;改檔有 diff 可看;對新手最友善。</div></div>
      <div style={{ flex: 1, background: '#f3f4f6', border: `2px solid ${C.faint}`, borderRadius: 16, padding: '24px 28px' }}><div style={{ fontSize: 30, fontWeight: 800, color: C.muted }}>終端機(進階)</div><div style={{ fontSize: 25, marginTop: 12, lineHeight: 1.5 }}>一樣強,但全是文字;熟了之後更快。今天先不碰。</div></div>
    </div>
    <div style={{ marginTop: 26 }}><Harvest>同一個 Claude Code,兩種介面。今天我們走最好上手的:面板。</Harvest></div>
  </div><Foot label="U11 · 課2 · 段1" /></div>
);
const FirstHello: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 1 · 暖身 · 先說句話</Eyebrow><Title size={48}>先跟它說句無害的話</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 26, maxWidth: 1500 }}>
      <Lead>還沒要改任何東西。先打一句話,確認它會回你、建立一點信心。</Lead>
      <PromptCard size={27} label="貼到面板,按 Enter">{`你好。請用一句話告訴我:你可以怎麼幫我?`}</PromptCard>
    </div>
    <div style={{ marginTop: 22 }}><SuccessRow>它回你一句話 = 面板通了,接下來才開始正式流程。</SuccessRow></div>
  </div><Foot label="U11 · 課2 · 段1" /></div>
);
const ModeTable: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 2 · 三模式總表</Eyebrow><Title size={50}>一張表記住三個模式</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 36, maxWidth: 1540 }}>
      {[[C.muted, 'Default', '改之前每次問你', '最安全 · 新手預設'], [OK, 'Auto-Accept', '改檔不問、直接做', '快 · 熟練的重複小事'], [PUR, 'Plan', '完全不改、只給計畫', '先讀先想 · 今天主角']].map(([c, a, b, d]: any, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '220px 1fr 1fr', gap: 20, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '18px 26px' }}><span style={{ fontFamily: mono, fontSize: 26, color: c, fontWeight: 800 }}>{a}</span><span style={{ fontSize: 26 }}>{b}</span><span style={{ fontSize: 23, color: C.muted }}>{d}</span></div>
      ))}
    </div>
    <div style={{ marginTop: 24 }}><Harvest>怕,就 Default;熟,就 Auto;要先想,就 Plan。</Harvest></div>
  </div><Foot label="U11 · 課2 · 段2" /></div>
);
const Shortcuts: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 2 · 快捷鍵小抄</Eyebrow><Title size={50}>今天會用到的幾個</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16, marginTop: 36, maxWidth: 1500 }}>
      {[[<><Key>shift</Key>+<Key>tab</Key></>, '循環切換模式'], [<><Key>/plan</Key></>, '直接進 Plan mode'], [<><Key>/model</Key></>, '換模型(Opus/Sonnet)'], [<><Key>@</Key></>, '把檔案指給 AI 看'], [<><Key>/clear</Key></>, '清空對話、重新開始'], [<><Key>Enter</Key></>, '送出訊息']].map(([a, b], i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, background: C.card, border: `1px solid ${C.line}`, borderRadius: 12, padding: '16px 24px' }}><span style={{ minWidth: 180 }}>{a}</span><span style={{ fontSize: 25 }}>{b}</span></div>
      ))}
    </div>
  </div><Foot label="U11 · 課2 · 段2" /></div>
);
const SlashCommands: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 2 · 官方 slash commands</Eyebrow><Title size={48}>不用背,知道什麼時候叫它出來</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14, marginTop: 28, maxWidth: 1520 }}>
      {[
        ['/init', '先認識專案,建立專案記憶或指引'],
        ['/plan', '先計畫,不要一開始就改'],
        ['/model', '切模型或思考深度'],
        ['/permissions', '看 AI 有哪些權限'],
        ['/diff', '看它改了什麼'],
        ['/status', '看目前工作狀態'],
        ['/clear', '清空對話重來'],
        ['/compact', '對話太長時壓縮上下文'],
        ['/mcp', '看外部工具連線'],
        ['/skills', '看固定 SOP / Skill'],
      ].map(([cmd, desc]) => <div key={cmd} style={{ display: 'flex', gap: 16, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 12, padding: '14px 20px' }}><span style={{ fontFamily: mono, fontSize: 25, color: C.orange, fontWeight: 800, minWidth: 150 }}>{cmd}</span><span style={{ fontSize: 23, lineHeight: 1.35 }}>{desc}</span></div>)}
    </div>
    <div style={{ marginTop: 22 }}><Harvest>指令是捷徑;流程還是一樣:先讀、先計畫、放行修改、最後看 diff。</Harvest></div>
  </div><Foot label="U11 · 課2 · slash commands" /></div>
);
const WhyReadValue: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 3 · 先讀的價值</Eyebrow><Title size={52}>為什麼不直接叫它改就好?</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 32 }}>
      <Think q={<>「先讀好慢,直接叫它改標語不就好了?」</>} a={<>因為 AI <B>不先看清楚就動手,常常改錯地方</B>。店名和標語它可能搞混,結果改到不該改的。先讀,它才知道你說的「標語」在哪一行。</>} />
      <Harvest>先讀一分鐘,省你之後十分鐘的「它怎麼改錯了」。</Harvest>
    </div>
  </div><Foot label="U11 · 課2 · 段3" /></div>
);
const ReadPractice: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 3 · 換你問</Eyebrow><Title size={50}>在 Plan mode,再問它一個問題</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 26, maxWidth: 1500 }}>
      <Lead>還在 Plan mode(它不會改檔)。換你問一個你好奇的問題,練習「讓它讀、它不動手」。</Lead>
      <PromptCard size={27} label="貼到面板(維持 Plan mode)">{`如果我想多加一個商品,大概要改哪個檔、哪一段?先別改,先說。`}</PromptCard>
    </div>
    <div style={{ marginTop: 22 }}><SuccessRow>它給你「要改哪裡」的說明、但沒動檔 = 你已經會用 Plan mode 諮詢它了。</SuccessRow></div>
  </div><Foot label="U11 · 課2 · 段3" /></div>
);
const CommitChange: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 700px', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div><Eyebrow>段 4 · 收尾 · 存檔</Eyebrow><Title size={48}>滿意了,就 commit 一次</Title></div>
      <Lead>AI 改的、你驗收過了,跟上一堂一樣 ── <B>幫它拍張照</B>。下次再改,又有一個乾淨的起點。</Lead>
      <Atom n={1} act={<><Key>git add .</Key> 再 <Key>git commit -m "AI 改標語"</Key></>} see="出現一筆新存檔紀錄。" />
    </div>
    <div className="ts-rise"><Term title="TERMINAL" rows={[['cmd', 'git add .'], ['cmd', 'git commit -m "AI 改標語"'], ['ok', '[main 9c1d2e0] AI 改標語'], ['dim', ' 1 file changed']]} /></div>
  </div><Foot label="U11 · 課2 · 段4" /></div>
);

// ── 旗艦示範:真的打一次 /model,看標籤換人 ─────────────
const ModelRun: Page = () => (
  <div style={fill}><div style={{ ...pad }}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}><Eyebrow>段 2 · 跑跑看 · 旗艦示範</Eyebrow><span style={{ fontSize: 22, color: OK, fontFamily: mono, fontWeight: 700 }}>● 親手打一次 /model,盯著右上角看</span></div>
    <Title size={42}>打 /model → 選一個 → 右上「模型」標籤真的換人</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 128px 1fr', gap: 18, alignItems: 'center', marginTop: 22 }}>
      <div>
        <div style={{ fontFamily: mono, fontSize: 20, color: C.muted, marginBottom: 8 }}>① 打 /model 之前</div>
        <ClaudePanel mode="default" model="Opus" convo={[{ who: 'user', text: '這題有點難,幫我想清楚整包怎麼改' }, { who: 'ai', text: '好,我用 Opus 仔細想(較慢、較會想)' }]} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontFamily: mono, fontSize: 17, color: C.orange, fontWeight: 800, lineHeight: 1.4 }}>② 打 /model<br />選 Sonnet</div>
        <div style={{ fontSize: 46, color: C.faint, marginTop: 6 }}>→</div>
      </div>
      <div>
        <div style={{ fontFamily: mono, fontSize: 20, color: OK, marginBottom: 8 }}>③ 選完 Sonnet 之後</div>
        <ClaudePanel mode="default" model="Sonnet" convo={[{ who: 'user', text: '只是改個文字,快一點就好' }, { who: 'ai', text: '沒問題,用 Sonnet 快手處理 ✓' }]} />
      </div>
    </div>
    <div style={{ marginTop: 16 }}><Harvest>換模型 = 面板右上「模型:」那顆標籤換人。難題 Opus、小事 Sonnet,下一則訊息就生效。</Harvest></div>
  </div><Foot label="U11 · 課2 · 段2 · /model" /></div>
);
const ModelsDoc: Page = () => (
  <RealShot img={modelsShot} url="platform.claude.com/docs · Models" eyebrow="段 2 · 官方頁佐證 · 選模型" title="官方「Models / Choosing a model」頁"
    caption="官方文件也是同一套邏輯:難、要長時間想的工作,挑最強的那顆(Opus);一般任務用夠快夠省的就好。課堂只要記『難題 Opus、小事 Sonnet』。版本號會更新,選新的就好。" foot="U11 · 課2 · 段2" />
);
const SlashDoc: Page = () => (
  <RealShot img={slashShot} url="code.claude.com/docs · Commands" eyebrow="段 2 · 官方頁佐證 · 斜線指令" title="官方「Commands」頁:打 / 就會列出全部指令"
    caption="官方說明:在輸入框打一個 / 就會列出所有可用指令,再打幾個字可篩選 ── /model 換模型、/review 看變更、/clear 清空。不用背,打 / 就看得到。" foot="U11 · 課2 · slash commands" />
);
// 內建 slash 生活習慣(4 個保養指令)
const SlashCard = ({ cmd, use, when, boot }: { cmd: string; use: string; when: string; boot: string }) => (
  <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '18px 24px' }}>
    <div style={{ fontFamily: mono, fontSize: 27, color: C.orange, fontWeight: 800 }}>{cmd}</div>
    <div style={{ fontSize: 24, marginTop: 8, lineHeight: 1.4 }}><B>用途</B> {use}</div>
    <div style={{ fontSize: 23, marginTop: 4, color: C.muted, lineHeight: 1.4 }}>何時用:{when}</div>
    <div style={{ fontSize: 22, marginTop: 6, color: OK, lineHeight: 1.4 }}>保底:{boot}</div>
  </div>
);
const SlashHygiene: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段 2 · 內建 slash · 養成保養習慣</Eyebrow><Title size={46}>四個內建指令,讓對話一直乾淨好用</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16, marginTop: 28, maxWidth: 1560 }}>
      <SlashCard cmd="/clear" use="清空對話,從頭開始。" when="換一個新任務時。" boot="對話亂了、AI 忘東忘西 → 直接 /clear 重來。" />
      <SlashCard cmd="/compact" use="壓縮長對話成摘要,保留重點。" when="對話很長、AI 開始忘記前面。" boot="壓完還是亂 → 改用 /clear。" />
      <SlashCard cmd="/review" use="請它檢視這次的變更。" when="AI 改完、想逐項看改動。" boot="這版沒有 /review → 用終端機 git diff。" />
      <SlashCard cmd="/status" use="看目前模型、模式、階段狀態。" when="不確定現在用哪個模型/模式。" boot="看不懂 → 看面板底部指示器就好。" />
    </div>
    <div style={{ marginTop: 22 }}><Harvest>換任務先 /clear;太長先 /compact;看改動 git diff 或 /review。這些是保養,不是功能。</Harvest></div>
  </div><Foot label="U11 · 課2 · 內建 slash" /></div>
);

export const meta: SlideMeta = { title: 'U11 課2:不要讓 AI 一開始就動手', createdAt: '2026-06-30T04:12:30.000Z' };

export const notes: (string | undefined)[] = [
  '各位同學好,第二堂。上一堂你已經會打開、跑、改店名、存檔。今天主題一句話:不要讓 AI 一開始就動手。我們在 VS Code 裝上 Claude Code 這個 AI 助手,學怎麼指揮它改專案又不讓它亂來,核心三步:先讀、再計畫、再修改。',
  '先接上一堂。你打開了 web-lab、跑起網站、把店名改成自己的、還 commit 過一次。那是不是可以叫 AI 改了?你可能會想說會跑會改了直接叫它改不就好。可以叫,但不能一上來就讓它動手,今天就示範不先約束 AI 會幫你幫到出事。',
  '為什麼?你跟 AI 說改漂亮一點,它可能改顏色、版面、加動畫、順便加登入、甚至重構整個專案。打個比方,你只想換標題,它像實習生第一天上班,你說整理一下店面他把整間店重新裝潢,熱心但失控。所以方法出現:先讀、再計畫、再修改。',
  '把叫 AI 改拆成三步:先讀先別碰、再計畫你看過、再修改只改該改的。這三步等下會對應到 Claude Code 的三個模式,工具天生就為這個流程設計的。',
  '看路線。四段:裝加認識插件、模式加模型、Vibe 加讀專案、Plan 加護欄。中間休息一次。今天 AI 我們用插件面板操作,不打終端機指令。',
  '先補一個重要分工。ChatGPT 或 Claude 網頁版適合問概念、產生片段、解釋錯誤、整理 Prompt;Claude Code 或 Codex 適合讀整個專案、找檔案、修改檔案、跑指令、看 diff、debug。問想法用網頁版,要動專案用專案型工具。',
  '同一個任務,先看網頁版做法。任務是把網站標語改清楚。在網頁版,不要叫它直接幫你改專案,因為它沒有你的檔案樹。請它產生候選標語或整理 Prompt,這是它擅長的。',
  '同一個任務,換成專案型做法。Claude Code 或 Codex 坐在專案裡,所以你可以叫它先進只計畫模式、讀專案、找標語在哪個檔案哪一段,再回報檔案路徑、目前標語、建議和驗收方式。',
  '判斷題。解釋 npm run dev,網頁版也可以;找標語在哪個檔案,專案型工具;把錯誤訊息翻成白話,網頁版也可以;修 run.py 並跑 python run.py 驗收,專案型工具;整理一段好 Prompt,網頁版也可以。',
  '老師控場流程是:網頁版整理想法,專案型工具找檔改檔,最後你用瀏覽器和 git diff 驗收。這樣不讓學生自由發想,每一步都有固定輸入和固定驗收。',
  '段一,裝上、打開 Claude Code 插件。上一堂你看過擴充功能在哪,今天就在那裡裝一個 AI 助手。',
  'Claude Code 是什麼?它是一個會讀你整個專案、用講的就幫你改檔的 AI 助手。可以在終端機跑,也可以裝成 VS Code 插件變成一個面板。打個比方,像找了個很厲害的工讀生坐你旁邊。今天用插件面板版,對零基礎最友善,看得到、用點的。',
  '為什麼用面板不用終端機?同一個 Claude Code 兩種介面。插件面板看得到、用點的、改檔有 diff 可看,對新手最友善;終端機一樣強但全是文字,熟了更快,今天先不碰。我們走最好上手的:面板。',
  '這是官方文件頁。它說裝上 Claude Code 擴充後可以在 VS Code 裡用,有行內 diff、plan mode、快捷鍵,這些今天都會用到。',
  '這是擴充功能商店裡的 Claude Code for VS Code。等下我們在 VS Code 裡搜尋同一個名字、按 Install 就能裝。',
  '動手一,裝插件。點左邊活動列的擴充功能圖示四個方塊;搜尋框打 Claude Code,找 Anthropic 出的那個;按 Install 等它裝好。多出一個 Claude Code 圖示或面板就裝好了。',
  '動手二,開面板加登入。點剛多出來的 Claude Code 圖示打開面板;第一次會請你登入授權,跟著按 Sign in、Authorize;點最下面輸入框,游標在閃就可以打字。面板能打字了就準備好,先別急著叫它做事。',
  '正式開始前先暖身,跟它說句無害的話。還沒要改任何東西,先打一句「你好,請用一句話告訴我你可以怎麼幫我」。它回你一句話,代表面板通了,接下來才開始正式流程。這一步是建立信心,別小看。',
  '面板導覽,認得五個地方:上面是插件名加右邊模型標籤、中間是對話、輸入框上方是 @ 帶進來的檔案、輸入框是打字的地方、最底部是模式指示器。左邊這張就是面板的樣子。',
  '一個超好用的功能,@。在輸入框打 @ 會跳出檔案清單,選一個例如 @data.js,AI 就專心看那個檔,比整段貼乾淨多了。打個比方,像跟工讀生說話時把文件直接放他桌上說看這個,而不是用念的。要它看哪個檔就 @ 它。',
  '裝或登入卡住:搜尋不到確認名字打對、網路有沒有通;登入轉圈圈它會開瀏覽器授權,授權完回 VS Code 等幾秒;面板找不到看右側欄或活動列新圖示,再不行重開 VS Code。檢查點:插件裝好、面板打得開能打字。',
  '段二,兩個關鍵旋鈕:模式加模型。這是今天最重要的一段,學會這兩個旋鈕你就能控制 AI 能動多少、用多強的腦。',
  '旋鈕一,模式。模式等於你給 AI 多少動手權。Claude Code 三個模式,差別只有一件事:它能不能、要不要先問你就直接改檔。打個比方像開車的檔位,同一台車換個檔衝勁就不一樣。',
  '三個模式用 shift+tab 循環:Default、Auto-Accept、Plan。在面板裡按 shift+tab,底部模式指示器就跟著換,一直按會繞一圈。',
  '模式 A,Default,每次都問你。AI 要改任何檔之前都先停下問你可以嗎,最安全最慢,新手預設用這個。不確定的時候留在 Default 最安全。',
  '模式 B,Auto-Accept Edits,直接改。AI 改檔不再每次問直接動手,速度快,適合你已經很清楚要做什麼的重複小事。你可能會想說那不就放生它了?它只自動改檔,其他危險動作像跑指令還是會問,但新手還是先少用。',
  '模式 C,今天主角,Plan,只計畫不改。AI 完全不准動檔,只能先讀先想先說我打算這樣改。你看過點頭才換模式讓它真的動手。Plan mode 就是先讀再計畫這兩步的開關,今天的核心。',
  '怎麼切模式,三種切法記一種就好:按 shift+tab 循環、用滑鼠點面板底部模式字樣、或打 /plan 直接進 Plan mode。',
  '一個雷要先講:Windows 上 shift+tab 有時候只在兩個模式跳、跳過 Plan,這是已知狀況。改用 /plan 指令,或直接點面板底部的模式字樣來選。不確定現在哪個模式就看面板最底部那行字。怕它亂改,先確定底部寫著 plan mode 再送 prompt。檢查點:會切到 Plan mode、看得懂現在哪個模式。',
  '把三個模式收成一張表記住:Default 改之前每次問你、最安全是新手預設;Auto-Accept 改檔不問直接做、快、適合熟練的重複小事;Plan 完全不改只給計畫、先讀先想、今天主角。一句話:怕就 Default、熟就 Auto、要先想就 Plan。',
  '旋鈕二,模型。模型等於你讓 AI 用多強的腦。同一個 Claude Code 可以選不同模型,最常見兩種:Opus 最聰明較慢、Sonnet 快又省。打個比方像找人幫忙,Opus 是資深老師傅難題交給他,Sonnet 是俐落熟手日常小事又快又好。',
  '怎麼換模型:點面板上面的模型標籤,或打 /model,跳出清單選 Opus 或 Sonnet,版本選最新的就好。右邊這張就是模型選單的樣子。注意版本號像 Opus 4.x 依你安裝顯示,選新的就好。',
  '跑跑看,旗艦示範。真的在輸入框打 /model,跳出模型選單,選 Sonnet。然後盯著面板右上那顆「模型」標籤 ── 它從 Opus 變成 Sonnet,下一則訊息就用新模型。左邊是打之前用 Opus 想難題,右邊是選完 Sonnet 快手改小東西。換模型就是換那顆標籤,難題 Opus、小事 Sonnet。',
  '何時用哪個,一張表選不錯:要它讀懂整個專案做計畫、比較難比較重要的修改、它一直做錯時,用 Opus;改文字換顏色小事、想快想省、反覆試很多次,用 Sonnet。不知道選哪個?難題 Opus、小事 Sonnet。',
  '這是官方 Models 頁,佐證我們的講法。官方也是同一套邏輯:難、要長時間想的工作挑最強的 Opus,一般任務用夠快夠省的就好。課堂只要記難題 Opus、小事 Sonnet。版本號會隨更新變,選新的就好。',
  '面板還有這些功能,先知道有就好,日後慢慢用:斜線指令、Diff 審閱可逐項接受拒絕、Checkpoint 還原、對話歷史分頁、貼圖片、MCP 接外部工具第四堂講。',
  '快捷鍵小抄,今天會用到的幾個:shift tab 循環切模式、/plan 直接進 Plan、/model 換模型、@ 把檔案指給 AI、/clear 清空對話、Enter 送出。記不起來沒關係,貼旁邊用幾次就熟。',
  '補官方 slash commands。/init 先認識專案,/plan 先計畫,/model 換模型,/permissions 看權限,/diff 看改動,/status 看狀態,/clear 重來,/compact 壓縮上下文,/mcp 看工具連線,/skills 看固定 SOP。不用背,知道什麼時候叫出來。',
  '這是官方 Commands 頁,佐證上一頁那張表。官方說:在輸入框打一個斜線就會列出所有指令,再打幾個字可以篩選。/model 換模型、/review 看變更、/clear 清空。不用背,打斜線就看得到。',
  '四個內建保養指令,讓對話一直乾淨好用:/clear 換任務時清空重來、/compact 對話太長時壓縮保留重點、/review 請它檢視這次變更、/status 看目前模型與模式。記法:換任務先 clear、太長先 compact、看改動用 git diff 或 review。這些是保養不是功能,養成習慣就好。',
  '休息十分鐘。回來我們用這個面板,真的請 AI 安全地改一次標語。',
  '回來了。段三,先讀不先改,讓 AI 看懂專案。有了面板和模式,先別急著改,先用 Plan mode 讓 AI 讀懂專案。',
  '先講觀念,Vibe Coding。你可能會想說 Vibe Coding 就是放給 AI 自由發揮?不是,是人說清楚意圖限制驗收,AI 實作,人檢查。講白,你負責思考與決策,AI 負責實現與建議。你是主管不是旁觀者。',
  '同一件事兩個角色各做一半。你:想清楚、訂限制、驗收、負責。AI:讀專案、給建議、寫程式、回報。記住:AI 很會做事但它不是老闆,你要先學會當 AI 的主管。',
  '為什麼不直接叫它改就好?你可能會想說先讀好慢。因為 AI 不先看清楚就動手常常改錯地方,店名跟標語它可能搞混,結果改到不該改的。先讀它才知道你說的標語在哪一行。先讀一分鐘,省你之後十分鐘的「它怎麼改錯了」。',
  '七步固定流程,藍色 AI 做橘色你把關。讀專案、說它看到什麼、Plan 計畫,這三步在 Plan mode;你確認;切 Edit 改;你驗收;git diff。藍色是 AI 先看先想,橘色是你把關最關鍵,綠色是動手與檢查。',
  'Prompt 卡,先讀。切到 Plan mode,叫它先閱讀專案不要改,回答五個問題包含標語可能要改哪。送出前先確認面板底部寫著 plan mode,這樣它只會讀不會改。',
  '動手讓它讀,三步:shift+tab 或 /plan 切到 Plan mode、可選用 @ 把 data.js 指給它再貼 prompt、看它回的摘要並確認沒改任何檔。拿到摘要、git status 乾淨就過關。',
  '你會看到它讀懂了而且沒亂動。它告訴你標語在哪、怎麼啟動,而且因為是 Plan mode 一個檔都沒改,這就是先讀的安全感。檢查點:底部是 plan mode、拿到看得懂的摘要。',
  '換你問。還在 Plan mode 它不會改檔,換你問一個好奇的問題,練習讓它讀、它不動手。例如「如果我想多加一個商品,大概要改哪個檔、哪一段?先別改先說」。它給你說明但沒動檔,代表你會用 Plan mode 諮詢它了。',
  '段四,計畫、護欄、安全改一次。讀懂了,現在讓它報計畫、加護欄、才動手,把標語改成靠海的手作選物我的第一個 AI 小店。',
  'Plan-and-Execute,先想清楚再做。像出門前先看路線而不是上車就開。今天要改的很小,把標語改成靠海的手作選物我的第一個 AI 小店,但我們故意先叫它報計畫。',
  'Prompt 卡,報計畫。維持 Plan mode 先不要改,告訴它要改的標語、四條限制不改店名版面套件其他,然後要它先回答改哪個檔、哪一段、會不會影響別的、怎麼驗收。',
  '讀懂計畫,看它想改多少。它說只改 data.js 的 tagline 一行、不動別的,範圍很小符合你要的。如果它說順便優化版面就要踩煞車。看計畫就是在看 AI 有沒有想做超過你要的事。',
  'Guardrails,放行前先給護欄。像保齡球道兩邊的護欄,不是讓你丟更強是讓球不掉到溝裡。護欄不是讓 AI 更厲害是讓它不要掉下去。護欄就是幾句話,放行時順手加。',
  '常用護欄句型:只改指定檔、不要新增套件、不要重構、不要加登入後台資料庫、不要改不相關區塊、改前先說明。挑需要的貼。',
  '放行,切到 Edit。計畫 OK 才讓它真的改:用 shift+tab 切離 Plan mode 回 Default 或 Auto-Accept;貼這段同意請照計畫修改只改必要部分完成後告訴我改了哪、改了什麼、怎麼驗收。',
  '驗收,自己看一次別全信。看瀏覽器標語變成我的第一個 AI 小店了嗎、git status 看動了幾個檔最好只有 data.js、git diff 看改了哪幾行只有 tagline 那行。右邊就是理想的 diff,店名沒動只動標語。',
  '過關標準:標語改好而且 git diff 只有那一行,你成功讓 AI 只改該改的。git diff 是你的照妖鏡,AI 有沒有亂改一看就知道。記得最後 commit 一次。',
  '改完別忘收尾,滿意就 commit 一次。AI 改的你驗收過了,跟上一堂一樣幫它拍張照,下次再改又有一個乾淨起點。git add 點、git commit 加訊息「AI 改標語」,出現一筆新紀錄。',
  'AI 不受控怎麼辦:改一堆你沒要的,git diff 看清楚再叫它只保留標語修改其他還原;它在 Plan mode 卻說要改,它只是說不會真的改,看計畫不行就重下;它要重構或加功能,直接拒絕這次只改標語。檢查點:標語變了、diff 只有一行、已 commit。',
  '最後一段,收束。你今天做了件很專業的事:讓 AI 改東西而且全程在你掌握裡。',
  '今天最重要的一句:AI 不是不能改,是不能一開始就改。Plan mode 先讀先計畫,你點頭,再切 Edit 動手,最後 git diff 驗收。順序對了 AI 是好用的工讀生,順序錯了它是失控的裝潢工。',
  '今天四件事:裝加面板、模式 shift+tab 三種、模型 Opus 難題 Sonnet 日常、流程 Plan 讀到看計畫到護欄到 Edit 改到 git diff 驗收。',
  '回家作業一件:用 Plan mode 看計畫護欄 Edit 的流程,請 Claude Code 改一個商品名稱,用 git diff 確認沒亂改。選做是故意給模糊指令在 Plan mode 看它想改多少。',
  '下一堂預告:會改畫面了那資料呢?下一堂處理資料,AI 講得很順不代表講得對,我們看資料異常、要它固定格式、還會在面板裡修一次它的錯。今天辛苦了。',
];

export default [
  Cover, Recap0, Why, Method, Roadmap,
  WebVsProject, SameTaskWeb, SameTaskAgent, BoundaryQuiz, HandoffPrompt,
  Sec1, WhatIsCC, PanelVsTerm, CCDocs, CCMarket, Install, OpenPanel, FirstHello, PanelTour, PanelAt, CCPit,
  Sec2, ModesHead, ModeCyclePage, ModeDefault, ModeAuto, ModePlan, ModeHow, ModePit, ModeTable, ModelHead, ModelPick, ModelRun, ModelWhich, ModelsDoc, MoreFeatures, Shortcuts, SlashCommands, SlashDoc, SlashHygiene, Break1,
  Sec3, VibeHead, VibeSplit, WhyReadValue, Flow, ReadPrompt, ReadDo, ReadResult, ReadPractice,
  Sec4, PlanHead, PlanPrompt, PlanReview, GuardHead, GuardLines, ExecPrompt, Verify, VerifyDone, CommitChange, Pit,
  Sec5, Punchline, Recap, Homework, Next,
] satisfies Page[];
