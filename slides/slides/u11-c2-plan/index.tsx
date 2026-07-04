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
      <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>{['@AGENTS.md', '@missions.json'].map((t, i) => <span key={i} style={{ fontFamily: mono, fontSize: 15, color: '#9cdcfe', background: '#1e1e1e', border: '1px solid #3a3a3a', borderRadius: 6, padding: '2px 8px' }}>{t}</span>)}</div>
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

// ── 本堂新元件 ─────────────────────────────────────────────

// 編號重點列(定位、部件解剖用)
const NumRow = ({ n, a, b }: { n: string; a: any; b?: any }) => (
  <div style={{ display: 'flex', gap: 18, alignItems: 'baseline', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '17px 26px' }}>
    <span style={{ flexShrink: 0, fontFamily: mono, fontSize: 22, color: C.orange, fontWeight: 800 }}>{n}</span>
    <div><div style={{ fontSize: 29, fontWeight: 800 }}>{a}</div>{b ? <div style={{ fontSize: 24, color: C.muted, marginTop: 4, lineHeight: 1.4 }}>{b}</div> : null}</div>
  </div>
);

// mini-loop 進度徽章:每個迭代頁頂部,標出現在在小循環的哪一步
const LoopPill = ({ label, active }: { label: string; active: boolean }) => (
  <span style={{ fontFamily: mono, fontSize: 18, fontWeight: 700, padding: '6px 16px', borderRadius: 999, background: active ? C.orange : '#eceff3', color: active ? '#fff' : C.muted, whiteSpace: 'nowrap' }}>{label}</span>
);
const LoopBadge = ({ step }: { step?: 1 | 2 | 3 | 4 }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <LoopPill label="1 小規劃" active={step === 1} />
    <span style={{ color: C.faint, fontSize: 18 }}>→</span>
    <LoopPill label="2 AI 實作" active={step === 2} />
    <span style={{ color: C.faint, fontSize: 18 }}>→</span>
    <LoopPill label="3 立刻檢查" active={step === 3} />
    <span style={{ color: C.faint, fontSize: 18 }}>→</span>
    <LoopPill label="4 下一段" active={step === 4} />
  </div>
);

// 4 小時流程表
const SchedRow = ({ t, teach, learn, out, tone = 'plain' }: { t: string; teach: string; learn: string; out: string; tone?: 'plain' | 'break' | 'iter' }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '170px 1fr 1fr 330px', gap: 14, alignItems: 'center', padding: '8px 16px', borderBottom: `1px solid ${C.line}`, background: tone === 'break' ? '#eaf6f0' : '#fff' }}>
    <span style={{ fontFamily: mono, fontSize: 19, fontWeight: 700, color: tone === 'iter' ? C.orange : C.muted }}>{t}</span>
    <span style={{ fontSize: 21, fontWeight: 700 }}>{teach}</span>
    <span style={{ fontSize: 20, color: C.muted }}>{learn}</span>
    <span style={{ fontSize: 19, color: OK }}>{out}</span>
  </div>
);
const ScheduleTable = () => (
  <div style={{ border: `1px solid ${C.line}`, borderRadius: 14, overflow: 'hidden', boxShadow: '0 12px 40px -24px rgba(30,30,40,0.3)' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '170px 1fr 1fr 330px', gap: 14, padding: '10px 16px', background: C.ink, color: '#fff' }}>
      <span style={{ fontFamily: mono, fontSize: 18 }}>時間</span><span style={{ fontFamily: mono, fontSize: 18 }}>教什麼</span><span style={{ fontFamily: mono, fontSize: 18 }}>學到什麼觀念</span><span style={{ fontFamily: mono, fontSize: 18 }}>階段產物</span>
    </div>
    <SchedRow t="0:00-0:10" teach="承接課1,確認專案與環境" learn="開發是接續 repo,不是重開資料夾" out="專案可啟動、Git 乾淨" />
    <SchedRow t="0:10-0:20" teach="展示 Mission Deck 完成品" learn="先看目標,知道今天做出什麼" out="本堂目標對齊" />
    <SchedRow t="0:20-0:35" teach="Vibe Coding 不是亂做" learn="亂 prompt 的風險與正確做法" out="錯誤 vs 正確對比" />
    <SchedRow t="0:35-0:45" teach="認識本堂工具" learn="只知道工具用途,不學原理" out="今日工具對照表" />
    <SchedRow t="0:45-0:55" teach="建立 AI 開發護欄" learn="規則檔是用來限制 AI 的" out="AGENTS.md、CLAUDE.md" />
    <SchedRow t="0:55-1:05" teach="休息" learn="" out="" tone="break" />
    <SchedRow t="1:05-1:35" teach="開發迭代 1:Hero" learn="每段先小規劃、實作、檢查" out="Hero 初版" tone="iter" />
    <SchedRow t="1:35-2:05" teach="開發迭代 2:狀態選擇器" learn="互動要分段做、分段驗收" out="energy / goal / time 選擇器" tone="iter" />
    <SchedRow t="2:05-2:35" teach="開發迭代 3:Mission Cards" learn="卡片有資料、hover、selected" out="任務卡片區" tone="iter" />
    <SchedRow t="2:35-3:00" teach="開發迭代 4:Result Panel" learn="點選後要有明確回饋" out="結果面板、Energy Bar" tone="iter" />
    <SchedRow t="3:00-3:20" teach="個人化 missions.json" learn="改資料,不是亂改功能架構" out="個人化任務資料" />
    <SchedRow t="3:20-3:40" teach="Final Reviewer" learn="AI 產出要被檢查,不能直接相信" out="Reviewer 回報" />
    <SchedRow t="3:40-4:00" teach="Build、Commit、Push、展示" learn="做完要能驗收、提交、追蹤" out="build 通過、GitHub commit" />
  </div>
);

// 十條核心觀念格
const ConceptCard = ({ n, text, done }: { n: number; text: string; done?: boolean }) => (
  <div style={{ display: 'flex', gap: 14, alignItems: 'center', background: C.card, border: `1px solid ${done ? '#bfe6d4' : C.line}`, borderRadius: 12, padding: '15px 22px' }}>
    <span style={{ flexShrink: 0, fontFamily: mono, fontSize: 20, fontWeight: 800, color: done ? OK : C.orange }}>{done ? '✓' : String(n).padStart(2, '0')}</span>
    <span style={{ fontSize: 25, fontWeight: 700, lineHeight: 1.3 }}>{text}</span>
  </div>
);

