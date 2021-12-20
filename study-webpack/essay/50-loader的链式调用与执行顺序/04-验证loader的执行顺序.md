通过一个例子验证loader的执行顺序

a-loader.js

moudle.exports = function(source) {
    console.log('loader a is executed' );
    return source;
}


b-loader.js

moudle.exports = function(source) {
    console.log('loader b is executed' );
    return source;
}

