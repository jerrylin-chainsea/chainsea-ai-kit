import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';
import incidentShot from './assets/incident.png';

export const design: DesignSystem = {
  palette: { bg: '#f5f6f8', text: '#181a1f', accent: '#e2570d' },
  fonts: { display: '"PingFang TC", "Noto Sans TC", "Microsoft JhengHei", system-ui, sans-serif', body: '"PingFang TC", "Noto Sans TC", "Microsoft JhengHei", system-ui, sans-serif' },
  typeScale: { hero: 132, body: 34 }, radius: 16,
};
const C = { bg: design.palette.bg, ink: design.palette.text, orange: design.palette.accent, muted: '#5a6270', faint: '#9aa1ad', line: '#e2e5ea', card: '#ffffff' };
const OK = '#0e7a52'; const RED = '#c0392b';
const mono = '"JetBrains Mono", "SF Mono", ui-monospace, monospace';
const css = `@keyframes ts-up{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.ts-rise>*{animation:ts-up .55s cubic-bezier(.16,1,.3,1) both}.ts-rise>*:nth-child(2){animation-delay:.05s}.ts-rise>*:nth-child(3){animation-delay:.10s}.ts-rise>*:nth-child(4){animation-delay:.15s}.ts-rise>*:nth-child(5){animation-delay:.20s}
@media (prefers-reduced-motion:reduce){.ts-rise>*{animation:none!important}}`;
if (typeof document !== 'undefined' && !document.getElementById('ts-u14c2')) { const el = document.createElement('style'); el.id = 'ts-u14c2'; el.textContent = css; document.head.appendChild(el); }
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
const Analogy = ({ children }: { children: any }) => (
  <div style={{ background: '#fbf3ee', border: '1px solid #f3d6c4', borderRadius: 16, padding: '22px 30px', maxWidth: 1480 }}><div style={{ fontFamily: mono, fontSize: 21, color: C.orange, fontWeight: 700, marginBottom: 8 }}>打個比方 🚑</div><div style={{ fontSize: 31, color: C.ink, lineHeight: 1.55 }}>{children}</div></div>
);
const Harvest = ({ children }: { children: any }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16, borderLeft: `6px solid ${C.orange}`, background: '#fff', padding: '16px 26px', borderRadius: '0 12px 12px 0', maxWidth: 1480, boxShadow: '0 6px 24px -16px rgba(30,30,40,.4)' }}><span style={{ fontFamily: mono, fontSize: 18, color: C.orange, fontWeight: 700, whiteSpace: 'nowrap' }}>一句話帶走</span><span style={{ fontSize: 30, fontWeight: 700, lineHeight: 1.4 }}>{children}</span></div>
);
const CaseTag = ({ kind }: { kind: '手動' | 'AI' | '展示' }) => { const bg = kind === 'AI' ? C.orange : kind === '手動' ? '#2a2d35' : OK; return <span style={{ fontFamily: mono, fontSize: 19, color: '#fff', background: bg, borderRadius: 999, padding: '5px 15px' }}>{kind}帶做</span>; };
const CaseHead = ({ no, time, kind, title, size = 44 }: { no: string; time: string; kind: '手動' | 'AI' | '展示'; title: string; size?: number }) => (
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
  <div style={{ ...fill, background: C.ink, color: '#fff' }}><div style={{ ...pad }}><span style={{ fontFamily: mono, fontSize: 26, color: C.orange, letterSpacing: '0.2em' }}>段 {no} ・ {time}</span><div style={{ fontSize: 86, fontWeight: 900, marginTop: 22, letterSpacing: '-0.02em', lineHeight: 1.08 }}>{title}</div><div style={{ fontSize: 35, color: 'rgba(255,255,255,0.72)', marginTop: 24, maxWidth: 1300, lineHeight: 1.5 }}>{sub}</div></div></div>
);
const BreakSlide = () => (
  <div style={{ ...fill, background: '#0e7a52' }}><div style={{ ...pad, color: '#fff' }}><span style={{ fontFamily: mono, fontSize: 26, letterSpacing: '0.2em', opacity: 0.85 }}>BREAK</span><div style={{ fontSize: 118, fontWeight: 900, marginTop: 16 }}>休息 10 分鐘</div><div style={{ fontSize: 35, opacity: 0.9, marginTop: 22 }}>回來提煉治理規則,寫一頁交接,完課。</div></div></div>
);
const FileCard = ({ title, children }: { title: string; children: any }) => (
  <div style={{ background: '#0f1117', borderRadius: 16, overflow: 'hidden', border: '1px solid #232733', maxWidth: 1480 }}>
    <div style={{ padding: '11px 20px', background: '#161a22', borderBottom: '1px solid #232733', fontFamily: mono, fontSize: 18, color: '#8b93a3' }}>{title}</div>
    <pre style={{ margin: 0, padding: '18px 26px', fontFamily: mono, fontSize: 22, lineHeight: 1.6, color: '#cdd3df', whiteSpace: 'pre-wrap' }}>{children}</pre>
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
  </div><Foot label="U14 · 課2 · 真實成果" /></div>
);
const Round = ({ tag, sit, stop, prompt }: { tag: string; sit: string; stop: any; prompt: string }) => (
  <div style={fill}><div style={pad}><Eyebrow>{tag}</Eyebrow><Title size={44}>{sit}</Title>
    <div style={{ fontSize: 28, color: C.ink, margin: '16px 0 16px', maxWidth: 1480 }}><B>① 先止血:</B>{stop}然後貼這段給 AI:</div>
    <PromptCard size={25}>{prompt}</PromptCard>
  </div><Foot label={`U14 · 課2 · ${tag}`} /></div>
);

