// in
// 如果指定的属性在指定的对象或其原型链中，则 in 运算符 返回true。

const obj = {a: 1};

Object.prototype.b = 2;
// obj.prototype.b = 2; 报错

console.log('b in obj', b in obj); // false