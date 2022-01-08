Vue compiler 入口分析

    Vue 3 内部有 4 个和 compiler 相关的包。
    compiler-dom 和 compiler-core 负责实现浏览器端的编译，这两个包是我们需要深入研究的，
    compiler-ssr 负责服务器端渲染，我们后面讲 ssr 的时候再研究，
    compiler-sfc 是编译.vue 单文件组件的，有兴趣的同学可以自行探索。
    首先我们进入到 vue-next/packages/compiler-dom/index.ts 文件下，在GitHub上你可以找到下面这段代码。
    compiler 函数有两个参数：
        第一个参数 template，它是我们项目中的模板字符串；
        第二个参数 options 是编译的配置，内部调用了 baseCompile 函数。
        我们可以看到，这里的调用关系和 runtime-dom、runtime-core 的关系类似，compiler-dom 负责传入浏览器 Dom 相关的 API，实际编译的 baseCompile 是由 compiler-core 提供的。
    参考代码：01-compile.js
