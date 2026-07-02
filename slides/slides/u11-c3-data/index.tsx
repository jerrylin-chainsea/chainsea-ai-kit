import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';
import type { ReactNode } from 'react';

export const design: DesignSystem = {
  palette: { bg: '#f5f6f8', text: '#181a1f', accent: '#e2570d' },
  fonts: {
    display: '"PingFang TC", "Noto Sans TC", "Microsoft JhengHei", system-ui, sans-serif',
    body: '"PingFang TC", "Noto Sans TC", "Microsoft JhengHei", system-ui, sans-serif',
  },
  typeScale: { hero: 120, body: 32 },
  radius: 18,
};

const C = {
  bg: '#f5f6f8',
  ink: '#181a1f',
  line: '#e2e5ea',
  orange: '#e2570d',
  dark: '#181a1f',
  card: '#ffffff',
  muted: '#5f6f66',
  faint: '#9caaa2',
  amber: '#c87900',
  red: '#b42318',
  blue: '#2764b5',
};
const mono = '"JetBrains Mono", "SF Mono", ui-monospace, monospace';

const css = `@keyframes c3-rise{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
.c3-rise>*{animation:c3-rise .48s cubic-bezier(.16,1,.3,1) both}
.c3-rise>*:nth-child(2){animation-delay:.05s}.c3-rise>*:nth-child(3){animation-delay:.1s}.c3-rise>*:nth-child(4){animation-delay:.15s}
@media (prefers-reduced-motion:reduce){.c3-rise>*{animation:none!important}}`;

if (typeof document !== 'undefined' && !document.getElementById('u11-c3-line-oa')) {
  const el = document.createElement('style');
  el.id = 'u11-c3-line-oa';
  el.textContent = css;
  document.head.appendChild(el);
}

type Kind =
  | 'cover'
  | 'section'
  | 'bullets'
  | 'cards'
  | 'code'
  | 'prompt'
  | 'flow'
  | 'review'
  | 'payload'
  | 'mock'
  | 'network'
  | 'terminal';

type CardSpec = { title: string; body: string; color?: string };
type SlideSpec = {
  kind: Kind;
  eyebrow?: string;
  title: string;
  lead?: string;
  bullets?: string[];
  cards?: CardSpec[];
  code?: string;
  label?: string;
  steps?: string[];
  time?: string;
  sectionNo?: string;
  footer?: string;
};

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

const toneFor = (i: number) => [C.orange, C.blue, C.amber, C.red, '#5a6270'][i % 5];

const Foot = ({ label }: { label: string }) => {
  const { current, total } = useSlidePageNumber();
  return (
    <div style={{ position: 'absolute', left: 108, right: 108, bottom: 42, borderTop: `1px solid ${C.line}`, paddingTop: 14, display: 'flex', justifyContent: 'space-between', fontFamily: mono, color: C.faint, fontSize: 19 }}>
      <span>{label}</span>
      <span>{String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
    </div>
  );
};

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <span style={{ display: 'inline-flex', padding: '8px 14px', borderRadius: 999, background: '#fbf3ee', color: C.orange, fontFamily: mono, fontSize: 20, fontWeight: 850, letterSpacing: '.1em', textTransform: 'uppercase' }}>{children}</span>
);

const Title = ({ children, size = 62 }: { children: ReactNode; size?: number }) => (
  <div style={{ fontSize: size, fontWeight: 900, letterSpacing: '-.025em', lineHeight: 1.08, whiteSpace: 'pre-wrap' }}>{children}</div>
);

const Lead = ({ children }: { children: ReactNode }) => (
  <div style={{ fontSize: 31, color: C.muted, lineHeight: 1.5, maxWidth: 1460 }}>{children}</div>
);

