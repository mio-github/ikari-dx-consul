import PropTypes from 'prop-types';

const priorityMap = {
  critical: { label: '最優先', color: '#e03131' },
  high: { label: '高', color: '#f08c00' },
  normal: { label: '標準', color: '#2f9e44' },
};

function TaskCard({ task }) {
  const priority = priorityMap[task.priority] ?? priorityMap.normal;
  return (
    <li className="task-card">
      <div className="task-card__header">
        <span className="task-card__title">{task.title}</span>
        <span className="task-card__badge" style={{ borderColor: priority.color, color: priority.color }}>
          {priority.label}
        </span>
      </div>
      <dl className="task-card__meta">
        <div>
          <dt>Todo</dt>
          <dd>{task.todoRef}</dd>
        </div>
        <div>
          <dt>対象期間</dt>
          <dd>{task.window}</dd>
        </div>
        <div>
          <dt>成果物</dt>
          <dd>{task.deliverable}</dd>
        </div>
        <div>
          <dt>担当</dt>
          <dd>{task.owner}</dd>
        </div>
        <div>
          <dt>状況</dt>
          <dd>{task.status}</dd>
        </div>
      </dl>
      <p className="task-card__notes">{task.notes}</p>
    </li>
  );
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    todoRef: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    phase: PropTypes.string.isRequired,
    window: PropTypes.string.isRequired,
    priority: PropTypes.string,
    status: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    deliverable: PropTypes.string.isRequired,
    notes: PropTypes.string,
  }).isRequired,
};

export default function PhaseBoard({ tasks, phases }) {
  return (
    <section className="panel">
      <header className="panel__header">
        <div>
          <p className="eyebrow">PHASE OVERVIEW</p>
          <h2>フェーズ別Todoモック</h2>
        </div>
        <span className="panel__hint">`平野_実施Todo一覧.md` に準拠</span>
      </header>
      <div className="phase-grid">
        {phases.map((phase) => {
          const phaseTasks = tasks.filter((task) => task.phase === phase.key);
          return (
            <div className="phase-column" key={phase.key} style={{ background: phase.color }}>
              <div className="phase-column__header">
                <h3>{phase.label}</h3>
                <span>{phaseTasks.length}件</span>
              </div>
              <ul className="phase-column__list">
                {phaseTasks.length === 0 ? (
                  <li className="task-card task-card--empty">割当なし</li>
                ) : (
                  phaseTasks.map((task) => <TaskCard key={task.id} task={task} />)
                )}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

PhaseBoard.propTypes = {
  tasks: PropTypes.arrayOf(TaskCard.propTypes.task).isRequired,
  phases: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      color: PropTypes.string,
    }),
  ).isRequired,
};
