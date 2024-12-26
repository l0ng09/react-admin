export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (username: string, password: string) => Promise<void>
  logout: () => void
}

export interface User {
  id: number
  username: string
  email: string
  role: string
}


// 定义响应数据的类型
export interface ResponseStructure {
  code: number;
  data: any;
  message?: string;
}