// ── 開場 ──
const Cover: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>U14 · 第 2 堂 / 共 2 堂 · 4 小時 · 全課程收尾</Eyebrow>
    <div className="ts-rise" style={{ marginTop: 30 }}><Title size={94}>出事的時候,<br />怎麼用 AI 處理</Title><div style={{ marginTop: 22 }}><Lead>開店一定會出狀況。今天用一套<B>五步框架</B>,加上 AI,練習把三種突發狀況處理掉。</Lead></div></div>
  </div><Foot label="U14 · 課2" /></div>
);
const Recall: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>先接上一堂</Eyebrow><Title size={50}>還記得那個缺料提醒嗎?</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 28 }}>
      <Lead>上一堂跑正常營業日時,午餐尖峰跳了一個<B>泡菜內餡快缺料</B>的提醒。當時我們說「先記下來」。今天,就是來處理這種狀況的。</Lead>
      <FileCard title="上一堂留下的伏筆">{`⚠ 泡菜內餡 剩餘 8% → 今天來處理`}</FileCard>
    </div>
  </div><Foot label="U14 · 課2 · 回顧" /></div>
);
const Outcome: Page = () => (
  <RealShot img={incidentShot} url="stanley-1013.github.io/chainsea-leacture/trace/?id=evt-stockout" eyebrow="今天會做到"
    title="把異常丟給 AI,讓它幫你定位、評估、起草說明" caption="這是真的:一個爆單缺料事件,AI 三角色處置的歷程(定位 → 評估影響 → 起草對外說明)。今天你會練習這樣處理事情。" />
);
const Why: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>先講今天的心法</Eyebrow><Title size={52}>出事時,先「止血」,不是先找原因</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Analogy>像急診:病人大出血,醫生<B>先止血</B>,不會站著研究「他為什麼受傷」。原因很重要,但<O>晚一點再查</O>。先讓傷害停下來。</Analogy>
      <Think q={<>「不先搞清楚原因,亂處理不會更糟?」</>} a={<>止血不是亂修,是<B>先讓錯誤停止擴大</B>(暫停發布、接單、通知)。很多災難都是「站著查原因」的時候,損失一直變大。</>} />
    </div>
  </div><Foot label="U14 · 課2 · 心法" /></div>
);
const Roadmap: Page = () => {
  const items = [['段 1', '學會五步框架', '0:15', '手動'], ['段 2', '處理三輪異常', '1:00', 'AI'], ['段 3', '提煉規則 + 交接', '3:00', 'AI']];
  return (
    <div style={fill}><div style={pad}><Eyebrow>今天的路線 · 三段 + 完課</Eyebrow><Title>學框架 → 練三輪 → 交接</Title>
      <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22, marginTop: 44 }}>
        {items.map(([a, b, t, k], i) => <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '26px 24px' }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontFamily: mono, fontSize: 21, color: C.orange, fontWeight: 700 }}>{a}</span><span style={{ fontFamily: mono, fontSize: 18, color: C.faint }}>{t}</span></div><div style={{ fontSize: 32, fontWeight: 800, marginTop: 12 }}>{b}</div><div style={{ marginTop: 14 }}><CaseTag kind={k as any} /></div></div>)}
      </div></div><Foot label="U14 · 課2 · 路線" /></div>
  );
};
// ── 段1 五步框架 ──
const Sec1: Page = () => <Section no="1" title="先學會「五步處理法」" time="0:15 - 1:00" sub="每個異常都跑這五步。先記順序:止血最優先,找原因排後面。" />;
const C1Analogy: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段1 · 為什麼要框架</Eyebrow><Title size={50}>慌的時候,人會亂;框架讓你不亂</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Lead>出事的時候,大家會慌、會亂試。<B>有一套固定步驟</B>,你就照著走,不會漏掉最重要的那一步(止血)。</Lead>
      <Harvest>框架不是綁手綁腳,是慌亂時的扶手。</Harvest>
    </div>
  </div><Foot label="U14 · 課2 · 五步" /></div>
);
const C1Five: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>五步框架</Eyebrow><Title size={46}>遇到任何狀況,都跑這五步</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 11, marginTop: 24, maxWidth: 1520 }}>
      {[['① 止血', '先停止錯誤擴大(暫停發布/接單/通知),不是先找原因'], ['② 定範圍', '多少顧客、訂單、資料受影響?'], ['③ 定層級', '問題在哪層:資料 / 流程 / 自動化 / AI / 介面'], ['④ 決策', '修?用備援?還是人工接手?'], ['⑤ 重測 + 紀錄', '從問題前一站重測;寫下事件、決策、誰接手']].map(([a, b], i) => (
        <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '13px 24px' }}><span style={{ flexShrink: 0, fontFamily: mono, fontSize: 24, color: C.orange, fontWeight: 800, width: 86 }}>{a}</span><span style={{ fontSize: 27, lineHeight: 1.35 }}>{b}</span></div>
      ))}
    </div>
  </div><Foot label="U14 · 課2 · 五步" /></div>
);
const C1Order: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>五步 · 為什麼止血排第一</Eyebrow><Title size={50}>原因可以晚點查,血不能晚點止</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Lead>把順序記死:<O>止血</O> 永遠第一,<B>找原因排到第三步</B>。因為你在查原因的每一分鐘,錯誤都還在繼續擴大。</Lead>
      <Harvest>先讓壞事停下來,再慢慢查它為什麼發生。</Harvest>
    </div>
  </div><Foot label="U14 · 課2 · 五步" /></div>
);
const C1AI: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>五步 · 每一步怎麼用 AI</Eyebrow><Title size={46}>這才是 M14 的重點</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 22, maxWidth: 1540 }}>
      {[['止血', '問 AI:要關哪個開關、註解哪一段,比自己翻快'], ['定範圍', '用 M12 助理讀當下資料,估有多少受影響'], ['定層級', '把錯誤訊息貼給 AI,請它判斷是哪一層的問題'], ['決策', '用 AI 起草對外說明、整理選項;人做最終決定'], ['重測', '請 AI 幫忙跑一次、讀結果確認']].map(([a, b], i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: 20, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '12px 24px' }}><span style={{ fontFamily: mono, fontSize: 23, color: C.orange, fontWeight: 700 }}>{a}</span><span style={{ fontSize: 26, lineHeight: 1.35 }}>{b}</span></div>
      ))}
    </div>
    <div style={{ marginTop: 16 }}><Harvest>AI 幫你「更快做到」,但判斷與最終決定,在人。</Harvest></div>
  </div><Foot label="U14 · 課2 · 五步用 AI" /></div>
);
const C1Human: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段1 · 一條紅線</Eyebrow><Title size={50}>AI 加速每一步,但「喊停」是人</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Think q={<>「全部交給 AI 自己處理不行嗎?」</>} a={<>處理事件會<B>動到錢、動到顧客</B>。AI 可以幫你做得更快,但<O>要不要止血、要不要對外講</O>,這種決定必須是人按下去。</>} />
    </div>
  </div><Foot label="U14 · 課2 · 五步" /></div>
);
// ── 段2 三輪 ──
const Sec2: Page = () => <Section no="2" title="練習處理三輪異常" time="1:00 - 3:00" sub="老師會丟三張事件卡。每一張,你用五步、用 AI 處理掉。" />;
const C2Head: Page = () => (
  <div style={fill}><div style={pad}><CaseHead no="三輪事件" time="1:00 - 3:00" kind="AI" title="三種會發生的狀況,逐一處理" />
    <div className="ts-rise" style={{ marginTop: 32 }}><Lead>三輪:對外品牌出包、營運資料出包、AI 自己出包。每一輪都<B>先止血</B>,再用 AI 幫你處理。</Lead></div>
  </div><Foot label="U14 · 課2 · 三輪" /></div>
);
const C2Three: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>三輪 · 總覽</Eyebrow><Title size={48}>三種出包,涵蓋三個方向</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 13, marginTop: 26, maxWidth: 1500 }}>
      {[['第一輪', '對外品牌:價格標錯'], ['第二輪', '營運資料:爆單缺料'], ['第三輪', 'AI 自己:建議失準']].map(([a, b], i) => (
        <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '15px 24px' }}><span style={{ fontFamily: mono, fontSize: 22, color: C.orange, fontWeight: 800, width: 120 }}>{a}</span><span style={{ fontSize: 28 }}>{b}</span></div>
      ))}
    </div>
  </div><Foot label="U14 · 課2 · 三輪" /></div>
);
const C2WhyThree: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>三輪 · 為什麼挑這三種</Eyebrow><Title size={48}>出包,大概就這三個來源</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 13, marginTop: 26, maxWidth: 1500 }}>
      {[['對外', '顧客直接看到的東西出錯(網站、價格、公告)。'], ['資料', '營運的數字、庫存出錯。'], ['AI 自己', '它給的建議本身就不對。']].map(([a, b], i) => (
        <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '15px 24px' }}><span style={{ fontFamily: mono, fontSize: 22, color: C.orange, fontWeight: 700, width: 130 }}>{a}</span><span style={{ fontSize: 27 }}>{b}</span></div>
      ))}
    </div>
    <div style={{ marginTop: 18 }}><Harvest>練過這三種,大部分狀況你都接得住。</Harvest></div>
  </div><Foot label="U14 · 課2 · 三輪" /></div>
);
const C2Stop: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>三輪 · 止血怎麼做</Eyebrow><Title size={50}>「止血」具體是按什麼</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 13, marginTop: 26, maxWidth: 1500 }}>
      {[['對外出錯', '把那一頁/那則貼文先撤下或改回。'], ['資料出錯', '把出問題的品項先設「售完/停用」。'], ['AI 出錯', '暫停採用那個建議,先不照它做。']].map(([a, b], i) => (
        <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'center', background: '#fff7f4', border: '1px solid #f3d0c2', borderRadius: 14, padding: '15px 24px' }}><span style={{ flexShrink: 0, width: 32, height: 32, borderRadius: '50%', background: RED, color: '#fff', display: 'grid', placeContent: 'center', fontSize: 19, fontWeight: 800 }}>!</span><span style={{ fontFamily: mono, fontSize: 21, fontWeight: 700, width: 150 }}>{a}</span><span style={{ fontSize: 26 }}>{b}</span></div>
      ))}
    </div>
    <div style={{ marginTop: 18 }}><Harvest>止血就是「先讓它停」。三輪都一樣,先停再說。</Harvest></div>
  </div><Foot label="U14 · 課2 · 三輪" /></div>
);
const C2R1: Page = () => (
  <Round tag="第一輪 · 對外品牌(錯價)" sit="網站把價格標錯了" stop={<>把錯價那頁<O>撤下或改回</O>。</>}
    prompt={`我們網站把一個品項價格標錯,已經掛了幾小時。
1. 幫我估算大概影響多少訂單(用今天的資料)。
2. 幫我起草一則對顧客的更正說明,語氣誠懇。
我會自己確認後才發出。`} />
);
const C2R1Read: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>第一輪 · AI 幫你做了什麼</Eyebrow><Title size={48}>對到五步的哪幾步</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 13, marginTop: 26, maxWidth: 1500 }}>
      {[['② 定範圍', '它估了大概影響多少訂單。'], ['③④ 決策 + 溝通', '它起草了更正說明,你確認後才發。']].map(([a, b], i) => (
        <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '15px 24px' }}><span style={{ fontFamily: mono, fontSize: 21, color: C.orange, fontWeight: 700, width: 200 }}>{a}</span><span style={{ fontSize: 27 }}>{b}</span></div>
      ))}
    </div>
    <div style={{ marginTop: 18 }}><SuccessRow>先撤頁、再讓 AI 估影響跟起草說明、你發出 = 第一輪處理完。</SuccessRow></div>
  </div><Foot label="U14 · 課2 · 第一輪" /></div>
);
const C2R2: Page = () => (
  <Round tag="第二輪 · 營運資料(爆單缺料)" sit="某品項暴單,庫存歸零還在接單" stop={<>把該品項先設<O>「售完」</O>。</>}
    prompt={`某品項今天暴單、庫存歸零。
1. 用今天資料看是不是只有這個品項、這個通路爆。
2. 幫我判斷:該暫停接單、還是先加叫料?給我依據。
我來做最後決定。`} />
);
const C2R2Read: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>第二輪 · AI 給你選項,你決定</Eyebrow><Title size={48}>它不替你拍板,它給你依據</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 26 }}>
      <Lead>它會回類似:「只有泡菜這品項爆、別的正常;若 1 小時內補得到料,建議加叫;補不到,建議暫停接單避免客訴。」<B>選哪個,你決定。</B></Lead>
      <Harvest>AI 把選項跟依據攤開,人按下最後那個鍵。</Harvest>
    </div>
  </div><Foot label="U14 · 課2 · 第二輪" /></div>
);
const C2R3: Page = () => (
  <Round tag="第三輪 · AI 自己(建議失準)" sit="M12 給了一個怪怪的建議" stop={<><O>暫停採用</O>這個 AI 建議。</>}
    prompt={`你剛剛的建議,我覺得怪怪的。
1. 請列出你這個結論的「依據」是什麼。
2. 檢查你用的資料範圍,有沒有缺漏或被汙染。
沒有依據的建議,我不會採用。`} />
);
const C2R3Read: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>第三輪 · 呼應 M12 的把關</Eyebrow><Title size={48}>沒依據,就不採用</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 26 }}>
      <Lead>這正是 M12 課4 教的:<B>要求它附依據、檢查資料範圍</B>。常常一問,就發現它用到了缺漏或汙染的資料：那這個建議就不能信。</Lead>
      <Harvest>連 AI 自己出包,你也有一套方法接住,不會被它牽著走。</Harvest>
    </div>
  </div><Foot label="U14 · 課2 · 第三輪" /></div>
);
const C2See: Page = () => (
  <RealShot img={incidentShot} url="stanley-1013.github.io/chainsea-leacture/trace/?id=evt-stockout" eyebrow="三輪 · 真實成果"
    title="AI 處置一個事件,真的長這樣" caption="這是真的:爆單缺料事件,AI 三角色一棒接一棒：先定位問題層級、評估影響範圍、再起草對外說明。你處理時就是這個感覺。" />
);
const C2Note: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>三輪 · 每張卡都要留一筆</Eyebrow><Title size={48}>每處理完一張,記四件事</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16, marginTop: 28, maxWidth: 1500 }}>
      {[['事件', '發生了什麼'], ['決策', '你決定怎麼做'], ['溝通', '對外講了什麼'], ['人工接手', '哪裡人介入了']].map(([k, v], i) => (
        <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '20px 26px' }}><div style={{ fontSize: 30, fontWeight: 800, color: C.orange }}>{k}</div><div style={{ fontSize: 25, color: C.muted, marginTop: 8 }}>{v}</div></div>
      ))}
    </div>
    <div style={{ marginTop: 18 }}><SuccessRow>三張卡都先止血、再用 AI 處理、各留一筆紀錄 = 成功。</SuccessRow></div>
  </div><Foot label="U14 · 課2 · 三輪" /></div>
);
const C2Pit: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>三輪 · 卡住了?</Eyebrow><Title size={48}>兩個常見狀況</Title>
    <div className="ts-rise" style={{ marginTop: 26, maxWidth: 1500 }}><Pitfall items={[['不知道怎麼止血:', '記住一句:先讓它停：撤頁、設售完、暫停採用。'], ['AI 起草的說明太官腔:', '跟它說「更口語、像老闆親自道歉」,它會重寫。']]} /></div>
  </div><Foot label="U14 · 課2 · 三輪" /></div>
);
const Break1: Page = () => <BreakSlide />;
// ── 段3 治理 + 交接 ──
const Sec3: Page = () => <Section no="3" title="提煉規則,寫一頁交接" time="3:00 - 3:50" sub="從三輪事件學到教訓,變成 3 到 5 條規則;再用 AI 整理成一頁交接。" />;
const C3Rules: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>治理規則</Eyebrow><Title size={48}>把教訓變成「下次的規矩」</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 11, marginTop: 24, maxWidth: 1520 }}>
      {['改價、促銷價需人工核准,系統擋下售價低於成本。', '庫存歸零,自動停止該品項接單與推廣。', 'AI 建議要附依據才採用,沒依據視為無效。', '資料缺漏要明確標記,不讓 AI 硬算。'].map((t, i) => (
        <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'center', background: C.card, borderLeft: `5px solid ${C.orange}`, border: `1px solid ${C.line}`, borderRadius: 12, padding: '13px 24px' }}><span style={{ fontFamily: mono, fontSize: 24, color: C.orange, fontWeight: 800 }}>{i + 1}</span><span style={{ fontSize: 27, lineHeight: 1.35 }}>{t}</span></div>
      ))}
    </div>
    <div style={{ marginTop: 16 }}><Harvest>規則不用多,3 到 5 條真的有用的就好。</Harvest></div>
  </div><Foot label="U14 · 課2 · 治理" /></div>
);
const C3RulesWhy: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>治理規則 · 為什麼</Eyebrow><Title size={50}>規則,是讓你不用每次重新慌</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Lead>每條規則,都對應一次今天踩過的雷。<B>同樣的雷,以後系統自動擋</B>,你就不用再處理一次。</Lead>
      <Harvest>好的團隊,不是不出事,是同樣的事不出第二次。</Harvest>
    </div>
  </div><Foot label="U14 · 課2 · 治理" /></div>
);
const C3Handover: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>交接 · 為什麼要寫</Eyebrow><Title size={50}>交接,是讓別人也接得住</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Think q={<>「東西都在我腦袋裡,還要寫?」</>} a={<>要。哪天你請假、換人接手,沒有一頁交接,<B>整套就只有你能跑</B>。寫下來,它才是「公司的」,不是「你的」。</>} />
    </div>
  </div><Foot label="U14 · 課2 · 交接" /></div>
);
const C3Prompt: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>一頁交接 · Prompt 卡</Eyebrow><Title size={46}>用 AI 整理成一頁交接</Title>
    <div style={{ marginTop: 18 }}><PromptCard size={24}>{`把我今天的處理紀錄,整理成一頁交接說明,包含:
1. 端到端流程(顧客到 AI 建議怎麼流)
2. AI 在哪裡幫忙、什麼情況不該信它
3. 人工必須接手的地方
4. 我們提煉的治理規則
我再校對。`}</PromptCard></div>
    <div style={{ marginTop: 16 }}><SuccessRow>拿到一頁能交接、能 Demo 的說明 = M14 的核心產出完成。</SuccessRow></div>
  </div><Foot label="U14 · 課2 · 交接" /></div>
);
const C3Demo: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>交接 · Demo 路線</Eyebrow><Title size={48}>排一條固定的展示順序</Title>
    <div className="ts-rise" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 28, maxWidth: 1520 }}>
      {['品牌站', '核心流程', 'AI 如何輔助', '一個異常與處理', '已知限制'].map((t, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 12, padding: '14px 22px', fontSize: 27, fontWeight: 700 }}>{t}</span>
          {i < 4 && <span style={{ color: C.orange, fontSize: 28, fontWeight: 800 }}>→</span>}
        </div>
      ))}
    </div>
    <div style={{ marginTop: 22 }}><Harvest>固定順序,你才不會臨場慌。</Harvest></div>
  </div><Foot label="U14 · 課2 · 交接" /></div>
);
const C3Backup: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>交接 · 一個保險</Eyebrow><Title size={50}>Demo 一定要有「截圖備援」</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Think q={<>「現場網路斷掉、AI 突然很慢怎麼辦?」</>} a={<>先把每一步<B>截圖或錄一段影片</B>。真的連不上,你也能照著截圖講完,不會開天窗。</>} />
      <Harvest>正式 Demo 前,先準備好「網路掛掉也能講完」的版本。</Harvest>
    </div>
  </div><Foot label="U14 · 課2 · 交接" /></div>
);
// ── 段4 收束 + 全課程 ──
const Punchline: Page = () => (
  <div style={{ ...fill, background: C.ink, color: '#fff' }}><div style={pad}><Eyebrow>今天 · 最重要的一句</Eyebrow><div style={{ fontSize: 72, fontWeight: 900, lineHeight: 1.2, marginTop: 26, maxWidth: 1580, letterSpacing: '-0.02em' }}>AI 幫你更快止血、<br />判斷、溝通;<br />但<span style={{ color: C.orange }}>喊停跟拍板,永遠是人。</span></div><div style={{ fontSize: 31, color: 'rgba(255,255,255,0.7)', marginTop: 26, maxWidth: 1380, lineHeight: 1.55 }}>從 M12 到 M14,這條紅線沒變過:AI 加速,人負責。</div></div><div style={{ position: 'absolute', left: 110, bottom: 44, fontFamily: mono, fontSize: 19, color: 'rgba(255,255,255,0.5)' }}>U14 · 課2 · 記住這句</div></div>
);
const Recap: Page = () => {
  const pts = [['五步處理法', '先止血,再找原因'], ['每一步用 AI', '更快定位、評估、溝通'], ['提煉規則 + 交接', '把教訓留成下次的規矩']];
  return (<div style={fill}><div style={pad}><Eyebrow>M14 完課 · 三件事</Eyebrow><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 34, maxWidth: 1500 }}>{pts.map(([a, b], i) => <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}><span style={{ fontFamily: mono, fontSize: 38, color: C.orange, fontWeight: 800 }}>{String(i + 1).padStart(2, '0')}</span><div><div style={{ fontSize: 40, fontWeight: 800 }}>{a}</div><div style={{ fontSize: 26, color: C.muted, marginTop: 4 }}>{b}</div></div></div>)}</div></div><Foot label="U14 · 課2 · 完課" /></div>);
};
const ModuleMap: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>M14 全模組 · 你學會的營運</Eyebrow><Title size={48}>把公司開起來、也守得住</Title>
    <div className="ts-rise" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 30, maxWidth: 1540 }}>
      {['跑正常一天', '看一年趨勢', '五步處理異常', '提煉規則', '一頁交接'].map((t, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 12, padding: '16px 24px', fontSize: 27, fontWeight: 700 }}>{t}</span>
          {i < 4 && <span style={{ color: C.orange, fontSize: 30, fontWeight: 800 }}>→</span>}
        </div>
      ))}
    </div>
    <div style={{ marginTop: 26 }}><Harvest>會營運、會處理突發、能交接：你把一間公司顧起來了。</Harvest></div>
  </div><Foot label="U14 · 課2 · M14 全圖" /></div>
);
const CourseMap: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>U12 - U14 · 整條路</Eyebrow><Title size={50}>你走完的這 32 小時</Title>
    <div className="ts-rise" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 32, maxWidth: 1560 }}>
      {[['M12', '會分析的助理'], ['M13', '公開的網站'], ['M14', '用 AI 營運的公司']].map(([a, b], i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ background: '#fff', border: `2px solid ${C.orange}`, borderRadius: 14, padding: '18px 26px' }}><div style={{ fontFamily: mono, fontSize: 20, color: C.orange, fontWeight: 800 }}>{a}</div><div style={{ fontSize: 28, fontWeight: 700, marginTop: 4 }}>{b}</div></div>
          {i < 2 && <span style={{ color: C.orange, fontSize: 32, fontWeight: 800 }}>→</span>}
        </div>
      ))}
    </div>
    <div style={{ marginTop: 28 }}><Harvest>三個模組,各自能用,合起來是一整套。</Harvest></div>
  </div><Foot label="U14 · 課2 · 全課程" /></div>
);
const Homework: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>回家作業 · 輕量,只要一件</Eyebrow><Title>把一頁交接補完</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 36, maxWidth: 1480 }}>
      <div style={{ background: C.card, border: `2px solid ${C.orange}`, borderRadius: 16, padding: '24px 34px' }}><span style={{ fontFamily: mono, fontSize: 22, color: C.orange, fontWeight: 700 }}>必做</span><div style={{ fontSize: 34, marginTop: 8, lineHeight: 1.4 }}>完成<B>一頁式交接說明</B>,並排好一條固定的 Demo 路線。</div></div>
      <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '20px 34px' }}><span style={{ fontFamily: mono, fontSize: 22, color: C.muted, fontWeight: 700 }}>選做</span><div style={{ fontSize: 28, marginTop: 6, color: C.muted, lineHeight: 1.4 }}>整理 Demo 備援(截圖/錄影),萬一現場網路不穩也能展示。</div></div>
    </div></div><Foot label="U14 · 課2 · 回家作業" /></div>
);
const Finale: Page = () => (
  <div style={{ ...fill, background: C.ink, color: '#fff' }}><div style={pad}><Eyebrow>U12 - U14 · 全部完課</Eyebrow>
    <Title size={54}>你做到了:一個會分析的助理、<br />一個公開的網站、<br />一間<span style={{ color: C.orange }}>用 AI 營運的公司</span>。</Title>
    <div style={{ fontSize: 33, color: 'rgba(255,255,255,0.72)', marginTop: 30, lineHeight: 1.5, maxWidth: 1400 }}>從完全零基礎,到能用 AI 做出會運作、能上線、可營運的成果。這就是 vibe coding。辛苦了,恭喜你們!</div>
  </div><div style={{ position: 'absolute', left: 110, bottom: 44, fontFamily: mono, fontSize: 19, color: 'rgba(255,255,255,0.5)' }}>U14 · 課2 · 全課程完課</div></div>
);

