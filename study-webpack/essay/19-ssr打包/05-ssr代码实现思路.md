服务端
    .使用react-dom/server的renderToString方法将react组件渲染成字符串

    .服务端路由放回对应的模板

客户端
    .打包出针对服务端的组件

````javascript
if(type of window === 'undefined') {
    global.windwo = {};
}
const fs = require(fs);
const path = require(path);
const express = require('express');
const {renderToString} = require('react-dom/server');
const SSR = require('../dist/search-server'); // 客户端打包出来的文件，这个文件不加hash
// 引入了样式等的模板
cosnt template = fs.readFileSync(path.join(__dirname, '../dist/search.html'), 'utf-8');
// 以下为server端的文件
server(process.env.PORT || 3000);

function server(port) {
    const app = express();

    app.use(express.static('dist'));
    app.get('/search',(req, res) => {
        console.log('server respone template', renderToString(SSR));
        res.status(200).send(renderMarkup(renderToString(SSR)));
    } );

    app.listen(port, () => {
        console.log('server is running on port:' + port);
    });
}

function renderMarkup(html) {
    // return `<html>
    //     <head>
    //         <title>服务器端渲染</title>
    //     </head>
    //     <body>
    //         <div id='app'>${html}</div>
    //     </body>
    // </html>

    // `
    // 把组件渲染到模板中，
    return tempalte.replace('<!-- HTML_PLACEHOLDER  -->', str);
}
````