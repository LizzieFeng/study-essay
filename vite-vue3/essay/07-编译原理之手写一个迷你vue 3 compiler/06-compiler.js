
function compiler(template) {
    const ast = parse(template);
    transform(ast)
  
    const code = generate(ast)
    return code
  }
  
  let template = `<div id="app">
    <div @click="()=>console.log(xx)" :id="name">{{name}}</div>
    <h1 :name="title">玩转vue3</h1>
    <p >编译原理</p>
  </div>
  `
  
  const renderFunction = compiler(template)
  console.log(renderFunction)
  
  // 下面是输出结果
  import { openBlock as _openBlock, createVnode as _createVnode, createBlock as _createBlock, toDisplayString as _toDisplayString } from 'vue'
  
  export function render(_ctx, _cache, $props) {
    return (_openBlock(), _createVnode("div", { id: "app" }), [
      _createVnode("div", { onClick: "()=>console.log(xx)", id: "name" }), [
        _toDisplayString(_ctx.name)
      ], 24, _createVnode("h1", { name: "title" }), [
        "玩转vue3"
      ], 8, _createVnode("p", {}), [
        "编译原理"
      ], 0
    ], 0)
  }
  