
export function baseParse(
    content: string,
    options: ParserOptions = {}
  ): RootNode {
    const context = createParserContext(content, options)
    const start = getCursor(context)
    return createRoot(
      parseChildren(context, TextModes.DATA, []),
      getSelection(context, start)
    )
  }
  function parseChildren(
    context: ParserContext,
    mode: TextModes,
    ancestors: ElementNode[]
  ): TemplateChildNode[] {
    const parent = last(ancestors)
    // 依次生成node
    const nodes: TemplateChildNode[] = []
    // 如果遍历没结束
    while (!isEnd(context, mode, ancestors)) {
  
      const s = context.source
      let node: TemplateChildNode | TemplateChildNode[] | undefined = undefined
      
      if (mode === TextModes.DATA || mode === TextModes.RCDATA) {
        if (!context.inVPre && startsWith(s, context.options.delimiters[0])) {
          // 处理vue的变量标识符，两个大括号 '{{'
          node = parseInterpolation(context, mode)
        } else if (mode === TextModes.DATA && s[0] === '<') {
          // 处理<开头的代码，可能是<div>也有可能是</div> 或者<!的注释
          if (s.length === 1) {
            // 长度是1，只有一个< 有问题 报错
            emitError(context, ErrorCodes.EOF_BEFORE_TAG_NAME, 1)
          } else if (s[1] === '!') {
            // html注释
            if (startsWith(s, '<!--')) {
              node = parseComment(context)
            } else if (startsWith(s, '<!DOCTYPE')) {
                
              // DOCTYPE
              node = parseBogusComment(context)
            }
          } else if (s[1] === '/') {
             //</ 开头的标签，结束标签
            // https://html.spec.whatwg.org/multipage/parsing.html#end-tag-open-state
            if (/[a-z]/i.test(s[2])) {
              emitError(context, ErrorCodes.X_INVALID_END_TAG)
              parseTag(context, TagType.End, parent)
              continue
            } 
          } else if (/[a-z]/i.test(s[1])) {
            // 解析节点
            node = parseElement(context, ancestors)
            // 2.x <template> with no directive compat
            node = node.children
            }
          }
        }
      }
      if (!node) {
        // 文本
        node = parseText(context, mode)
      }
      // node树数组，遍历puish
      if (isArray(node)) {
        for (let i = 0; i < node.length; i++) {
          pushNode(nodes, node[i])
        }
      } else {
        pushNode(nodes, node)
      }
    }
  
    return removedWhitespace ? nodes.filter(Boolean) : nodes
  }