import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Обеспечивает корректную работу путей в продакшене
  build: {
    outDir: 'dist',
  },
})
