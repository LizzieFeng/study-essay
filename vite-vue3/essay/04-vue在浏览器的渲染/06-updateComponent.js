
const instance = (n2.component = n1.component)!
if (shouldUpdateComponent(n1, n2, optimized)) {

  // normal update
  instance.next = n2
  // in case the child component is also queued, remove it to avoid
  // double updating the same child component in the same flush.
  invalidateJob(instance.update)
  // instance.update is the reactive effect.
  instance.update()
  
} else {
  // no update needed. just copy over properties
  n2.component = n1.component
  n2.el = n1.el
  instance.vnode = n2
}