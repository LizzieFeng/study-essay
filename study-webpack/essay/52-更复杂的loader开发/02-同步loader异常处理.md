loader 异常处理(同步的laoder)

方式一：loader内直接通过throw抛出

方式二： 通过this.callback传递错误
this.callback(
    err: Error | null,
    content: string | Buffer,
    sourceMap?: SourceMap,
    meta?: any
);