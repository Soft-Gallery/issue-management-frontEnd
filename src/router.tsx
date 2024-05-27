import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';
import Layout from './shared/components/Layout/Layout';
import React from 'react';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProtectedRoute from "./shared/components/ProtectedRoute";
import ProjectPage from './pages/ProjectPage';
import PLPage from './pages/PLPage';
import TesterPage from './pages/TesterPage';
import DevPage from './pages/DevPage';

const routes: RouteObject[] = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signUp",
    element: <SignUpPage />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: 'admin',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'pl',
        element: (
          <ProtectedRoute allowedRoles={['pl']}>
            <PLPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'tester',
        element: (
          <ProtectedRoute allowedRoles={['tester']}>
            <TesterPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'dev',
        element: (
          <ProtectedRoute allowedRoles={['dev']}>
            <DevPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'project',
        element: (
          <ProtectedRoute allowedRoles={['dev', 'tester', 'pl']}>
            <ProjectPage />
          </ProtectedRoute>
        ),
      },
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
