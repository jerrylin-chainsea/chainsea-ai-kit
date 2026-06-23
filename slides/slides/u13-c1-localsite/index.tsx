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
if (typeof document !== 'undefined' && !document.getElementById('ts-u13c1')) { const el = document.createElement('style'); el.id = 'ts-u13c1'; el.textContent = css; document.head.appendChild(el); }
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
  <div style={{ background: '#fbf3ee', border: '1px solid #f3d6c4', borderRadius: 16, padding: '22px 30px', maxWidth: 1480 }}><div style={{ fontFamily: mono, fontSize: 21, color: C.orange, fontWeight: 700, marginBottom: 8 }}>打個比方 🏪</div><div style={{ fontSize: 31, color: C.ink, lineHeight: 1.55 }}>{children}</div></div>
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
  <div><div style={{ display: 'flex', alignItems: 'center', gap: 16 }}><Eyebrow>案例 {no}</Eyebrow><span style={{ fontFamily: mono, fontSize: 19, color: C.muted }}>約 {time}</span><CaseTag kind={kind} /></div><div style={{ fontSize: size, fontWeight: 800, letterSpacing: '-0.02em', marginTop: 14, lineHeight: 1.16 }}>{title}</div></div>
);
const PromptCard = ({ children, size = 26 }: { children: any; size?: number }) => (
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
  <div style={{ ...fill, background: '#0e7a52' }}><div style={{ ...pad, color: '#fff' }}><span style={{ fontFamily: mono, fontSize: 26, letterSpacing: '0.2em', opacity: 0.85 }}>BREAK</span><div style={{ fontSize: 118, fontWeight: 900, marginTop: 16 }}>休息 10 分鐘</div><div style={{ fontSize: 35, opacity: 0.9, marginTop: 22 }}>回來用 AI 把素材整理成文章大綱。</div></div></div>
);
const Browser = ({ url, children }: { url: string; children: any }) => (
  <div style={{ background: '#fff', border: `1px solid ${C.line}`, borderRadius: 14, overflow: 'hidden', boxShadow: '0 18px 50px -28px rgba(30,30,40,0.4)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 16px', background: '#f0f2f5', borderBottom: `1px solid ${C.line}` }}>{['#ff5f57', '#febc2e', '#28c840'].map((c, i) => <span key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />)}<span style={{ fontFamily: mono, fontSize: 16, color: C.faint, marginLeft: 8 }}>{url}</span></div>
    {children}
  </div>
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
    <div style={{ marginTop: 18, maxWidth: 1540 }}><Browser url={url}><img src={img} alt={title} style={{ display: 'block', width: '100%', maxHeight: 520, objectFit: 'cover', objectPosition: 'top' }} /></Browser></div>
    <div style={{ fontSize: 25, color: C.muted, marginTop: 14 }}>{caption}</div>
  </div><Foot label="U13 · 課1 · 真實成果" /></div>
);

