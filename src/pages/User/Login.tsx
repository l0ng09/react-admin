import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { LoginFormPage, ProConfigProvider, ProFormCheckbox, ProFormText } from '@ant-design/pro-components'
import { useNavigate } from 'react-router'
import { useAuthStore } from '@/stores'
import { message } from 'antd'

interface LoginCredentials {
  username: string
  password: string
}

const Page = () => {
  const navigate = useNavigate()
  const setUser = useAuthStore((state) => state.setUser)
  const setToken = useAuthStore((state) => state.setToken)

  return (
    <div className="bg-white h-screen">
      <LoginFormPage
        backgroundImageUrl="https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp"
        logo="https://github.githubassets.com/favicons/favicon.png"
        backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
        title="Admin"
        containerStyle={{
          backgroundColor: 'rgba(0, 0, 0,0.65)',
          backdropFilter: 'blur(4px)',
        }}
        subTitle="全球最流行的管理模板"
        onFinish={async (values: LoginCredentials) => {
          try {
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
            message.success('登录成功!')
            navigate('/')
          } catch (error) {
            console.log('error: ', error)
            message.error('Login failed!')
          }
        }}>
        <>
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={'prefixIcon'} />,
            }}
            placeholder={'用户名: admin or user'}
            rules={[{ required: true, message: '请输入用户名!' }]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={'prefixIcon'} />,
            }}
            placeholder={'密码: ant.design'}
            rules={[{ required: true, message: '请输入密码！' }]}
          />
        </>

        <div style={{ marginBlockEnd: 24 }}>
          <ProFormCheckbox noStyle name="autoLogin">
            自动登录
          </ProFormCheckbox>
          <a className="float-right">忘记密码</a>
        </div>
      </LoginFormPage>
    </div>
  )
}

export default () => {
  return (
    <ProConfigProvider dark>
      <Page />
    </ProConfigProvider>
  )
}
