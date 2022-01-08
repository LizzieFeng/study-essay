
const VOID_TAGS =
'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr'

export const isVoidTag = /*#__PURE__*/ makeMap(VOID_TAGS)
function parseElement(
context: ParserContext,
ancestors: ElementNode[]
): ElementNode | undefined {
// Start tag.
// 是不是pre标签和v-pre标签
const wasInPre = context.inPre
const wasInVPre = context.inVPre
const parent = last(ancestors)
// 解析标签节点
const element = parseTag(context, TagType.Start, parent)
const isPreBoundary = context.inPre && !wasInPre
const isVPreBoundary = context.inVPre && !wasInVPre

if (element.isSelfClosing || context.options.isVoidTag(element.tag)) {
  // #4030 self-closing <pre> tag
  if (isPreBoundary) {
    context.inPre = false
  }
  if (isVPreBoundary) {
    context.inVPre = false
  }
  return element
}

// Children.
ancestors.push(element)
const mode = context.options.getTextMode(element, parent)
const children = parseChildren(context, mode, ancestors)
ancestors.pop()
element.children = children

// End tag.
if (startsWithEndTagOpen(context.source, element.tag)) {
  parseTag(context, TagType.End, parent)
} else {
  emitError(context, ErrorCodes.X_MISSING_END_TAG, 0, element.loc.start)
  if (context.source.length === 0 && element.tag.toLowerCase() === 'script') {
    const first = children[0]
    if (first && startsWith(first.loc.source, '<!--')) {
      emitError(context, ErrorCodes.EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT)
    }
  }
}

element.loc = getSelection(context, element.loc.start)

if (isPreBoundary) {
  context.inPre = false
}
if (isVPreBoundary) {
  context.inVPre = false
}
return element
}