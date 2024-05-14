import { createBrowserRouter } from "react-router-dom";
import Layout from './shared/components/Layout/Layout';
import React from 'react';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

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
  {
    path: "/signUp",
    element: (
      <SignUpPage />
    ),
  },
]);

export default router;