// ── 開場 ──
const Cover: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>U13 · 第 1 堂 / 共 2 堂 · 4 小時</Eyebrow>
    <div className="ts-rise" style={{ marginTop: 30 }}><Title size={104}>做一個<br />屬於你的網站</Title><div style={{ marginTop: 22 }}><Lead>今天先在<B>自己電腦上</B>看到它;下一堂讓它公開上線、能放進履歷。一樣是貼跟點。</Lead></div></div>
  </div><Foot label="U13 · 課1" /></div>
);
const Recall: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>從 M12 走到 M13</Eyebrow><Title size={50}>換一個方向</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 28, maxWidth: 1480 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
        <span style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 12, padding: '14px 24px', fontSize: 28, fontWeight: 700 }}>M12 · 對內的營運助理</span>
        <span style={{ color: C.orange, fontSize: 30, fontWeight: 800 }}>→</span>
        <span style={{ background: '#fff', border: `2px solid ${C.orange}`, borderRadius: 12, padding: '14px 24px', fontSize: 28, fontWeight: 700, color: C.orange }}>M13 · 對外的個人網站</span>
      </div>
      <Lead>前面做的是<B>幫你做事</B>的助理;這個模組做的是<B>代表你</B>的門面。技巧一樣:用講的,AI 做。</Lead>
    </div>
  </div><Foot label="U13 · 課1 · 回顧" /></div>
);
const Outcome: Page = () => (
  <RealShot img={brandShot} url="本機預覽(只有你看得到)" eyebrow="下課時你會有"
    title="一個有你品牌的網站(本機先看到)" caption="這是一個做好的範例。今天你會做出你自己的版本,先在本機(自己畫面)預覽;下一堂再公開。" />
);
const Why: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>先講為什麼做這個</Eyebrow><Title size={52}>一個公開網站,是你最好用的名片</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 30 }}>
      <Lead>找工作、接案、介紹你的店,有一個「<B>網址</B>」就是不一樣。而且這個網站,是你<O>用 AI、用講的</O>做出來的。</Lead>
      <Harvest>做完你會有一個能傳給別人的網址,不是一份躺在電腦裡的檔案。</Harvest>
    </div>
  </div><Foot label="U13 · 課1 · 為什麼" /></div>
);
const Roadmap: Page = () => {
  const items = [['案例 1', '先逛一次 GitHub', '0:15', '手動'], ['案例 2', '改標題、顏色、第一篇', '1:00', 'AI'], ['案例 3', '用 AI 整理素材', '2:40', 'AI']];
  return (
    <div style={fill}><div style={pad}><Eyebrow>今天的路線 · 三個案例 + 收束</Eyebrow><Title>從零,到本機看得到</Title>
      <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22, marginTop: 44 }}>
        {items.map(([a, b, t, k], i) => <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '26px 24px' }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontFamily: mono, fontSize: 21, color: C.orange, fontWeight: 700 }}>{a}</span><span style={{ fontFamily: mono, fontSize: 18, color: C.faint }}>{t}</span></div><div style={{ fontSize: 30, fontWeight: 800, marginTop: 12, lineHeight: 1.25 }}>{b}</div><div style={{ marginTop: 14 }}><CaseTag kind={k as any} /></div></div>)}
      </div></div><Foot label="U13 · 課1 · 路線" /></div>
  );
};
// ── 段1 逛 GitHub ──
const Sec1: Page = () => <Section no="1" title="先自己逛一次 GitHub" time="0:15 - 1:00" sub="這個先手動。你親手點一次,知道 repo 和環境長怎樣,之後就不會迷路。" />;
const C1Head: Page = () => (
  <div style={fill}><div style={pad}><CaseHead no="1" time="0:15 - 1:00" kind="手動" title="親手點一次:複製範本、開出環境" />
    <div className="ts-rise" style={{ marginTop: 34 }}><Lead>這個案例不用 AI,你自己點。先親手走一次,知道東西放哪,之後做起來才有安全感。</Lead></div>
  </div><Foot label="U13 · 課1 · 案例1" /></div>
);
const C1Concept: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 1 · 兩個新名詞</Eyebrow><Title size={48}>先認識兩個字就好</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 22, marginTop: 30 }}>
      {[['Repo(倉庫)', '放你網站所有檔案的地方。像一個在網路上的資料夾。'], ['Codespaces(雲端環境)', '在瀏覽器裡幫你開好的「電腦」,不用在自己機器裝東西。']].map(([a, b], i) => (
        <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '28px 30px' }}><div style={{ fontSize: 34, fontWeight: 800, color: C.orange }}>{a}</div><div style={{ fontSize: 27, color: C.muted, marginTop: 12, lineHeight: 1.45 }}>{b}</div></div>
      ))}
    </div>
    <div style={{ marginTop: 22 }}><Harvest>就這兩個字,其他名詞今天都先不用管。</Harvest></div>
  </div><Foot label="U13 · 課1 · 案例1" /></div>
);
const C1Browse: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 700px', gap: 50, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}><div><Eyebrow>案例 1 · 範本頁長怎樣</Eyebrow><Title size={44}>一個專案頁,只看三塊</Title></div><Lead>打開範本連結,你會看到一個 GitHub 專案頁。先認三塊就好:<B>名稱、檔案清單、綠色 Code 鈕</B>。</Lead></div>
    <div className="ts-rise"><FileCard title="github.com · 範本專案頁">{`my-brand-site            ← 名稱
─────────────────────────
posts/    文章
public/   圖片
config    設定
[ <> Code ]              ← 綠色按鈕`}</FileCard></div>
  </div><Foot label="U13 · 課1 · 案例1" /></div>
);
const C1Why: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 1 · 為什麼先手動</Eyebrow><Title size={50}>先親手走,之後才不會慌</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Think q={<>「直接叫 AI 全部做好不就好了?」</>} a={<>可以,但你會<B>不知道東西在哪</B>。先親手點一次,之後 AI 改了什麼、檔案在哪,你都看得懂、找得到。</>} />
      <Lead>這一次手動,是為了之後每一次都不慌。</Lead>
    </div>
  </div><Foot label="U13 · 課1 · 案例1" /></div>
);
const C1Step: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 1 · 動作</Eyebrow><Title size={46}>複製範本、開出你的環境</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 24, maxWidth: 1520 }}>
      <Atom n={1} act={<>點老師發的<B>網站範本連結</B>,看到一個 GitHub 專案頁。</>} see="網頁上方有專案名稱。" />
      <Atom n={2} act={<>右上角按 <Key>Fork</Key> → 下一頁按綠色 <Key>Create fork</Key>。</>} see="網址變成「你的帳號 / 專案名」。" />
      <Atom n={3} act={<>按綠色 <Key>&lt;&gt; Code</Key> → 選 <Key>Codespaces</Key> → <Key>Create codespace</Key>。</>} see="瀏覽器開出編輯器、跑進度條。" />
    </div>
    <div style={{ marginTop: 18 }}><SuccessRow>範本在你自己名下、編輯器畫面開起來 = 成功。</SuccessRow></div>
  </div><Foot label="U13 · 課1 · 案例1" /></div>
);
const C1Verify: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 1 · 確認是你的了</Eyebrow><Title size={48}>看這一個地方就知道</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 28 }}>
      <Lead>看網頁<B>左上角的名稱</B>:如果是「<O>你的帳號</O> / 專案名」,就代表這份範本已經是你的了。</Lead>
      <FileCard title="左上角">{`你的帳號 / my-brand-site   = 是你的
老師帳號 / my-brand-site   = 還沒 fork`}</FileCard>
    </div>
  </div><Foot label="U13 · 課1 · 案例1" /></div>
);
const C1Pit: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 1 · 卡住了?</Eyebrow><Title size={48}>兩個常見狀況</Title>
    <div className="ts-rise" style={{ marginTop: 26, maxWidth: 1500 }}><Pitfall items={[['找不到 Fork 按鈕:', '在專案頁右上角那排;手機版可能要點「⋯」展開。'], ['Codespaces 跑很久:', '第一次要一兩分鐘,正常,別關掉分頁。']]} /></div>
  </div><Foot label="U13 · 課1 · 案例1" /></div>
);
// ── 段2 改標題顏色 ──
const Sec2: Page = () => <Section no="2" title="改標題、顏色、本機看到變化" time="1:00 - 2:30" sub="重點觀念:網站背後其實只是文章檔加設定。改了,本機馬上看到。" />;
const C2Head: Page = () => (
  <div style={fill}><div style={pad}><CaseHead no="2" time="1:00 - 2:30" kind="AI" title="貼一段話,把它改成你的、本機預覽" />
    <div className="ts-rise" style={{ marginTop: 34 }}><Lead>現在請 AI 幫你把範本改成你的:換標題、換顏色、改第一篇。改完在本機(你自己畫面上)就看得到。</Lead></div>
  </div><Foot label="U13 · 課1 · 案例2" /></div>
);
const C2Concept: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 降焦慮</Eyebrow><Title size={50}>網站背後,只是文章檔加設定</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Analogy>像<B>佈置一間店面</B>:招牌(標題)、油漆顏色、牆上貼的文章,都是可以換的東西。你不用懂水電,只要說「招牌換我的名字、牆漆成橘色」,AI 就幫你弄。</Analogy>
      <Harvest>改網站 = 換招牌、換油漆、貼文章。沒有魔法。</Harvest>
    </div>
  </div><Foot label="U13 · 課1 · 案例2" /></div>
);
const C2Think: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 先別緊張</Eyebrow><Title size={50}>不用會寫程式</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Think q={<>「做網站不是要會寫程式嗎?」</>} a={<>這個範本,標題在一個設定檔、文章是一篇一篇的檔案、顏色是一行設定。改這些<B>都用講的</B>,AI 動手。</>} />
      <Lead>你會的,還是那句:複製、貼上、按 Enter、看結果。</Lead>
    </div>
  </div><Foot label="U13 · 課1 · 案例2" /></div>
);
const C2Prompt: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · Prompt 卡</Eyebrow><Title size={46}>貼這段,改成你的</Title>
    <div style={{ marginTop: 18 }}><PromptCard size={26}>{`幫我把這個網站範本改成我的:
1. 標題改成「(你的名字 或 你的店名)」。
2. 主色換成我喜歡的顏色(例如溫暖的橘色)。
3. 第一篇文章改成一句自我介紹。
改完幫我在本機開起來,給我預覽網址。`}</PromptCard></div>
    <div style={{ marginTop: 16 }}><Atom n={1} act={<><B>複製 → 貼到對話框 → <Key>Enter</Key></B>。</>} see="它改幾個檔案,給你一個預覽網址。" /></div>
  </div><Foot label="U13 · 課1 · 案例2" /></div>
);
const C2Run: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 它在改的時候</Eyebrow><Title size={48}>它會動哪幾個檔,你看著</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 26, maxWidth: 1520 }}>
      <Atom n={1} act={<>它<B>改設定檔</B>(標題、顏色)。</>} see="檔案樹有檔案的名字變色/有標記。" />
      <Atom n={2} act={<>它<B>改第一篇文章</B>,再<B>把網站在本機開起來</B>。</>} see="它印出一個本機預覽網址。" />
    </div>
    <div style={{ marginTop: 18 }}><Think q={<>「它改一堆檔,我會不會弄壞?」</>} a={<>不會。這是你 fork 的<B>自己那份</B>,改壞了重來就好,不影響任何人。</>} /></div>
  </div><Foot label="U13 · 課1 · 案例2" /></div>
);
const C2See: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '540px 1fr', gap: 54, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}><div><Eyebrow>案例 2 · 你會看到</Eyebrow><Title size={48}>本機網址,打開有你的名字</Title></div><Lead>點它給的<B>預覽網址</B>,標題就是你的、顏色也換了。「本機」= 只有你自己看得到,下一堂才公開。</Lead></div>
    <div className="ts-rise"><Browser url="localhost · 本機預覽"><img src={brandShot} alt="本機預覽" style={{ display: 'block', width: '100%', maxHeight: 460, objectFit: 'cover', objectPosition: 'top' }} /></Browser></div>
  </div><Foot label="U13 · 課1 · 案例2" /></div>
);
const C2Read: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 它到底改了什麼</Eyebrow><Title size={48}>三個改動,對到三個地方</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 26, maxWidth: 1500 }}>
      {[['標題', '設定檔裡的一行 title。'], ['顏色', '設定檔裡的一行主色 color。'], ['第一篇', 'posts 資料夾裡的第一個檔。']].map(([a, b], i) => (
        <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'center', background: C.card, border: `1px solid ${C.line}`, borderRadius: 14, padding: '15px 24px' }}><span style={{ fontFamily: mono, fontSize: 22, color: C.orange, fontWeight: 700, width: 120 }}>{a}</span><span style={{ fontSize: 27 }}>{b}</span></div>
      ))}
    </div>
    <div style={{ marginTop: 18 }}><Harvest>它沒有變魔法,就是改了這三個檔而已。</Harvest></div>
  </div><Foot label="U13 · 課1 · 案例2" /></div>
);
const C2Four: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 之後你只會改這四個地方</Eyebrow><Title size={48}>記住這四個位置</Title>
    <div className="ts-rise" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16, marginTop: 28, maxWidth: 1500 }}>
      {[['文章', '一篇一篇的檔案,想寫什麼就加一篇。'], ['About 頁', '介紹你自己的那一頁。'], ['設定', '網站標題、顏色在這。'], ['圖片', '想放的圖片丟這個資料夾。']].map(([k, v], i) => (
        <div key={i} style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '22px 26px' }}><div style={{ fontSize: 32, fontWeight: 800, color: C.orange }}>{k}</div><div style={{ fontSize: 27, color: C.muted, marginTop: 10, lineHeight: 1.4 }}>{v}</div></div>
      ))}
    </div>
  </div><Foot label="U13 · 課1 · 案例2" /></div>
);
const C2Practice: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 換你練習</Eyebrow><Title size={48}>再改一個地方,看本機有沒有變</Title>
    <div style={{ fontSize: 28, color: C.muted, margin: '18px 0 16px', maxWidth: 1480 }}>貼這句,改一個小東西,確認你會「改 → 看變化」這個循環:</div>
    <PromptCard size={26}>{`幫我把網站底部加一行字:「歡迎跟我聯絡」,
然後重新整理本機預覽。`}</PromptCard>
    <div style={{ marginTop: 16 }}><SuccessRow>本機預覽底部出現那行字 = 你會自己改、自己看了。</SuccessRow></div>
  </div><Foot label="U13 · 課1 · 案例2" /></div>
);
const C2Pit: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 2 · 卡住了?</Eyebrow><Title size={48}>兩個常見狀況</Title>
    <div className="ts-rise" style={{ marginTop: 26, maxWidth: 1500 }}><Pitfall items={[['預覽網址點開空白:', '等幾秒它還在啟動;或看它有沒有要你按「在瀏覽器開啟」。'], ['顏色沒變:', '重新整理頁面;還沒變就跟它說「顏色好像沒換到」。']]} /></div>
  </div><Foot label="U13 · 課1 · 案例2" /></div>
);
const Break1: Page = () => <BreakSlide />;
// ── 段3 NotebookLM 素材 ──
const Sec3: Page = () => <Section no="3" title="用 AI 把素材整理成文章" time="2:40 - 3:30" sub="你不用從零想文章。把你的筆記丟給 AI,讓它幫你整理成大綱,你再修。" />;
const C3Head: Page = () => (
  <div style={fill}><div style={pad}><CaseHead no="3" time="2:40 - 3:30" kind="AI" title="把你的筆記,變成文章大綱" />
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 30 }}>
      <Lead>很多人卡在「不知道寫什麼」。<B>怎麼辦呢?</B> 其實你手上的筆記、心得就是素材。用 AI 幫你整理成大綱,你再挑、再改。</Lead>
    </div>
  </div><Foot label="U13 · 課1 · 案例3" /></div>
);
const C3Concept: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 工具:NotebookLM</Eyebrow><Title size={46}>NotebookLM,就是「讀你資料的 AI」</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Lead>NotebookLM 是 Google 的免費工具:你把<B>筆記、PDF、網頁丟進去</B>,它只根據你給的東西回答、整理,不會亂編。也可以直接用你平常的 AI 對話框。</Lead>
      <Think q={<>「跟一般 AI 有什麼不一樣?」</>} a={<>它<B>只看你丟的資料</B>,比較不會自己亂掰。整理你自己的素材,特別好用。</>} />
    </div>
  </div><Foot label="U13 · 課1 · 案例3" /></div>
);
const C3Why: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 把「寫」變成「挑跟改」</Eyebrow><Title size={50}>你不用會寫文章</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      <Think q={<>「我又不會寫文章…」</>} a={<>你不用會。你<B>提供素材</B>,AI 整理成大綱;你只要刪掉不要的、補一兩句自己的話。寫變成「<O>挑跟改</O>」,簡單多了。</>} />
      <Harvest>AI 給骨架,你加血肉。寫文章從此沒那麼可怕。</Harvest>
    </div>
  </div><Foot label="U13 · 課1 · 案例3" /></div>
);
const C3Prompt: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · Prompt 卡</Eyebrow><Title size={46}>把素材丟進去,請它整理</Title>
    <div style={{ marginTop: 18 }}><PromptCard size={26}>{`這是我最近的學習筆記(把你的內容貼上來)。
請幫我整理成 2 篇文章的大綱,每篇 3 到 5 個重點,
語氣口語、像在跟朋友分享。`}</PromptCard></div>
    <div style={{ marginTop: 16 }}><Atom n={1} act={<><B>把你的筆記貼進去 → 送出</B>。</>} see="它回 2 篇文章的大綱,每篇幾個重點。" /></div>
  </div><Foot label="U13 · 課1 · 案例3" /></div>
);
const C3Run: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 沒有筆記怎麼辦</Eyebrow><Title size={48}>沒素材,就先口述給它</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 28 }}>
      <Lead>沒有現成筆記也沒關係。直接<B>用講的</B>:跟它說你最近學了什麼、做了什麼,它一樣能幫你整理成大綱。</Lead>
      <PromptCard size={26}>{`我最近上了 AI 應用課,學會用 AI 做營運助理跟網站。
幫我從這件事,整理成 2 篇文章的大綱。`}</PromptCard>
    </div>
  </div><Foot label="U13 · 課1 · 案例3" /></div>
);
const C3Out: Page = () => (
  <div style={fill}><div style={{ ...pad, display: 'grid', gridTemplateColumns: '1fr 720px', gap: 50, alignItems: 'center' }}>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}><div><Eyebrow>案例 3 · 你會拿到</Eyebrow><Title size={44}>大概長這樣的大綱</Title></div><Lead>它給你的不是整篇文章,是<B>一個一個重點</B>。你照著挑、照著補就好。</Lead></div>
    <div className="ts-rise"><FileCard title="AI 回的大綱">{`【文章 1】我怎麼用 AI 做營運助理
 - 一開始的問題
 - 三個角色怎麼分工
 - 抓到的第一個異常

【文章 2】做一個自己的網站
 - 為什麼想做
 - 用講的就改好了`}</FileCard></div>
  </div><Foot label="U13 · 課1 · 案例3" /></div>
);
const C3Pick: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 拿到大綱之後</Eyebrow><Title size={48}>挑一個重點,補一句你的話</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 26, maxWidth: 1520 }}>
      <Atom n={1} act={<>從大綱裡<B>挑一個</B>你最有感覺的重點。</>} see="一個你想多講兩句的點。" />
      <Atom n={2} act={<>在它下面<B>補一句你自己的經驗或想法</B>(就一句也好)。</>} see="文章開始有「你的味道」。" />
    </div>
    <div style={{ marginTop: 18 }}><Harvest>AI 給骨架,你加血肉。文章是你的,不是 AI 的。</Harvest></div>
  </div><Foot label="U13 · 課1 · 案例3" /></div>
);
const C3Practice: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>案例 3 · 換你練習</Eyebrow><Title size={48}>把 About 頁寫成一句話</Title>
    <div style={{ fontSize: 28, color: C.muted, margin: '18px 0 16px', maxWidth: 1480 }}>不用長。用這句請 AI 幫你起一個頭,你再改成自己的:</div>
    <PromptCard size={26}>{`幫我寫一句簡短的自我介紹,放在網站的 About 頁,
口語、親切,大概兩三句話就好。`}</PromptCard>
    <div style={{ marginTop: 16 }}><SuccessRow>About 頁有一段像你自己會講的話 = 完成。</SuccessRow></div>
  </div><Foot label="U13 · 課1 · 案例3" /></div>
);
// ── 段4 收束 ──
const Punchline: Page = () => (
  <div style={{ ...fill, background: C.ink, color: '#fff' }}><div style={pad}><Eyebrow>今天記住這句</Eyebrow><div style={{ fontSize: 80, fontWeight: 900, lineHeight: 1.2, marginTop: 26, maxWidth: 1520, letterSpacing: '-0.02em' }}>網站背後,<br />其實只是文章檔加設定。<br /><span style={{ color: C.orange }}>沒那麼可怕。</span></div><div style={{ fontSize: 31, color: 'rgba(255,255,255,0.7)', marginTop: 26, maxWidth: 1380, lineHeight: 1.55 }}>你不是在寫複雜程式,你是在「佈置一間店面」:換招牌、換顏色、貼文章。</div></div><div style={{ position: 'absolute', left: 110, bottom: 44, fontFamily: mono, fontSize: 19, color: 'rgba(255,255,255,0.5)' }}>U13 · 課1 · 記住這句</div></div>
);
const Recap: Page = () => {
  const pts = [['repo / 環境', '先親手逛一次就不迷路'], ['改的是檔案和設定', '不是什麼神秘魔法'], ['素材交給 AI 整理', '寫文章變成挑跟改']];
  return (<div style={fill}><div style={pad}><Eyebrow>今天我們學了三件事</Eyebrow><div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 38, maxWidth: 1500 }}>{pts.map(([a, b], i) => <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}><span style={{ fontFamily: mono, fontSize: 38, color: C.orange, fontWeight: 800 }}>{String(i + 1).padStart(2, '0')}</span><div><div style={{ fontSize: 40, fontWeight: 800 }}>{a}</div><div style={{ fontSize: 27, color: C.muted, marginTop: 4 }}>{b}</div></div></div>)}</div></div><Foot label="U13 · 課1 · 收束" /></div>);
};
const Homework: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>回家作業 · 輕量,只要一件</Eyebrow><Title>寫好 About + 1 篇文章(本機預覽即可)</Title>
    <div className="ts-rise" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 36, maxWidth: 1480 }}>
      <div style={{ background: C.card, border: `2px solid ${C.orange}`, borderRadius: 16, padding: '24px 34px' }}><span style={{ fontFamily: mono, fontSize: 22, color: C.orange, fontWeight: 700 }}>必做</span><div style={{ fontSize: 34, marginTop: 8, lineHeight: 1.4 }}>寫好 <B>About 頁 + 1 篇文章</B>,本機看得到就好。</div></div>
      <div style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 16, padding: '20px 34px' }}><span style={{ fontFamily: mono, fontSize: 22, color: C.muted, fontWeight: 700 }}>選做</span><div style={{ fontSize: 28, marginTop: 6, color: C.muted, lineHeight: 1.4 }}>第 2 篇大綱、放圖片。不要重建網站,沿用今天的。</div></div>
    </div></div><Foot label="U13 · 課1 · 回家作業" /></div>
);
const Next: Page = () => (
  <div style={fill}><div style={pad}><Eyebrow>下一堂預告</Eyebrow><Title size={56}>讓它<span style={{ color: C.orange }}>公開上線</span>,<br />拿到一個真的網址</Title><div style={{ fontSize: 32, color: C.muted, marginTop: 28, lineHeight: 1.5 }}>下一堂把它推上網,還會教你兩種上線方式。有卡住的現在舉手。今天辛苦了。</div></div><Foot label="U13 · 課1 · 下一堂" /></div>
);

