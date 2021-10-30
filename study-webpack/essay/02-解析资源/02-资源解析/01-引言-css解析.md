css-loader 用于加载.css文件，并且转换成commonjs对象
style-loader 将样式通过`<style>`标签插入到head中

```` javascript
module: {
        rules: [
            {
                test: /\.css$/,
                // 链式调用，顺序从右到左，所以，要先写css-loader，在写style-loader
                use: [
                    'style-loader', // 将样式通过`<style>`标签插入到head中
                    'css-loader' // 用于加载.css文件，并且转换成commonjs对象
                ]
            }
        ]
    }
````

npm i style-loader css-loader -D