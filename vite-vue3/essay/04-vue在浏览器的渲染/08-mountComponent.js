
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


==================
  //挂载组件
  function mountComponent(vnode, container) {
    // 创建组件实例，其实就是个对象，包含组件的各种属性
    const instance = vnode.component = {
      vnode,
      type:vnode.tyope,
      props:vnode.props,
      setupState:{}, //响应式状态
      slots:{},
      ctx:{},
      emit:()=>{}
    }
    // 启动setup函数中的各种响应式数据
    setupComponent(instance)

    setupRenderEffect(instance, initialVNode, container)
  }