import './SearchBar.css';

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="search-bar-container">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        className="search-input"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        aria-label="Search tasks"
      />
      {searchQuery && (
        <button
          className="search-clear"
          onClick={() => setSearchQuery('')}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}
