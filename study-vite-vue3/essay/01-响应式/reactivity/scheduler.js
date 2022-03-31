
const obj = reactive({ count: 1 })
effect(() => {
  console.log(obj.count)
}, {
  // 指定调度器为 queueJob
  scheduler: queueJob
})
// 调度器实现
const queue = []
let isFlushing = false
function queueJob(job) {
  if (!isFlushing) {
    isFlushing = true
    Promise.resolve().then(() => {
      let fn
      while(fn = queue.shift()) {
        fn()
      }
    })
  }
}