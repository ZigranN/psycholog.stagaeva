import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // Базовый путь для всех статических файлов
  plugins: [react()], // Плагины, используемые в проекте
  build: {
    rollupOptions: {
      input: {
        main: './index.html', // Входная точка для сборки
      },
    },
    assetsInlineLimit: 0, // Предотвращает инлайнинг изображений в Base64
    outDir: 'dist', // Каталог для сборки
  },
});
