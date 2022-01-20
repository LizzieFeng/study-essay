
export const RouterViewImpl = /*#__PURE__*/ defineComponent({
    name: 'RouterView',
    props: {
      name: {
        type: String as PropType<string>,
        default: 'default',
      },
      route: Object as PropType<RouteLocationNormalizedLoaded>,
    },
    // router-view组件源码
    setup(props, { attrs, slots }) {
      // 全局的reactiveRoute对象注入
      const injectedRoute = inject(routerViewLocationKey)!
      
      const routeToDisplay = computed(() => props.route || injectedRoute.value)
      const depth = inject(viewDepthKey, 0)
      const matchedRouteRef = computed<RouteLocationMatched | undefined>(
        () => routeToDisplay.value.matched[depth]
      )
      // 嵌套层级
      provide(viewDepthKey, depth + 1)
      // 匹配的router对象
      provide(matchedRouteKey, matchedRouteRef)
      provide(routerViewLocationKey, routeToDisplay)
  
      const viewRef = ref<ComponentPublicInstance>()
      // 返回的render函数
      return () => {
        const route = routeToDisplay.value
        const matchedRoute = matchedRouteRef.value
        const ViewComponent = matchedRoute && matchedRoute.components[props.name]
        const currentName = props.name
  
        if (!ViewComponent) {
          return normalizeSlot(slots.default, { Component: ViewComponent, route })
        }
  
        // props from route configuration
        const routePropsOption = matchedRoute!.props[props.name]
        const routeProps = routePropsOption
          ? routePropsOption === true
            ? route.params
            : typeof routePropsOption === 'function'
            ? routePropsOption(route)
            : routePropsOption
          : null
  
        const onVnodeUnmounted: VNodeProps['onVnodeUnmounted'] = vnode => {
          // remove the instance reference to prevent leak
          if (vnode.component!.isUnmounted) {
            matchedRoute!.instances[currentName] = null
          }
        }
        // 创建需要渲染组件的虚拟dom
        const component = h(
          ViewComponent,
          assign({}, routeProps, attrs, {
            onVnodeUnmounted,
            ref: viewRef,
          })
        )
    
        return (
          // pass the vnode to the slot as a prop.
          // h and <component :is="..."> both accept vnodes
          normalizeSlot(slots.default, { Component: component, route }) ||
          component
        )
      }
    },
  })