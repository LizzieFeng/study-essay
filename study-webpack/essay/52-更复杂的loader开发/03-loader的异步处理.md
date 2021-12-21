loader的异步处理

通过this.async来返回一个异步函数
    .第一个参数是Error，第二个参数是处理的结果

示意代码
``````javascript
module.exports = function(input) {
    const callback = this.async();

    //No callback -> return synchronous results
    //if(callback) {...}

    callback(null, input+input);
}

``````