// 完成品 mock:AI Life Mission Deck(依 stage 遞增長大)
const MockChip = ({ t, on }: { t: string; on?: boolean }) => (
  <span style={{ fontFamily: mono, fontSize: 14, padding: '3px 12px', borderRadius: 999, border: `1px solid ${on ? '#f0813c' : 'rgba(255,255,255,0.22)'}`, background: on ? 'rgba(226,87,13,0.4)' : 'rgba(255,255,255,0.06)', color: on ? '#ffd9c2' : 'rgba(255,255,255,0.78)', whiteSpace: 'nowrap' }}>{t}</span>
);
const MockChipGroup = ({ label, children }: { label: string; children: any }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontFamily: mono, fontSize: 13, color: 'rgba(255,255,255,0.45)', whiteSpace: 'nowrap' }}>{label}</span>{children}
  </div>
);
const MockCard = ({ icon, title, tag, sel }: { icon: string; title: string; tag: string; sel?: boolean }) => (
  <div style={{ flex: 1, background: sel ? 'rgba(226,87,13,0.16)' : 'rgba(255,255,255,0.06)', border: `2px solid ${sel ? '#f0813c' : 'rgba(255,255,255,0.14)'}`, borderRadius: 12, padding: '12px 14px', transform: sel ? 'translateY(-5px)' : 'none', boxShadow: sel ? '0 16px 30px -14px rgba(226,87,13,0.6)' : 'none' }}>
    <div style={{ fontSize: 24 }}>{icon}</div>
    <div style={{ fontSize: 17, fontWeight: 800, color: '#fff', marginTop: 5, whiteSpace: 'nowrap' }}>{title}</div>
    <div style={{ fontFamily: mono, fontSize: 12, color: sel ? '#ffb98a' : 'rgba(255,255,255,0.5)', marginTop: 4 }}>{sel ? '● selected' : tag}</div>
  </div>
);
const MockResultCell = ({ k, v }: { k: string; v: string }) => (
  <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, padding: '8px 12px' }}>
    <div style={{ fontFamily: mono, fontSize: 12, color: '#ffb98a' }}>{k}</div>
    <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.88)', marginTop: 3 }}>{v}</div>
  </div>
);
const MissionDeckMock = ({ stage, width = 700 }: { stage: 'hero' | 'selector' | 'cards' | 'result'; width?: number }) => {
  const lv = { hero: 1, selector: 2, cards: 3, result: 4 }[stage];
  return (
    <div style={{ width, background: 'linear-gradient(160deg,#0b1024 0%,#1c1140 100%)', border: '1px solid #2a2f45', borderRadius: 18, padding: 16, position: 'relative', overflow: 'hidden', boxShadow: '0 24px 60px -30px rgba(10,10,30,0.8)', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ position: 'absolute', top: -70, right: -50, width: 260, height: 260, borderRadius: '50%', background: 'radial-gradient(circle, rgba(226,87,13,0.4), transparent 70%)' }} />
      <div style={{ position: 'absolute', bottom: -80, left: -60, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(122,76,196,0.35), transparent 70%)' }} />
      <div style={{ position: 'relative', textAlign: 'center', padding: lv === 1 ? '74px 20px' : '24px 20px 12px' }}>
        <div style={{ fontFamily: mono, fontSize: 13, letterSpacing: '0.3em', color: '#ffb98a' }}>TODAY'S MISSION</div>
        <div style={{ fontSize: lv === 1 ? 44 : 32, fontWeight: 900, color: '#fff', letterSpacing: '-0.01em', marginTop: 8 }}>AI Life Mission Deck</div>
        <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', marginTop: 6 }}>選好狀態,領今天的任務</div>
        <div style={{ display: 'inline-block', marginTop: 12, background: 'linear-gradient(90deg,#e2570d,#b44cc4)', color: '#fff', fontSize: 15, fontWeight: 800, borderRadius: 999, padding: '8px 26px' }}>開始任務 →</div>
      </div>
      {lv >= 2 ? (
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', gap: 18, flexWrap: 'wrap' }}>
          <MockChipGroup label="能量"><MockChip t="低" on /><MockChip t="中" /><MockChip t="高" /></MockChipGroup>
          <MockChipGroup label="目標"><MockChip t="專注" /><MockChip t="放鬆" on /><MockChip t="成長" /></MockChipGroup>
          <MockChipGroup label="時間"><MockChip t="15" /><MockChip t="30" on /><MockChip t="60 分" /></MockChipGroup>
        </div>
      ) : null}
      {lv >= 3 ? (
        <div style={{ position: 'relative', display: 'flex', gap: 10 }}>
          <MockCard icon="🚶" title="出門快走 20 分" tag="energy: low" />
          <MockCard icon="📖" title="讀 10 頁閒書" tag="energy: low" sel />
          <MockCard icon="🧹" title="整理桌面 15 分" tag="energy: mid" />
        </div>
      ) : null}
      {lv >= 4 ? (
        <div style={{ position: 'relative', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '10px 12px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }}>
            <MockResultCell k="任務結果" v="讀 10 頁閒書" />
            <MockResultCell k="理由" v="低能量也能完成" />
            <MockResultCell k="不建議" v="不要順便滑手機" />
            <MockResultCell k="下一步" v="寫一句心得" />
          </div>
          <div style={{ marginTop: 10 }}>
            <div style={{ fontFamily: mono, fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>ENERGY</div>
            <div style={{ marginTop: 4, height: 10, borderRadius: 999, background: 'rgba(255,255,255,0.1)' }}><div style={{ width: '62%', height: '100%', borderRadius: 999, background: 'linear-gradient(90deg,#e2570d,#b44cc4)' }} /></div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

// 無聊的 starter 首頁 mock
const StarterTodo = ({ t }: { t: string }) => (
  <div style={{ borderBottom: '1px solid #e8e8e8', padding: '10px 4px', fontSize: 18, color: '#444' }}>☐ {t}</div>
);
const StarterMock = ({ width = 460 }: { width?: number }) => (
  <div style={{ width, background: '#fdfdfd', border: '1px solid #ddd', borderRadius: 12, padding: '22px 24px', boxShadow: '0 10px 30px -20px rgba(0,0,0,0.3)' }}>
    <div style={{ fontSize: 24, fontWeight: 700, color: '#333' }}>我的一天</div>
    <div style={{ fontSize: 14, color: '#999', marginTop: 2 }}>todo list v0.1</div>
    <div style={{ marginTop: 12 }}>
      <StarterTodo t="讀書" />
      <StarterTodo t="運動" />
      <StarterTodo t="整理房間" />
    </div>
    <div style={{ fontSize: 13, color: '#bbb', marginTop: 14 }}>© 2026 my-life-page</div>
  </div>
);

// 參考網站 → 低風險落地版 對照列
const RefRow = ({ site, tag, effect, safe }: { site: string; tag: string; effect: string; safe: string }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '620px 50px 1fr', gap: 14, alignItems: 'center' }}>
    <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 12, padding: '11px 20px' }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}><span style={{ fontSize: 24, fontWeight: 800 }}>{site}</span><span style={{ fontFamily: mono, fontSize: 15, color: C.faint }}>{tag}</span></div>
      <div style={{ fontSize: 19, color: C.muted, marginTop: 3 }}>{effect}</div>
    </div>
    <span style={{ textAlign: 'center', color: C.faint, fontSize: 26 }}>→</span>
    <div style={{ background: '#eaf6f0', border: '1px solid #bfe6d4', borderRadius: 12, padding: '14px 20px', fontSize: 21, color: '#0c5b3c', fontWeight: 600 }}>{safe}</div>
  </div>
);

// 工具對照列
const ToolRow = ({ name, use }: { name: string; use: string }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '330px 1fr', gap: 20, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 12, padding: '12px 26px' }}>
    <span style={{ fontFamily: mono, fontSize: 26, fontWeight: 800, color: C.orange }}>{name}</span>
    <span style={{ fontSize: 25, color: C.ink }}>{use}</span>
  </div>
);
const NotCard = ({ t }: { t: string }) => (
  <div style={{ background: '#fff7f4', border: '1px solid #f3d0c2', borderRadius: 14, padding: '18px 24px', fontSize: 27, fontWeight: 800, color: RED, textAlign: 'center' }}>✕ {t}</div>
);

// 小循環全圖
const LoopNode = ({ t, c }: { t: string; c: string }) => (
  <div style={{ background: c, color: '#fff', borderRadius: 999, padding: '16px 34px', fontSize: 28, fontWeight: 800, whiteSpace: 'nowrap' }}>{t}</div>
);
const LoopArrow = () => <span style={{ color: C.faint, fontSize: 32 }}>→</span>;
const IterChip = ({ n, t }: { n: string; t: string }) => (
  <span style={{ fontFamily: mono, fontSize: 21, background: '#eceff3', border: '1px solid #cfd5dd', borderRadius: 999, padding: '8px 20px', color: C.ink, fontWeight: 700 }}>{n} · {t}</span>
);
const MiniLoopDiagram = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <LoopNode t="小規劃" c={PUR} /><LoopArrow />
      <LoopNode t="AI 實作" c={BLUE} /><LoopArrow />
      <LoopNode t="立刻檢查" c={OK} /><LoopArrow />
      <LoopNode t="下一段" c={C.orange} />
      <span style={{ fontFamily: mono, fontSize: 24, color: C.orange, fontWeight: 800, marginLeft: 12 }}>× 4 段</span>
    </div>
    <div style={{ fontFamily: mono, fontSize: 20, color: C.faint }}>↺ 每一段都走同一圈,做完一段才進下一段</div>
    <div style={{ display: 'flex', gap: 14 }}>
      <IterChip n="1" t="Hero" />
      <IterChip n="2" t="狀態選擇器" />
      <IterChip n="3" t="Mission Cards" />
      <IterChip n="4" t="Result Panel" />
    </div>
  </div>
);

// 放行前四問小卡(迭代頁右欄)
const GateQ = ({ n, q }: { n: number; q: string }) => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'baseline', fontSize: 24, lineHeight: 1.35 }}><span style={{ flexShrink: 0, fontFamily: mono, fontSize: 19, color: C.orange, fontWeight: 800 }}>Q{n}</span>{q}</div>
);
const GateBox = () => (
  <div style={{ background: '#fbf3ee', border: `2px solid ${C.orange}`, borderRadius: 16, padding: '22px 26px' }}>
    <div style={{ fontFamily: mono, fontSize: 20, color: C.orange, fontWeight: 800, marginBottom: 14 }}>計畫回來,放行前四問</div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <GateQ n={1} q="只列了允許的三個檔?" />
      <GateQ n={2} q="沒有要新增套件?" />
      <GateQ n={3} q="沒有要動 package.json?" />
      <GateQ n={4} q="有寫怎麼驗收?" />
    </div>
  </div>
);
const RedFlagBox = () => (
  <div style={{ background: '#fff7f4', border: '1px solid #f3d0c2', borderRadius: 14, padding: '18px 24px' }}>
    <div style={{ fontFamily: mono, fontSize: 20, color: RED, fontWeight: 800, marginBottom: 10 }}>🚩 出現這些,立刻喊停</div>
    <div style={{ fontSize: 24, lineHeight: 1.55, color: C.ink }}>要裝套件 ・ 要動 package.json ・ 突然大重構 ・ 改到無關檔案</div>
  </div>
);

// ══════════ 段 0:開場定位 ══════════
const Cover: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>U11 · 第 2 堂 / 共 4 堂 · 4 小時 · 實戰</Eyebrow>
    <div className="ts-rise" style={{ marginTop: 34 }}>
      <div style={{ fontSize: 96, fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.06 }}>AI Life Mission Deck</div>
      <div style={{ fontSize: 42, fontWeight: 800, color: C.orange, marginTop: 16 }}>護欄內的 Vibe Coding</div>
      <div style={{ marginTop: 22 }}><Lead>跟著老師,用 <B>AI coding agent</B>,把一個普通的個人任務首頁,一步一步升級成沉浸式任務頁。今天不教工具原理,直接開工。</Lead></div>
    </div>
  </div><div style={{ position: 'absolute', right: 110, bottom: 84, fontFamily: mono, fontSize: 21, color: C.faint }}>missions.json · 4 段迭代 · 小規劃 → 實作 → 檢查 · git 收尾</div><Foot label="U11 · 課2" /></div>
);
const Position: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>課程定位 · 先講清楚</Eyebrow><Title size={52}>這是 AI 驅動開發課,不是傳統寫程式課</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 28, maxWidth: 1500 }}>
      <NumRow n="01" a="AI 寫程式,你控制 AI" b="重點是用 AI coding agent「可控地」完成開發 —— 規格、範圍、檢查都在你手上" />
      <NumRow n="02" a="全班做同一個固定實作" b="今天不是自由創作:跟著老師,大家做同一個 AI Life Mission Deck" />
      <NumRow n="03" a="可以個人化,不能改方向" b="任務資料、文案可以換成你自己的;功能架構不准亂改" />
      <Think q={<>「我可以做自己想做的網站嗎?」</>} a={<>今天不行 —— 先用同一份規格,把<B>「在護欄內帶 AI 做完一個作品」</B>練起來,以後才有本事自由發揮。</>} />
    </div>
  </div><Foot label="U11 · 課2 · 定位" /></div>
);
const RecapEnv: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>0:00 - 0:10 · 承接課1 · 不重教工具</Eyebrow><Title size={48}>打開專案,確認乾淨,直接開工</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 660px', gap: 40, marginTop: 24, alignItems: 'start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ fontSize: 28, color: C.muted, lineHeight: 1.55 }}>上一堂你已經會:VSCode、npm run dev、git status / diff / commit / push、Claude Code 面板、Plan Mode。<B>今天全部直接用,不重教。</B></div>
        <Atom n={1} act={<>用 VSCode 開課堂 starter 專案 <Key>mission-lab</Key> —— 開發是<B>接續 repo</B>,不是重新亂開資料夾。</>} see="Explorer 有 src/ 和 package.json。" />
        <Atom n={2} act={<>終端機跑 <Key>git status</Key>,不乾淨就舉手處理。</>} see="working tree clean。" />
      </div>
      <Term title="終端機 · 開工前確認" size={20} rows={[['cmd', 'git status'], ['ok', 'On branch main'], ['ok', 'nothing to commit, working tree clean'], ['cmd', 'npm run dev'], ['ok', '  ➜  Local: http://localhost:5173/']]} />
    </div>
    <div style={{ marginTop: 20 }}><Checkpoint items={['專案可啟動:localhost 看得到 starter 首頁', 'git status 乾淨']} /></div>
  </div><Foot label="U11 · 課2 · 承接課1" /></div>
);
const Schedule: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>今天的 4 小時 · 每階段都有:教什麼 / 學到什麼 / 產物</Eyebrow><Title size={44}>4 小時流程表</Title>
    <div className="ts-rise" style={{ marginTop: 18, maxWidth: 1700 }}><ScheduleTable /></div>
  </div><Foot label="U11 · 課2 · 流程表" /></div>
);
const CoreRules10: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>本堂十條核心觀念 · 先亮出來</Eyebrow><Title size={48}>今天每一段,都會回到這十條</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 28, maxWidth: 1620 }}>
      <ConceptCard n={1} text="AI 不能直接開工" />
      <ConceptCard n={2} text="每段功能前,先小規劃" />
      <ConceptCard n={3} text="每段做完,立刻檢查" />
      <ConceptCard n={4} text="AI 是執行者,不是決策者" />
      <ConceptCard n={5} text="可以改資料,不能亂改架構" />
      <ConceptCard n={6} text="不可以新增套件" />
      <ConceptCard n={7} text="不可以改 package.json" />
      <ConceptCard n={8} text="不可碰登入 / API / 資料庫 / 部署" />
      <ConceptCard n={9} text="最後一定要看 git diff" />
      <ConceptCard n={10} text="build / commit / push 才算完成" />
    </div>
  </div><Foot label="U11 · 課2 · 核心觀念" /></div>
);

