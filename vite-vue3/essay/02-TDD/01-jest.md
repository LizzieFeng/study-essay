# 安装组件库
    通过命令行执行下面的命令，vue-jest 和 @vue/test-utils 是测试 Vue 组件必备的库，然后安装 babel 相关的库，最后安装 Jest 适配 TypeScript 的库。代码如下：
    ``````javascript
        
        npm install -D jest@26 vue-jest@next @vue/test-utils@next 
        npm install -D babel-jest@26 @babel/core @babel/preset-env 
        npm install -D ts-jest@26 @babel/preset-typescript @types/jest
    ``````

# 安装完毕后，我们要在根目录下新建.babel.config.js。下面的配置目的是让 babel 解析到 Node 和 TypeScript 环境下

    ``````javascript
        
        module.exports = {
        presets: [
            ['@babel/preset-env', { targets: { node: 'current' } }],
            '@babel/preset-typescript',
        ],
        }

    ``````
# 然后，我们还需要新建 jest.config.js，用来配置 jest 的测试行为。不同格式的文件需要使用不同命令来配置，对于.vue 文件我们使用 vue-jest，对于.js 或者.jsx 结果的文件，我们就要使用 babel-jest，而对于.ts 结尾的文件我们使用 ts-jest，然后匹配文件名是 xx.spect.js。这里请注意，Jest 只会执行.spec.js 结尾的文件。
    ``````javascript

            
        module.exports = {
        transform: {
            // .vue文件用 vue-jest 处理
            '^.+\\.vue$': 'vue-jest',
            // .js或者.jsx用 babel-jest处理
            '^.+\\.jsx?$': 'babel-jest', 
            //.ts文件用ts-jest处理
            '^.+\\.ts$': 'ts-jest'
        },
        testMatch: ['**/?(*.)+(spec).[jt]s?(x)']
        }

    ``````

# 然后配置 package.json，在 scrips 配置下面新增 test 命令，即可启动 Jest。
    ``````json
    
    "scripts": {
        "dev": "vite",
        "build": "vue-tsc --noEmit && vite build",
        "serve": "vite preview",
        "lint": "eslint --fix --ext .js,vue src/",
        "test": "jest",
    }

    ``````

# 完成上面的操作之后，配置工作就告一段落了，可以开始输入代码做测试了。我们可以在 src 目录下新增 test.spec.js，再输入下面代码来进行测试。

    ``````javascript

        function sayHello(name,fn){
        if(name=='大圣'){
            fn()
        }
        }
        test('测试加法',()=>{
        expect(1+2).toBe(3)
        })
        test('测试函数',()=>{
        const fn = jest.fn()
        sayHello('大圣',fn)
        expect(fn).toHaveBeenCalled()
        })
  
    ``````

# npm run test