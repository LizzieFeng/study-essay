在loader中使用缓存

webpack中默认开启loader缓存
    .可以使用this.cacheable(false)关掉缓存

缓存条件： loader的结果在相同的输入下有确定的输出
    .有依赖的loader无法使用缓存