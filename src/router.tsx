import { createBrowserRouter, RouteObject } from "react-router-dom";
import Layout from './shared/components/Layout/Layout';
import React from 'react';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProtectedRoute from "./shared/components/ProtectedRoute";
import ProjectPage from './pages/ProjectPage';
import TesterPage from './pages/TesterPage';

const routes: RouteObject[] = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signUp",
    element: (
      <SignUpPage />
    ),
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "admin",
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/project',
        index: false,
        element: (
          <ProtectedRoute allowedRoles={['dev', 'tester', 'pl']}>
            <ProjectPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/issue",
    element: <Layout />,
    children: [
      {
        path: "pl",
        index: false,
        element: (
          <ProtectedRoute allowedRoles={['pl']}>
            <PLPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "tester",
        index: false,
        element: (
          <ProtectedRoute allowedRoles={['tester']}>
            <TesterPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "dev",
        index: false,
        element: (
          <ProtectedRoute allowedRoles={['dev']}>
            <DevPage />
          </ProtectedRoute>
        ),
      },
    ]
  }
];

const router = createBrowserRouter(routes);

export default router;