// ══════════ 段 1:實作定案 · 完成品展示 ══════════
const SecDemo: Page = () => <Section no="1" title="今天要做什麼:AI Life Mission Deck" time="0:10 - 0:20" sub="先看完成品,再看我們參考了哪些酷網站 —— 但只取用可落地的效果。" />;
const StarterVsFinal: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>0:10 - 0:20 · 完成品展示 · 老師現場 demo</Eyebrow><Title size={44}>普通任務首頁 → AI Life Mission Deck</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '470px 70px 1fr', gap: 18, alignItems: 'center', marginTop: 22 }}>
      <div><div style={{ fontFamily: mono, fontSize: 18, color: C.faint, marginBottom: 10 }}>起點 · Starter</div><StarterMock /></div>
      <div style={{ textAlign: 'center', fontSize: 46, color: C.orange, fontWeight: 900 }}>→</div>
      <div><div style={{ fontFamily: mono, fontSize: 18, color: C.faint, marginBottom: 10 }}>終點 · 今天下課前的樣子</div><MissionDeckMock stage="result" width={760} /></div>
    </div>
    <div style={{ fontSize: 24, color: C.muted, marginTop: 16 }}>全班做<B>同一個</B>作品 —— 任務內容可以換成你自己的,功能方向不能變。</div>
  </div><Foot label="U11 · 課2 · 段1" /></div>
);
const FeatureAnatomy: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 1 · 完成版解剖 · 五個部件</Eyebrow><Title size={48}>AI Life Mission Deck 有什麼</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 13, marginTop: 26, maxWidth: 1520 }}>
      <NumRow n="01" a="Hero" b="頁面第一眼的主視覺:深色漸層、光暈、大標題、CTA 按鈕" />
      <NumRow n="02" a="狀態選擇器" b="使用者選 energy / goal / time,點了要有 selected 樣式" />
      <NumRow n="03" a="Mission Cards" b="至少 3 張任務卡:hover 浮起、選中有邊框" />
      <NumRow n="04" a="Result Panel + Energy Bar" b="任務結果、理由、不建議事項、下一步;能量條做視覺回饋" />
      <NumRow n="05" a="微互動" b="簡單 reveal 出現動畫 —— 純 CSS,不用 GSAP" />
    </div>
  </div><Foot label="U11 · 課2 · 段1" /></div>
);
const MissionsJson: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 700px', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div><Eyebrow>段 1 · 資料放哪裡</Eyebrow><Title size={48}>任務資料全部放 missions.json</Title></div>
      <Lead>資料來源是 <Key>src/missions.json</Key>,<B>暫時不用資料庫</B>。畫面上的每張卡、每段文字,都從這個檔來。</Lead>
      <Harvest>可以改資料內容;不可以改資料結構與功能方向。</Harvest>
    </div>
    <div className="ts-rise"><Term title="src/missions.json · 一筆任務長這樣" size={19} rows={[['dim', '{'], ['ok', '  "id": "m1",'], ['ok', '  "title": "出門快走 20 分鐘",'], ['ok', '  "energy": "low",'], ['ok', '  "goal": "放鬆",'], ['ok', '  "time": 30,'], ['ok', '  "reason": "低能量也能完成,先動起來",'], ['ok', '  "avoid": "不要邊走邊回訊息",'], ['ok', '  "next": "回來喝水,伸展 5 分鐘"'], ['dim', '}']]} /></div>
  </div><Foot label="U11 · 課2 · 段1" /></div>
);
const RefSites: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 1 · 我們參考了哪些酷網站體驗</Eyebrow><Title size={42}>參考很酷的,只取可落地的</Title>
    <div style={{ fontSize: 23, color: C.muted, marginTop: 10, maxWidth: 1600 }}>備課時先看過近期的 Awwwards / Codrops / Three.js / GSAP showcase —— 本堂只取<B>零基礎 4 小時內做得到</B>的低風險版本。</div>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 20, maxWidth: 1700 }}>
      <RefRow site="The Monolith Project" tag="Awwwards SOTD" effect="Three.js + GSAP 的 3D 滾動敘事網站" safe="低風險版:簡單 reveal 出現效果(純 CSS)" />
      <RefRow site="GSAP 官網" tag="Awwwards SOTD" effect="滾動驅動的動畫展示" safe="低風險版:區塊進場 reveal,不做滾動綁定" />
      <RefRow site="StackMotionHoverEffects" tag="Codrops" effect="高級卡片 hover 實驗" safe="低風險版:hover、selected、shadow、transform" />
      <RefRow site="Linear / Notion / Framer" tag="SaaS 產品官網" effect="深色漸層 Hero、玻璃質感、光暈" safe="低風險版:Hero + CTA + 卡片結構,CSS 漸層光暈" />
      <RefRow site="OHZI Interactive" tag="Awwwards 開發者獎" effect="WebGL 3D 沉浸式視覺" safe="低風險版:光暈、漸層、浮動物件" />
    </div>
  </div><Foot label="U11 · 課2 · 段1" /></div>
);
const MiniLoopIntro: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 1 · 今天的節奏</Eyebrow><Title size={48}>小步快跑,每一步都檢查</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 30 }}>
      <div style={{ fontSize: 28, color: C.muted, lineHeight: 1.55, maxWidth: 1560 }}>今天<B>不是</B>先上 planner / implementer / reviewer 三大章 —— 而是把作品切成<B>四段</B>,每一段都跑一次小循環。完整的 <B>Final Reviewer</B> 留到最後才做一次。</div>
      <MiniLoopDiagram />
      <Harvest>小規劃 → AI 實作 → 立刻檢查 → 下一段。</Harvest>
    </div>
  </div><Foot label="U11 · 課2 · 段1" /></div>
);

// ══════════ 段 2:Vibe Coding 不是亂做 + 工具 ══════════
const SecVibe: Page = () => <Section no="2" title="Vibe Coding 不是亂做" time="0:20 - 0:45" sub="先看一次亂做會發生什麼,再認識今天會用到的工具 —— 只認識,不教原理。" />;
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
const PainDemo: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '620px 1fr', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise"><ClaudePanel mode="default" convo={[{ who: 'user', text: '幫我把首頁變得很炫、很有科技感,越厲害越好!' }, { who: 'ai', text: '已完成!我安裝了 three、gsap、framer-motion 三個套件,重寫了 App.jsx,並更新了 package.json 與 vite 設定…' }, { who: 'user', text: '(git status:9 個檔案被改,畫面還全白了)' }]} /></div>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div><Eyebrow>段 2 · 先痛一次 · 老師示範</Eyebrow><Title size={46}>一句模糊的 prompt,換來一次大翻修</Title></div>
      <Lead>這就是<B>沒有護欄的 vibe coding</B>:AI 能力很強、熱心過頭。你要的是一個區塊,它給你一次大翻修 —— 還裝了三個你不認識的套件。</Lead>
      <Harvest>所以今天:每一段先小規劃、範圍講死、做完立刻檢查。</Harvest>
    </div>
  </div><Foot label="U11 · 課2 · 段2" /></div>
);
const WrongVsRight: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 2 · 錯誤 vs 正確 · 對比</Eyebrow><Title size={46}>同一個願望,兩種 prompt</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 24, maxWidth: 1640 }}>
      <PromptCard size={23} label="❌ 錯誤示範 · 不要這樣貼">{`幫我把網頁變酷一點,
加一些 3D 和動畫,
越厲害越好!`}</PromptCard>
      <PromptCard size={21} label="✅ 正確示範 · 今天每段都長這樣">{`這一段只做「Hero 區」:
1. 深色漸層背景 + 主標題 + CTA 按鈕
2. 只能改 src/App.jsx、src/styles.css
3. 不可新增套件、不可改 package.json
先告訴我計畫,等我同意才動手。`}</PromptCard>
    </div>
    <div style={{ marginTop: 24 }}><Harvest>差別不是禮貌,是有規格、有範圍、有檢查。</Harvest></div>
  </div><Foot label="U11 · 課2 · 段2" /></div>
);
const VibePunch: Page = () => (
  <div style={{ ...fill, background: C.ink, color: '#fff' }}><div style={{ ...pad }}>
    <Eyebrow>本堂 punchline</Eyebrow>
    <div style={{ fontSize: 76, fontWeight: 900, lineHeight: 1.22, marginTop: 28, maxWidth: 1600, letterSpacing: '-0.02em' }}>Vibe Coding 不是<span style={{ color: C.orange }}>亂感覺</span>,<br />是<span style={{ color: C.orange }}>有規格、有範圍、有檢查</span>的快速迭代。</div>
    <div style={{ fontSize: 31, color: 'rgba(255,255,255,0.7)', marginTop: 34, maxWidth: 1420, lineHeight: 1.55 }}>規格 = 每段先小規劃;範圍 = 只准改三個檔;檢查 = 每段做完立刻看。速度是 AI 給的,護欄是你架的。</div>
  </div><div style={{ position: 'absolute', left: 110, bottom: 44, fontFamily: mono, fontSize: 19, color: 'rgba(255,255,255,0.5)' }}>U11 · 課2 · 記住這句</div></div>
);
const ToolTable: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>0:35 - 0:45 · 工具認識 · 不教原理</Eyebrow><Title size={46}>今日工具對照表:知道是什麼就夠了</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 22, maxWidth: 1560 }}>
      <ToolRow name="React" use="用來組成網頁畫面的工具" />
      <ToolRow name="CSS" use="用來控制樣式、排版、互動回饋" />
      <ToolRow name="JSON" use="用來放任務資料,暫時不用資料庫" />
      <ToolRow name="Three.js" use="可以在網頁上做 3D 圖形的工具" />
      <ToolRow name="GSAP" use="可以做動畫與滾動效果的工具" />
      <ToolRow name="Git" use="用來記錄和檢查修改" />
      <ToolRow name="AI coding agent" use="幫我們依照規格修改程式的工具" />
    </div>
    <div style={{ fontSize: 23, color: C.muted, marginTop: 18 }}>程式都由 AI 來寫 —— 你只要知道這些工具<B>是什麼、用來幹嘛</B>。</div>
  </div><Foot label="U11 · 課2 · 工具" /></div>
);
const NotTeach: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 2 · 邊界 · 防呆</Eyebrow><Title size={48}>今天明確不教這些</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18, marginTop: 30, maxWidth: 1560 }}>
      <NotCard t="Three.js 原理" />
      <NotCard t="GSAP 寫法" />
      <NotCard t="React 深入觀念" />
      <NotCard t="CSS 動畫細節" />
      <NotCard t="WebGL" />
      <NotCard t="新增套件" />
    </div>
    <div style={{ marginTop: 26 }}><Think q={<>「不教原理,我怎麼會用?」</>} a={<>程式 AI 寫;你負責<B>規格、範圍、檢查</B> —— 這正是 AI 驅動開發要練的能力。想深入的,下課後再挖。</>} /></div>
  </div><Foot label="U11 · 課2 · 段2" /></div>
);

