# ✓ Smart Task Manager

A modern, responsive task management application built with **React** and **Vite**. Features priority levels, due dates, search, dark mode, and localStorage persistence.

---

## 🚀 Features

| Feature | Description |
|---------|-------------|
| ✅ **Add Tasks** | Create tasks with title, priority, and optional due date |
| ✅ **Complete Tasks** | Toggle tasks between pending and completed |
| ✅ **Delete Tasks** | Remove tasks with hover-to-reveal delete button |
| ✅ **Tab Filtering** | View All, Pending, or Completed tasks separately |
| ✅ **Task Counter** | Real-time stats bar with total, pending, completed, and % progress |
| ✅ **Search** | Instant search/filter by task title |
| ✅ **Priority Levels** | High (🔴), Medium (🟡), Low (🟢) with color-coded badges |
| ✅ **Due Dates** | Date picker with overdue and due-today indicators |
| ✅ **Dark Mode** | Toggle between light and dark themes (persisted) |
| ✅ **localStorage** | All tasks and preferences survive page refresh |
| ✅ **Responsive** | Mobile, tablet, and desktop layouts |

---

## 📁 Project Structure

```
smart-task-manager/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx / Header.css
│   │   ├── TaskForm.jsx / TaskForm.css
│   │   ├── SearchBar.jsx / SearchBar.css
│   │   ├── TaskTabs.jsx / TaskTabs.css
│   │   ├── TaskList.jsx / TaskList.css
│   │   ├── TaskItem.jsx / TaskItem.css
│   │   └── TaskCounter.jsx / TaskCounter.css
│   ├── hooks/
│   │   ├── useLocalStorage.js
│   │   └── useTasks.js
│   ├── utils/
│   │   └── helpers.js
│   ├── App.jsx / App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🛠️ Setup Instructions

### Prerequisites
- **Node.js** 18+ installed
- **npm** 9+ installed

### Installation

```bash
cd smart-task-manager
npm install
npm run dev
```

The app will be available at **http://localhost:5173**.

### Production Build

```bash
npm run build
npm run preview
```

---

## 🏗️ Architecture

### Multi-Agent Development Workflow

| Agent | Responsibility |
|-------|---------------|
| **Agent 1 — Planning** | Requirements analysis, architecture design, folder structure, roadmap |
| **Agent 2 — Frontend** | React components, CSS styling, responsive design, animations |
| **Agent 3 — Backend Logic** | Custom hooks, state management, localStorage, utility functions |
| **Agent 4 — Integration** | Wiring components + hooks, build testing, bug fixing, documentation |

### Tech Stack

- **React 19** — Component-based UI
- **Vite 8** — Fast build tooling
- **CSS Custom Properties** — Themeable design system
- **localStorage** — Client-side data persistence
- **React Hooks** — useState, useEffect, useMemo, useCallback

---

## 🧪 Testing Report

| Test | Status |
|------|--------|
| Add task (title + priority + date) | ✅ Pass |
| Add task (title only) | ✅ Pass |
| Empty title prevented | ✅ Pass |
| Delete task | ✅ Pass |
| Toggle complete/pending | ✅ Pass |
| Tab filtering (All/Pending/Completed) | ✅ Pass |
| Search filtering | ✅ Pass |
| Priority badge display | ✅ Pass |
| Due date display + overdue indicator | ✅ Pass |
| Dark mode toggle + persistence | ✅ Pass |
| Tasks persist on refresh | ✅ Pass |
| Task counter + progress bar | ✅ Pass |
| Responsive design | ✅ Pass |
| Production build (0 errors) | ✅ Pass |

---

## 📦 Deployment

```bash
npm run build
# Deploy the dist/ folder to any static host (Netlify, Vercel, GitHub Pages)
```

---
