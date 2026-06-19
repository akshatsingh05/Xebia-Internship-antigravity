import TaskItem from './TaskItem';
import './TaskList.css';

export default function TaskList({ tasks, toggleComplete, deleteTask, searchQuery }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">
          {searchQuery ? '🔍' : '📝'}
        </div>
        <h3 className="empty-title">
          {searchQuery ? 'No matching tasks' : 'No tasks yet'}
        </h3>
        <p className="empty-text">
          {searchQuery
            ? 'Try a different search term.'
            : 'Add your first task above to get started!'}
        </p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}
