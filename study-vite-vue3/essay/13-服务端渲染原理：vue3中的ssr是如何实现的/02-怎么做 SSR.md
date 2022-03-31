# 怎么做 SSR

那怎么在服务器端实现组件渲染呢？Vue 提供了 @vue/server-renderer 这个专门做服务端解析的库，我们来尝试使用一下。

首先创建一个新的文件夹 vue-ssr，执行下面命令来安装 server-renderer、vue 和 express：

``````

npm init -y 
npm install @vue/server-renderer vue@next express --save
``````

然后新建 server.js，核心就是要实现在服务器端解析 Vue 的组件，直接把渲染结果返回给浏览器。

下面的代码中我们使用 express 启动了一个服务器，监听 9093 端口，在用户访问首页的时候，通过 createSSRApp 创建一个 Vue 的实例，并且通过 @vue/compiler-ssr 对模板的 template 进行编译，返回的函数配置在 vueapp 的 ssrRender 属性上，最后通过 @vue/server-renderer 的 renderToString 方法渲染 Vue 的实例，把 renderToString 返回的字符串通过 res.send 返回给客户端。


现在我们访问页面后，点击右键查看网页源代码，会出现下图所示的页面：(02-ssr页面.webp)

可以看到，首屏的 body 标签内部就出现了 vue 组件中 v-for 渲染后的标签结果，我们的第一步就完成了。

但具体 SSR 是怎么实现的呢？我们一起来看源码。
