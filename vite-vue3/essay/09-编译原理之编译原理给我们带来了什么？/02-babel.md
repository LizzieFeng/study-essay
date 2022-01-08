# Babel

我们在项目中异步的任务有很多，经常使用 async+ await 的语法执行异步任务，比如网络数据的获取。
但 await 是异步任务，如果报错，我们需要使用 try catch 语句进行错误处理，每个 catch 语句都是一个打印语句会让代码变得冗余，但我们有了代码转化的思路后，这一步就能用编译的思路自动来完成。

首先我们在根目录的 src/main.js 中新增下面代码(02-delyError.js)，我们使用 delyError 函数模拟异步的任务报错，在代码中使用 await 来模拟异步任务。

这里我们希望每个 await 都能跟着一个 try 代码，在 catch 中能够打印错误消息提示的同时，还能够使用调用错误监控的函数，把当前错误信息发给后端服务器进行报警，当然也可以打印一个自动去 stackoverflow 查询的链接。


页面中 await 语句变多了之后，手动替换的成本就比较高，我们可以继续使用 vite 的插件来实现。

这次我们就是用 Babel 提供好的代码解析能力对代码进行转换。

Babel 都提供了哪些 API，你可以在Babel 的官网进行深入学习。

Babel 提供了完整的编译代码的功能后函数，包括 AST 的解析、语义分析、代码生成等，我们可以通过下面的函数去实现自己的插件。(02-实现插件.js)

@babel/parser 提供了代码解析的能力，能够把 js 代码解析成 AST，代码就从字符串变成了树形结构，方便我们进行操作；
@babel/traverse 提供了遍历 AST 的能力，我们可以从 travser 中获取每一个节点的信息后去修改它；
@babe/types 提供了类型判断的函数，我们可以很方便的判断每个节点的类型；
@babel/core 提供了代码转化的能力。

下面的代码中我们实现了 vite-plugin-auto-try 插件(02-vite-plugin-auto-try.js)，由 babel/parer 解析成为 AST，通过 travser 遍历整个 AST 节点，配置的 AwaitExpression 会识别出 AST 中的 await 调用语句，再用 isTryStatement 判断 await 外层是否已经包裹了 try 语句。如果没有 try 语句的话，就使用 tryStatement 函数生成新的 AST 节点。这个 AST 包裹当前的节点，并且我们在内部加上了 stackoverflow 链接的打印。最后，使用 babel/core 提供的 transformFromAstSync 函数，把优化后的 AST 生成新的 JavaScript 代码，自动新增 try 代码的插件就实现了。


然后，我们在根目录下的 src/main.js 中写入下面的代码(02-demo.vue)。两个 await 语句一个使用 try 包裹，一个没有使用 try 包裹。

接着我们启动项目后，就来到了浏览器的调试窗口中的 source 页面，可以看到下图中解析后的 main.js 代码，现在没有 try 的 await 语句已经自动加上了 try 语句。

你看，这次我们基于 babel 来实现，就省去了我们写正则的开发成本。Babel 提供了一整套关于 JavaScirpt 中语句的转化函数，有兴趣的同学可以去 Babel 官网了解。



有了 Babel 提供的能力之后，我们可以只关注于代码中需要转换的逻辑，比如我们可以使用 Babel 实现国际化，把每种语言在编译的时候自动替换语言，打包成独立的项目；
也可以实现页面的自动化监控，在一些操作函数里面加入监控的代码逻辑。

你可以自行发挥想象力，使用编译的思想来提高日常的开发效率。最后我们回顾一下 Vue 中的 compiler。

Vue 中的 compiler-dom 提供了 compile 函数，具体的 compile 逻辑我们在上一讲中已经详细学习了。

其实我们也可以手动导入 compiler-dom 包之后，自己实现对 vue template 的解析。

另
外，Vue 中还提供了 @vue/compiler-sfc 包，用来实现单文件组件.vue 的解析，还有 @vue/compiler-ssr 包，它实现了服务端渲染的解析。下一讲我们一起来手写 vite 的代码内容，我们就需要在 nodejs 中实现对 Vue 单文件组件的解析工作，实现浏览器中直接导入单文件组件的功能，敬请期待。