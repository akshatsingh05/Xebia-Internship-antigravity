import './Header.css';

export default function Header({ darkMode, toggleDarkMode, stats }) {
  return (
    <header className="app-header">
      <div className="header-left">
        <div className="header-logo">
          <span className="logo-icon">✓</span>
        </div>
        <div className="header-title-group">
          <h1 className="header-title">Smart Task Manager</h1>
          <p className="header-subtitle">
            {stats.total === 0
              ? 'Start adding your tasks'
              : `${stats.pending} pending · ${stats.completed} completed`}
          </p>
        </div>
      </div>
      <button
        className="dark-mode-toggle"
        onClick={toggleDarkMode}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        title={darkMode ? 'Light mode' : 'Dark mode'}
      >
        <span className="toggle-icon">{darkMode ? '☀️' : '🌙'}</span>
      </button>
    </header>
  );
}
