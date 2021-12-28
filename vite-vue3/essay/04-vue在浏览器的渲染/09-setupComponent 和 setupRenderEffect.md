setupComponent 和 setupRenderEffect，它俩又做了点什么呢？可以参考下面的示意图这两个实现组件首次渲染的函数：
如图09

# setupComponent
首先看 setupComponent，要完成的就是执行我们写的 setup 函数。可以看到，内部先初始化了 props 和 slots，并且执行 setupStatefulComponent 创建组件，而这个函数内部从 component 中获取 setup 属性，也就是 script setup 内部实现的函数，就进入到我们组件内部的 reactive、ref 等函数实现的逻辑了。
参见代码09-setupComponent.js

# setupRenderEffect

    另一个 setupRenderEffect 函数，就是为了后续数据修改注册的函数，我们先梳理一下核心的实现逻辑。组件首次加载会调用 patch 函数去初始化子组件，注意 setupRenderEffect 本身就是在 patch 函数内部执行的，所以这里就会递归整个虚拟 DOM 树，然后触发生命周期 mounted，完成这个组件的初始化。页面首次更新结束后，setupRenderEffect 不仅实现了组件的递归渲染，还注册了组件的更新机制。在下面的核心代码中，我们通过 ReactiveEffect 创建了 effect 函数，这个概念上一讲我们手写过，然后执行 instance.update 赋值为 effect.run 方法，这样结合 setup 内部的 ref 和 reactive 绑定的数据，数据修改之后，就会触发 update 方法的执行，内部就会 componentUpdateFn，内部进行递归的 patch 调用执行每个组件内部的 update 方法实现组件的更新。