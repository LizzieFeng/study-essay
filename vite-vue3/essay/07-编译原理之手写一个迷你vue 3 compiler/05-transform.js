
function transform(ast) {
    // 优化一下ast
    let context = {
      // import { toDisplayString , createVNode , openBlock , createBlock } from "vue"
      helpers:new Set(['openBlock','createVnode']), // 用到的工具函数 
    }
    traverse(ast, context)
    ast.helpers = context.helpers
  }