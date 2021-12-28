我们继续深入了解 ensureRenderer 方法，以及 ensureRenderer 方法返回的 createApp 方法。
这里 ensureRenderer 函数，内部通过 createRenderer 函数，创建了一个浏览器的渲染器，并且缓存了渲染器 renderer，这种使用闭包做缓存的方式，你在日常开发中也可以借鉴这种思路。
createRenderer 函数，我们在自定义渲染器那一讲里学到过，传递的 rendererOptions 就是浏览器里面标签的增删改查 API：
见代码段02-ensureRenderer.js

可以看到，createRenderer 函数传递的参数是 nodeOps 和 patchProp 的合并对象。
我们继续进入 nodeOps 和 pathProp 也可以看到下面的代码，写了很多方法。
通过 ensureRenderer 存储这些操作方法后，createApp 内部就可以脱离具体的渲染平台了，这也是 Vue 3 实现跨端的核心逻辑：
见代码段03-nodeOps.js
