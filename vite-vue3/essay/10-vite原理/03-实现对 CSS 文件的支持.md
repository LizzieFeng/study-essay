# 接下来我们再来实现对 CSS 文件的支持

下面的代码中，如果 url 是 CSS 结尾，我们就返回一段 JavaScript 代码。
这段 JavaScript 代码会在浏览器里创建一个 style 标签，标签内部放入我们读取的 CSS 文件代码。
这种对 CSS 文件的处理方式，让 CSS 以 JavaScript 的形式返回，这样我们就实现了在 Node 中对 Vue 组件的渲染。

``````javascript

if(url.endsWith('.css')){
    const p = path.resolve(__dirname,url.slice(1))
    const file = fs.readFileSync(p,'utf-8')
    const content = `
    const css = "${file.replace(/\n/g,'')}"
    let link = document.createElement('style')
    link.setAttribute('type', 'text/css')
    document.head.appendChild(link)
    link.innerHTML = css
    export default css
    `
    ctx.type = 'application/javascript'
    ctx.body = content
  }
``````

图05