import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://mern-todo-app-qqqi.onrender.com:3000',
        secure: false,
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
