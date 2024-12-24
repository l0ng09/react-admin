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

export interface LoginCredentials {
  username: string
  password: string
}
