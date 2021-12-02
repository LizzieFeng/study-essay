1. 安装 babel插件
npm i @babel/plugin-syntax-dynamic-import --save-dev

2. 把插件添加到.babelrc中 es6： 动态import（webpack4，目前还没有原生支持，需要babel转换）

{
    presets:[
        ...
    ],
    plugins: [
        "@babel/plugin-syntax-dynamic-import"
    ]
}