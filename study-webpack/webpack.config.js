const path = require('path');
const webpack = require('webpack');

module.exports = {
    // mode: 'production',
    mode: 'development', // 使用热更新
    entry: {
        index: './src/index.js',
        search: './src/search.js'
    },
    output:{
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/, // '文件，指定匹配规则',
                use:  "babel-loader" // 'xxx-loader',
            },
            {
                test: /\.css$/,
                // 链式调用，顺序从右到左，所以，要先写css-loader，在写style-loader
                use: [
                    'style-loader', // 将样式通过`<style>`标签插入到head中
                    'css-loader', // 用于加载.css文件，并且转换成commonjs对象
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: [
                    // 'file-loader'
                    {
                        loader: 'url-loader', // 单位为字节
                        options: {
                            limit: 20480 // 图片大小小于20k的时候，会自动base64
                        }
                    }
                ]
            },
            {
                test: /\.(TTF|woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        //  引入webpack自带的HotModuleReplacementPlugin插件
        new webpack.HotModuleReplacementPlugin()
    ],
    // watch: true,
    // watchOptions: {
    //     // 默认为空，不监听的文件或者文件夹，支持正则匹配
    //     ignored: /node_modules/,
    //     // 监听到变化后等300ms再去执行，默认为300ms
    //     aggregateTimeout: 300,
    //     // 判断文件是否发生变化是通过不停的询问系统指定文件有没有发生变化实现的，默认每秒访问1000次
    //     poll: 1000
    // },
    devServer: {
        // webpack-dev-server服务的基础的目录
        // contentBase: './dist', // webpack 4的属性 这个属性在webpack 5中不可以使用， static是webpack 5的
        static: './dist',
        // 热更新
        hot: true
    }
};