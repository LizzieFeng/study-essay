# patchElement 函数
在函数 patchElement 中我们主要就做两件事，
    更新节点自己的属性和更新子元素。
    
# 节点自身属性的更新
先看自身属性的更新，这里就能体现出 Vue 3 中性能优化的思想，通过 patchFlag 可以做到按需更新：

.如果标记了 FULL_PROPS，就直接调用 patchProps。
.如果标记了 CLASS，说明节点只有 class 属性是动态的，其他的 style 等属性都不需要进行判断和 DOM 操作。

这样就极大的优化了属性操作的性能。

内部执行 hostPatchProp 进行实际的 DOM 操作，你还记得上一讲中 hostPatchProp 是从 nodeOps 中定义的吗，其他动态属性 STYLE、TEXT 等等也都是一样的逻辑。

Vue 3 的虚拟 DOM 真正做到了按需更新，这也是相比于 React 的一个优势。

参见代码段：vite-vue3\essay\04-vue在浏览器的渲染\06-patchElement.js