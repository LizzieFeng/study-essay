
export const transformIf = createStructuralDirectiveTransform(
    /^(if|else|else-if)$/,
    (node, dir, context) => {
      return processIf(node, dir, context, (ifNode, branch, isRoot) => {
        const siblings = context.parent!.children
        let i = siblings.indexOf(ifNode)
        let key = 0
        while (i-- >= 0) {
          const sibling = siblings[i]
          if (sibling && sibling.type === NodeTypes.IF) {
            key += sibling.branches.length
          }
        }
        return () => {
          if (isRoot) {
            ifNode.codegenNode = createCodegenNodeForBranch(
              branch,
              key,
              context
            ) as IfConditionalExpression
          } else {
            // attach this branch's codegen node to the v-if root.
            const parentCondition = getParentCondition(ifNode.codegenNode!)
            parentCondition.alternate = createCodegenNodeForBranch(
              branch,
              key + ifNode.branches.length - 1,
              context
            )
          }
        }
      })
    }
  )