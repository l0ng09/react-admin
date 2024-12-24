import React from 'react'
import { LogoutOutlined, SettingOutlined, UserOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, type MenuProps } from 'antd'
import { flushSync } from 'react-dom'
import { useNavigate } from 'react-router'
import { useAuthStore } from '@/stores/authStore'

const AvatarDropdown: React.FC = () => {
  const navigate = useNavigate()
  const authStore = useAuthStore()

  const onMenuClick: MenuProps['onClick'] = (event) => {
    const { key } = event
    if (key === 'logout') {
      flushSync(() => authStore.logout())
      navigate('/login')
      return
    }
    console.log('key :>> ', key)
  }

  const menuItems:MenuProps['items'] = [
    {
      key: 'center',
      icon: <UserOutlined />,
      label: '个人中心',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: '个人设置',
    },
    {
      type: 'divider' as const,
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
    },
  ]

  return (
    <Dropdown menu={{ onClick: onMenuClick, items: menuItems }}>
      <Avatar className="hover:bg-gray-400 rounded-full" icon={<UserOutlined />} />
    </Dropdown>
  )
}

const Question = () => {
  return (
    <div
      className="flex h-26px"
      onClick={() => {
        window.open('https://pro.ant.design/docs/getting-started')
      }}>
      <QuestionCircleOutlined />
    </div>
  )
}

export { Question, AvatarDropdown }
