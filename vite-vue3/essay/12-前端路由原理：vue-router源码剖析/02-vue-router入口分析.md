# vue-router 入口分析

vue-router 提供了 createRouter 方法来创建路由配置，我们传入每个路由地址对应的组件后，使用 app.use 在 Vue 中加载 vue-router 插件，并且给 Vue 注册了两个内置组件，router-view 负责渲染当前路由匹配的组件，router-link 负责页面的跳转。

# 我们先来看下 createRouter 如何实现，
完整的代码你可以在GitHub上看到。这个函数比较长，还好我们有 TypeScript，我们先看下 createRouter 的参数。

在下面的代码中(02-routerOptions.js)，参数 RouterOptions 是规范我们配置的路由对象，主要包含 history、routes 等数据。routes 就是我们需要配置的路由对象，类型是 RouteRecordRaw 组成的数组，并且 RouteRecordRaw 的类型是三个类型的合并。
然后返回值的类型 Router 就是包含了 addRoute、push、beforeEnter、install 方法的一个对象，并且维护了 currentRoute 和 options 两个属性。

并且每个类型方法还有详细的注释，这也极大降低了阅读源码的门槛，可以帮助我们在看到函数的类型时就知道函数大概的功能。
我们知道 Vue 中 app.use 实际上执行的就是 router 对象内部的 install 方法，我们先进入到 install 方法看下是如何安装的。
