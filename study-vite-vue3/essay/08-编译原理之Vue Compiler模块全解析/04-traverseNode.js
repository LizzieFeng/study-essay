

export function traverseNode(
    node: RootNode | TemplateChildNode,
    context: TransformContext
  ) {
    context.currentNode = node
    // apply transform plugins
    const { nodeTransforms } = context
    const exitFns = []
    for (let i = 0; i < nodeTransforms.length; i++) {
      // 处理exitFns
    }
    swtch (node.type) {
      case NodeTypes.COMMENT:
        if (!context.ssr) {
          context.helper(CREATE_COMMENT)
        }
        break
      case NodeTypes.INTERPOLATION:
        if (!context.ssr) {
          context.helper(TO_DISPLAY_STRING)
        }
        break
      case NodeTypes.IF:
        for (let i = 0; i < node.branches.length; i++) {
          traverseNode(node.branches[i], context)
        }
        break
      case NodeTypes.IF_BRANCH:
      case NodeTypes.FOR:
      case NodeTypes.ELEMENT:
      case NodeTypes.ROOT:
        traverseChildren(node, context)
        break
    }
  
    // exit transforms
    context.currentNode = node
    let i = exitFns.length
    while (i--) {
      exitFns[i]()
    }
  }
  