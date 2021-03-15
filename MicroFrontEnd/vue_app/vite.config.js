import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  /** 静态资源目录 **/
  publicDir: 'public',
  /** vite开发服务配置 **/
  server: {
    host: 'localhost',
    port: 3000,
    open: true,
    strictPort: false,
    https: false,
  },
  /** 生产模式打包配置 **/
  build:{
    outDir: 'dist'
  }
})
