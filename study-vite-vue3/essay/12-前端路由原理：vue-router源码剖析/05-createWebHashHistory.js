
export function createWebHashHistory(base?: string): RouterHistory {
    base = location.host ? base || location.pathname + location.search : ''
    // allow the user to provide a `#` in the middle: `/base/#/app`
    if (!base.includes('#')) base += '#'
    return createWebHistory(base)
  }
  
  
  
  export function createWebHistory(base?: string): RouterHistory {
    base = normalizeBase(base)
  
    const historyNavigation = useHistoryStateNavigation(base)
    const historyListeners = useHistoryListeners(
      base,
      historyNavigation.state,
      historyNavigation.location,
      historyNavigation.replace
    )
    function go(delta: number, triggerListeners = true) {
      if (!triggerListeners) historyListeners.pauseListeners()
      history.go(delta)
    }
  
    const routerHistory: RouterHistory = assign(
      {
        // it's overridden right after
        location: '',
        base,
        go,
        createHref: createHref.bind(null, base),
      },
  
      historyNavigation,
      historyListeners
    )
  
    Object.defineProperty(routerHistory, 'location', {
      enumerable: true,
      get: () => historyNavigation.location.value,
    })
  
    Object.defineProperty(routerHistory, 'state', {
      enumerable: true,
      get: () => historyNavigation.state.value,
    })
  
    return routerHistory
  }
  