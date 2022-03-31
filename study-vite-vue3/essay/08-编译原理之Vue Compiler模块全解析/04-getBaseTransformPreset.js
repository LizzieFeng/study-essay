


export function getBaseTransformPreset(
    prefixIdentifiers?: boolean
  ): TransformPreset {
    return [
      [
        transformOnce,
        transformIf,
        transformMemo,
        transformFor,
        ...(__COMPAT__ ? [transformFilter] : []),
        ...(!__BROWSER__ && prefixIdentifiers
          ? [
              // order is important
              trackVForSlotScopes,
              transformExpression
            ]
          : __BROWSER__ && __DEV__
          ? [transformExpression]
          : []),
        transformSlotOutlet,
        transformElement,
        trackSlotScopes,
        transformText
      ],
      {
        on: transformOn,
        bind: transformBind,
        model: transformModel
      }
    ]
  }
  