import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  publicDir: 'public',// Укажите относительный путь
  build: {
    rollupOptions: {
      input: './index.html', // Укажите основной входной файл
    },
  },
});
