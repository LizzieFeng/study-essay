
import {mutableHandlers} from './baseHandlers'
//   之前讲过在 Vue3 中，reactive 是通过 ES6 中的 Proxy 特性实现的属性拦截，
// 所以，在 reactive 函数中我们直接返回 newProxy 即可：
export function reactive(target) {
    if (typeof target!=='object') {
      console.warn(`reactive  ${target} 必须是一个对象`);
      return target
    }
  
    return new Proxy(target, mutableHandlers);
  }

  // 可以看到，下一步我们需要实现的就是 Proxy 中的处理方法 mutableHandles。
  // 这里会把 Proxy 的代理配置抽离出来单独维护，
  // 是因为，其实 Vue3 中除了 reactive 还有很多别的函数需要实现，
  // 比如只读的响应式数据、浅层代理的响应式数据等，并且 reactive 中针对 ES6 的代理也需要单独的处理。