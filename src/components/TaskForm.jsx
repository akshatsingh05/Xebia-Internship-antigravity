import { useState } from 'react';
import { getTodayString } from '../utils/helpers';
import './TaskForm.css';

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('low');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title, priority, dueDate);
    setTitle('');
    setPriority('low');
    setDueDate('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          type="text"
          className="form-input task-title-input"
          placeholder="What do you need to do?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={120}
          aria-label="Task title"
        />
        <button type="submit" className="btn-add" disabled={!title.trim()}>
          <span className="btn-add-icon">+</span>
          <span className="btn-add-text">Add Task</span>
        </button>
      </div>
      <div className="form-options">
        <div className="option-group">
          <label className="option-label" htmlFor="priority-select">Priority</label>
          <select
            id="priority-select"
            className="form-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="high">🔴 High</option>
            <option value="medium">🟡 Medium</option>
            <option value="low">🟢 Low</option>
          </select>
        </div>
        <div className="option-group">
          <label className="option-label" htmlFor="due-date-input">Due Date</label>
          <input
            id="due-date-input"
            type="date"
            className="form-input date-input"
            value={dueDate}
            min={getTodayString()}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
}
