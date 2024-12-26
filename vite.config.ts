import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve:{
    alias: {
      '@': '/src'
    }
  },
  server:{
    proxy: {
      // http://localhost:5173/api/bar 
      // -> http://jsonplaceholder.typicode.com/bar
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      // ws://localhost:5173/socket.io 
      // -> ws://localhost:5174/socket.io
      // 在使用 `rewriteWsOrigin` 时要特别谨慎，因为这可能会让代理服务器暴露在 CSRF 攻击之下
      '/socket.io': {
        target: 'ws://localhost:5174',
        ws: true,
        rewriteWsOrigin: true,
      },
    },
  }
})
