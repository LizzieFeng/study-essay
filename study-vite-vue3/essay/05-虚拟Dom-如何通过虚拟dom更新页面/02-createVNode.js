
const vnode = createVNode(    (
    rootComponent as ConcreteComponent,
    rootProps
  )
  function _createVNode() {
  
    // 处理属性和class
    if (props) {
      ...
    }
  
    // 标记vnode信息
    const shapeFlag = isString(type)
      ? ShapeFlags.ELEMENT
      : __FEATURE_SUSPENSE__ && isSuspense(type)
      ? ShapeFlags.SUSPENSE
      : isTeleport(type)
      ? ShapeFlags.TELEPORT
      : isObject(type)
      ? ShapeFlags.STATEFUL_COMPONENT
      : isFunction(type)
      ? ShapeFlags.FUNCTIONAL_COMPONENT
      : 0
  
    return createBaseVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      isBlockNode,
      true
    )
  }
  
  function createBaseVNode(type,props,children,...){
      const vnode = {
      type,
      props,
      key: props && normalizeKey(props),
      ref: props && normalizeRef(props),
      children,
      shapeFlag,
      patchFlag,
      dynamicProps,
       ...
    } as VNode
    // 标准化子节点
    if (needFullChildrenNormalization) {
      normalizeChildren(vnode, children)
    } else if (children) {
      vnode.shapeFlag |= isString(children)
        ? ShapeFlags.TEXT_CHILDREN
        : ShapeFlags.ARRAY_CHILDREN
    }
    return vnode
  }componentUpdateFn