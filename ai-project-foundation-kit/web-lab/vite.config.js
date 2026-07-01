import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 這是網頁專案的設定檔。你今天不用改它。
export default defineConfig({
  plugins: [react()],
  server: { port: 5180, open: false },
});
