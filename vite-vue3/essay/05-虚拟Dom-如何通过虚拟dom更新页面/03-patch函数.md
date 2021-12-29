# patch 函数
数据更新之后就会执行 patch 函数，下图就是 patch 函数执行的逻辑图：如图03
在 patch 函数中，会针对不同的组件类型执行不同的函数，组件我们会执行 processComponent，HTML 标签我们会执行 processElement：参见代码vite-vue3\essay\04-vue在浏览器的渲染\06-patch02.js

由于更新之后不是首次渲染了，patch 函数内部会执行 updateComponent，看下面的 updateComponent 函数内部，shouldUpdateComponent 会判断组件是否需要更新，实际执行的是 instance.update：
参见代码段：vite-vue3\essay\04-vue在浏览器的渲染\06-updateComponent.js

组件的子元素是由 HTML 标签和组件构成，组件内部的递归处理最终也是对 HTML 标签的处理，所以，最后组件的更新都会进入到 processElement 内部的 patchElement 函数中。