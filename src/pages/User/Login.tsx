import React from 'react'
import { LoginForm, ProFormText } from '@ant-design/pro-components'
import { message } from 'antd'
import { useNavigate } from 'react-router'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useAuthStore } from '@/stores/authStore'
import type { LoginCredentials } from '@/types'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const setUser = useAuthStore((state) => state.setUser)
  const setToken = useAuthStore((state) => state.setToken)

  const handleSubmit = async (values: LoginCredentials) => {
    try {
      // Replace with actual API call
      const response: any = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            user: { id: 1, username: values.username, email: 'admin@example.com', role: 'admin' },
            token: 'mock-jwt-token',
          })
        }, 1000)
      })

      setUser(response.user)
      setToken(response.token)
      message.success('Login successful!')
      navigate('/')
    } catch (error) {
      console.log('error: ', error)
      message.error('Login failed!')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LoginForm
        className="text-black"
        title="Admin Login"
        subTitle="Welcome back to the admin dashboard"
        onFinish={handleSubmit}>
        <ProFormText
          name="username"
          fieldProps={{
            size: 'large',
            prefix: <UserOutlined />,
          }}
          placeholder="Username"
          rules={[{ required: true, message: 'Please enter username!' }]}
        />
        <ProFormText.Password
          name="password"
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined />,
          }}
          placeholder="Password"
          rules={[{ required: true, message: 'Please enter password!' }]}
        />
      </LoginForm>
    </div>
  )
}

export default Login
