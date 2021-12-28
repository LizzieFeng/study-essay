
import {setupComponent} from './component'
const mountComponent: MountComponentFn = (
) => {
  // 2.x compat may pre-creaate the component instance before actually
  // mounting
  const compatMountInstance =
    __COMPAT__ && initialVNode.isCompatRoot && initialVNode.component
  const instance: ComponentInternalInstance =
    compatMountInstance ||
    (initialVNode.component = createComponentInstance(
      initialVNode,
      parentComponent,
      parentSuspense
    ))

  // resolve props and slots for setup context
  if (!(__COMPAT__ && compatMountInstance)) {

    setupComponent(instance)

  }
   (
    instance,
    initialVNode,
    container,
    anchor,
    parentSuspense,
    isSVG,
    optimized
  )

  if (__DEV__) {
    popWarningContext()
    endMeasure(instance, `mount`)
  }
}