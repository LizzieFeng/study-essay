分包：将react、react-dom基础包通过cdn引入，不打入bundle中

方法: 使用html-webpack-externals-plugin
如图一

缺点： 一个基础库必须要指定一个cdn