import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 這堂課不用改這個檔。啟動:npm run dev(port 5180)。
// base: './' 用相對路徑,build 後放到 GitHub Pages 子路徑也能正常載入資源。
export default defineConfig({
  base: './',
  plugins: [react()],
  server: { port: 5180 },
});
