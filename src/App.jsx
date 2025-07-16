// Importa hooks do React, componentes de página, utilitários do React Router e contexto de autenticação
import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
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
import Navbar from './components/navbar';
import { useAuth } from './context';

import './App.css'

// Componente para proteger rotas privadas
// Só permite acesso se o usuário estiver autenticado, senão redireciona para /login
export function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

function App() {
  // Exemplo de uso de estado local (não está sendo usado no momento)
  const [count, setCount] = useState(0)

  return (
    // Define as rotas da aplicação
    <>
      <Navbar />
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />


        {/* Rotas privadas: só acessíveis se autenticado */}
        <Route path="/dashboard" element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        } />
        <Route path="/projects" element={
          <PrivateRoute>
            <ProjectsPage />
          </PrivateRoute>
        } />
        <Route path="/projects/:projectId" element={
          <PrivateRoute>
            <ProjectDetailPage />
          </PrivateRoute>
        } />
        <Route path="/projects/:projectId/edit" element={
          <PrivateRoute>
            <EditProjectPage />
          </PrivateRoute>
        } />
        <Route path="/projects/:projectId/tasks/:taskId" element={
          <PrivateRoute>
            <TaskDetailPage />
          </PrivateRoute>
        } />
        <Route path="/projects/:projectId/tasks/:taskId/edit" element={
          <PrivateRoute>
            <EditTaskPage />
          </PrivateRoute>
        } />
        <Route path="/notifications" element={
          <PrivateRoute>
            <NotificationsPage />
          </PrivateRoute>
        } />
        <Route path="/profile" element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        } />
        <Route path="/settings" element={
          <PrivateRoute>
            <SettingsPage />
          </PrivateRoute>
        } />

        {/* Rota coringa: qualquer rota não definida cai aqui */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App