const Shell = ({ slide, children }: { slide: SlideSpec; children: ReactNode }) => (
  <div style={fill}>
    <div style={pad}>
      {slide.eyebrow ? <Eyebrow>{slide.eyebrow}</Eyebrow> : null}
      <div style={{ marginTop: slide.eyebrow ? 18 : 0 }}><Title>{slide.title}</Title></div>
      {slide.lead ? <div style={{ marginTop: 20 }}><Lead>{slide.lead}</Lead></div> : null}
      <div className="c3-rise" style={{ marginTop: 30 }}>{children}</div>
    </div>
    <Foot label={slide.footer ?? 'U11 · C3 · LINE OA Lab'} />
  </div>
);

const SectionSlide = ({ slide }: { slide: SlideSpec }) => (
  <div style={{ ...fill, background: C.dark, color: '#fff' }}>
    <div style={pad}>
      <span style={{ fontFamily: mono, fontSize: 26, color: C.orange, letterSpacing: '.14em' }}>段 {slide.sectionNo} · {slide.time}</span>
      <div style={{ marginTop: 22 }}><Title size={88}>{slide.title}</Title></div>
      {slide.lead ? <div style={{ marginTop: 28, fontSize: 34, color: 'rgba(255,255,255,.72)', lineHeight: 1.5, maxWidth: 1380 }}>{slide.lead}</div> : null}
    </div>
  </div>
);

const Bullets = ({ items }: { items: string[] }) => (
  <div style={{ display: 'grid', gap: 15, maxWidth: 1500 }}>
    {items.map((item, i) => (
      <div key={item} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '18px 24px' }}>
        <span style={{ flexShrink: 0, width: 38, height: 38, borderRadius: 12, background: toneFor(i), color: '#fff', display: 'grid', placeContent: 'center', fontFamily: mono, fontSize: 20, fontWeight: 850 }}>{i + 1}</span>
        <span style={{ fontSize: 29, lineHeight: 1.42 }}>{item}</span>
      </div>
    ))}
  </div>
);

const Cards = ({ cards }: { cards: CardSpec[] }) => (
  <div style={{ display: 'grid', gridTemplateColumns: cards.length <= 3 ? `repeat(${cards.length}, 1fr)` : 'repeat(2, 1fr)', gap: 18, maxWidth: 1510 }}>
    {cards.map((card, i) => {
      const color = card.color ?? toneFor(i);
      return (
        <div key={card.title} style={{ background: C.card, border: `1px solid ${C.line}`, borderTop: `7px solid ${color}`, borderRadius: 16, padding: '24px 28px', minHeight: 150 }}>
          <div style={{ fontSize: 30, fontWeight: 850, color, lineHeight: 1.22 }}>{card.title}</div>
          <div style={{ fontSize: 25, color: C.muted, lineHeight: 1.45, marginTop: 12 }}>{card.body}</div>
        </div>
      );
    })}
  </div>
);

