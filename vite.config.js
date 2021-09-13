import { defineConfig } from 'vite';
const path = require('path');
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      //配置别名
      '@src': path.resolve(__dirname, './src'),
      '@public': path.resolve(__dirname, './public')
    },
  },

  server: {
    host: '0.0.0.0', //可以通过ip访问
    port: '3000',
    open: true, //自动打开浏览器

    proxy: { //代理
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
});
