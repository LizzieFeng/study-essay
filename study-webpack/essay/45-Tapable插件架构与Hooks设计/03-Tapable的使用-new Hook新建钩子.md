Tapable的使用-New Hook新建钩子

Tapable暴露出来的都是类方法，new 一个类方法获得我们需要的钩子

class接受数组参数options，非必传， 类方法会根据传参，接受同样数量的参数。

const hook1 = new SyncHook(['arg1', 'arg2', 'arg3']);