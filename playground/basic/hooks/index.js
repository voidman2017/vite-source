// 示例插件：添加请求日志中间件
const myPlugin = {
  name: 'log-middleware',
  configureServer(server) {
    console.log('\x1b[36m%s\x1b[0m', 'hooks.configureServer')
    // 添加中间件记录请求路径和耗时
    server.middlewares.use((req, res, next) => {
      const start = Date.now()
      res.on('finish', () => {
        console.log(`Request to ${req.url} took ${Date.now() - start}ms`)
      })
      next()
    })

    // 返回后置函数（可选）
    return () => {
      console.log('Server started. Cleanup tasks here if needed.')
    }
  },
  config: () => {
    console.log('\x1b[35m%s\x1b[0m', 'hooks.config')
    return {
      resolve: {
        alias: {
          foo: 'bar',
        },
      },
    }
  },
  configResolved(config) {
    console.log('\x1b[35m%s\x1b[0m', 'hooks.configResolved')
  },
  transform(code, id) {
    console.log('\x1b[36m%s\x1b[0m', 'hooks.transform')
    return code
  },
  configurePreviewServer(server) {
    console.log('\x1b[32m%s\x1b[0m', 'hooks.configurePreviewServer')
    // return a post hook that is called after other middlewares are
    // installed
    return () => {
      server.middlewares.use((req, res, next) => {
        // custom handle request...
      })
    }
  },
  transformIndexHtml(html) {
    console.log('\x1b[36;1m%s\x1b[0m', 'hooks.transformIndexHtml')
    // 在</h1>后插入<h2>，保留原有缩进
    return html.replace('</h1>', '</h1>\n    <h2>get start</h2>')
  },
}

export { myPlugin }

/**
 * 启动阶段hooks执行时许：hooks.config -> hooks.configResolved -> hooks.configureServer
 * 访问阶段hooks执行：hooks.transformIndexHtml 、 hooks.transform 、
 */
