
Array.prototype.myForEach = function (cb, thisArg)   {
    let context = arguments[1];
    if( !(this instanceof Array) ) { // Array.isArray(xxx)
        throw new Error('not a array');
    } 
    
    if(typeof cb !== 'function') {
        throw new Error('parameter1 is not a function')
    }

    for (let i = 0; i < this.length; i++) {
        cb.call(context, this[i], i, this);
    }
}

const arr = [1,2,3];

arr.myForEach((e,i) => {
    arr[i] = Math.pow(e, 2)
});

console.log(arr);