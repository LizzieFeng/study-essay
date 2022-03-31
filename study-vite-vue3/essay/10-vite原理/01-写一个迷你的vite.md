# Vite 原理

``````html
    
    <script type="module" src="/src/main.js"></script>
``````

   了解了 script 的使用方式之后，我们来实现一个迷你的 Vite 来讲解其大致的原理。
首先，浏览器的 module 功能有一些限制需要额外处理。
浏览器识别出 JavaScript 中的 import 语句后，会发起一个新的网络请求去获取新的文件，所以只支持 /、./ 和…/ 开头的路径。
而在下面的 Vue 项目启动代码中，首先浏览器并不知道 Vue 是从哪来，我们第一个要做的，就是分析文件中的 import 语句。如果路径不是一个相对路径或者绝对路径，那就说明这个模块是来自 node_modules，我们需要去 node_modules 查找这个文件的入口文件后返回浏览器。
然后 ./App.vue 是相对路径，可以找到文件，但是浏览器不支持 .vue 文件的解析，并且 index.css 也不是一个合法的 JavaScript 文件。

    我们需要解决以上三个问题，才能让 Vue 项目很好地在浏览器里跑起来

    ``````javascript

        import { createApp } from 'vue'
        import App from './App.vue'
        import './index.css'

        const app = createApp(App)
        app.mount('#app')

    ``````

    怎么做呢？首先我们需要使用 Koa 搭建一个 server，用来拦截浏览器发出的所有网络请求，才能实现上述功能。
    在下面代码中，我们使用 Koa 启动了一个服务器，并且访问首页内容读取 index.html 的内容。
    ``````javasript
            const fs = require('fs')
            const path = require('path')
            const Koa = require('koa')
            const app = new Koa()

            app.use(async ctx=>{
                const {request:{url,query} } = ctx
                if(url=='/'){
                    ctx.type="text/html"
                    let content = fs.readFileSync('./index.html','utf-8')
                    
                    ctx.body = content
                }
            })
            app.listen(24678, ()=>{
                console.log('快来快来数一数，端口24678')
            })
    ``````

    下面就是首页 index.html 的内容，一个 div 作为 Vue 启动的容器，并且通过 script 引入 src.main.js。
    我们访问首页之后，就会看到浏览器内显示的 geektime 文本，并且发起了一个 main.js 的 HTTP 请求，然后我们来解决页面中的报错问题。

    ``````html

        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Vite App</title>
        </head>
        <body>
        <h1>geek time</h1>
        <div id="app"></div>
        <script type="module" src="/src/main.js"></script>
        </body>
        </html>

    ``````

    