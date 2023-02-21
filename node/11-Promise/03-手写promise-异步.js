const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

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
        if(this.status ===  FULFILLED) {
            onFulfilled(this.value);
        }

        if(this.status ===  REJECTED) {
            onRejected(this.reason);
        }

        if(this.status === PENDING) {
            // 如果promise是pending，需要将onFulfilled 和onRejected函数存放起来，等待状态确定后，再依次将对应的函数执行
            this.onResolvedCallbacks.push(() => {
                onFulfilled(this.value);
            });
            this.onRejectedCallbacks.push(() => {
                onRejected(this.reason);
            });
        }
    }
}

const promise = new Promise((resolve, reject) => {
   setTimeout(() => {
    resolve('成功');
   }, 1000);
}).then(
    (data) => {console.log('success', data)}, 
    (err) => {console.log('faild', err)}
);

