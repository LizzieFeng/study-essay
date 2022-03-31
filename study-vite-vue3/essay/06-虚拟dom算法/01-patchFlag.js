
// class
// this flag is matched when the element has dynamic class bindings.
if (patchFlag & PatchFlags.CLASS) {
    if (oldProps.class !== newProps.class) {
      hostPatchProp(el, 'class', null, newProps.class, isSVG)
    }
  }
  
  // style
  // this flag is matched when the element has dynamic style bindings
  if (patchFlag & PatchFlags.STYLE) {
    hostPatchProp(el, 'style', oldProps.style, newProps.style, isSVG)
  }
  if (shapeFlag & ShapeFlags.ELEMENT) {
    processElement(
      n1,
      n2,
      container,
      anchor,
      parentComponent,
      parentSuspense,
      isSVG,
      slotScopeIds,
      optimized
    )
  } else if (shapeFlag & ShapeFlags.COMPONENT) {
    processComponent(
      n1,
      n2,
      container,
      anchor,
      parentComponent,
      parentSuspense,
      isSVG,
      slotScopeIds,
      optimized
    )
  }