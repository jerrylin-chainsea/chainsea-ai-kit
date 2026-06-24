import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';
import autoopsShot from './assets/autoops.png';
import shopShot from './assets/shop-m14.png';

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
  <div style={{ ...fill, background: '#0e7a52' }}><div style={{ ...pad, color: '#fff' }}><span style={{ fontFamily: mono, fontSize: 26, letterSpacing: '0.2em', opacity: 0.85 }}>BREAK</span><div style={{ fontSize: 118, fontWeight: 900, marginTop: 16 }}>休息 10 分鐘</div><div style={{ fontSize: 35, opacity: 0.9, marginTop: 22 }}>回來把紅線寫成治理規則,完課。</div></div></div>
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
// 自動處置卡:事件 → 止血(自動) → 後續(低風險自動 / 高風險升級給人)
const AutoCase = ({ tag, sit, stop, follow, risk }: { tag: string; sit: any; stop: any; follow: any; risk: 'low' | 'high' }) => {
  const high = risk === 'high';
  return (
    <div style={fill}><div style={pad}><Eyebrow>{tag}</Eyebrow><Title size={44}>{sit}</Title>
      <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 24, maxWidth: 1500 }}>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '16px 24px' }}>
          <span style={{ fontFamily: mono, fontSize: 20, color: OK, fontWeight: 800, whiteSpace: 'nowrap' }}>① 止血(自動)</span><span style={{ fontSize: 28 }}>{stop}</span></div>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', background: high ? '#fff7f4' : '#eaf6f0', border: `1px solid ${high ? '#f3d0c2' : '#bfe6d4'}`, borderRadius: 14, padding: '16px 24px' }}>
          <span style={{ fontFamily: mono, fontSize: 20, color: high ? RED : OK, fontWeight: 800, whiteSpace: 'nowrap' }}>② {high ? '高風險' : '低風險'}</span>
          <span style={{ fontSize: 28 }}>{follow}<O>{high ? ' → ⏫ 升級給人核准' : ' → 自動處置 ✓'}</O></span></div>
      </div>
    </div><Foot label={`U14 · 課2 · ${tag}`} /></div>
  );
};

