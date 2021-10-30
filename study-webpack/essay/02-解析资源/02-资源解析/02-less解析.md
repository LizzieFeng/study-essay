less-loader 用于将.less文件，并且转换成css

```` javascript
module: {
        rules: [
            {
                test: /\.less$/,
                // 链式调用，顺序从右到左，所以，要先写css-loader，在写style-loader
                use: [
                    'style-loader', // 将样式通过`<style>`标签插入到head中
                    'css-loader', // 用于加载.css文件，并且转换成commonjs对象
                    'less-loader'
                ]
            }
        ]
    }
````

npm i less less-loader -D