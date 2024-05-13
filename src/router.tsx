import { createBrowserRouter } from "react-router-dom";
import Layout from './shared/components/Layout/Layout';
import React from 'react';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout />
    ),
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <LoginPage />
    ),
  },
]);

export default router;
