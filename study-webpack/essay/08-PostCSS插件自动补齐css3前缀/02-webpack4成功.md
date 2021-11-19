````javascript 
// webpack 4的版本
 module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                    {
                        // 以下为webpack 4成功了
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer')({
                                    browsers: ["last 2 version", ">1%", "iOS 7"]
                                })
                            ]
                        }
                    }
                ]
            },
        ]
    },
````