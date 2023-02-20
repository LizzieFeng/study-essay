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

        // 调用此方法就是成功
        let resolve = (value) => {
            // 状态为PENDING时，才可以更新状态，防止executor中调用了两次resolve/reject
            if(this.status === PENDING) {
                this.status =  FULFILLED;
                this.value = value;
            }
        }

        // 调用此方法就是失败
        let reject = (reason) => {
            // 状态为PENDING时，才可以更新状态，防止executor中调用了两次resolve/reject
            if(this.status === PENDING) {
                this.status =  REJECTED;
                this.reason = reason;
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
    }
}

const promise = new Promise((resolve, reject) => {
    resolve("成功");
}).then(
    (data) => {console.log('success', data)}, 
    (err) => {console.log('faild', err)}
);