// ══════════ 段 3:建立 AI 開發護欄 ══════════
const SecGuard: Page = () => <Section no="3" title="建立 AI 開發護欄:AGENTS.md / CLAUDE.md" time="0:45 - 0:55" sub="AI 不該每次都從零理解你的專案。給 AI 的專案規則寫成檔案放進 repo,每個 AI 進來都先讀它。" />;
const WhyRules: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 3 · 為什麼需要守則檔</Eyebrow><Title size={54}>新同事報到,第一件事是看團隊守則</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 32 }}>
      <Analogy>AI 每次開新對話,就像<B>新同事第一天報到</B>:能力很強,但不知道這個專案哪些檔能動、怎麼驗收。你可以每次口頭交代 ── 或者,把守則寫成檔案放在門口。</Analogy>
      <Lead>守則檔就是<B>寫給 AI 看的專案規則</B>:專案是什麼、哪些檔可以改、哪些不准碰、改完怎麼驗收。寫一次,每輪對話都自動生效。</Lead>
      <Harvest>與其每次用嘴管 AI,不如把規則寫進 repo。</Harvest>
    </div>
  </div><Foot label="U11 · 課2 · 段3" /></div>
);
const WhatAgentsMd: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 3 · 檔案一</Eyebrow><Title size={56}>AGENTS.md 是什麼?</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 34, maxWidth: 1480 }}>
      {[['通用的 agent rule file', '不是只給 Claude ── 是給「所有 coding agent」看的專案規則'], ['寫專案的遊戲規則', '專案怎麼跑、哪些檔可改、哪些不可改、驗收指令是什麼'], ['跨工具通用', 'Codex、其他 coding agent 也讀得懂這個檔']].map(([a, b], i) => (
        <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'baseline', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '20px 26px' }}><span style={{ flexShrink: 0, fontFamily: mono, fontSize: 22, color: C.orange, fontWeight: 800 }}>0{i + 1}</span><div><div style={{ fontSize: 30, fontWeight: 800 }}>{a}</div><div style={{ fontSize: 25, color: C.muted, marginTop: 4, lineHeight: 1.4 }}>{b}</div></div></div>
      ))}
    </div>
  </div><Foot label="U11 · 課2 · 段3" /></div>
);
const WhatClaudeMd: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 3 · 檔案二</Eyebrow><Title size={56}>CLAUDE.md 是什麼?</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 34, maxWidth: 1480 }}>
      {[['Claude Code 的專案記憶', 'Claude Code 每次啟動,主要讀的就是這個檔'], ['寫 Claude 專屬的規則', '例如「動手前先 Plan Mode」「碰 package.json 先停下來問」'], ['可以 @AGENTS.md 引入共用規則', '一行 import,共用守則不用抄兩份']].map(([a, b], i) => (
        <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'baseline', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '20px 26px' }}><span style={{ flexShrink: 0, fontFamily: mono, fontSize: 22, color: C.orange, fontWeight: 800 }}>0{i + 1}</span><div><div style={{ fontSize: 30, fontWeight: 800 }}>{a}</div><div style={{ fontSize: 25, color: C.muted, marginTop: 4, lineHeight: 1.4 }}>{b}</div></div></div>
      ))}
    </div>
  </div><Foot label="U11 · 課2 · 段3" /></div>
);
const FileRelationLimits: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 3 · 兩檔怎麼搭 + 它們的極限</Eyebrow><Title size={48}>共用規則寫一份;但守則檔不是保險箱</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 90px 1fr', gap: 0, alignItems: 'center', marginTop: 30, maxWidth: 1540 }}>
      <FileCard name="CLAUDE.md" sub="Claude Code 讀這個" color={C.orange} lines={['@AGENTS.md  ← 引入共用規則', '## Claude Code specific', 'Use Plan Mode before editing.']} />
      <div style={{ textAlign: 'center', fontSize: 40, color: C.faint }}>→</div>
      <FileCard name="AGENTS.md" sub="所有 agent 都讀得懂" color={BLUE} lines={['## Allowed files / Do not edit', '## Workflow', '## Git rules']} />
    </div>
    <div style={{ marginTop: 26 }}><Think q={<>「規則寫好了,AI 就不會出錯了吧?」</>} a={<>不是。守則檔是 <B>context,不是保險箱</B> —— 真正的保險是每一段的小規劃 + 立刻檢查 + git diff。</>} /></div>
  </div><Foot label="U11 · 課2 · 段3" /></div>
);
const AgentsContent: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 3 · 照抄卡 · AGENTS.md</Eyebrow><Title size={44}>建立 AGENTS.md,貼上這份內容</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, marginTop: 24, maxWidth: 1600 }}>
      <PromptCard size={20} label="AGENTS.md(前半)">{`# AGENTS.md

## Project
AI Life Mission Deck (React + Vite).

## Allowed files for this lesson
- src/App.jsx
- src/styles.css
- src/missions.json

## Do not edit
- package.json / package-lock.json
- vite.config.js / index.html
- node_modules/ / .git/`}</PromptCard>
      <PromptCard size={20} label="AGENTS.md(後半,接著貼)">{`## Workflow
1. Plan each step first.
2. Do not edit before approval.
3. Smallest change for the current step.
4. After editing, list changed files.
5. Never add packages or touch
   login / API / database / deploy.
6. Run npm run build before commit.

## Git rules
- Check git status before editing.
- Use git diff after editing.
- Do not push unless the human confirms.`}</PromptCard>
    </div>
  </div><Foot label="U11 · 課2 · 段3" /></div>
);
const ClaudeContent: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 3 · 照抄卡 · CLAUDE.md</Eyebrow><Title size={44}>再建立 CLAUDE.md,一樣照貼</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 640px', gap: 30, marginTop: 24, alignItems: 'start', maxWidth: 1620 }}>
      <PromptCard size={22} label="CLAUDE.md(完整內容)">{`# CLAUDE.md

@AGENTS.md

## Claude Code specific
Use Plan Mode before editing.
Ask before changing files.
If a change touches package.json or
adds a package, stop and ask first.`}</PromptCard>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Atom n={1} act={<>在 mission-lab 專案根目錄建檔:終端機打 <Key>code AGENTS.md</Key>、<Key>code CLAUDE.md</Key>,或 Explorer 右鍵 New File。</>} see="兩個新分頁打開。" />
        <Atom n={2} act={<>分別貼上老師給的內容,<B>存檔</B>。</>} see="Explorer 出現兩個檔案。" />
      </div>
    </div>
  </div><Foot label="U11 · 課2 · 段3" /></div>
);
const CanCannot: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 3 · 個人化的邊界 · 防呆</Eyebrow><Title size={52}>可以改 / 不可以改</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 28, maxWidth: 1560 }}>
      <SplitCol who="✅ 可以改" color={OK} bg="#eaf6f0" items={['任務資料', '文案(標題、理由、按鈕字)', '任務主題(讀書 / 健身 / 工作版)', 'missions.json 裡的內容', '小範圍視覺微調']} />
      <SplitCol who="⛔ 不可以改" color={RED} bg="#fff7f4" items={['package.json', '登入', 'API', '資料庫', '部署設定', '專案整體架構', '無關檔案', '任意新增套件']} />
    </div>
    <div style={{ marginTop: 22 }}><Harvest>這份清單已寫進 AGENTS.md —— 最後 Final Reviewer 就拿它對答案。</Harvest></div>
  </div><Foot label="U11 · 課2 · 段3" /></div>
);
const RulesPit: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 3 · 卡住了?+ 檢查點</Eyebrow><Title size={50}>兩個檔案就位才往下</Title>
    <div className="ts-rise" style={{ marginTop: 30, maxWidth: 1500 }}><Pitfall items={[['檔名打錯:', '一定是大寫的 AGENTS.md / CLAUDE.md,而且放在 mission-lab 專案根目錄(跟 package.json 同層)。'], ['貼完沒存檔:', '分頁標題有黑點 = 沒存。Ctrl+S 存檔。'], ['兩份內容貼反:', 'CLAUDE.md 開頭是 @AGENTS.md;AGENTS.md 開頭是 # AGENTS.md。']]} /></div>
    <div style={{ marginTop: 20 }}><Checkpoint items={['Explorer 看得到 AGENTS.md 和 CLAUDE.md', 'CLAUDE.md 開頭附近有 @AGENTS.md', 'git status 只多了這兩個守則檔']} /></div>
  </div><Foot label="U11 · 課2 · 段3" /></div>
);

const Break1: Page = () => <BreakSlide note="回來直接開工:迭代 1,Hero 區 —— 你的第一個小循環。" />;

