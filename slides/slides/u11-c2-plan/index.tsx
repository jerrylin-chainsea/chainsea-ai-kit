import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';
import type { ReactNode } from 'react';
import c2DashboardResultShot from './assets/c2-dashboard-result.png';
import c2LogicFixShot from './assets/c2-logic-fix.png';
import c2TestPassShot from './assets/c2-test-pass.png';

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

const Prompt = ({ label, children }: { label: string; children: string }) => (
  <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 18, overflow: 'hidden', maxWidth: 1540, boxShadow: '0 18px 48px -28px rgba(30,30,40,.42)' }}>
    <div style={{ padding: '13px 22px', background: '#fbf3ee', borderBottom: `1px solid ${C.line}`, fontFamily: mono, color: C.orange, fontSize: 19, fontWeight: 850 }}>{label}</div>
    <pre style={{ margin: 0, padding: '24px 30px', fontFamily: mono, fontSize: 24, lineHeight: 1.48, whiteSpace: 'pre-wrap', wordBreak: 'break-word', color: C.ink }}>{children}</pre>
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

const Timeline = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '170px 1fr 1fr 280px', maxWidth: 1540, border: `1px solid ${C.line}`, borderRadius: 16, overflow: 'hidden', background: C.card }}>
    {['時間', '老師帶什麼', '學生做什麼', '產出'].map((h) => <div key={h} style={{ background: C.dark, color: '#fff', padding: '14px 18px', fontFamily: mono, fontSize: 18, fontWeight: 850 }}>{h}</div>)}
    {[
      ['0:00-0:25', '受控 vibe coding', '理解為什麼不能只貼 prompt', 'C2 開發流程圖'],
      ['0:25-0:55', 'AGENTS / CLAUDE / Plan Mode', '讀守則與允許檔案', '人審檢查點'],
      ['0:55-1:30', '倉儲後台與資料合約', '讀 orders、channel、status', '需求拆解工作紙'],
      ['1:30-2:15', 'Plan mode / planner', '複製 Planner Prompt 並審核', 'A-F 計畫'],
      ['2:15-2:55', 'implementer 最小修改', '完成 getPendingLineOrders', '後台規則連動'],
      ['2:55-3:30', '測試 / 畫面 / diff / build', '跑測試腳本與 reviewer', '驗收證據'],
      ['3:30-3:50', 'build / dist / preview / deploy 概念', '看 dist 與 preview', '部署 mental model'],
      ['3:50-4:00', 'commit / 銜接 C3', '收尾與展示', '可交付 commit'],
    ].map((row, i) => row.map((cell, j) => (
      <div key={`${i}-${j}`} style={{ padding: '13px 18px', borderTop: `1px solid ${C.line}`, fontSize: j === 0 ? 20 : 21, color: j === 0 ? C.orange : j === 3 ? C.green : C.ink, fontFamily: j === 0 ? mono : undefined, fontWeight: j === 0 || j === 3 ? 800 : 500, lineHeight: 1.35 }}>{cell}</div>
    )))}
  </div>
);

