import axios from 'axios'
import { ResponseStructure } from '@/types'

// 创建axios实例
const axiosInstance = axios.create({
  baseURL: process.env.VITE_APP_API_BASE_URL || '/api', // 根据环境变量或者默认设置基础URL
  timeout: 5000, // 请求超时时间，单位为毫秒
})

// 可以在这里添加请求拦截器，例如添加授权token到请求头
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token') // 假设从本地存储获取token，实际可能根据项目情况调整
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 添加响应拦截器，例如处理统一的错误提示或者数据格式化
axiosInstance.interceptors.response.use(
  (response) => {
    const { data } = response as unknown as ResponseStructure
    return data // 直接返回响应数据主体，方便后续使用
  },
  (error) => {
    // 这里可以根据后端返回的错误状态码等进行统一的错误处理，比如弹出提示框告知用户
    return Promise.reject(error)
  },
)

export default axiosInstance
