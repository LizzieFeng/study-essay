转载：https://zhuanlan.zhihu.com/p/183801144

特别需要注意的是：因为Promise 是没有中断方法的，xhr.abort()、ajax 有自己的中断方法，axios 是基于 ajax 实现的；fetch 基于 promise，所以他的请求是无法中断的。

这也是 promise 存在的缺陷，我们可以使用 race 来自己封装中断方法：