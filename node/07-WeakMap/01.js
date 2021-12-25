const  w1 = new WeakMap();

const o1 = {};
const o2 = o1;

w1.set(o1, 'o1');

w1.set(o2, 'o2');

const v1 = w1.get(o1);

const v2 = w1.get(o2);

console.log('v1, v2, w1.length', v1, v2, w1.length) // o2 o2 undefined