
function traverse(ast, context){
    switch(ast.type){
      case "root":
        context.helpers.add('createBlock')
        // log(ast)
      case "element":
        ast.children.forEach(node=>{
          traverse(node,context)
        })
        ast.flag = 0
        ast.props = ast.props.map(prop=>{
          const {key,val} = prop
          if(key[0]=='@'){
            ast.flag |= PatchFlags.EVENT // 标记event需要更新
            return {
              key:'on'+key[1].toUpperCase()+key.slice(2),
              val
            }
          }
          if(key[0]==':'){
            const k = key.slice(1)
            if(k=="class"){
              ast.flag |= PatchFlags.CLASS // 标记class需要更新
  
            }else if(k=='style'){
              ast.flag |= PatchFlags.STYLE // 标记style需要更新
            }else{
              ast.flag |= PatchFlags.PROPS // 标记props需要更新
            }
            return{
              key:key.slice(1),
              val
            }
          }
          if(key.startsWith('v-')){
            // pass such as v-model 
          }
          //标记static是true 静态节点
          return {...prop,static:true} 
        })
        break
      case "text":
        // trnsformText
        let re = /\{\{(.*)\}\}/g
        if(re.test(ast.val)){
          //有{{
            ast.flag |= PatchFlags.TEXT // 标记props需要更新
            context.helpers.add('toDisplayString')
            ast.val = ast.val.replace(/\{\{(.*)\}\}/g,function(s0,s1){
              return s1
            })
        }else{
          ast.static = true
        }
    }
  }  
  