避免构建前每次都要手动删除dist

使用clean-webpack-plugin

默认会删除output指定的输出目录

````javascript
plugins: [
        new CleanWebpackPlugin(), // 为了成功降了版本，webpack4
    ],
````