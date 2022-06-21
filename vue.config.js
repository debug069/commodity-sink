const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '127.0.0.1',
    port: 7000,
    // 解决跨域问题
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn'
        // pathRewrite: { '^/api': '' }
      }
    }
  }
})
