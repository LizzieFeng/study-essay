然后我们通过阅读 Pinia 的源码，来看下 Pinia 是如何实现的。

首先我们进入到 Pinia 的 GitHub 中，我们可以在 packages/pinia/src/createPinia.ts 中看到 createPinia 函数的实现。

下面的代码中(03-createPinia.js)，我们通过 effectScope 创建一个作用域对象，并且通过 ref 创建了响应式的数据对象 state。然后通过 install 方法支持了 app.use 的注册，内部通过 provide 的语法和全局的 $pinia 变量配置 Pinia 对象，并且通过 use 方法和 toBeInstalled 数组实现了 Pinia 的插件机制。最后还通过 pinia.use(devtoolsPlugin) 实现了对 VueDevtools 的支持。

通过上面的代码，我们可以看到 Pinia 实例就是 ref({}) 包裹的响应式对象，项目中用到的 state 都会挂载到 Pinia 这个响应式对象内部。

然后我们去看下创建 store 的 defineStore 方法, defineStore 内部通过 useStore 方法去定义 store，并且每个 store 都会标记唯一的 ID。

首先通过 getCurrentInstance 获取当前组件的实例，如果 useStore 参数没有 Pinia 的话，就使用 inject 去获取 Pinia 实例，这里 inject 的数据就是 createPinia 函数中 install 方法提供的。

然后设置 activePinia，项目中可能会存在很多 Pinia 的实例，设置 activePinia 就是设置当前活跃的 Pinia 实例。
这个函数的实现方式和 Vue 中的 componentInstance 很像，每次创建组件的时候都设置当前的组件实例，这样就可以在组件的内部通过 getCurrentInstance 获取，最后通过 createSetupStore 或者 createOptionsStore 创建组件。


这就是上面代码中我们使用 Composition 和 Option 两种语法创建 store 的不同执行逻辑，最后通过 pinia._s 缓存创建后的 store，_s 就是在 createPinia 的时候创建的一个 Map 对象，防止 store 多次重复创建。到这 store 创建流程就结束了。


在 Pinia 中 createOptionsStore 内部也是调用了 createSetupStore 来创建 store 对象。下面的代码中(03-createOptionsStore.js)，我们通过 assign 方法实现了 setup 函数，这里可以看到 computed 的实现，内部就是通过 pinia._s 缓存获取 store 对象，调用 store 的 getters 方法来模拟，最后依然通过 createSetupStore 创建。


最后我们来看一下 createSetupStore 函数的实现。这个函数也是 Pinia 中最复杂的函数实现，内部的 $patch(03-patch.js) 函数可以实现数据的更新。如果传递的参数 partialStateOrMutator 是函数，则直接执行，否则就通过 mergeReactiveObjects 方法合并到 state 中，最后生成 subscriptionMutation 对象，通过 triggerSubscriptions 方法触发数据的更新。

然后定义 partialStore(03-partialStore.js) 对象去存储 ID、$patch、Pinia 实例，并且新增了 subscribe 方法。再调用 reactive 函数把 partialStore 包裹成响应式对象，通过 pinia._s.set 的方法实现 store 的挂载。

最后我们通过 pinia._s.get 获取的就是 partialStore 对象，defineStore 返回的方法 useStore 就可以通过 useStore 去获取缓存的 Pinia 对象，实现对数据的更新和读取。

这里我们也可以看到，除了直接执行 Action 方法，还可以通过调用内部的 count.$patch({count:count+1}) 的方式来实现数字的累加。

我们可以看出一个简单的 store 功能，真正需要支持生产环境的时候，也需要很多逻辑的封装。

代码内部除了 __dev__ 调试环境中对 Devtools 支持的语法，还有很多适配 Vue 2 的语法，并且同时支持 Optipn 风格和 Composition 风格去创建 store。createSetupStore 等方法内部也会通过 Map 的方式实现缓存，并且 setActivePinia 方法可以在多个 Pinia 实例的时候获取当前的实例。

这些思路在 Vue、vue-router 源码中都能看到类似的实现方式，这种性能优化的思路和手段也值得我们学习，在项目开发中也可以借鉴。