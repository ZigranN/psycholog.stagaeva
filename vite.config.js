import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Важно для правильной работы путей в продакшне
  build: {
    outDir: 'dist',
  },
})
