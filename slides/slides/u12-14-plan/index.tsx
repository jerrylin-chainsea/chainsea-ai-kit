import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';

import codexLogo from './assets/openai.svg';
import claudeLogo from './assets/claude.svg';
import geminiLogo from './assets/gemini.svg';

// ─── Panel-tweakable tokens ───────────────────────────────────────────────
export const design: DesignSystem = {
  palette: { bg: '#07090e', text: '#f2f5fc', accent: '#ffb347' },
  fonts: {
    display: '"PingFang TC", "Microsoft JhengHei", system-ui, sans-serif',
    body: '"PingFang TC", "Microsoft JhengHei", system-ui, sans-serif',
  },
  typeScale: { hero: 150, body: 36 },
  radius: 24,
};

// ─── Secondary palette / fonts (outside DesignSystem shape) ────────────────
const C = {
  bg: design.palette.bg,
  ink: design.palette.text,
  amber: design.palette.accent,
  amber2: '#ff8c42',
  teal: '#5be3c0',
  violet: '#9d8cff',
  muted: '#9daac6',
  faint: '#677290',
  surf: 'rgba(255,255,255,0.035)',
  surf2: 'rgba(255,255,255,0.06)',
  border: 'rgba(255,255,255,0.09)',
  glow: 'rgba(255,179,71,0.16)',
};
const mono = '"JetBrains Mono", "SF Mono", ui-monospace, monospace';

const styles = `
@keyframes u-up { from { opacity:0; transform:translateY(28px); filter:blur(6px);} to {opacity:1; transform:none; filter:none;} }
@keyframes u-in { from { opacity:0;} to {opacity:1;} }
@keyframes u-dash { from { stroke-dashoffset: var(--len);} to { stroke-dashoffset: 0;} }
.u-rise > * { animation: u-up .8s cubic-bezier(.16,1,.3,1) both; }
.u-rise > *:nth-child(2){animation-delay:.07s}.u-rise > *:nth-child(3){animation-delay:.14s}
.u-rise > *:nth-child(4){animation-delay:.21s}.u-rise > *:nth-child(5){animation-delay:.28s}
.u-rise > *:nth-child(6){animation-delay:.35s}.u-rise > *:nth-child(7){animation-delay:.42s}
`;
if (typeof document !== 'undefined' && !document.getElementById('u1214-style')) {
  const el = document.createElement('style'); el.id = 'u1214-style'; el.textContent = styles;
  document.head.appendChild(el);
}

const fill = {
  width: '100%', height: '100%', background: 'var(--osd-bg)', color: 'var(--osd-text)',
  fontFamily: 'var(--osd-font-body)', position: 'relative' as const, overflow: 'hidden',
  letterSpacing: '-0.01em',
};

