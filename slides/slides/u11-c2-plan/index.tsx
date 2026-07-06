import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';
import type { ReactNode } from 'react';
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

const courseLabel = 'U11 · C2 · 受控 AI Coding';

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

const Foot = ({ label = courseLabel }: { label?: string }) => {
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
    { k: '01', title: '直覺版', body: '先看老師貼一句話，AI 可能怎麼失控。', color: C.red },
    { k: '02', title: '拆 prompt', body: '把背景、目標、範圍、驗收補齊。', color: C.blue },
    { k: '03', title: 'Plan Mode', body: '先讀專案與列計畫，不能改檔。', color: C.orange },
    { k: '04', title: '人審後實作', body: '只補 LINE OA 未取餐訂單規則。', color: C.green },
    { k: '05', title: '工具化', body: 'prompt 固化成 sub-agent，用 HUD 看狀態。', color: C.amber },
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
          ['不是', '不是學一個很複雜的功能。', C.red],
          ['是', '第一次用 AI 接一個小型開發需求。', C.green],
          ['老師要強調', '重點是控制流程，不是炫技。', C.blue],
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
      <div style={{ marginTop: 28 }}><Title size={88}>第一次用 AI 接小型開發需求</Title></div>
      <div style={{ marginTop: 28, fontSize: 36, color: 'rgba(255,255,255,.74)', lineHeight: 1.48, maxWidth: 1360 }}>從「直接叫 AI 改」走到「讓 AI 先讀專案、先規劃、人審後實作、最後驗收」。案例用 BOBA TIDE 手搖飲訂單控制台。</div>
    </div>
    <div style={{ position: 'absolute', left: 108, bottom: 42, fontFamily: mono, color: 'rgba(255,255,255,.48)', fontSize: 20 }}>U11-C2 · Controlled AI Coding</div>
  </div>
);

const LearningPromise: Page = () => (
  <Shell eyebrow="今天不是教複雜功能" title="今天教的是：怎麼讓 AI 改對一個小需求" lead="第一次面對一個現成專案時，重點不是背框架，而是知道怎麼把 AI 拉進一條可控流程。">
    <Cards columns={3} items={[
      { title: '需求講清楚', body: '把「幫我改」拆成背景、目標、範圍與驗收。', color: C.blue },
      { title: 'AI 先看專案', body: '讓 AI 讀守則、資料與現有檔案，不憑空猜。', color: C.orange },
      { title: '人審再放行', body: 'planner 只規劃；人看過，implementer 才能改。', color: C.green },
    ]} />
  </Shell>
);

const VibeCodingConcept: Page = () => (
  <Shell eyebrow="核心觀念 1" title="Vibe coding：用自然語言驅動 AI 寫程式" lead="你描述想要的結果，AI coding agent 讀專案、產生程式碼、跑指令，再依你的回饋修正。它很快，但如果你看不懂也不驗收，就會變成風險。">
    <Cards columns={3} items={[
      { title: '你說意圖', body: '用白話描述功能、畫面、錯誤或想要的行為。', color: C.blue },
      { title: 'AI 產出程式', body: 'AI 可能改多個檔案、補邏輯、跑工具、回報結果。', color: C.orange },
      { title: '你要負責驗收', body: '能跑不等於能交付；要看 diff、畫面、build、風險。', color: C.green },
    ]} />
  </Shell>
);

const HumanInLoopConcept: Page = () => (
  <Shell eyebrow="核心觀念 2" title="Human-in-the-loop：人要留在決策點上" lead="AI 可以協助產出，但不能自己決定什麼可以進正式成果。人的工作是用情境判斷、專案規則與驗收證據，決定要不要放行。">
    <Flow steps={[
      'AI 先讀專案',
      'AI 只提計畫',
      '人審查與修正',
      'AI 最小實作',
      '人驗收再交付',
    ]} />
  </Shell>
);

