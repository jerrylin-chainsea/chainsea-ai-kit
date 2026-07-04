import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';
import type { ReactNode } from 'react';
import warehouseAdminShot from './assets/warehouse-admin.png';

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

const Foot = ({ label = 'U11 · C2 · AGENTS/CLAUDE 與倉儲後台挖洞' }: { label?: string }) => {
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
  <div style={{ fontSize: size, fontWeight: 900, letterSpacing: '-.015em', lineHeight: 1.1, whiteSpace: 'pre-wrap' }}>{children}</div>
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
      ['0:00-0:20', '回顧 C1 成品與今天主線', '啟動 web-lab', '倉儲後台跑起來'],
      ['0:20-0:55', 'warehouseData.js 與 warehouseLogic.js', '讀欄位、看規則', '資料欄位表'],
      ['0:55-1:40', 'Plan mode / planner', '複製 Planner Prompt', 'A-F 計畫'],
      ['1:40-2:30', '人審與 implementer', '放行最小修改', 'LINE OA 訂單客服確認規則'],
      ['2:30-3:20', '驗收與救援', '看 diff、修偏航', '乾淨修改範圍'],
      ['3:20-4:00', 'build / commit / 銜接 C3', '收尾與展示', '可交付 commit'],
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
          <div style={{ color: C.blue, fontSize: 28, fontWeight: 850 }}>C3 訂單可視化 / LINE Flex</div>
          <div style={{ fontSize: 24, color: C.muted, marginTop: 8 }}>C3 才進 API、payload、token 與 mock send。</div>
        </div>
      </div>
    </div>
  </div>
);

