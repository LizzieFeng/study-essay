
export function baseCompile(
    template: string | RootNode,
    options: CompilerOptions = {}
  ): CodegenResult {
    const ast = isString(template) ? baseParse(template, options) : template
    const [nodeTransforms, directiveTransforms] =
      getBaseTransformPreset(prefixIdentifiers)
  
    transform(
      ast,
      extend({}, options, {
        prefixIdentifiers,
        nodeTransforms: [
          ...nodeTransforms,
          ...(options.nodeTransforms || []) // user transforms
        ],
        directiveTransforms: extend(
          {},
          directiveTransforms,
          options.directiveTransforms || {} // user transforms
        )
      })
    )
    return generate(
      ast,
      extend({}, options, {
        prefixIdentifiers
      })
    )
  }
  