export const meta: SlideMeta = { title: 'U13 課1：做一個屬於你的網站(本機)', createdAt: '2026-06-22T11:00:00.000Z' };
export const notes: (string | undefined)[] = [
  '各位同學,進入新的模組 U13。前面 M12 做了營運助理;這個模組換方向,做一個屬於你的網站。今天先在你自己電腦上看到它,下一堂讓它公開上線、能放進履歷。一樣是貼跟點。',
  '先看一下方向的轉換。M12 做的是對內、幫你做事的營運助理;M13 做的是對外、代表你的個人網站。前面是幫你做事,這個是你的門面。技巧一樣:用講的,AI 做。',
  '先給大家看下課時你會有什麼。這是一個做好的範例網站。今天你會做出你自己的版本,先在本機預覽,下一堂再公開。',
  '先講為什麼做這個。一個公開網站是你最好用的名片,找工作、接案、介紹你的店,有一個網址就是不一樣。而且這個網站是你用 AI、用講的做出來的。做完你會有一個能傳給別人的網址,不是躺在電腦裡的檔案。',
  '看路線。三個案例:先自己逛一次 GitHub、用 AI 改標題顏色第一篇、最後用 AI 把素材整理成文章。中間休息一次。',
  '第一段,先自己逛一次 GitHub。這個先手動,你親手點一次,知道東西放哪,之後就不會迷路。',
  '案例一不用 AI,你自己點。先親手走一次,知道 repo 跟環境長怎樣,之後做起來才有安全感。',
  '先認識兩個字:Repo 是放你網站所有檔案的地方,像網路上的資料夾;Codespaces 是瀏覽器裡幫你開好的電腦,不用在自己機器裝東西。就這兩個字,其他名詞今天先不管。',
  '範本頁長怎樣?打開連結你會看到一個 GitHub 專案頁,先認三塊就好:名稱、檔案清單、綠色 Code 鈕。右邊就是它的樣子。',
  '為什麼先手動?你可能會想說直接叫 AI 全部做好不就好?可以,但你會不知道東西在哪。先親手點一次,之後 AI 改了什麼、檔案在哪你都看得懂、找得到。這一次手動,是為了之後每一次都不慌。',
  '動作:點範本連結看到專案頁,右上角 Fork、Create fork,網址變成你的;再點綠色 Code、選 Codespaces、Create codespace,瀏覽器開出編輯器。範本在你名下、編輯器開起來就成功。',
  '怎麼確認是你的了?看網頁左上角的名稱:如果是你的帳號斜線專案名,就代表這份範本已經是你的;如果還是老師帳號,代表還沒 fork 成功。',
  '卡住:找不到 Fork 在右上角那排,手機版點三個點展開;Codespaces 跑久是正常,別關分頁。',
  '第二段,改標題顏色、本機看到變化。重點觀念:網站背後其實只是文章檔加設定,改了本機馬上看到。',
  '案例二,現在請 AI 把範本改成你的:換標題、換顏色、改第一篇,改完在本機你自己畫面就看得到。',
  '幫大家降焦慮。打個比方,像佈置店面:招牌、油漆、牆上貼的文章都能換,你不用懂水電。改網站就是換招牌、換油漆、貼文章,沒有魔法。',
  '先別緊張。你可能會想說做網站不是要會寫程式?這範本標題在設定檔、文章是一篇篇檔案、顏色是一行設定,改這些都用講的、AI 動手。你會的還是那句:複製、貼上、按 Enter、看結果。',
  '貼這段,把標題改成你的名字或店名、主色換你喜歡的、第一篇改成一句自我介紹,改完在本機開起來給預覽網址。複製、貼、Enter,它改幾個檔案給你網址。',
  '它在改的時候會做兩件事:先改設定檔的標題顏色,你會看到檔案樹有檔案被標記;再改第一篇文章、把網站在本機開起來,印出一個本機預覽網址。你可能會想說改一堆檔我會不會弄壞?不會,這是你 fork 的自己那份,改壞重來就好,不影響任何人。',
  '點它給的預覽網址,標題就是你的、顏色也換了。本機的意思是只有你自己看得到,下一堂才公開。',
  '它到底改了什麼?三個改動對到三個地方:標題是設定檔裡一行 title、顏色是設定檔裡一行主色、第一篇是 posts 資料夾裡第一個檔。它沒變魔法,就是改了這三個檔而已。',
  '之後你只會改這四個地方:文章是一篇篇檔案、About 是介紹你的頁、設定放標題跟顏色、圖片丟那資料夾。記住這四個位置就抓得到方向。',
  '換你練習:貼這句,幫網站底部加一行歡迎跟我聯絡,然後重新整理本機預覽。底部出現那行字,代表你會自己改、自己看這個循環了。',
  '卡住:預覽網址空白,等幾秒它還在啟動、或按在瀏覽器開啟;顏色沒變,重新整理,還沒變就跟它說顏色好像沒換到。好,休息十分鐘。',
  '休息十分鐘,回來用 AI 把素材整理成文章大綱。',
  '第三段,用 AI 把素材整理成文章。你不用從零想。把筆記丟給 AI,它整理成大綱,你再修。',
  '案例三,很多人卡在不知道寫什麼,怎麼辦呢?你手上的筆記、心得就是素材。用 AI 幫你整理成大綱,你再挑再改。',
  '介紹一個工具 NotebookLM,它是 Google 的免費工具:你把筆記、PDF、網頁丟進去,它只根據你給的東西整理,不會亂編;也可以直接用你平常的 AI 對話框。你可能會想說跟一般 AI 有什麼不一樣?它只看你丟的資料,比較不會亂掰,整理自己的素材特別好用。',
  '把寫變成挑跟改。你可能會想說我又不會寫文章?你不用會,你提供素材、AI 整理成大綱,你只要刪掉不要的、補一兩句自己的話。寫變成挑跟改,簡單多了。AI 給骨架,你加血肉,寫文章從此沒那麼可怕。',
  '貼這段,把你的學習筆記貼上來,請它整理成 2 篇大綱、每篇 3 到 5 個重點、語氣口語。它回 2 篇文章的大綱、每篇幾個重點。',
  '沒有現成筆記也沒關係,直接用講的:跟它說你最近學了什麼、做了什麼,它一樣能整理成大綱。例如貼這句,我最近上了 AI 應用課學會做營運助理跟網站,幫我整理成 2 篇大綱。',
  '你會拿到大概這樣的大綱,它給的不是整篇文章,是一個一個重點,你照著挑、照著補就好。',
  '拿到大綱之後:從裡面挑一個你最有感覺的重點,在它下面補一句你自己的經驗或想法,就一句也好,文章就開始有你的味道。AI 給骨架,你加血肉,文章是你的。',
  '換你練習,把 About 頁寫成一句話,不用長。貼這句請 AI 幫你起個頭,口語親切兩三句就好,你再改成自己的。About 頁有一段像你自己會講的話就完成。',
  '今天最重要的一句:網站背後其實只是文章檔加設定,沒那麼可怕。你不是在寫複雜程式,你是在佈置一間店面:換招牌、換顏色、貼文章。',
  '收尾三件事:認識 repo 跟環境、改的是檔案跟設定不是魔法、素材交給 AI 整理。',
  '回家作業一件:寫好 About 加 1 篇文章,本機看得到就好。選做是第二篇大綱、圖片。不要回家重建網站,沿用今天的。',
  '下一堂把它公開上線,拿到一個真的網址,還會教你兩種上線方式。有卡住的舉手。今天辛苦了。',
];
export default [
  Cover, Recall, Outcome, Why, Roadmap,
  Sec1, C1Head, C1Concept, C1Browse, C1Why, C1Step, C1Verify, C1Pit,
  Sec2, C2Head, C2Concept, C2Think, C2Prompt, C2Run, C2See, C2Read, C2Four, C2Practice, C2Pit, Break1,
  Sec3, C3Head, C3Concept, C3Why, C3Prompt, C3Run, C3Out, C3Pick, C3Practice,
  Punchline, Recap, Homework, Next,
] satisfies Page[];
