const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

const resolvePromise = (promise2,x,resolve,reject) => {
    if(promise2 === x) {
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'));
    }

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
                        resolvePromise(promise2, y, resolve, reject);
                    }, 
                    r => {
                        if(called) retrurn ;
                        called = true;
                        reject(r) 
                    }
                );
            } else {
                // 如果x.then是个普通值就直接返回resolve 作为结果  
                resolve(x);
            }

        } catch (e) {
            if(called) {
                return ;
            }

            called = true;
            reject(e);
        }
    } else {
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
            // ======新增逻辑======
            // 如果 value 是一个promise，那我们的库中应该也要实现一个递归解析
            if(value instanceof Promise){
                // 递归解析 
                return value.then(resolve,reject)
            }
            // ===================
            // 状态为PENDING时，才可以更新状态，防止executor中调用了两次resolve/reject
            if(this.status === PENDING) {
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
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
        // 因为错误的值要让后面访问到，所以这里也要跑出个错误，不然，会在之后then的resolve中捕获
        onRejected = typeof onRejected === 'function' ? onRejected :  err => {throw err};
        // 每次调用then都返回一个新的promise  
        let promise2 = new Promise((resolve, reject) => {
            if(this.status ===  FULFILLED) {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value);
                        // x 可能是一个promise
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                }, 0);
            }


            if(this.status ===  REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                }, 0);
            }

            if(this.status === PENDING) { 
                this.onResolvedCallbacks.push(() => {
                    setTimeout(() => {
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
                        try {
                            let x = onRejected(this.reason);
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

    // 这里需要注意的是，promise.resolve是具备等待功能的。
    // 如果参数是promise，会等待这个promise解析完毕，在向下执行，
    // 所以这里需要在constructor的resole方法中做一个小小的处理
    static resolve (data) {
        return new Promise((resolve, reject) => {
            resolve(data)
        });
    }
}


// 这是mdn官方给的测试，original === cast 为true
// 但是本例子为false
// var original = Promise.resolve(33);
// var cast = Promise.resolve(original);
// cast.then(function(value) {
//   console.log('value: ' + value);
// });
// console.log('original === cast ? ' + (original === cast));

Promise.resolve(new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ok');
    }, 3000);
  })).then(data=>{
    console.log(data,'success');
  })
