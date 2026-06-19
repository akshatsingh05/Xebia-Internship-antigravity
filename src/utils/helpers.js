/**
 * Utility helpers for the Smart Task Manager
 */

/**
 * Generate a unique ID using timestamp + random string
 */
export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
}

/**
 * Format a date string (YYYY-MM-DD) to a human-readable format
 */
export function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

/**
 * Check if a date is overdue (before today)
 */
export function isOverdue(dateStr) {
  if (!dateStr) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dueDate = new Date(dateStr + 'T00:00:00');
  return dueDate < today;
}

/**
 * Check if a date is due today
 */
export function isDueToday(dateStr) {
  if (!dateStr) return false;
  const today = new Date().toISOString().split('T')[0];
  return dateStr === today;
}

/**
 * Get priority color class name
 */
export function getPriorityClass(priority) {
  const map = { high: 'priority-high', medium: 'priority-medium', low: 'priority-low' };
  return map[priority] || 'priority-low';
}

/**
 * Get today's date as YYYY-MM-DD string (for default date input)
 */
export function getTodayString() {
  return new Date().toISOString().split('T')[0];
}
