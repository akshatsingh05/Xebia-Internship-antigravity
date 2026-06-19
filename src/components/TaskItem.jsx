import { formatDate, isOverdue, isDueToday, getPriorityClass } from '../utils/helpers';
import './TaskItem.css';

export default function TaskItem({ task, toggleComplete, deleteTask }) {
  const overdue = !task.completed && isOverdue(task.dueDate);
  const dueToday = !task.completed && isDueToday(task.dueDate);

  const priorityLabels = { high: 'High', medium: 'Medium', low: 'Low' };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''} ${overdue ? 'overdue' : ''}`}>
      <button
        className={`task-checkbox ${task.completed ? 'checked' : ''}`}
        onClick={() => toggleComplete(task.id)}
        aria-label={task.completed ? 'Mark as pending' : 'Mark as completed'}
      >
        {task.completed && <span className="check-mark">✓</span>}
      </button>

      <div className="task-content">
        <div className="task-title-row">
          <span className="task-title">{task.title}</span>
          <span className={`priority-badge ${getPriorityClass(task.priority)}`}>
            {priorityLabels[task.priority] || 'Low'}
          </span>
        </div>
        {task.dueDate && (
          <div className="task-meta">
            <span className={`task-due ${overdue ? 'due-overdue' : dueToday ? 'due-today' : ''}`}>
              📅 {overdue ? 'Overdue — ' : dueToday ? 'Due today — ' : ''}
              {formatDate(task.dueDate)}
            </span>
          </div>
        )}
      </div>

      <button
        className="task-delete"
        onClick={() => deleteTask(task.id)}
        aria-label="Delete task"
        title="Delete"
      >
        🗑️
      </button>
    </div>
  );
}
