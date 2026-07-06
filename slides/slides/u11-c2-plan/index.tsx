import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';
import type { ReactNode } from 'react';
import c2DashboardResultShot from './assets/c2-dashboard-result.png';
import agentCommandShot from './assets/agent-01-command.png';
import agentRunningShot from './assets/agent-02-running.png';
import agentLibraryShot from './assets/agent-03-library.png';
import agentCreateShot from './assets/agent-04-create.png';
import agentLocationShot from './assets/agent-05-location.png';
import agentMethodShot from './assets/agent-06-method.png';
import agentGenerateShot from './assets/agent-07-generate.png';
import agentToolsShot from './assets/agent-08-tools.png';
import agentColorShot from './assets/agent-09-color.png';
import agentMemoryShot from './assets/agent-10-memory.png';
import agentConfirmShot from './assets/agent-11-confirm.png';
import agentCreatedShot from './assets/agent-12-created.png';
import agentRunShot from './assets/agent-13-run.png';
import hudMarketplaceShot from './assets/hud-01-marketplace.png';
import hudInstallShot from './assets/hud-02-install.png';
import hudStatuslineShot from './assets/hud-03-statusline.png';

export const design: DesignSystem = {
  palette: { bg: '#f5f6f8', text: '#181a1f', accent: '#e2570d' },
  fonts: {
    display: '"PingFang TC", "Noto Sans TC", "Microsoft JhengHei", system-ui, sans-serif',
    body: '"PingFang TC", "Noto Sans TC", "Microsoft JhengHei", system-ui, sans-serif',
  },
  typeScale: { hero: 118, body: 32 },
  radius: 16,
};

const C = {
  bg: '#f5f6f8',
  ink: '#181a1f',
  card: '#ffffff',
  line: '#e2e5ea',
  orange: '#e2570d',
  green: '#0e7a52',
  blue: '#2f5fb3',
  amber: '#b7791f',
  red: '#b42318',
  muted: '#5a6270',
  faint: '#9aa1ad',
  dark: '#15181f',
};
const mono = '"JetBrains Mono", "SF Mono", ui-monospace, monospace';

const css = `@keyframes c2-rise{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
.c2-rise>*{animation:c2-rise .48s cubic-bezier(.16,1,.3,1) both}
.c2-rise>*:nth-child(2){animation-delay:.05s}.c2-rise>*:nth-child(3){animation-delay:.1s}.c2-rise>*:nth-child(4){animation-delay:.15s}
@media (prefers-reduced-motion:reduce){.c2-rise>*{animation:none!important}}`;

if (typeof document !== 'undefined' && !document.getElementById('u11-c2-dashboard-plan')) {
  const el = document.createElement('style');
  el.id = 'u11-c2-dashboard-plan';
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
const pad = { padding: '0 108px 42px', width: '100%' as const };

const tone = (i: number) => [C.orange, C.blue, C.green, C.amber, C.red][i % 5];

const Foot = ({ label = 'U11 · C2 · 受控 Vibe Coding 與倉儲後台' }: { label?: string }) => {
  const { current, total } = useSlidePageNumber();
  return (
    <div style={{ position: 'absolute', left: 108, right: 108, bottom: 42, borderTop: `1px solid ${C.line}`, paddingTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: mono, color: C.faint, fontSize: 19 }}>
      <span>{label}</span>
      <span>{String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
    </div>
  );
};

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <span style={{ display: 'inline-flex', padding: '8px 14px', borderRadius: 999, background: '#fbf3ee', color: C.orange, fontFamily: mono, fontSize: 20, fontWeight: 850, letterSpacing: '.1em', textTransform: 'uppercase' }}>{children}</span>
);

const Title = ({ children, size = 62 }: { children: ReactNode; size?: number }) => (
  <div style={{ fontSize: size, fontWeight: 900, letterSpacing: 0, lineHeight: 1.1, whiteSpace: 'pre-wrap' }}>{children}</div>
);

const Lead = ({ children }: { children: ReactNode }) => (
  <div style={{ fontSize: 31, color: C.muted, lineHeight: 1.5, maxWidth: 1460 }}>{children}</div>
);

const Shell = ({ eyebrow, title, lead, children, foot }: { eyebrow?: string; title: ReactNode; lead?: ReactNode; children?: ReactNode; foot?: string }) => (
  <div style={fill}>
    <div style={pad}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <div style={{ marginTop: eyebrow ? 18 : 0 }}><Title>{title}</Title></div>
      {lead ? <div style={{ marginTop: 20 }}><Lead>{lead}</Lead></div> : null}
      {children ? <div className="c2-rise" style={{ marginTop: 30 }}>{children}</div> : null}
    </div>
    <Foot label={foot} />
  </div>
);

const EvidenceShell = ({ eyebrow, title, lead, children }: { eyebrow: string; title: ReactNode; lead: ReactNode; children: ReactNode }) => (
  <div style={fill}>
    <div style={pad}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <div style={{ marginTop: 14 }}><Title size={48}>{title}</Title></div>
      <div style={{ marginTop: 14, fontSize: 24, color: C.muted, lineHeight: 1.42, maxWidth: 1350 }}>{lead}</div>
      <div className="c2-rise" style={{ marginTop: 22 }}>{children}</div>
    </div>
    <Foot />
  </div>
);

const SectionSlide = ({ no, time, title, lead }: { no: string; time: string; title: ReactNode; lead: ReactNode }) => (
  <div style={{ ...fill, background: C.dark, color: '#fff' }}>
    <div style={pad}>
      <span style={{ fontFamily: mono, fontSize: 26, color: C.orange, letterSpacing: '.14em' }}>段 {no} · {time}</span>
      <div style={{ marginTop: 24 }}><Title size={88}>{title}</Title></div>
      <div style={{ marginTop: 28, fontSize: 34, color: 'rgba(255,255,255,.72)', lineHeight: 1.5, maxWidth: 1360 }}>{lead}</div>
    </div>
  </div>
);

const Cards = ({ items, columns = 2 }: { items: { title: string; body: string; color?: string }[]; columns?: 2 | 3 | 4 }) => (
  <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 18, maxWidth: 1540 }}>
    {items.map((item, i) => {
      const color = item.color ?? tone(i);
      return (
        <div key={item.title} style={{ background: C.card, border: `1px solid ${C.line}`, borderTop: `7px solid ${color}`, borderRadius: 16, padding: '24px 28px', minHeight: 148 }}>
          <div style={{ fontSize: 29, fontWeight: 850, color, lineHeight: 1.24 }}>{item.title}</div>
          <div style={{ fontSize: 24, color: C.muted, lineHeight: 1.45, marginTop: 12 }}>{item.body}</div>
        </div>
      );
    })}
  </div>
);

