const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js',
        search: './src/search.js'
    },
    output:{
        path: path.join(__dirname, 'dist'),
        filename: '[name]_[chunkhash:8].js', // 指纹
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
                    // 'style-loader', // 将样式通过`<style>`标签插入到head中
                    MiniCssExtractPlugin.loader,
                    'css-loader', // 用于加载.css文件，并且转换成commonjs对象
                ]
            },
            {
                test: /\.less$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: [
                    // 'file-loader'
                    {
                        loader: 'file-loader', // 单位为字节
                        options: {
                            // limit: 20480, // 图片大小小于20k的时候，会自动base64
                            name: '[name]_[hash:8].[ext]' // 指纹设置
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
        new MiniCssExtractPlugin( // css文件指纹
            {
                filename: `[name][contenthash:8].css`,
            }
        ),
    ],
};