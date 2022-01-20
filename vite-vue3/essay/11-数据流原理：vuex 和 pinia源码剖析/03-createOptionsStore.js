
function createOptionsStore<
Id extends string,
S extends StateTree,
G extends _GettersTree<S>,
A extends _ActionsTree
>(
id: Id,
options: DefineStoreOptions<Id, S, G, A>,
pinia: Pinia,
hot?: boolean
): Store<Id, S, G, A> {
const { state, actions, getters } = options

const initialState: StateTree | undefined = pinia.state.value[id]

let store: Store<Id, S, G, A>

function setup() {

  pinia.state.value[id] = state ? state() : {}
  return assign(
    localState,
    actions,
    Object.keys(getters || {}).reduce((computedGetters, name) => {
      computedGetters[name] = markRaw(
        computed(() => {
          setActivePinia(pinia)
          // it was created just before
          const store = pinia._s.get(id)!
          return getters![name].call(store, store)
        })
      )
      return computedGetters
    }, {} as Record<string, ComputedRef>)
  )
}

store = createSetupStore(id, setup, options, pinia, hot)

return store as any
}