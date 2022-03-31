
// createRouter传递参数的类型
export interface RouterOptions extends PathParserOptions {
    history: RouterHistory
    routes: RouteRecordRaw[]
    scrollBehavior?: RouterScrollBehavior
    ...
  }
  // 每个路由配置的类型
  export type RouteRecordRaw =
    | RouteRecordSingleView
    | RouteRecordMultipleViews
    | RouteRecordRedirect
  
  //... other config
  // Router接口的全部方法和属性
  export interface Router {
    readonly currentRoute: Ref<RouteLocationNormalizedLoaded>
    readonly options: RouterOptions
  
    addRoute(parentName: RouteRecordName, route: RouteRecordRaw): () => void
    addRoute(route: RouteRecordRaw): () => void
    Route(name: RouteRecordName): void
    hasRoute(name: RouteRecordName): boolean
  
    getRoutes(): RouteRecord[]
    resolve(
      to: RouteLocationRaw,
      currentLocation?: RouteLocationNormalizedLoaded
    ): RouteLocation & { href: string }
    push(to: RouteLocationRaw): Promise<NavigationFailure | void | undefined>
    replace(to: RouteLocationRaw): Promise<NavigationFailure | void | undefined>
    back(): ReturnType<Router['go']>
    forward(): ReturnType<Router['go']>
    go(delta: number): void
    beforeEach(guard: NavigationGuardWithThis<undefined>): () => void
    beforeResolve(guard: NavigationGuardWithThis<undefined>): () => void
    afterEach(guard: NavigationHookAfter): () => void
    onError(handler: _ErrorHandler): () => void
    isReady(): Promise<void>
    install(app: App): void
  }
  
  
  
  
  
  export function createRouter(options: RouterOptions): Router {
  
  
  
  }