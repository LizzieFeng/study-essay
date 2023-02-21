Promise/A+规范提供了一个专门的测试脚本，可以测试所编写的代码是否符合Promise/A+的规范。

首先，在 promise 实现的代码中，增加以下代码:
``` js
Promise.defer = Promise.deferred = function () {
  let dfd = {};
  dfd.promise = new Promise((resolve,reject)=>{
      dfd.resolve = resolve;
      dfd.reject = reject;
  })
  return dfd;
}
```

安装测试脚本:

``` js
npm install -g promises-aplus-tests
```

如果当前的 promise 源码的文件名为 promise.js

那么在对应的目录执行以下命令:

``` js
promises-aplus-tests promise.js
```

promises-aplus-tests 中共有 872 条测试用例。以上代码，可以完美通过所有用例。