// soft background orbs for depth
const Orbs = () => (
  <>
    <div style={{ position: 'absolute', width: 900, height: 900, left: -260, top: -360, borderRadius: '50%',
      background: `radial-gradient(circle, ${C.glow}, transparent 62%)`, pointerEvents: 'none' }} />
    <div style={{ position: 'absolute', width: 820, height: 820, right: -240, top: -200, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(91,227,192,0.10), transparent 60%)', pointerEvents: 'none' }} />
    <div style={{ position: 'absolute', width: 760, height: 760, left: '46%', bottom: -460, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(157,140,255,0.10), transparent 60%)', pointerEvents: 'none' }} />
  </>
);

const Eyebrow = ({ children }: { children: any }) => (
  <span style={{ display: 'inline-block', border: `1px solid ${C.amber}`, color: C.amber, borderRadius: 999,
    padding: '8px 20px', fontSize: 22, fontFamily: mono, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
    {children}
  </span>
);

const Footer = ({ label }: { label: string }) => {
  const { current, total } = useSlidePageNumber();
  return (
    <div style={{ position: 'absolute', left: 110, right: 110, bottom: 56, display: 'flex',
      justifyContent: 'space-between', alignItems: 'center', borderTop: `1px solid ${C.border}`, paddingTop: 18 }}>
      <span style={{ fontSize: 20, color: C.faint, fontFamily: mono }}>{label}</span>
      <span style={{ fontSize: 20, color: C.faint, fontFamily: mono }}>
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
    </div>
  );
};

const Head = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div style={{ marginBottom: 8 }}>
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 70, fontWeight: 800, margin: '28px 0 0',
      lineHeight: 1.1 }}>{title}</h2>
    <div style={{ width: 96, height: 6, background: C.amber, borderRadius: 3, marginTop: 22 }} />
  </div>
);

const Card = ({ children, style, tint }: { children: any; style?: any; tint?: string }) => (
  <div style={{
    background: tint || C.surf, border: `1px solid ${C.border}`, borderRadius: 28, padding: 40,
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 30px 60px -40px rgba(0,0,0,0.8)', ...style,
  }}>{children}</div>
);

const Node = ({ title, sub, accent, style }: { title: string; sub?: string; accent?: string; style?: any }) => (
  <div style={{ flex: 1, background: C.surf2, border: `1px solid ${accent || C.border}`, borderRadius: 22,
    padding: '26px 22px', textAlign: 'center', ...style }}>
    <div style={{ fontSize: 30, fontWeight: 700 }}>{title}</div>
    {sub && <div style={{ fontSize: 21, color: C.muted, marginTop: 8 }}>{sub}</div>}
  </div>
);

const Arrow = () => (
  <div style={{ color: C.amber, fontSize: 40, fontWeight: 700, padding: '0 8px', alignSelf: 'center' }}>→</div>
);

// ─── 1. COVER ──────────────────────────────────────────────────────────────
const Cover: Page = () => (
  <div style={{ ...fill, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 130px' }}>
    <Orbs />
    <div className="u-rise" style={{ position: 'relative' }}>
      <Eyebrow>組內試教階段成果 ｜ 32hr</Eyebrow>
      <div style={{ fontSize: 30, color: C.muted, marginTop: 34 }}>AI 全自動化公司實作營</div>
      <h1 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 'var(--osd-size-hero)', fontWeight: 900,
        lineHeight: 1.02, margin: '6px 0 0' }}>單元 12-14<br />課程重構規劃</h1>
      <div style={{ width: 150, height: 8, background: C.amber, borderRadius: 4, margin: '36px 0 30px' }} />
      <p style={{ fontSize: 38, color: C.amber, maxWidth: 1280, margin: 0, lineHeight: 1.45 }}>
        不用會寫程式，也能做出會運作的 AI 產品。<br />能決策的助理、上線的個人網站、跑得起來的營運。
      </p>
      <div style={{ display: 'flex', gap: 22, marginTop: 56 }}>
        {[['32hr', '三模組', C.ink], ['3', '低耦合模組', C.teal], ['4', '現場必帶', C.amber], ['~$0', '學員成本', C.violet]]
          .map(([n, l, c], i) => (
          <div key={i} style={{ flex: 1, background: C.surf, border: `1px solid ${C.border}`, borderRadius: 22, padding: '28px 24px' }}>
            <div style={{ fontSize: 52, fontWeight: 800, color: c as string }}>{n}</div>
            <div style={{ fontSize: 22, color: C.faint, marginTop: 8 }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── 2. GOAL (before → after) ────────────────────────────────────────────
const Goal: Page = () => (
  <div style={{ ...fill, padding: '110px 110px 0' }}>
    <Orbs />
    <div style={{ position: 'relative' }}>
      <Head eyebrow="背景與目標" title="從零基礎，到做出會運作的 AI 產品" />
      <div className="u-rise" style={{ display: 'flex', gap: 40, alignItems: 'stretch', marginTop: 54 }}>
        <Card style={{ flex: 1 }}>
          <div style={{ fontSize: 26, color: C.faint, fontWeight: 700, marginBottom: 26 }}>前 11 單元</div>
          {['無程式 / 低程式工具', 'GPTs、Canva、Sheets、n8n、LINE OA', '幾乎沒碰過 IDE、終端機、Git'].map((t, i) => (
            <div key={i} style={{ fontSize: 32, color: i === 2 ? C.ink : C.muted, fontWeight: i === 2 ? 700 : 400, margin: '18px 0', lineHeight: 1.5 }}>• {t}</div>
          ))}
        </Card>
        <Arrow />
        <Card style={{ flex: 1 }} tint="rgba(255,140,66,0.08)">
          <div style={{ fontSize: 26, color: C.amber, fontWeight: 700, marginBottom: 26 }}>單元 12-14（我負責）</div>
          {['用 AI 做出能用、能上線、能營運的成果', 'vibe coding / agentic coding 就業能力', '不背指令、不硬學語法，用講的把東西做出來', '教學導向、就業輔導導向'].map((t, i) => (
            <div key={i} style={{ fontSize: 31, color: i === 0 ? C.ink : C.muted, fontWeight: i === 0 ? 700 : 400, margin: '16px 0', lineHeight: 1.45 }}>• {t}</div>
          ))}
        </Card>
      </div>
    </div>
    <Footer label="背景與目標" />
  </div>
);

// ─── 3. SCOPE (donut) ────────────────────────────────────────────────────
const Donut = () => {
  const segs = [['M12', 16, C.amber], ['M13', 8, C.teal], ['M14', 8, C.violet]] as const;
  const r = 150, cx = 190, cy = 190, circ = 2 * Math.PI * r, total = 32;
  let off = 0;
  return (
    <svg width={380} height={380} viewBox="0 0 380 380">
      {segs.map(([, v, col], i) => {
        const len = (v / total) * circ; const dash = `${len} ${circ - len}`; const cur = off; off += len;
        return <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={col as string} strokeWidth={52}
          strokeDasharray={dash} strokeDashoffset={-cur} transform={`rotate(-90 ${cx} ${cy})`} strokeLinecap="butt" />;
      })}
      <text x={cx} y={cy - 6} textAnchor="middle" fontSize={84} fontWeight={800} fill={C.ink}>32</text>
      <text x={cx} y={cy + 44} textAnchor="middle" fontSize={26} fill={C.faint}>小時</text>
    </svg>
  );
};
const Scope: Page = () => (
  <div style={{ ...fill, padding: '110px 110px 0' }}>
    <Orbs />
    <div style={{ position: 'relative' }}>
      <Head eyebrow="範圍與時數" title="32 小時、三個獨立模組" />
      <div style={{ display: 'flex', gap: 80, marginTop: 50, alignItems: 'center' }}>
        <div className="u-rise"><Donut /></div>
        <div className="u-rise" style={{ flex: 1 }}>
          {[['M12 ｜ AI 營運決策助理', '16hr · 4 次課', C.amber], ['M13 ｜ AI 個人品牌發布站', '8hr · 2 次課', C.teal], ['M14 ｜ AI 營運控制塔實戰', '8hr · 2 次課', C.violet]].map(([t, h, c], i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 24, margin: '14px 0' }}>
              <span style={{ width: 18, height: 18, borderRadius: 5, background: c as string }} />
              <span style={{ fontSize: 34, fontWeight: 700 }}>{t}</span>
              <span style={{ fontSize: 26, color: C.faint, fontFamily: mono }}>{h}</span>
            </div>
          ))}
          <div style={{ marginTop: 30, fontSize: 28, color: C.amber, lineHeight: 1.5 }}>最後 8hr 成果檢驗為跨單元 capstone，不在本範圍</div>
          <div style={{ fontSize: 27, color: C.muted, lineHeight: 1.5, marginTop: 12 }}>模組低耦合、可獨立命名與切塊，便於行銷／報告／分工授課</div>
        </div>
      </div>
    </div>
    <Footer label="範圍與時數" />
  </div>
);

// ─── 4. SPINE (pipeline) ──────────────────────────────────────────────────
const Spine: Page = () => {
  const steps = [['進 IDE', '用 agent 共創'], ['做決策', 'M12 決策助理'], ['公開發布', 'M13 個人站'], ['實際營運', 'M14 控制塔']];
  return (
    <div style={{ ...fill, padding: '110px 110px 0' }}>
      <Orbs />
      <div style={{ position: 'relative' }}>
        <Head eyebrow="主線" title="進 IDE → 做決策 → 公開發布 → 實際營運" />
        <div className="u-rise" style={{ display: 'flex', marginTop: 90, alignItems: 'stretch' }}>
          {steps.flatMap(([a, b], i) => [
            <Node key={`n${i}`} title={a} sub={b} accent={i === 0 ? C.amber : C.border}
              style={{ padding: '46px 22px', background: i === 0 ? 'rgba(255,140,66,0.08)' : C.surf2 }} />,
            i < 3 ? <Arrow key={`a${i}`} /> : null,
          ])}
        </div>
        <p style={{ fontSize: 30, color: C.muted, marginTop: 70, lineHeight: 1.5 }}>
          每個模組出口都是『自帶價值的成品』，可單獨展示／行銷／報告。
        </p>
      </div>
      <Footer label="主線" />
    </div>
  );
};

// ─── 5. LOOP ────────────────────────────────────────────────────────────
const Loop: Page = () => {
  const loop = [['進雲端 IDE', 'Codespaces'], ['跟 agent 講', '白話需求'], ['接受 / 退回', '看懂再決定'], ['預覽 / 執行', '確認真的動'], ['git 存檔', 'commit/push'], ['部署上線', '公開成果']];
  return (
    <div style={{ ...fill, padding: '110px 110px 0' }}>
      <Orbs />
      <div style={{ position: 'relative' }}>
        <Head eyebrow="共用骨幹" title="一個會重複用的 vibe coding 循環" />
        <div className="u-rise" style={{ display: 'flex', marginTop: 80, alignItems: 'stretch' }}>
          {loop.flatMap(([a, b], i) => [
            <Node key={`n${i}`} title={a} sub={b} accent={i === 0 || i === 5 ? C.amber : C.border}
              style={{ fontSize: 24, padding: '30px 10px' }} />,
            i < 5 ? <Arrow key={`a${i}`} /> : null,
          ])}
        </div>
        <div style={{ textAlign: 'center', marginTop: 56, fontSize: 30, color: C.amber, fontWeight: 700 }}>↻ 只在第一堂教一次，之後每個模組都重用</div>
        <p style={{ textAlign: 'center', fontSize: 30, color: C.muted, marginTop: 22, lineHeight: 1.5 }}>
          骨幹是『方法』不是單一程式碼；某模組沒教好，不會讓後面崩。
        </p>
      </div>
      <Footer label="共用骨幹" />
    </div>
  );
};

// ─── 6. PHILOSOPHY ────────────────────────────────────────────────────────
const Philosophy: Page = () => {
  const musts = [['01', 'M12 進 IDE 跑出第一個分析'], ['02', 'M12 跑通 CrewAI 三角色'], ['03', 'M13 本機預覽成功'], ['04', 'M13 公開部署成功']];
  return (
    <div style={{ ...fill, padding: '110px 110px 0' }}>
      <Orbs />
      <div style={{ position: 'relative' }}>
        <Head eyebrow="教學思想" title="現場只帶必要，其餘帶回家做" />
        <div className="u-rise" style={{ display: 'flex', gap: 28, marginTop: 50 }}>
          {musts.map(([n, t], i) => (
            <Card key={i} style={{ flex: 1, padding: 32 }}>
              <div style={{ fontSize: 64, fontWeight: 800, color: C.amber, fontFamily: mono }}>{n}</div>
              <div style={{ fontSize: 27, fontWeight: 700, marginTop: 16, lineHeight: 1.4 }}>{t}</div>
            </Card>
          ))}
        </div>
        <p style={{ fontSize: 30, color: C.muted, marginTop: 46, lineHeight: 1.55 }}>
          全課程『現場真正必帶的首次成功』只有這 4 個；其餘實作、美化、擴充一律帶回家做。<br />
          課堂留給示範、Q&amp;A、演練。貫穿原則：<span style={{ color: C.ink, fontWeight: 700 }}>人工審核</span>。AI 是輔助，不替管理者承擔決策。
        </p>
      </div>
      <Footer label="教學思想" />
    </div>
  );
};

// ─── 7. M12 ─────────────────────────────────────────────────────────────
const M12: Page = () => {
  const roles = [['資料檢查員', '找缺漏 / 異常', C.teal], ['分析洞察員', '趨勢與風險', C.amber], ['決策摘要員', '可行動建議', C.violet]];
  return (
    <div style={{ ...fill, padding: '110px 110px 0' }}>
      <Orbs />
      <div style={{ position: 'relative', display: 'flex', gap: 64 }}>
        <div style={{ flex: 1.05 }}>
          <Head eyebrow="模組 M12 ｜ 16hr" title="AI 營運決策助理" />
          <div className="u-rise" style={{ marginTop: 40 }}>
            {[['成品：可重跑的 CrewAI 三角色決策助理', true], ['破冰：先請 agent 直接扮三角色，秒懂分工', false], ['結構化輸出用白話講『格式藍圖』', false], ['runtime 走免費 LLM；觸發『一鍵跑』', false], ['第 1 次課最軟：進 Codespaces + 介面減法', 'amber']].map(([t, k], i) => (
              <div key={i} style={{ fontSize: 31, margin: '18px 0', lineHeight: 1.45, fontWeight: k ? 700 : 400, color: k === 'amber' ? C.amber : k ? C.ink : C.muted }}>• {t}</div>
            ))}
          </div>
        </div>
        <div className="u-rise" style={{ flex: 0.95, alignSelf: 'center' }}>
          {roles.map(([a, b, c], i) => (
            <div key={i}>
              <div style={{ background: C.surf2, border: `1px solid ${c as string}`, borderRadius: 22, padding: '26px 30px' }}>
                <div style={{ fontSize: 32, fontWeight: 700 }}>{a}</div>
                <div style={{ fontSize: 23, color: C.muted, marginTop: 6 }}>{b}</div>
              </div>
              {i < 2 && <div style={{ textAlign: 'center', color: C.amber, fontSize: 34, margin: '8px 0' }}>↓</div>}
            </div>
          ))}
        </div>
      </div>
      <Footer label="模組 M12" />
    </div>
  );
};

// ─── 8. M13 ─────────────────────────────────────────────────────────────
const M13: Page = () => (
  <div style={{ ...fill, padding: '110px 110px 0' }}>
    <Orbs />
    <div style={{ position: 'relative', display: 'flex', gap: 64 }}>
      <div style={{ flex: 1.05 }}>
        <Head eyebrow="模組 M13 ｜ 8hr" title="AI 個人品牌發布站" />
        <div className="u-rise" style={{ marginTop: 40 }}>
          {[['成品：可公開瀏覽的 Astro Blog（GitHub Pages）', true], ['第一次完整走 vibe coding 循環並公開上線', false], ['NotebookLM 整理素材 → 帶引用草稿', false], ['學 Git / commit / push + Actions 自動部署', false], ['公開前檢查：不放個資 / 內部截圖', 'amber']].map(([t, k], i) => (
            <div key={i} style={{ fontSize: 31, margin: '18px 0', lineHeight: 1.45, fontWeight: k ? 700 : 400, color: k === 'amber' ? C.amber : k ? C.ink : C.muted }}>• {t}</div>
          ))}
        </div>
      </div>
      <div className="u-rise" style={{ flex: 0.95, alignSelf: 'center' }}>
        <div style={{ background: '#fbfaf7', borderRadius: 22, overflow: 'hidden', border: `1px solid ${C.border}`, boxShadow: '0 40px 80px -40px rgba(0,0,0,.85)' }}>
          <div style={{ background: '#fff', borderBottom: '1px solid #eee', padding: '16px 22px', fontSize: 20, color: '#999', fontFamily: mono }}>🔒 myname.github.io</div>
          <div style={{ padding: '34px 34px 40px' }}>
            <div style={{ fontSize: 36, fontWeight: 800, color: '#1a1a1a' }}>我的品牌發布站</div>
            <div style={{ fontSize: 20, color: '#8a8a8a', margin: '6px 0 22px' }}>用 AI agent 做出來、公開發布的個人站</div>
            {[['我的第一篇文章', '2026·06·17'], ['我怎麼用 AI 學會做網站', '2026·06·20'], ['About ／ 關於我', '→']].map(([t, d], i) => (
              <div key={i} style={{ borderTop: '1px solid #eee', padding: '16px 0', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 24, color: '#222', fontWeight: 600 }}>{t}</span>
                <span style={{ fontSize: 20, color: '#aaa' }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer label="模組 M13" />
  </div>
);

// ─── 9. M14 (ops board) ────────────────────────────────────────────────
const M14: Page = () => {
  const cells = [['對外層', 'M13 站 · 社群 · 客服', C.border], ['內部營運', '排班 · 庫存 · 自動化', C.border], ['資料 / 決策', 'M12 決策助理', C.border], ['⚠ 事件 A', '錯誤價格 $5→$50', C.amber2], ['⚠ 事件 B', '爆單缺料', C.amber2], ['⚠ 事件 C', 'AI 建議失準', C.amber2]];
  return (
    <div style={{ ...fill, padding: '110px 110px 0' }}>
      <Orbs />
      <div style={{ position: 'relative', display: 'flex', gap: 56 }}>
        <div style={{ flex: 0.9 }}>
          <Head eyebrow="模組 M14 ｜ 8hr" title="AI 營運控制塔實戰" />
          <div className="u-rise" style={{ marginTop: 40 }}>
            {[['用 AI 營運的整合演練', true], ['把 M12+M13+前面系統當一間公司營運', false], ['每一步都用 AI：判讀、讀 log、起草說明、小繞道', false], ['小繞道/小修正現場做，大功能課後', 'amber']].map(([t, k], i) => (
              <div key={i} style={{ fontSize: 29, margin: '18px 0', lineHeight: 1.45, fontWeight: k ? 700 : 400, color: k === 'amber' ? C.amber : k ? C.ink : C.muted }}>• {t}</div>
            ))}
          </div>
        </div>
        <div className="u-rise" style={{ flex: 1.1, alignSelf: 'center', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 18 }}>
          {cells.map(([t, d, c], i) => (
            <div key={i} style={{ background: C.surf2, border: `1px solid ${c}`, borderRadius: 18, padding: '22px 18px' }}>
              <div style={{ fontSize: 23, fontWeight: 700, color: c === C.amber2 ? C.amber : C.ink, fontFamily: mono }}>{t}</div>
              <div style={{ fontSize: 20, color: C.muted, marginTop: 8 }}>{d}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer label="模組 M14" />
    </div>
  );
};

// ─── 10. TOOLS (table) ──────────────────────────────────────────────────
const Tools: Page = () => {
  const rows = [['雲端環境', 'GitHub Codespaces', '每天重製也不怕；學的是真工具'], ['Coding agent', 'Codex / Claude Code', '學員自己訂閱那套；Copilot Free 救援'], ['M12 框架', 'CrewAI', '角色比喻最白話、生成最穩'], ['M13 發布', 'Astro v5 + GitHub Pages', '結構清楚、push 即部署'], ['素材整理', 'NotebookLM', '來源導向、帶引用']];
  return (
    <div style={{ ...fill, padding: '110px 110px 0' }}>
      <Orbs />
      <div style={{ position: 'relative' }}>
        <Head eyebrow="工具堆疊" title="雲端為主、本機為備援、成本近零" />
        <div className="u-rise" style={{ marginTop: 44, border: `1px solid ${C.border}`, borderRadius: 20, overflow: 'hidden' }}>
          {rows.map(([a, b, c], i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.6fr 2.4fr 3.4fr', borderTop: i ? `1px solid ${C.border}` : 'none', background: i % 2 ? C.surf : 'transparent' }}>
              <div style={{ padding: '20px 28px', fontSize: 26, color: C.faint, fontWeight: 700 }}>{a}</div>
              <div style={{ padding: '20px 28px', fontSize: 27, color: C.ink, fontWeight: 700 }}>{b}</div>
              <div style={{ padding: '20px 28px', fontSize: 25, color: C.muted }}>{c}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 18, marginTop: 28, alignItems: 'center' }}>
          <span style={{ fontSize: 23, color: C.faint }}>學員的 coding agent：</span>
          {[codexLogo, claudeLogo, geminiLogo].map((l, i) => (<img key={i} src={l} style={{ height: 36, opacity: 0.9 }} />))}
          <span style={{ fontSize: 22, color: C.faint, fontFamily: mono }}>三選二 · 各自訂閱</span>
        </div>
      </div>
      <Footer label="工具堆疊" />
    </div>
  );
};

// ─── 11. RUNTIME (chain + bars) ─────────────────────────────────────────
const Runtime: Page = () => {
  const chain = [['GitHub Models', '主用 · GPT-4o-mini'], ['Groq', '備1 · Llama 3.3'], ['Cerebras', '備2'], ['Gemini 付費', '保底 ~$1–3']];
  const bars = [['GitHub Models', 30, C.amber], ['Groq', 100, C.teal], ['Cerebras', 100, C.teal]];
  return (
    <div style={{ ...fill, padding: '110px 110px 0' }}>
      <Orbs />
      <div style={{ position: 'relative' }}>
        <Head eyebrow="Runtime 與成本" title="每人各自 key 的免費降級鏈" />
        <div className="u-rise" style={{ display: 'flex', marginTop: 56, alignItems: 'stretch' }}>
          {chain.flatMap(([a, b], i) => [
            <Node key={`n${i}`} title={a} sub={b} accent={i === 0 ? C.amber : C.border} style={{ padding: '26px 12px', background: i === 0 ? 'rgba(255,140,66,0.08)' : C.surf2 }} />,
            i < 3 ? <Arrow key={`a${i}`} /> : null,
          ])}
        </div>
        <div style={{ display: 'flex', gap: 60, marginTop: 50, alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            {bars.map(([n, w, c], i) => (
              <div key={i} style={{ margin: '14px 0' }}>
                <div style={{ fontSize: 22, color: C.muted, marginBottom: 6 }}>{n}</div>
                <div style={{ height: 26, background: C.surf2, borderRadius: 8, overflow: 'hidden' }}>
                  <div style={{ width: `${w}%`, height: '100%', background: c as string, borderRadius: 8 }} />
                </div>
              </div>
            ))}
            <div style={{ fontSize: 20, color: C.faint, marginTop: 8 }}>每人每日免費量（相對）</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 28, color: C.ink, fontWeight: 700, lineHeight: 1.5 }}>主用 GitHub Models：用既有 GitHub 身分建一把 PAT，免註冊新服務。</div>
            <div style={{ fontSize: 25, color: C.muted, marginTop: 14, lineHeight: 1.5 }}>每人各自 key，限額按人頭算，20 人不互搶。</div>
            <div style={{ fontSize: 30, color: C.teal, fontWeight: 800, marginTop: 18 }}>學員課程額外成本 ≈ $0</div>
          </div>
        </div>
      </div>
      <Footer label="Runtime 與成本" />
    </div>
  );
};

// ─── 12. COST ($0) ──────────────────────────────────────────────────────
const Cost: Page = () => {
  const items = [['AI app 訂閱（三選二）', '學員自帶'], ['Codespaces', '免費額度內'], ['coding agent', '由訂閱涵蓋'], ['M12 runtime', '免費降級鏈'], ['M13 部署（Pages）', '免費'], ['老師付費保底 / 堂', '~$1–3']];
  return (
    <div style={{ ...fill, padding: '110px 110px 0' }}>
      <Orbs />
      <div style={{ position: 'relative', display: 'flex', gap: 56, height: 780, alignItems: 'center' }}>
        <Card style={{ flex: 0.85, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} tint="rgba(91,227,192,0.07)">
          <div style={{ fontSize: 190, fontWeight: 900, color: C.teal, lineHeight: 1 }}>$0</div>
          <div style={{ fontSize: 28, fontWeight: 700, marginTop: 12, textAlign: 'center' }}>每位學員的課程額外成本</div>
          <div style={{ fontSize: 21, color: C.muted, marginTop: 10, textAlign: 'center', lineHeight: 1.5 }}>三選二天然保證有<br />一套可用的 coding agent</div>
        </Card>
        <div style={{ flex: 1 }}>
          <Head eyebrow="成本模型" title="學員自帶訂閱，額外成本近零" />
          <div className="u-rise" style={{ marginTop: 28 }}>
            {items.map(([k, v], i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 24px', background: i % 2 ? C.surf : 'transparent', borderRadius: 12 }}>
                <span style={{ fontSize: 26, color: C.muted }}>{k}</span>
                <span style={{ fontSize: 24, color: C.teal, fontWeight: 700, fontFamily: mono }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer label="成本模型" />
    </div>
  );
};

// ─── 13. ADR ────────────────────────────────────────────────────────────
const ADR: Page = () => {
  const adrs = ['0001 雲端環境 · 廢 Cursor/Replit', '0002 coding agent · 廢 Copilot 主用', '0003 M12 架構 CrewAI · 廢 ADK/n8n', '0004 runtime 降級鏈', '0005 結構化輸出（格式藍圖）', '0006 Astro · 廢 Hexo', '0007 GitHub Pages · 廢 Cloudflare', '0008 模組化抗崩設計', '0009 訂閱與成本（三選二）'];
  return (
    <div style={{ ...fill, padding: '110px 110px 0' }}>
      <Orbs />
      <div style={{ position: 'relative' }}>
        <Head eyebrow="決策紀錄（ADR）" title="九篇決策，含被廢棄選項與理由" />
        <div className="u-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 22, marginTop: 46 }}>
          {adrs.map((a, i) => {
            const sp = a.indexOf(' ');
            return (
              <Card key={i} style={{ padding: '24px 28px' }}>
                <div style={{ fontSize: 26, color: C.amber, fontFamily: mono, fontWeight: 700 }}>{a.slice(0, sp)}</div>
                <div style={{ fontSize: 24, color: C.ink, marginTop: 8, lineHeight: 1.35 }}>{a.slice(sp + 1)}</div>
              </Card>
            );
          })}
        </div>
        <p style={{ fontSize: 27, color: C.muted, marginTop: 32 }}>被否決的路線都留檔，方便行銷／報告／其他講師理解取捨。</p>
      </div>
      <Footer label="決策紀錄" />
    </div>
  );
};

// ─── 14. VALIDATION ─────────────────────────────────────────────────────
const Validation: Page = () => {
  const phases = ['設計藍圖 + ADR', '實作計畫', '實作成品'];
  return (
    <div style={{ ...fill, padding: '110px 110px 0' }}>
      <Orbs />
      <div style={{ position: 'relative' }}>
        <Head eyebrow="品質驗證" title="全程多模型交叉審查 + 修復" />
        <div className="u-rise" style={{ display: 'flex', marginTop: 50, alignItems: 'stretch' }}>
          {phases.flatMap((p, i) => [
            <Card key={`p${i}`} style={{ flex: 1, padding: 30 }}>
              <div style={{ fontSize: 28, fontWeight: 700 }}>{p}</div>
              <div style={{ fontSize: 23, color: C.teal, marginTop: 16 }}>✓ codex（技術 / 實測執行）</div>
              <div style={{ fontSize: 23, color: C.violet, marginTop: 8 }}>✓ gemini（教學 / 體驗）</div>
            </Card>,
            i < 2 ? <Arrow key={`a${i}`} /> : null,
          ])}
        </div>
        <div style={{ marginTop: 40, fontSize: 27, lineHeight: 1.55 }}>
          <div style={{ color: C.ink, fontWeight: 700 }}>codex 乾淨環境實測：python run.py、pytest 2 passed、npm run build 皆過。</div>
          <div style={{ color: C.amber, marginTop: 10 }}>修掉的 Critical：GitHub Models 認證、CrewAI 版本衝突、Astro 路由 404、Pages 部署。</div>
        </div>
      </div>
      <Footer label="品質驗證" />
    </div>
  );
};

// ─── 15. DELIVERABLES ───────────────────────────────────────────────────
const Deliverables: Page = () => {
  const items = [['設計藍圖 + 9 篇 ADR', 'docs/', C.amber], ['實作計畫', 'docs/U12-14_實作計畫.md', C.muted], ['三個 known-good starter', 'demo/m12 · m13 · m14', C.teal], ['視覺化 showcase', 'showcase/index.html', C.violet], ['本份 open-slide 簡報', 'slides/u12-14-plan', C.amber], ['Excel 課表已同步', '28 處更新', C.muted]];
  return (
    <div style={{ ...fill, padding: '110px 110px 0' }}>
      <Orbs />
      <div style={{ position: 'relative' }}>
        <Head eyebrow="交付物" title="這次組內試教可展示的成果" />
        <div className="u-rise" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, marginTop: 50 }}>
          {items.map(([t, d, c], i) => (
            <Card key={i} style={{ padding: 30 }}>
              <div style={{ width: 48, height: 8, background: c as string, borderRadius: 4 }} />
              <div style={{ fontSize: 28, fontWeight: 700, marginTop: 18, lineHeight: 1.35 }}>{t}</div>
              <div style={{ fontSize: 20, color: C.faint, marginTop: 10, fontFamily: mono }}>{d}</div>
            </Card>
          ))}
        </div>
      </div>
      <Footer label="交付物" />
    </div>
  );
};

// ─── 16. NEXT STEPS ─────────────────────────────────────────────────────
const NextSteps: Page = () => {
  const tl = [['課前', '帳號 / PAT / key / 網路白名單'], ['Smoke test', '建 codespace → 跑 M12 → build → 部署'], ['組內試教', '用 starter + showcase 走黃金路徑'], ['交接', 'ADR / 藍圖 / 講稿交其他講師']];
  return (
    <div style={{ ...fill, padding: '110px 110px 0' }}>
      <Orbs />
      <div style={{ position: 'relative' }}>
        <Head eyebrow="下一步" title="從試教到正式上課" />
        <div className="u-rise" style={{ display: 'flex', gap: 24, marginTop: 64 }}>
          {tl.map(([a, b], i) => (
            <div key={i} style={{ flex: 1 }}>
              <div style={{ width: 26, height: 26, borderRadius: '50%', background: C.amber, marginBottom: 24 }} />
              <div style={{ fontSize: 30, fontWeight: 700 }}>{a}</div>
              <div style={{ fontSize: 23, color: C.muted, marginTop: 10, lineHeight: 1.4 }}>{b}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 80, fontSize: 34, color: C.amber, fontWeight: 800, lineHeight: 1.4 }}>正式上課由其他講師授課；藍圖、ADR、講稿可直接交接。謝謝。</div>
      </div>
      <Footer label="下一步" />
    </div>
  );
};

export const meta: SlideMeta = {
  title: 'U12-14 課程重構規劃',
  createdAt: '2026-06-16T18:49:08.822Z',
};

export const notes: (string | undefined)[] = [
  '開場：這份報告說明我負責的單元 12-14（32 小時）重構規劃。一句話定位：這三個單元讓完全零基礎的學員，用 AI 做出能決策的助理、上線的個人網站、跑得起來的營運。手段是 vibe coding（用講的、AI 幫你做），不是教寫程式。',
  'vibe coding 是這次的靈魂：不是教語法，而是教用 AI agent 把想法做出來。前 11 單元連 IDE 都沒開過，所以 U12 第一堂的進場要特別軟。',
  '時數 16+8+8=32。U1-14 合計 112hr，最後 8hr 為全班成果檢驗 capstone；本規劃負責 U12-14 的 32hr 並銜接交接。模組刻意低耦合，回應「不要一處沒教好就全盤崩」。',
  '敘事主線但不是高耦合單一專案。每個模組能獨立拿出來講。M14 把 M12 助理、M13 站、前面系統整合成一間公司營運演練。',
  '這個循環是方法骨幹，只教一次後面重用。因為骨幹是方法而非特定程式，模組之間不會高耦合。',
  '這是 M12-14 最重要的課堂取捨：全課程「現場一定要帶著成功」的只有 4 個關鍵時刻，其餘實作帶回家做，讓課堂節奏鬆、挫折感可控。人工審核是另一條紅線：AI 給的東西要能說出依據。',
  'M12 第一次進 IDE，第一堂最軟：介面減法、破冰用請 agent 直接扮三角色。成品是 CrewAI 三角色專案跑在免費 runtime。學員 fork starter、用對話框改角色文字，不從零寫。',
  'M13 最有成就感：學員得到自己公開上線的網站，可放求職作品。用 Astro 取代 Hexo（agent 改起來更直觀），部署 GitHub Pages。最常卡關是 base 路徑，README 有醒目提醒。',
  'M14 是「用 AI 營運」的演練：用 M12 助理判讀資料、coding agent 讀 log 與做小繞道、AI 起草對外說明；桌遊式主持只是形式，練的是用 AI 處理營運與異常。教具齊全，還有給落後組的 5 分鐘個人化腳本。',
  '每個選擇都有 ADR。關鍵：環境是雲端 Codespaces，因為教室電腦可能每天重製；coding agent 用學員自己訂閱那套，課程不用管金鑰、也沒成本。',
  '成本亮點：CrewAI 跑起來用免費降級鏈，主用 GitHub Models（學員都有 GitHub），不夠換 Groq、Cerebras，真的不行才用老師代繳的 Gemini 付費（一堂 1–3 美金）。',
  '把成本下放到學員既有訂閱 + 免費平台，避免課程管理大量金鑰；每人各自 key 也解決併發互搶。老師端只需一把付費保底。',
  '所有重要決策寫成 ADR，連「為什麼不選某工具」都留檔：為什麼不用 Cursor、為什麼從 Hexo 換 Astro、為什麼不用 Cloudflare 改 GitHub Pages。',
  '品質上不只靠自己。每階段用 codex + gemini 兩個獨立模型交叉審查再修復。codex 甚至在乾淨環境把 starter 跑起來，抓到會讓學員當場失敗的問題，都修好了。',
  '交付物兩類：給內部看的（藍圖、ADR、計畫、本簡報）；可展示／可用的（三個 starter、showcase 網頁、同步更新好的 Excel）。全部在 git、已 push。',
  '下一步是組內試教：先看 showcase 建立想像，再用三個 starter 走一遍黃金路徑，跑 smoke test 確認環境。正式上課是別的講師，所以藍圖、ADR、講稿都寫清楚方便交接。謝謝。',
];

export default [Cover, Goal, Scope, Spine, Loop, Philosophy, M12, M13, M14, Tools, Runtime, Cost, ADR, Validation, Deliverables, NextSteps] satisfies Page[];