const BobaScenario: Page = () => (
  <Shell eyebrow="教學案例" title="BOBA TIDE：LINE OA 訂單需要進處理佇列" lead="情境刻意簡單：客人用 LINE OA 下飲料訂單，只要訂單尚未取餐，店員就要主動聯絡或提醒。">
    <Cards columns={4} items={[
      { title: '資料', body: 'drinkOrders 裡有 channel、status、amount、eta。', color: C.blue },
      { title: '規則', body: 'channel 是 LINE OA，且 status 不是已取餐。', color: C.green },
      { title: '畫面', body: '備料控制台 action queue 多一條提醒。', color: C.orange },
      { title: '邊界', body: '本堂不真的送 LINE，不碰 token。', color: C.red },
    ]} />
  </Shell>
);

const FourHourRoute: Page = () => (
  <Shell eyebrow="4 小時路線" title="先感受失控，再建立控制" lead="先看直覺版為什麼不可靠，再一步步把 prompt、規劃、人審、驗收補齊。">
    <Flow steps={[
      '0:00\n為什麼學 AI coding',
      '0:35\n直覺版示範',
      '1:05\n拆好 prompt',
      '1:45\nPlan Mode / 人審',
      '2:35\n實作 / 驗收',
      '3:20\nsub-agent / HUD',
    ]} />
  </Shell>
);

const ControlledFlowShot: Page = () => (
  <Shell eyebrow="學習曲線" title="同一個需求，走兩次" lead="第一次走直覺版，只看問題；第二次走受控版，才正式動手。">
    <ControlProcessBoard />
  </Shell>
);

const IntuitiveSec: Page = () => (
  <SectionSlide no="1" time="只看示範，先不要操作" title="先看一次直覺版" lead="這段只投影示範，先不要跟著貼。目的是看懂：一句話叫 AI 改，看起來最快，實際最難驗收。" />
);

const IntuitivePrompt: Page = () => (
  <Shell eyebrow="直覺版 Prompt" title="大多數人第一次會這樣問" lead="這句話沒有錯，但它缺少專案脈絡、檔案範圍、禁止事項與驗收方式。">
    <Prompt label="示範用，先不要貼">{`幫我把 LINE OA 還沒完成的訂單放進處理佇列。
順便讓畫面看起來清楚一點。`}</Prompt>
  </Shell>
);

const IntuitiveProblems: Page = () => (
  <Shell eyebrow="直覺版的問題" title="AI 可能有做事，但你不知道它有沒有做對" lead="畫面有變，不等於需求完成。真正麻煩的是：你不知道該檢查哪裡。">
    <Cards columns={3} items={[
      { title: '需求不清', body: '「還沒完成」是待製作、製作中、待取餐，還是全部？', color: C.red },
      { title: '範圍不清', body: 'AI 可能改 UI、改資料、改 package，甚至碰 LINE 真送。', color: C.orange },
      { title: '驗收不清', body: '沒有 diff/build/reviewer，就只能相信 AI 說完成。', color: C.blue },
    ]} />
  </Shell>
);

const CleanCheckpoint: Page = () => (
  <Shell eyebrow="正式開始前" title="直覺版只是示範，工作區要保持乾淨" lead="這一頁是安全閘門。如果剛剛已經跟著貼了，就先停下來，不要進正式流程。">
    <Code label="terminal">{`cd ai-project-foundation-kit
git status

# 正式 lab 開始前，工作區應該是乾淨的。
# 若有直覺版改動，先請老師處理，不要自行 commit。`}</Code>
  </Shell>
);

const PromptIngredients: Page = () => (
  <Shell eyebrow="拆解" title="好的 AI coding prompt 至少要包含六件事" lead="不是 prompt 越長越好，而是該講的控制資訊不能漏。">
    <Cards columns={3} items={[
      { title: '背景', body: '這是哪個專案、哪個頁面、哪個使用情境。', color: C.blue },
      { title: '目標', body: '這次只要完成哪一條可驗收規則。', color: C.green },
      { title: '允許檔案', body: 'AI 可以看很多檔，但只能改指定檔。', color: C.orange },
      { title: '禁止事項', body: '不新增套件、不碰 token、不改真送 API。', color: C.red },
      { title: '輸出格式', body: 'planner 回 A-F；implementer 回 A-E。', color: C.amber },
      { title: '驗收方式', body: '畫面、diff、build、reviewer 都要過。', color: C.green },
    ]} />
  </Shell>
);