// ── 開場 ──
const Cover: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>U14 · 第 2 堂 / 共 2 堂 · 4 小時 · 全課程收尾</Eyebrow>
    <div className="ts-rise" style={{ marginTop: 30 }}><Title size={88}>讓 AI 自己顧店:<br />自動處置,紅線你來劃</Title><div style={{ marginTop: 22 }}><Lead>開店一定會出狀況。今天讓 agent <B>自己偵測、自己處置</B>小事,只有高風險才來敲你。這就是 AI 自動經營。</Lead></div></div>
  </div><Foot label="U14 · 課2" /></div>
);
const Recall: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>先接上一堂</Eyebrow><Title size={50}>還記得那個缺料提醒嗎?</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 28 }}>
      <Lead>上一堂跑正常營業日,午餐尖峰跳了<B>泡菜內餡快缺料</B>的提醒,我們說「先記下來」。今天,讓 agent <O>自己把它處理掉</O>。</Lead>
      <FileCard title="上一堂留下的伏筆">{`⚠ 泡菜內餡 剩餘 8% → 今天讓 agent 自動處置`}</FileCard>
    </div>
  </div><Foot label="U14 · 課2 · 回顧" /></div>
);
const Outcome: Page = () => (
  <RealShot img={shopShot} url="stanley-1013.github.io/chainsea-leacture/shop/?mode=m14" eyebrow="今天會做到"
    title="agent 偵測缺料 → 自己動手補貨(不用人決定)" caption="這是真的:小店 M14 模式,監控員偵測、處置員自己走過去處置、日誌記下「已自動補貨」。今天你會做出這個自動經營的閉環。" />
);
const Why: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>先講今天的心法</Eyebrow><Title size={52}>出事先「止血」, 而且 AI 不用等人</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Analogy>像急診:大出血先<B>止血</B>,不會站著研究「為什麼受傷」。差別是 ── 這個急診室,<O>AI 自己就會先止血</O>,不用等你到場。</Analogy>
      <Think q={<>「讓 AI 自己動手,不會出事嗎?」</>} a={<>關鍵在<B>紅線</B>:小事(補貨、撤錯價、暫停)讓它自動做;會花大錢、對外道歉、動到顧客的,自動<O>升級給人核准</O>。紅線你來劃。</>} />
    </div>
  </div><Foot label="U14 · 課2 · 心法" /></div>
);
const Roadmap: Page = () => {
  const items = [['段 1', 'AI 自動經營是什麼', '0:15', '手動'], ['段 2', '跑 auto-ops + 三種狀況', '1:00', 'AI'], ['段 3', '把紅線寫成治理 + 交接', '3:00', 'AI']];
  return (
    <div style={fill}><div style={pad}><Eyebrow>今天的路線 · 三段 + 完課</Eyebrow><Title>懂自動經營 → 跑給你看 → 劃紅線交接</Title>
      <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22, marginTop: 44 }}>
        {items.map(([a, b, t], i) => <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '26px 24px' }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontFamily: mono, fontSize: 21, color: C.orange, fontWeight: 700 }}>{a}</span><span style={{ fontFamily: mono, fontSize: 18, color: C.faint }}>{t}</span></div><div style={{ fontSize: 30, fontWeight: 800, marginTop: 12, lineHeight: 1.2 }}>{b}</div></div>)}
      </div></div><Foot label="U14 · 課2 · 路線" /></div>
  );
};
// ── 段1 自動經營是什麼 ──
const Sec1: Page = () => <Section no="1" title="AI 自動經營是什麼" time="0:15 - 1:00" sub="M12 給建議、人決定;M14 進化成 agent 自己動手。先把這個差別講清楚。" />;
const M12vsM14: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段1 · M12 與 M14 的差別</Eyebrow><Title size={48}>從「給建議」到「自己動手」</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 18, marginTop: 28 }}>
      {[['M12 · 給建議', 'AI 偵測 → 分析 → 給你建議,你做決定(human-in-the-loop)', C.muted],
        ['M14 · 自動經營', 'AI 偵測 → 自動止血 → 小事自己處置、大事升級給人(human-on-the-loop)', C.orange]].map(([a, b, col], i) => (
        <div key={i} style={{ background: C.card, border: `2px solid ${i ? C.orange : C.line}`, borderRadius: 16, padding: '24px 26px' }}><div style={{ fontSize: 30, fontWeight: 800, color: col as string }}>{a}</div><div style={{ fontSize: 26, color: C.muted, marginTop: 12, lineHeight: 1.45 }}>{b}</div></div>
      ))}
    </div>
    <div style={{ marginTop: 22 }}><Harvest>M14 = AI 自己顧店;你的角色從「做決定」變成「設規則、守紅線」。</Harvest></div>
  </div><Foot label="U14 · 課2 · 自動經營" /></div>
);
const FiveLoop: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段1 · agent 自己跑的迴圈</Eyebrow><Title size={46}>每次出狀況,agent 自己跑這五步</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 11, marginTop: 22, maxWidth: 1520 }}>
      {[['① 偵測', '監控員看資料,抓到異常'], ['② 止血', '一律自動:撤下 / 設售完 / 暫停,先讓錯誤停止擴大'], ['③ 定範圍 + 層級', '影響多少、是哪一層(資料 / 流程 / AI)'], ['④ 處置 或 升級', '低風險自己處置;高風險升級給人核准'], ['⑤ 記錄', '寫進自動經營日誌,事件 / 動作 / 是否升級']].map(([a, b], i) => (
        <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '13px 24px' }}><span style={{ flexShrink: 0, fontFamily: mono, fontSize: 23, color: C.orange, fontWeight: 800, width: 150 }}>{a}</span><span style={{ fontSize: 26, lineHeight: 1.35 }}>{b}</span></div>
      ))}
    </div>
    <div style={{ marginTop: 16 }}><Harvest>五步沒變,變的是「誰跑」 ── 以前人跑,現在 agent 自己跑。</Harvest></div>
  </div><Foot label="U14 · 課2 · 自動經營" /></div>
);
const StopAuto: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段1 · 止血一律自動</Eyebrow><Title size={50}>止血,永遠第一,而且自動</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 13, marginTop: 26, maxWidth: 1500 }}>
      {[['對外出錯', '自動把那一頁 / 那則貼文撤下'], ['資料出錯', '自動把出問題的品項設「售完 / 停用」'], ['AI 出錯', '自動暫停採用那個建議']].map(([a, b], i) => (
        <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'center', background: '#eaf6f0', border: '1px solid #bfe6d4', borderRadius: 14, padding: '15px 24px' }}><span style={{ flexShrink: 0, width: 32, height: 32, borderRadius: '50%', background: OK, color: '#fff', display: 'grid', placeContent: 'center', fontSize: 19, fontWeight: 800 }}>✓</span><span style={{ fontFamily: mono, fontSize: 21, fontWeight: 700, width: 140 }}>{a}</span><span style={{ fontSize: 26 }}>{b}</span></div>
      ))}
    </div>
    <div style={{ marginTop: 18 }}><Lead>止血都是<B>低風險、可逆</B>的動作(先停下來),所以放心讓 agent 自動做 ── 你在查原因的每一分鐘,它已經先把血止住了。</Lead></div>
  </div><Foot label="U14 · 課2 · 自動經營" /></div>
);
const RiskRoute: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段1 · 護欄:誰自動、誰升級</Eyebrow><Title size={48}>低風險自己做,高風險升級給人</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 18, marginTop: 28 }}>
      <div style={{ background: '#eaf6f0', border: '1px solid #bfe6d4', borderRadius: 16, padding: '22px 26px' }}><div style={{ fontSize: 28, fontWeight: 800, color: OK }}>低風險 → 自動處置</div><div style={{ fontSize: 25, color: C.muted, marginTop: 10, lineHeight: 1.5 }}>補貨、加開外送、要求 AI 附依據 ── 內部、可逆、不花大錢。</div></div>
      <div style={{ background: '#fff7f4', border: '1px solid #f3d0c2', borderRadius: 16, padding: '22px 26px' }}><div style={{ fontSize: 28, fontWeight: 800, color: RED }}>高風險 → 升級給人</div><div style={{ fontSize: 25, color: C.muted, marginTop: 10, lineHeight: 1.5 }}>對顧客道歉 / 補償、決定退款政策、花大錢 ── 自動排隊等你核准。</div></div>
    </div>
    <div style={{ marginTop: 22 }}><Harvest>風險判斷用「規則」決定,不交給 AI ── 紅線是你劃的、可稽核。</Harvest></div>
  </div><Foot label="U14 · 課2 · 自動經營" /></div>
);
const HumanOnLoop: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段1 · 你的新角色</Eyebrow><Title size={50}>從「在迴圈裡」變成「在迴圈上」</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Think q={<>「那人不就沒事做了?」</>} a={<>不是。你不再<B>每件小事都決定</B>(human-in-the-loop),改成<O>設規則、守紅線、看日誌、核准大事</O>(human-on-the-loop)。一個人能顧的店,變多了。</>} />
      <Harvest>AI 自己顧店,你站在迴圈上監督,只在大事拍板。</Harvest>
    </div>
  </div><Foot label="U14 · 課2 · 自動經營" /></div>
);
// ── 段2 跑 auto-ops + 三種狀況 ──
const Sec2: Page = () => <Section no="2" title="跑一次「AI 自動經營」" time="1:00 - 3:00" sub="不是讀桌遊卡,是跑一個會自己處置的程式。看它怎麼分流三種狀況。" />;
const RunHead: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段2 · 動手(可執行)</Eyebrow><Title size={46}>跑 auto-ops:讓 agent 自己處置一整班</Title>
    <div className="ts-rise" style={{ marginTop: 22 }}><PromptCard size={26}>{`# 在 m14-auto-ops-starter 資料夾(或打開 M14 自動經營筆記本)
python run.py`}</PromptCard></div>
    <div style={{ marginTop: 16 }}><Lead>它讀一串事件,每件<B>自己偵測 → 止血 → 低風險處置 / 高風險升級</B>,印出自動經營日誌。純規則,不用金鑰也能跑。</Lead></div>
  </div><Foot label="U14 · 課2 · 動手" /></div>
);
const AutoopsReal: Page = () => (
  <RealShot img={autoopsShot} url="終端機 · python run.py（M14 自動經營）" eyebrow="段2 · 真實輸出"
    title="agent 自己跑完一整班的日誌" caption="這是真的執行輸出:每件狀況都先自動止血,缺料 / 爆單自動處置,錯價 / 退款異常自動升級給人核准。最後統計自動幾件、升級幾件。" />
);
const Three: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>三種狀況 · 總覽</Eyebrow><Title size={48}>三種狀況,看 agent 怎麼分流</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 13, marginTop: 26, maxWidth: 1500 }}>
      {[['對外品牌:價格標錯', '止血自動,後續高風險 → 升級', RED], ['營運資料:爆單缺料', '止血 + 補貨,全自動', OK], ['AI 自己:建議失準', '暫停採用 + 要求依據,自動', OK]].map(([a, b, col], i) => (
        <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '15px 24px' }}><span style={{ fontFamily: mono, fontSize: 21, color: C.orange, fontWeight: 800, width: 270 }}>{a}</span><span style={{ fontSize: 26, color: col as string, fontWeight: 600 }}>{b}</span></div>
      ))}
    </div>
  </div><Foot label="U14 · 課2 · 三種狀況" /></div>
);
const R1: Page = () => (
  <AutoCase tag="第一輪 · 對外品牌(錯價)" sit="網站把價格標錯了" stop={<>自動把錯價那頁<O>撤下</O>(止血是可逆的,放心自動)。</>}
    follow={<>發更正與補償(對外、花錢)</>} risk="high" />
);
const R1Read: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>第一輪 · 為什麼後續要升級</Eyebrow><Title size={48}>止血自動,但「對外道歉 + 補償」要人</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 26 }}>
      <Lead>撤下錯價是<B>止血</B> ── 低風險、可逆,自動做。但要不要補償、怎麼對顧客講,<O>動到錢、動到品牌</O>,這種 agent 自動<B>升級給你核准</B>。</Lead>
      <SuccessRow>自動撤頁止血 + 升級「補償方案」給人 = 第一輪正確分流。</SuccessRow>
    </div>
  </div><Foot label="U14 · 課2 · 第一輪" /></div>
);
const R2: Page = () => (
  <AutoCase tag="第二輪 · 營運資料(爆單缺料)" sit="某品項暴單,庫存歸零還在接單" stop={<>自動把該品項先設<O>「售完」</O>。</>}
    follow={<>自動補貨 / 加開外送線</>} risk="low" />
);
const R2Read: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>第二輪 · 為什麼可以全自動</Eyebrow><Title size={48}>缺料、爆單,都是內部、可逆的處置</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 26 }}>
      <Lead>設售完、補貨、加開外送 ── 都是<B>內部營運動作</B>,不對外、不需大筆花費、做錯也救得回。所以放心讓 agent <O>自己一路做完</O>,只記一筆日誌。</Lead>
      <Harvest>內部、可逆、不花大錢 = 安全的自動區。</Harvest>
    </div>
  </div><Foot label="U14 · 課2 · 第二輪" /></div>
);
const R3: Page = () => (
  <AutoCase tag="第三輪 · AI 自己(建議失準)" sit="M12 給了一個怪怪的建議" stop={<>自動<O>暫停採用</O>這個 AI 建議。</>}
    follow={<>要求附依據,沒有就不採用</>} risk="low" />
);
const R3Read: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>第三輪 · 呼應 M12 的把關</Eyebrow><Title size={48}>連 AI 自己出包,系統也自動接住</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 26 }}>
      <Lead>這正是 M12 課4 教的把關,現在<B>自動化</B>了:建議沒附依據,系統自動暫停採用、自動要求依據 ── 不用人每次去盯。</Lead>
      <Harvest>把關規則寫進系統,AI 自己出包也牽不動你。</Harvest>
    </div>
  </div><Foot label="U14 · 課2 · 第三輪" /></div>
);
const ShopReal: Page = () => (
  <RealShot img={shopShot} url="stanley-1013.github.io/chainsea-leacture/shop/?mode=m14" eyebrow="三種狀況 · 看它動起來"
    title="小店 M14 模式:agent 自己偵測、自己處置" caption="同一套邏輯的視覺版:監控員偵測缺料、處置員走過去自動補貨、日誌記下『已自動補貨』。高風險時把關員會把它升級給人。" />
);
const Note: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>自動經營日誌</Eyebrow><Title size={48}>每件都自動留一筆(這就是稽核)</Title>
    <div className="ts-rise" style={{ marginTop: 24 }}><FileCard title="auto-ops 日誌（節錄）">{`⚠ 偵測:泡菜內餡 缺料
✓ 止血(自動):設售完   ✓ 已自動:補貨
⚠ 偵測:原味鍋貼 錯價
✓ 止血(自動):撤下錯價頁   ⏫ 升級待人核准:發更正並補償`}</FileCard></div>
    <div style={{ marginTop: 18 }}><Harvest>自動不等於黑箱 ── 每個動作都留痕,你隨時查得到、攔得住。</Harvest></div>
  </div><Foot label="U14 · 課2 · 日誌" /></div>
);
const RulesEdit: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段2 · 換你劃紅線(動手)</Eyebrow><Title size={46}>改一行規則,改變哪些自動、哪些升級</Title>
    <div className="ts-rise" style={{ marginTop: 20 }}><FileCard title="src/rules.py · FOLLOWUP">{`"surge":     ("加開外送線", "low"),   # ← 改成 "high" 就會改走「升級給人」
"wrongprice":("發更正並補償", "high"), # ← 改成 "low" 就會自動處置(慎用!)`}</FileCard></div>
    <div style={{ marginTop: 16 }}><SuccessRow>改 risk 後重跑 run.py,那個狀況就改走「自動」或「升級」= 你劃的紅線生效。</SuccessRow></div>
  </div><Foot label="U14 · 課2 · 動手" /></div>
);
const Pit: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>段2 · 卡住了?</Eyebrow><Title size={48}>兩個常見狀況</Title>
    <div className="ts-rise" style={{ marginTop: 26, maxWidth: 1500 }}><Pitfall items={[['全都變自動 / 全都升級:', '檢查 rules.py 的 risk 是不是都設成同一種;一定要同時有 low 和 high。'], ['不確定某狀況該自動還升級:', '問自己三句:會花大錢?對外?動到顧客?有一個是 → high。']]} /></div>
  </div><Foot label="U14 · 課2 · 動手" /></div>
);
const Break1: Page = () => <BreakSlide />;
// ── 段3 治理 + 交接 ──
const Sec3: Page = () => <Section no="3" title="把紅線寫成治理,寫一頁交接" time="3:00 - 3:50" sub="你劃的紅線,就是治理規則。再用 AI 整理成一頁交接,讓別人也接得住。" />;
const C3Rules: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>治理規則 = 你劃的紅線</Eyebrow><Title size={48}>把紅線變成「下次自動照辦」</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 11, marginTop: 24, maxWidth: 1520 }}>
      {['改價 / 補償需人工核准;系統擋下售價低於成本(自動)。', '庫存歸零,自動停接單與補貨(低風險,自動)。', 'AI 建議沒依據,自動暫停採用(自動)。', '退款政策變更,一律升級給人(高風險)。'].map((t, i) => (
        <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'center', background: C.card, borderLeft: `5px solid ${C.orange}`, border: `1px solid ${C.line}`, borderRadius: 12, padding: '13px 24px' }}><span style={{ fontFamily: mono, fontSize: 24, color: C.orange, fontWeight: 800 }}>{i + 1}</span><span style={{ fontSize: 26, lineHeight: 1.35 }}>{t}</span></div>
      ))}
    </div>
    <div style={{ marginTop: 16 }}><Harvest>規則不用多,3 到 5 條真的有用的紅線就好。</Harvest></div>
  </div><Foot label="U14 · 課2 · 治理" /></div>
);
const C3RulesWhy: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>治理規則 · 為什麼</Eyebrow><Title size={50}>紅線寫進系統,你才能放心放手</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Lead>每條規則都對應一次踩過的雷。<B>紅線寫進規則,agent 以後自動照辦</B>,你才敢讓它自己顧店、自己也不必每次重新慌。</Lead>
      <Harvest>能放手讓 AI 自動經營的前提,是紅線已經寫死。</Harvest>
    </div>
  </div><Foot label="U14 · 課2 · 治理" /></div>
);
const C3Handover: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>交接 · 為什麼要寫</Eyebrow><Title size={50}>交接,是讓別人也能監督這套自動經營</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Think q={<>「都自動了,還要交接?」</>} a={<>更要。別人接手時,得知道<B>哪些自動、哪些升級、紅線在哪、日誌去哪看</B>。寫下來,這套自動經營才是「公司的」,不是「你的」。</>} />
    </div>
  </div><Foot label="U14 · 課2 · 交接" /></div>
);
const C3Prompt: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>一頁交接 · Prompt 卡</Eyebrow><Title size={46}>用 AI 整理成一頁交接</Title>
    <div style={{ marginTop: 18 }}><PromptCard size={24}>{`把我這套 AI 自動經營,整理成一頁交接說明,包含:
1. 自動經營流程(偵測 → 止血 → 處置 / 升級)
2. 哪些狀況自動、哪些升級給人(紅線清單)
3. 日誌與核准佇列在哪看
4. 出事時人要怎麼介入
我再校對。`}</PromptCard></div>
    <div style={{ marginTop: 16 }}><SuccessRow>拿到一頁能交接、能 Demo 的說明 = M14 的核心產出完成。</SuccessRow></div>
  </div><Foot label="U14 · 課2 · 交接" /></div>
);
const C3Demo: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>交接 · Demo 路線</Eyebrow><Title size={48}>排一條固定的展示順序</Title>
    <div className="ts-rise" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 28, maxWidth: 1520 }}>
      {['品牌站', '小店自動經營', '跑 auto-ops 日誌', '一個高風險升級', '紅線與已知限制'].map((t, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 12, padding: '14px 22px', fontSize: 26, fontWeight: 700 }}>{t}</span>
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
  <div style={{ ...fill, background: C.ink, color: '#fff' }}><div style={pad}><Eyebrow>今天 · 最重要的一句</Eyebrow><div style={{ fontSize: 76, fontWeight: 900, lineHeight: 1.2, marginTop: 26, maxWidth: 1580, letterSpacing: '-0.02em' }}>AI 自己顧店,<br /><span style={{ color: C.orange }}>紅線你來劃。</span></div><div style={{ fontSize: 31, color: 'rgba(255,255,255,0.7)', marginTop: 26, maxWidth: 1420, lineHeight: 1.55 }}>小事自動止血、自動處置;會花大錢、動顧客的,自動升級給你 ── 這才是 AI 自動經營,而不是 AI 助理。</div></div><div style={{ position: 'absolute', left: 110, bottom: 44, fontFamily: mono, fontSize: 19, color: 'rgba(255,255,255,0.5)' }}>U14 · 課2 · 記住這句</div></div>
);
const Recap: Page = () => {
  const pts = [['自動經營 = 自己動手', '偵測 → 止血 → 處置 / 升級'], ['低風險自動、高風險升級', 'human-on-the-loop'], ['紅線寫進規則 + 交接', '能放手的前提']];
  return (<div style={fill}><div style={pad}><Eyebrow>M14 完課 · 三件事</Eyebrow><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 34, maxWidth: 1500 }}>{pts.map(([a, b], i) => <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}><span style={{ fontFamily: mono, fontSize: 38, color: C.orange, fontWeight: 800 }}>{String(i + 1).padStart(2, '0')}</span><div><div style={{ fontSize: 40, fontWeight: 800 }}>{a}</div><div style={{ fontSize: 26, color: C.muted, marginTop: 4 }}>{b}</div></div></div>)}</div></div><Foot label="U14 · 課2 · 完課" /></div>);
};
const ModuleMap: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>M14 全模組 · 你學會的營運</Eyebrow><Title size={48}>從顧店,到讓 AI 自己顧店</Title>
    <div className="ts-rise" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 30, maxWidth: 1540 }}>
      {['跑正常一天', '看一年趨勢', 'AI 自動處置異常', '劃紅線治理', '一頁交接'].map((t, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 12, padding: '16px 24px', fontSize: 26, fontWeight: 700 }}>{t}</span>
          {i < 4 && <span style={{ color: C.orange, fontSize: 30, fontWeight: 800 }}>→</span>}
        </div>
      ))}
    </div>
    <div style={{ marginTop: 26 }}><Harvest>會營運、能放手讓 AI 自動經營、還守得住紅線 ── 你把一間公司顧起來了。</Harvest></div>
  </div><Foot label="U14 · 課2 · M14 全圖" /></div>
);
const CourseMap: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>U12 - U14 · 整條路</Eyebrow><Title size={50}>你走完的這 32 小時</Title>
    <div className="ts-rise" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 32, maxWidth: 1560 }}>
      {[['M12', '會分析、給建議的助理'], ['M13', '公開的網站'], ['M14', '會自己顧店的公司']].map(([a, b], i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ background: '#fff', border: `2px solid ${C.orange}`, borderRadius: 14, padding: '18px 26px' }}><div style={{ fontFamily: mono, fontSize: 20, color: C.orange, fontWeight: 800 }}>{a}</div><div style={{ fontSize: 28, fontWeight: 700, marginTop: 4 }}>{b}</div></div>
          {i < 2 && <span style={{ color: C.orange, fontSize: 32, fontWeight: 800 }}>→</span>}
        </div>
      ))}
    </div>
    <div style={{ marginTop: 28 }}><Harvest>從 AI 給建議,到 AI 自己動手 ── 三個模組,一條進化的線。</Harvest></div>
  </div><Foot label="U14 · 課2 · 全課程" /></div>
);
const Homework: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>回家作業 · 輕量,只要一件</Eyebrow><Title>劃一條你自己的紅線</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 36, maxWidth: 1480 }}>
      <div style={{ background: C.card, border: `2px solid ${C.orange}`, borderRadius: 16, padding: '24px 34px' }}><span style={{ fontFamily: mono, fontSize: 22, color: C.orange, fontWeight: 700 }}>必做</span><div style={{ fontSize: 34, marginTop: 8, lineHeight: 1.4 }}>在 <B>rules.py</B> 改一條紅線(把某狀況改自動或升級),重跑 run.py 看日誌變化。</div></div>
      <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '20px 34px' }}><span style={{ fontFamily: mono, fontSize: 22, color: C.muted, fontWeight: 700 }}>選做</span><div style={{ fontSize: 28, marginTop: 6, color: C.muted, lineHeight: 1.4 }}>用 AI 把你的自動經營整理成一頁交接 + 排一條 Demo 路線。</div></div>
    </div></div><Foot label="U14 · 課2 · 回家作業" /></div>
);
const Finale: Page = () => (
  <div style={{ ...fill, background: C.ink, color: '#fff' }}><div style={pad}><Eyebrow>U12 - U14 · 全部完課</Eyebrow>
    <Title size={54}>你做到了:一個會分析的助理、<br />一個公開的網站、<br />一間<span style={{ color: C.orange }}>會自己顧店的公司</span>。</Title>
    <div style={{ fontSize: 33, color: 'rgba(255,255,255,0.72)', marginTop: 30, lineHeight: 1.5, maxWidth: 1400 }}>從完全零基礎,到能用 AI 做出會運作、能上線、會自己經營的成果。這就是 vibe coding。辛苦了,恭喜你們!</div>
  </div><div style={{ position: 'absolute', left: 110, bottom: 44, fontFamily: mono, fontSize: 19, color: 'rgba(255,255,255,0.5)' }}>U14 · 課2 · 全課程完課</div></div>
);

