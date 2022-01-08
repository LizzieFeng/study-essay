
function genNode(node: CodegenNode | symbol | string, context: CodegenContext) {
    if (isString(node)) {
      context.push(node)
      return
    }
    if (isSymbol(node)) {
      context.push(context.helper(node))
      return
    }
    switch (node.type) {
      case NodeTypes.ELEMENT:
      case NodeTypes.IF:
      case NodeTypes.FOR:
        genNode(node.codegenNode!, context)
        break
      case NodeTypes.TEXT:
        genText(node, context)
        break
      case NodeTypes.SIMPLE_EXPRESSION:
        genExpression(node, context)
        break
      case NodeTypes.INTERPOLATION:
        genInterpolation(node, context)
        break
      case NodeTypes.TEXT_CALL:
        genNode(node.codegenNode, context)
        break
      case NodeTypes.COMPOUND_EXPRESSION:
        genCompoundExpression(node, context)
        break
      case NodeTypes.COMMENT:
        genComment(node, context)
        break
      case NodeTypes.VNODE_CALL:
        genVNodeCall(node, context)
        break
  
      case NodeTypes.JS_CALL_EXPRESSION:
        genCallExpression(node, context)
        break
      case NodeTypes.JS_OBJECT_EXPRESSION:
        genObjectExpression(node, context)
        break
      case NodeTypes.JS_ARRAY_EXPRESSION:
        genArrayExpression(node, context)
        break
      case NodeTypes.JS_FUNCTION_EXPRESSION:
        genFunctionExpression(node, context)
        break
      case NodeTypes.JS_CONDITIONAL_EXPRESSION:
        genConditionalExpression(node, context)
        break
      case NodeTypes.JS_CACHE_EXPRESSION:
        genCacheExpression(node, context)
        break
      case NodeTypes.JS_BLOCK_STATEMENT:
        genNodeList(node.body, context, true, false)
        break
  
      /* istanbul ignore next */
      case NodeTypes.IF_BRANCH:
        // noop
        break
  
    }
  }