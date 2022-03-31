
function tokenizer(input) {
    let tokens = []
    let type = ''
    let val = ''
    // 粗暴循环
    for (let i = 0; i < input.length; i++) {
      let ch = input[i]
      if (ch === '<') {
        push()
        if (input[i + 1] === '/') {
          type = 'tagend'
        } else {
          type = 'tagstart'
        }
      } if (ch === '>') {
        if(input[i-1]=='='){
          //箭头函数
        }else{
          push()
          type = "text"
          continue
        }
      } else if (/[\s]/.test(ch)) { // 碰见空格截断一下
        push()
        type = 'props'
        continue
      }
      val += ch
    }
    return tokens
  
    function push() {
      if (val) {
        if (type === "tagstart") val = val.slice(1) // <div => div
        if (type === "tagend") val = val.slice(2)   //  </div  => div
        tokens.push({
          type,
          val
        })
        val = ''
      }
    }
  }