const PromptBeforeAfter: Page = () => (
  <Shell eyebrow="Prompt 前後對比" title="同一個需求，問法差很多" lead="左邊像聊天；右邊像把工作交給一位會被審核的助教。">
    <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 18, maxWidth: 1540 }}>
      <Prompt label="直覺版" size={22}>{`幫我把 LINE OA 還沒完成的訂單放進處理佇列。`}</Prompt>
      <Prompt label="受控版" size={17}>{`請先扮演 planner，不要改檔。
目標：BOBA TIDE 備料控制台 action queue 新增一條規則：
LINE OA 訂單且尚未取餐，需要顯示「LINE OA 訂單需要主動聯絡客人」。

請先閱讀 AGENTS.md / CLAUDE.md / shopData.js / shopLogic.js。
限制：只能規劃 shopLogic.js；不新增套件；不碰 LINE token；不手寫假資料。
請用 A-F 回覆：檔案、改法、資料欄位、驗收、風險、需人審處。`}</Prompt>
    </div>
  </Shell>
);

const Guardrails: Page = () => (
  <Shell eyebrow="控制器" title="AGENTS / CLAUDE / Plan Mode 不是儀式，是護欄" lead="守則檔讓 AI 知道邊界；Plan Mode 讓 AI 先說清楚；人審讓偏航停在改檔之前。">
    <Cards columns={3} items={[
      { title: 'AGENTS.md', body: '專案守則：哪些檔能改，哪些事絕對不能做。', color: C.green },
      { title: 'CLAUDE.md', body: 'Claude Code 補充：先讀、先計畫、固定回報。', color: C.blue },
      { title: 'Plan Mode', body: '先出計畫，不准邊講邊改。', color: C.orange },
    ]} />
  </Shell>
);

const PlannerPrompt: Page = () => (
  <Shell eyebrow="Prompt 卡 1" title="先交給 planner：只規劃，不改檔" lead="這是正式動手前的第一張 prompt。">
    <Prompt label="貼給 AI：planner" size={17}>{`你現在扮演 planner。先不要修改任何檔案，也不要執行寫入動作。

請先閱讀：AGENTS.md、CLAUDE.md、web-lab/src/shopData.js、web-lab/src/shopLogic.js、web-lab/src/ShopConsole.jsx

任務：BOBA TIDE 備料控制台 action queue 新增一條規則：
LINE OA 訂單且尚未取餐，要顯示「LINE OA 訂單需要主動聯絡客人」。

限制：只規劃 shopLogic.js 的 C2-HOLE；不新增套件；不改 package.json；不碰 LINE 真送或 token。

請只回覆：
A. 建議修改的檔案　B. 每個檔案要改什麼　C. 會讀哪些資料欄位
D. 驗收方式　E. 可能風險　F. 哪一步需要人類拍板`}</Prompt>
  </Shell>
);

const ExpectedPlan: Page = () => (
  <Shell eyebrow="人審前要看什麼" title="好的 planner 回覆應該像規格，不像作文" lead="不必看懂每一行程式，但要看懂 AI 有沒有守住邊界。">
    <Cards columns={3} items={[
      { title: '範圍', body: '只點名 shopLogic.js 的 C2-HOLE；沒有碰 package 或真送。', color: C.green },
      { title: '資料', body: '讀 channel 與 status；規則從 drinkOrders 算出來。', color: C.blue },
      { title: '驗收', body: 'action queue 出現提醒、diff 範圍乾淨、build 通過。', color: C.orange },
    ]} />
  </Shell>
);

const HumanReview: Page = () => (
  <Shell eyebrow="人審放行" title="沒有人核准，AI 不准進 implementer" lead="這是今天最重要的一道閘門。計畫沒過，就不要讓 AI 改檔。">
    <Checklist items={[
      'git status 仍然乾淨，planner 沒有偷改檔。',
      '計畫只處理 shopLogic.js 的 C2-HOLE。',
      '沒有碰 package.json、LINE token、真送 API。',
      '驗收方式包含畫面、diff、build，而不是只相信 AI 回報。',
    ]} />
  </Shell>
);

