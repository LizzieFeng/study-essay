# CMD
    sea.js
    依赖就近原则

sayHello.js
````javascript

    define(function(require, exports, module){
        // 通过require引入依赖关系，
        // 并不是AMD的依赖前置
        // 而是依赖就近，哪里用哪里引
        // 例如 下例 引入jquery
        var JQ = require('jquery');
        exports.sayHello = function () {
            $('#Hello').toggle('slow');
        }
    });

````

main.js
````javascript

    define(function(require) {
        var CMD = require('sayHello');
        var temp = new CMD();
        temp.sayHello();
    });

````