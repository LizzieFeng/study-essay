
export function defineStore(
    // TODO: add proper types from above
    idOrOptions: any,
    setup?: any,
    setupOptions?: any
  ): StoreDefinition {
    let id: string
    let options:...
    const isSetupStore = typeof setup === 'function'
    if (typeof idOrOptions === 'string') {
      id = idOrOptions
      // the option store setup will contain the actual options in this case
      options = isSetupStore ? setupOptions : setup
    } else {
      options = idOrOptions
      id = idOrOptions.id
    }
  
    function useStore(pinia?: Pinia | null, hot?: StoreGeneric): StoreGeneric {
      const currentInstance = getCurrentInstance()
      pinia =
        // in test mode, ignore the argument provided as we can always retrieve a
        // pinia instance with getActivePinia()
        (__TEST__ && activePinia && activePinia._testing ? null : pinia) ||
        (currentInstance && inject(piniaSymbol))
      if (pinia) setActivePinia(pinia)
  
      pinia = activePinia!
  
      if (!pinia._s.has(id)) {
        // creating the store registers it in `pinia._s`
        if (isSetupStore) {
          createSetupStore(id, setup, options, pinia)
        } else {
          createOptionsStore(id, options as any, pinia)
        }
  
        /* istanbul ignore else */
        if (__DEV__) {
          // @ts-expect-error: not the right inferred type
          useStore._pinia = pinia
        }
      }
  
      const store: StoreGeneric = pinia._s.get(id)!
  
      // save stores in instances to access them devtools
      if (
        __DEV__ &&
        IS_CLIENT &&
        currentInstance &&
        currentInstance.proxy &&
        // avoid adding stores that are just built for hot module replacement
        !hot
      ) {
        const vm = currentInstance.proxy
        const cache = '_pStores' in vm ? vm._pStores! : (vm._pStores = {})
        cache[id] = store
      }
  
      // StoreGeneric cannot be casted towards Store
      return store as any
    }
  
    useStore.$id = id
  
    return useStore
  }
  