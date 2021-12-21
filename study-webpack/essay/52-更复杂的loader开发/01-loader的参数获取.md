loader的参数获取

通过loader-utils的getOptions方法获取

``````javascript

const loaderUtils = require('loader-utils');

module.exports = function(source){
    const {name} = loaderUtils.getOptions(this); // test

    const json = JSON.stringify(source)
                .replace('foo', '')
                .replace(/\u2028/g, '\\u2028')
                .replace(/\u2029/g,'\\u2029');
    // throw new Error('Error');
    // return `export default ${json}`;
    this.callback(null, json, 2,3,4); // 更多的采用这种方式，而不是上述的return方式
}

``````
webpack.conf.js
``````javascript
loaders:[
    {
        loader: 'XXXXXXXXXXXX',
        options:{
            name: 'test'
        }
    }
]
``````