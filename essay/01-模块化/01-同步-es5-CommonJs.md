同步
Node webpack使用commonJs
1. module.export 
    - module
    - exports
    - require
    - global
2. 定义的模块分为3中
    - require模块应用
    - exports 模块定义
    - module 模块标识

3. 特点
    - 基本数据类型： 赋值，即会被模块缓存，可以被另一模块重新赋值
    - 复杂数据类型： 浅copy
    - 当使用require加载同一模块时，不会再执行该模块，而是取到缓存之中的值，
      也就是说：
        CommonJs模块，无论加载多少次，都只会在第一次加载时运行一次，以后再加载，就会返回第一次运行的结果，除非手动清除缓存。


a.js

````javascript

export.done = false;
let b = require('./b.js');
console.log('a.js-1', b.done);
export.done = true;
console.log('a.js-2', '执行完毕');

````


b.js

````javascript

export.done = false;
let b = require('./a.js');
console.log('b.js-1', a.done);
export.done = true;
console.log('b.js-2', '执行完毕');

````


c.js

````javascript

let a = require('./a.js');
let b = require('./b.js');
console.log('c-js-1', '执行完毕', a.done, b.done);

````

c.js 执行结果
````javascript
b.js-1 false
b.js-2 执行完毕
a.js-1 true
a.js-2 执行完毕
c-js-1 执行完毕 true true
````

# 结论
循环加载时，CommonJs属于加载时执行，即脚本代码在require时候，就会全部执行，一旦某个模块被循环加载，只输出已经执行部分，未执行部分不会输出。