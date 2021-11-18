
    修改html-webpack-plugin ，设置压缩参数
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/Search.html'),
            filename: 'search.html',
            chunks: ['search'],
            inject: true,
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCss: true,
                minifyJs: true,
                removeComments: false,
            }
        }),
    ],