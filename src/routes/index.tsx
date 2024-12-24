import { createBrowserRouter, type RouteObject } from 'react-router'
import { protectedRoute } from './auth'
import MainLayout from '@/components/Layout/MainLayout'
import Login from '@/pages/User/Login'
import Home from '@/pages/Home'
import Table from '@/pages/Table'
import UserCenter from '@/pages/User/UserCenter'
import UserSetting from '@/pages/User/UserSetting'
import NotFound from '@/pages/User/404'

// RouteObject
const routes: RouteObject[] = [
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
        path: '/table',
        children: [
          {
            path: '/table/base',
            element: protectedRoute(<Table />),
          },
        ],
      },
      {
        path: '/user',
        children: [
          {
            path: '/user/center',
            element: protectedRoute(<UserCenter />),
          },
          {
            path: '/user/setting',
            element: protectedRoute(<UserSetting />),
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export const router = createBrowserRouter(routes)
