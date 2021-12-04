module.exports = {
    mode: 'none', // production 默认压缩，改成none是不想让.js进行压缩
    optimization: {
        minimize: true,
        minimizer: [
            <!-- 这个插件的好处： 我们的大数相加的代码中有es6的语法，如果使用的是uglify js plugin  遇到es6的语法会报错，不会对es 6进行压缩。但是uglify 3.0的版本就支持es6的 压缩了 -->
            new TerserPlugin({ 
                include: /\.min\.js$/, // 只针对.min.js才进行压缩。
            })
        ]
    }
} 