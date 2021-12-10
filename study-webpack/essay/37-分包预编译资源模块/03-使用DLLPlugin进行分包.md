使用DLLPlugin进行分包：

创建一个单独的构建配置文件，一般情况下会命名为：webpack.dll.js，内容如 图二

如果还想分离基础业务包，可以在entry 下新增一个属性，例如：baseLibrary