
function parseTag(
    context: ParserContext,
    type: TagType,
    parent: ElementNode | undefined
  ): ElementNode | undefined {
  
    // Tag open. 
    const start = getCursor(context)
    //匹配标签结束的位置
    const match = /^<\/?([a-z][^\t\r\n\f />]*)/i.exec(context.source)!
    const tag = match[1]
    const ns = context.options.getNamespace(tag, parent)
    // 向前遍历代码
    advanceBy(context, match[0].length)
    advanceSpaces(context)
  
    // save current state in case we need to re-parse attributes with v-pre
    const cursor = getCursor(context)
    const currentSource = context.source
  
    // check <pre> tag 
    if (context.options.isPreTag(tag)) {
      context.inPre = true
    }
    // Attributes.
    // 解析属性
    let props = parseAttributes(context, type)
    // check v-pre
    if (){...}
    // Tag close.
    let isSelfClosing = false
    if (type === TagType.End) {
      return
    }
  
    let tagType = ElementTypes.ELEMENT
    if (!context.inVPre) {
      if (tag === 'slot') {
        tagType = ElementTypes.SLOT
      } else if (tag === 'template') {
        if (
          props.some(
            p =>
              p.type === NodeTypes.DIRECTIVE && isSpecialTemplateDirective(p.name)
          )
        ) {
          tagType = ElementTypes.TEMPLATE
        }
      } else if (isComponent(tag, props, context)) {
        tagType = ElementTypes.COMPONENT
      }
    }
  
    return {
      type: NodeTypes.ELEMENT,
      ns,
      tag,
      tagType,
      props,
      isSelfClosing,
      children: [],
      loc: getSelection(context, start),
      codegenNode: undefined // to be created during transform phase
    }
  }
  