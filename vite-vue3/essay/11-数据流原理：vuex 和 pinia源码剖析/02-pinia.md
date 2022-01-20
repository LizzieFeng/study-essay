下图01是 Pinia 官网的介绍，可以看到类型安全、Vue 的 Devtools 支持、易扩展、只有 1KB 的体积等优点。快来看下 Pinia 如何使用吧。

首先我们在项目根目录下执行下面的命令去安装 Pinia 的最新版本。
``````node
npm install pinia@next
`````

然后在 src/main.js 中，我们导入 createPinia 方法，通过 createPinia 方法创建 Pinia 的实例后，再通过 app.use 方法注册 Pinia。

``````javascript

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
const pinia = createPinia()
const app = createApp(App)
app.use(pinia).mount('#app')

``````

然后我们可以在 store 文件夹中创建一个 count.js(02-count.js)。下面的代码中我们通过 Pinia 的 defineStore 方法定义了一个 store，store 内部通过 state 返回一个对象，并且通过 Actions 配置修改数据的方法 add。这里使用的语法和 Vuex 比较类似，只是删除了 Mutation 的概念，统一使用 Actions 来配置。

然后我们可以使用 Composition 的方式在代码中使用 store。注意上面的 store 返回的其实就是一个 Composition 风格的函数，使用 useCounterStore 返回 count 后，可以在 add 方法中直接使用 count.add 触发 Actions，实现数据的修改。

``````vue

import { useCounterStore } from '../stores/count'

const count = useCounterStore()
function add(){
  count.add()
}

    
``````

我们也可以使用 Composition 风格的语法，去创建一个 store。使用 ref 或者 reactive 包裹后，通过 defineStore 返回，这样 store 就非常接近我们自己分装的 Composition 语法了，也去除了很多 Vuex 中特有的概念，学习起来更加简单。

``````js

export const useCounterStore = defineStore('count', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }

  return { count, increment }
})

``````