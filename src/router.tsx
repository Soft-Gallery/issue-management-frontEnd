import { createBrowserRouter, RouteObject } from "react-router-dom";
import Layout from './shared/components/Layout/Layout';
import React from 'react';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProtectedRoute from "./shared/components/ProtectedRoute";
import ProjectPage from './pages/ProjectPage';
import PLIssuePage from './pages/PLIssuePage';

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
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
    path: "/project",
    element: (
      <ProjectPage />
    )
  },
  {
    path: "/pl",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
            <PLIssuePage />
        ),
      },
    ],
  },

];

const router = createBrowserRouter(routes);

export default router;
