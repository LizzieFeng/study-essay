const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js',
        search: './src/search.js'
    },
    output:{
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            // {
            //     test: '文件，指定匹配规则',
            //     use: 'xxx-loader',
            // }
        ]
    },
    plugins:[
        // 
    ]
};