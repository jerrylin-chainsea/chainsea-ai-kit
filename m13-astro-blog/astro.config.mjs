import { defineConfig } from 'astro/config';

// 部署到 GitHub Pages 時：
//  - 若 repo 名稱是 <帳號>.github.io        → site 改成 'https://<帳號>.github.io'，base 留 '/'
//  - 若 repo 名稱是其他（例如 my-blog）      → site 同上，base 改成 '/my-blog/'（否則樣式會壞、連結 404）
export default defineConfig({
  site: 'https://example.github.io',
  base: '/',
});
