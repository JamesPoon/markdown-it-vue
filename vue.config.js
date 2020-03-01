const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
process.env.VUE_APP_VERSION = require('./package.json').version
process.env.VUE_APP_TITLE = require('./package.json').name
process.env.TITLE = require('./package.json').name

module.exports = {
  publicPath: '',
  assetsDir: 'assets',
  runtimeCompiler: true,
  productionSourceMap: false,
  css: {
    requireModuleExtension: true,
    // sourceMap: true
      sourceMap: false
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
    console.log(config)
    // 指定引用的哪些模块不需要打包到 bundle.js 中
    return {
      externals: {
        //格式: "模块名":"外部名"
        "echarts": "echarts",
        "flowchart.js": "flowchart",
        "vue": "Vue",
        "highlight.js": "hljs",
        "markdown-it": "markdownit",
        "mermaid": "mermaid",
      },
    }
  },
  chainWebpack: config => {
  },
  devServer: {
    disableHostCheck: true,
  }
}
