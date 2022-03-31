# Vue SSR 源码剖析
在 CSR 环境下，template 解析的 render 函数用来返回组件的虚拟 DOM，而 SSR 环境下 template 解析的 ssrRender 函数，函数内部是通过 _push 对字符串进行拼接，最终生成组件渲染的结果的。你可以在官方的模板渲染演示页面选择 ssr 设置后，看到渲染的结果：(03-ssrRender.js)

可以看到 ssrRender 函数内部通过传递的 _push 函数拼接组件渲染的结果后，直接返回 renderToString 函数的执行结果。

那 renderToString 是如何工作的呢？

现在你已经拥有了源码阅读的技巧，我们进入到 vue-next/packages/server-renderer 文件中，打开 renderToString 文件：(03-renderToString.js)

这段代码可以看到，我们通过 renderComponentVNode 函数对创建的 Vnode 进行渲染，生成一个 buffer 变量，最后通过 unrollBuffer 返回字符串。

我们先继续看 renderComponentVNode 函数，它内部通过 renderComponentSubTree 进行虚拟 DOM 的子树渲染，而 renderComponentSubTree 内部调用组件内部的 ssrRender 函数，这个函数就是我们代码中通过 @vue/compiler-ssr 解析之后的 ssrRender 函数，传递的 push 参数是通过 createBuffer 传递的：(03-renderComponentVNode.js)

createBuffer (03-createBuffer.js)的实现也很简单，buffer 是一个数组，push 函数就是不停地在数组最后新增数据，如果 item 是字符串，就在数组最后一个数据上直接拼接字符串，否则就在数组尾部新增一个元素，这种提前合并字符串的做法，也算是一个小优化。

最后我们看下返回字符串的 unrollBuffer 函数(03-unrollBuffer.js)，由于 buffer 数组中可能会有异步的组件，服务器返回渲染内容之前，我们要把组件依赖的异步任务使用 await，等待执行完毕后，进行字符串的拼接，最后返回给浏览器。

至此我们就把 Vue 中 SSR 的渲染流程梳理完毕了，通过 compiler-ssr 模块把 template 解析成 ssrRender 函数后，整个组件通过 renderToString 把组件渲染成字符串返回给浏览器。

SSR 最终实现了通过服务器端解析 Vue 组件的方式，提高首屏的响应时间和页面的 SEO 友好度。