import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/o': {
        target: 'https://firebasestorage.googleapis.com/v0/b/blinks-consultants-c1122.firebasestorage.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/o/, ''),
      },
    },
  },
  base: '/',
})