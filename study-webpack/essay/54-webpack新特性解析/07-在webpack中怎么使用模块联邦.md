开创的新特性： ModuleFederationPlugin介绍
webpack内部通过ModuleFederationPlugin插件将多个应用结合起来。
    .name: 必须， 唯一ID，作为输出的模块名，使用的时通过${name}/${expose}的方式使用
    .library: 必须， 其中这里的name为作为umd的name
    .remotes: 可选，表示作为Host时，去消费哪些Remote;
    .shared: 可选，优先用Host的依赖，如果Host没有，再用自己的；
    .main.js：应用主文件
    .remoteEntry.js: 作为remote时被引的文件。