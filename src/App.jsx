import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import EditProjectPage from './pages/EditProjectPage';
import TaskDetailPage from './pages/TaskDetailPage';
import EditTaskPage from './pages/EditTaskPage';
import NotificationsPage from './pages/NotificationsPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import NotFoundPage from './pages/NotFoundPage';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
      <Route path="/projects/:projectId/edit" element={<EditProjectPage />} />
      <Route path="/projects/:projectId/tasks/:taskId" element={<TaskDetailPage />} />
      <Route path="/projects/:projectId/tasks/:taskId/edit" element={<EditTaskPage />} />
      <Route path="/notifications" element={<NotificationsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/settings" element={<SettingsPage />} />
      {/* Rota para página não encontrada */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
