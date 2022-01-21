
export async function renderToString(
    input: App | VNode,
    context: SSRContext = {}
  ): Promise<string> {
    if (isVNode(input)) {
      // raw vnode, wrap with app (for context)
      return renderToString(createApp({ render: () => input }), context)
    }
    const vnode = createVNode(input._component, input._props)
    vnode.appContext = input._context
    // provide the ssr context to the tree
    input.provide(ssrContextKey, context)
    const buffer = await renderComponentVNode(vnode)
  
    await resolveTeleports(context)
  
    return unrollBuffer(buffer as SSRBuffer)
  }