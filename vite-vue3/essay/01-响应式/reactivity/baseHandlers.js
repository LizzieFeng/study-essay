
import { effect } from './effect'
import { reactive } from './reactive'
import { track } from './track';
import { trigger } from './trigger';
const get = createGetter();
const set = createSetter();

function createGetter(shallow = false) {
  return function get(target, key, receiver) {
    const res = Reflect.get(target, key, receiver)
    track(target, "get", key)
    if (isObject(res)) {
      // 值也是对象的话，需要嵌套调用reactive
      // res就是target[key]
      // 浅层代理，不需要嵌套
      return shallow ? res : reactive(res)
    }
    return res
  }
}

function createSetter() {
  return function set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver)
    // 在触发 set 的时候进行触发依赖
    trigger(target, "set", key)
    return result
  }
}

// 好，看回来，我们剖析 mutableHandles。
// 它要做的事就是配置 Proxy 的拦截函数，
// 这里我们只拦截 get 和 set 操作，
export const mutableHandlers = {
  get,
  set,
};