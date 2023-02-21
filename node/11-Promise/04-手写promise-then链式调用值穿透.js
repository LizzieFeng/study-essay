const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

const resolvePromise = (promise2,x,resolve,reject) => {
    console.log("resolvePromise, ", x);
    // 自己等待自己完成时错误的实现，用一个类型错误，结束掉promise Promise/A+ 2.3.1
    if(promise2 === x) {
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'));
    }

    // Promise/A+ 2.3.3.3.3 只能调用一次
    let called;
    // 后续的条件要严格判断 保证代码能和别的库一起使用
    if((typeof x === 'object' && typeof x !== null) || (typeof x === 'function')){
        try {
            // 为了判断resolve 过得就不用在reject了，(比如 reject 和 resolve同时调用的时候) Promise
            let then = x.then;
            if(typeof then === 'function') {
                // 不要写成x.then ，直接then.call就可以，因为x.then会再次取值， Object.defineProperty  Promise/A+ 2.3.3.3
                then.call( 
                    x, 
                    y => { // 根据promise的状态决定是成功还是失败
                        if (called) return;
                        called = true;
                        // 递归解析的过程，因为promise中可能还有promise Promise/A+ 2.3.3.3.1
                        resolvePromise(promise2, y, resolve, reject);
                    }, 
                    r => {
                        // 只要失败就失败 Promise/A+ 2.3.3.3.2
                        if(called) retrurn ;
                        called = true;
                        reject(r) 
                    }
                );
            } else {
                // 如果x.then是个普通值就直接返回resolve 作为结果  Promise/A+ 2.3.3.4
                resolve(x);
            }

        } catch (e) {
            // Promise/A+ 2.3.3.2
            if(called) {
                return ;
            }

            called = true;
            reject(e);
        }
    } else {
        console.log("resolvePromise 最外层else, ", this.status);
        // 如果x是个普通值就直接返回resolve作为结果 Promise/A+ 2.3.4
        resolve(x);
    }


}

class Promise {
    constructor(executor) {
        // 默认状态
        this.status = PENDING;
        // 存放成功状态的值
        this.value = undefined;
        // 存放失败状态的值
        this.reason = undefined;
        // 存放成功的回调
        this.onResolvedCallbacks = [];
        // 存放失败的回调
        this.onRejectedCallbacks = [];

        // 调用此方法就是成功
        let resolve = (value) => {
            // 状态为PENDING时，才可以更新状态，防止executor中调用了两次resolve/reject
            if(this.status === PENDING) {
                console.log("Promise, resolve", value );
                this.status =  FULFILLED;
                this.value = value;
                // 依次将对应的函数执行
                this.onResolvedCallbacks.forEach(fn => fn() );
            }
        }

        // 调用此方法就是失败
        let reject = (reason) => {
            // 状态为PENDING时，才可以更新状态，防止executor中调用了两次resolve/reject
            if(this.status === PENDING) {
                console.log("Promise, reject" );
                this.status =  REJECTED;
                this.reason = reason;
                // 依次将对应的函数执行
                this.onRejectedCallbacks.forEach(fn => fn());
            }
        }

        try {
            // 立即执行
            executor(resolve,reject);

        } catch (error) {
            reject(error)
        }
    }

    // 包含一个then方法，并接收两个参数onFulfilled, onRejected
    then(onFulfilled, onRejected) {
        // 解决onFulfilled onRejected 没有传值的问题
        // Promise/A+ 2.2.1 / Promise/A+ 2.2.5 / Promise/A+ 2.2.7.3 / Promise/A+ 2.2.7.4
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
        // 因为错误的值要让后面访问到，所以这里也要跑出个错误，不然，会在之后then的resolve中捕获
        onRejected = typeof onRejected === 'function' ? onRejected :  err => {throw err};
        // 每次调用then都返回一个新的promise  Promise/A+ 2.2.7
        let promise2 = new Promise((resolve, reject) => {
            console.log("new  p2", this.status);
            if(this.status ===  FULFILLED) {
                //Promise/A+ 2.2.2
                //Promise/A+ 2.2.4 --- setTimeout
                setTimeout(() => {
                    console.log(" status =" , this.status);
                    try {
                        //Promise/A+ 2.2.7.1
                        let x = onFulfilled(this.value);
                        // x 可能是一个promise
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        //Promise/A+ 2.2.7.2
                        reject(e);
                    }
                }, 0);
            }


            if(this.status ===  REJECTED) {
                console.log("setTimeout out status =" , this.status);
                //Promise/A+ 2.2.3
                setTimeout(() => {
                    console.log(" status =" , this.status);
                    try {
                        console.log('rejected setTimeout try')
                        let x = onRejected(this.reason);
                        console.log("dddddddddddddddd");
                        console.log('rejected setTimeout try x,', x)
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        console.log('rejected setTimeout catch')
                        //Promise/A+ 2.2.7.2
                        reject(e);
                    }
                }, 0);
            }

            if(this.status === PENDING) { 
                console.log("setTimeout out status =" , this.status);
                this.onResolvedCallbacks.push(() => {
                    setTimeout(() => {
                        console.log("arr status =" , this.status);
                        try {
                            let x = onFulfilled(this.value);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e);
                        }
                    }, 0);
                });

                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        console.log(" arr status =" , this.status);
                        try {
                            let x = onRejected(this.reason);
                            console.log("没有throw", this.status, resolve);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e);
                        }
                    }, 0);
                });
            }
        });

        return promise2;
    }
}

const promise = new Promise((resolve, reject) => {
    reject('失败');
  }).then().then().then(data=>{
    console.log("ddddfff")
    console.log(data);
  },err=>{
    console.log('err',err);
  })
