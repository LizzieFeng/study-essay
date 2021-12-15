webpack-cli做的事情
    .引入 yargs，对命令行进行定制
    .分析命令行参数，对各个参数进行转换，组成编译配置项
    .引入webpack，根据配置项进行编译和构建


源码：如图一
    NON_COMPILATION_CMD 在命令行中并不是所有的命令都需要进行编译，像webpack init，这种就不用生成webpack实例。