// ══════════ 段 4:迭代 1 · Hero(完整教一次 mini-loop)══════════
const SecIt1: Page = () => <Section no="4" title="迭代 1:Hero 區" time="1:05 - 1:35" sub="第一段最慢、講最細 —— 之後三段都是同一個節奏:小規劃 → AI 實作 → 立刻檢查 → 下一段。" />;
const It1Goal: Page = () => (
  <div style={fill}><div style={{ ...pad }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><Eyebrow>迭代 1 · 這一段的目標</Eyebrow><LoopBadge /></div>
    <Title size={48}>Hero:頁面第一眼的主視覺</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 620px', gap: 40, marginTop: 22, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <Lead>規格:全寬 Hero、深色漸層背景、主標題「AI Life Mission Deck」、一句副標、一顆「開始任務」CTA、<B>純 CSS</B> 光暈。</Lead>
        <Harvest>驗收:打開 localhost,首頁最上方看得到它,原本內容沒壞。</Harvest>
      </div>
      <MissionDeckMock stage="hero" width={620} />
    </div>
  </div><Foot label="U11 · 課2 · 迭代1" /></div>
);
const It1Plan: Page = () => (
  <div style={fill}><div style={{ ...pad }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><Eyebrow>迭代 1 · 小規劃 Prompt</Eyebrow><LoopBadge step={1} /></div>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}><Title size={42}>先小規劃:AI 不能直接開工</Title><span style={{ fontFamily: mono, fontSize: 20, color: PUR, fontWeight: 700 }}>● 先切 Plan Mode(shift+tab)再貼</span></div>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 520px', gap: 28, marginTop: 18, alignItems: 'start', maxWidth: 1680 }}>
      <PromptCard size={19} label="小規劃 prompt · 迭代 1">{`先讀 AGENTS.md、CLAUDE.md、src/App.jsx、src/styles.css。
先不要改任何檔案。

這一段只做「Hero 區」:
1. 首頁最上方加全寬 Hero:深色漸層背景、
   主標題「AI Life Mission Deck」、一句副標、
   一顆「開始任務」按鈕
2. 用純 CSS 做光暈與漸層,不用任何套件
3. 不做其他區塊

請告訴我:
A. 你會改哪些檔案(只能是允許的三個檔)
B. 每個檔案各改什麼
C. 改完我要怎麼驗收
等我回覆「同意」才能動手。`}</PromptCard>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <GateBox />
        <div style={{ fontSize: 25, color: C.muted, lineHeight: 1.5 }}>四題都過才回「同意」。<B>AI 是執行者,拍板的是你。</B></div>
      </div>
    </div>
  </div><Foot label="U11 · 課2 · 迭代1" /></div>
);
const It1Impl: Page = () => (
  <div style={fill}><div style={{ ...pad }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><Eyebrow>迭代 1 · 實作 Prompt</Eyebrow><LoopBadge step={2} /></div>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}><Title size={42}>放行:只照計畫實作</Title><span style={{ fontFamily: mono, fontSize: 20, color: OK, fontWeight: 700 }}>● 核准後,切出 Plan Mode 再貼</span></div>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 560px', gap: 28, marginTop: 18, alignItems: 'start', maxWidth: 1680 }}>
      <PromptCard size={20} label="實作 prompt · 每段都同一張">{`同意,請照剛剛核准的計畫實作。

限制:
1. 只能改 src/App.jsx、src/styles.css、
   src/missions.json
2. 不可新增套件、不可改 package.json
3. 不可改專案整體架構、不可動無關檔案
4. 超出計畫的事,先停下來問我

完成後回報:
A. 實際改了哪些檔
B. 各改了什麼
C. 我現在要怎麼驗收`}</PromptCard>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Atom n={1} act={<>按 <Key>shift</Key>+<Key>tab</Key> 切出 Plan Mode。</>} see="面板底部不再是 plan mode。" />
        <Atom n={2} act={<>貼上左邊的 prompt,送出,逐檔允許。</>} see="它開始照計畫修改。" />
        <RedFlagBox />
      </div>
    </div>
  </div><Foot label="U11 · 課2 · 迭代1" /></div>
);
const It1Check: Page = () => (
  <div style={fill}><div style={{ ...pad }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><Eyebrow>迭代 1 · Mini Check Prompt</Eyebrow><LoopBadge step={3} /></div>
    <Title size={42}>立刻檢查:AI 自查一次,你自己看一次</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 560px', gap: 28, marginTop: 18, alignItems: 'start', maxWidth: 1680 }}>
      <PromptCard size={20} label="mini check prompt · 每段做完都貼">{`先不要改任何東西,只做檢查:
1. 跑 git status,列出這一段動到的檔案
2. 有沒有動到允許的三個檔以外的檔?
3. 有沒有新增套件、有沒有改 package.json?
4. 對照這一段的規格,
   哪些做到了、哪些沒做到?
只回報,不修改。`}</PromptCard>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Atom n={1} act={<>自己跑 <Key>npm run dev</Key>,看 Hero。</>} see="漸層、標題、CTA、光暈都在。" />
        <Atom n={2} act={<>整頁滑一遍,原本的內容沒壞。</>} see="其他區塊都正常。" />
        <Atom n={3} act={<>對照它的回報:檔案清單合理?</>} see="只動了允許的檔。" />
      </div>
    </div>
  </div><Foot label="U11 · 課2 · 迭代1" /></div>
);
const It1Pit: Page = () => (
  <div style={fill}><div style={{ ...pad }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><Eyebrow>迭代 1 · 卡住了?+ 檢查點</Eyebrow><LoopBadge step={4} /></div>
    <Title size={44}>過了就往下一段 —— 節奏記住了嗎?</Title>
    <div className="ts-rise" style={{ marginTop: 22, maxWidth: 1520 }}><Pitfall items={[['它說要裝套件才能做漸層 / 光暈:', '拒絕。純 CSS 就做得出來 —— 規格裡寫死了。'], ['畫面沒變:', '確認 npm run dev 活著、瀏覽器重新整理,再問它改完了沒。'], ['它順便改了別的區塊:', '叫它撤回:「這超出這一段的規格,請還原無關修改。」']]} /></div>
    <div style={{ marginTop: 18 }}><Checkpoint items={['Hero 出現:漸層、標題、CTA、光暈都在', 'mini check 回報只動了允許的檔', '接下來三段,都是這個節奏']} /></div>
  </div><Foot label="U11 · 課2 · 迭代1" /></div>
);

// ══════════ 段 5:迭代 2 · 狀態選擇器 ══════════
const SecIt2: Page = () => <Section no="5" title="迭代 2:狀態選擇器" time="1:35 - 2:05" sub="同一個小循環再走一次 —— 這次你會快很多。" />;
const It2Goal: Page = () => (
  <div style={fill}><div style={{ ...pad }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><Eyebrow>迭代 2 · 這一段的目標</Eyebrow><LoopBadge /></div>
    <Title size={48}>狀態選擇器:energy / goal / time</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 640px', gap: 40, marginTop: 22, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <Lead>規格:Hero 下方加三組選項 —— 能量(低 / 中 / 高)、目標(專注 / 放鬆 / 成長)、時間(15 / 30 / 60 分);點選要有明顯 <B>selected 樣式</B>;先存畫面狀態,不接後端。</Lead>
        <Harvest>驗收:三組都能點、看得出目前選了什麼。</Harvest>
      </div>
      <MissionDeckMock stage="selector" width={640} />
    </div>
  </div><Foot label="U11 · 課2 · 迭代2" /></div>
);
const It2Plan: Page = () => (
  <div style={fill}><div style={{ ...pad }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><Eyebrow>迭代 2 · 小規劃 Prompt</Eyebrow><LoopBadge step={1} /></div>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}><Title size={42}>同一張 prompt,只換「這一段只做」</Title><span style={{ fontFamily: mono, fontSize: 20, color: PUR, fontWeight: 700 }}>● 一樣先切 Plan Mode</span></div>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 520px', gap: 28, marginTop: 18, alignItems: 'start', maxWidth: 1680 }}>
      <PromptCard size={20} label="小規劃 prompt · 迭代 2(只有規格段變了)">{`(前面照舊:先讀檔、先不要改任何檔案)

這一段只做「狀態選擇器」:
1. Hero 下方加三組選項:
   能量(低/中/高)、目標(專注/放鬆/成長)、
   時間(15/30/60 分)
2. 點選要有明顯的 selected 樣式
3. 結果先存畫面狀態,不接後端

(後面照舊:A/B/C 回報,等我回覆「同意」)`}</PromptCard>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <GateBox />
        <div style={{ fontSize: 25, color: C.muted, lineHeight: 1.5 }}>規格變了,<B>節奏不變</B>:四問照舊、同意才放行。</div>
      </div>
    </div>
  </div><Foot label="U11 · 課2 · 迭代2" /></div>
);
const It2Impl: Page = () => (
  <div style={fill}><div style={{ ...pad }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><Eyebrow>迭代 2 · 實作</Eyebrow><LoopBadge step={2} /></div>
    <Title size={44}>實作 prompt 同一張 —— 但盯緊「順便」</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 26, maxWidth: 1520 }}>
      <Lead>切出 Plan Mode,貼<B>迭代 1 那張實作 prompt</B>(一字不改):只照計畫、只動三個檔、超出計畫先問。</Lead>
      <Think q={<>AI 說:「我順便把 Hero 改得更漂亮,好嗎?」</>} a={<>不行。超出這一段的規格 —— <B>AI 是執行者,不是決策者</B>。回它:只做選擇器。</>} />
    </div>
  </div><Foot label="U11 · 課2 · 迭代2" /></div>
);
const It2Check: Page = () => (
  <div style={fill}><div style={{ ...pad }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><Eyebrow>迭代 2 · 立刻檢查</Eyebrow><LoopBadge step={3} /></div>
    <Title size={44}>mini check 照舊,畫面自己點一遍</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 26, maxWidth: 1520 }}>
      <Atom n={1} act={<>貼同一張 mini check prompt,看它的回報。</>} see="只動了允許的檔、沒加套件。" />
      <Atom n={2} act={<>自己點:能量 / 目標 / 時間 三組都選一輪。</>} see="每組看得出目前選了什麼。" />
      <Atom n={3} act={<>往上滑 —— Hero 還好好的嗎?</>} see="迭代 1 的成果沒壞。" />
    </div>
    <div style={{ marginTop: 20 }}><Checkpoint items={['三組選項都能選、有 selected 回饋', '只動了允許的檔', '下一段:卡片要吃資料了']} /></div>
  </div><Foot label="U11 · 課2 · 迭代2" /></div>
);

// ══════════ 段 6:迭代 3 · Mission Cards ══════════
const SecIt3: Page = () => <Section no="6" title="迭代 3:Mission Cards" time="2:05 - 2:35" sub="這一段開始有資料 —— missions.json 進場,卡片內容全部從資料來。" />;
const It3Goal: Page = () => (
  <div style={fill}><div style={{ ...pad }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><Eyebrow>迭代 3 · 這一段的目標</Eyebrow><LoopBadge /></div>
    <Title size={48}>Mission Cards:至少三張,吃資料</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 660px', gap: 40, marginTop: 22, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <Lead>規格:至少 3 張任務卡;內容<B>全部來自 src/missions.json</B>;hover 卡片浮起(shadow + transform);點選有 selected 邊框;依目前選的狀態過濾或排序。</Lead>
        <Harvest>驗收:改 missions.json 一個字,畫面要跟著變。</Harvest>
      </div>
      <MissionDeckMock stage="cards" width={660} />
    </div>
  </div><Foot label="U11 · 課2 · 迭代3" /></div>
);
const It3Plan: Page = () => (
  <div style={fill}><div style={{ ...pad }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><Eyebrow>迭代 3 · 小規劃 Prompt</Eyebrow><LoopBadge step={1} /></div>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}><Title size={42}>這段的規格,連欄位名都講死</Title><span style={{ fontFamily: mono, fontSize: 20, color: PUR, fontWeight: 700 }}>● Plan Mode 照舊</span></div>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 520px', gap: 28, marginTop: 18, alignItems: 'start', maxWidth: 1680 }}>
      <PromptCard size={19} label="小規劃 prompt · 迭代 3(規格段)">{`這一段只做「Mission Cards」:
1. 建立 src/missions.json,至少 6 筆任務,
   每筆欄位固定:id、title、energy、goal、
   time、reason、avoid、next
2. 選擇器下方顯示至少 3 張任務卡,
   內容全部來自 missions.json
3. hover 浮起(shadow + transform)、
   點選有 selected 邊框
4. 依目前選的狀態過濾或排序

(前後照舊:先讀檔不動手 → A/B/C → 等「同意」)`}</PromptCard>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <GateBox />
        <Harvest>欄位名是規格的一部分 —— AI 不准自己改欄位名。</Harvest>
      </div>
    </div>
  </div><Foot label="U11 · 課2 · 迭代3" /></div>
);
const It3Impl: Page = () => (
  <div style={fill}><div style={{ ...pad }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><Eyebrow>迭代 3 · 實作</Eyebrow><LoopBadge step={2} /></div>
    <Title size={44}>資料歸 missions.json,畫面歸 App.jsx</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 26, maxWidth: 1520 }}>
      <Lead>實作 prompt 照舊貼。這段最常見的走鐘:AI 把任務資料<B>直接寫死在 App.jsx 裡</B> —— 叫它改回從 missions.json 讀。</Lead>
      <Harvest>可以改資料,不能亂改架構 —— 卡片元件歸 App.jsx,內容歸 missions.json,分得乾乾淨淨。</Harvest>
      <RedFlagBox />
    </div>
  </div><Foot label="U11 · 課2 · 迭代3" /></div>
);
const It3Check: Page = () => (
  <div style={fill}><div style={{ ...pad }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><Eyebrow>迭代 3 · 立刻檢查 + 一個小實驗</Eyebrow><LoopBadge step={3} /></div>
    <Title size={44}>證明它真的是「資料驅動」</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 26, maxWidth: 1520 }}>
      <Atom n={1} act={<>mini check prompt 照舊貼,看回報。</>} see="多了 missions.json,沒動別的。" />
      <Atom n={2} act={<>畫面:至少 3 張卡、hover 浮起、點選有邊框。</>} see="卡片內容就是 missions.json 裡的字。" />
      <Atom n={3} act={<>小實驗:自己把 missions.json 某個 title 改一個字,存檔。</>} see="畫面上的卡片立刻跟著變 —— 資料驅動成立。" />
    </div>
    <div style={{ marginTop: 20 }}><Checkpoint items={['至少 3 張卡,內容來自 missions.json', 'hover / selected 都有效果', '改資料 → 畫面會變']} /></div>
  </div><Foot label="U11 · 課2 · 迭代3" /></div>
);

// ══════════ 段 7:迭代 4 · Result Panel + Energy Bar ══════════
const SecIt4: Page = () => <Section no="7" title="迭代 4:Result Panel 與 Energy Bar" time="2:35 - 3:00" sub="點下去要有明確回饋 —— 這一段做完,你的頁面就是開場看到的完成品。" />;
const It4Goal: Page = () => (
  <div style={fill}><div style={{ ...pad }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><Eyebrow>迭代 4 · 這一段的目標</Eyebrow><LoopBadge /></div>
    <Title size={46}>Result Panel:點選後的明確回饋</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 680px', gap: 36, marginTop: 20, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <Lead>規格:點選任務卡後,Result Panel 顯示四塊 —— <B>任務結果、理由、不建議事項、下一步</B>(取自 reason / avoid / next);<B>Energy Bar</B> 依選的能量變化;簡單 CSS reveal 出現動畫,不用 GSAP。</Lead>
        <Harvest>驗收:點不同卡,四塊內容和能量條都會跟著換。</Harvest>
      </div>
      <MissionDeckMock stage="result" width={680} />
    </div>
  </div><Foot label="U11 · 課2 · 迭代4" /></div>
);
const It4Plan: Page = () => (
  <div style={fill}><div style={{ ...pad }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><Eyebrow>迭代 4 · 小規劃 Prompt</Eyebrow><LoopBadge step={1} /></div>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}><Title size={42}>最後一段規格,一樣講死</Title><span style={{ fontFamily: mono, fontSize: 20, color: PUR, fontWeight: 700 }}>● Plan Mode 照舊</span></div>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 520px', gap: 28, marginTop: 18, alignItems: 'start', maxWidth: 1680 }}>
      <PromptCard size={20} label="小規劃 prompt · 迭代 4(規格段)">{`這一段只做「Result Panel + Energy Bar」:
1. 點選任務卡後,下方 Result Panel 顯示四塊:
   任務結果、理由、不建議事項、下一步
   (取自該筆的 reason / avoid / next)
2. 加一條 Energy Bar,依選的能量
   顯示不同長度與顏色
3. 加簡單的 CSS 出現動畫,不用 GSAP

(前後照舊:先讀檔不動手 → A/B/C → 等「同意」)`}</PromptCard>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <GateBox />
        <div style={{ fontSize: 25, color: C.muted, lineHeight: 1.5 }}>第四次走同一圈 —— 這個節奏,就是你帶 AI 開發的<B>肌肉記憶</B>。</div>
      </div>
    </div>
  </div><Foot label="U11 · 課2 · 迭代4" /></div>
);
const It4Impl: Page = () => (
  <div style={fill}><div style={{ ...pad }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><Eyebrow>迭代 4 · 實作</Eyebrow><LoopBadge step={2} /></div>
    <Title size={44}>最後一段,最容易「順便」</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 26, maxWidth: 1520 }}>
      <Lead>實作 prompt 照舊。愈接近完成,AI 愈想「幫你收尾」:順便重構、順便美化、順便加功能 —— <B>全部拒絕</B>,它只准做 Result Panel。</Lead>
      <RedFlagBox />
    </div>
  </div><Foot label="U11 · 課2 · 迭代4" /></div>
);
const It4Check: Page = () => (
  <div style={fill}><div style={{ ...pad }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><Eyebrow>迭代 4 · 立刻檢查</Eyebrow><LoopBadge step={3} /></div>
    <Title size={44}>四段跑完 —— 對照開場的完成品</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 24, maxWidth: 1520 }}>
      <Atom n={1} act={<>點不同的任務卡。</>} see="四塊內容(結果 / 理由 / 不建議 / 下一步)跟著換。" />
      <Atom n={2} act={<>換不同能量再看 Energy Bar。</>} see="長度、顏色會變。" />
      <Atom n={3} act={<>重新整理頁面,看出現動畫。</>} see="簡單 reveal,不是突然蹦出來。" />
    </div>
    <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 14 }}>
      <SuccessRow>四段迭代跑完 —— 你的頁面已經是開場展示的那個完成品。</SuccessRow>
      <Checkpoint items={['Hero、選擇器、卡片、Result Panel、Energy Bar 都在', '從頭到尾只動過允許的三個檔']} />
    </div>
  </div><Foot label="U11 · 課2 · 迭代4" /></div>
);

