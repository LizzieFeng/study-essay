# vite 插件
    首先我们在项目中使用了 script setup 来组织我们的代码，虽然组件引入之后有了自动注册的功能，但是每一个组件内部都肯定要用到 ref、computed 等 Vue 提供的 API。
    
    我们还想要多一步，项目大了只引入 ref 的语句就写了几百行，就会非常地繁琐，这时候就可以使用编译的思想来解决这个问题。
    
    首先 ref、computed、watch 等 Vue 提供的 API，我们在后面的代码调用可以通过正则匹配的方式，完全可以分析出来当前组件依赖的 API 有哪些。
    
    这样，我们就可以在组件执行之前自动导入这些 API。
    
    我们在 weiyouyi 项目中使用 vite 插件的形式来完成这个工作。
    
    社区内已经有可用的 auto-imput 插件了，不过这里为了加深对技术的理解，咱们还是自己来实现一个。
    
    首先我们进入到根目录下的 vite.config.js 文件中，导入 autoPlugin 插件后，配置在 vite 的 plugins 插件中。

    ``````javascript
        
        import vue from '@vitejs/plugin-vue'
        import autoPlgin from './src/auto-import'
        export default defineConfig({
            plugins: [vue(),autoPlgin()]
        })

    ``````

    然后我们来实现 autoPlugin(01-autoPlugin.js) 函数，vite 的插件开发文档你可以在官网中查询，这里就不赘述了。
    我们直接看代码，我们先定义了 Vue 3 提供的 API 数组，有 ref、computed 等等。
    然后，autoImportPlugin 函数对外导出一个对象，transform 函数就是核心要实现的逻辑。
    这里的 helper 和我们在 32 讲中的工具函数实现逻辑一致，通过 new Regexp 创建每个函数匹配的正则。
    如果匹配到对应的 API，就把 API 的名字加入到 helper 集合中，最后在 script setup 的最上方加入一行 import 语句。


    接着，我们在项目的 src 目录下新建 App.vue。下面的代码实现了一个简易的累加器，并且还会在 onMount 之后打印一条信息，这里的 ref、computed 和 onMounted 都是没有导入的。我们在浏览器就能看到页面可以正常显示，这时我们在浏览器调试窗口的 sources 页面中，就可以看到 App.vue 的代码已经自动加上了 import 语句。


    ``````vue

        <template>
        <div @click="add">
            {{num}} * 2 = {{double}}
        </div>
        </template>

        <script setup>
        let num = ref(1)
        let double = computed(()=>num.value*2)

        function add(){
        num.value++
        }
        onMounted(()=>{
        console.log('mounted')
        })

        </script>
    ``````
    如图01-vite.webp
    这里的代码都是硬编码实现的，逻辑也比较简单。不过，实际场景中判断 ref 等 API 调用的正则和导入 import 的方式，都不会这么简单。如果我们自己每次都写一个 parse 模块比较麻烦，所以我们实际开发中会借助现有的工具对代码进行解析，而代码转换的场景下最成熟的工具就是 Babel。