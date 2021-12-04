要想把构建配置抽成npm包进行管理，有哪些可选的方案：
1. 通过多个配置文件管理不同环境的构建， webpack --config 参数进行控制
2. 将构建配置设计成一个库，比如: hjs-webpack, Neutrino, webpack-blocks
3. 抽成一个工具进行管理，比如：create-react-app, kyt， nwb
4. 将所有的配置放在一个文件，通过 --env参数控制分支选择