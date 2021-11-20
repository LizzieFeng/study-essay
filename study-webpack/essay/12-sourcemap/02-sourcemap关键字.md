eval: 使用eval包裹模块代码
    在打包的时候，eval这个块会把代码包裹起来，在包裹起来之后，在每一段代码块后面会有一个sourcemap文件，
    sourcemap的url来指定，sourcemap的信息。

        ````javascript
            mode: 'none',
            devtool: 'eval'
        ````

        ````javascript
            // 打包后的js文件中
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HelloWebpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n\nconsole.log(_HelloWebpack__WEBPACK_IMPORTED_MODULE_0__.HelloWebpack);\ndocument.write((0,_HelloWebpack__WEBPACK_IMPORTED_MODULE_0__.HelloWebpack)());\n\n//# sourceURL=webpack://helloword/./src/index/index.js?");
        ````
source map： 产生.map文件
    也就是说source map文件和打包出来的对应的那个js或者css文件，是分离的。
        ````javascript
            mode: 'none',
            devtool: 'source-map'
        ````

        打包后发现多了一个同名的.map文件，js和source map分离
        打包后的js文件的最后一行//# sourceMappingURL=search_fb5addff.js.map，会告知应该使用哪个sourcemap

cheap：不包含列信息
    有的时候，报错了，去点开错误堆栈会具体的定位到多少行，多少列。如果使用了这个字段，则就只能定位到行，无法定位到列。
inline: 将.map作为dataURI嵌入，不单独生成.map文件
    将sourcemap 你的内容将js代码是在一起的，也就是打包的时候，会将sourcemap和js打包在一起，也就是，sourcemap的内容，内联到了js里面去了

        ````javascript
            mode: 'none',
            devtool: 'inline-source-map'
        ````
        这里打包出来的source map 和js是在一起的。

module：包含loader的sourcemap
    包含了sourcemap的信息，也包含了loader的sourcemap的信息。
    也就是，出错的时候，就可以定位。