const CodeBlock = ({ code, label = 'terminal' }: { code: string; label?: string }) => (
  <div style={{ background: '#101418', color: '#dce7df', borderRadius: 18, overflow: 'hidden', border: '1px solid #26332c', maxWidth: 1540, boxShadow: '0 24px 60px -34px rgba(0,0,0,.55)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '13px 20px', background: '#17211c', borderBottom: '1px solid #26332c' }}>
      {['#ff5f57', '#febc2e', '#28c840'].map((c) => <span key={c} style={{ width: 13, height: 13, borderRadius: '50%', background: c }} />)}
      <span style={{ marginLeft: 10, fontFamily: mono, fontSize: 18, color: '#9fb1a8' }}>{label}</span>
    </div>
    <pre style={{ margin: 0, padding: '24px 30px', fontFamily: mono, fontSize: 23, lineHeight: 1.52, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{code}</pre>
  </div>
);

const PromptCard = ({ prompt, label = '固定學生 prompt' }: { prompt: string; label?: string }) => (
  <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 18, overflow: 'hidden', maxWidth: 1560, boxShadow: '0 20px 50px -34px rgba(20,37,31,.45)' }}>
    <div style={{ padding: '13px 22px', background: '#fbf3ee', borderBottom: `1px solid ${C.line}`, color: C.orange, fontFamily: mono, fontSize: 19, fontWeight: 850 }}>{label}</div>
    <pre style={{ margin: 0, padding: '22px 28px', fontFamily: mono, fontSize: 21, lineHeight: 1.45, color: C.ink, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{prompt}</pre>
  </div>
);

const Flow = ({ steps }: { steps: string[] }) => (
  <div style={{ display: 'flex', alignItems: 'stretch', gap: 12, maxWidth: 1550 }}>
    {steps.map((step, i) => (
      <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1 }}>
        <div style={{ background: C.card, border: `2px solid ${toneFor(i)}`, borderRadius: 16, minHeight: 135, padding: '20px 14px', display: 'grid', placeContent: 'center', textAlign: 'center', fontSize: 27, fontWeight: 850, whiteSpace: 'pre-wrap', lineHeight: 1.25 }}>{step}</div>
        {i < steps.length - 1 ? <span style={{ fontFamily: mono, color: C.faint, fontSize: 34 }}>→</span> : null}
      </div>
    ))}
  </div>
);

const ReviewMock = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, maxWidth: 1540 }}>
    <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 18, padding: 26 }}>
      <div style={{ fontFamily: mono, color: C.orange, fontWeight: 850, fontSize: 19 }}>通知審核區</div>
      <div style={{ marginTop: 16, fontSize: 34, fontWeight: 900 }}>營運異常通知</div>
      <div style={{ marginTop: 18, display: 'grid', gap: 13, fontSize: 25 }}>
        <div><b>risk_level:</b> high</div>
        <div><b>total_revenue:</b> NT$128,400</div>
        <div><b>anomaly_count:</b> 5</div>
        <div><b>top_product:</b> 耳掛咖啡</div>
        <div><b>top_channel:</b> LINE</div>
      </div>
    </div>
    <div style={{ background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: 18, padding: 26 }}>
      <div style={{ fontFamily: mono, color: C.amber, fontWeight: 850, fontSize: 19 }}>Human-in-the-loop</div>
      <div style={{ marginTop: 16, fontSize: 30, fontWeight: 900 }}>人工確認後才放行</div>
      <ul style={{ marginTop: 18, paddingLeft: 28, fontSize: 25, lineHeight: 1.55 }}>
        <li>是否真的要通知營運群組</li>
        <li>風險等級是否合理</li>
        <li>action_items 是否可執行</li>
        <li>是否進入 --confirm 發送階段</li>
      </ul>
    </div>
  </div>
);

const payloadJson = `{
  "to": "Uxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "messages": [
    {
      "type": "text",
      "text": "[營運異常通知]\\n風險等級: high\\n總營收: NT$128,400\\n異常筆數: 5\\nTop product: 耳掛咖啡\\nTop channel: LINE\\nAction items:\\n1. 先人工確認第 8 列與第 17 列營收資料。\\n2. 暫停把異常列納入週報。"
    }
  ]
}`;

const PayloadMock = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '.95fr 1.05fr', gap: 22, maxWidth: 1540 }}>
    <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 18, padding: 26 }}>
      <div style={{ fontFamily: mono, color: C.orange, fontWeight: 850, fontSize: 19 }}>LINE payload 預覽區</div>
      <div style={{ marginTop: 18, fontSize: 29, lineHeight: 1.45 }}>payload 是要交給 LINE API 的 JSON，不是給人看的作文。</div>
      <div style={{ marginTop: 20, display: 'grid', gap: 12, fontSize: 24 }}>
        <div><b>to</b>: userId / groupId / roomId</div>
        <div><b>messages</b>: 最多 5 則 message object</div>
        <div><b>text</b>: 這堂固定只用一則 text message</div>
      </div>
    </div>
    <CodeBlock code={payloadJson} label="line-alert-payload.json" />
  </div>
);

