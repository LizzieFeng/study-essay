
export function createPinia(): Pinia {
    const scope = effectScope(true)
    // NOTE: here we could check the window object for a state and directly set it
    // if there is anything like it with Vue 3 SSR
    const state = scope.run(() => ref<Record<string, StateTree>>({}))!
  
    let _p: Pinia['_p'] = []
    // plugins added before calling app.use(pinia)
    let toBeInstalled: PiniaPlugin[] = []
  
    const pinia: Pinia = markRaw({
      install(app: App) {
        // this allows calling useStore() outside of a component setup after
        // installing pinia's plugin
        setActivePinia(pinia)
        if (!isVue2) {
          pinia._a = app
          app.provide(piniaSymbol, pinia)
          app.config.globalProperties.$pinia = pinia
          toBeInstalled.forEach((plugin) => _p.push(plugin))
          toBeInstalled = []
        }
      },
  
      use(plugin) {
        if (!this._a && !isVue2) {
          toBeInstalled.push(plugin)
        } else {
          _p.push(plugin)
        }
        return this
      },
  
      _p,
      _a: null,
      _e: scope,
      _s: new Map<string, StoreGeneric>(),
      state,
    })
    if (__DEV__ && IS_CLIENT) {
      pinia.use(devtoolsPlugin)
    }
  
    return pinia
  }
  