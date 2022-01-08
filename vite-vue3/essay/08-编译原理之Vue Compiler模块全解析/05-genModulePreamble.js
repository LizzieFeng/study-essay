
// 生成这个 
// import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

function genModulePreamble(
    ast: RootNode,
    context: CodegenContext,
    genScopeId: boolean,
    inline?: boolean
  ) {
  
    if (genScopeId && ast.hoists.length) {
      ast.helpers.push(PUSH_SCOPE_ID, POP_SCOPE_ID)
    }
    // generate import statements for helpers
    if (ast.helpers.length) {
        push(
          `import { ${ast.helpers
            .map(s => `${helperNameMap[s]} as _${helperNameMap[s]}`)
            .join(', ')} } from ${JSON.stringify(runtimeModuleName)}\n`
        )
      }
    }
    ...
  }
  