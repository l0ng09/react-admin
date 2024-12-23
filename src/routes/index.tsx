import { createBrowserRouter } from 'react-router';
import { protectedRoute } from './auth';
import MainLayout from '@/components/Layout/MainLayout';
import Login from '@/pages/User/Login';
import Home from '@/pages/Home';
import About from '@/pages/About';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
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
        element: protectedRoute(<About />),
      },
    ],
  },
]);