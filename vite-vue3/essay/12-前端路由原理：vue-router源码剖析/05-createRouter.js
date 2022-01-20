
export function createRouter(options: RouterOptions): Router {
    const matcher = createRouterMatcher(options.routes, options)
    ///....
  }
  export function createRouterMatcher(
    routes: RouteRecordRaw[],
    globalOptions: PathParserOptions
  ): RouterMatcher {
    // matchers数组
    const matchers: RouteRecordMatcher[] = []
    // matcher对象
    const matcherMap = new Map<RouteRecordName, RouteRecordMatcher>()
    globalOptions = mergeOptions(
      { strict: false, end: true, sensitive: false } as PathParserOptions,
      globalOptions
    )
    function addRoute(){}
    function remoteRoute(){}
    function getRoutes(){
      return matchers
    }  
    function insertMatcher(){}
    function resolve(){}
    // add initial routes
    routes.forEach(route => addRoute(route))
  
    return { addRoute, resolve, removeRoute, getRoutes, getRecordMatcher }
  }