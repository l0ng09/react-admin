import MainLayout from '@/components/Layout/MainLayout'
import Login from '@/pages/User/Login'
import Home from '@/pages/Home'
import Table from '@/pages/Table'
import UserCenter from '@/pages/User/UserCenter'
import UserSetting from '@/pages/User/UserSetting'
import NotFound from '@/pages/User/404'
import { RouteConfig } from './types'

export const routes: RouteConfig[] = [
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
        auth: { required: true },
      },
      {
        path: '/table',
        children: [
          {
            path: '/table/base',
            element: <Table />,
            auth: { required: true },
          },
        ],
      },
      {
        path: '/user',
        children: [
          {
            path: '/user/center',
            element: <UserCenter />,
            auth: { required: true },
          },
          {
            path: '/user/setting',
            element: <UserSetting />,
            auth: { required: true },
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
