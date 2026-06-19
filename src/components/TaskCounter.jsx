import './TaskCounter.css';

export default function TaskCounter({ stats }) {
  const completionRate = stats.total > 0
    ? Math.round((stats.completed / stats.total) * 100)
    : 0;

  return (
    <div className="task-counter">
      <div className="counter-stats">
        <div className="counter-item">
          <span className="counter-number total">{stats.total}</span>
          <span className="counter-label">Total</span>
        </div>
        <div className="counter-divider" />
        <div className="counter-item">
          <span className="counter-number pending">{stats.pending}</span>
          <span className="counter-label">Pending</span>
        </div>
        <div className="counter-divider" />
        <div className="counter-item">
          <span className="counter-number completed">{stats.completed}</span>
          <span className="counter-label">Done</span>
        </div>
      </div>
      <div className="counter-progress">
        <div className="progress-bar-track">
          <div
            className="progress-bar-fill"
            style={{ width: `${completionRate}%` }}
          />
        </div>
        <span className="progress-text">{completionRate}% complete</span>
      </div>
    </div>
  );
}
