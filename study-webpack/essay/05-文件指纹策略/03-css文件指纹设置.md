设置 MiniCssExtractPlugin 的 filename，使用[contenthash]

css文件一般正常情况下，使用cssloader 和styleloader的情况下，那么这个css会由styleloader将这个css插入到style里面，并且放到head头部，这个时候其实并没有一个独立的css文件，因此通常会采用 MiniCssExtractPlugin插件，通过这个插件会把styleloader里面，这种css提取出成一个独立的文件。




先把css提取成一个独立的文件，使用MiniCssExtractPlugin插件,
MiniCssExtractPlugin loader要注册进来，但是，这个插件和styleloader是互斥的。没有办法一起使用。

````javascript

plugins: [
        new MiniCssExtractPlugin( // css文件指纹
            {
                filename: `[name][contenthash:8].css`,
            }
        ),
    ],
````