初级分析： 使用webpack内置的stats

stats：构建的统计信息

package.json中使用stats
````json
scripts: {
    // "build:stats": "webpack --env production --json > stats.json",
    "build:stats": "webpack --config webpack.prod.js --json > stats.json"
}
````