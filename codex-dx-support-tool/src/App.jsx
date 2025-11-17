import PhaseBoard from './components/PhaseBoard.jsx';
import DeliverableSchedule from './components/DeliverableSchedule.jsx';
import MeetingsRisks from './components/MeetingsRisks.jsx';
import { tasks, deliverables, meetings, risks, phaseOrder } from './data.js';

const criticalTasks = tasks.filter((task) => task.priority === 'critical');
const stats = [
  { label: 'トラッキング中のTodo', value: tasks.length, description: 'ドキュメントから抽出した代表タスク' },
  { label: '最優先タスク', value: criticalTasks.length, description: 'emoji 🔴 が付与されているもの' },
  {
    label: '成果物セット',
    value: deliverables.length,
    description: '主要な提出物（資料/テンプレ／説明資料）',
  },
];

const attentionQueue = criticalTasks.slice(0, 5);

export default function App() {
  return (
    <div className="app-shell">
      <header className="hero">
        <div>
          <p className="eyebrow">Codex DX Consulting Support</p>
          <h1>DXコンサル支援モック（React）</h1>
          <p className="hero__lead">
            `平野_実施Todo一覧.md` と `必要ドキュメント一覧.md` をもとに、Codex視点で必要情報を1画面にまとめた
            進行管理ツールのたたき台です。Vite + React構成で、データ層を書き換えるだけで最新計画に追従できます。
          </p>
        </div>
        <div className="hero__meta">
          <span>期間: 2025年11月〜2026年1月</span>
          <span>担当: Codex モックチーム</span>
        </div>
      </header>

      <section className="stats">
        {stats.map((stat) => (
          <article key={stat.label} className="stat-card">
            <div className="stat-card__value">{stat.value}</div>
            <div className="stat-card__label">{stat.label}</div>
            <p className="stat-card__desc">{stat.description}</p>
          </article>
        ))}
      </section>

      <section className="panel">
        <header className="panel__header">
          <div>
            <p className="eyebrow">CRITICAL QUEUE</p>
            <h2>最優先タスク（🔴）</h2>
          </div>
          <span className="panel__hint">Todo 1〜22 より抜粋</span>
        </header>
        <ul className="attention-list">
          {attentionQueue.map((task) => (
            <li key={task.id}>
              <div>
                <p className="attention-list__title">{task.title}</p>
                <p className="attention-list__meta">
                  {task.todoRef} / {task.phase} / {task.window}
                </p>
              </div>
              <div className="attention-list__deliverable">{task.deliverable}</div>
            </li>
          ))}
        </ul>
      </section>

      <PhaseBoard tasks={tasks} phases={phaseOrder} />

      <DeliverableSchedule deliverables={deliverables} />

      <MeetingsRisks meetings={meetings} risks={risks} />
    </div>
  );
}