const ImplementerPrompt: Page = () => (
  <Shell eyebrow="Prompt 卡 2" title="人審通過後，implementer 才能做最小修改" lead="這張卡只讓 AI 照批准計畫動手，不開新需求。">
    <Prompt label="貼給 AI：implementer" size={18}>{`你現在扮演 implementer。
請依照剛剛已核准的 planner 計畫實作最小修改。

限制：
1. 只能修改 web-lab/src/shopLogic.js 的 C2-HOLE
2. 不要新增套件，不要改 package.json
3. 不要改 LINE 真送邏輯、token 或 .env
4. 不要重構，不要順便美化 UI

完成後請回報：
A. 實際修改的檔案
B. 每個檔案改了什麼
C. 如何判斷 LINE OA 且尚未取餐
D. 我現在要怎麼驗收
E. 哪些地方你沒有改`}</Prompt>
  </Shell>
);

const ResultBeforeAfter: Page = () => (
  <Shell eyebrow="結果前後對比" title="受控版不是比較慢，是比較知道自己改了什麼" lead="直覺版只能看表面；受控版會留下可檢查的證據。">
    <Cards columns={2} items={[
      { title: '直覺版結果', body: '畫面可能變了，但不知道改了哪些檔、是否寫死資料、是否碰到 LINE 真送。', color: C.red },
      { title: '受控版結果', body: '只改 C2-HOLE；規則從資料算出來；畫面、diff、build 都能被人檢查。', color: C.green },
    ]} />
    <div style={{ marginTop: 24 }}>
      <Flow steps={['畫面看到提醒', 'git diff 範圍乾淨', 'npm run build 通過', 'reviewer 給 PASS / BLOCK']} />
    </div>
  </Shell>
);

const VerifyAndCheck: Page = () => (
  <Shell eyebrow="驗收" title="AI 說完成不算完成，證據才算" lead="把 AI 的回報變成可重跑、可檢查的證據，才是可交付狀態。">
    <Code label="terminal">{`cd ai-project-foundation-kit/web-lab
npm run build

cd ..
git status
git diff -- web-lab/src/shopLogic.js

# 人看畫面：action queue 是否出現 LINE OA 訂單提醒？
# 人看 diff：是否只補 C2-HOLE？`}</Code>
  </Shell>
);

const ReviewerPrompt: Page = () => (
  <Shell eyebrow="Prompt 卡 3" title="最後交給 reviewer：只檢查，不修改" lead="reviewer 的工作不是幫忙修，而是擋下不該交付的修改。">
    <Prompt label="貼給 AI：reviewer" size={18}>{`請你扮演 reviewer，只檢查，不修改檔案。

請檢查目前 git diff 是否符合 U2 範圍：
1. 是否只修改 shopLogic.js 的 C2-HOLE
2. 是否沒有新增套件、沒有改 package.json
3. 是否沒有碰 LINE token、真送 API 或 .env
4. 規則是否從 channel/status 判斷，不是寫死假資料

請用以下格式回覆：
Verdict: PASS 或 BLOCK
Changed Files:
Scope Check:
Contract Check:
Next Step:`}</Prompt>
  </Shell>
);

const RescuePrompt: Page = () => (
  <Shell eyebrow="救援" title="偏航時，不要繼續加需求，先拉回範圍" lead="看到 AI 改太多，最省事的做法是停下來要求它分類：哪些保留、哪些移除。">
    <Prompt label="貼給 AI：停止擴張，回到 U2">{`請先停止新增功能。
請檢查目前修改是否超出 U2 範圍：
- 是否改到 package.json？
- 是否改到 LINE 真送邏輯、token 或 .env？
- 是否改到資料結構？
- 是否重寫了不必要的 UI？

請只回覆：
1. 哪些修改應該保留
2. 哪些修改應該移除
3. 如何回到只修改 shopLogic.js C2-HOLE 的最小版本
4. 回復後要跑哪些驗收`}</Prompt>
  </Shell>
);

