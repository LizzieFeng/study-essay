
function push(to: RouteLocationRaw | RouteLocation) {
    return pushWithRedirect(to)
  }
  
  function replace(to: RouteLocationRaw | RouteLocationNormalized) {
    return push(assign(locationAsObject(to), { replace: true }))
  }
  // 路由跳转函数
  function pushWithRedirect(
    to: RouteLocationRaw | RouteLocation,
    redirectedFrom?: RouteLocation
  ): Promise<NavigationFailure | void | undefined> {
    const targetLocation: RouteLocation = (pendingLocation = resolve(to))
    const from = currentRoute.value
    const data: HistoryState | undefined = (to as RouteLocationOptions).state
    const force: boolean | undefined = (to as RouteLocationOptions).force
    // to could be a string where `replace` is a function
    const replace = (to as RouteLocationOptions).replace === true
  
  
  
    const toLocation = targetLocation as RouteLocationNormalized
  
    
    return (failure ? Promise.resolve(failure) : navigate(toLocation, from))
      .catch((error: NavigationFailure | NavigationRedirectError) =>
        isNavigationFailure(error)
          ? error
          : // reject any unknown error
            triggerError(error, toLocation, from)
      )
      .then((failure: NavigationFailure | NavigationRedirectError | void) => {
  
          failure = finalizeNavigation(
            toLocation as RouteLocationNormalizedLoaded,
            from,
            true,
            replace,
            data
          )
  
        triggerAfterEach(
          toLocation as RouteLocationNormalizedLoaded,
          from,
          failure
        )
        return failure
      })
  }