// ══════════ 段 8:個人化 missions.json ══════════
const SecPersonal: Page = () => <Section no="8" title="個人化:換成你的任務" time="3:00 - 3:20" sub="可以改資料,不可以改功能方向 —— 把任務換成你自己的生活情境。" />;
const PersonalizeWhat: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 8 · 個人化的邊界</Eyebrow><Title size={48}>換的是內容,不是功能</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 26, maxWidth: 1560 }}>
      <SplitCol who="✅ 儘量換,換成你的" color={OK} bg="#eaf6f0" items={['任務內容:讀書 / 健身 / 打工 / 社團版', '文案:標題、理由、下一步', 'missions.json 的筆數(加幾筆也行)', '小範圍視覺微調(顏色、間距)']} />
      <SplitCol who="⛔ 動了就算超界" color={RED} bg="#fff7f4" items={['改欄位名、刪欄位', '改功能、改架構', '加套件、動 package.json', '碰登入 / API / 資料庫 / 部署']} />
    </div>
    <div style={{ marginTop: 22 }}><Analogy>個人化是<B>換菜單上的菜</B>,不是改廚房的管線。</Analogy></div>
  </div><Foot label="U11 · 課2 · 段8" /></div>
);
const PersonalizePrompt: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 8 · 個人化 Prompt</Eyebrow><Title size={44}>把任務換成你的生活情境</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 560px', gap: 28, marginTop: 20, alignItems: 'start', maxWidth: 1680 }}>
      <PromptCard size={20} label="個人化 prompt · 自己填情境">{`現在做個人化,只改 src/missions.json 的「內容」:
1. 把任務換成我的生活情境:
   (自己描述:期中考週讀書 / 健身菜單 /
    打工日常 / 社團籌備 …)
2. 欄位結構完全不動:id、title、energy、
   goal、time、reason、avoid、next
   一個都不能改名
3. 不動 App.jsx 的功能邏輯
改完告訴我改了幾筆,我自己重新整理畫面確認。`}</PromptCard>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Atom n={1} act={<>在 prompt 的第 1 點填上<B>你自己的情境</B>。</>} see="這是今天唯一「自由發揮」的地方。" />
        <Atom n={2} act={<>改完存檔,立刻看畫面。</>} see="卡片變成你的任務了。" />
      </div>
    </div>
  </div><Foot label="U11 · 課2 · 段8" /></div>
);
const UIPolish: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 8 · UI Polish Prompt · 選用</Eyebrow><Title size={44}>只調視覺,不改功能架構</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 560px', gap: 28, marginTop: 20, alignItems: 'start', maxWidth: 1680 }}>
      <PromptCard size={20} label="UI polish prompt">{`現在只做視覺微調,不改任何架構:
1. 只能改 src/styles.css
   (必要時小改 App.jsx 的 className)
2. 可以調:間距、顏色、圓角、陰影、hover 回饋
3. 不可改元件結構、不可改資料流程、
   不可新增套件
先列出你要調整的清單,等我同意再動手。`}</PromptCard>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Pitfall items={[['JSON 改壞,畫面全白:', '把終端機 / 瀏覽器的錯誤貼給 AI,叫它「只修 JSON 格式」。']]} />
        <Checkpoint items={['畫面顯示的是你自己的任務', '欄位結構沒變、功能都正常', 'git status 還是只有允許的檔案']} />
      </div>
    </div>
  </div><Foot label="U11 · 課2 · 段8" /></div>
);

// ══════════ 段 9:Final Reviewer ══════════
const SecReview: Page = () => <Section no="9" title="Final Reviewer:整趟總驗收" time="3:20 - 3:40" sub="每一段都檢查過小的;現在讓 AI 對著 git diff 檢查整趟,人再做最後把關。" />;
const FinalReviewerPrompt: Page = () => (
  <div style={fill}><div style={{ ...pad }}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}><Eyebrow>段 9 · Final Reviewer Prompt</Eyebrow><span style={{ fontFamily: mono, fontSize: 20, color: OK, fontWeight: 700 }}>● 只檢查、不修改</span></div>
    <Title size={42}>對著 git diff,檢查整趟有沒有亂改</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 520px', gap: 28, marginTop: 18, alignItems: 'start', maxWidth: 1680 }}>
      <PromptCard size={19} label="final reviewer prompt(固定輸出格式)">{`你現在是 reviewer,只檢查、不修改。
請根據 AGENTS.md 與目前的 git diff,固定輸出:

Verdict:PASS 或 BLOCK
Changed Files:實際改了哪些檔
Scope Check:有沒有超出允許的三個檔
Package Check:package.json 是否被改、
  是否新增套件
Feature Check:Hero、選擇器、Mission Cards、
  Result Panel、Energy Bar 是否符合規格
Risk:最可能壞掉的地方,人要親自看什麼
Next Step:PASS 之後做什麼;BLOCK 要先修什麼`}</PromptCard>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Lead>它檢查三件事:<B>git diff、風險、有沒有超出範圍</B>。</Lead>
        <Harvest>AI 產出要被檢查,不能直接相信 —— 包括這份回報本身。</Harvest>
      </div>
    </div>
  </div><Foot label="U11 · 課2 · 段9" /></div>
);
const DiffCmds: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 760px', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div><Eyebrow>段 9 · 人的驗收 · 防呆</Eyebrow><Title size={48}>AI 說沒問題?你自己 diff 一次</Title></div>
      <Lead>reviewer 的回報是參考,<B>git diff 才是證據</B>。三行指令,第三行最關鍵:</Lead>
      <Harvest>git diff -- package.json 必須「什麼都沒印」── 有輸出就是出事。</Harvest>
    </div>
    <div className="ts-rise"><Term title="終端機 · 用 diff 對答案" size={20} rows={[['cmd', 'git status'], ['dim', 'modified: src/App.jsx  src/styles.css  src/missions.json'], ['cmd', 'git diff -- src/App.jsx src/styles.css src/missions.json'], ['dim', '(逐行看:都是 Mission Deck 相關的修改)'], ['cmd', 'git diff -- package.json'], ['ok', '(沒有任何輸出 = 過關)']]} /></div>
  </div><Foot label="U11 · 課2 · 段9" /></div>
);
const Rescue: Page = () => (
  <div style={fill}><div style={{ ...pad }}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}><Eyebrow>段 9 · 救援 Prompt · 防呆</Eyebrow><span style={{ fontFamily: mono, fontSize: 20, color: RED, fontWeight: 700 }}>● 發現超界修改才用這張</span></div>
    <Title size={44}>Reviewer 抓到亂改?拉回來</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 600px', gap: 30, marginTop: 22, alignItems: 'start', maxWidth: 1620 }}>
      <PromptCard size={22} label="救援 prompt">{`請只保留「AI Life Mission Deck」相關修改。
把所有無關的修改還原。
不要改 package.json。
不要新增套件。
不要重構。

先列出你會還原哪些地方,等我同意後再改。`}</PromptCard>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Lead>注意最後一行:<B>它要先列清單、你同意才動</B> ── 救援也走「先計畫、再執行」。</Lead>
        <Lead>還原完,重跑一次 <Key>git diff</Key> 確認乾淨。</Lead>
      </div>
    </div>
  </div><Foot label="U11 · 課2 · 段9" /></div>
);

