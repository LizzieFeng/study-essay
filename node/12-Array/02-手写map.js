Array.prototype.myMap = function (cb, thisArg) {
    const result = [];
    if(!Array.isArray(this)) {
        throw new Error('not a array');
    }

    if(typeof cb !== 'function') {
        throw new Error('not a function');
    }

    for(let i = 0; i< this.length ; i ++) {
        const cbReturn = cb.call(thisArg, this[i], i, this);
        result.push(cbReturn);
    }

    return result;
}

const arr = [1,2,3];

const mResult =  arr.myMap((e,i) => {
    return Math.pow(e, 2)
});

console.log(arr);
console.log(mResult)