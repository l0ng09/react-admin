import React from 'react'
import { Outlet } from 'react-router'
import { ProLayout, MenuDataItem } from '@ant-design/pro-components'
import {
  HomeOutlined,
  UserOutlined,
  TeamOutlined,
  SettingOutlined,
  MenuOutlined,
  LockOutlined,
} from '@ant-design/icons'

const MainLayout: React.FC = () => {
  // 定义菜单数据
  const menuData: MenuDataItem[] = [
    {
      name: '首页',
      key: '/',
      icon: <HomeOutlined />,
    },
    {
      name: '用户管理',
      key: '/user',
      icon: <UserOutlined />,
      children: [
        {
          name: '用户列表',
          key: '/user/list',
          icon: <UserOutlined />,
        },
        {
          name: '角色管理',
          key: '/user/role',
          icon: <TeamOutlined />,
        },
      ],
    },
    {
      name: '系统设置',
      key: '/system',
      icon: <SettingOutlined />,
      children: [
        {
          name: '菜单管理',
          key: '/system/menu',
          icon: <MenuOutlined />,
        },
        {
          name: '权限管理',
          key: '/system/permission',
          icon: <LockOutlined />,
        },
      ],
    },
  ]

  return (
    <ProLayout
      menu={{
        request: () => {
          return Promise.resolve(menuData)
        }, // 菜单项数据
      }}
      menuProps={{
        onClick: (params) => {
          console.log(params)
        },
      }}>
      <Outlet />
    </ProLayout>
  )
}

export default MainLayout
