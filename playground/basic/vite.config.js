import { defineConfig } from 'vite'

// 基础配置
export default defineConfig({
  // 开发服务器配置
  server: {
    port: 3000, // 默认端口
    open: false, // 自动打开浏览器
    strictPort: true, // 端口被占用时直接退出
  },

  // 构建配置
  build: {
    outDir: 'dist', // 输出目录
    assetsDir: 'assets', // 静态资源目录
    emptyOutDir: true, // 构建前清空输出目录
  },

  // 插件配置（按需添加）
  plugins: [
    // 这里可以添加需要的插件，例如：
    // react()  // 如果使用React
  ],

  // 环境变量配置
  envDir: process.cwd(), // 环境变量文件目录

  optimizeDeps: {
    force: true, // 每次启动都强制重建
    // 可选：禁用文件系统缓存
    // cacheDir: false
  },
})
