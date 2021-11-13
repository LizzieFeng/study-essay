
2014 年之后，因为 HTML5 标准发布，浏览器多了两个 API：pushState 和 replaceState。

通过这两个 API ，我们可以改变 URL 地址，并且浏览器不会向后端发送请求，同时还会触发 popstate 事件。

通过这两个 API 和 popstate 事件，我们就能用另外一种方式实现前端路由。

在下面的代码中，我们监听了 popstate 事件，可以监听到通过 pushState 修改路由的变化。并且在 fn 函数中，我们实现了页面的更新操作。

````javascript

window.addEventListener('popstate', fn)
````