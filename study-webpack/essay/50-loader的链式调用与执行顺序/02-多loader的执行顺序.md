多Loader时的执行顺序

多个Loader串行执行

顺序从后到前

例如：
rules:[
    {
        test:/\.less$/,
        use:[
            'style-loader',
            'css-loader',
            'less-loader'
        ]
    }
]