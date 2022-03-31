tokenizer 的迷你实现

首先，我们要对 template 进行词法分析，下面的代码就是 tokenizer 的迷你实现。我们使用 tokens 数组存储解析的结果，然后对模板字符串进行循环，在 template 中，< > / 和空格都是关键的分隔符，如果碰见 < 字符，我们需要判断下一个字符的状态。如果是字符串我们就标记 tagstart；如果是 /，我们就知道是结束标签，标记为 tagend，最终通过 push 方法把分割之后的 token 存储在数组 tokens 中返回。

参考代码03-tokenizer.js
实现了上面的代码，我们就得到了解析之后的 token 数组。