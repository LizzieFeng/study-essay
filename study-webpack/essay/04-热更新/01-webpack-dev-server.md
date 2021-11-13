热更新： webpack-dev-server

WDS 通常需要和HotModuleReplacementPlugin一起使用，他们两个结合在一起，可以开启热更新的功能
WDS  不刷新浏览器
WDS 不输出文件，而是放在内存中
使用HotModuleReplacementPlugin插件


webpack.config.js

````javascript
const webpack = require('webpack');


mode: "development",


plugins:[
        //  引入webpack自带的HotModuleReplacementPlugin插件
        new webpack.HotModuleReplacementPlugin()
    ],
 devServer: {
        // webpack-dev-server服务的基础的目录
        contentBase: './dist',
        // 热更新
        hot: true
    }

````

````json
{
"scripts": {
    // "test": "echo \"Error: no test specified\" && exit 1",
    // "build": "webpack",
    // "watch": "webpack --watch",
    "dev": "webpack-dev-server --open"
  },
}
````


报错： 
webpack-dev-server 不是内部命令
解决:
npm install webpack-dev-server

报错： 
options has an unknown property 'contentBase'
解决：
webpack 版本问题 为了学习进行降级 降到
````json
    "webpack": "^4.31.0",
    "webpack-cli": "^3.3.2",
    "webpack-dev-server": "^3.3.1"
````
dist文件夹下不要使用index.html,待浏览器自动打开后，就可以看到dist下的所有资源了。
ps: search.html 中src引入的js，路径要使用相对路径，
````javascript
<script src="search.js"></script>
````
