Vue 虚拟DOM执行流程
    我们从虚拟 DOM 在 Vue 的执行流程开始讲起。在 Vue 中，我们使用虚拟 DOM 来描述页面的组件，比如下面的 template 虽然格式和 HTML 很像，但是在 Vue 的内部会解析成 JavaScript 函数，这个函数就是用来返回虚拟 DOM：
    ``````VUE
        
        <div id="app">
        <p>hello world</p>
        <Rate :value="4"></Rate>
        </div>
    ``````
    上面的 template 会解析成下面的函数，最终返回一个 JavaScript 的对象能够描述这段 HTML：
    ``````javascript

        
            function render(){
                return h('div',{id:"app"},children:[
                    h('p',{},'hello world'),
                    h(Rate,{value:4}),
                ])
            }
    ``````
