import PropTypes from 'prop-types';

export default function MeetingsRisks({ meetings, risks }) {
  return (
    <section className="panel">
      <header className="panel__header">
        <div>
          <p className="eyebrow">ALIGN & CONTROL</p>
          <h2>打ち合わせとリスク</h2>
        </div>
        <span className="panel__hint">`必要ドキュメント一覧.md` / `平野_実施Todo一覧.md`</span>
      </header>
      <div className="meetings-risks">
        <div>
          <h3>主要ミーティング</h3>
          <ul className="meeting-list">
            {meetings.map((meeting) => (
              <li key={meeting.title}>
                <div className="meeting-list__title">{meeting.title}</div>
                <dl>
                  <div>
                    <dt>時期</dt>
                    <dd>{meeting.window}</dd>
                  </div>
                  <div>
                    <dt>形式</dt>
                    <dd>{meeting.channel}</dd>
                  </div>
                  <div>
                    <dt>ポイント</dt>
                    <dd>{meeting.focus}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>想定リスク</h3>
          <ul className="risk-list">
            {risks.map((risk) => (
              <li key={risk.name}>
                <div className="risk-list__title">{risk.name}</div>
                <dl>
                  <div>
                    <dt>影響度</dt>
                    <dd>{risk.impact}</dd>
                  </div>
                  <div>
                    <dt>対策</dt>
                    <dd>{risk.mitigation}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

MeetingsRisks.propTypes = {
  meetings: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      window: PropTypes.string.isRequired,
      channel: PropTypes.string.isRequired,
      focus: PropTypes.string.isRequired,
    }),
  ).isRequired,
  risks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      impact: PropTypes.string.isRequired,
      mitigation: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
