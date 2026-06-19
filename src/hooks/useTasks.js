import { useState, useMemo, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { generateId } from '../utils/helpers';

/**
 * Core task management hook.
 * Handles all CRUD operations, filtering, search, and dark mode.
 * Persists tasks and dark mode preference to localStorage.
 */
export function useTasks() {
  // ── Persisted State ──
  const [tasks, setTasks] = useLocalStorage('smartTaskManager_tasks', []);
  const [darkMode, setDarkMode] = useLocalStorage('smartTaskManager_darkMode', false);

  // ── Ephemeral State ──
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'pending' | 'completed'

  // ── Task CRUD ──

  const addTask = useCallback((title, priority = 'low', dueDate = '') => {
    if (!title.trim()) return;
    const newTask = {
      id: generateId(),
      title: title.trim(),
      priority,
      dueDate,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks(prev => [newTask, ...prev]);
  }, [setTasks]);

  const deleteTask = useCallback((id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  }, [setTasks]);

  const toggleComplete = useCallback((id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, [setTasks]);

  // ── Dark Mode ──
  const toggleDarkMode = useCallback(() => {
    setDarkMode(prev => !prev);
  }, [setDarkMode]);

  // ── Stats ──
  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const pending = total - completed;
    return { total, completed, pending };
  }, [tasks]);

  // ── Filtered Tasks ──
  const filteredTasks = useMemo(() => {
    let result = [...tasks];

    // Tab filter
    if (activeTab === 'pending') {
      result = result.filter(t => !t.completed);
    } else if (activeTab === 'completed') {
      result = result.filter(t => t.completed);
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(t =>
        t.title.toLowerCase().includes(q)
      );
    }

    return result;
  }, [tasks, activeTab, searchQuery]);

  return {
    tasks,
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
  };
}