const SubAgentIntro: Page = () => (
  <SectionSlide no="7" time="工具品質升級" title="把剛才用熟的 prompt 做成 sub-agent" lead="sub-agent 不是取代 Plan Mode，也不是跳過人審。它只是把 planner / reviewer 這種穩定 prompt 存成可重用角色。" />
);

const AgentsTabs: Page = () => (
  <Shell eyebrow="段 7 · /agents" title="先打開 Agents 面板，看三個位置" lead="Running 是正在跑的 agent；Library 是可用 agent；Create new agent 是把 prompt 固化的入口。">
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, maxWidth: 1540 }}>
      <WideAgentShot src={agentCommandShot} label="01 · 輸入 /agents" height={250} />
      <WideAgentShot src={agentRunningShot} label="02 · Running：目前沒有背景 agent" height={250} />
      <WideAgentShot src={agentLibraryShot} label="03 · Library：看到 user / project / built-in agents" height={250} />
    </div>
    <div style={{ marginTop: 22, fontSize: 25, color: C.muted, lineHeight: 1.45, maxWidth: 1500 }}>這一步只看位置，不建立功能。sub-agent 是「可被呼叫的角色」，不是新的專案或新的套件。</div>
  </Shell>
);

const AgentCreateFlow: Page = () => (
  <Shell eyebrow="段 7 · Create new agent" title="直接沿用剛剛的 planner / reviewer prompt" lead="不需要重新發明措辭；剛才能穩定使用的 prompt，就是 sub-agent 的素材。">
    <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.2fr 1.2fr 1.7fr', gap: 15, maxWidth: 1540 }}>
      <AgentShot src={agentCreateShot} label="04 · Create new agent" height={220} />
      <AgentShot src={agentLocationShot} label="05 · Project (.claude/agents/)" height={220} />
      <AgentShot src={agentMethodShot} label="06 · Generate with Claude" height={220} />
      <AgentShot src={agentGenerateShot} label="07 · 描述 agent 任務" height={220} />
    </div>
    <div style={{ marginTop: 22 }}>
      <Code label="描述範例" size={18}>{`請建立一個 beginner-ai-project-workflow agent。
用途：初學者要 AI 讀專案、規劃、驗收小型開發需求時使用。

行為：
- 先讀 AGENTS.md / CLAUDE.md / 相關檔案
- planner 階段只回 A-F 計畫，不改檔
- reviewer 階段只檢查 diff，不修改
- 主對話與人類仍負責最後放行`}</Code>
    </div>
  </Shell>
);

const AgentPermissionMemory: Page = () => (
  <Shell eyebrow="段 7 · 權限與記憶" title="planner / reviewer 優先 read-only" lead="課堂截圖示範 all tools；正式教學時，會寫檔的能力只留給 implementer。">
    <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr 1.1fr', gap: 18, maxWidth: 1540 }}>
      <AgentShot src={agentToolsShot} label="08 · Tools：示範 all tools，但要講清楚風險" height={280} />
      <AgentShot src={agentColorShot} label="09 · Color：方便辨識背景 agent" height={280} />
      <AgentShot src={agentMemoryShot} label="10 · Memory：選 Project scope" height={280} />
    </div>
  </Shell>
);

const AgentConfirmSave: Page = () => (
  <Shell eyebrow="段 7 · Confirm and save" title="存檔前先看名稱、位置、警告" lead="sub-agent 一旦存進 project，就會變成這個 repo 的工作角色。不要把過寬、會越權的 prompt 直接收進去。">
    <div style={{ display: 'grid', gridTemplateColumns: '1.55fr 0.8fr', gap: 18, maxWidth: 1540, alignItems: 'stretch' }}>
      <WideAgentShot src={agentConfirmShot} label="11 · Confirm and save：檢查 name / location / tools / memory" height={420} />
      <WideAgentShot src={agentCreatedShot} label="12 · Library：Project agents 出現新 agent" height={420} />
    </div>
  </Shell>
);

