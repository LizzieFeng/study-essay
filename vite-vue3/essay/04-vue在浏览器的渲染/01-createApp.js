
export const createApp = ((...args) => {
    const app = ensureRenderer().createApp(...args)
    const { mount } = app
    // 重写mount
    app.mount = (containerOrSelector: Element | ShadowRoot | string): any => {
      const container = normalizeContainer(containerOrSelector)
      if (!container) return
  
      const component = app._component
      if (!isFunction(component) && !component.render && !component.template) {
        component.template = container.innerHTML
      }
      container.innerHTML = ''
      const proxy = mount(container, false, container instanceof SVGElement)
      if (container instanceof Element) {
        container.removeAttribute('v-cloak')
        container.setAttribute('data-v-app', '')
      }
      return proxy
    }
    return app
  }) 
  function normalizeContainer(container){
    if (isString(container)) {
      const res = document.querySelector(container)
    }
    return container
  }