const MockSuccess = () => (
  <div style={{ background: '#181a1f', color: '#f4f1ed', borderRadius: 22, padding: 34, maxWidth: 1520, boxShadow: '0 24px 70px -36px rgba(0,0,0,.6)' }}>
    <div style={{ fontFamily: mono, color: C.orange, fontSize: 22, fontWeight: 850 }}>mock send success</div>
    <div style={{ marginTop: 20, fontSize: 46, fontWeight: 900 }}>沒有真的呼叫 LINE API</div>
    <pre style={{ margin: '26px 0 0', padding: 24, borderRadius: 16, background: '#101217', border: '1px solid #30343d', fontFamily: mono, fontSize: 25, lineHeight: 1.5, whiteSpace: 'pre-wrap' }}>{`payload written: line-lab/line-alert-payload.json
[mock] LINE_REAL_SEND is not 1, no request sent.
review required before --confirm`}</pre>
  </div>
);

const NetworkMock = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, maxWidth: 1540 }}>
    <div style={{ background: '#111827', color: '#d1d5db', borderRadius: 18, overflow: 'hidden', border: '1px solid #263244' }}>
      <div style={{ padding: '14px 20px', background: '#1f2937', fontFamily: mono, color: '#93c5fd' }}>Console</div>
      <pre style={{ margin: 0, padding: 24, fontFamily: mono, fontSize: 23, lineHeight: 1.55 }}>{`> node line-lab/sendLineAlert.js
payload written: line-lab/line-alert-payload.json
[mock] LINE_REAL_SEND is not 1, no request sent.

No errors`}</pre>
    </div>
    <div style={{ background: '#fff', border: `1px solid ${C.line}`, borderRadius: 18, overflow: 'hidden' }}>
      <div style={{ padding: '14px 20px', background: '#edf2ee', fontFamily: mono, color: C.muted }}>Network</div>
      <div style={{ padding: 24, display: 'grid', gap: 16, fontSize: 25 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 8 }}><b>mock mode</b><span>no request</span></div>
        <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 8 }}><b>real send</b><span>POST /v2/bot/message/push</span></div>
        <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 8 }}><b>header</b><span>Authorization: Bearer token</span></div>
        <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 8 }}><b>failure</b><span>print status code + response body</span></div>
      </div>
    </div>
  </div>
);

