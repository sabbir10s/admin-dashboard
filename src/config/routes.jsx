import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Navigation from '../pages/Navigation/Navigation';
const Layout = lazy(() => import('../Layout'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));
const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));
const Table = lazy(() => import('../pages/Table/Table'));
const Form = lazy(() => import('../pages/Form/Form'));
const Drawer = lazy(() => import('../pages/Drawer/Drawer'));
const Elements = lazy(() => import('../pages/Elements/Elements'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/table',
        element: <Table />,
      },
      {
        path: '/form',
        element: <Form />,
      },
      {
        path: '/drawer',
        element: <Drawer />,
      },
      {
        path: '/elements',
        element: <Elements />,
      },
      {
        path: '/navigation',
        element: <Navigation />,
      },
    ],
  },
]);

export default router;
