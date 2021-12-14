开始： 从webpack命令行说起

通过 npm scripts 运行 webpack
    .开发环境： npm run dev
    .生产环境： npm run build

    查找webpack文件入口：
        在命令行运行以上命令后，npm 会让命令行工具进入node_modules\.bin目录查找是否存在webpack.sh 或者 webpack.cmd文件，如果存在，就执行，不存在就抛出错误。

    实例入口文件是： node_modules\webpack\bin\webpack.js

    思考： 是wbepack还是webpack-cli提供的webpack命令呢？
    回答：
        webpack package.json提供的bin是：./bin/webpack.js
        webpack-cli package.json提供的bing是：./bin/cli.js 

通过 webpack直接运行
    .webpack entry.js  bundle.js