Vue 中的 computed 计算属性也是一种特殊的 effect 函数，我们可以新建 computed.spec.js 来测试 computed 函数的功能，computed 可以传递一个函数或者对象，实现计算属性的读取和修改。比如说可以这么用：


怎么实现呢？我们新建 computed 函数，看下面的代码，我们拦截 computed 的 value 属性，并且定制了 effect 的 lazy 和 scheduler 配置，computed 注册的函数就不会直接执行，而是要通过 scheduler 函数中对 _dirty 属性决定是否执行。