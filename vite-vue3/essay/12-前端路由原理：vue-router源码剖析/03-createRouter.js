
export function createRouter(options: RouterOptions): Router {
    ....
      let started: boolean | undefined
      const installedApps = new Set<App>()
      // 路由对象
      const router: Router = {
        currentRoute,
    
        addRoute,
        removeRoute,
        hasRoute,
        getRoutes,
        resolve,
        options,
    
        push,
        replace,
        go,
        back: () => go(-1),
        forward: () => go(1),
    
        beforeEach: beforeGuards.add,
        beforeResolve: beforeResolveGuards.add,
        afterEach: afterGuards.add,
    
        onError: errorHandlers.add,
        isReady,
        // 插件按章
        install(app: App) {
          const router = this
          // 注册全局组件 router-link和router-view
          app.component('RouterLink', RouterLink)
          app.component('RouterView', RouterView)
    
          app.config.globalProperties.$router = router
          Object.defineProperty(app.config.globalProperties, '$route', {
            enumerable: true,
            get: () => unref(currentRoute),
          })
          if (
            isBrowser &&
            !started &&
            currentRoute.value === START_LOCATION_NORMALIZED
          ) {
            // see above
            started = true
            push(routerHistory.location).catch(err => {
              if (__DEV__) warn('Unexpected error when starting the router:', err)
            })
          }
    
          const reactiveRoute = {} as {
            [k in keyof RouteLocationNormalizedLoaded]: ComputedRef<
              RouteLocationNormalizedLoaded[k]
            >
          }
          for (const key in START_LOCATION_NORMALIZED) {
            // @ts-expect-error: the key matches
            reactiveRoute[key] = computed(() => currentRoute.value[key])
          }
          // 提供全局配置
          app.provide(routerKey, router)
          app.provide(routeLocationKey, reactive(reactiveRoute))
          app.provide(routerViewLocationKey, currentRoute)
    
          const unmountApp = app.unmount
          installedApps.add(app)
          app.unmount = function () {
            installedApps.delete(app)
            // ...
            unmountApp()
          }
    
          if ((__DEV__ || __FEATURE_PROD_DEVTOOLS__) && isBrowser) {
            addDevtools(app, router, matcher)
          }
        },
      }
    
      return router
    }