const slides: SlideSpec[] = [
  { kind: 'cover', eyebrow: 'U11 · 第 3 堂 / 共 4 堂 · 4 小時', title: '用 Codex 串接 LINE OA\n完成營運異常通知系統', lead: '這不是自由探索課。今天照固定劇本，用 AI coding agent 完成外部平台整合，並用人工審核、mock、ReAct、git diff 控制交付。' },
  { kind: 'flow', eyebrow: '今日主線', title: '固定流程，不自由設計', steps: ['report.json', 'Codex 產生\nLINE payload', '人類審核', 'mock 驗收', 'LINE 真送示範', 'ReAct 修錯', 'git diff\ncommit push'] },
  { kind: 'cards', eyebrow: '今日成果畫面', title: '最後要交付什麼', cards: [
    { title: '一份資料合約', body: 'data-lab/report.json 固定欄位、固定允許值。' },
    { title: '一支通知腳本', body: 'line-lab/sendLineAlert.js，只用 Node 內建能力。' },
    { title: '一份 payload', body: 'line-alert-payload.json 有 to 與 messages。' },
    { title: '一套驗收流程', body: 'mock、--confirm、ReAct、git diff/build/commit。' },
  ] },
  { kind: 'bullets', eyebrow: '企業場景', title: '為什麼企業開發常要接外部平台', bullets: ['系統不只在自己網站裡運作，還要通知 LINE、Slack、Email、CRM。', '外部平台有 token、payload、限制、錯誤碼，不能靠感覺串。', 'AI coding agent 的價值是幫你照規格做整合，不是自由發想功能。', '真正交付前，要能 mock 驗收、人工審核、看 diff。'] },

  { kind: 'section', sectionNo: '1', time: '0:00 - 0:20', title: '開場：企業場景與今日成果', lead: '先講清楚今天不是做 Dashboard，是做一個營運異常通知流程。' },
  { kind: 'cards', eyebrow: '段 1 · 課堂邊界', title: '今天的最高原則', cards: [
    { title: '固定劇本', body: '學生照老師步驟做，輸出要可預期。', color: C.orange },
    { title: '固定 prompt', body: '四段 prompt 原文複製，不自行改需求。', color: C.blue },
    { title: '固定 payload', body: '只做一則 text message，不做 Flex、不做選單。', color: C.amber },
    { title: '固定驗收', body: '照指令跑，不因 AI 回報成功就相信。', color: C.red },
  ] },
  { kind: 'review', eyebrow: '段 1 · 成果畫面', title: '通知送出前，先進人工審核區', lead: '這張就是今天 Human-in-the-loop 的位置：AI 產生內容，人決定能不能送。' },

  { kind: 'section', sectionNo: '2', time: '0:20 - 0:45', title: '認 report.json 與 LINE OA payload', lead: 'report.json 是程式可讀的資料合約；payload 是交給 LINE API 的固定格式。' },
  { kind: 'code', eyebrow: '段 2 · report.json', title: '這份資料合約今天固定使用', label: 'ai-project-foundation-kit/data-lab/report.json', code: `{
  "report_date": "2026-07-02",
  "risk_level": "high",
  "total_revenue": 128400,
  "anomaly_count": 5,
  "top_product": "耳掛咖啡",
  "top_channel": "LINE",
  "action_items": [
    "先人工確認第 8 列與第 17 列營收資料。",
    "暫停把異常列納入週報。"
  ]
}` },
  { kind: 'cards', eyebrow: '段 2 · 合約欄位', title: '每個欄位都會進通知內容', cards: [
    { title: 'risk_level', body: '只能是 low / medium / high。格式錯就阻擋。' },
    { title: 'total_revenue', body: '營收金額，通知中顯示為 NT$ 格式。' },
    { title: 'anomaly_count', body: '異常筆數，讓營運知道嚴重程度。' },
    { title: 'top_product / top_channel', body: '用來說明異常最相關的商品與通路。' },
    { title: 'action_items', body: '通知收件人下一步要做什麼。' },
  ] },
  { kind: 'payload', eyebrow: '段 2 · payload', title: 'LINE API 要的是 JSON payload，不是段落作文' },

  { kind: 'section', sectionNo: '3', time: '0:45 - 1:15', title: 'LINE Messaging API 基本觀念', lead: '只講今天會用到的：token、targetId、payload、限制。' },
  { kind: 'cards', eyebrow: '段 3 · 白話說明', title: 'LINE OA / Messaging API 是什麼', cards: [
    { title: 'LINE OA', body: '企業或組織的官方帳號。' },
    { title: 'Messaging API', body: '讓程式透過官方帳號發送訊息。' },
    { title: 'Push message', body: '主動把訊息送到 userId、groupId 或 roomId。' },
    { title: 'Text message', body: '今天固定只用 type: text，避免設計分歧。' },
  ] },
  { kind: 'cards', eyebrow: '段 3 · 官方設定路徑', title: '真的要送 LINE，先照官方流程設定 OA', cards: [
    { title: '1. Business ID', body: '登入 LINE Developers Console；未登入會進 LINE Business ID 登入頁。' },
    { title: '2. 建立 OA', body: '先建立 LINE Official Account，不能直接從 Developers Console 建 Messaging API channel。' },
    { title: '3. 啟用 Messaging API', body: '在 LINE Official Account Manager 啟用，選 provider 後才會產生 channel。' },
    { title: '4. 拿 token / targetId', body: 'Messaging API tab issue token；Basic settings 或 webhook 取得 userId。' },
  ] },
  { kind: 'code', eyebrow: '段 3 · 官方格式', title: 'push message 最小請求', label: 'LINE Messaging API', code: `POST https://api.line.me/v2/bot/message/push
Content-Type: application/json
Authorization: Bearer {channel access token}

{
  "to": "U4af4980629...",
  "messages": [
    { "type": "text", "text": "Hello, world" }
  ]
}` },
  { kind: 'bullets', eyebrow: '段 3 · 限制', title: 'targetId 不是 LINE ID，不能亂填', bullets: ['to 必須是 webhook 事件裡拿到的 userId / groupId / roomId。', '使用者通常要加 OA 好友；群組或聊天室要讓 OA 加入。', '使用者 7 天內曾私訊 OA，也可能可被 push。', '對方封鎖、刪帳、target 不存在時，可能 200 但收不到，或回 400/401/403/429。'] },
  { kind: 'bullets', eyebrow: '段 3 · token 安全', title: 'token 為什麼不能放前端', bullets: ['channel access token 代表你的 OA 發訊權限。', '放進前端 bundle 等於交給所有使用者看。', 'token 只能放伺服端或本機環境變數，不寫死在程式碼。', '.env 不能 commit；教材只 commit .env.example。'] },

  { kind: 'section', sectionNo: '4', time: '1:15 - 1:55', title: '用 Codex 建立通知腳本', lead: '學生貼固定 prompt，限制寫死：不新增套件、不改 package.json、不改前端、不重構。' },
  { kind: 'prompt', eyebrow: '段 4 · Prompt 1', title: 'Codex 建立初版', code: `請幫我建立 LINE OA 營運異常通知腳本。
讀取 data-lab/report.json，產生 LINE push message payload。
請建立 line-lab/sendLineAlert.js、line-lab/.env.example，執行後產生 line-lab/line-alert-payload.json。
限制：不新增套件、不改 package.json、不改前端、不重構、token 不可寫死。
預設 mock 模式，不真的發送。
只有 LINE_REAL_SEND=1 且加上 --confirm 時才可以呼叫 LINE API。
完成後請回報實際建立或修改的檔案。` },
  { kind: 'code', eyebrow: '段 4 · 固定檔案', title: 'Codex 只能建立這三個 LINE lab 檔案', label: 'allowed files', code: `line-lab/sendLineAlert.js
line-lab/.env.example
line-lab/line-alert-payload.json

# 已提供固定資料:
data-lab/report.json

# 不可修改:
package.json
web-lab/*
node_modules/*` },
  { kind: 'code', eyebrow: '段 4 · .env.example', title: '只 commit 範本，不 commit token', label: 'line-lab/.env.example', code: `LINE_CHANNEL_ACCESS_TOKEN=請填入你的 channel access token
LINE_TARGET_ID=請填入 userId 或 groupId
LINE_REAL_SEND=0` },

  { kind: 'section', sectionNo: '5', time: '1:55 - 2:20', title: 'mock 模式驗收', lead: '先證明 payload 正確，不碰真實 LINE。' },
  { kind: 'code', eyebrow: '段 5 · 驗收指令', title: '預設只 mock，不真的送', label: 'terminal', code: `cd ai-project-foundation-kit
node line-lab/sendLineAlert.js
cat line-lab/line-alert-payload.json` },
  { kind: 'mock', eyebrow: '段 5 · mock send success', title: '看到 success，也要確認它沒有真的送出' },
  { kind: 'bullets', eyebrow: '段 5 · payload 驗收', title: 'payload 必須符合四個條件', bullets: ['line-alert-payload.json 會產生。', '最外層有 to 與 messages。', 'messages 是陣列，裡面有一則 text message。', 'text 內包含 risk_level、total_revenue、anomaly_count、top_product、top_channel、action_items。'] },

  { kind: 'section', sectionNo: '6', time: '2:20 - 2:50', title: 'Human-in-the-loop 與 --confirm', lead: 'AI 產生通知，不代表可以送。人類審核是發送前的閘門。' },
  { kind: 'prompt', eyebrow: '段 6 · Prompt 2', title: 'Human-in-the-loop 檢查，不改檔', code: `請檢查目前 LINE 通知內容。
不要改檔。
請判斷這則通知是否適合送出，並列出：
1. 通知風險等級
2. 通知對象
3. 是否需要人工確認
4. 是否可以進入 --confirm 發送階段` },
  { kind: 'cards', eyebrow: '段 6 · --confirm', title: '--confirm 的意義', cards: [
    { title: '防止誤送', body: 'LINE_REAL_SEND=1 仍不夠，少了 --confirm 就阻擋。', color: C.orange },
    { title: '留下人類決策點', body: '通知內容和對象要先被人工審核。', color: C.blue },
    { title: 'mock 與真送分離', body: '課堂大多數驗收不需要真的發訊息。', color: C.amber },
  ] },
  { kind: 'code', eyebrow: '段 6 · 阻擋真送', title: '沒有 --confirm，不可真實發送', label: 'terminal', code: `LINE_REAL_SEND=1 node line-lab/sendLineAlert.js

# 預期:
# [blocked] LINE_REAL_SEND=1 but --confirm missing; no request sent.` },

  { kind: 'section', sectionNo: '7', time: '2:50 - 3:15', title: '真實 LINE OA 發送示範', lead: '學生沒有 OA 就看老師示範；完成標準仍以 mock 與 payload 驗收為主。' },
  { kind: 'code', eyebrow: '段 7 · 真送前置', title: '真送需要三個條件同時成立', label: 'terminal', code: `# 1. LINE_CHANNEL_ACCESS_TOKEN 已設定
# 2. LINE_TARGET_ID 已設定
# 3. LINE_REAL_SEND=1 且加上 --confirm

LINE_REAL_SEND=1 node line-lab/sendLineAlert.js --confirm` },
  { kind: 'network', eyebrow: '段 7 · Console / Network', title: '真送示範要看 Console 與 Network，不只看 LINE 手機' },
  { kind: 'bullets', eyebrow: '段 7 · 保底', title: '現場狀況不阻塞課堂', bullets: ['沒有 LINE OA：使用 mock 模式完成。', 'token 錯誤：只要求看 status code 與 response body。', 'targetId 不可用：由老師示範真實發送。', '網路不穩：payload 產生與 mock 驗收就是完成標準。'] },

  { kind: 'section', sectionNo: '8', time: '3:15 - 3:40', title: 'ReAct 修指定錯誤', lead: '只修一個固定錯誤：risk_level 變成中文「嚴重」。根因是資料合約違反，修法是在送出前阻擋。' },
  { kind: 'prompt', eyebrow: '段 8 · Prompt 3', title: 'ReAct debug：先分析，不改檔', code: `你現在扮演 debugger。
目前問題：report.json 的 risk_level 變成中文「嚴重」，但資料合約規定只能是 low / medium / high。
請先不要改檔。
請用 ReAct 格式分析：
Reason：可能原因
Act：要看哪個檔案或跑哪個指令
Observe：預期看到什麼證據
Verify：修完後如何驗收
最後提出最小修改方案。` },
  { kind: 'prompt', eyebrow: '段 8 · Prompt 4', title: '放行修正：只改必要檔案', code: `同意你的最小修改方案。
請只修改必要檔案。
不要新增套件。
不要改 package.json。
不要重構。
修正目標：如果 risk_level 不是 low / medium / high，請在送出前阻擋，並提示資料合約錯誤。` },
  { kind: 'flow', eyebrow: '段 8 · ReAct', title: '除錯不是瞎改，是固定節奏', steps: ['Reason\n合約可能被中文化', 'Act\n看 report.json\n跑 node', 'Observe\nrisk_level=嚴重', 'Verify\n阻擋並印錯誤'] },

  { kind: 'section', sectionNo: '9', time: '3:40 - 4:00', title: 'git diff / build / commit / push 收尾', lead: 'AI 做完不等於交付。diff、build、commit 都要由人類驗收。' },
  { kind: 'terminal', eyebrow: '段 9 · 驗收指令', title: '最後照這組指令收尾', code: `node line-lab/sendLineAlert.js
cat line-lab/line-alert-payload.json
LINE_REAL_SEND=1 node line-lab/sendLineAlert.js
LINE_REAL_SEND=1 node line-lab/sendLineAlert.js --confirm
git status
git diff
git diff -- package.json
git add .
git commit -m "新增 LINE OA 營運異常通知流程"
git push` },
  { kind: 'bullets', eyebrow: '段 9 · 驗收標準', title: '看到這些才算完成', bullets: ['mock 模式不會真的發送 LINE。', 'payload 內有 to 與 messages，且 messages 內有一則 text message。', '沒有 --confirm 時不可真實發送。', 'risk_level 格式錯時要阻擋。', 'package.json 沒有被改，.env 沒有被 commit。', 'git diff 只出現本堂允許修改的檔案。'] },
  { kind: 'cards', eyebrow: '收束', title: '今天學到的是可控交付，不是 AI 表演', cards: [
    { title: 'Codex 是執行工具', body: '需求、限制、驗收由人固定。' },
    { title: '外部平台要先 mock', body: 'payload 正確，再談真實發送。' },
    { title: '通知要 HITL', body: '營運訊息送出前必須有人類審核。' },
    { title: '交付看 diff', body: 'build 通過、diff 乾淨，才 commit/push。' },
  ] },
];

