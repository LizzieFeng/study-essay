
export function trigger(target, type, key) {
    // console.log(`触发 trigger -> target:  type:${type} key:${key}`)
    // 从targetMap中找到触发的函数，执行他
    const depsMap = targetMap.get(target)
    if (!depsMap) {
      // 没找到依赖
      return
    }
    const deps = depsMap.get(key)
    if (!deps) {
      return
    }
    deps.forEach((effectFn) => {
  
      if (effectFn.scheduler) {
        effectFn.scheduler()
      } else {
        effectFn()
      }
    })
    
  }