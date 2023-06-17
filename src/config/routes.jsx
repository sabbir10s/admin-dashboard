import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
const Layout = lazy(() => import('../Layout'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));
const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));
const Table = lazy(() => import('../pages/Table/Table'));
const Form = lazy(() => import('../pages/Form/Form'));

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
    ],
  },
]);

export default router;
