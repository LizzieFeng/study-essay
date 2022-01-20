路由对象创建和安装之后，我们下一步需要了解的就是 router-link 和 router-view 两个组件的实现方式。

通过下面的代码(04-RouterViewTmpl.js)我们可以看到，RouterView 的 setup 函数返回了一个函数，这个函数就是 RouterView 组件的 render 函数。大部分我们使用的方式就是一个<router-view />  组件，没有 slot 情况下返回的就是 component 变量。component 使用 h 函数返回 ViewComponent 的虚拟 DOM，而 ViewComponent 是根据 matchedRoute.components[props.name]计算而来。

matchedRoute 依赖的 matchedRouteRef 的计算逻辑在如下代码的第 12～15 行(04-RouterViewTmpl.js)，数据来源 injectedRoute 就是上面我们注入的 currentRoute 对象。