const DashboardMock = () => (
  <div style={{ maxWidth: 1180, background: C.card, border: `1px solid ${C.line}`, borderRadius: 18, overflow: 'hidden', boxShadow: '0 26px 70px -42px rgba(30,30,40,.52)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '11px 16px', background: '#eef2f5', borderBottom: `1px solid ${C.line}` }}>
      {['#ff5f57', '#febc2e', '#28c840'].map((color) => <span key={color} style={{ width: 12, height: 12, borderRadius: '50%', background: color }} />)}
      <span style={{ marginLeft: 10, fontFamily: mono, color: C.muted, fontSize: 17 }}>localhost:5180 · 倉儲後台</span>
    </div>
    <img src={warehouseAdminShot} alt="" style={{ display: 'block', width: '100%', height: 'auto' }} />
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
      <div style={{ marginTop: 28 }}><Title size={92}>用守則與 Plan Mode 管住 AI<br />讓倉儲後台補上可驗收規則</Title></div>
      <div style={{ marginTop: 28, fontSize: 34, color: 'rgba(255,255,255,.72)', lineHeight: 1.5, maxWidth: 1390 }}>今天不是自由做新網站。今天把 C1 的專案推進成可控交付：看懂 warehouseData.js，要求 AI 先出計畫，人審後才實作，最後用 build 與 diff 驗收。</div>
    </div>
    <div style={{ position: 'absolute', left: 108, bottom: 42, fontFamily: mono, color: 'rgba(255,255,255,.48)', fontSize: 20 }}>U11-C2 · Warehouse Admin Plan</div>
  </div>
);

const CourseMap: Page = () => (
  <Shell eyebrow="你現在在哪裡" title="四堂課串成同一條交付線" lead="C2 是轉折點：從會打開專案，進到會控制 AI 的修改範圍。">
    <Flow steps={['C1\n啟動專案\n看見成果', 'C2\n倉儲資料語言\nPlanner/Implementer', 'C3\nLINE OA Flex\nmock 通知', 'C4\nops agent\nActions/Skill']} />
  </Shell>
);

const TodayGoal: Page = () => (
  <Shell eyebrow="今日成果" title="C2 做完要留下三樣東西" lead="這三樣會直接餵給 C3，所以今天的修改要小、可驗、可交接。">
    <Cards columns={3} items={[
      { title: '一份倉儲資料語言', body: '知道 warehouseData.js 裡 orders、channel、status、priority 各代表什麼。' },
      { title: '一套 AI 工作流', body: 'planner 先出 A-F 計畫，人類審核後 implementer 才能動手。' },
      { title: '一條後台 action rule', body: '新增 LINE OA 訂單客服確認規則，先預備 LINE Flex，C2 不真送。' },
    ]} />
  </Shell>
);

const Schedule: Page = () => (
  <Shell eyebrow="4 小時節奏" title="先理解規格，再讓 AI 寫程式" lead="本堂課刻意慢在前半段。規格不清楚時，AI 寫越快，返工越快。">
    <Timeline />
  </Shell>
);

const Sec1: Page = () => <SectionSlide no="1" time="0:20 - 0:55" title="倉儲資料語言：warehouseData.js 與 warehouseLogic.js" lead="先讀懂資料，才有資格要求 AI 改畫面。C2 的核心是讓資料欄位成為規格，而不是口頭感覺。" />;

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
  <Shell eyebrow="段 1 · 欄位語言" title="每個欄位都要能解釋為什麼存在" lead="今天先讓倉儲後台正確顯示與整理；下一堂才把訂單資訊變成 LINE Flex payload。">
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
  <Shell eyebrow="段 1 · 允許範圍" title="今天只允許改 倉儲後台相關檔案" lead="限制範圍不是綁手綁腳，是讓 AI 的輸出可以被驗收。">
    <Cards columns={3} items={[
      { title: '可以改', body: 'web-lab/src/warehouseLogic.js', color: C.green },
      { title: '不該改', body: 'package.json、line-lab、data-lab、任何 token 或 .env。', color: C.red },
      { title: '要保留', body: '既有倉儲後台能跑、訂單可視化能讀、C3 LINE 主線不被破壞。', color: C.blue },
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

const Sec2: Page = () => <SectionSlide no="2" time="0:55 - 1:40" title="Planner：先要計畫，不要先要程式" lead="Plan mode 的目的，是把 AI 從「立刻動手」切到「先說清楚」。學生要先審計畫，再讓它實作。" />;

const WhyPlanner: Page = () => (
  <Shell eyebrow="段 2 · AI 工作流" title="Planner 只做規劃，不能改檔" lead="如果 AI 在 Plan mode 邊講邊改，就已經偏航。第一個驗收是 git status 必須乾淨。">
    <Flow steps={['讀規則\nAGENTS/CLAUDE', '讀資料\nwarehouseData.js', '界定目標\nLINE OA 規則', '列 A-F 計畫\n不改檔', '人類審核\n批准/修正']} />
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
在倉儲後台 action queue 新增一條「LINE OA 訂單需要客服確認」規則。
規則要從 orderItems 判斷 LINE OA 且尚未出貨的訂單；今天不真的送 LINE。

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
      { title: 'B 修改內容', body: '在 buildActionQueue 加一條規則，不重寫整個後台。' },
      { title: 'C 資料欄位', body: '讀 orderItems 的 channel 與 status，不手寫假資料。' },
      { title: 'D 驗收方式', body: 'action queue 看得到規則，npm run build 通過，git diff 範圍乾淨。' },
      { title: 'E 風險', body: '避免發送 LINE、避免寫死 token、避免改資料結構。' },
      { title: 'F 順序', body: '先 UI 結構，再樣式，再 build，再 diff。' },
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

const Sec3: Page = () => <SectionSlide no="3" time="1:40 - 2:30" title="Implementer：小範圍修改倉儲邏輯" lead="人審通過後，才讓 AI 實作。這次不是重做整個頁面，而是在既有 action queue 裡補一條規則。" />;

const TaskSpec: Page = () => (
  <Shell eyebrow="段 3 · 實作目標" title="新增「LINE OA 訂單需要客服確認」規則" lead="這條規則要讓學生理解：資料先變成後台 action，C3 才進 LINE Flex payload 與 mock send。">
    <DashboardMock />
  </Shell>
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

const VisualRules: Page = () => (
  <Shell eyebrow="段 3 · UI 驗收" title="畫面要像工具，不像宣傳頁" lead="這是倉儲後台，不是 landing page。資訊要能掃描、比較、重複使用。">
    <Cards columns={3} items={[
      { title: '清楚標題', body: 'LINE OA 訂單需要客服確認，讓人知道這條 action 的工作目的。' },
      { title: '資料帶入', body: '顯示筆數、通路、狀態或 ETA，不寫死任意假資料。' },
      { title: '狀態分明', body: '明確表示這只是 C2 後台提醒，不是已送出通知。' },
      { title: '不誤導', body: '不要出現「已送出 LINE」這種 C2 不會發生的狀態。' },
      { title: '不擠版', body: '桌機與窄螢幕都不能文字溢出或互相重疊。' },
      { title: '不重構', body: '既有倉儲後台能跑，不為了漂亮而重寫整頁。' },
    ]} />
  </Shell>
);

const QuickVerify: Page = () => (
  <Shell eyebrow="段 3 · 立即檢查" title="改完不要先 commit，先看畫面與 diff" lead="AI 回報完成不代表完成。先用本機工具驗證。">
    <Code label="terminal">{`cd ai-project-foundation-kit/web-lab
npm run build

cd ..
git status
git diff -- web-lab/src/warehouseLogic.js

# 檢查：是否只有允許檔案被改？
# 檢查：倉儲後台 action queue 是否仍從資料計算？
# 檢查：C2 是否沒有真的送 LINE？`}</Code>
  </Shell>
);

const Sec4: Page = () => <SectionSlide no="4" time="2:30 - 4:00" title="Reviewer：救偏航、驗收、交接到 C3" lead="最後一段把學生從「AI 說好了」拉回工程交付：看錯誤、看 diff、看 build，然後只交付可驗證的修改。" />;

const Pitfalls: Page = () => (
  <Shell eyebrow="段 4 · 常見偏航" title="看到這些狀況，先停下來，不要繼續加需求" lead="C2 的錯通常不是技術不會，而是 AI 擅自把範圍擴大。">
    <Cards items={[
      { title: 'AI 改了 line-lab', body: '立刻要求回到 C2 範圍；LINE Flex 是 C3。', color: C.red },
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
  <Shell eyebrow="段 4 · Final Reviewer" title="交付前四問" lead="這四問是 C2 的收尾，也會一路用到 C3、C4。">
    <Checklist items={[
      '畫面是否真的新增 LINE OA 訂單客服確認規則，且內容來自 orderItems？',
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
git commit -m "新增 LINE OA 訂單客服確認規則"`}</Code>
  </Shell>
);

const Acceptance: Page = () => (
  <Shell eyebrow="完成定義" title="C2 看到這些才算完成" lead="如果缺任何一項，就還不是可交付狀態。">
    <Cards items={[
      { title: '倉儲資料語言', body: '能說出 warehouseData.js 如何餵倉儲後台與訂單可視化。', color: C.green },
      { title: 'Planner', body: '有一份 A-F 計畫，且人審後才進 implementer。', color: C.blue },
      { title: '倉儲後台', body: '有 LINE OA 訂單客服確認規則，沒有誤稱已送出 LINE。', color: C.orange },
      { title: '工程驗收', body: 'build 通過、diff 範圍乾淨、commit 訊息清楚。', color: C.red },
    ]} />
  </Shell>
);

const BridgeToC3: Page = () => (
  <Shell eyebrow="銜接下一堂" title="C3 接手的是同一個倉儲語境，而不是重做一遍" lead="C2 的輸出會在 C3 變成訂單可視化、Flex payload 預覽、人工審核 checkbox、mock send 與 blocked send。">
    <Flow steps={['C2\nLINE OA 訂單客服確認規則', 'C3\nFlex payload 預覽', 'C3\nHuman-in-the-loop', 'C3\nmock send', 'C4\nops agent 自動產 report']} />
  </Shell>
);

const Close: Page = () => (
  <div style={{ ...fill, background: C.dark, color: '#fff' }}>
    <div style={pad}>
      <Eyebrow>收束</Eyebrow>
      <div style={{ marginTop: 28 }}><Title size={82}>今天學的不是一個區塊<br />而是怎麼讓 AI 可控地改專案</Title></div>
      <div style={{ marginTop: 28, fontSize: 34, color: 'rgba(255,255,255,.72)', lineHeight: 1.5, maxWidth: 1380 }}>規格先清楚，AI 才能快。範圍先鎖住，交付才驗得過。下一堂我們把這份準備好的資料，送進 LINE OA Flex 流程。</div>
    </div>
    <div style={{ position: 'absolute', left: 108, bottom: 42, fontFamily: mono, color: 'rgba(255,255,255,.48)', fontSize: 20 }}>U11 · 課2 · 完成</div>
  </div>
);

export const meta: SlideMeta = {
  title: 'U11-C2: AGENTS/CLAUDE、Plan Mode 與倉儲後台挖洞',
  createdAt: '2026-07-04T00:00:00.000Z',
};

const pages = [
  Cover,
  CourseMap,
  TodayGoal,
  Schedule,
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
  VisualRules,
  QuickVerify,
  Sec4,
  Pitfalls,
  RescuePrompt,
  FinalReview,
  BuildCommit,
  Acceptance,
  BridgeToC3,
  Close,
];

export const notes: string[] = [
  '開場先把舊 C2 的自由網站製作拿掉，明確說今天改成倉儲後台挖洞主線。',
  '說明四堂課的連續性：C2 是控制 AI 修改範圍的核心。',
  '今天三個產出：倉儲資料語言、AI 工作流、倉儲後台挖洞區。',
  '時間表先講清楚，前半段會刻意慢，因為要先把規格講穩。',
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
  '展示LINE OA 訂單客服確認規則應該長什麼樣。',
  '老師帶學生複製 Implementer Prompt。',
  'UI 驗收聚焦倉儲後台工具感，不要變 landing page。',
  '改完立刻 build 與 diff。',
  '段四進 reviewer、救援與收尾。',
  '列出 AI 常見偏航。',
  '示範救援 Prompt，把 AI 拉回 C2 範圍。',
  '交付前四問。',
  '收尾指令，build 通過與 diff 乾淨才 commit。',
  '完成定義。',
  '銜接 C3：Flex payload、HITL、mock send。',
  '收束：AI 可控交付比單次做出畫面更重要。',
];

export default pages satisfies Page[];


