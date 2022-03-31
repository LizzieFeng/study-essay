
export function renderComponentVNode(
    vnode: VNode,
    parentComponent: ComponentInternalInstance | null = null,
    slotScopeId?: string
  ): SSRBuffer | Promise<SSRBuffer> {
    const instance = createComponentInstance(vnode, parentComponent, null)
    const res = setupComponent(instance, true /* isSSR */)
    if (hasAsyncSetup || prefetches) {
      ....
      return p.then(() => renderComponentSubTree(instance, slotScopeId))
    } else {
      return renderComponentSubTree(instance, slotScopeId)
    }
  }
  function renderComponentSubTree(instance,slotScopeId){
    const { getBuffer, push } = createBuffer()
    const ssrRender = instance.ssrRender || comp.ssrRender
    if (ssrRender) {
        ssrRender(
          instance.proxy,
          push,
          instance,
          attrs,
          // compiler-optimized bindings
          instance.props,
          instance.setupState,
          instance.data,
          instance.ctx
        )
    }
  }