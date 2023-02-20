+ 首先我们在调用 Promise 时，会返回一个 Promise 对象。
+ 构建 Promise 对象时，需要传入一个 executor 函数，Promise 的主要业务流程都在 executor 函数中执行。
+ 如果运行在 excutor 函数中的业务执行成功了，会调用 resolve 函数；如果执行失败了，则调用 reject 函数。
+ Promise 的状态不可逆，同时调用 resolve 函数和 reject 函数，默认会采取第一次调用的结果。

以上简单介绍了 Promise 的一些主要的使用方法，结合 Promise/A+ 规范，我们可以分析出 Promise 的基本特征：

1. promise 有三个状态：pending，fulfilled，or rejected；「规范 Promise/A+ 2.1」
2. new promise时， 需要传递一个executor()执行器，执行器立即执行；
3. executor接受两个参数，分别是resolve和reject；
4. promise 的默认状态是 pending；
5. promise 有一个value保存成功状态的值，可以是undefined/thenable/promise；「规范 Promise/A+ 1.3」
6. promise 有一个reason保存失败状态的值；「规范 Promise/A+ 1.5」
7. promise 只能从pending到rejected, 或者从pending到fulfilled，状态一旦确认，就不会再改变；
8. promise 必须有一个then方法，then 接收两个参数，分别是 promise 成功的回调 onFulfilled, 和 promise 失败的回调 onRejected；「规范 Promise/A+ 2.2」
9. 如果调用 then 时，promise 已经成功，则执行onFulfilled，参数是promise的value；
10. 如果调用 then 时，promise 已经失败，那么执行onRejected, 参数是promise的reason；
11. 如果 then 中抛出了异常，那么就会把这个异常作为参数，传递给下一个 then 的失败的回调onRejected；