const DeckPage = ({ slide }: { slide: SlideSpec }) => {
  if (slide.kind === 'cover') {
    return (
      <div style={{ ...fill, background: 'radial-gradient(circle at 78% 20%, #ffe0c8 0, transparent 28%), linear-gradient(135deg, #f5f6f8 0%, #fbf3ee 48%, #f6f0df 100%)' }}>
        <div style={pad}>
          {slide.eyebrow ? <Eyebrow>{slide.eyebrow}</Eyebrow> : null}
          <div className="c3-rise" style={{ marginTop: 34 }}>
            <Title size={92}>{slide.title}</Title>
            {slide.lead ? <div style={{ marginTop: 28 }}><Lead>{slide.lead}</Lead></div> : null}
          </div>
        </div>
        <div style={{ position: 'absolute', right: 108, bottom: 86, fontFamily: mono, color: C.muted, fontSize: 22 }}>Codex · LINE OA · Human Review · ReAct · Git</div>
        <Foot label="U11 · C3" />
      </div>
    );
  }
  if (slide.kind === 'section') return <SectionSlide slide={slide} />;
  return (
    <Shell slide={slide}>
      {slide.kind === 'bullets' && slide.bullets ? <Bullets items={slide.bullets} /> : null}
      {slide.kind === 'cards' && slide.cards ? <Cards cards={slide.cards} /> : null}
      {slide.kind === 'code' && slide.code ? <CodeBlock code={slide.code} label={slide.label} /> : null}
      {slide.kind === 'prompt' && slide.code ? <PromptCard prompt={slide.code} label={slide.label} /> : null}
      {slide.kind === 'flow' && slide.steps ? <Flow steps={slide.steps} /> : null}
      {slide.kind === 'review' ? <ReviewMock /> : null}
      {slide.kind === 'payload' ? <PayloadMock /> : null}
      {slide.kind === 'mock' ? <MockSuccess /> : null}
      {slide.kind === 'network' ? <NetworkMock /> : null}
      {slide.kind === 'terminal' && slide.code ? <CodeBlock code={slide.code} label={slide.label ?? 'terminal'} /> : null}
    </Shell>
  );
};

const pages = slides.map((slide) => (() => <DeckPage slide={slide} />) as Page);

export const meta: SlideMeta = {
  title: 'U11-C3: LINE OA 營運異常通知系統',
  createdAt: '2026-07-02T00:00:00.000Z',
};

export const notes: (string | undefined)[] = slides.map((slide, i) => `${i + 1}. ${slide.title.replace(/\n/g, ' ')}`);

export default pages satisfies Page[];
