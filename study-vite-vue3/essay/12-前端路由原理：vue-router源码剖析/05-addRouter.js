
function addRoute(    
    record: RouteRecordRaw,
    parent?: RouteRecordMatcher,
    originalRecord?: RouteRecordMatcher
  ){
    if ('alias' in record) {
      // 标准化alias
    }
    for (const normalizedRecord of normalizedRecords) {
      // ...
      matcher = createRouteRecordMatcher(normalizedRecord, parent, options)
      insertMatcher(matcher)
        
    }
    return originalMatcher
      ? () => {
          // since other matchers are aliases, they should be removed by the original matcher
          removeRoute(originalMatcher!)
        }
      : noop
  
  }
  
  export function createRouteRecordMatcher(
    record: Readonly<RouteRecord>,
    parent: RouteRecordMatcher | undefined,
    options?: PathParserOptions
  ): RouteRecordMatcher {
    const parser = tokensToParser(tokenizePath(record.path), options)
    const matcher: RouteRecordMatcher = assign(parser, {
      record,
      parent,
      // these needs to be populated by the parent
      children: [],
      alias: [],
    })
  
    if (parent) {
      if (!matcher.record.aliasOf === !parent.record.aliasOf)
        parent.children.push(matcher)
    }
  
    return matcher
  }
  