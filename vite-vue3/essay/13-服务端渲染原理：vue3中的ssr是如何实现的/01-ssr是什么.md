SSR（Server Side Rendering）

# SSR 是什么

要想搞清楚 SSR 是什么？我们需要先理解这个方案是为解决什么问题而产生的。

在现在 MVVM 盛行的时代，无论是 Vue 还是 React 的全家桶，都有路由框架的身影，所以，页面的渲染流程也全部都是浏览器加载完 JavaScript 文件后，由 JavaScript 获取当前的路由地址，再决定渲染哪个页面。

这种架构下，所有的路由和页面都是在客户端进行解析和渲染的，我们称之为 Client Side Rendering，简写为 CSR，也就是客户端渲染。

交互体验确实提升了，但同时也带来了两个小问题。首先，如果采用 CSR，我们在 ailemente 项目中执行npm run build命令后，可以在项目根目录下看到多了一个 dist 文件夹，打开其中的 index.html 文件，看到下面的代码：

``````html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
    <script type="module" crossorigin src="/assets/index.c305634d.js"></script>
    <link rel="modulepreload" href="/assets/vendor.9419ee42.js">
    <link rel="stylesheet" href="/assets/index.1826a359.css">
  </head>
  <body>
    <div id="app"></div>
    
  </body>
</html>

``````

这就是项目部署上线之后的入口文件，body 内部就是一个空的 div 标签，用户访问这个页面后，页面的首屏需要等待 JavaScript 加载和执行完毕才能看到，这样白屏时间肯定比 body 内部写页面标签的要长一些，尤其在客户端网络环境差的情况下，等待 JavaScript 下载和执行的白屏时间是很伤害用户体验的。

其次，搜索引擎的爬虫抓取到你的页面数据后，发现 body 是空的，也会认为你这个页面是空的，这对于 SEO 是很不利的。即使现在基于 Google 的搜索引擎爬虫已经能够支持 JavaScript 的执行，但是爬虫不会等待页面的网络数据请求，何况国内主要的搜索引擎还是百度。所以如果你的项目对白屏时间和搜索引擎有要求，我们就需要在用户访问页面的时候，能够把首屏渲染的 HTML 内容写入到 body 内部，也就是说我们需要在服务器端实现组件的渲染，这就是 SSR 的用武之地。