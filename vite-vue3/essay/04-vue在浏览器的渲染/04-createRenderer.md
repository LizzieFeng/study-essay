然后我们就需要进入到 rumtime-core 模块去看下 createRenderer 是如何工作的。
你可以在这个GitHub 链接(https://github.com/vuejs/vue-next/blob/master/packages/runtime-core/src/renderer.ts#L290)内看到 createRenderer 的代码逻辑。
当然源码比较复杂，我们照样需要简化一下。
createRenderer 是调用 baseCreateRenderer 创建的，baseCreateRenderer 函数内部有十几个函数，代码行数合计 2000 行左右，这也是我们学习 Vue 源码最复杂的一个函数了。
按前面简化源码的思路，先把工具函数的实现折叠起来，精简之后代码主要逻辑其实很简单。
我们一起来看。
首先获取了平台上所有的 insert、remove 函数，这些函数都是 nodeOps 传递进来的，然后定义了一些列 patch、mount、unmount 函数，通过名字我们不难猜出，这就是 Vue 中更新、渲染组件的工具函数，比如 mountElement 就是渲染 DOM 元素、mountComponent 就是渲染组件 updateComponent 就是更新组件。
这部分的简化代码，你也可以在weiyouyi(https://github.com/shengxinjing/weiyouyi/blob/main/src/runtime-core/renderer.js)项目中查看。
参见代码段04-baseCreateRenderer.js