const path = require('path')
function _resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  //配置基本路径，即打包后文件内各个链接的路径，./为相对路径，不这样写无法放到文件夹里使用
  publicPath: './',
  //打包结果输出路径
  outputDir: './dist/',
  //webpack配置，这是函数方法，将会覆盖原有的设置，另有对象方法，区别是对象会合并到原有设置里。
  configureWebpack: config => {
    config.resolve = {
      extensions: ['.js', '.css', '.vue'],
      alias: {
        '@': _resolve('src'),
        '@assets': _resolve('src/assets'),
        '@components': _resolve('src/components')
      }
    }
  },
  devServer: {
    //配置开发时代理，可以解决 vue开发服务器和后端之间的跨域问题
    proxy: {
        //需要代理的路径，所有以这个开头的网络请求都将经过此处的转发
        '/myWebsite': {
            //是否支持跨域，为true时 vuecli会提供一个同源的代理服务器接口来接收请求，在该服务器上转发请求
            changeOrigin: true,
            //需要被代理的非同源服务器地址，转发时将拼接到以/myWebsite/...开头的请求的前面变成 http://www.dkc.com/dkc/myWebsite/...
            //http：//是必须的，否则将以本页面开头寻址
            target: 'http://www.dkc.com/dkc/',
            //将代理的路径重写为空字符串，避免请求时带到被代理的服务器上
            pathRewrite: { '^/myWebsite': '' }
            // ws: true //是否启用 websocket
        }
    }
  }
}