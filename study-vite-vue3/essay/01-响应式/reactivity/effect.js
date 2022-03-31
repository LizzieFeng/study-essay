
export function effect(fn, options = {}) {
    // effect嵌套，通过队列管理
    const effectFn = () => {
      try {
        activeEffect = effectFn
        //fn执行的时候，内部读取响应式数据的时候，就能在get配置里读取到activeEffect
        return fn()
      } finally {
        activeEffect = null
      }
    }
    if (!options.lazy) {
      //没有配置lazy 直接执行
      effectFn()
    }
    effectFn.scheduler = options.scheduler // 调度时机 watchEffect回用到
    return effectFn
    
  }

  // scheduler 存在的意义就是我们可以手动控制函数执行的时机，
  // 方便应对一些性能优化的场景，
  // 比如数据在一次交互中可能会被修改很多次，我们不想每次修改都重新执行依次 effect 函数，
  // 而是合并最终的状态之后，
  // 最后统一修改一次。scheduler 怎么用你可以看下面的代码，
  // 我们使用数组管理传递的执行任务，
  // 最后使用 Promise.resolve 只执行最后一次，这也是 Vue 中 watchEffect 函数的大致原理。