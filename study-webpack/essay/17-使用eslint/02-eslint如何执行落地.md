Eslint 如何执行落地
    1. 和CI/CD系统集成

    2. 和webpack集成


方案一： webpack与CI/CD集成（图一）
    在build前面增加一个lint pipline，把代码检查增加进来。
    这个方案是为了保证，发布到测试环境或线上之前要做的事情.
    且在build前面加验证，可以检查到 git commit --no-verify 绕过开发环境检查，提交到git库的不合格代码

    本地开发：
        本地开发阶段增加precommit钩子
        安装 husky
            npm i husky --save-dev

        增加 npm script, 通过lint-staged增量检查修改的文件
            "scripts":{
                precommit: "lint-staged"
            },
            "lint-staged": {
                "linters": {
                    "*.{js,scss}": ["eslint --fix", "git add"]
                }
            }

方案二：
    webpack与ESLint集成

    使用eslint-loader, 构建时检查js规范

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:[
                    "babel-loader",
                    "elint-loader",
                ]
            }
        ]
    }
