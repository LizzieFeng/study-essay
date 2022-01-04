

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