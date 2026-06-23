import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';
import brandShot from './assets/brand.png';

export const design: DesignSystem = {
  palette: { bg: '#f5f6f8', text: '#181a1f', accent: '#e2570d' },
  fonts: { display: '"PingFang TC", "Noto Sans TC", "Microsoft JhengHei", system-ui, sans-serif', body: '"PingFang TC", "Noto Sans TC", "Microsoft JhengHei", system-ui, sans-serif' },
  typeScale: { hero: 132, body: 34 }, radius: 16,
};
const C = { bg: design.palette.bg, ink: design.palette.text, orange: design.palette.accent, muted: '#5a6270', faint: '#9aa1ad', line: '#e2e5ea', card: '#ffffff' };
const OK = '#0e7a52'; const RED = '#c0392b';
const mono = '"JetBrains Mono", "SF Mono", ui-monospace, monospace';
const css = `@keyframes ts-up{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.ts-rise>*{animation:ts-up .55s cubic-bezier(.16,1,.3,1) both}.ts-rise>*:nth-child(2){animation-delay:.05s}.ts-rise>*:nth-child(3){animation-delay:.10s}.ts-rise>*:nth-child(4){animation-delay:.15s}
@media (prefers-reduced-motion:reduce){.ts-rise>*{animation:none!important}}`;
if (typeof document !== 'undefined' && !document.getElementById('ts-u13c2')) { const el = document.createElement('style'); el.id = 'ts-u13c2'; el.textContent = css; document.head.appendChild(el); }
const fill = { width: '100%', height: '100%', background: C.bg, color: C.ink, fontFamily: 'var(--osd-font-body)', position: 'relative' as const, overflow: 'hidden', display: 'flex' as const, flexDirection: 'column' as const, justifyContent: 'center' as const };
const pad = { padding: '0 110px 40px', width: '100%' as const };
const Eyebrow = ({ children }: { children: any }) => <span style={{ fontFamily: mono, fontSize: 22, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.orange, fontWeight: 700 }}>{children}</span>;
const Foot = ({ label }: { label: string }) => { const { current, total } = useSlidePageNumber(); return <div style={{ position: 'absolute', left: 110, right: 110, bottom: 44, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `1px solid ${C.line}` }}><span style={{ fontSize: 19, color: C.faint, fontFamily: mono }}>{label}</span><span style={{ fontSize: 19, color: C.faint, fontFamily: mono }}>{String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}</span></div>; };
const Title = ({ children, size = 60 }: { children: any; size?: number }) => <div style={{ fontSize: size, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.14 }}>{children}</div>;
const Lead = ({ children }: { children: any }) => <div style={{ fontSize: 33, color: C.muted, lineHeight: 1.6, maxWidth: 1480 }}>{children}</div>;
const B = ({ children }: { children: any }) => <strong style={{ color: C.ink }}>{children}</strong>;
const O = ({ children }: { children: any }) => <strong style={{ color: C.orange }}>{children}</strong>;
const Think = ({ q, a }: { q: any; a: any }) => (
  <div style={{ background: '#eef4ff', border: '1px solid #cfe0fb', borderRadius: 16, padding: '22px 30px', maxWidth: 1480 }}><div style={{ fontFamily: mono, fontSize: 21, color: '#2f5fb3', fontWeight: 700, marginBottom: 8 }}>你可能會想說 …</div><div style={{ fontSize: 30, color: '#26405f', lineHeight: 1.5 }}>{q}</div><div style={{ fontSize: 30, color: C.ink, lineHeight: 1.55, marginTop: 12 }}><O>其實</O> {a}</div></div>
);
const Analogy = ({ children, icon = '📦' }: { children: any; icon?: string }) => (
  <div style={{ background: '#fbf3ee', border: '1px solid #f3d6c4', borderRadius: 16, padding: '22px 30px', maxWidth: 1480 }}><div style={{ fontFamily: mono, fontSize: 21, color: C.orange, fontWeight: 700, marginBottom: 8 }}>打個比方 {icon}</div><div style={{ fontSize: 31, color: C.ink, lineHeight: 1.55 }}>{children}</div></div>
);
const Harvest = ({ children }: { children: any }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16, borderLeft: `6px solid ${C.orange}`, background: '#fff', padding: '16px 26px', borderRadius: '0 12px 12px 0', maxWidth: 1480, boxShadow: '0 6px 24px -16px rgba(30,30,40,.4)' }}><span style={{ fontFamily: mono, fontSize: 18, color: C.orange, fontWeight: 700, whiteSpace: 'nowrap' }}>一句話帶走</span><span style={{ fontSize: 30, fontWeight: 700, lineHeight: 1.4 }}>{children}</span></div>
);
const Atom = ({ n, act, see }: { n: number; act: any; see: any }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}><span style={{ flexShrink: 0, width: 42, height: 42, borderRadius: '50%', background: C.ink, color: '#fff', display: 'grid', placeContent: 'center', fontFamily: mono, fontWeight: 700, fontSize: 22 }}>{n}</span><div><div style={{ fontSize: 30, lineHeight: 1.42 }}>{act}</div><div style={{ fontSize: 23, color: OK, marginTop: 4 }}>✓ 會看到:{see}</div></div></div>
);
const Key = ({ children }: { children: any }) => <span style={{ fontFamily: mono, fontSize: 23, background: '#eceff3', border: '1px solid #cfd5dd', borderRadius: 6, padding: '2px 10px', margin: '0 3px', color: C.ink }}>{children}</span>;
const CaseTag = ({ kind }: { kind: '手動' | 'AI' | '展示' }) => { const bg = kind === 'AI' ? C.orange : kind === '手動' ? '#2a2d35' : OK; return <span style={{ fontFamily: mono, fontSize: 19, color: '#fff', background: bg, borderRadius: 999, padding: '5px 15px' }}>{kind}帶做</span>; };
const CaseHead = ({ no, time, kind, title, size = 46 }: { no: string; time: string; kind: '手動' | 'AI' | '展示'; title: string; size?: number }) => (
  <div><div style={{ display: 'flex', alignItems: 'center', gap: 16 }}><Eyebrow>{no}</Eyebrow><span style={{ fontFamily: mono, fontSize: 19, color: C.muted }}>約 {time}</span><CaseTag kind={kind} /></div><div style={{ fontSize: size, fontWeight: 800, letterSpacing: '-0.02em', marginTop: 14, lineHeight: 1.16 }}>{title}</div></div>
);
const PromptCard = ({ children, size = 25 }: { children: any; size?: number }) => (
  <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, overflow: 'hidden', boxShadow: '0 12px 40px -24px rgba(30,30,40,0.35)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 22px', background: '#fbf3ee', borderBottom: `1px solid ${C.line}` }}><span style={{ width: 12, height: 12, borderRadius: '50%', background: C.orange }} /><span style={{ fontFamily: mono, fontSize: 19, color: C.orange, fontWeight: 700, letterSpacing: '0.08em' }}>複製這段,貼到對話框</span></div>
    <pre style={{ margin: 0, padding: '20px 28px', fontFamily: mono, fontSize: size, lineHeight: 1.5, color: C.ink, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{children}</pre>
  </div>
);
const SuccessRow = ({ children }: { children: any }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16, background: '#eaf6f0', border: '1px solid #bfe6d4', borderRadius: 14, padding: '15px 24px', maxWidth: 1480 }}><span style={{ flexShrink: 0, width: 36, height: 36, borderRadius: '50%', background: OK, color: '#fff', display: 'grid', placeContent: 'center', fontSize: 22, fontWeight: 800 }}>✓</span><span style={{ fontSize: 29, color: '#0c5b3c', fontWeight: 600 }}>{children}</span></div>
);
const Pitfall = ({ items }: { items: [string, string][] }) => (
  <div style={{ background: '#fff7f4', border: `1px solid #f3d0c2`, borderRadius: 16, padding: '24px 32px' }}><div style={{ fontFamily: mono, fontSize: 21, color: RED, fontWeight: 700, marginBottom: 14 }}>卡住了?先看這裡</div><div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>{items.map(([q, a], i) => <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'baseline' }}><span style={{ flexShrink: 0, fontSize: 27, color: RED, fontWeight: 800 }}>?</span><div style={{ fontSize: 27, lineHeight: 1.4 }}><strong>{q}</strong>　<span style={{ color: C.muted }}>{a}</span></div></div>)}</div></div>
);
const Section = ({ no, title, time, sub }: { no: string; title: string; time: string; sub: string }) => (
  <div style={{ ...fill, background: C.ink, color: '#fff' }}><div style={{ ...pad }}><span style={{ fontFamily: mono, fontSize: 26, color: C.orange, letterSpacing: '0.2em' }}>段 {no} ・ {time}</span><div style={{ fontSize: 88, fontWeight: 900, marginTop: 22, letterSpacing: '-0.02em', lineHeight: 1.08 }}>{title}</div><div style={{ fontSize: 35, color: 'rgba(255,255,255,0.72)', marginTop: 24, maxWidth: 1300, lineHeight: 1.5 }}>{sub}</div></div></div>
);
const BreakSlide = () => (
  <div style={{ ...fill, background: '#0e7a52' }}><div style={{ ...pad, color: '#fff' }}><span style={{ fontFamily: mono, fontSize: 26, letterSpacing: '0.2em', opacity: 0.85 }}>BREAK</span><div style={{ fontSize: 118, fontWeight: 900, marginTop: 16 }}>休息 10 分鐘</div><div style={{ fontSize: 35, opacity: 0.9, marginTop: 22 }}>回來看一個更快、免註冊的上線方式。</div></div></div>
);
const Cmd = ({ children }: { children: any }) => (
  <div style={{ background: '#0f1117', borderRadius: 14, padding: '20px 28px', fontFamily: mono, fontSize: 30, color: '#cdd3df', maxWidth: 1400 }}><span style={{ color: '#7fd4a8' }}>$</span> {children}</div>
);
const FileCard = ({ title, children }: { title: string; children: any }) => (
  <div style={{ background: '#0f1117', borderRadius: 16, overflow: 'hidden', border: '1px solid #232733', maxWidth: 1480 }}>
    <div style={{ padding: '11px 20px', background: '#161a22', borderBottom: '1px solid #232733', fontFamily: mono, fontSize: 18, color: '#8b93a3' }}>{title}</div>
    <pre style={{ margin: 0, padding: '18px 26px', fontFamily: mono, fontSize: 23, lineHeight: 1.6, color: '#cdd3df', whiteSpace: 'pre-wrap' }}>{children}</pre>
  </div>
);
const RealShot = ({ img, url, eyebrow, title, caption }: { img: string; url: string; eyebrow: string; title: string; caption: string }) => (
  <div style={fill}><div style={{ ...pad }}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}><Eyebrow>{eyebrow}</Eyebrow><span style={{ fontSize: 22, color: OK, fontFamily: mono, fontWeight: 700 }}>● 這是真的,不是示意圖</span></div>
    <Title size={44}>{title}</Title>
    <div style={{ marginTop: 18, background: '#fff', border: `1px solid ${C.line}`, borderRadius: 14, overflow: 'hidden', boxShadow: '0 18px 50px -28px rgba(30,30,40,0.4)', maxWidth: 1540 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 18px', background: '#f0f2f5', borderBottom: `1px solid ${C.line}` }}><div style={{ display: 'flex', gap: 7 }}>{['#ff5f57', '#febc2e', '#28c840'].map((c, i) => <span key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />)}</div><div style={{ flex: 1, background: '#fff', border: `1px solid ${C.line}`, borderRadius: 7, padding: '5px 14px', fontFamily: mono, fontSize: 16, color: C.faint }}>{url}</div></div>
      <img src={img} alt={title} style={{ display: 'block', width: '100%', maxHeight: 520, objectFit: 'cover', objectPosition: 'top' }} />
    </div>
    <div style={{ fontSize: 25, color: C.muted, marginTop: 14 }}>{caption}</div>
  </div><Foot label="U13 · 課2 · 真實成果" /></div>
);

// ── 開場 ──
const Cover: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>U13 · 第 2 堂 / 共 2 堂 · 4 小時 · M13 完課</Eyebrow>
    <div className="ts-rise" style={{ marginTop: 30 }}><Title size={104}>讓它公開上線</Title><div style={{ marginTop: 22 }}><Lead>今天你會拿到一個<B>真的網址</B>,任何人都能打開。我們帶你<O>兩種</O>上線方式。</Lead></div></div>
  </div><Foot label="U13 · 課2" /></div>
);
const Recall: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>先回顧上一堂</Eyebrow><Title size={50}>你的網站,目前只有你看得到</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 28, maxWidth: 1480 }}>
      {['你 fork 了範本、開出環境。', '用 AI 換了標題、顏色、第一篇。', '在本機(自己畫面)預覽看到了。'].map((t, i) => (
        <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '15px 24px' }}><span style={{ width: 34, height: 34, borderRadius: '50%', background: OK, color: '#fff', display: 'grid', placeContent: 'center', fontSize: 20, fontWeight: 800 }}>✓</span><span style={{ fontSize: 28 }}>{t}</span></div>
      ))}
    </div>
    <div style={{ marginTop: 22 }}><Lead>就差最後一步:把「<B>只有你看得到</B>」變成「<O>全世界都能打開</O>」。</Lead></div>
  </div><Foot label="U13 · 課2 · 回顧" /></div>
);
const Outcome: Page = () => (
  <RealShot img={brandShot} url="https://你的帳號.github.io/你的網站/" eyebrow="下課時你會有"
    title="一個任何人都能打開的公開網址" caption="這是真的、已經上線的範例網站。下課時,你會有一個自己的、能傳給別人、能放履歷的網址。" />
);
const Why: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>先講為什麼帶兩種</Eyebrow><Title size={52}>先自己手動上線一次,你才懂它在幹嘛</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 30 }}>
      <Lead>第一種我們手動點一次,讓你看清楚流程;第二種讓 AI 用「自動上線」幫你做好。<B>自動那種更完整,以後改一改就自己上線。</B></Lead>
      <Harvest>手動點一次是為了懂它;之後讓 AI + 自動上線,幫你每次自己更新。</Harvest>
    </div>
  </div><Foot label="U13 · 課2 · 為什麼" /></div>
);
const Roadmap: Page = () => {
  const items = [['案例 1', '手動推上 GitHub', '0:15', '手動'], ['案例 2', '手動開 Pages', '0:55', '手動'], ['案例 3', 'AI 設自動上線', '1:50', 'AI'], ['案例 4', '選配:免註冊秒上線', '3:10', 'AI']];
  return (
    <div style={fill}><div style={pad}><Eyebrow>今天的路線 · 四個案例 + 完課</Eyebrow><Title>兩種上線方式,都帶你做</Title>
      <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, marginTop: 42 }}>
        {items.map(([a, b, t, k], i) => <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '22px 20px' }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontFamily: mono, fontSize: 20, color: C.orange, fontWeight: 700 }}>{a}</span><span style={{ fontFamily: mono, fontSize: 17, color: C.faint }}>{t}</span></div><div style={{ fontSize: 28, fontWeight: 800, marginTop: 10, lineHeight: 1.25 }}>{b}</div><div style={{ marginTop: 12 }}><CaseTag kind={k as any} /></div></div>)}
      </div></div><Foot label="U13 · 課2 · 路線" /></div>
  );
};
// ── 段1 上線前 ──
const Sec1: Page = () => <Section no="1" title="上線前,先懂兩件事" time="0:15 - 0:55" sub="一個「把檔案送上網」的動作,還有一個「公開前的安全檢查」。" />;
const C1Concept: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>概念 · 物流比喻</Eyebrow><Title size={50}>commit、push 是什麼?</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 26, maxWidth: 1480 }}>
      <Analogy icon="📦">把你的檔案想成<B>要寄出的包裹</B>:<O>commit</O> = 打包裝箱、貼上標籤(寫一句這箱是什麼);<O>push</O> = 拿去寄出,送到 GitHub 這個網路倉庫。</Analogy>
      <Harvest>就這樣而已:打包、寄出。等下 AI 也會幫你做,你先懂這兩個字。</Harvest>
    </div>
  </div><Foot label="U13 · 課2 · 概念" /></div>
);
const C1CommitPush: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>概念 · 兩個動作</Eyebrow><Title size={50}>分開記:一個打包、一個寄出</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 18, marginTop: 30 }}>
      <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '26px 28px' }}><div style={{ fontFamily: mono, fontSize: 30, color: C.orange, fontWeight: 800 }}>commit</div><div style={{ fontSize: 30, fontWeight: 700, marginTop: 10 }}>打包、貼標籤</div><div style={{ fontSize: 24, color: C.muted, marginTop: 8 }}>寫一句「這次改了什麼」。</div></div>
      <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '26px 28px' }}><div style={{ fontFamily: mono, fontSize: 30, color: C.orange, fontWeight: 800 }}>push</div><div style={{ fontSize: 30, fontWeight: 700, marginTop: 10 }}>寄到 GitHub</div><div style={{ fontSize: 24, color: C.muted, marginTop: 8 }}>把打包好的送上網路倉庫。</div></div>
    </div>
    <div style={{ marginTop: 22 }}><Lead>順序固定:<B>先 commit(打包)、再 push(寄出)</B>。等下手動做一次你就記住了。</Lead></div>
  </div><Foot label="U13 · 課2 · 概念" /></div>
);
const C1Check: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>公開前 · 安全檢查</Eyebrow><Title size={48}>上線 = 全世界看得到,先檢查</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 26, maxWidth: 1480 }}>
      {['不要放電話、住址這些個資。', '不要放沒授權的客戶資料、公司內部截圖。', '課堂先用範例內容,正式求職內容回家再整理。'].map((t, i) => (
        <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'center', background: '#fff7f4', border: '1px solid #f3d0c2', borderRadius: 14, padding: '15px 24px' }}><span style={{ flexShrink: 0, width: 34, height: 34, borderRadius: '50%', background: RED, color: '#fff', display: 'grid', placeContent: 'center', fontSize: 21, fontWeight: 800 }}>!</span><span style={{ fontSize: 29 }}>{t}</span></div>
      ))}
    </div>
  </div><Foot label="U13 · 課2 · 公開前檢查" /></div>
);
const C1CheckWhy: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>公開前 · 為什麼這麼謹慎</Eyebrow><Title size={50}>網路上的東西,刪了也可能被存過</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Think q={<>「放錯了,刪掉不就好?」</>} a={<>不一定來得及。東西一公開,<B>可能已經被別人存下來、被搜尋引擎記住</B>。所以寧可<O>上線前多看一眼</O>。</>} />
      <Harvest>公開是「送出去」,不是「貼在自己房間」。送出前先檢查。</Harvest>
    </div>
  </div><Foot label="U13 · 課2 · 公開前檢查" /></div>
);
// ── 段2 手動 ──
const Sec2: Page = () => <Section no="2" title="方法一:自己手動上線一次" time="0:55 - 1:50" sub="親手點一次。你會清楚看到:檔案怎麼上去、Pages 怎麼開、網址怎麼來。" />;
const C2Head: Page = () => (
  <div style={fill}><div style={pad}><CaseHead no="1" time="0:55 - 1:50" kind="手動" title="手動:推上 GitHub、開 Pages、拿到網址" />
    <div className="ts-rise" style={{ marginTop: 34 }}><Lead>這是最經典的「先自己做一次」。你會親手把網站推上去、在設定裡打開 Pages,拿到第一個公開網址。懂了流程,之後 AI 幫你做你才看得懂它在幹嘛。</Lead></div>
  </div><Foot label="U13 · 課2 · 手動" /></div>
);
const C2Push: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>方法一 · 步驟 A · 推上 GitHub</Eyebrow><Title size={44}>打包、寄出</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 13, marginTop: 22, maxWidth: 1520 }}>
      <Atom n={1} act={<>看左邊那排圖示,找到<B>「原始檔控制」</B>(像樹枝分岔的圖示),點它。</>} see="上方出現一個訊息輸入框 + 一堆改過的檔案。" />
      <Atom n={2} act={<>在訊息框打一句話,例如 <Key>第一次上線</Key>,按上面的 <Key>✓ Commit</Key>(打包)。</>} see="若問是否 stage all,按 Yes。" />
      <Atom n={3} act={<>再按 <Key>Sync Changes / 同步變更</Key>(寄出)。第一次可能要你登入授權。</>} see="檔案被送上 GitHub。" />
    </div>
  </div><Foot label="U13 · 課2 · 手動" /></div>
);
const C2PushVerify: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>方法一 · 確認推成功</Eyebrow><Title size={48}>回 GitHub 網頁看一眼</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 28 }}>
      <Lead>回到你的 repo 網頁、重新整理。如果<B>檔案都在上面、右邊有「剛剛」的時間</B>,就代表寄到了。</Lead>
      <SuccessRow>GitHub 網頁看到你的檔案、時間是剛剛 = 推成功。</SuccessRow>
    </div>
  </div><Foot label="U13 · 課2 · 手動" /></div>
);
const C2Pages: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>方法一 · 步驟 B · 開 Pages</Eyebrow><Title size={44}>在設定裡打開「公開」</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 13, marginTop: 22, maxWidth: 1520 }}>
      <Atom n={1} act={<>到你的 repo 網頁,點上面那排的 <Key>Settings</Key>(設定)。</>} see="進入設定頁。" />
      <Atom n={2} act={<>左邊清單找到 <Key>Pages</Key>,點它;來源(Source)選你的<B>分支</B>,按 <Key>Save</Key>。</>} see="出現「網站正在建置」的提示。" />
    </div>
  </div><Foot label="U13 · 課2 · 手動" /></div>
);
const C2PagesWait: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>方法一 · 步驟 C · 等網址出現</Eyebrow><Title size={48}>等一兩分鐘,網址會冒出來</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 26, maxWidth: 1520 }}>
      <Atom n={1} act={<><B>等一兩分鐘</B>,重新整理那一頁。</>} see="上面出現一個 https://… 的公開網址。" />
      <Atom n={2} act={<>點那個網址打開看看。</>} see="你的網站出現,而且是公開的。" />
    </div>
    <div style={{ marginTop: 18 }}><Think q={<>「按了 Save 但沒看到網址?」</>} a={<>它<B>還在建置</B>,等一下再重新整理。第一次比較慢,正常。</>} /></div>
  </div><Foot label="U13 · 課2 · 手動" /></div>
);
const C2ReadUrl: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 720px', gap: 50, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}><div><Eyebrow>方法一 · 看懂這個網址</Eyebrow><Title size={44}>網址裡有你的帳號</Title></div><Lead>這個網址不是隨機的,它就是<B>「你的帳號 + 你的專案名」</B>組起來的。所以一看就知道是你的。</Lead></div>
    <div className="ts-rise"><FileCard title="你的公開網址">{`https://你的帳號.github.io/你的專案/
        └──┬──┘        └──┬──┘
        你的帳號          專案名`}</FileCard></div>
  </div><Foot label="U13 · 課2 · 手動" /></div>
);
const C2See: Page = () => (
  <RealShot img={brandShot} url="https://你的帳號.github.io/你的網站/" eyebrow="方法一 · 你會看到"
    title="一個別人也打得開的公開網站" caption="把這個網址傳給旁邊同學,他也打得開：這就代表你的網站真的上線了,不再只有你看得到。" />
);
const C2Why: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>方法一 · 這一步的意義</Eyebrow><Title size={50}>你剛剛走完「上線」的全流程</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 28 }}>
      <Lead>打包 → 寄出 → 開公開 → 拿網址。這四步,就是任何網站上線都會做的事。你親手做過一次,<B>之後就看得懂 AI 在幫你做什麼</B>。</Lead>
      <Harvest>懂了手動,自動化才不是黑箱。</Harvest>
    </div>
  </div><Foot label="U13 · 課2 · 手動" /></div>
);
const C2Pit: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>方法一 · 卡住了?</Eyebrow><Title size={48}>兩個常見狀況</Title>
    <div className="ts-rise" style={{ marginTop: 26, maxWidth: 1500 }}><Pitfall items={[['網址點開是 404、找不到:', '剛開的話再等一兩分鐘;或確認 Pages 來源分支選對了。'], ['樣式跑掉、變很醜:', '通常是「路徑」設定要調,這個下一段讓 AI 幫你處理最快。']]} /></div>
  </div><Foot label="U13 · 課2 · 手動" /></div>
);
// ── 段3 自動 ──
const Sec3: Page = () => <Section no="3" title="方法二:讓 AI 設好「自動上線」" time="1:50 - 3:00" sub="手動懂了。現在讓 AI 設定 GitHub Actions:以後你一改、push,它就自己上線。" />;
const C3Head: Page = () => (
  <div style={fill}><div style={pad}><CaseHead no="3" time="1:50 - 3:00" kind="AI" title="AI 設自動上線(GitHub Actions),更完整" />
    <div className="ts-rise" style={{ marginTop: 32 }}><Lead>剛剛你手動開了 Pages。現在請 AI 幫你設「自動上線」:以後你改完一 push,它就<B>自己重新上線</B>,還會順手把樣式路徑修對。</Lead></div>
  </div><Foot label="U13 · 課2 · 案例3" /></div>
);
const C3Concept: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 比喻</Eyebrow><Title size={48}>自動上線,就是設好「定期取件」</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Analogy icon="🚚">手動是<B>每次都自己跑一趟郵局</B>;自動上線是<O>跟宅配約好定期取件</O>:你把包裹放門口(push),它自己來收、自己寄、自己上架。</Analogy>
      <Harvest>設定一次,以後改完 push,網站自己更新。</Harvest>
    </div>
  </div><Foot label="U13 · 課2 · 案例3" /></div>
);
const C3Prompt: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · Prompt 卡</Eyebrow><Title size={46}>貼這段,設好自動上線</Title>
    <div style={{ marginTop: 18 }}><PromptCard size={25}>{`幫我設定 GitHub Actions,讓我每次 push 之後,
網站就自動重新建置並上線到 GitHub Pages。
順便把網址路徑(base)設對,確認樣式不會跑掉。`}</PromptCard></div>
    <div style={{ marginTop: 16 }}><Atom n={1} act={<><B>複製 → 貼到對話框 → <Key>Enter</Key></B>。之後再 push 一次。</>} see="它加一個設定檔;GitHub 上 Actions 出現綠色勾勾。" /></div>
  </div><Foot label="U13 · 課2 · 案例3" /></div>
);
const C3Run: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · push 之後去看 Actions</Eyebrow><Title size={48}>綠色勾勾 = 自己上線成功</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 26, maxWidth: 1520 }}>
      <Atom n={1} act={<>到 repo 網頁,點上面那排的 <Key>Actions</Key> 分頁。</>} see="看到一筆筆「執行紀錄」。" />
      <Atom n={2} act={<>看最上面那筆,等它從<B>轉圈圈</B>變成<B>綠色打勾</B>。</>} see="綠勾 = 這次自動上線成功了。" />
    </div>
    <div style={{ marginTop: 18 }}><Think q={<>「變紅色叉叉怎麼辦?」</>} a={<>點進去,把<B>紅字那段</B>複製貼給 AI,它會告訴你怎麼修。</>} /></div>
  </div><Foot label="U13 · 課2 · 案例3" /></div>
);
const C3WhatActions: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 720px', gap: 50, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}><div><Eyebrow>案例 3 · Actions 長怎樣</Eyebrow><Title size={44}>它就是一排「執行紀錄」</Title></div><Lead>每 push 一次,就多一筆紀錄。綠勾代表那次上線成功,紅叉代表有錯。你只要看最上面那筆。</Lead></div>
    <div className="ts-rise"><FileCard title="Actions 分頁">{`✓  deploy   第三次上線   剛剛
✓  deploy   改顏色       2 分鐘前
✓  deploy   第一次上線   1 小時前`}</FileCard></div>
  </div><Foot label="U13 · 課2 · 案例3" /></div>
);
const C3WhyDeep: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 為什麼這種更完整</Eyebrow><Title size={48}>手動 vs 自動,差在哪</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 26 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 18 }}>
        {[['手動(方法一)', '你懂了流程。但每次更新都要自己再點一輪。'], ['自動 · Actions(方法二)', '設定一次,以後改完 push 就自己上線。這才是真正在用的方式。']].map(([a, b], i) => (
          <div key={i} style={{ background: C.card, border: `2px solid ${i ? C.orange : C.line}`, borderRadius: 16, padding: '24px 26px' }}><div style={{ fontSize: 32, fontWeight: 800, color: i ? C.orange : C.ink }}>{a}</div><div style={{ fontSize: 26, color: C.muted, marginTop: 12, lineHeight: 1.45 }}>{b}</div></div>
        ))}
      </div>
      <Harvest>先懂手動,再讓它自動。這就是這門課一直在做的事。</Harvest>
    </div>
  </div><Foot label="U13 · 課2 · 案例3" /></div>
);
const C3Real: Page = () => (
  <RealShot img={brandShot} url="https://stanley-1013.github.io/chainsea-leacture/" eyebrow="案例 3 · 真實成果"
    title="這是用「自動上線」真的上線的網站" caption="這個範例就是用 GitHub Actions 自動部署的。改一改、push,它自己重新上線。你今天做出來的,就是這種。" />
);
const Break1: Page = () => <BreakSlide />;
// ── 段4 Cloudflare ──
const Sec4: Page = () => <Section no="4" title="選配:免註冊,一行就上線" time="3:10 - 3:40" sub="想讓學員體驗「最快上線」?有個新方法,連帳號都不用先辦。" />;
const C4Why: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段4 · 為什麼還教這個</Eyebrow><Title size={48}>有時你只想「先給人看一眼」</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Lead>有時候你只是想<B>臨時給客戶、朋友看個草稿</B>,不想為這個先去辦帳號、設一堆東西。這時候有個更快的方法。</Lead>
      <Harvest>正式長期用 GitHub Pages;臨時給人看一眼,用這個更快。</Harvest>
    </div>
  </div><Foot label="U13 · 課2 · 段4" /></div>
);
const C4Concept: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段4 · Cloudflare 臨時帳號</Eyebrow><Title size={48}>免註冊,網址先活 60 分鐘</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Lead>Cloudflare 的臨時帳號:<B>不用先辦帳號</B>,一行指令就上線,給你一個能活 60 分鐘的網址;喜歡再「認領」變成你正式的。</Lead>
      <Analogy icon="🎟">像<B>遊樂園的一日券</B>:先讓你進去玩,玩得開心再決定要不要辦年票。</Analogy>
    </div>
  </div><Foot label="U13 · 課2 · 段4" /></div>
);
const C4: Page = () => (
  <div style={fill}><div style={pad}><CaseHead no="4" time="3:10 - 3:40" kind="AI" title="一行指令,秒上線" />
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 26 }}>
      <Lead>請 AI 幫你用這個方式,或自己在終端機打:</Lead>
      <Cmd>wrangler deploy --temporary</Cmd>
      <SuccessRow>拿到一個臨時網址、打得開 = 體驗成功。</SuccessRow>
    </div>
  </div><Foot label="U13 · 課2 · 案例4" /></div>
);
const C4After: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段4 · 兩種上線,何時用哪個</Eyebrow><Title size={48}>記住這個選擇</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 18, marginTop: 30 }}>
      {[['GitHub Pages', '正式、長期、要放履歷的。網址穩定、免費。', '長期'], ['Cloudflare 臨時', '臨時給人看一眼、不想先辦帳號。60 分鐘。', '臨時']].map(([a, b, tag], i) => (
        <div key={i} style={{ background: C.card, border: `2px solid ${i ? C.line : C.orange}`, borderRadius: 16, padding: '24px 26px' }}><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><div style={{ fontSize: 30, fontWeight: 800, color: i ? C.ink : C.orange }}>{a}</div><span style={{ fontFamily: mono, fontSize: 17, color: '#fff', background: i ? C.muted : C.orange, borderRadius: 999, padding: '4px 12px' }}>{tag}</span></div><div style={{ fontSize: 25, color: C.muted, marginTop: 12, lineHeight: 1.45 }}>{b}</div></div>
      ))}
    </div>
  </div><Foot label="U13 · 課2 · 段4" /></div>
);
// ── 段5 收束 ──
const Punchline: Page = () => (
  <div style={{ ...fill, background: C.ink, color: '#fff' }}><div style={pad}><Eyebrow>今天記住這句</Eyebrow><div style={{ fontSize: 74, fontWeight: 900, lineHeight: 1.22, marginTop: 26, maxWidth: 1580, letterSpacing: '-0.02em' }}>手動點一次是為了<span style={{ color: C.orange }}>懂它</span>;<br />之後讓 AI + 自動上線,<br />幫你每次自己更新。</div></div><div style={{ position: 'absolute', left: 110, bottom: 44, fontFamily: mono, fontSize: 19, color: 'rgba(255,255,255,0.5)' }}>U13 · 課2 · 記住這句</div></div>
);
const Recap: Page = () => {
  const pts = [['commit / push', '打包、寄出,就這樣'], ['手動 vs 自動上線', '先懂流程,再讓它自動'], ['公開前先檢查', '不放個資、不放未授權資料']];
  return (<div style={fill}><div style={pad}><Eyebrow>M13 完課 · 三件事</Eyebrow><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 34, maxWidth: 1500 }}>{pts.map(([a, b], i) => <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}><span style={{ fontFamily: mono, fontSize: 38, color: C.orange, fontWeight: 800 }}>{String(i + 1).padStart(2, '0')}</span><div><div style={{ fontSize: 40, fontWeight: 800 }}>{a}</div><div style={{ fontSize: 26, color: C.muted, marginTop: 4 }}>{b}</div></div></div>)}</div></div><Foot label="U13 · 課2 · 完課" /></div>);
};
const ModuleMap: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>M13 全模組 · 你蓋好的網站</Eyebrow><Title size={48}>兩堂,從零到公開上線</Title>
    <div className="ts-rise" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 30, maxWidth: 1540 }}>
      {['fork 範本', '改成你的', '本機預覽', '手動上線', '自動上線'].map((t, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 12, padding: '16px 24px', fontSize: 27, fontWeight: 700 }}>{t}</span>
          {i < 4 && <span style={{ color: C.orange, fontSize: 30, fontWeight: 800 }}>→</span>}
        </div>
      ))}
    </div>
    <div style={{ marginTop: 26 }}><Harvest>你現在有一個公開、能自己更新的網站了。恭喜!</Harvest></div>
  </div><Foot label="U13 · 課2 · M13 全圖" /></div>
);
const Homework: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>回家作業 · 輕量,只要一件</Eyebrow><Title>再做一次「自己更新」</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 36, maxWidth: 1480 }}>
      <div style={{ background: C.card, border: `2px solid ${C.orange}`, borderRadius: 16, padding: '24px 34px' }}><span style={{ fontFamily: mono, fontSize: 22, color: C.orange, fontWeight: 700 }}>必做</span><div style={{ fontSize: 34, marginTop: 8, lineHeight: 1.4 }}>改一個東西 → push → 確認<B>公開網址真的有變</B>。完成自主更新閉環。</div></div>
      <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '20px 34px' }}><span style={{ fontFamily: mono, fontSize: 22, color: C.muted, fontWeight: 700 }}>選做</span><div style={{ fontSize: 28, marginTop: 6, color: C.muted, lineHeight: 1.4 }}>寫第 2 篇文章、加分類標籤、整理求職內容。</div></div>
    </div></div><Foot label="U13 · 課2 · 回家作業" /></div>
);
const NextModule: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>下一個模組 · M14</Eyebrow><Title size={54}>把你做的全部成果,<br /><span style={{ color: C.orange }}>當成一間公司來營運</span></Title><div style={{ fontSize: 32, color: C.muted, marginTop: 28, lineHeight: 1.5 }}>你已經有助理、有網站了。下個模組,我們把它們開起來營運、處理突發狀況。今天辛苦了!</div></div><Foot label="U13 · 課2 · 完課" /></div>
);

