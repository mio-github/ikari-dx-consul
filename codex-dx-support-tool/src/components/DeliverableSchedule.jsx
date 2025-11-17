import PropTypes from 'prop-types';

export default function DeliverableSchedule({ deliverables }) {
  return (
    <section className="panel">
      <header className="panel__header">
        <div>
          <p className="eyebrow">DELIVERABLE WATCH</p>
          <h2>主要成果物スケジュール</h2>
        </div>
        <span className="panel__hint">`必要ドキュメント一覧.md` ベース</span>
      </header>
      <div className="table">
        <div className="table__head">
          <span>ID</span>
          <span>成果物</span>
          <span>提出時期</span>
          <span>形式</span>
          <span>担当</span>
          <span>状況</span>
        </div>
        {deliverables.map((item) => (
          <div className="table__row" key={item.id}>
            <span>{item.id}</span>
            <span>{item.title}</span>
            <span>{item.window}</span>
            <span>{item.format}</span>
            <span>{item.owner}</span>
            <span className={`status status--${item.status}`}>{item.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

DeliverableSchedule.propTypes = {
  deliverables: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      window: PropTypes.string.isRequired,
      format: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
