
export function generate(
    ast,
    options
  ): CodegenResult {
    const context = createCodegenContext(ast, options)
    const {
      mode,
      push,
      prefixIdentifiers,
      indent,
      deindent,
      newline,
      scopeId,
      ssr
    } = context
  
    if (!__BROWSER__ && mode === 'module') {
      // 预设代码，module风格 就是import语句
      genModulePreamble(ast, preambleContext, genScopeId, isSetupInlined)
    } else {
      // 预设代码，函数风格 就是import语句
      genFunctionPreamble(ast, preambleContext)
    }
    // render还是ssrRender
    const functionName = ssr ? `ssrRender` : `render`
    const args = ssr ? ['_ctx', '_push', '_parent', '_attrs'] : ['_ctx', '_cache']
    if (!__BROWSER__ && options.bindingMetadata && !options.inline) {
      // binding optimization args
      args.push('$props', '$setup', '$data', '$options')
    }
    const signature =
      !__BROWSER__ && options.isTS
        ? args.map(arg => `${arg}: any`).join(',')
        : args.join(', ')
  
    if (isSetupInlined) {
      push(`(${signature}) => {`)
    } else {
      push(`function ${functionName}(${signature}) {`)
    }
    indent()
  
    // 组件，指令声明代码
    if (ast.components.length) {
      genAssets(ast.components, 'component', context)
      if (ast.directives.length || ast.temps > 0) {
        newline()
      }
    }
    if (ast.components.length || ast.directives.length || ast.temps) {
      push(`\n`)
      newline()
    }
  
    if (ast.codegenNode) {
      genNode(ast.codegenNode, context)
    } else {
      push(`null`)
    }
  
    if (useWithBlock) {
      deindent()
      push(`}`)
    }
  
    deindent()
    push(`}`)
  
    return {
      ast,
      code: context.code,
      preamble: isSetupInlined ? preambleContext.code : ``,
      // SourceMapGenerator does have toJSON() method but it's not in the types
      map: context.map ? (context.map as any).toJSON() : undefined
    }
  }
  