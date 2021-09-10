const path = require('path') // 引入path模块

function resolve(dir) {
  return path.join(__dirname, dir) // path.join(__dirname)设置绝对路径
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src')).set('@view', resolve('src/views')).set('assets', resolve('src/assets/')).set('@utils', resolve('src/utils/'))
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/assets/styles/global.scss";
        `
      }
    }
  },
  pages: {
    org: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'base-frontend'
    }
  },
  devServer: {
    proxy: {
      '/xxx': {
        target: 'http://xxx.cn/xxx',
        pathRewrite: { '^/206-user': '' },
        changeOrigin: true
      }
    }
  }
}
