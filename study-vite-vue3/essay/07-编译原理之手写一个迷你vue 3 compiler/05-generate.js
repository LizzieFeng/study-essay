
function generate(ast) {
    const {helpers} = ast 
  
    let code = `
  import {${[...helpers].map(v=>v+' as _'+v).join(',')}} from 'vue'\n
  export function render(_ctx, _cache, $props){
    return(_openBlock(), ${ast.children.map(node=>walk(node))})}`
  
    function walk(node){
      switch(node.type){
        case 'element':
          let {flag} = node // 编译的标记
          let props = '{'+node.props.reduce((ret,p)=>{
            if(flag.props){
              //动态属性
              ret.push(p.key +':_ctx.'+p.val.replace(/['"]/g,'') )
            }else{
              ret.push(p.key +':'+p.val )
            }
  
            return ret
          },[]).join(',')+'}'
          return `_createVnode("${node.tag}",${props}),[
            ${node.children.map(n=>walk(n))}
          ],${JSON.stringify(flag)}`
          break
        case 'text':
          if(node.static){
            return '"'+node.val+'"'
          }else{
            return `_toDisplayString(_ctx.${node.val})`
          }
          break
      }
    }
    return code
  }