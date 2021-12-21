loader如何进行文件输出？
通过 this.emitFile进行文件写入

``````javascript
const loaderUtils = require('loader-utils');
module.exports = function(content) {
    const url = loaderUtils.interpolateName(this, "[hash].[ext]",{
        content,
    });

    this.emitFile(url, content);
    const path = `__webpack_public_path__+${JSON.stringfy(url)};`;
    return `export default ${path}`;
}
``````