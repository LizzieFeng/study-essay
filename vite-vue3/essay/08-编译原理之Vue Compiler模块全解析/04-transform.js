


export function transform(root: RootNode, options: TransformOptions) {
    const context = createTransformContext(root, options)
    traverseNode(root, context)
    if (options.hoistStatic) {
      hoistStatic(root, context)
    }
    if (!options.ssr) {
      createRootCodegen(root, context)
    }
    // finalize meta information
    root.helpers = [...context.helpers.keys()]
    root.components = [...context.components]
    root.directives = [...context.directives]
    root.imports = context.imports
    root.hoists = context.hoists
    root.temps = context.temps
    root.cached = context.cached
  
    if (__COMPAT__) {
      root.filters = [...context.filters!]
    }
  }
  