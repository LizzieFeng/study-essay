首先 import {createApp} from Vue 这一步由于浏览器无法识别 Vue 的路径，就会直接抛出错误，所以我们要在 Koa 中把 Vue 的路径重写。
    为了方便演示，我们可以直接使用 replace 语句，把 Vue 改成 /@modules/vue，使用 @module 开头的地址来告诉 Koa 这是一个需要去 node_modules 查询的模块。
    在下面的代码中，我们判断如果请求地址是 js 结尾，就去读取对应的文件内容，使用 rewriteImport 函数处理后再返回文件内容。
    在 rewriteImport 中我们实现了路径的替换，把 Vue 变成了 @modules/vue， 现在浏览器就会发起一个http://localhost:24678/@modules/vue 的请求，下一步我们要在 Koa 中拦截这个请求，并且返回 Vue 的代码内容。

    ``````javascript

        const fs = require('fs')
        const path = require('path')
        const Koa = require('koa')
        const app = new Koa()

        function rewriteImport(content){
        return content.replace(/ from ['|"]([^'"]+)['|"]/g, function(s0,s1){
            // . ../ /开头的，都是相对路径
            if(s1[0]!=='.'&& s1[1]!=='/'){
            return ` from '/@modules/${s1}'`
            }else{
            return s0
            }
        })
        }

        app.use(async ctx=>{
        const {request:{url,query} } = ctx
        if(url=='/'){
            ctx.type="text/html"
            let content = fs.readFileSync('./index.html','utf-8')
            
            ctx.body = content
        }else if(url.endsWith('.js')){
            // js文件
            const p = path.resolve(__dirname,url.slice(1))
            ctx.type = 'application/javascript'
            const content = fs.readFileSync(p,'utf-8')
            ctx.body = rewriteImport(content)
        }
        })
        app.listen(24678, ()=>{
        console.log('快来快来说一书，端口24678')
        })

    ``````

    如图一

    然后我们在 Koa 中判断请求地址，如果是 @module 的地址，就把后面的 Vue 解析出来，去 node_modules 中查询。
    然后拼接出目标路径 ./node_modules/vue/package.json 去读取 Vue 项目中 package.json 的 module 字段，这个字段的地址就是 ES6 规范的入口文件。
    在我们读取到文件后，再使用 rewriteImport 处理后返回即可。
    这里还要使用 rewriteImport 的原因是，Vue 文件内部也会使用 import 的语法去加载其他模块。
    然后我们就可以看到浏览器网络请求列表中多了好几个 Vue 的请求。

    ``````java


        else if(url.startsWith('/@modules/')){
            // 这是一个node_module里的东西
            const prefix = path.resolve(__dirname,'node_modules',url.replace('/@modules/',''))
            const module = require(prefix+'/package.json').module
            const p = path.resolve(prefix,module)
            const ret = fs.readFileSync(p,'utf-8')
            ctx.type = 'application/javascript'
            ctx.body = rewriteImport(ret)
        }

    ``````

    图二

    这样我们就实现了 node_modules 模块的解析，然后我们来处理浏览器无法识别 .vue 文件的错误。

    .vue 文件是 Vue 中特有的文件格式，我们上一节课提过 Vue 内部通过 @vue/compiler-sfc 来解析单文件组件，把组件分成 template、style、script 三个部分，我们要做的就是在 Node 环境下，把 template 的内容解析成 render 函数，并且和 script 的内容组成组件对象，再返回即可。
    其中，compiler-dom 解析 template 的流程我们学习过，今天我们来看下如何使用。
    在下面的代码中，我们判断 .vue 的文件请求后，通过 compilerSFC.parse 方法解析 Vue 组件，通过返回的 descriptor.script 获取 JavaScript 代码，并且发起一个 type=template 的方法去获取 render 函数。
    在 query.type 是 template 的时候，调用 compilerDom.compile 解析 template 内容，直接返回 render 函数。

``````java


const compilerSfc = require('@vue/compiler-sfc') // .vue
const compilerDom = require('@vue/compiler-dom') // 模板





if(url.indexOf('.vue')>-1){
    // vue单文件组件
    const p = path.resolve(__dirname, url.split('?')[0].slice(1))
    const {descriptor} = compilerSfc.parse(fs.readFileSync(p,'utf-8'))

    if(!query.type){
      ctx.type = 'application/javascript'
      // 借用vue自导的compile框架 解析单文件组件，其实相当于vue-loader做的事情
      ctx.body = `
  ${rewriteImport(descriptor.script.content.replace('export default ','const __script = '))}
  import { render as __render } from "${url}?type=template"
  __script.render = __render
  export default __script
      `
    }else if(query.type==='template'){
      // 模板内容
      const template = descriptor.template
      // 要在server端吧compiler做了
      const render = compilerDom.compile(template.content, {mode:"module"}).code
      ctx.type = 'application/javascript'

      ctx.body = rewriteImport(render)
    }
    
``````

上面的代码实现之后，我们就可以在浏览器中看到 App.vue 组件解析的结果。
App.vue 会额外发起一个 App.vue?type=template 的请求，最终完成了整个 App 组件的解析。

图03
图04