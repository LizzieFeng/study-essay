processComponent 方法

那我们继续进入到 processComponent 代码内部，看下面的代码(07-processComponent.js)。\

首次渲染的时候，n1 就是 null，所以会执行 mountComponent；
如果是更新组件的时候，n1 就是上次渲染的 vdom，需要执行 updateComponent。

updateComponent 是虚拟 DOM 的逻辑，我们会在下一讲详细剖析，这一讲主要讲首次渲染的过程。所以我们进入 mountComponent 函数中，可以看到 mountComponent 函数内部会对组件的类型进行一系列的判断，还有一些对 Vue 2 的兼容代码，核心的渲染逻辑就是 setupComponent 函数和 setupRenderEffect 函数。