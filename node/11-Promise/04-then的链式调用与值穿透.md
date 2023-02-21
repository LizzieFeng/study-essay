Promise的优势在于链式调用。

在我们使用Promise的时候，then函数中return了一个值，不管是什么值，我们都能在下一个then中获取到，这就是所谓的<b>then的链式调用</b>。  

而且，我们不在then中放入参数，例：`promise.then().then()`，那么其后面的`then`依旧可以得到之前then返回的值，这就是所谓的<b>值的穿透</b>

那具体如何实现呢？

简单思考一下：
1. 如果每次调用`then`的时候，
2. 我们都重新创建一个`promise`对象，
3. 并把上一个`then`的返回结果传给这个新的`promise`的`then`的方法
4. 不就可以一直`then`下去了吗

有了上面的想法，我们再结合<u>Promise/A+</u> 规范梳理一下思路：

1. then 的参数 onFulfilled 和 onRejected 可以缺省，如果 onFulfilled 或者 onRejected不是函数，将其忽略，且依旧可以在下面的 then 中获取到之前返回的值；「规范 Promise/A+ 2.2.1、2.2.1.1、2.2.1.2」
2. promise 可以 then 多次，每次执行完 promise.then 方法后返回的都是一个“新的promise"；「规范 Promise/A+ 2.2.7」
3. 如果 then 的返回值 x 是一个普通值，那么就会把这个结果作为参数，传递给下一个 then 的成功的回调中；
4. 如果 then 中抛出了异常，那么就会把这个异常作为参数，传递给下一个 then 的失败的回调中；「规范 Promise/A+ 2.2.7.2」
5. 如果 then 的返回值 x 是一个 promise，那么会等这个 promise 执行完，promise 如果成功，就走下一个 then 的成功；如果失败，就走下一个 then 的失败；如果抛出异常，就走下一个 then 的失败；「规范 Promise/A+ 2.2.7.3、2.2.7.4」
6. 如果 then 的返回值 x 和 promise 是同一个引用对象，造成循环引用，则抛出异常，把异常传递给下一个 then 的失败的回调中；「规范 Promise/A+ 2.3.1」
7. 如果 then 的返回值 x 是一个 promise，且 x 同时调用 resolve 函数和 reject 函数，则第一次调用优先，其他所有调用被忽略；「规范 Promise/A+ 2.3.3.3.3」