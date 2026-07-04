import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 這堂課不需要改這個檔。啟動:npm run dev(port 5180)。
export default defineConfig({
  plugins: [react()],
  server: { port: 5180 },
});
