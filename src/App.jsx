import { useEffect } from 'react';
import { useTasks } from './hooks/useTasks';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import SearchBar from './components/SearchBar';
import TaskTabs from './components/TaskTabs';
import TaskList from './components/TaskList';
import TaskCounter from './components/TaskCounter';
import './App.css';

export default function App() {
  const {
    filteredTasks,
    searchQuery,
    setSearchQuery,
    activeTab,
    setActiveTab,
    darkMode,
    addTask,
    deleteTask,
    toggleComplete,
    toggleDarkMode,
    stats,
  } = useTasks();

  // Apply dark mode attribute to the root element
  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      darkMode ? 'dark' : 'light'
    );
  }, [darkMode]);

  return (
    <div className="app">
      <div className="app-container">
        <Header
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          stats={stats}
        />
        <TaskForm addTask={addTask} />
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <TaskTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          stats={stats}
        />
        <TaskList
          tasks={filteredTasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          searchQuery={searchQuery}
        />
        <TaskCounter stats={stats} />
      </div>
    </div>
  );
}