export const meta: SlideMeta = { title: 'U13 課2：公開上線', createdAt: '2026-06-22T11:10:00.000Z' };
export const notes: (string | undefined)[] = [
  '各位同學,U13 第二堂,也是 M13 最後一堂。上一堂你的網站在自己電腦上看得到;今天讓它公開上線,你會拿到一個真的網址,任何人都能打開。我們帶你兩種上線方式。',
  '先回顧上一堂:你 fork 了範本開出環境、用 AI 換了標題顏色第一篇、在本機預覽看到了。但它目前只有你看得到。今天就差最後一步:把只有你看得到,變成全世界都能打開。',
  '先看下課時你會有什麼。這是一個真的、已經上線的範例網站。下課時你會有一個自己的、能傳給別人、能放履歷的網址。',
  '先講為什麼帶兩種。第一種我們手動點一次,讓你看清楚流程,你才懂它在幹嘛;第二種讓 AI 用自動上線幫你做好。自動那種更完整,以後改一改就自己上線。先手動懂、再讓 AI 做好。',
  '看路線。四個案例:手動推上 GitHub、手動開 Pages、AI 設自動上線、選配免註冊秒上線。中間休息一次。',
  '第一段,上線前先懂兩件事:一個把檔案送上網的動作,還有公開前的安全檢查。',
  '用物流比喻講 commit 跟 push。把檔案想成要寄的包裹:commit 是打包裝箱貼標籤,寫一句這箱是什麼;push 是拿去寄出,送到 GitHub 這個網路倉庫。就這樣,打包、寄出。等下 AI 也會幫你做,你先懂這兩個字。',
  '分開記這兩個動作:commit 是打包、貼標籤,寫一句這次改了什麼;push 是寄到 GitHub,把打包好的送上網路倉庫。順序固定:先 commit 再 push。等下手動做一次你就記住了。',
  '上線等於全世界看得到,所以先做安全檢查:不要放電話住址、不要放沒授權的客戶資料或內部截圖、課堂先用範例內容。',
  '為什麼這麼謹慎?你可能會想說放錯了刪掉不就好?不一定來得及,東西一公開可能已經被別人存下來、被搜尋引擎記住。所以寧可上線前多看一眼。公開是送出去,不是貼在自己房間。',
  '第二段,方法一,自己手動上線一次。親手點,你會清楚看到檔案怎麼上去、Pages 怎麼開、網址怎麼來。',
  '案例一,這是最經典的先自己做一次。懂了流程,之後 AI 幫你做你才看得懂。',
  '步驟 A 推上 GitHub:左邊找到原始檔控制那個樹枝分岔的圖示點它,上面出現訊息框跟一堆改過的檔案;打一句例如第一次上線,按 Commit 打包,若問 stage all 按 Yes;再按 Sync Changes 同步寄出,第一次要登入授權。',
  '怎麼確認推成功?回到你的 repo 網頁、重新整理,如果檔案都在上面、右邊有剛剛的時間,就代表寄到了。',
  '步驟 B 開 Pages:到 repo 網頁點 Settings,左邊找到 Pages、來源選你的分支按 Save,出現網站正在建置。',
  '步驟 C 等網址出現:等一兩分鐘重新整理那一頁,上面出現一個 https 的公開網址,點開看看,你的網站出現而且是公開的。你可能會想說按了 Save 沒看到網址?它還在建置,等一下再重新整理,第一次比較慢正常。',
  '看懂這個網址:它不是隨機的,就是你的帳號加你的專案名組起來的,所以一看就知道是你的。',
  '給大家看個真的。把這個網址傳給旁邊同學他也打得開,這就代表你的網站真的上線了,不再只有你看得到。',
  '這一步的意義:打包、寄出、開公開、拿網址,這四步就是任何網站上線都會做的事。你親手做過一次,之後就看得懂 AI 在幫你做什麼。懂了手動,自動化才不是黑箱。',
  '卡住:網址 404 再等一兩分鐘、或確認來源分支選對;樣式跑掉變醜通常是路徑設定要調,這個下一段讓 AI 處理最快。',
  '第三段,讓 AI 設好自動上線。手動懂了,現在讓 AI 設 GitHub Actions,以後你一改 push 它就自己上線。',
  '案例三,剛剛你手動開了 Pages,現在請 AI 幫你設自動上線,以後改完 push 它自己重新上線,還順手把樣式路徑修對。',
  '用比喻講:手動是每次都自己跑一趟郵局;自動上線是跟宅配約好定期取件,你把包裹放門口它自己來收、自己寄、自己上架。設定一次,以後改完 push 網站自己更新。',
  '貼這段,請它設 GitHub Actions、每次 push 後自動建置上線、把 base 路徑設對確認樣式不跑掉。複製、貼、Enter,之後再 push 一次。它加一個設定檔,GitHub 上 Actions 出現綠色勾勾。',
  'push 之後去看 Actions:到 repo 網頁點上面那排的 Actions 分頁,看到一筆筆執行紀錄;看最上面那筆,等它從轉圈圈變成綠色打勾,綠勾就是這次自動上線成功了。你可能會想說變紅色叉叉怎麼辦?點進去把紅字那段複製貼給 AI,它會告訴你怎麼修。',
  'Actions 長怎樣?它就是一排執行紀錄,每 push 一次就多一筆,綠勾代表那次成功、紅叉代表有錯,你只要看最上面那筆。',
  '為什麼自動更完整?手動你懂了流程,但每次更新都要自己再點一輪;自動的設定一次,以後改完 push 就自己上線,這才是真正在用的方式。先懂手動,再讓它自動。',
  '給大家看個真的。這個範例就是用 GitHub Actions 自動部署上線的,改一改 push 它自己重新上線。你今天做的就是這種。好,休息十分鐘。',
  '休息十分鐘,回來看一個更快、免註冊的上線方式。',
  '第四段是選配。想讓大家體驗最快上線?有個新方法,連帳號都不用先辦。',
  '為什麼還教這個?有時候你只是想臨時給客戶、朋友看個草稿,不想為這個先去辦帳號設一堆東西。這時候有個更快的方法。正式長期用 GitHub Pages,臨時給人看一眼用這個更快。',
  'Cloudflare 臨時帳號:不用先辦帳號,一行指令就上線,給你一個能活 60 分鐘的網址,喜歡再認領變成你正式的。像遊樂園的一日券,先讓你進去玩,玩得開心再決定要不要辦年票。',
  '案例四,請 AI 幫你用這個方式,或自己在終端機打 wrangler deploy --temporary。拿到一個臨時網址打得開就體驗成功。',
  '兩種上線何時用哪個,記住這個選擇:GitHub Pages 用在正式、長期、要放履歷的,網址穩定免費;Cloudflare 臨時用在臨時給人看一眼、不想先辦帳號,只活 60 分鐘。',
  '今天最重要的一句:手動點一次是為了懂它;之後讓 AI 加自動上線,幫你每次自己更新。',
  '收尾,M13 完課三件事:commit push 就是打包寄出、先懂手動再讓它自動、公開前先檢查。',
  '回頭看 M13 全圖:fork 範本、改成你的、本機預覽、手動上線、自動上線。兩堂從零到公開上線。你現在有一個公開、能自己更新的網站了,恭喜!',
  '回家作業一件:改一個東西 push,確認公開網址真的有變,完成自主更新閉環。選做是寫第二篇、加分類標籤、整理求職內容。',
  '下一個模組 M14,你已經有助理、有網站了,我們把它們當成一間公司開起來營運、處理突發狀況。今天辛苦大家了!',
];
export default [
  Cover, Recall, Outcome, Why, Roadmap,
  Sec1, C1Concept, C1CommitPush, C1Check, C1CheckWhy,
  Sec2, C2Head, C2Push, C2PushVerify, C2Pages, C2PagesWait, C2ReadUrl, C2See, C2Why, C2Pit,
  Sec3, C3Head, C3Concept, C3Prompt, C3Run, C3WhatActions, C3WhyDeep, C3Real, Break1,
  Sec4, C4Why, C4Concept, C4, C4After,
  Punchline, Recap, ModuleMap, Homework, NextModule,
] satisfies Page[];
