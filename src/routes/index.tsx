import { createBrowserRouter, type RouteObject } from 'react-router';
import { protectedRoute } from './auth';
import MainLayout from '@/components/Layout/MainLayout';
import Login from '@/pages/User/Login';
import Home from '@/pages/Home';
import Table from '@/pages/Table';
import NotFound from '@/pages/User/404';

// RouteObject
const routes:RouteObject[] = [
  {
    path: '/',
    element: protectedRoute(<MainLayout />),
    children: [
      {
        index: true,
        element: protectedRoute(<Home />),
      },
      {
        path: 'about',
        element: protectedRoute(<Table />),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  }
]

export const router = createBrowserRouter(routes);