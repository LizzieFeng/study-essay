我们从第一步把数据包裹成响应式对象开始。先看 reactive 的实现。

我们进入到 reactivity 目录中，新建 reactive.spec.js，使用下面代码测试 reactive 的功能，能够在响应式数据 ret 更新之后，执行 effect 中注册的函数：