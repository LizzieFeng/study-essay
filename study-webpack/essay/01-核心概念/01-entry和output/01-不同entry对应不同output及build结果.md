# 单页应用 string | [string]
entry：‘字符串’. // 例如 './src/index.js'
entry: ['字符串1', '字符串2']， // 例如： ['babel-polyfill','./src/index.js']

output: {
path: __dirname+'/dist',
filename: 'index.js'
}

结果： dist目录下有一个index.js文件

# 多页面
entry: {
index: './src/index.js',
entry: './src/search.js'
}

output: {
path: __dirname+'/dist',
filename: '[name].js'
}

结果： 
dist目录下有两个文件，分别为index.js  search.js