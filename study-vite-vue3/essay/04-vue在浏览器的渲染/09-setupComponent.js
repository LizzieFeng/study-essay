
export function setupComponent(
    instance: ComponentInternalInstance,
    isSSR = false
  ) {
    isInSSRComponentSetup = isSSR
  
    const { props, children } = instance.vnode
    const isStateful = isStatefulComponent(instance)
    initProps(instance, props, isStateful, isSSR)
    initSlots(instance, children)
  
    const setupResult = isStateful
      ? setupStatefulComponent(instance, isSSR)
      : undefined
    isInSSRComponentSetup = false
    return setupResult
  }
  
  function setupStatefulComponent(
    instance: ComponentInternalInstance,
    isSSR: boolean
  ) {
    const Component = instance.type as ComponentOptions
    // 执行setup
    const { setup } = Component
    if (setup) {
      const setupContext = (instance.setupContext =
        setup.length > 1 ? createSetupContext(instance) : null)
  
      setCurrentInstance(instance)
      pauseTracking()
      const setupResult = callWithErrorHandling(
        setup,
        instance,
        ErrorCodes.SETUP_FUNCTION,
        [instance.props, setupContext]
      )
      if (isPromise(setupResult)) {
        setupResult.then(unsetCurrentInstance, unsetCurrentInstance)
      } else {
        handleSetupResult(instance, setupResult, isSSR)
      }
    } else {
      finishComponentSetup(instance, isSSR)
    }
  }
  
  export function callWithErrorHandling(
    fn: Function,
    instance: ComponentInternalInstance | null,
    type: ErrorTypes,
    args?: unknown[]
  ) {
    let res
    try {
      res = args ? fn(...args) : fn()
    } catch (err) {
      handleError(err, instance, type)
    }
    return res
  }