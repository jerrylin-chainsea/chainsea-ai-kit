import { useState } from 'react';
import posts from './posts.json';

// 個人網站 — 完成版(solution / 展示參考)
// 學生的 starter 是一個普通待辦首頁,透過四段迭代
// (Hero → 篩選列 → 卡片牆 → 詳情面板)一步一步做成自己的個人網站。

const TABS = [
  { key: 'all', label: '全部' },
  { key: 'project', label: '作品' },
  { key: 'writing', label: '文章' },
];
const KIND_LABEL = { shop: 'FROM U11-C1', writing: 'WRITING', project: 'PROJECT' };

// 展示 / 截圖用:?stage=hero|filter|cards|detail(預設 detail = 完整版)
function readStage() {
  if (typeof window === 'undefined') return 'detail';
  return new URLSearchParams(window.location.search).get('stage') || 'detail';
}

function inTab(p, tab) {
  if (tab === 'all') return true;
  if (tab === 'project') return p.kind === 'project' || p.kind === 'shop';
  return p.kind === tab;
}

export default function App() {
  const stage = readStage();
  const [tab, setTab] = useState('all');
  const [openId, setOpenId] = useState('w-ai');

  const showFilter = stage !== 'hero';
  const showGrid = stage === 'cards' || stage === 'detail';
  const showDetail = stage === 'detail';
  const showFooter = stage === 'detail';

  const list = posts.filter((p) => inTab(p, tab));
  const current = posts.find((p) => p.id === openId) || list[0];

  return (
    <div className={`site ${stage === 'hero' ? 'site--hero' : ''}`}>
      <div className="wrap">
        <div className="topbar reveal">
          <span className="brand"><span className="brand__mark" />小海 · hai</span>
          <nav className="nav"><a>作品</a><a>文章</a><a>關於</a></nav>
          <span className="issue">Issue N&deg;003 — 2026</span>
        </div>

        <header className="hero reveal">
          <span className="eyebrow">PERSONAL SITE — TAIPEI · 2026</span>
          <h1 className="hero__title">嗨,我是<span className="accent">小海</span>。</h1>
          <p className="hero__lead"><span className="serif">I build things for the web — and write about how.</span></p>
          <p className="hero__sub">資工系學生 · 正在學把想法變成會動的網頁 · 這裡放我的作品和筆記。</p>
          <div className="hero__actions">
            <button className="btn btn--solid">看我的作品 →</button>
            <button className="btn btn--line">寄信給我</button>
          </div>
          <div className="ticker">
            <span>React</span><i>/</i><span>咖啡</span><i>/</i><span>攝影</span><i>/</i><span>獨立遊戲</span><i>/</i><span>Git</span><i>/</i><span>寫字</span>
          </div>
        </header>

        {showFilter && (
          <section className="works reveal">
            <div className="works__bar">
              <span className="works__label">SELECTED WORKS · {list.length} 件</span>
              <div className="tabs">
                {TABS.map((t) => (
                  <button key={t.key} className={`tab ${tab === t.key ? 'tab--on' : ''}`} onClick={() => setTab(t.key)}>{t.label}</button>
                ))}
              </div>
            </div>

            {showGrid && (
              <div className="grid">
                {list.map((p, i) => {
                  const on = current && current.id === p.id;
                  return (
                    <button key={p.id} className={`card ${on ? 'card--on' : ''} ${p.kind === 'shop' ? 'card--shop' : ''}`} onClick={() => setOpenId(p.id)}>
                      <span className="card__top">
                        <span className="card__idx">{String(i + 1).padStart(2, '0')}</span>
                        <span className="card__kind">{p.kind === 'shop' ? 'SHOP ↗' : p.kind === 'writing' ? 'WRITING' : 'PROJECT'}</span>
                      </span>
                      <span className="card__title">{p.emoji} {p.title}</span>
                      <span className="card__blurb">{p.blurb}</span>
                      <span className="card__foot">
                        <span className="card__date">{p.date}</span>
                        <span className="card__go">{p.kind === 'shop' ? '去看小店 →' : on ? '● 正在看' : '看詳情 →'}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </section>
        )}

        {showDetail && current && (
          <section className="detail reveal">
            <div className="detail__head">
              <span className="detail__kind">{KIND_LABEL[current.kind]} · {current.date}</span>
              <h2 className="detail__title">{current.emoji} {current.title}</h2>
            </div>
            <div className="detail__grid">
              <div className="dcell dcell--lead"><span className="dk">這是什麼</span><span className="dv">{current.blurb}</span></div>
              <div className="dcell"><span className="dk">我學到什麼</span><span className="dv">{current.learned}</span></div>
              <div className="dcell"><span className="dk">下一步</span><span className="dv">{current.next}</span></div>
              <div className="dcell dcell--meta">
                <span className="dk">完成度</span>
                <div className="meter"><div className="meter__fill" style={{ width: `${current.done}%` }} /></div>
                <div className="detail__foot"><span className="meter__pct">{current.done}%</span><span className="detail__link">{current.link} →</span></div>
              </div>
            </div>
          </section>
        )}

        {showFooter && (
          <footer className="footer reveal">
            <div className="footer__big">說聲嗨 <span className="serif accent">say hi</span></div>
            <div className="footer__row"><span>hai@example.com</span><i>/</i><span>GitHub</span><i>/</i><span>Instagram</span></div>
            <div className="footer__meta">Available 2026 · Ref. ME-032026-R01 · © 小海</div>
          </footer>
        )}
      </div>
    </div>
  );
}
