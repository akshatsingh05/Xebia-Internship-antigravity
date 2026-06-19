import './TaskTabs.css';

export default function TaskTabs({ activeTab, setActiveTab, stats }) {
  const tabs = [
    { id: 'all', label: 'All Tasks', count: stats.total },
    { id: 'pending', label: 'Pending', count: stats.pending },
    { id: 'completed', label: 'Completed', count: stats.completed },
  ];

  return (
    <div className="task-tabs">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
        >
          <span className="tab-label">{tab.label}</span>
          <span className="tab-count">{tab.count}</span>
        </button>
      ))}
    </div>
  );
}