// ══════════ 段 10:Build · Commit · Push · 展示 ══════════
const SecShip: Page = () => <Section no="10" title="Build · Commit · Push · 展示" time="3:40 - 4:00" sub="畫面出來只是一半 —— build、commit、push 才算完成。" />;
const BuildFix: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 10 · Build 驗收 + Fix Build Error Prompt</Eyebrow><Title size={44}>build 過了,才准 commit</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 620px', gap: 30, marginTop: 20, alignItems: 'start', maxWidth: 1680 }}>
      <PromptCard size={20} label="fix build error prompt · 紅字才用">{`npm run build 失敗,完整錯誤訊息如下:
(貼上整段錯誤)

只修這個 build error:
1. 用最小修改讓 build 通過
2. 不准順手重構、不准改其他功能、
   不動無關檔案
3. 不可新增套件、不可改 package.json
修完告訴我改了哪裡,我會再跑一次 build。`}</PromptCard>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Lead><Key>npm run dev</Key> 會動,不代表<B>正式打包</B>沒問題 —— commit 前一定跑一次 <Key>npm run build</Key>。</Lead>
        <Term title="終端機 · 打包驗收" size={20} rows={[['cmd', 'npm run build'], ['dim', 'vite building for production...'], ['ok', '✓ built in 1.32s'], ['ok', '(有 ✓ 沒紅字 = 過關)']]} />
      </div>
    </div>
  </div><Foot label="U11 · 課2 · 段10" /></div>
);
const CommitMsg: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 10 · Commit Message Prompt + Commit</Eyebrow><Title size={44}>讓 AI 從 diff 寫訊息,你來 commit</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 620px', gap: 30, marginTop: 20, alignItems: 'start', maxWidth: 1680 }}>
      <PromptCard size={20} label="commit message prompt">{`請看目前的 git diff,幫我產生 commit message:
1. 第一行:繁體中文,一句話說明這次做了什麼
2. 下面條列主要修改點,必須對應真實的 diff,
   不要編造
3. 只給我訊息文字,不要執行任何 git 指令`}</PromptCard>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Term title="終端機 · 存檔" size={20} rows={[['cmd', 'git add .'], ['cmd', 'git commit -m "完成 AI Life Mission Deck 首頁升級"'], ['ok', '[main a1b2c3d] 完成 AI Life Mission Deck 首頁升級'], ['dim', ' 5 files changed(含兩個守則檔)']]} />
        <Harvest>commit 了,AI 的工作才真正變成「你的成果」。</Harvest>
      </div>
    </div>
  </div><Foot label="U11 · 課2 · 段10" /></div>
);
const PushPage: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 700px', gap: 46, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div><Eyebrow>段 10 · Push · 防呆</Eyebrow><Title size={50}>push 前,先看 remote 是誰的</Title></div>
      <Lead>先跑 <Key>git remote -v</Key>:<B>origin 必須是你自己帳號的 repo</B>。</Lead>
      <div style={{ background: '#fff7f4', border: '1px solid #f3d0c2', borderRadius: 14, padding: '18px 26px', fontSize: 27, lineHeight: 1.5 }}>🚫 網址裡看到<B>老師的帳號</B>?<strong style={{ color: RED }}>停,不要 push</strong> ── 舉手,老師帶你換 remote。</div>
    </div>
    <div className="ts-rise"><Term title="終端機 · 推上自己的 repo" size={21} rows={[['cmd', 'git remote -v'], ['ok', 'origin  https://github.com/你的帳號/mission-lab.git'], ['cmd', 'git push'], ['ok', 'main -> main ✓']]} /></div>
  </div><Foot label="U11 · 課2 · 段10" /></div>
);
const DoneCheck: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>段 10 · 全班對齊 + 展示</Eyebrow><Title size={50}>交付完成的樣子</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 30 }}>
      <Checkpoint items={['首頁是完整的 Mission Deck,而且是你自己的任務', 'git log --oneline -1 看得到你的 commit', '已 push 到自己的 GitHub repo']} />
      <SuccessRow>從 starter 到 Mission Deck ── 你在護欄內帶著 AI 完成了一整趟開發。</SuccessRow>
      <div style={{ fontSize: 26, color: C.muted }}>最後 10 分鐘:輪流上台 30 秒 —— <B>你的任務主題是什麼?最喜歡哪張卡?</B></div>
    </div>
  </div><Foot label="U11 · 課2 · 段10" /></div>
);

// ══════════ 收束 ══════════
const CoreRecap: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>收束 · 回到核心觀念</Eyebrow><Title size={48}>十條觀念,今天每一條你都做過了</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 26, maxWidth: 1620 }}>
      <ConceptCard n={1} text="AI 不能直接開工" done />
      <ConceptCard n={2} text="每段功能前,先小規劃" done />
      <ConceptCard n={3} text="每段做完,立刻檢查" done />
      <ConceptCard n={4} text="AI 是執行者,不是決策者" done />
      <ConceptCard n={5} text="可以改資料,不能亂改架構" done />
      <ConceptCard n={6} text="不可以新增套件" done />
      <ConceptCard n={7} text="不可以改 package.json" done />
      <ConceptCard n={8} text="不可碰登入 / API / 資料庫 / 部署" done />
      <ConceptCard n={9} text="最後一定要看 git diff" done />
      <ConceptCard n={10} text="build / commit / push 才算完成" done />
    </div>
    <div style={{ fontSize: 24, color: C.muted, marginTop: 20 }}>Mission Deck 只是載體 —— 這十條,才是你以後每個 AI 專案都會用到的。</div>
  </div><Foot label="U11 · 課2 · 收束" /></div>
);
const FinalQuote: Page = () => (
  <div style={{ ...fill, background: C.ink, color: '#fff' }}><div style={{ ...pad }}>
    <Eyebrow>今天最重要的一句</Eyebrow>
    <div style={{ fontSize: 62, fontWeight: 900, lineHeight: 1.3, marginTop: 28, maxWidth: 1620, letterSpacing: '-0.02em' }}>今天不是自由做網站,而是跟著老師,用 AI coding agent,<span style={{ color: C.orange }}>在護欄內一步一步</span>把普通網頁升級成 AI Life Mission Deck。</div>
    <div style={{ fontSize: 31, color: 'rgba(255,255,255,0.7)', marginTop: 34, maxWidth: 1420, lineHeight: 1.55 }}>規格是你的、範圍是你的、檢查是你的 ── AI 只是那雙很快的手。這就是「如何控制 AI 完成開發」。</div>
  </div><div style={{ position: 'absolute', left: 110, bottom: 44, fontFamily: mono, fontSize: 19, color: 'rgba(255,255,255,0.5)' }}>U11 · 課2 · 記住這句</div></div>
);
const HomeworkNext: Page = () => (
  <div style={fill}><div style={{ ...pad }}><Eyebrow>回家作業 + 下一堂</Eyebrow><Title size={50}>交三樣東西</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 28, maxWidth: 1520 }}>
      <Atom n={1} act={<>把完成品 <B>push 到自己的 repo</B>(課堂上沒完成的,回家補完)。</>} see="GitHub 上看得到最新 commit。" />
      <Atom n={2} act={<>截圖兩張:<B>Mission Deck 畫面</B> + 終端機 <Key>git log --oneline -1</Key>。</>} see="畫面是你的任務、log 有你的 commit。" />
      <Atom n={3} act={<>把 <B>Final Reviewer 的回報(Verdict 開頭)</B>貼到作業區。</>} see="老師會看它有沒有抓到重點。" />
      <Harvest>下一堂:同一套「小規劃 → 實作 → 檢查」,我們讓資料與流程更聰明。</Harvest>
    </div>
  </div><Foot label="U11 · 課2 · 作業" /></div>
);

export const meta: SlideMeta = { title: 'U11 課2:AI Life Mission Deck — 護欄內的 Vibe Coding', createdAt: '2026-06-30T04:12:30.000Z' };