const AgentRunDemo: Page = () => (
  <Shell eyebrow="段 7 · 實際呼叫" title="@agent 可以幫忙看，但 main thread 才能放行" lead="背景 agent 負責讀、整理、檢查；人類與主對話負責決策。">
    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 22, maxWidth: 1540, alignItems: 'center' }}>
      <WideAgentShot src={agentRunShot} label="13 · @agent-beginner-ai-project-workflow 檢視 web-lab" height={350} />
      <Cards items={[
        { title: '可以交給 agent', body: '讀專案、整理檔案用途、檢查 prompt 是否符合 U2 範圍。', color: C.green },
        { title: '不能交給 agent', body: '自動放行 implementer、自動 commit、跳過人審或驗收。', color: C.red },
      ]} />
    </div>
  </Shell>
);

const ClaudeHudIntro: Page = () => (
  <Shell eyebrow="段 7 · Claude HUD" title="看得到 Claude Code 正在發生什麼" lead="Claude HUD 把 context、usage、active tools、running agents 與 todo progress 顯示在輸入框下方。">
    <Cards columns={4} items={[
      { title: 'Context', body: '知道什麼時候快塞滿，不再盲目一直貼 prompt。', color: C.blue },
      { title: 'Usage', body: '課堂現場先看到用量狀態，避免突然卡住。', color: C.orange },
      { title: 'Agents', body: '配合 /agents 練習，看得到背景 agent 是否正在跑。', color: C.green },
      { title: 'Todo', body: '讓 plan / implement / review 的狀態更透明。', color: C.amber },
    ]} />
  </Shell>
);

const ClaudeHudInstall: Page = () => (
  <Shell eyebrow="段 7 · 安裝 Claude HUD" title="三步裝好：marketplace、install、setup" lead="照截圖做：加入 marketplace、安裝 plugin、重開 Claude Code 後執行 setup。">
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
  </Shell>
);

const Acceptance: Page = () => (
  <Shell eyebrow="完成定義" title="U2 結束時，真正要帶走的是這件事" lead="不是記住一串工具，而是知道 AI coding 交付前要留下哪些證據。">
    <Cards columns={4} items={[
      { title: '能說需求', body: '把一句話需求拆成背景、目標、範圍、驗收。', color: C.blue },
      { title: '能審計畫', body: '看懂 planner 有沒有守住檔案與資料邊界。', color: C.green },
      { title: '能驗結果', body: '畫面、diff、build、reviewer 都要過。', color: C.orange },
      { title: '能工具化', body: '把穩定 prompt 固化成 agent，看 HUD 狀態。', color: C.red },
    ]} />
  </Shell>
);

const BridgeToC3: Page = () => (
  <Shell eyebrow="銜接下一堂" title="C3 接手的是同一個訂單語境" lead="U2 把 AI 修改流程打穩；C3 再把訂單狀態推進到可視化、API、webhook、token 與 LINE OA 概念。">
    <Flow steps={['U2\n受控修改', 'C3\n訂單可視化', 'C3\nAPI / webhook', 'C3\nLINE OA 通知', 'C4\nMCP / Skills']} />
  </Shell>
);

const Close: Page = () => (
  <div style={{ ...fill, background: C.dark, color: '#fff' }}>
    <div style={pad}>
      <Eyebrow>收束</Eyebrow>
      <div style={{ marginTop: 28 }}><Title size={82}>AI 可以很快<br />但要可交付，必須可控</Title></div>
      <div style={{ marginTop: 28, fontSize: 34, color: 'rgba(255,255,255,.72)', lineHeight: 1.5, maxWidth: 1380 }}>今天的主線只有一條：先不要急著叫 AI 改。先讓它看專案、先規劃、讓人審，再小範圍實作，最後用證據驗收。</div>
    </div>
    <div style={{ position: 'absolute', left: 108, bottom: 42, fontFamily: mono, color: 'rgba(255,255,255,.48)', fontSize: 20 }}>U11 · C2 · 完成</div>
  </div>
);

