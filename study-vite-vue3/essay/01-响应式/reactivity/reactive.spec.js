
import { effect } from './effect'
import { reactive } from './reactive'
// 使用下面代码测试 reactive 的功能，能够在响应式数据 ret 更新之后，执行 effect 中注册的函数：
describe('测试响应式', () => {
  test('reactive基本使用', () => {
    const ret = reactive({ num: 0 })
    let val
    effect(() => {
      val = ret.num
    })
    expect(val).toBe(0)
    ret.num++
    expect(val).toBe(1)
    ret.num = 10
    expect(val).toBe(10)
  })
})