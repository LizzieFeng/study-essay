vite构建速度快的原因

    预构建使用ESBuild(冷启动快的原因)：https://github.com/evanw/esbuild

    如图一

    vite和snowpack都会使用到ESBuild

    那为什么esbuild这么快呢？
    其实是因为，esbuild里面使用的是Golang语言，去进行打包的。
    比如说去处理js、ts。

    Golang语言它是一个静态语言，所以他的速度会比js这种动态语言是要快的。