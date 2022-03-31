

export const RouterLinkImpl = /*#__PURE__*/ defineComponent({
    name: 'RouterLink',
    props: {
      to: {
        type: [String, Object] as PropType<RouteLocationRaw>,
        required: true,
      },
        ...
    },
    // router-link源码
    setup(props, { slots }) {
      const link = reactive(useLink(props))
      const { options } = inject(routerKey)!
  
      const elClass = computed(() => ({
        ...
      }))
  
      return () => {
        const children = slots.default && slots.default(link)
        return props.custom
          ? children
          : h(
              'a',
              {
                href: link.href,
                onClick: link.navigate,
                class: elClass.value,
              },
              children
            )
      }
    },
  })
  //  跳转
    function navigate(
      e: MouseEvent = {} as MouseEvent
    ): Promise<void | NavigationFailure> {
      if (guardEvent(e)) {
        return router[unref(props.replace) ? 'replace' : 'push'](
          unref(props.to)
          // avoid uncaught errors are they are logged anyway
        ).catch(noop)
      }
      return Promise.resolve()
    }
  