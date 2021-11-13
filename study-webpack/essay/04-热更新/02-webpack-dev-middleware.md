WDM 将webpack 输出的文件传输给服务器
适用于灵活的定制场景。

````javascript
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);


app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.listen(3000, function() {
    console.log('Example app listening on port 3000!\n');
});
````