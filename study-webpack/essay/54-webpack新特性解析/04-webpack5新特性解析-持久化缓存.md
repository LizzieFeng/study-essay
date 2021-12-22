持久化缓存
在webpack4里面，可以使用cache-loader将编译结果写入硬盘缓存，还可以使用babel-loader，设置option.cacheDirectory将babel-loader编译的结果写进磁盘。

webpack5缓存策略
    .默认开启缓存，缓存默认是在内存里。可以对cahce进行设置
    .缓存淘汰策略： 文件缓存存储在node_modules/.cache/webpack,最大500MB，缓存时常两个星期，旧的缓存先淘汰。

如图4