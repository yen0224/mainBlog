//const { defineConfig } = require('@vue/cli-service')
module.export = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5555/',
        changeOrigin: true,
        pathRewrite: { '^api': '' },
        ws: true
      }
    }
  }
}
/*module.exports = defineConfig({
  transpileDependencies: true
})
*/