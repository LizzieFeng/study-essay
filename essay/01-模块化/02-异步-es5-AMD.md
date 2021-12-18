# AMD (Asynchronous Module Definition)
    require.js 对模块化定义的一种规范化产出

    模块本身和模块之间的引用，可以被异步加载

    是浏览器端经常用的一种模式。

## 依赖前置
    先引入模块，后使用模块

## 优点
    1. 包括异步调用和本身高扩展性
    2. 解耦， 模块在代码中也可以通过识别号进行查找

    ````javascript

        define([./package/lib.js], function (lib) {
            function say() {
                lib.log('this is fn');
            }
            return {
                say: say
            }
        });

    ````

## AMD只能在运行时确定模块的依赖关系