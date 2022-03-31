    简单回忆vite-vue3\essay\04-vue在浏览器的渲染\05-createAppAPI.js介绍的mount 函数，
    在代码中，我们使用 createVNode 函数创建项目的虚拟 DOM，
    可以看到 Vue 内部的虚拟 DOM，
    也就是 vnode，
    就是一个对象，
    通过 type、props、children 等属性描述整个节点：如代码片段 02-createVNode.js

    createVNode 负责创建 Vue 中的虚拟 DOM，而上一讲中我们讲过 mount 函数的核心逻辑就是
    使用 setupComponent 执行我们写的 <script setup>
    使用 setupRenderEffect 监听组件的数据变化。
    所以我们来到 setupRenderEffect函数中，去完整地剖析 Vue 中虚拟 DOM 的更新逻辑。
    
    我们给组件注册了 update 方法，这个方法使用 effect 包裹后，当组件内的 ref、reactive 包裹的响应式数据变化的时候就会执行 update 方法，触发组件内部的更新机制。看vite-vue3\essay\04-vue在浏览器的渲染\11-componentUpdateFn.js中的代码，在 setupRenderEffect 内部的 componentUpdateFn 中，updateComponentPreRender 更新了属性和 slots，并且调用 renderComponentRoot 函数创建新的子树对象 nextTree，然后内部依然是调用 patch 函数。

    可以看到，Vue 源码中的实现首次渲染和更新的逻辑都写在一起，我们在递归的时候如果对一个标签实现更新和渲染，就可以用一个函数实现。

    比较关键的就是上面代码中 32-39 行的 effect 函数，负责注册组件，这个函数也是 Vue 组件更新的入口函数。