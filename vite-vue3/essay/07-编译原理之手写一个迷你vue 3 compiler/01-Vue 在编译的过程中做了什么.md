前面我们用了四讲，学习了 Vue 在浏览器中是如何执行的，你可以参考上一讲结尾的 Vue 执行全景图来回顾一下。
在 Vue 中，组件都是以虚拟 DOM 的形式存在，加载完毕之后注册 effect 函数。
这样组件内部的数据变化之后，用 Vue 的响应式机制做到了通知组件更新，内部则使用 patch 函数实现了虚拟 DOM 的更新，中间我们也学习了位运算、最长递增子序列等算法。

这时候你肯定还有一个疑问，那就是虚拟 DOM 是从哪来的？我们明明写的是 template 和 JSX，这也是吃透 Vue 源码最后一个难点：Vue 中的 Compiler。

下图就是 Vue 核心模块依赖关系图，reactivity 和 runtime 我们已经剖析完毕，迷你版本的代码你可以在GitHub: https://github.com/shengxinjing/weiyouyi中看到。今天开始我将用三讲的内容，给你详细讲解一下 Vue 在编译的过程中做了什么。

如图： 01-Vue 核心模块依赖关系图

编译原理也属于计算机中的一个重要学科，Vue 的 compiler 是在 Vue 场景下的实现，目的就是实现 template 到 render 函数的转变。

我们第一步需要先掌握编译原理的基本概念。Vue 官方提供了模板编译的在线演示：https://vue-next-template-explorer.netlify.app/#%7B%22src%22%3A%22%3Cdiv%20id%3D%5C%22app%5C%22%3E%5Cn%20%20%20%20%3Cdiv%20%40click%3D%5C%22()%3D%3Econsole.log(xx)%5C%22%20%3Aid%3D%5C%22name%5C%22%3E%7B%7Bname%7D%7D%3C%2Fdiv%3E%5Cn%20%20%20%20%3Ch1%20%3Aname%3D%5C%22title%5C%22%3E%E7%8E%A9%E8%BD%ACvue3%3C%2Fh1%3E%5Cn%20%20%20%20%3Cp%20%3E%E7%BC%96%E8%AF%91%E5%8E%9F%E7%90%86%3C%2Fp%3E%5Cn%3C%2Fdiv%3E%5Cn%22%2C%22ssr%22%3Afalse%2C%22options%22%3A%7B%22mode%22%3A%22module%22%2C%22filename%22%3A%22Foo.vue%22%2C%22prefixIdentifiers%22%3Afalse%2C%22hoistStatic%22%3Atrue%2C%22cacheHandlers%22%3Atrue%2C%22scopeId%22%3Anull%2C%22inline%22%3Afalse%2C%22ssrCssVars%22%3A%22%7B%20color%20%7D%22%2C%22compatConfig%22%3A%7B%22MODE%22%3A3%7D%2C%22whitespace%22%3A%22condense%22%2C%22bindingMetadata%22%3A%7B%22TestComponent%22%3A%22setup-const%22%2C%22setupRef%22%3A%22setup-ref%22%2C%22setupConst%22%3A%22setup-const%22%2C%22setupLet%22%3A%22setup-let%22%2C%22setupMaybeRef%22%3A%22setup-maybe-ref%22%2C%22setupProp%22%3A%22props%22%2C%22vMySetupDir%22%3A%22setup-const%22%7D%2C%22optimizeBindings%22%3Afalse%7D%7D。下图左侧代码是我们写的 template，右侧代码就是 compiler 模块解析城的 render 函数，我们今天的任务就是能够实现一个迷你的 compiler。