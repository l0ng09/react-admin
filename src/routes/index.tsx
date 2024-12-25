import { createBrowserRouter, RouteObject } from 'react-router'
import MainLayout from '@/components/Layout/MainLayout'
import Login from '@/pages/User/Login'
import Home from '@/pages/Home'
import Table from '@/pages/Table'
import UserCenter from '@/pages/User/UserCenter'
import UserSetting from '@/pages/User/UserSetting'
import NotFound from '@/pages/User/404'

const routes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/table',
        children: [
          {
            path: '/table/base',
            element: <Table />,
          },
        ],
      },
      {
        path: '/user',
        children: [
          {
            path: '/user/center',
            element: <UserCenter />,
          },
          {
            path: '/user/setting',
            element: <UserSetting />,
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