export const meta: SlideMeta = {
  title: 'U11-C2: 從直覺叫 AI 改，到受控 AI Coding',
  createdAt: '2026-07-04T00:00:00.000Z',
};

const pages = [
  Cover,
  LearningPromise,
  VibeCodingConcept,
  HumanInLoopConcept,
  BobaScenario,
  FourHourRoute,
  ControlledFlowShot,
  IntuitiveSec,
  IntuitivePrompt,
  IntuitiveProblems,
  CleanCheckpoint,
  PromptIngredients,
  PromptBeforeAfter,
  Guardrails,
  PlannerPrompt,
  ExpectedPlan,
  HumanReview,
  ImplementerPrompt,
  ResultBeforeAfter,
  VerifyAndCheck,
  ReviewerPrompt,
  RescuePrompt,
  SubAgentIntro,
  AgentsTabs,
  AgentCreateFlow,
  AgentPermissionMemory,
  AgentConfirmSave,
  AgentRunDemo,
  ClaudeHudIntro,
  ClaudeHudInstall,
  Acceptance,
  BridgeToC3,
  Close,
];

export const notes: string[] = [
  '開場直接講清楚：今天不是學很複雜的功能，而是第一次用 AI 接一個小型開發需求。',
  '把學習目標壓成三件事：講清需求、讓 AI 先看專案、人審後放行。',
  '補 vibe coding：用自然語言驅動 AI 產生程式，但不能把不理解、不驗收的輸出當成果。',
  '補 human-in-the-loop：人要在計畫、人審、驗收這些決策點保留主導權。',
  '案例同步 BOBA TIDE：LINE OA 訂單且尚未取餐，需要進處理佇列；本堂不碰真送。',
  '用 4 小時路線圖先交代節奏：前段建立痛點，中段受控實作，後段驗收與工具化。',
  '強調同一個需求走兩次：直覺版只看問題，受控版才正式動手。',
  '直覺版是老師示範，先不要操作；避免工作區亂掉。',
  '投影直覺 prompt，讓全班感覺這就是平常會貼的話。',
  '拆直覺版問題：需求、範圍、驗收都不清楚。',
  '正式 lab 前做 clean checkpoint；如果剛剛有人跟貼，先停下來找老師。',
  '好 prompt 六要素：背景、目標、允許檔案、禁止事項、輸出格式、驗收方式。',
  '展示前後 prompt 對比：左邊像聊天，右邊像可審核的工作交辦。',
  '補三個控制器：AGENTS、CLAUDE、Plan Mode。',
  '正式貼 planner prompt：只規劃，不改檔。',
  '教全班審 planner：範圍、資料、驗收三件事。',
  '人審放行頁：沒有人核准，就不要進 implementer。',
  '正式貼 implementer prompt：只照批准計畫做最小修改。',
  '結果前後對比：受控版留下畫面、diff、build、reviewer 證據。',
  '驗收頁：AI 說完成不算完成，證據才算。',
  'reviewer 只檢查，不修改；輸出 PASS 或 BLOCK。',
  '偏航救援 prompt：要求 AI 先分類保留與移除，不繼續加需求。',
  '工具化段落：把剛才用熟的 prompt 存成 sub-agent，不取代 human review。',
  '打開 /agents，先看 Running 與 Library 的位置。',
  'Create new agent：沿用 planner/reviewer prompt，不重新發明措辭。',
  'tools 與 memory：planner/reviewer 優先 read-only，implementer 才需要寫入能力。',
  'Confirm and save 前看名稱、位置與警告。',
  '實際 @agent 呼叫：背景 agent 可以看，main thread 和人類仍然拍板。',
  'Claude HUD：看 context、usage、running agents、todo。',
  'Claude HUD 安裝：marketplace add、install、重開、setup。',
  '完成定義：能說需求、能審計畫、能驗結果、能工具化。',
  '銜接 C3：同一個訂單語境，下一堂再進 API / webhook / LINE。',
  '收束：AI 可以快，但交付要可控。',
];

export default pages satisfies Page[];


