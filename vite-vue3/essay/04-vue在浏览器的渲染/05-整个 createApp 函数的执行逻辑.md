如图 五
最后返回的 createApp 方法，实际上是 createAPI 的返回值，并且给 createAPI 传递了 render 方法。render 方法内部很简单，就是判断 container 容器上有没有 _vnode 属性，如果有的话就执行 unmout 方法，没有的话就执行 patch 方法，最后把 vnode 信息存储在 container._vnode 上。那 createAppAPI 又做了什么呢？我们继续进入 createAppAPI 源码，看下面的代码。内部创建了一个 app 对象，app 上注册了我们熟悉的 use、component 和 mount 等方法：

见代码段05-createAppApi.js

可以看到 mount 内部执行的是传递进来的 render 方法，也就是上面的 render 方法。container 就是我们 app.mount 中传递的 DOM 元素，对 DOM 元素进行处理之后，执行 patch 函数实现整个应用的加载。所以我们的下一个任务就是需要搞清楚 patch 函数的执行逻辑。