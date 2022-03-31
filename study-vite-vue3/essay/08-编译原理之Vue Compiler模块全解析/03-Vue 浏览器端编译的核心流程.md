# Vue 浏览器端编译的核心流程
    然后，我们进入到 baseCompile 函数中，这就是 Vue 浏览器端编译的核心流程。
    下面的代码中03-baseCompile.js可以很清楚地看到，
        我们先通过 baseParse 把传递的 template 解析成 AST，
        然后通过 transform 函数对 AST 进行语义化分析，
        最后通过 generate 函数生成代码。
    这个主要逻辑和我们写的迷你 compiler 基本一致，这些函数大概要做的事你也心中有数了。这里你也能体验到，亲手实现一个迷你版本对我们阅读源码很有帮助。接下来，我们就进入到这几个函数之中去，看一下跟迷你 compiler 里的实现相比，我们到底做了哪些优化。

    上一讲中我们体验了 Vue 的在线模板编译环境，可以在 console 中看到 Vue 解析得到的 AST。

    如下图03-VUE3的AST.webp所示，可以看到这个 AST 比迷你版多了很多额外的属性。loc 用来描述节点对应代码的信息，component 和 directive 用来记录代码中出现的组件和指令等等。

    然后我们进入到 baseParse 函数中, 这里的 createParserContext 和 createRoot 用来生成上下文，其实就是创建了一个对象，保存当前 parse 函数中需要共享的数据和变量，最后调用 parseChildren。children 内部开始判断 < 开头的标识符，判断开始还是闭合标签后，接着会生成一个 nodes 数组。其中，advanceBy 函数负责更新 context 中的 source 用来向前遍历代码，最终对不同的场景执行不同的函数。
    如03-baseParse.js

    parseInterpolation 和 parseText 函数的逻辑比较简单。
    parseInterpolation 负责识别变量的分隔符 {{ 和}} ，然后通过 parseTextData 获取变量的值，并且通过 innerStart 和 innerEnd 去记录插值的位置；
    parseText 负责处理模板中的普通文本，主要是把文本包裹成 AST 对象。
    
    接着我们看看处理节点的 parseElement ，03-parseElement.js函数都做了什么。首先要判断 pre 和 v-pre 标签，然后通过 isVoidTag 判断标签是否是自闭合标签，这个函数是从 compiler-dom 中传来的，之后会递归调用 parseChildren，接着再解析开始标签、解析子节点，最后解析结束标签。

    最后，我们来看下解析节点的 parseTag (03-parseTag.js)函数的逻辑，匹配文本标签结束的位置后，先通过 parseAttributes 函数处理属性，然后对 pre 和 v-pre 标签进行检查，最后通过 isComponent 函数判断是否为组件。isComponent 内部会通过 compiler-dom 传递的 isNativeTag 来辅助判断结果，最终返回一个描述节点的对象，包含当前节点所有解析之后的信息，tag 表示标签名，children 表示子节点的数组，具体代码我放在了后面。

    parse 函数生成 AST 之后，我们就有了一个完整描述 template 的对象，它包含了 template 中所有的信息。