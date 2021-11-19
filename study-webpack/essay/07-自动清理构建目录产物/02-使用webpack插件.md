避免构建前每次都要手动删除dist

使用clean-webpack-plugin

默认会删除output指定的输出目录

````javascript

const {CleanWebpackPlugin} = require('clean-webpack-plugin'); // webpack 5.61
// const CleanWebpackPlugin = require('clean-webpack-plugin'); // webpack 4
plugins: [
        new CleanWebpackPlugin(),
    ],
````