const Bullets = ({ items }: { items: string[] }) => (
  <div style={{ display: 'grid', gap: 15, maxWidth: 1500 }}>
    {items.map((item, i) => (
      <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '18px 24px' }}>
        <span style={{ flexShrink: 0, width: 38, height: 38, borderRadius: 12, background: tone(i), color: '#fff', display: 'grid', placeContent: 'center', fontFamily: mono, fontSize: 20, fontWeight: 850 }}>{i + 1}</span>
        <span style={{ fontSize: 28, lineHeight: 1.42 }}>{item}</span>
      </div>
    ))}
  </div>
);

const Code = ({ label, children, size = 22 }: { label: string; children: string; size?: number }) => (
  <div style={{ background: '#101418', color: '#dce7df', borderRadius: 18, overflow: 'hidden', border: '1px solid #26332c', maxWidth: 1540, boxShadow: '0 24px 60px -34px rgba(0,0,0,.55)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '13px 20px', background: '#17211c', borderBottom: '1px solid #26332c' }}>
      {['#ff5f57', '#febc2e', '#28c840'].map((color) => <span key={color} style={{ width: 12, height: 12, borderRadius: '50%', background: color }} />)}
      <span style={{ marginLeft: 10, fontFamily: mono, color: '#94a3a8', fontSize: 18 }}>{label}</span>
    </div>
    <pre style={{ margin: 0, padding: '22px 28px', fontFamily: mono, fontSize: size, lineHeight: 1.55, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{children}</pre>
  </div>
);

const Prompt = ({ label, children, size = 24 }: { label: string; children: string; size?: number }) => (
  <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 18, overflow: 'hidden', maxWidth: 1540, boxShadow: '0 18px 48px -28px rgba(30,30,40,.42)' }}>
    <div style={{ padding: '13px 22px', background: '#fbf3ee', borderBottom: `1px solid ${C.line}`, fontFamily: mono, color: C.orange, fontSize: 19, fontWeight: 850 }}>{label}</div>
    <pre style={{ margin: 0, padding: '18px 28px', fontFamily: mono, fontSize: size, lineHeight: 1.4, whiteSpace: 'pre-wrap', wordBreak: 'break-word', color: C.ink }}>{children}</pre>
  </div>
);

const Flow = ({ steps }: { steps: string[] }) => (
  <div style={{ display: 'grid', gridTemplateColumns: `repeat(${steps.length}, 1fr)`, gap: 12, maxWidth: 1560 }}>
    {steps.map((step, i) => (
      <div key={step} style={{ position: 'relative', background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '22px 18px', minHeight: 138, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontFamily: mono, fontSize: 18, color: tone(i), fontWeight: 850 }}>0{i + 1}</div>
        <div style={{ fontSize: 25, fontWeight: 850, lineHeight: 1.28, marginTop: 10, whiteSpace: 'pre-wrap' }}>{step}</div>
        {i < steps.length - 1 ? <div style={{ position: 'absolute', right: -18, top: '50%', transform: 'translateY(-50%)', color: C.faint, fontSize: 30, zIndex: 2 }}>→</div> : null}
      </div>
    ))}
  </div>
);

const ControlProcessBoard = () => {
  const steps = [
    { k: '01', title: '讀現況', body: '先開專案、看後台、找出資料從哪裡來。', color: C.blue },
    { k: '02', title: '拆需求', body: '把一句話拆成資料、規則、畫面與驗收。', color: C.green },
    { k: '03', title: 'Plan Mode', body: 'AI 只能提出 A-F 計畫，還不能改檔。', color: C.orange },
    { k: '04', title: '最小實作', body: '只在 C2-HOLE 補一條規則，不新增函式、不改 UI、不碰 API。', color: C.amber },
    { k: '05', title: '驗收交付', body: '看畫面、看 diff、build 後才 commit。', color: C.red },
  ];
  return (
    <div style={{ maxWidth: 1540 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14 }}>
        {steps.map((step, i) => (
          <div key={step.k} style={{ position: 'relative', minHeight: 210, background: C.card, border: `1px solid ${C.line}`, borderTop: `7px solid ${step.color}`, borderRadius: 16, padding: '24px 22px', boxShadow: '0 18px 44px -34px rgba(20,20,30,.45)' }}>
            <div style={{ fontFamily: mono, color: step.color, fontSize: 19, fontWeight: 900 }}>{step.k}</div>
            <div style={{ marginTop: 18, fontSize: 31, fontWeight: 900, lineHeight: 1.15 }}>{step.title}</div>
            <div style={{ marginTop: 12, fontSize: 22, color: C.muted, lineHeight: 1.45 }}>{step.body}</div>
            {i < steps.length - 1 ? <div style={{ position: 'absolute', right: -18, top: 96, width: 30, height: 30, borderRadius: 999, background: C.bg, color: C.faint, display: 'grid', placeItems: 'center', fontSize: 24, zIndex: 2 }}>→</div> : null}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
        {[
          ['不是', '不是把 prompt 一張張貼完，等 AI 自己說完成。', C.red],
          ['是', '每個 prompt 都有角色、範圍、允許檔案與驗收點。', C.green],
          ['老師要強調', '學生真正學到的是控制 AI 進入工程流程。', C.blue],
        ].map(([title, body, color]) => (
          <div key={title} style={{ background: '#f7f8fa', border: `1px solid ${C.line}`, borderLeft: `8px solid ${color}`, borderRadius: 14, padding: '18px 22px' }}>
            <div style={{ fontSize: 24, fontWeight: 900, color }}>{title}</div>
            <div style={{ marginTop: 8, fontSize: 23, color: C.muted, lineHeight: 1.38 }}>{body}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const DashboardMock = () => (
  <div style={{ maxWidth: 1040, background: C.card, border: `1px solid ${C.line}`, borderRadius: 18, overflow: 'hidden', boxShadow: '0 26px 70px -42px rgba(30,30,40,.52)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '11px 16px', background: '#eef2f5', borderBottom: `1px solid ${C.line}` }}>
      {['#ff5f57', '#febc2e', '#28c840'].map((color) => <span key={color} style={{ width: 12, height: 12, borderRadius: '50%', background: color }} />)}
      <span style={{ marginLeft: 10, fontFamily: mono, color: C.muted, fontSize: 17 }}>localhost:5180 · 倉儲後台</span>
    </div>
    <img src={c2DashboardResultShot} alt="" style={{ display: 'block', width: '100%', maxHeight: 420, objectFit: 'cover', objectPosition: 'top' }} />
  </div>
);

const ScreenshotFrame = ({ src, label, maxWidth = 1120 }: { src: string; label: string; maxWidth?: number }) => (
  <div style={{ maxWidth, background: C.card, border: `1px solid ${C.line}`, borderRadius: 18, overflow: 'hidden', boxShadow: '0 26px 70px -42px rgba(30,30,40,.52)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '11px 16px', background: '#eef2f5', borderBottom: `1px solid ${C.line}` }}>
      {['#ff5f57', '#febc2e', '#28c840'].map((color) => <span key={color} style={{ width: 12, height: 12, borderRadius: '50%', background: color }} />)}
      <span style={{ marginLeft: 10, fontFamily: mono, color: C.muted, fontSize: 17 }}>{label}</span>
    </div>
    <img src={src} alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
  </div>
);

const AgentShot = ({ src, label, height = 260 }: { src: string; label: string; height?: number }) => (
  <div style={{ background: '#101418', border: '1px solid #2c333c', borderRadius: 16, overflow: 'hidden', boxShadow: '0 24px 60px -38px rgba(0,0,0,.58)' }}>
    <div style={{ padding: '10px 14px', borderBottom: '1px solid #2c333c', color: '#dce7df', fontFamily: mono, fontSize: 16 }}>{label}</div>
    <div style={{ height, display: 'grid', placeItems: 'center', background: '#15181f' }}>
      <img src={src} alt="" style={{ display: 'block', maxWidth: '100%', maxHeight: '100%', width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
  </div>
);

const WideAgentShot = ({ src, label, height = 430 }: { src: string; label: string; height?: number }) => (
  <div style={{ background: '#101418', border: '1px solid #2c333c', borderRadius: 18, overflow: 'hidden', boxShadow: '0 26px 70px -42px rgba(0,0,0,.62)' }}>
    <div style={{ padding: '12px 18px', borderBottom: '1px solid #2c333c', color: '#dce7df', fontFamily: mono, fontSize: 17 }}>{label}</div>
    <div style={{ height, display: 'grid', placeItems: 'center', background: '#15181f' }}>
      <img src={src} alt="" style={{ display: 'block', maxWidth: '100%', maxHeight: '100%', width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
  </div>
);

const Checklist = ({ items }: { items: string[] }) => (
  <div style={{ display: 'grid', gap: 13, maxWidth: 1500 }}>
    {items.map((item, i) => (
      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, background: '#eef7f2', border: '1px solid #bfe6d4', borderRadius: 14, padding: '16px 22px' }}>
        <span style={{ width: 28, height: 28, borderRadius: 8, border: `2px solid ${C.green}`, display: 'grid', placeContent: 'center', color: C.green, fontWeight: 900, fontSize: 18 }}>✓</span>
        <span style={{ fontSize: 27, color: '#0f5038', lineHeight: 1.35 }}>{item}</span>
      </div>
    ))}
  </div>
);

const Cover: Page = () => (
  <div style={{ ...fill, background: C.dark, color: '#fff' }}>
    <div style={pad}>
      <Eyebrow>U11 · 第 2 堂 / 共 4 堂 · 4 小時</Eyebrow>
      <div style={{ marginTop: 28 }}><Title size={92}>受控 Vibe Coding<br />用 AGENTS / CLAUDE / Plan Mode 完成倉儲後台</Title></div>
      <div style={{ marginTop: 28, fontSize: 34, color: 'rgba(255,255,255,.72)', lineHeight: 1.5, maxWidth: 1390 }}>今天不是自由做新網站。今天把 C1 的專案推進成可控交付：先拆需求，先出計畫，人審後才實作，最後用畫面、diff、build 驗收。</div>
    </div>
    <div style={{ position: 'absolute', left: 108, bottom: 42, fontFamily: mono, color: 'rgba(255,255,255,.48)', fontSize: 20 }}>U11-C2 · Warehouse Admin Plan</div>
  </div>
);

const CoreTerms: Page = () => (
  <Shell eyebrow="開始前，先講清楚三個詞" title="今天會一直用到這三個名詞" lead="沒聽過沒關係，這頁先講白話定義，後面每一段都會實際示範一次。">
    <Cards columns={3} items={[
      { title: 'Vibe coding', body: '不寫程式碼，用自然語言描述需求，讓 AI coding agent（如 Claude Code）直接讀專案、改檔案、跑指令。', color: C.orange },
      { title: 'AGENTS.md', body: '放在專案根目錄的一份說明書，AI 工具會自動先讀它——哪些檔案能改、哪些事絕對不能做，都寫在裡面。', color: C.blue },
      { title: 'Human-in-the-loop', body: 'AI 每完成一個階段（計畫、實作）都要停下來，等人看過、核准，才能繼續下一步——不是全自動。', color: C.green },
    ]} />
  </Shell>
);

const TodayGoal: Page = () => (
  <Shell eyebrow="今日成果" title="C2 做完要留下四樣東西" lead="這四樣會直接餵給 C3，所以今天的修改要小、可驗、可交接。">
    <Cards columns={4} items={[
      { title: '一份倉儲資料語言', body: 'orders 的 channel / status 代表什麼。' },
      { title: '一套 AI 工作流', body: 'planner 出計畫，人審後 implementer 才動手。' },
      { title: '一條後台規則', body: 'C2-HOLE 規則，KPI/明細/action queue 同時連動。' },
      { title: '一組驗收證據', body: '畫面、diff、build 通過。' },
    ]} />
  </Shell>
);

const ControlledVibe: Page = () => (
  <Shell eyebrow="核心觀念" title="Vibe coding 是用自然語言驅動 AI 開發" lead="你描述需求，AI coding agent 讀專案、改檔案、跑指令、回報結果。C2 教的是受控版本：專案守則 + Plan Mode + 人審 + 測試驗收 + git diff。">
    <Cards columns={3} items={[
      { title: '不受控', body: '貼一句「幫我做」然後相信 AI 說完成。', color: C.red },
      { title: '受控', body: '先界定資料、規則、畫面、測試與驗收。', color: C.green },
      { title: '可交付', body: 'agent 只在允許檔案內做最小修改，通過驗收才 commit。', color: C.blue },
    ]} />
  </Shell>
);

const ControlledFlowShot: Page = () => (
  <Shell eyebrow="課程入口" title="畫面上不是一直貼 prompt，而是跑一條開發流程" lead="這頁先把學生的注意力拉回主線：每一段 prompt 都對應到一個工程動作與驗收點。">
    <ControlProcessBoard />
  </Shell>
);

const HandoutSteps: Page = () => (
  <Shell eyebrow="學生入口" title="今天的四件事，缺一不可" lead="打開 U2 資料夾，照 STEP-01-data-contract → STEP-02-workflow → ACCEPTANCE 順序做；投影片只是這四件事的示範。">
    <Cards columns={4} items={[
      { title: 'Vibe coding + prompt', body: 'planner / implementer 兩張 prompt 卡，貼給 AI 前先看懂在要求什麼。', color: C.blue },
      { title: 'AGENTS.md + CLAUDE.md', body: 'AI 工作守則：允許改哪些檔、禁止做什麼。', color: C.orange },
      { title: 'plan → implement → test → review', body: '今天唯一的工作流程，任何一步都不能跳過。', color: C.green },
      { title: 'sub-agent + Claude HUD', body: '把 planner/reviewer 這兩張卡存成永久角色，段 2.5 示範。', color: C.red },
    ]} />
  </Shell>
);

const AgentFiles: Page = () => (
  <Shell eyebrow="三個控制器" title="AGENTS、CLAUDE、Plan Mode 各管一件事" lead="守則檔是上下文，不是魔法鎖。真正的保險是人審、測試、diff、build。">
    <Cards columns={3} items={[
      { title: 'AGENTS.md', body: '共用專案守則：允許檔案、禁止動作、驗收要求。', color: C.green },
      { title: 'CLAUDE.md', body: 'Claude Code 補充：先讀 AGENTS、使用 Plan Mode、固定回報格式。', color: C.blue },
      { title: 'Plan Mode', body: '先讀檔與列 A-F 計畫，不先改檔；人審通過才 implement。', color: C.orange },
    ]} />
  </Shell>
);

const DataAndScope: Page = () => (
  <Shell eyebrow="段 1 · 開工前" title="今天只看兩件事：資料在哪、能改哪裡" lead="orders 資料裡的 channel 和 status，決定 LINE OA 訂單要不要進 action queue；規則只能寫進 warehouseLogic.js 的 buildActionQueue()，其他檔案不動。">
    <Cards columns={3} items={[
      { title: 'channel / status', body: 'LINE OA 且尚未出貨 → 需要客服確認；規則從 orderItems 算出來，不能手寫假資料。', color: C.red },
      { title: '可以改', body: 'warehouseLogic.js 的 buildActionQueue()，C2-HOLE 那一段。', color: C.green },
      { title: '不該改', body: 'WarehouseAdmin、styles、warehouseData、package、line-lab、token 或 .env。', color: C.blue },
    ]} />
  </Shell>
);

const StartCommands: Page = () => (
  <Shell eyebrow="段 1 · 啟動確認" title="動手前先讓本機畫面跑起來" lead="看得到現況，才知道 AI 到底改了什麼。">
    <Code label="terminal">{`cd ai-project-foundation-kit/web-lab
npm install
npm run dev

# open http://127.0.0.1:5180/
# 先確認倉儲後台可以正常顯示`}</Code>
  </Shell>
);

const Sec2: Page = () => <SectionSlide no="2" time="1:30 - 2:15" title="Planner：先要計畫，不要先要程式" lead="Plan mode 的目的，是把 AI 從「立刻動手」切到「先說清楚」。學生要先審計畫，再讓它實作。" />;

const WhyPlanner: Page = () => (
  <Shell eyebrow="段 2 · AI 工作流" title="Planner 只做規劃，不能改檔" lead="如果 AI 在 Plan mode 邊講邊改，就已經偏航。第一個驗收是 git status 必須乾淨。">
    <Flow steps={['讀規則\nAGENTS/CLAUDE', '讀資料\nwarehouseData.js', '界定目標\n待確認規則', '列 A-F 計畫\n不改檔', '人類審核\n批准/修正']} />
  </Shell>
);

const PlannerPrompt: Page = () => (
  <Shell eyebrow="段 2 · Prompt 卡 1" title="把需求交給 planner，但先禁止寫程式" lead="U2/PROMPT-CARD.md 卡 1 原文，直接照貼。">
    <Prompt label="貼給 AI：planner，不改檔" size={17}>{`你現在扮演 planner。先不要改檔，也不要執行寫入動作。

請先閱讀：AGENTS.md、CLAUDE.md、web-lab/src/WarehouseAdmin.jsx、warehouseLogic.js、warehouseData.js

任務：倉儲後台 action queue 新增一條規則——LINE OA 通路且尚未出貨的訂單，要多顯示「LINE OA 訂單需要客服確認」。

限制：只能改 warehouseLogic.js；不新增套件；不改 package.json；不重構；不手寫假資料，要從 orderItems 判斷。

請只用以下格式回答：
A. 你準備修改的檔案　B. 每個檔案各改什麼　C. 會讀哪些資料欄位
D. 驗收方式　E. 可能風險　F. 哪一步需要人類拍板`}</Prompt>
  </Shell>
);

const ExpectedPlan: Page = () => (
  <Shell eyebrow="段 2 · 計畫長相" title="好的 planner 回覆應該像規格，不像作文" lead="學生審核時只看幾個關鍵點。">
    <Cards columns={3} items={[
      { title: '範圍', body: '只點名 warehouseLogic.js 的 C2-HOLE；沒有碰 line-lab 或 package.json。' },
      { title: '資料', body: '讀 orderItems 的 channel 與 status，不手寫假資料。' },
      { title: '風險與驗收', body: '不發 LINE、不寫死 token；驗收看畫面、diff、build。' },
    ]} />
  </Shell>
);

const HumanReview: Page = () => (
  <Shell eyebrow="段 2 · 人審放行" title="沒有人核准，AI 不准進 implementer" lead="這是今天最重要的一道閘門：計畫沒過人審，就不動手。">
    <Checklist items={[
      'git status 仍然乾淨，只動允許檔案。',
      '沒有碰 package.json、LINE token 或 .env。',
    ]} />
  </Shell>
);

const SubAgentIntro: Page = () => (
  <SectionSlide no="2.5" time="加映 · 約 20 分鐘（可跳過）" title="Prompt 用熟了，就升級成 sub-agent" lead="你已經手動貼過 planner prompt、也會貼 reviewer prompt——sub-agent 就是把這兩張卡存成永久角色，不用每次重打。主線仍然由人審放行；這段不算進今天 4 小時主線，時間不夠可直接跳到段 3。" />
);

const AgentsTabs: Page = () => (
  <Shell eyebrow="段 2.5 · /agents" title="先打開 Agents 面板，看三個位置" lead="Running 是正在跑的 agent；Library 是可用 agent；Create new agent 是把 prompt 固化的入口。">
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, maxWidth: 1540 }}>
      <WideAgentShot src={agentCommandShot} label="01 · 輸入 /agents" height={250} />
      <WideAgentShot src={agentRunningShot} label="02 · Running：目前沒有背景 agent" height={250} />
      <WideAgentShot src={agentLibraryShot} label="03 · Library：看到 user / project / built-in agents" height={250} />
    </div>
    <div style={{ marginTop: 22, fontSize: 25, color: C.muted, lineHeight: 1.45, maxWidth: 1500 }}>這一步只看位置，不建立功能。先讓學生知道 sub-agent 是「可被呼叫的角色」，不是新的專案或新的套件。</div>
  </Shell>
);

const AgentCreateFlow: Page = () => (
  <Shell eyebrow="段 2.5 · Create new agent" title="把剛剛貼過的 planner/reviewer prompt，直接拿來描述任務" lead="不用重新想措辭——段 2 已經用過這兩張 prompt 卡，這裡直接沿用。">
    <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.2fr 1.2fr 1.7fr', gap: 15, maxWidth: 1540 }}>
      <AgentShot src={agentCreateShot} label="04 · Create new agent" height={220} />
      <AgentShot src={agentLocationShot} label="05 · Project (.claude/agents/)" height={220} />
      <AgentShot src={agentMethodShot} label="06 · Generate with Claude" height={220} />
      <AgentShot src={agentGenerateShot} label="07 · 描述 agent 任務" height={220} />
    </div>
    <div style={{ marginTop: 22 }}>
      <Code label="給 Claude 的描述範例（沿用段 2 的 planner + reviewer prompt）" size={19}>{`請建立一個 beginner-ai-project-workflow agent。
when to use：初學者要 AI 讀專案、規劃、驗收 starter project 時。

behavior（直接沿用剛剛的 prompt 卡）：
- planner 階段：先讀 AGENTS.md / CLAUDE.md / 相關檔案，只回 A-F 計畫，不改檔。
- 人審通過後才 implement，且只改允許檔案。
- 完成後用 reviewer 卡檢查：Verdict / Changed Files / Scope Check / Contract Check / Next Step。`}</Code>
    </div>
  </Shell>
);

const AgentFileAnatomy: Page = () => (
  <Shell eyebrow="段 2.5 · 存起來的到底是什麼" title="打開 .claude/agents/beginner-ai-project-workflow.md" lead="這就是剛剛 Confirm and save 存下來的檔案，看懂每個欄位是做什麼用的。">
    <Cards columns={3} items={[
      { title: 'name', body: '這個 agent 的識別名稱，之後用 @agent-名稱 呼叫它。', color: C.blue },
      { title: 'description', body: '什麼情境該叫它、附上例子——Claude 會依這段自動判斷要不要用它。', color: C.orange },
      { title: 'model', body: '這個 agent 執行時要用哪個模型。', color: C.green },
      { title: 'memory', body: '記憶存在 project 層級還是使用者層級。', color: C.amber },
      { title: '下面的內容', body: '兩個 --- 之間是 frontmatter；再往下全部都是這個 agent 的行為指示，等於一份永久保存的 system prompt，每次被呼叫都會先讀這段。', color: C.red },
    ]} />
  </Shell>
);

const AgentPermissionMemory: Page = () => (
  <Shell eyebrow="段 2.5 · 權限與記憶" title="工具權限先保守，記憶選 Project scope" lead="課堂截圖示範 all tools；正式教 planner / reviewer 時，優先用 read-only。implementer agent 才需要寫入能力。">
    <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr 1.1fr', gap: 18, maxWidth: 1540 }}>
      <AgentShot src={agentToolsShot} label="08 · Tools：示範 all tools，但要講清楚風險" height={280} />
      <AgentShot src={agentColorShot} label="09 · Color：方便辨識背景 agent" height={280} />
      <AgentShot src={agentMemoryShot} label="10 · Memory：選 Project scope" height={280} />
    </div>
    <div style={{ marginTop: 24 }}>
      <Cards columns={3} items={[
        { title: 'Planner / Reviewer', body: '先用 read-only；它們只讀規格、看 diff、回 PASS/BLOCK。', color: C.green },
        { title: 'Implementer', body: '需要寫入時才開 edit tools；而且必須有人審核准。', color: C.orange },
        { title: 'Project memory', body: '讓這個 repo 的流程被記住，不污染個人全域設定。', color: C.blue },
      ]} />
    </div>
  </Shell>
);

const AgentConfirmSave: Page = () => (
  <Shell eyebrow="段 2.5 · Confirm and save" title="存檔前先看三件事：名稱、位置、警告" lead="sub-agent 一旦存進 project，就會變成這個 repo 的工作角色。不要把過長、過寬、會越權的 prompt 直接收進去。">
    <div style={{ display: 'grid', gridTemplateColumns: '1.55fr 0.8fr', gap: 18, maxWidth: 1540, alignItems: 'stretch' }}>
      <WideAgentShot src={agentConfirmShot} label="11 · Confirm and save：檢查 name / location / tools / memory" height={420} />
      <WideAgentShot src={agentCreatedShot} label="12 · Library：Project agents 出現新 agent" height={420} />
    </div>
    <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, maxWidth: 1540 }}>
      <div style={{ background: '#eef7f2', border: '1px solid #bfe6d4', borderRadius: 14, padding: '16px 20px', fontSize: 23, color: '#0f5038', lineHeight: 1.36 }}>名稱要說明用途，不要叫 test-agent。</div>
      <div style={{ background: '#fbf3ee', border: '1px solid #f1d4c4', borderRadius: 14, padding: '16px 20px', fontSize: 23, color: '#7a3511', lineHeight: 1.36 }}>Project location：這堂要放在 .claude/agents/。</div>
      <div style={{ background: '#eef4ff', border: '1px solid #cfe0fb', borderRadius: 14, padding: '16px 20px', fontSize: 23, color: '#21457f', lineHeight: 1.36 }}>警告不是錯誤；它提醒你權限和 prompt 長度。</div>
    </div>
  </Shell>
);

const AgentRunDemo: Page = () => (
  <Shell eyebrow="段 2.5 · 實際呼叫" title="@agent 可以幫忙看，但 main thread 才能放行" lead="背景 agent 負責讀、整理、檢查；人類與主對話負責決策。">
    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 22, maxWidth: 1540, alignItems: 'center' }}>
      <WideAgentShot src={agentRunShot} label="13 · @agent-beginner-ai-project-workflow 檢視 web-lab" height={350} />
      <div style={{ display: 'grid', gap: 16 }}>
        <div style={{ background: C.card, border: `1px solid ${C.line}`, borderTop: `7px solid ${C.green}`, borderRadius: 16, padding: '22px 24px' }}>
          <div style={{ fontSize: 29, fontWeight: 900, color: C.green }}>可以交給 agent</div>
          <div style={{ marginTop: 10, fontSize: 24, lineHeight: 1.42, color: C.muted }}>讀 web-lab、整理檔案用途、檢查 prompt 是否符合 U2 範圍。</div>
        </div>
        <div style={{ background: C.card, border: `1px solid ${C.line}`, borderTop: `7px solid ${C.red}`, borderRadius: 16, padding: '22px 24px' }}>
          <div style={{ fontSize: 29, fontWeight: 900, color: C.red }}>不能交給 agent</div>
          <div style={{ marginTop: 10, fontSize: 24, lineHeight: 1.42, color: C.muted }}>自動放行 implementer、自動 commit、跳過人審或驗收。</div>
        </div>
      </div>
    </div>
  </Shell>
);

const ClaudeHudIntro: Page = () => (
  <Shell eyebrow="段 2.5 · Claude HUD" title="讓學生看得到 Claude Code 正在發生什麼" lead="Claude HUD 是 Claude Code 的 statusline plugin，會把 context、usage、active tools、running agents 與 todo progress 顯示在輸入框下方。">
    <Cards columns={4} items={[
      { title: 'Context usage', body: '學生知道什麼時候快塞滿，不再盲目一直貼 prompt。', color: C.blue },
      { title: 'Usage / weekly', body: '課堂現場可以先看到用量狀態，避免突然卡住。', color: C.orange },
      { title: 'Tools / agents', body: '配合 /agents 練習時，看得到背景 agent 是否正在跑。', color: C.green },
      { title: 'Todo progress', body: '讓 plan / implement / test 的待辦狀態更透明。', color: C.amber },
    ]} />
    <div style={{ marginTop: 26 }}>
      <Flow steps={[
        'Plan Mode\n先看 context',
        'Sub-agent\n看 running agents',
        'Implementer\n看工具活動',
        'Human review\n人來決定放行',
      ]} />
    </div>
    <div style={{ marginTop: 22, fontSize: 24, color: C.muted, lineHeight: 1.45, maxWidth: 1460 }}>這不是新的開發流程；它只是把 Claude Code 的狀態攤開，幫學生更早發現 context、用量與背景任務問題。</div>
  </Shell>
);

const ClaudeHudInstall: Page = () => (
  <Shell eyebrow="段 2.5 · 安裝 Claude HUD" title="三步裝好：marketplace、install、setup" lead="課堂流程用最短路徑：加入 marketplace、安裝 plugin、重開 Claude Code 後執行 setup。">
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, maxWidth: 1540 }}>
      <WideAgentShot src={hudMarketplaceShot} label="01 · /plugin marketplace add jarrodwatts/claude-hud" height={240} />
      <WideAgentShot src={hudInstallShot} label="02 · /plugin install claude-hud" height={240} />
    </div>
    <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1.08fr 0.92fr', gap: 18, maxWidth: 1540, alignItems: 'stretch' }}>
      <WideAgentShot src={hudStatuslineShot} label="03 · 重開 Claude Code 後執行 /claude-hud:setup" height={175} />
      <Code label="Claude Code commands" size={18}>{`/plugin marketplace add jarrodwatts/claude-hud
/plugin install claude-hud

# 重開 Claude Code
/claude-hud:setup`}</Code>
    </div>
    <div style={{ marginTop: 16, fontSize: 22, color: C.muted, lineHeight: 1.42, maxWidth: 1540 }}>現場如果看不到 setup 指令，可先補跑 README 裡的 /reload-plugins；Windows 若顯示沒有 JavaScript runtime，先安裝 Node.js LTS。</div>
  </Shell>
);

const TaskSpec: Page = () => (
  <EvidenceShell eyebrow="段 3 · Implementer" title="人審通過後才實作：完成「待確認訂單」判斷規則" lead="不是重做整頁，只補資料 helper，讓同一條規則同步影響 KPI、明細與處理佇列。">
    <DashboardMock />
  </EvidenceShell>
);

const ImplementerPrompt: Page = () => (
  <Shell eyebrow="段 3 · Prompt 卡 2" title="讓 implementer 照批准計畫做最小修改" lead="U2/PROMPT-CARD.md 卡 2 原文，直接照貼。">
    <Prompt label="貼給 AI：implementer，照計畫改" size={19}>{`你現在扮演 implementer。
請依照剛剛已核准的計畫實作。

限制：
1. 只能修改 web-lab/src/warehouseLogic.js
2. 不要新增套件
3. 不要改 package.json
4. 不要重構
5. 如果超出原計畫，先停下來回報

完成後請固定回報：
A. 實際修改的檔案
B. 每個檔案改了什麼
C. 哪裡讀到 LINE OA 訂單資料
D. 我現在要怎麼手動驗收
E. 哪些地方你沒有改`}</Prompt>
  </Shell>
);

const VerifyAndCheck: Page = () => (
  <Shell eyebrow="段 3 · 畫面與終端機驗收" title="同一條規則牽動三個畫面，改完先看 diff 再 commit" lead="AI 回報完成不代表完成，先用本機工具驗證。">
    <Cards columns={3} items={[
      { title: 'KPI / 警示燈', body: '待確認訂單數字不再是 0，點下去能看到對應問題。' },
      { title: '明細 / 處理佇列', body: '列出尚未出貨、需要客服確認的訂單，不誤稱已送出 LINE。' },
      { title: '資料來源', body: '不在 UI 寫死數字，全部從 orderItems 計算。' },
    ]} />
    <div style={{ marginTop: 20 }}>
      <Code label="terminal" size={20}>{`cd ai-project-foundation-kit/web-lab
npm run build

cd ..
git status
git diff -- web-lab/src/warehouseLogic.js`}</Code>
    </div>
  </Shell>
);

const VerificationStack: Page = () => (
  <Shell eyebrow="段 4 · 驗收堆疊" title="一個功能至少要過三層驗收" lead="AI 說完成只是第一句話，不是完成定義。">
    <Flow steps={['畫面驗收\n三處連動', 'Git diff\n範圍乾淨', 'Build\n可打包', 'Reviewer\nPASS / BLOCK']} />
  </Shell>
);

const Sec4: Page = () => <SectionSlide no="4" time="2:55 - 4:00" title="Reviewer：救偏航、驗收、交接到 C3" lead="最後一段把學生從「AI 說好了」拉回工程交付：看錯誤、看 diff、看 build，然後只交付可驗證的修改。" />;

const Pitfalls: Page = () => (
  <Shell eyebrow="段 4 · 常見偏航" title="看到這些狀況，先停下來，不要繼續加需求" lead="C2 的錯通常不是技術不會，而是 AI 擅自把範圍擴大。">
    <Cards items={[
      { title: 'AI 改了 line-lab', body: '立刻要求回到 C2 範圍；LINE API 與推播是 C3。', color: C.red },
      { title: 'AI 改了 package.json', body: '問清楚為什麼需要新依賴；本堂原則是不新增依賴。', color: C.red },
      { title: 'AI 寫死假資料', body: '要求改回讀 warehouseData.js 欄位，不要在 UI 裡硬塞數字。', color: C.amber },
      { title: '畫面太像行銷頁', body: '收斂成後台 action：標題、資料來源、下一步。', color: C.blue },
    ]} />
  </Shell>
);

const RescuePrompt: Page = () => (
  <Shell eyebrow="段 4 · 救援 Prompt" title="偏航時，用固定格式拉回來" lead="不要跟 AI 長篇辯論。把允許範圍與驗收條件重新貼上。">
    <Prompt label="貼給 AI：停止擴張，回到 C2">{`請先停止新增功能。
請檢查目前修改是否超出 C2 範圍：
- 是否改到 package.json？
- 是否改到 line-lab 或 LINE 真送邏輯？
- 是否改到 web-lab/src/warehouseData.js 欄位結構？
- 是否重寫了不必要的倉儲後台區塊？

請只回覆：
1. 哪些修改應該保留
2. 哪些修改應該移除
3. 如何回到只修改 warehouseLogic.js 的最小版本
4. 回復後要跑哪些驗收`}</Prompt>
  </Shell>
);

const FinalReview: Page = () => (
  <Shell eyebrow="段 4 · Final Reviewer" title="交付前四問" lead="這四問是 C2 的收尾，也會一路用到後續課程。">
    <Checklist items={[
      'C2-HOLE 那段規則是否真的從 orderItems 算出來，而不是寫死數字？',
      '是否沒有碰 LINE token、真送邏輯、package.json？',
      'npm run build 是否通過？',
      'git diff 是否只剩允許檔案與本堂相關修改？',
    ]} />
  </Shell>
);

const BuildCommit: Page = () => (
  <Shell eyebrow="段 4 · 收尾指令" title="build 綠、diff 乾淨，才 commit" lead="這一步不是儀式，是讓下一堂 C3 能接著跑。">
    <Code label="terminal">{`cd ai-project-foundation-kit/web-lab
npm run build

cd ..
git diff -- web-lab/src/warehouseLogic.js
git status

git add web-lab/src/warehouseLogic.js
git commit -m "完成待確認訂單判斷規則"`}</Code>
  </Shell>
);

const DeployConcept: Page = () => (
  <Shell eyebrow="段 4 · 部署概念" title="C2 只講 build / dist / preview / deploy 的差別" lead="這裡不展開 CI/CD，也不設定 GitHub Actions。學生先知道從原始碼到公開網站中間發生什麼事。">
    <Cards columns={4} items={[
      { title: 'dev', body: 'npm run dev：開發模式，快速看修改。', color: C.blue },
      { title: 'build', body: 'npm run build：把 src 打包成 dist。', color: C.green },
      { title: 'preview', body: 'npm run preview：本機預覽 build 後的結果。', color: C.orange },
      { title: 'deploy', body: '把 dist 放到 GitHub Pages / Netlify / Vercel。正式流程後面再做。', color: C.red },
    ]} />
  </Shell>
);

const Acceptance: Page = () => (
  <Shell eyebrow="完成定義" title="C2 看到這些才算完成" lead="如果缺任何一項，就還不是可交付狀態。">
    <Cards items={[
      { title: '倉儲資料語言', body: '能說出 warehouseData.js 如何餵倉儲後台與訂單可視化。', color: C.green },
      { title: 'Planner', body: '有一份 A-F 計畫，且人審後才進 implementer。', color: C.blue },
      { title: '倉儲後台', body: '有待確認訂單判斷規則，沒有誤稱已送出 LINE。', color: C.orange },
      { title: '工程驗收', body: 'build 通過、diff 範圍乾淨、commit 訊息清楚。', color: C.red },
    ]} />
  </Shell>
);

const BridgeToC3: Page = () => (
  <Shell eyebrow="銜接下一堂" title="C3 接手的是同一個倉儲語境，而不是重做一遍" lead="C2 只把資料規則與驗收流程打穩。C3 才把訂單狀態拿去做可視化、API、webhook、token 與 LINE OA 概念。">
    <Flow steps={['C2\n完成 helper\n看懂驗收', 'C3\n訂單可視化\n互動畫面', 'C3\nAPI / webhook\n互動邊界', 'C3\nLINE OA\n通知概念', 'C4\nMCP / Skills\n整合工作流']} />
  </Shell>
);

const Close: Page = () => (
  <div style={{ ...fill, background: C.dark, color: '#fff' }}>
    <div style={pad}>
      <Eyebrow>收束</Eyebrow>
      <div style={{ marginTop: 28 }}><Title size={82}>今天學的不是一個區塊<br />而是怎麼讓 AI 可控地改專案</Title></div>
      <div style={{ marginTop: 28, fontSize: 34, color: 'rgba(255,255,255,.72)', lineHeight: 1.5, maxWidth: 1380 }}>規格先清楚，AI 才能快。範圍先鎖住，交付才驗得過。下一堂我們再把這份準備好的倉儲語境，推進到可視化與 LINE OA 流程。</div>
    </div>
    <div style={{ position: 'absolute', left: 108, bottom: 42, fontFamily: mono, color: 'rgba(255,255,255,.48)', fontSize: 20 }}>U11 · 課2 · 完成</div>
  </div>
);

export const meta: SlideMeta = {
  title: 'U11-C2: 受控 Vibe Coding、AGENTS/CLAUDE、Plan Mode 與倉儲後台',
  createdAt: '2026-07-04T00:00:00.000Z',
};

const pages = [
  Cover,
  CoreTerms,
  TodayGoal,
  ControlledVibe,
  ControlledFlowShot,
  HandoutSteps,
  AgentFiles,
  DataAndScope,
  StartCommands,
  Sec2,
  WhyPlanner,
  PlannerPrompt,
  ExpectedPlan,
  HumanReview,
  SubAgentIntro,
  AgentsTabs,
  AgentCreateFlow,
  AgentFileAnatomy,
  AgentPermissionMemory,
  AgentConfirmSave,
  AgentRunDemo,
  ClaudeHudIntro,
  ClaudeHudInstall,
  TaskSpec,
  ImplementerPrompt,
  VerifyAndCheck,
  VerificationStack,
  Sec4,
  Pitfalls,
  RescuePrompt,
  FinalReview,
  DeployConcept,
  BuildCommit,
  Acceptance,
  BridgeToC3,
  Close,
];

export const notes: string[] = [
  '開場先把舊 C2 的自由網站製作拿掉，明確說今天是受控 vibe coding 與倉儲後台主線。',
  '先講三個核心名詞：Vibe coding、AGENTS.md、Human-in-the-loop——白話定義，後面每一段都會實際示範一次。',
  '今天四個產出：倉儲資料語言、AI 工作流、後台規則、驗收證據。',
  '補定義：vibe coding 可以快，但沒有 guardrails 就不是可交付流程。',
  '用一張流程圖讓學生先看到：讀現況、拆需求、Plan Mode、最小實作、驗收交付。',
  '對齊講義：今天四件事缺一不可——vibe coding/prompt、AGENTS/CLAUDE、plan→implement→test→review、sub-agent+Claude HUD。',
  '三個控制器：AGENTS、CLAUDE、Plan Mode；強調守則不是魔法鎖，還要驗收。',
  '段一濃縮成一頁：只講兩件事，資料在哪(channel/status)、能改哪裡(buildActionQueue 的 C2-HOLE)，不逐欄位展開。',
  '啟動本機，先看到現況。',
  '段二進 planner。強調 Plan mode 不能改檔。',
  '說明 planner 的流程與 git status 驗收。',
  '老師帶學生複製 Planner Prompt——這頁就是 U2/PROMPT-CARD.md 卡 1 的原文，跟講義完全同步。',
  '示範好計畫長什麼樣：範圍、資料、風險與驗收三件事。',
  '人審檢查點：沒有人核准，就不准進 implementer。',
  '段 2.5(加映，約 20 分鐘，可跳過)：把今天貼過的 planner/reviewer prompt 固化成 sub-agent，不是取代 Plan Mode。',
  '打開 /agents，先看 Running 與 Library 的位置。',
  '示範 Create new agent：直接沿用剛剛的 planner/reviewer prompt 當任務描述，不用重寫措辭。',
  '拆開真實的 beginner-ai-project-workflow.md：只講 name/description/model/memory 這幾個欄位是做什麼用的，以及 frontmatter 下面那段是什麼（system prompt），不細講這個 agent 本身的行為內容。',
  '說明 tools 與 memory：planner/reviewer 優先 read-only，project memory 不污染全域。',
  'Confirm and save 前看名稱、位置與警告；警告是權限提醒，不是錯誤。',
  '實際用 @agent 檢視 web-lab；主線仍由 main thread 和人類拍板。',
  '介紹 Claude HUD：它把 context、usage、active tools、running agents 與 todo progress 放到輸入框下方。',
  '安裝 Claude HUD：marketplace add、plugin install、重開 Claude Code、執行 /claude-hud:setup。',
  '段三進 implementer：後台畫面已經接好，只補資料 helper。時間不夠可從這裡接續(跳過加映)。',
  '老師帶學生複製 Implementer Prompt——U2/PROMPT-CARD.md 卡 2 原文，跟講義同步。',
  '畫面(KPI/警示燈/明細/處理佇列)與終端機(build/diff)一起驗收，沒有自動化測試腳本，靠人看。',
  '補驗收堆疊：畫面、diff、build、reviewer。',
  '段四進 reviewer、救援與收尾。',
  '列出 AI 常見偏航。',
  '示範救援 Prompt，把 AI 拉回 C2 範圍。',
  '交付前四問。',
  '部署概念頁：只講 dev/build/dist/preview/deploy 的差別，不展開 CI/CD。',
  '收尾指令，build 通過與 diff 乾淨才 commit。',
  '完成定義。',
  '銜接 C3：只提醒後續會進可視化、API/webhook、token 與 LINE OA 概念。',
  '收束：AI 可控交付比單次做出畫面更重要。',
];

export default pages satisfies Page[];


