Vue 3 全面拥抱 Composition API 之后，没有了 this 这个黑盒，对 TypeScript 的支持也比 Vue2 要好很多。在下面的代码中，首先我们需要在 script 标签上加一个配置 lang=“ts”，来标记当前组件使用了 TypeScript，然后代码内部使用 defineComponent 定义组件即可。

``````vue


<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  // 已启用类型推断
})
</script>
``````

在 <script setup> 的内部，需要调整写法的内容不多。下面的代码使用 Composition API 的过程中，可以针对 ref 或者 reactive 进行类型推导。如果 ref 包裹的是数字，那么在对 count.value 进行 split 函数操作的时候，TypeScript 就可以预先判断 count.value 是一个数字，并且进行报错提示。

``````TypeScript


    const count = ref(1)
    count.value.split('') // => Property 'split' does not exist on type 'number'
``````

我们也可以显式地去规定 ref、reactive 和 computed 输入的属性，下面代码中我们分别演示了 ref、reactive 和 computed 限制类型的写法，每个函数都可以使用默认的参数推导，也可以显式地通过泛型去限制。
``````vue


<script setup lang="ts">
import { computed, reactive, ref } from '@vue/runtime-core';
interface 极客时间课程 {
    name:string,
    price:number
}



const msg = ref('') //  根据输入参数推导字符串类型
const msg1 = ref<string>('') //  可以通过范型显示约束

const obj = reactive({})
const course = reactive<极客时间课程>({name: '玩转Vue3全家桶', price: 129})

const msg2 = computed(() => '') // 默认参数推导
const course2 = computed<极客时间课程>(() => {
  return {name: '玩转Vue3全家桶', price: 129}
})
</script>
``````