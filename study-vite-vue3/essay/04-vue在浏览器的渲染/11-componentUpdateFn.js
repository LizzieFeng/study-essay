
const componentUpdateFn = ()=>{
    if (!instance.isMounted) {
        //首次渲染
        instance,
          parentSuspense,
          isSVG
        )
        。。。
    }else{
      let { next, bu, u, parent, vnode } = instance
      if (next) {
        next.el = vnode.el
        updateComponentPreRender(instance, next, optimized)
      } else {
        next = vnode
      }
      const nextTree = renderComponentRoot(instance)
        patch(
          prevTree,
          nextTree,
          // parent may have changed if it's in a teleport
          hostParentNode(prevTree.el!)!,
          // anchor may have changed if it's in a fragment
          getNextHostNode(prevTree),
          instance,
          parentSuspense,
          isSVG
        )
      }
  }
  
  // 注册effect函数
  const effect = new ReactiveEffect(
    componentUpdateFn,
    () => queueJob(instance.update),
    instance.scope // track it in component's effect scope
  )
  const update = (instance.update = effect.run.bind(effect) as S      chedulerJob)
  update()
  
    const updateComponentPreRender = ( 
      instance: ComponentInternalInstance,
      nextVNode: VNode,
      optimized: boolean
    ) => {
      nextVNode.component = instance
      const prevProps = instance.vnode.props
      instance.vnode = nextVNode
      instance.next = null
      updateProps(instance, nextVNode.props, prevProps, optimized)
      updateSlots(instance, nextVNode.children, optimized)
  
      pauseTracking()
      // props update may have triggered pre-flush watchers.
      // flush them before the render update.
      flushPreFlushCbs(undefined, instance.update)
      resetTracking()
    }