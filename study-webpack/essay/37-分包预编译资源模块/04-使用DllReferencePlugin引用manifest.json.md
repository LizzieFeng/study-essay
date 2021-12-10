包分好之后，使用DLLReferencePlugin引用manifest.json,如图三


图中plugin 插件中的属性 manifest就是对我们引入哪一个包的描述。
例如：
假设，我们分离了两个包，一个基础包(entry 下的library)，以个基础业务包(entry 下的 baseLibrary)。
如果只想引入基础包的话呢，
我们在plugins下加一个new webpack.DllReferencePlugin,
这个里面设置一个基础包的json，
如果你既想引用基础包也想引用业务包，那么就在plugin下在增加一个
new webpack.DllReferencePlugin({
    manifest: 这里指定业务包的文件。
})