const ContractDiagram = () => (
  <div style={{ maxWidth: 1500 }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 140px 1fr', gap: 18, alignItems: 'center' }}>
      <div style={{ background: '#101418', color: '#dce7df', borderRadius: 18, padding: '26px 30px', fontFamily: mono, fontSize: 23, lineHeight: 1.6 }}>
        web-lab/src/warehouseData.js<br />
        orders: SO-20260705-021<br />
        channel: LINE OA<br />
        status: 待出貨<br />
        priority: medium<br />
        amount: 4860
      </div>
      <div style={{ textAlign: 'center', color: C.faint, fontSize: 54, fontWeight: 900 }}>→</div>
      <div style={{ display: 'grid', gap: 14 }}>
        <div style={{ background: '#eef7f2', border: '1px solid #bfe6d4', borderRadius: 16, padding: '22px 26px' }}>
          <div style={{ color: C.green, fontSize: 28, fontWeight: 850 }}>倉儲後台</div>
          <div style={{ fontSize: 24, color: C.muted, marginTop: 8 }}>C2 先讓 action queue 從訂單資料算出客服確認規則。</div>
        </div>
        <div style={{ background: '#eef4ff', border: '1px solid #cfe0fb', borderRadius: 16, padding: '22px 26px' }}>
          <div style={{ color: C.blue, fontSize: 28, fontWeight: 850 }}>後續課程</div>
          <div style={{ fontSize: 24, color: C.muted, marginTop: 8 }}>C2 先把資料規則打穩；API、token、webhook 留到 C3。</div>
        </div>
      </div>
    </div>
  </div>
);

const ControlProcessBoard = () => {
  const steps = [
    { k: '01', title: '讀現況', body: '先開專案、看後台、找出資料從哪裡來。', color: C.blue },
    { k: '02', title: '拆需求', body: '把一句話拆成資料、規則、畫面與驗收。', color: C.green },
    { k: '03', title: 'Plan Mode', body: 'AI 只能提出 A-F 計畫，還不能改檔。', color: C.orange },
    { k: '04', title: '最小實作', body: '只填 getPendingLineOrders，不改 UI、不碰 API。', color: C.amber },
    { k: '05', title: '驗收交付', body: '跑測試、看畫面、看 diff、build 後才 commit。', color: C.red },
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
    <img src={c2DashboardResultShot} alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
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
      <div style={{ marginTop: 28, fontSize: 34, color: 'rgba(255,255,255,.72)', lineHeight: 1.5, maxWidth: 1390 }}>今天不是自由做新網站。今天把 C1 的專案推進成可控交付：先拆需求，先出計畫，人審後才實作，最後用測試腳本、畫面、diff、build 驗收。</div>
    </div>
    <div style={{ position: 'absolute', left: 108, bottom: 42, fontFamily: mono, color: 'rgba(255,255,255,.48)', fontSize: 20 }}>U11-C2 · Warehouse Admin Plan</div>
  </div>
);

const CourseMap: Page = () => (
  <Shell eyebrow="你現在在哪裡" title="四堂課串成同一條交付線" lead="C2 是轉折點：從會打開專案，進到會控制 AI 的修改範圍。">
    <Flow steps={['C1\n啟動專案\n看見成果', 'C2\n填一個 helper\n跑完整驗收', 'C3\n可視化 / LINE\nAPI 概念', 'C4\nMCP / Skills\n學習 Blog']} />
  </Shell>
);

const TodayGoal: Page = () => (
  <Shell eyebrow="今日成果" title="C2 做完要留下四樣東西" lead="這四樣會直接餵給 C3，所以今天的修改要小、可驗、可交接。">
    <Cards columns={4} items={[
      { title: '一份倉儲資料語言', body: '知道 warehouseData.js 裡 orders、channel、status、priority 各代表什麼。' },
      { title: '一套 AI 工作流', body: 'planner 先出 A-F 計畫，人類審核後 implementer 才能動手。' },
      { title: '一條後台規則', body: '完成 getPendingLineOrders，讓 KPI、明細與 action queue 同時連動。' },
      { title: '一組驗收證據', body: '測試腳本、畫面、diff、build 通過，再補 build / preview / deploy 概念。' },
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

const Schedule: Page = () => (
  <Shell eyebrow="4 小時節奏" title="先理解規格，再讓 AI 寫程式" lead="本堂課刻意慢在前半段。規格不清楚時，AI 寫越快，返工越快。">
    <Timeline />
  </Shell>
);

const StageMeaning: Page = () => (
  <Shell eyebrow="四段在教什麼" title="每一段只解決一個教學問題" lead="老師講這堂課時，可以用這四句話把學生拉回主線。">
    <Cards columns={4} items={[
      { title: '段 1：讀懂資料', body: '教學生看倉儲後台、orders、channel/status，以及 helper 會影響哪幾個畫面。', color: C.blue },
      { title: '段 2：先要計畫', body: '教 AGENTS、CLAUDE、Plan Mode。學生審 A-F 計畫，不讓 AI 先改檔。', color: C.orange },
      { title: '段 3：只填 helper', body: '教 implementer 做最小修改：完成 getPendingLineOrders，不改 UI、不碰 API。', color: C.green },
      { title: '段 4：驗收交付', body: '教測試分層、測試腳本、畫面三處連動、diff、build、reviewer。', color: C.red },
    ]} />
  </Shell>
);

const HandoutSteps: Page = () => (
  <Shell eyebrow="學生入口" title="打開 U2 只看 START-HERE，照順序做" lead="不要讓學生在一堆檔案裡猜下一步。這堂的講義入口只有一個：U2/START-HERE.md。">
    <Cards columns={4} items={[
      { title: '先看現況', body: '啟動 web-lab，看倉儲後台與訂單可視化，不先改檔。', color: C.blue },
      { title: '先跑失敗測試', body: 'C2-HOLE 還沒完成，測試失敗是今天的起點。', color: C.red },
      { title: '再讓 AI 規劃', body: '貼 planner，先審 A-F 計畫，通過才 implement。', color: C.orange },
      { title: '最後才交付', body: '測試、畫面、diff、build、reviewer 全過才 commit。', color: C.green },
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

const Sec1: Page = () => <SectionSlide no="1" time="0:55 - 1:30" title="倉儲資料語言：warehouseData.js 與 warehouseLogic.js" lead="先讀懂資料，才有資格要求 AI 改畫面。C2 的核心是讓資料欄位成為規格，而不是口頭感覺。" />;

const DataContract: Page = () => (
  <Shell eyebrow="段 1 · warehouseData.js" title="今天的規則從訂單資料算出來" lead="AI 可以幫你寫判斷，但不能手寫假資料。規則要從 orders 裡的 channel/status 算出來。">
    <Code label="ai-project-foundation-kit/web-lab/src/warehouseData.js">{`{
  id: 'SO-20260705-021',
  customer: '朗日餐飲集團',
  channel: 'LINE OA',
  status: '待出貨',
  priority: 'medium',
  amount: 4860,
  eta: '15:10'
}`}</Code>
  </Shell>
);

const Fields: Page = () => (
  <Shell eyebrow="段 1 · 欄位語言" title="每個欄位都要能解釋為什麼存在" lead="今天先讓倉儲後台用資料說話；下一堂才把訂單資訊拿去做 LINE 與 API 流程。">
    <Cards items={[
      { title: 'channel', body: 'LINE OA 訂單需要客服確認收件人與 ETA。', color: C.red },
      { title: 'status', body: '已出貨不用提醒；尚未出貨才進 action queue。', color: C.blue },
      { title: 'priority', body: '未來可擴充高優先規則，但本堂先不過度發散。', color: C.orange },
      { title: 'action queue', body: '給營運下一步，不是寫漂亮摘要。', color: C.green },
    ]} />
  </Shell>
);

const TwoDownstreams: Page = () => (
  <Shell eyebrow="段 1 · 一份資料，多個畫面" title="不要手寫假資料，也不要讓每段程式各說各話" lead="C2 先處理倉儲後台，下堂課 C3 再處理訂單可視化與 LINE。兩邊都要用清楚欄位說話。">
    <ContractDiagram />
  </Shell>
);

const Guardrails: Page = () => (
  <Shell eyebrow="段 1 · 允許範圍" title="今天只允許改一個 helper" lead="限制範圍不是綁手綁腳，是讓 AI 的輸出可以被驗收。">
    <Cards columns={3} items={[
      { title: '可以改', body: 'web-lab/src/warehouseLogic.js 裡的 getPendingLineOrders。', color: C.green },
      { title: '不該改', body: 'WarehouseAdmin、styles、warehouseData、package、line-lab、token 或 .env。', color: C.red },
      { title: '要保留', body: '畫面已經接好；學生只補資料規則，不重做後台。', color: C.blue },
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
  <Shell eyebrow="段 2 · Prompt 卡 1" title="把需求交給 planner，但先禁止寫程式" lead="這張卡從學生講義 U2/PROMPT-CARD 來，老師可依現場把需求描述補一句。">
    <Prompt label="貼給 AI：planner，不改檔">{`請你先扮演 planner。
不要修改任何檔案，不要執行 npm install，不要改 package.json。

請先閱讀：
- AGENTS.md
- CLAUDE.md
- web-lab/src/warehouseData.js
- 目前 倉儲後台相關檔案

目標：
完成 getPendingLineOrders(orderItems)。
規則要從 orderItems 回傳 channel 是 LINE OA 且尚未出貨的訂單。
這個 helper 會帶動 KPI、訂單明細、action queue；今天不改 UI，也不真的送 LINE。

請只回覆：
A. 建議修改哪些檔案
B. 每個檔案要改什麼
C. 會讀哪些資料欄位
D. 驗收方式
E. 可能風險
F. 實作順序`}</Prompt>
  </Shell>
);

const ExpectedPlan: Page = () => (
  <Shell eyebrow="段 2 · 計畫長相" title="好的 planner 回覆應該像規格，不像作文" lead="學生審核時只看幾個關鍵點：範圍、資料、風險、驗收。">
    <Cards items={[
      { title: 'A 檔案範圍', body: '只點名 warehouseLogic.js；沒有碰 line-lab 或 package.json。' },
      { title: 'B 修改內容', body: '只完成 getPendingLineOrders，不改 WarehouseAdmin 或資料結構。' },
      { title: 'C 資料欄位', body: '讀 orderItems 的 channel 與 status，不手寫假資料。' },
      { title: 'D 驗收方式', body: '測試腳本通過，KPI / 明細 / action queue 都被同一條規則帶動。' },
      { title: 'E 風險', body: '避免發送 LINE、避免寫死 token、避免改資料結構。' },
      { title: 'F 順序', body: '先讀 helper 用在哪裡，再實作，再測試、看 diff、build。' },
    ]} />
  </Shell>
);

const HumanReview: Page = () => (
  <Shell eyebrow="段 2 · 人審放行" title="人類審核不是形式，是開工閘門" lead="如果計畫沒有說清楚允許檔案與驗收方式，就不要進 implementer。">
    <Checklist items={[
      'git status 仍然乾淨，planner 沒有偷改檔。',
      '計畫只動 倉儲後台相關檔案。',
      '沒有要求 npm install，沒有改 package.json。',
      '沒有碰 LINE token、.env、真送指令。',
      '驗收包含畫面、build、diff，而不是只相信 AI 說完成。',
    ]} />
  </Shell>
);

const Sec3: Page = () => <SectionSlide no="3" time="2:15 - 2:55" title="Implementer：小範圍修改倉儲邏輯" lead="人審通過後，才讓 AI 實作。這次不是重做整個頁面，而是把老師預留的 helper 補正確。" />;

const TaskSpec: Page = () => (
  <EvidenceShell eyebrow="段 3 · 實作目標" title="完成「待確認訂單」判斷規則" lead="後台畫面已經接好。學生要完成的是資料 helper，讓同一條規則同步影響 KPI、明細與處理佇列。">
    <DashboardMock />
  </EvidenceShell>
);

const ImplementerPrompt: Page = () => (
  <Shell eyebrow="段 3 · Prompt 卡 2" title="讓 implementer 照批准計畫做最小修改" lead="這張卡的重點是：照已批准計畫，不擴大需求，不碰 LINE。">
    <Prompt label="貼給 AI：implementer，照計畫改">{`請你現在扮演 implementer。
請照剛剛已通過的人審計畫做最小修改。

限制：
1. 只修改允許檔案。
2. 不要執行 npm install。
3. 不要修改 package.json。
4. 不要修改 line-lab 或任何 LINE 真送邏輯。
5. 不要改 web-lab/src/warehouseData.js 的欄位結構。

完成後請回報：
A. 修改了哪些檔案
B. 每個檔案改了什麼
C. 如何從 orderItems 判斷規則
D. 我應該怎麼驗收
E. 是否有任何未完成或風險`}</Prompt>
  </Shell>
);

const LogicFixScreenshot: Page = () => (
  <EvidenceShell eyebrow="段 3 · 實作證據" title="C2 的實作不是做整頁，而是完成一個資料規則" lead="這張圖用來示範學生最後真的要改的範圍：只填 getPendingLineOrders，不碰 API、token、package 或 C3 主線。">
    <ScreenshotFrame src={c2LogicFixShot} label="dry run · web-lab/src/warehouseLogic.js" />
  </EvidenceShell>
);

const VisualRules: Page = () => (
  <Shell eyebrow="段 3 · 畫面驗收" title="同一條 helper 要牽動三個畫面位置" lead="這裡不是要學生設計 UI，而是確認資料規則真的被既有畫面使用。">
    <Cards columns={3} items={[
      { title: 'KPI', body: '待確認訂單數字不再是 0，且金額來自訂單資料。' },
      { title: '警示燈', body: '待確認訂單有筆數，點下去能看到對應問題。' },
      { title: '明細', body: '明細列出尚未出貨、需要客服確認的訂單。' },
      { title: '處理佇列', body: '出現客服確認 action，但不誤稱已送出 LINE。' },
      { title: '資料來源', body: '不在 UI 寫死數字，全部從 orderItems 計算。' },
      { title: '範圍', body: '畫面有反應即可，不為了美化重寫整頁。' },
    ]} />
  </Shell>
);

const QuickVerify: Page = () => (
  <Shell eyebrow="段 3 · 立即檢查" title="改完不要先 commit，先看 diff 與測試" lead="AI 回報完成不代表完成。先用本機工具驗證。">
    <Code label="terminal">{`cd ai-project-foundation-kit/web-lab
node scripts/check-warehouse-logic.mjs
npm run build

cd ..
git status
git diff -- web-lab/src/warehouseLogic.js

# 檢查：是否只有允許檔案被改？
# 檢查：KPI / 明細 / action queue 是否由同一條 helper 帶動？
# 檢查：C2 是否沒有真的送 LINE？`}</Code>
  </Shell>
);

const TestTypes: Page = () => (
  <Shell eyebrow="段 4 · 測試概念" title="測試有不同層級，今天只做最小版本" lead="不用一開始就學完整測試框架，但要知道測試不是只有一種。">
    <Cards columns={4} items={[
      { title: 'Unit test', body: '測一個小函式，例如 getPendingLineOrders 條件是否正確。', color: C.green },
      { title: 'Integration test', body: '測幾個模組接起來，例如 summary 和 action queue 是否同步。', color: C.blue },
      { title: 'E2E test', body: '從使用者角度操作整個畫面，例如點警示燈看明細。', color: C.orange },
      { title: 'C2 今天', body: '先用一支測試腳本證明資料規則成立，不展開測試框架。', color: C.red },
    ]} />
  </Shell>
);

const TestScript: Page = () => (
  <Shell eyebrow="段 4 · 測試" title="先用測試腳本證明規則不是寫假的" lead="這不是教大型測試框架，而是教學生第一個工程習慣：用可重跑的檢查證明功能成立。">
    <Code label="terminal">{`cd ai-project-foundation-kit/web-lab
node scripts/check-warehouse-logic.mjs

# 通過後應該看到：
# [pass] 開頭的訊息`}</Code>
  </Shell>
);

const TestPassScreenshot: Page = () => (
  <EvidenceShell eyebrow="段 4 · 驗收證據" title="測試與 build 都通過，才進 reviewer" lead="這張圖讓學生看到完成定義不是 AI 回報，而是可以重跑的驗收證據。">
    <ScreenshotFrame src={c2TestPassShot} label="dry run · terminal evidence" />
  </EvidenceShell>
);

const VerificationStack: Page = () => (
  <Shell eyebrow="段 4 · 驗收堆疊" title="一個功能至少要過四層驗收" lead="AI 說完成只是第一句話，不是完成定義。">
    <Flow steps={['測試腳本\n資料規則成立', '畫面驗收\n三處連動', 'Git diff\n範圍乾淨', 'Build\n可打包', 'Reviewer\nPASS / BLOCK']} />
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
      'getPendingLineOrders 是否真的從 orderItems 找出 LINE OA 且尚未出貨的訂單？',
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
  CourseMap,
  TodayGoal,
  ControlledVibe,
  ControlledFlowShot,
  Schedule,
  StageMeaning,
  HandoutSteps,
  AgentFiles,
  Sec1,
  DataContract,
  Fields,
  TwoDownstreams,
  Guardrails,
  StartCommands,
  Sec2,
  WhyPlanner,
  PlannerPrompt,
  ExpectedPlan,
  HumanReview,
  Sec3,
  TaskSpec,
  ImplementerPrompt,
  LogicFixScreenshot,
  VisualRules,
  QuickVerify,
  TestTypes,
  TestScript,
  TestPassScreenshot,
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
  '說明四堂課的連續性：C2 是控制 AI 修改範圍的核心。',
  '今天四個產出：倉儲資料語言、AI 工作流、後台規則、驗收證據。',
  '補定義：vibe coding 可以快，但沒有 guardrails 就不是可交付流程。',
  '用一張流程圖讓學生先看到：讀現況、拆需求、Plan Mode、最小實作、驗收交付。',
  '時間表先講清楚，前半段會刻意慢，因為要先把規格講穩。',
  '用四段教學地圖收束：讀資料、審計畫、填 helper、驗收交付。',
  '對齊講義：學生只從 U2/START-HERE.md 進入，不在多個 STEP 檔裡猜下一步。',
  '三個控制器：AGENTS、CLAUDE、Plan Mode；強調守則不是魔法鎖，還要驗收。',
  '段一進倉儲資料語言。提醒學生：不知道欄位意思，就不要讓 AI 改畫面。',
  '逐欄念 warehouseData.js，特別提醒 status / channel 的允許值。',
  '把欄位和畫面、通知的用途連起來。',
  '說明 warehouseData.js 會餵倉儲後台與訂單可視化，不能手寫第二份假資料。',
  '鎖定允許修改檔案：warehouseLogic.js。',
  '啟動本機，先看到現況。',
  '段二進 planner。強調 Plan mode 不能改檔。',
  '說明 planner 的流程與 git status 驗收。',
  '老師帶學生複製 Planner Prompt。',
  '示範什麼叫好的 A-F 計畫。',
  '人審檢查點，沒有通過就不要 implement。',
  '段三才開始實作。',
  '展示待確認訂單判斷規則應該長什麼樣。',
  '老師帶學生複製 Implementer Prompt。',
  '展示 dry-run 實作截圖：學生只完成 getPendingLineOrders，不擴大範圍。',
  '畫面驗收聚焦同一條 helper 是否帶動 KPI、明細與處理佇列。',
  '改完先跑測試與 build，再看 diff。',
  '補測試分層頁：unit / integration / e2e 只講概念，不展開框架。',
  '測試腳本頁：這是本堂最小測試，不是大型測試框架。',
  '展示 dry-run 驗收截圖：測試腳本與 build 都通過。',
  '補驗收堆疊：測試腳本、畫面、diff、build、reviewer。',
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


