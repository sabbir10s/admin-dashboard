import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Layout = lazy(() => import('../Layout'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));
const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));
const Table = lazy(() => import('../pages/Table/Table'));
const Form = lazy(() => import('../pages/Form/Form'));
const Drawer = lazy(() => import('../pages/Drawer/Drawer'));
const Elements = lazy(() => import('../pages/Elements/Elements'));
const Navigation = lazy(() => import('../pages/Navigation/Navigation'));
const Pricing = lazy(() => import('../pages/Pricing/Pricing'));
const ProductCard = lazy(() => import('../pages/ProductCard/ProductCard'));
const Faq = lazy(() => import('../pages/Faq/Faq'));
const Testimonials = lazy(() => import('../pages/Testimonials/Testimonials'));
const BlogCard = lazy(() => import('../pages/BlogCard/BlogCard'));
const Card = lazy(() => import('../pages/Card/Card'));
const Carts = lazy(() => import('../pages/Carts/Carts'));
const Checkout = lazy(() => import('../pages/Checkout/Checkout'));
const Filter = lazy(() => import('../pages/Filter/Filter'));
const Chart = lazy(() => import('../pages/Chart/Chart'));

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
      {
        path: '/pricing',
        element: <Pricing />,
      },
      {
        path: '/productCard',
        element: <ProductCard />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/cart',
        element: <Carts />,
      },
      {
        path: '/blogCard',
        element: <BlogCard />,
      },
      {
        path: '/testimonials',
        element: <Testimonials />,
      },
      {
        path: '/card',
        element: <Card />,
      },
      {
        path: '/chart',
        element: <Chart />,
      },
      {
        path: '/filter',
        element: <Filter />,
      },
      {
        path: '/faq',
        element: <Faq />,
      },
    ],
  },
]);

export default router;
