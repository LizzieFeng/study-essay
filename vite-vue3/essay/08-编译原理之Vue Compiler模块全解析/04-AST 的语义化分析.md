AST 的语义化分析
    下一步我们要对 AST 进行语义化的分析。
    transform 函数的执行流程分支很多，核心的逻辑就是识别一个个的 Vue 的语法，并且进行编译器的优化，我们经常提到的静态标记就是这一步完成的。
    
    我们进入到 transform （如04-transform.js）函数中，可以看到，内部通过 createTransformContext 创建上下文对象，这个对象包含当前分析的属性配置，包括是否 ssr，是否静态提升还有工具函数等等，这个对象的属性你可以在 GitHub上看到。


    然后通过 traverseNode(04-traverseNode.js) 即可编译 AST 所有的节点。核心的转换流程是在遍历中实现，内部使用 switch 判断 node.type 执行不同的处理逻辑。比如如果是 Interpolation，就需要在 helper 中导入 toDisplayString 工具函数，这个迷你版本中我们也实现过。

    
    transform 中还会调用 transformElement 来转换节点，用来处理 props 和 children 的静态标记，transformText 用来转换文本，这里的代码比较简单， 你可以自行在Github上查阅。
    
    transform 函数参数中的 nodeTransforms 和 directiveTransforms 传递了 Vue 中 template 语法的配置，这个两个函数由 getBaseTransformPreset 返回。
    
    下面的代码中(04-getBaseTransformPreset.js)，transformIf 和 transformFor 函数式解析 Vue 中 v-if 和 v-for 的语法转换，transformOn 和 transformModel 是解析 v-on 和 v-model 的语法解析，这里我们只关注 v- 开头的语法。

    然后我们再来看看 transformIf (04-transformIf.js)的函数实现。首先判断 v-if、v-else 和 v-else-if 属性，内部通过 createCodegenNodeForBranch 来创建条件分支，在 AST 中标记当前 v-if 的处理逻辑。这段逻辑标记结束后，在 generate 中就会把 v-if 标签和后面的 v-else 标签解析成三元表达式。


    transform 对 AST 分析结束之后，我们就得到了一个优化后的 AST 对象，最后我们需要调用 generate 函数最终生成 render 函数。