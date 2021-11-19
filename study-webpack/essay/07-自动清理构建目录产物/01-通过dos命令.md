通过npm scripts清理构建目录

````javascript
rm -r ./dist && webpack
````

````javascript

rimraf ./dist && webpack // rimraf 递归删除 npm 下的一个模块
````