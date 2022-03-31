
export function createAppAPI<HostElement>(
    render: RootRenderFunction,
    hydrate?: RootHydrateFunction
  ): CreateAppFunction<HostElement> {
    return function createApp(rootComponent, rootProps = null) {
      const context = createAppContext()
      let isMounted = false
  
      const app: App = (context.app = {
        _context: context,
        _instance: null,
        use(plugin: Plugin, ...options: any[]) ,
        component(name: string, component?: Component): any {
          if (!component) {
            return context.components[name]
          }
          context.components[name] = component
          return app
        },
        directive(name: string, directive?: Directive)
        mount(
          rootContainer: HostElement,
          isHydrate?: boolean,
          isSVG?: boolean
        ): any {
          if (!isMounted) {
            const vnode = createVNode(
              rootComponent as ConcreteComponent,
              rootProps
            )
            vnode.appContext = context
            // 核心的逻辑
            if (isHydrate && hydrate) {
              hydrate(vnode as VNode<Node, Element>, rootContainer as any)
            } else {
              render(vnode, rootContainer, isSVG)
            }
            return getExposeProxy(vnode.component!) || vnode.component!.proxy
          } 
        },
  
        provide(key, value) {
          context.provides[key as string] = value
          return app
        }
      })
  
      return app
    }
  }