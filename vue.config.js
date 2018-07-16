module.exports = {
  lintOnSave: true,
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://192.168.1.112:3000',
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
}