export const meta: SlideMeta = { title: 'U14 課2：AI 自動經營 + 交接(全課程收尾)', createdAt: '2026-06-22T11:40:00.000Z' };
export const notes: (string | undefined)[] = [
  '各位同學,最後一堂課。上一堂跑了正常營業日,但開店一定會出狀況。今天我們讓 AI 不只給建議,而是自己動手顧店:偵測、自動止血、小事自己處置、大事升級給你。這就是 AI 自動經營。',
  '先接上一堂。還記得那個缺料提醒嗎?午餐尖峰跳了泡菜內餡快缺料,當時說先記下來。今天讓 agent 自己把它處理掉。',
  '先給大家看今天會做到什麼。這是真的:小店 M14 模式,監控員偵測缺料、處置員自己走過去補貨、日誌記下已自動補貨。今天你會做出這個自動經營的閉環。',
  '先講心法。出事先止血,而且 AI 不用等人。打個比方像急診,大出血先止血;差別是這個急診室 AI 自己就會先止血,不用等你到場。你可能會想說讓 AI 自己動手不會出事嗎?關鍵在紅線:小事補貨撤錯價暫停讓它自動做,會花大錢對外道歉動到顧客的自動升級給人核准,紅線你來劃。',
  '看路線。三段:懂 AI 自動經營是什麼、跑 auto-ops 看三種狀況、把紅線寫成治理加交接。',
  '第一段,AI 自動經營是什麼。M12 給建議人決定,M14 進化成 agent 自己動手,先把差別講清楚。',
  'M12 與 M14 的差別:M12 是 AI 偵測分析給建議、你做決定,human-in-the-loop;M14 是 AI 偵測、自動止血、小事自己處置大事升級給人,human-on-the-loop。M14 就是 AI 自己顧店,你的角色從做決定變成設規則守紅線。',
  'agent 自己跑的迴圈,每次出狀況跑這五步:一偵測,監控員抓異常;二止血,一律自動撤下設售完暫停;三定範圍層級;四處置或升級,低風險自己做高風險升級;五記錄,寫進日誌。五步沒變,變的是誰跑,以前人跑現在 agent 自己跑。',
  '止血永遠第一,而且自動。對外出錯自動撤下、資料出錯自動設售完、AI 出錯自動暫停採用。止血都是低風險可逆的動作,先停下來,所以放心讓 agent 自動做,你查原因的每一分鐘它已經先止住血。',
  '護欄:誰自動誰升級。低風險自動處置,補貨加開外送要求依據,內部可逆不花大錢;高風險升級給人,對顧客道歉補償決定退款政策花大錢,自動排隊等你核准。風險判斷用規則決定不交給 AI,紅線是你劃的可稽核。',
  '你的新角色:從在迴圈裡變成在迴圈上。你可能會想說那人不就沒事做?不是,你不再每件小事都決定,改成設規則守紅線看日誌核准大事,human-on-the-loop。一個人能顧的店變多了。AI 自己顧店,你站在迴圈上監督只在大事拍板。',
  '第二段,跑一次 AI 自動經營。不是讀桌遊卡,是跑一個會自己處置的程式,看它怎麼分流三種狀況。',
  '動手:在 m14-auto-ops-starter 跑 python run.py,或打開 M14 自動經營筆記本。它讀一串事件,每件自己偵測止血、低風險處置高風險升級,印出日誌。純規則不用金鑰也能跑。',
  '給大家看真的執行輸出。每件狀況都先自動止血,缺料爆單自動處置,錯價退款異常自動升級給人核准,最後統計自動幾件升級幾件。',
  '三種狀況總覽,看 agent 怎麼分流:對外品牌價格標錯,止血自動後續高風險升級;營運資料爆單缺料,止血加補貨全自動;AI 自己建議失準,暫停加要求依據自動。',
  '第一輪,對外品牌錯價。自動把錯價那頁撤下,止血可逆放心自動;後續發更正與補償,對外又花錢,高風險升級給人核准。',
  '為什麼後續要升級?撤下錯價是止血,低風險可逆自動做;但要不要補償怎麼對顧客講,動到錢動到品牌,agent 自動升級給你核准。自動撤頁止血加升級補償方案給人,第一輪就正確分流。',
  '第二輪,營運資料爆單缺料。自動把該品項先設售完,後續自動補貨加開外送線,全自動。',
  '為什麼可以全自動?設售完補貨加開外送都是內部營運動作,不對外不需大筆花費做錯也救得回。放心讓 agent 自己一路做完,只記一筆日誌。內部可逆不花大錢就是安全的自動區。',
  '第三輪,AI 自己建議失準。自動暫停採用這個建議,後續要求附依據沒有就不採用,自動。',
  '第三輪呼應 M12 的把關,現在自動化了:建議沒附依據系統自動暫停採用自動要求依據,不用人每次去盯。把關規則寫進系統,AI 自己出包也牽不動你。',
  '看它動起來。小店 M14 模式同一套邏輯的視覺版:監控員偵測缺料、處置員走過去自動補貨、日誌記下已自動補貨;高風險時把關員把它升級給人。',
  '自動經營日誌,每件都自動留一筆,這就是稽核。偵測缺料、自動止血設售完、已自動補貨;偵測錯價、自動撤頁、升級待人核准發更正補償。自動不等於黑箱,每個動作都留痕,你隨時查得到攔得住。',
  '換你劃紅線,動手。打開 src/rules.py,把某狀況的 risk 從 low 改 high 就會改走升級,從 high 改 low 就會自動處置但慎用。改完重跑 run.py,那個狀況就改走自動或升級,你劃的紅線生效。',
  '卡住:全都變自動或全都升級,檢查 rules.py 的 risk 是不是都設成同一種,一定要同時有 low 跟 high;不確定某狀況該自動還升級,問三句會花大錢嗎對外嗎動到顧客嗎,有一個是就 high。好,休息十分鐘。',
  '休息十分鐘,回來把紅線寫成治理規則,寫一頁交接,完課。',
  '回來了。第三段,把紅線寫成治理,寫一頁交接。你劃的紅線就是治理規則,再用 AI 整理成一頁交接讓別人接得住。',
  '治理規則就是你劃的紅線:改價補償需人工核准、系統擋售價低於成本;庫存歸零自動停接單補貨;AI 建議沒依據自動暫停採用;退款政策變更一律升級給人。規則不用多,3 到 5 條真的有用的紅線就好。',
  '為什麼要規則?每條規則對應一次踩過的雷。紅線寫進規則 agent 以後自動照辦,你才敢讓它自己顧店、自己也不必每次重新慌。能放手讓 AI 自動經營的前提,是紅線已經寫死。',
  '為什麼要交接?你可能會想說都自動了還要交接?更要。別人接手得知道哪些自動哪些升級紅線在哪日誌去哪看。寫下來這套自動經營才是公司的不是你的。',
  '貼這段,用 AI 把你的自動經營整理成一頁交接:自動經營流程、哪些自動哪些升級的紅線清單、日誌與核准佇列在哪看、出事時人怎麼介入,你再校對。拿到一頁能交接能 Demo 的說明,M14 核心產出就完成。',
  '最後排一條固定的 Demo 路線:品牌站、小店自動經營、跑 auto-ops 日誌、一個高風險升級、紅線與已知限制。固定順序你才不會臨場慌。',
  '一個保險,Demo 一定要有截圖備援。你可能會想說現場網路斷掉 AI 很慢怎麼辦?先把每一步截圖或錄影,真的連不上你也能照著截圖講完不會開天窗。正式 Demo 前先準備好網路掛掉也能講完的版本。',
  '今天也是整個課程最重要的一句:AI 自己顧店,紅線你來劃。小事自動止血自動處置,會花大錢動顧客的自動升級給你,這才是 AI 自動經營而不是 AI 助理。',
  '收尾,M14 完課三件事:自動經營就是自己動手偵測止血處置升級、低風險自動高風險升級的 human-on-the-loop、紅線寫進規則加交接是能放手的前提。',
  '回頭看 M14 全圖:跑正常一天、看一年趨勢、AI 自動處置異常、劃紅線治理、一頁交接。會營運能放手讓 AI 自動經營還守得住紅線,你把一間公司顧起來了。',
  '再往前看整條路這 32 小時:M12 會分析給建議的助理、M13 公開的網站、M14 會自己顧店的公司。從 AI 給建議到 AI 自己動手,三個模組一條進化的線。',
  '回家作業:在 rules.py 改一條紅線重跑看日誌變化。選做是用 AI 整理一頁交接加排 Demo 路線。',
  '好,到這裡 U12 到 U14 全部完課了。你做到了:會分析的助理、公開的網站、會自己顧店的公司。從零基礎到能用 AI 做出會運作能上線會自己經營的成果,這就是 vibe coding。辛苦了,恭喜你們!',
];
export default [
  Cover, Recall, Outcome, Why, Roadmap,
  Sec1, M12vsM14, FiveLoop, StopAuto, RiskRoute, HumanOnLoop,
  Sec2, RunHead, AutoopsReal, Three, R1, R1Read, R2, R2Read, R3, R3Read, ShopReal, Note, RulesEdit, Pit, Break1,
  Sec3, C3Rules, C3RulesWhy, C3Handover, C3Prompt, C3Demo, C3Backup,
  Punchline, Recap, ModuleMap, CourseMap, Homework, Finale,
] satisfies Page[];