export const notes: (string | undefined)[] = [
  '各位同學好,第二堂。今天做 AI Life Mission Deck:跟著我,用 AI coding agent,把一個普通的任務首頁升級成沉浸式任務頁。這是 AI 驅動程式開發課,prompt 我都準備好了,你們負責規格、範圍、檢查。',
  '先定位,三件事講清楚:第一,這是 AI 驅動開發課,不是傳統寫程式課,重點是可控地讓 AI 完成開發;第二,今天是固定教學實作,全班同一個作品,不是自由創作;第三,可以個人化資料與文案,不能改功能方向。有人問能不能做自己想做的網站?今天不行,先把「在護欄內帶 AI 做完一個作品」練起來。',
  '承接課1,不重教工具:VSCode、Git、npm、Claude Code 你們都會了。現在做兩件事:開 mission-lab 專案、git status 要乾淨。強調:開發是接續 repo,不是重新亂開資料夾。檢查點全班對齊再往下。',
  '4 小時流程表,三個欄位念給學生聽:每段教什麼、學到什麼觀念、階段產物。特別指出中段的四個開發迭代,和最後的 Final Reviewer、build commit push。這張表等於今天的地圖,迷路就回來看。',
  '十條核心觀念先亮出來,不用背,今天每一段都會回到這十條。先框最重要三條:AI 不能直接開工、每段先小規劃、做完立刻檢查。最後收束時會再回來一條一條打勾。',
  '段1,先看完成品,再講參考來源和節奏。',
  '左邊是起點:一個無聊的待辦清單首頁。右邊是今天下課前的樣子。此時切到自己的機器,現場操作完成品一分鐘:選狀態、點卡片、看 Result Panel 和 Energy Bar。讓學生先看到目標,才知道每一段在做什麼。',
  '完成版解剖,五個部件逐一指:Hero 主視覺、狀態選擇器 energy/goal/time、Mission Cards 至少三張有 hover 和 selected、Result Panel 四塊加 Energy Bar、微互動 reveal。這五個就是今天的四段迭代加個人化。',
  '資料放哪裡:全部放 src/missions.json,暫時不用資料庫。右邊一筆任務的欄位念一次:id、title、energy、goal、time、reason、avoid、next。記住這句:可以改內容,不可以改結構。',
  '這頁交代「我們參考了哪些酷網站體驗,但本堂只取可落地的效果」。備課時看過 Awwwards、Codrops、Three.js、GSAP 的 showcase,五個參考各對應一個零基礎 4 小時做得到的低風險版:3D 滾動敘事變簡單 reveal、卡片實驗變 hover/selected/shadow/transform、深色漸層 Hero 用純 CSS 光暈。不是要做出 Awwwards,是把它們的「感覺」帶進來。',
  '今天的節奏頁,很重要:不是先上 planner / implementer / reviewer 三大章,而是四段迭代,每段跑小循環:小規劃、AI 實作、立刻檢查、下一段。完整的 Final Reviewer 留到最後才跑一次。下面四個 chip 就是四段:Hero、選擇器、Cards、Result Panel。',
  '段2,Vibe Coding 不是亂做。先痛一次,再對比,再認識工具。',
  '先補名詞,Vibe Coding 定義念一次:用自然語言描述想法,讓 AI 直接產生、修改、串接程式;人一邊看結果一邊迭代。不寫每一行程式,用講的推進專案。業界真實工作方式,但做得好跟做得爛差很大。',
  '先痛一次,老師示範:一句「幫我把首頁變炫」,不加任何限制。AI 裝了三個套件、改了 package.json、九個檔被改、畫面還全白。讓學生記住這個場景。示範完記得 git restore 還原。',
  '錯誤 vs 正確對比,今天最重要的對比頁。左邊:變酷一點、越厲害越好 —— 沒規格、沒範圍、沒檢查。右邊:這一段只做 Hero、只能改哪些檔、先計畫再動手。念一次 punchline:差別不是禮貌,是有規格、有範圍、有檢查。',
  '本堂 punchline:Vibe Coding 不是亂感覺,是有規格、有範圍、有檢查的快速迭代。三個詞展開:規格 = 每段先小規劃;範圍 = 只准改三個檔;檢查 = 每段做完立刻看。',
  '工具對照表,只講是什麼、用來幹嘛,不教原理。七個逐一念:React 組畫面、CSS 管樣式、JSON 放資料、Three.js 做 3D、GSAP 做動畫、Git 記錄檢查、AI coding agent 照規格改程式。強調:程式都是 AI 寫,你只要知道工具是什麼。',
  '明確不教清單:Three.js 原理、GSAP 寫法、React 深入、CSS 動畫細節、WebGL、新增套件。有同學問不教怎麼會用?程式 AI 寫,你負責規格、範圍、檢查,這正是 AI 驅動開發。想深入的下課再挖。',
  '段3,建立 AI 開發護欄:AGENTS.md 和 CLAUDE.md。',
  '為什麼需要守則檔?打個比方,AI 每次開新對話就像新同事第一天報到:能力很強,但不知道哪些檔能動、怎麼驗收。與其每次用嘴管 AI,不如把規則寫進 repo。',
  'AGENTS.md 是什麼?三件事:通用的 agent rule file,不是只給 Claude;寫專案的遊戲規則;跨工具通用,Codex 也讀得懂。',
  'CLAUDE.md 是什麼?Claude Code 的專案記憶,每次啟動主要讀這個檔;寫 Claude 專屬規則;可以 @AGENTS.md 一行引入共用規則,不用抄兩份。',
  '兩檔怎麼搭加上限制:共用規則寫在 AGENTS.md,CLAUDE.md 引用它。但要先講清楚:守則檔是 context,不是保險箱,AI 仍可能忘記或出錯。真正的保險是每段的小規劃加立刻檢查加 git diff。',
  '照抄卡 AGENTS.md。重點念:允許檔案三個 —— App.jsx、styles.css、missions.json;Do not edit 有 package.json、vite.config.js、index.html;Workflow 就是小循環的規則;Git rules 三條。兩欄是同一個檔,接著貼。',
  'CLAUDE.md 照抄卡,內容短:開頭 @AGENTS.md,三條 Claude 專屬:動手前 Plan Mode、改檔先問、碰 package.json 或要加套件先停下來問。建檔:在 mission-lab 根目錄,code AGENTS.md、code CLAUDE.md,貼上存檔。',
  '可以改 / 不可以改,一頁講死。可以:任務資料、文案、任務主題、missions.json 內容、小範圍視覺微調。不可以:package.json、登入、API、資料庫、部署設定、專案整體架構、無關檔案、任意新增套件。這份清單已寫進 AGENTS.md,最後 Final Reviewer 拿它對答案。',
  '常見狀況:檔名一定大寫、放專案根目錄跟 package.json 同層;分頁有黑點是沒存檔;兩份別貼反。檢查點:兩檔就位、@AGENTS.md 在開頭、git status 只多兩個守則檔。全班對齊再休息。',
  '休息十分鐘。回來直接開工:迭代1,Hero 區,第一個小循環。',
  '段4,迭代1 Hero。跟學生說清楚:第一段最慢、講最細,之後三段都是同一個節奏,會愈走愈快。',
  '迭代1 目標頁。規格念死:全寬 Hero、深色漸層、主標題 AI Life Mission Deck、副標、開始任務 CTA、純 CSS 光暈。驗收:首頁最上方看得到、原本內容沒壞。右邊 mock 就是等下要做出來的樣子。',
  '小規劃 prompt,今天第一次貼。先切 Plan Mode。貼完計畫回來,放行前四問:只列允許的三個檔?沒加套件?沒動 package.json?有寫驗收方式?四題都過才回「同意」。強調:AI 是執行者,拍板的是你。',
  '實作 prompt。切出 Plan Mode 再貼,這張之後每段都同一張。AI 動手時你不是看戲,盯紅旗:要裝套件、要動 package.json、突然大重構、改到無關檔案 —— 出現就喊停。',
  '立刻檢查,兩邊都要:貼 mini check prompt 讓 AI 自查(只回報不修改),你自己也跑 npm run dev 對規格。AI 的回報和你的眼睛,兩邊都過才算過。',
  '迭代1 常見狀況:說要裝套件做漸層就拒絕,純 CSS 做得出來;畫面沒變先查 dev server;順便改別的就叫它還原。檢查點過了就進下一段 —— 問學生:節奏記住了嗎?小規劃、實作、檢查、下一段。',
  '段5,迭代2 狀態選擇器。同一個循環,這次會快很多。',
  '迭代2 目標:三組選項 —— 能量低中高、目標專注放鬆成長、時間 15/30/60 分;點選要有明顯 selected 樣式;先存畫面狀態,不接後端。',
  '小規劃 prompt 同一張,只換「這一段只做」的規格段。讓學生體會:規格變了,節奏不變,四問照舊、同意才放行。',
  '實作照舊貼同一張。這頁重點是 Think:AI 說要順便把 Hero 改得更漂亮,好嗎?不行,超出這一段的規格 —— AI 是執行者,不是決策者。這句今天要重複很多次。',
  '迭代2 檢查:mini check 照貼、自己三組各選一輪、往上滑確認 Hero 沒壞。檢查點過了,下一段卡片要吃資料了。',
  '段6,迭代3 Mission Cards,missions.json 進場。',
  '迭代3 目標:至少 3 張卡、內容全部來自 missions.json、hover 浮起、selected 邊框、依狀態過濾排序。驗收金句:改 missions.json 一個字,畫面要跟著變。',
  '迭代3 小規劃:這段規格連欄位名都講死 —— id、title、energy、goal、time、reason、avoid、next,至少 6 筆。強調:欄位名是規格的一部分,AI 不准自己改。',
  '迭代3 實作。最常見走鐘:AI 把資料直接寫死在 App.jsx —— 叫它改回從 missions.json 讀。金句:可以改資料,不能亂改架構;卡片元件歸 App.jsx,內容歸 missions.json。',
  '迭代3 檢查加一個小實驗:自己把 missions.json 某個 title 改一個字、存檔,畫面上的卡片立刻跟著變 —— 這就證明了資料驅動,也是等下個人化的原理。',
  '段7,迭代4 Result Panel 與 Energy Bar。做完這段就是開場的完成品。',
  '迭代4 目標:點卡後 Result Panel 四塊 —— 任務結果、理由、不建議事項、下一步,取自 reason/avoid/next;Energy Bar 依能量變化;CSS reveal,不用 GSAP。驗收:點不同卡,內容和能量條都會換。',
  '迭代4 小規劃,第四次走同一圈。跟學生說:這個節奏就是你帶 AI 開發的肌肉記憶,以後自己做專案也是這樣。',
  '迭代4 實作。提醒:愈接近完成,AI 愈想幫你收尾 —— 順便重構、順便美化、順便加功能,全部拒絕,它只准做 Result Panel。',
  '迭代4 檢查:點不同卡看四塊會換、換能量看 Energy Bar、重新整理看 reveal 動畫。然後停一下,讓全班對照開場的完成品:四段迭代跑完,頁面已經長成那個樣子了。',
  '段8,個人化:換成你的任務。',
  '個人化的邊界:可以換任務內容(讀書/健身/打工/社團版)、文案、筆數、小視覺微調;不可以改欄位名、刪欄位、改功能、加套件。打個比方:換菜單上的菜,不是改廚房的管線。',
  '個人化 prompt:只改 missions.json 的內容,欄位結構一個都不能改名,不動 App.jsx 邏輯。第 1 點填自己的情境 —— 這是今天唯一自由發揮的地方。改完存檔立刻看畫面。',
  'UI Polish,選用:只能改 styles.css,調間距顏色圓角陰影 hover,不可改結構、資料流程、不可加套件,先列清單再動手。常見狀況:JSON 改壞畫面全白,把錯誤貼給 AI 只修 JSON 格式。檢查點:自己的任務、結構沒變、git status 乾淨。',
  '段9,Final Reviewer:每段都檢查過小的,現在對著 git diff 檢查整趟,人再做最後把關。',
  'Final Reviewer prompt,固定輸出七項:Verdict、Changed Files、Scope Check、Package Check、Feature Check(五個部件對規格)、Risk、Next Step。它檢查三件事:git diff、風險、有沒有超出範圍。強調:AI 產出要被檢查,不能直接相信,包括這份回報本身。',
  'AI 說沒問題,你自己 diff 一次:git status 看清單、git diff 三個允許檔逐行看、git diff -- package.json 必須什麼都沒印,有輸出就是出事。今天最重要的防呆。',
  '真的超界才用救援 prompt:只保留 Mission Deck 相關修改、還原無關修改、不改 package.json、不加套件、不重構。注意最後一行:先列清單、你同意才動 —— 救援也走先計畫再執行。',
  '段10,收尾:build、commit、push 才算完成。',
  'build 驗收:dev 會動不代表打包沒問題,commit 前一定跑 npm run build。紅字就用 Fix Build Error prompt:只修這個錯、最小修改、不准順手重構。修完再跑一次。',
  'commit message 讓 AI 從 diff 產生:第一行繁中一句話、條列對應真實 diff、只給文字不執行 git 指令。然後自己 git add、git commit。commit 了,AI 的工作才真正變成你的成果。',
  'push 前防呆:git remote -v,origin 必須是自己帳號的 repo,看到老師帳號就停、舉手換 remote。確認是自己的,git push。',
  '交付完成的樣子,三個檢查點:首頁是完整 Mission Deck 而且是自己的任務、git log 有 commit、已 push。最後 10 分鐘輪流上台 30 秒:你的任務主題是什麼、最喜歡哪張卡。',
  '收束,回到核心觀念:十條逐一打勾,每一條今天都真的做過了 —— 不能直接開工是每段的 Plan Mode、先小規劃是四張 prompt、立刻檢查是 mini check、看 diff 是段9、build commit push 是段10。Mission Deck 只是載體,這十條才是帶得走的。',
  '最後一句,請全班一起念:今天不是自由做網站,而是跟著老師,用 AI coding agent,在護欄內一步一步把普通網頁升級成 AI Life Mission Deck。補一句:規格是你的、範圍是你的、檢查是你的,AI 只是那雙很快的手 —— 這就是如何控制 AI 完成開發。',
  '作業三樣:push 完成品、兩張截圖(畫面加 git log)、Final Reviewer 回報貼作業區。下一堂預告:同一套小循環,讓資料與流程更聰明。今天辛苦了。',
];

export default [
  Cover, Position, RecapEnv, Schedule, CoreRules10,
  SecDemo, StarterVsFinal, FeatureAnatomy, MissionsJson, RefSites, MiniLoopIntro,
  SecVibe, VibeDef, PainDemo, WrongVsRight, VibePunch, ToolTable, NotTeach,
  SecGuard, WhyRules, WhatAgentsMd, WhatClaudeMd, FileRelationLimits, AgentsContent, ClaudeContent, CanCannot, RulesPit,
  Break1,
  SecIt1, It1Goal, It1Plan, It1Impl, It1Check, It1Pit,
  SecIt2, It2Goal, It2Plan, It2Impl, It2Check,
  SecIt3, It3Goal, It3Plan, It3Impl, It3Check,
  SecIt4, It4Goal, It4Plan, It4Impl, It4Check,
  SecPersonal, PersonalizeWhat, PersonalizePrompt, UIPolish,
  SecReview, FinalReviewerPrompt, DiffCmds, Rescue,
  SecShip, BuildFix, CommitMsg, PushPage, DoneCheck,
  CoreRecap, FinalQuote, HomeworkNext,
] satisfies Page[];
