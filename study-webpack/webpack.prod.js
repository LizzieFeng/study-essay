const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin  = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); // webpack 5.61
// const CleanWebpackPlugin = require('clean-webpack-plugin'); // webpack 4
const glob = require('glob');

const setMPA = () => {
    const entry = {};
    const htmlWebpackPlugins = [];
    const entryFiles = glob.sync(path.join(__dirname, './src/*/index.js'));
    Object.keys(entryFiles).map((index) => {
        const entryFile = entryFiles[index];
        // D:/githubProject/study-essay/study-webpack/src/index/index.js
        const match = entryFile.match(/src\/(.*)\/index\.js/);
        const pageName = match && match[1];
        entry[pageName] = entryFile;
        const hwpc = new HtmlWebpackPlugin({
            template: path.join(__dirname, `src/${pageName}/index.html`), // htmlwebpackplugin的html模板的所在位置 模板里面可以使用js的语法
            filename: `${pageName}.html`, // 指定打包出来的html的文件名。
            chunks: [pageName], // 指定生成的html要使用哪些chunk， 和entry中的search
            inject: true, // 打包出来的chunk会自动的注入到这个html中。
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCss: true,
                minifyJs: true,
                removeComments: false,
            }
        });
        htmlWebpackPlugins.push(hwpc);
    });
    return {
        entry,
        htmlWebpackPlugins
    };
}
const {entry, htmlWebpackPlugins} = setMPA();

module.exports = {
    mode: 'production',
    entry: entry,
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
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    'postcss-preset-env',
                                ]
                            },
                        }
                    },
                    {
                        loader: 'px2rem-loader',
                        options: {
                            remUnit: 75, 
                            remPrecision: 8
                        }
                    },
                    'less-loader',
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
            },
            {
                test: /\.scss$/,
                use: [

                    {
                        loader: 'style-loader',
                        options: {
                            insertAt: 'top', // 样式插入到<head></head>
                            singleton: true, // 将所有的style标签合并成一个
                        }
                    },
                    'css-loader',
                    'sass-loader'
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
        new  OptimizeCssAssetsPlugin(
            {
                assetNameRegExp:/\.css$/g,
                // cssProcessor: require('cssnano'),
            }
        ),
        // // 通常而言，一个页面需要对应一个htmlwebpackplugin
        // new HtmlWebpackPlugin({
        //     template: path.join(__dirname, 'src/search/index.html'), // htmlwebpackplugin的html模板的所在位置 模板里面可以使用js的语法
        //     filename: 'search.html', // 指定打包出来的html的文件名。
        //     chunks: ['search'], // 指定生成的html要使用哪些chunk， 和entry中的search
        //     inject: true, // 打包出来的chunk会自动的注入到这个html中。
        //     minify: {
        //         html5: true,
        //         collapseWhitespace: true,
        //         preserveLineBreaks: false,
        //         minifyCss: true,
        //         minifyJs: true,
        //         removeComments: false,
        //     }
        // }),
        // new HtmlWebpackPlugin({
        //     template: path.join(__dirname, 'src/index/index.html'), // htmlwebpackplugin的html模板的所在位置 模板里面可以使用js的语法
        //     filename: 'index.html', // 指定打包出来的html的文件名。
        //     chunks: ['index'], // 指定生成的html要使用哪些chunk， 和entry中的search
        //     inject: true, // 打包出来的chunk会自动的注入到这个html中。
        //     minify: {
        //         html5: true,
        //         collapseWhitespace: true,
        //         preserveLineBreaks: false,
        //         minifyCss: true,
        //         minifyJs: true,
        //         removeComments: false,
        //     }
        // }),
        new CleanWebpackPlugin(),
    ].concat(htmlWebpackPlugins),
};