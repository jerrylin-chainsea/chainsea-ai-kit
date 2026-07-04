import { useState } from 'react';
import missions from './missions.json';

// AI Life Mission Deck — 完成版(solution / 展示參考)
// 學生的 starter 是一個普通待辦首頁,透過四段迭代
// (Hero → 狀態選擇器 → Mission Cards → Result Panel)一步一步做到這個樣子。

const ENERGY = [
  { key: 'low', label: '低' },
  { key: 'mid', label: '中' },
  { key: 'high', label: '高' },
];
const GOAL = [
  { key: 'focus', label: '專注' },
  { key: 'relax', label: '放鬆' },
  { key: 'grow', label: '成長' },
];
const TIME = [
  { key: 15, label: '15' },
  { key: 30, label: '30' },
  { key: 60, label: '60 分' },
];
const GOAL_LABEL = { focus: '專注', relax: '放鬆', grow: '成長' };
const ENERGY_PCT = { low: 34, mid: 66, high: 92 };

// 展示 / 截圖用:?stage=hero|selector|cards|result(預設 result = 完整版)
function readStage() {
  if (typeof window === 'undefined') return 'result';
  return new URLSearchParams(window.location.search).get('stage') || 'result';
}

function ChipGroup({ label, items, value, onPick }) {
  return (
    <div className="chipgroup">
      <span className="chipgroup__label">{label}</span>
      <div className="chipgroup__set">
        {items.map((it) => (
          <button
            key={it.key}
            className={`chip ${value === it.key ? 'chip--on' : ''}`}
            onClick={() => onPick(it.key)}
          >
            {it.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const stage = readStage();
  const [energy, setEnergy] = useState('low');
  const [goal, setGoal] = useState('relax');
  const [time, setTime] = useState(30);
  const [pickedId, setPickedId] = useState('m2');

  const showSelector = stage !== 'hero';
  const showCards = stage === 'cards' || stage === 'result';
  const showResult = stage === 'result';

  const matched = missions.filter((m) => m.energy === energy);
  const cards = (matched.length ? matched : missions).slice(0, 3);
  const current = cards.find((m) => m.id === pickedId) || cards[0];
  const pct = current ? ENERGY_PCT[current.energy] : 0;

  return (
    <div className={`deck ${stage === 'hero' ? 'deck--hero-only' : ''}`}>
      <div className="aurora aurora--1" />
      <div className="aurora aurora--2" />
      <div className="aurora aurora--3" />
      <div className="grid-overlay" />

      <div className="shell">
        <nav className="topbar reveal">
          <span className="brand"><span className="brand__mark" />mission.os</span>
          <span className="topbar__pill">今天 · 週五 · 精神還行</span>
        </nav>

        <header className="hero reveal">
          <span className="hero__eyebrow"><span className="dot" />TODAY&rsquo;S MISSION</span>
          <h1 className="hero__title">AI Life<br />Mission Deck</h1>
          <p className="hero__sub">告訴它你現在的狀態,它幫你把「今天該做什麼」變成一張剛剛好的任務卡。</p>
          <div className="hero__actions">
            <button className="btn btn--primary">開始任務 →</button>
            <button className="btn btn--ghost">看看怎麼運作</button>
          </div>
        </header>

        {showSelector && (
          <section className="panel selector reveal">
            <ChipGroup label="能量" items={ENERGY} value={energy} onPick={(v) => { setEnergy(v); setPickedId(null); }} />
            <span className="selector__div" />
            <ChipGroup label="目標" items={GOAL} value={goal} onPick={setGoal} />
            <span className="selector__div" />
            <ChipGroup label="時間" items={TIME} value={time} onPick={setTime} />
          </section>
        )}

        {showCards && (
          <section className="cards reveal">
            {cards.map((m) => {
              const sel = current && current.id === m.id;
              return (
                <button key={m.id} className={`card ${sel ? 'card--sel' : ''}`} onClick={() => setPickedId(m.id)}>
                  <span className="card__accent" />
                  <span className="card__icon">{m.icon}</span>
                  <span className="card__title">{m.title}</span>
                  <span className="card__meta">
                    <span className="tagpill">{GOAL_LABEL[m.goal]}</span>
                    <span className="tagpill">{m.time} 分</span>
                  </span>
                  <span className="card__state">{sel ? '● 目前選擇' : '點我看任務'}</span>
                </button>
              );
            })}
          </section>
        )}

        {showResult && current && (
          <section className="result reveal">
            <div className="bento">
              <div className="tile tile--primary">
                <span className="tile__k">任務結果</span>
                <span className="tile__title">{current.icon} {current.title}</span>
                <span className="tile__meta">{GOAL_LABEL[current.goal]} · {current.time} 分 · energy {current.energy}</span>
              </div>
              <div className="tile"><span className="tile__k">理由</span><span className="tile__v">{current.reason}</span></div>
              <div className="tile"><span className="tile__k">不建議</span><span className="tile__v">{current.avoid}</span></div>
              <div className="tile tile--wide"><span className="tile__k">下一步</span><span className="tile__v">{current.next}</span></div>
              <div className="tile tile--energy">
                <span className="tile__k">今日能量 · ENERGY</span>
                <div className="energy">
                  <div className="energy__track"><div className="energy__fill" style={{ width: `${pct}%` }} /></div>
                  <span className="energy__pct">{pct}%</span>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
