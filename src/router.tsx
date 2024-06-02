import { createBrowserRouter, RouteObject, Navigate } from "react-router-dom";
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
import TesterIssueDetail from './feature/tester/componenets/TesterIssueDetail';

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/login" replace />
  },
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
      <ProtectedRoute allowedRoles={['pl', 'dev', 'tester']} componentMap={{ pl: Layout, dev: Layout, tester: Layout }} defaultComponent={Layout} />
    ),
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute
            allowedRoles={['pl', 'dev', 'tester']}
            componentMap={{
              pl: IssuePage,
              dev: IssuePage,
              tester: TesterPage
            }}
            defaultComponent={IssuePage}
          />
        ),
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
            <TesterIssueDetail />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute allowedRoles={['admin']}>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <AdminPage />,
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
