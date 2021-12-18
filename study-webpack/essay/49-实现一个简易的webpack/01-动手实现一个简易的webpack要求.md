动手实现一个简易的webpack

可以将es6 语法转换成 es5的语法
    .通过babylon生成AST
    .通过babel-core将AST重新生成源码
可以分析模块之间的依赖关系
    .通过babel-traverse的ImportDeclaration 方法获取依赖属性

生成的JS文件可以在浏览器中运行。