import { createBrowserRouter, RouteObject, Outlet } from "react-router-dom";
import Layout from './shared/components/Layout/Layout';
import React from 'react';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProtectedRoute from "./shared/components/ProtectedRoute";
import ProjectPage from './pages/ProjectPage';
import TesterPage from './pages/TesterPage';
import PLPage from './pages/PLPage';
import DevPage from './pages/DevPage';
import LayoutWithoutSideBar from './shared/components/Layout/LayoutWithoutSideBar';
import IssuePage from './pages/IssuePage';
import StatisticPage from './pages/StatisticPage';

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
    path: "/project",
    element: (
      <ProtectedRoute allowedRoles={['pl', 'tester', 'dev']}>
        <LayoutWithoutSideBar />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <ProjectPage />,
      },
    ],
  },
  {
    path: "/project/:projectId",
    element: (
      <ProtectedRoute allowedRoles={['pl', 'tester', 'dev']}>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <IssuePage />,
      },
      {
        path: "pl/issue/:issueIndex",
        element: (
          <ProtectedRoute allowedRoles={['pl']}>
            <PLPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "dev/issue/:issueIndex",
        element: (
          <ProtectedRoute allowedRoles={['dev']}>
            <DevPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "tester/issue/:issueIndex",
        element: (
          <ProtectedRoute allowedRoles={['tester']}>
            <TesterPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "admin",
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/statistic",
    element: <StatisticPage />
  }
];

const router = createBrowserRouter(routes);

export default router;
