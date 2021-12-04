通过webpack-merge 组合配置

>merge = require("webpack-merge");
...
>merge(
    ...{a:[1],b:5,c:20},
    ...{a:[2],b:10, d: 421}
)

{a:[1,2], b:10, c:20, d: 421}

合并配置 ： module.export = merge(baseConfig, devConfig);