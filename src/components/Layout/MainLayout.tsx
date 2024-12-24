import React from 'react'
import { Outlet, useNavigate } from 'react-router'
import { ProLayout, MenuDataItem } from '@ant-design/pro-components'
import { HomeOutlined, UserOutlined, TableOutlined, SettingOutlined } from '@ant-design/icons'
import Footer from '@/components/Footer'
import { Question, AvatarDropdown } from '@/components/RightContent'

const MainLayout: React.FC = () => {
  const navigate = useNavigate()
  // 定义菜单数据
  const menuData: MenuDataItem[] = [
    {
      name: '首页',
      key: '/',
      path: '/',
      icon: <HomeOutlined />,
    },
    {
      name: '列表页',
      key: '/table',
      path: '/table',
      icon: <TableOutlined />,
      children: [
        {
          name: '查询表格',
          key: '/table/base',
          path: '/table/base',
          icon: <UserOutlined />,
        },
      ],
    },
    {
      name: '个人页',
      key: '/user',
      path: '/user',
      icon: <UserOutlined />,
      children: [
        {
          name: '个人中心',
          key: '/user/center',
          path: '/user/center',
          icon: <UserOutlined />,
        },
        {
          name: '个人设置',
          key: '/user/setting',
          path: '/user/setting',
          icon: <SettingOutlined />,
        },
      ],
    },
  ]

  return (
    <ProLayout
    title="Antd Design"
      menu={{
        request: () => {
          return Promise.resolve(menuData)
        }, // 菜单项数据
      }}
      menuProps={{
        onClick: (params) => {
          navigate(params.key)
          console.log(params)
        },
      }}
      actionsRender={() => [<Question key="doc" />, <AvatarDropdown />]}
      layout='mix'

      footerRender={() => <Footer />}>
      <Outlet />
    </ProLayout>
  )
}

export default MainLayout