export const meta: SlideMeta = { title: 'U14 課2：三輪異常 + 交接(全課程收尾)', createdAt: '2026-06-22T11:40:00.000Z' };
export const notes: (string | undefined)[] = [
  '各位同學,這是最後一堂課了。上一堂我們跑了正常營業日。但你知道的,開店一定會出狀況。今天我們用一套五步框架,加上 AI,練習把三種突發狀況處理掉。',
  '先接上一堂。還記得那個缺料提醒嗎?上一堂跑正常營業日時,午餐尖峰跳了一個泡菜內餡快缺料的提醒,當時我們說先記下來。今天就是來處理這種狀況的。',
  '先給大家看今天會做到什麼。這是真的:一個爆單缺料事件,AI 三角色幫你處置的歷程,先定位、評估影響、再起草對外說明。今天你會練習這樣處理事情。',
  '先講今天的心法,很重要:出事時,先止血,不是先找原因。打個比方,像急診,病人大出血,醫生先止血,不會站著研究他為什麼受傷。你可能會想說不先搞清楚原因亂處理不會更糟?止血不是亂修,是先讓錯誤停止擴大,暫停發布、接單、通知。很多災難都是站著查原因的時候,損失一直變大。',
  '看路線。三段:先學會五步框架、處理三輪異常、最後提煉規則加寫一頁交接。',
  '第一段,先學會五步處理法。每個異常都跑這五步,先記順序:止血最優先,找原因排後面。',
  '為什麼要框架?出事的時候大家會慌、會亂試。有一套固定步驟,你就照著走,不會漏掉最重要的那一步止血。框架不是綁手綁腳,是慌亂時的扶手。',
  '五步:第一止血,先停止錯誤擴大;第二定範圍,多少顧客訂單資料受影響;第三定層級,問題在資料、流程、自動化、AI、還是介面;第四決策,修、用備援、還是人工接手;第五重測加紀錄,從問題前一站重測,寫下事件、決策、誰接手。',
  '為什麼止血排第一?把順序記死:止血永遠第一,找原因排到第三步。因為你在查原因的每一分鐘,錯誤都還在繼續擴大。先讓壞事停下來,再慢慢查它為什麼發生。',
  '這頁是 M14 的重點,每一步怎麼用 AI:止血,問 AI 要關哪個開關;定範圍,用 M12 讀資料估影響;定層級,把錯誤訊息貼給 AI 請它判斷哪一層;決策,用 AI 起草對外說明、整理選項,但人做最終決定;重測,請 AI 幫忙跑一次確認。AI 幫你更快做到,但判斷跟最終決定在人。',
  '一條紅線:AI 加速每一步,但喊停是人。你可能會想說全部交給 AI 自己處理不行嗎?處理事件會動到錢、動到顧客,AI 可以幫你做得更快,但要不要止血、要不要對外講,這種決定必須是人按下去。',
  '第二段,練習處理三輪異常。我會丟三張事件卡,每一張你用五步、用 AI 處理掉。',
  '三輪:對外品牌出包、營運資料出包、AI 自己出包。每一輪都先止血,再用 AI 幫你處理。',
  '先看三輪總覽:第一輪對外品牌價格標錯、第二輪營運資料爆單缺料、第三輪 AI 自己建議失準。',
  '為什麼挑這三種?出包大概就這三個來源:對外,顧客直接看到的東西出錯;資料,營運的數字庫存出錯;AI 自己,它給的建議本身就不對。練過這三種,大部分狀況你都接得住。',
  '止血具體是按什麼?對外出錯,把那一頁那則貼文先撤下或改回;資料出錯,把出問題的品項先設售完停用;AI 出錯,暫停採用那個建議先不照它做。止血就是先讓它停,三輪都一樣,先停再說。',
  '第一輪,對外品牌,網站把價格標錯了。先止血,把錯價那頁撤下或改回。然後貼這段給 AI:估算影響多少訂單、起草一則誠懇的更正說明,你確認後才發。',
  '第一輪 AI 幫你做了什麼?對到五步:第二步定範圍,它估了影響多少訂單;第三第四步決策加溝通,它起草更正說明你確認後才發。先撤頁、再讓 AI 估影響跟起草、你發出,第一輪就處理完。',
  '第二輪,營運資料,某品項暴單、庫存歸零還在接單。先止血,把該品項設售完。然後貼這段:用今天資料看是不是只有這品項這通路爆、判斷該暫停接單還是加叫料、給依據,你做最後決定。',
  '第二輪,AI 給你選項你決定。它會回類似:只有泡菜這品項爆別的正常,若一小時內補得到料建議加叫,補不到建議暫停接單避免客訴。選哪個你決定。AI 把選項跟依據攤開,人按下最後那個鍵。',
  '第三輪,AI 自己出包,M12 給了一個怪怪的建議。先止血,暫停採用這建議。然後貼這段:請它列出結論的依據、檢查資料範圍有沒有缺漏被汙染。沒有依據的建議不採用。',
  '第三輪呼應 M12 的把關。這正是 M12 課4 教的:要求它附依據、檢查資料範圍。常常一問就發現它用到了缺漏或汙染的資料,那這個建議就不能信。連 AI 自己出包,你也有一套方法接住,不會被它牽著走。',
  '給大家看個真的。這是爆單缺料事件,AI 三角色一棒接一棒:先定位問題層級、評估影響範圍、再起草對外說明。你處理時就是這個感覺,不是空想。',
  '每處理完一張卡,記四件事:事件、決策、溝通、人工接手。三張卡都先止血、再用 AI 處理、各留一筆紀錄,就成功。',
  '卡住:不知道怎麼止血,記住一句先讓它停,撤頁、設售完、暫停採用;AI 起草的說明太官腔,跟它說更口語、像老闆親自道歉,它會重寫。好,休息十分鐘。',
  '休息十分鐘,回來提煉治理規則,寫一頁交接,完課。',
  '回來了。第三段,提煉規則、寫一頁交接。從三輪事件學到的教訓,變成 3 到 5 條規則,再用 AI 整理成一頁交接。',
  '把教訓變成下次的規矩:改價需人工核准、系統擋售價低於成本;庫存歸零自動停接單;AI 建議要附依據才採用;資料缺漏要明確標記不讓 AI 硬算。規則不用多,3 到 5 條真的有用的就好。',
  '為什麼要規則?每條規則都對應一次今天踩過的雷,同樣的雷以後系統自動擋,你就不用再處理一次。好的團隊不是不出事,是同樣的事不出第二次。',
  '為什麼要寫交接?你可能會想說東西都在我腦袋裡還要寫?要。哪天你請假、換人接手,沒有一頁交接整套就只有你能跑。寫下來,它才是公司的,不是你的。',
  '貼這段,用 AI 把今天的處理紀錄整理成一頁交接:端到端流程、AI 在哪幫忙跟什麼情況不該信、人工接手的地方、提煉的治理規則,你再校對。拿到一頁能交接能 Demo 的說明,M14 核心產出就完成。',
  '最後排一條固定的 Demo 路線:品牌站、核心流程、AI 如何輔助、一個異常與處理、已知限制。固定順序你才不會臨場慌。',
  '一個保險:Demo 一定要有截圖備援。你可能會想說現場網路斷掉、AI 突然很慢怎麼辦?先把每一步截圖或錄一段影片,真的連不上你也能照著截圖講完,不會開天窗。正式 Demo 前先準備好網路掛掉也能講完的版本。',
  '今天、也是整個課程最重要的一句:AI 幫你更快止血、判斷、溝通;但喊停跟拍板,永遠是人。從 M12 到 M14,這條紅線沒變過:AI 加速,人負責。',
  '收尾,M14 完課三件事:五步處理法先止血再找原因、每一步用 AI、提煉規則加交接。',
  '回頭看 M14 全圖:跑正常一天、看一年趨勢、五步處理異常、提煉規則、一頁交接。會營運、會處理突發、能交接,你把一間公司顧起來了。',
  '再往前看整條路,這 32 小時:M12 會分析的助理、M13 公開的網站、M14 用 AI 營運的公司。三個模組各自能用,合起來是一整套。',
  '回家作業:完成一頁式交接說明,排好一條固定 Demo 路線。選做是整理 Demo 備援,萬一網路不穩也能展示。',
  '好,到這裡,U12 到 U14 全部完課了。你做到了:一個會分析的助理、一個公開的網站、一間用 AI 營運的公司。從完全零基礎,到能用 AI 做出會運作、能上線、可營運的成果,這就是 vibe coding。辛苦了,恭喜你們!',
];
export default [
  Cover, Recall, Outcome, Why, Roadmap,
  Sec1, C1Analogy, C1Five, C1Order, C1AI, C1Human,
  Sec2, C2Head, C2Three, C2WhyThree, C2Stop, C2R1, C2R1Read, C2R2, C2R2Read, C2R3, C2R3Read, C2See, C2Note, C2Pit, Break1,
  Sec3, C3Rules, C3RulesWhy, C3Handover, C3Prompt, C3Demo, C3Backup,
  Punchline, Recap, ModuleMap, CourseMap, Homework, Finale,
] satisfies Page[];
