我们先来看看 compiler-dom 做了哪些额外的配置。
    首先，parserOption 传入了 parse 的配置，通过 parserOption 传递的 isNativeTag 来区分 element 和 component。这里的实现也非常简单，把所有 html 的标签名存储在一个对象中，然后就可以很轻松地判断出 div 是浏览器自带的 element。
    baseCompile 传递的其他参数 nodeTransforms 和 directiveTransforms，它们做的也是和上面代码类似的事。
    如02-compile-dom.js