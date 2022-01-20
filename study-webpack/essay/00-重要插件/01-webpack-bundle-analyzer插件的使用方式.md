webpack-bundle-analyzer插件的使用方式
第一步： 

npm install --save-dev webpack-bundle-analyzer
第二步：

在build/webpack.prod.config.js中的module.exports = webpackConfig这句话的上面增加

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}
第三步：

运行命令

npm run build --report


=========================================

vue-cli3配置webpack-bundle-analyzer插件
为优化vue项目性能,需要使用webpack-bundle-analyzer分析报文件，找出最占用空间的插件有哪些，对应做出优化


安装：

npm install webpack-bundle-analyzer --save-dev

vue.config.js配置


module.exports = {
    chainWebpack: config => {
        config
            .plugin('webpack-bundle-analyzer')
            .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }

}


运行命令

 

npm run serve

访问 http://localhost:8888

  注意8888端口是写死的，不可以更改，如果本地已经启动了8888端口，会报错

页面展示