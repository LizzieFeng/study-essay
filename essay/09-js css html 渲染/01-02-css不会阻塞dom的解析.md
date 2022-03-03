关于CSS:
    <link>标签放在头部性能会高一点，
    如果:
        <script>与<link>同时在头部的话，
        <script>在上可能会更好。这是为什么呢？
下面我们一起来看一下CSS对DOM的影响是什么。

这里说的是DOM 解析，证明的例子如下，首先在头部插入<script defer src="js/console.js"></script>，JS文件的内容是：
``````html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="css/common.css?sleep=3000">
    <script defer src="js/console.js"></script>
    <meta charset="UTF-8">
    <title>hello</title>
    <style>
        div {
            width: 100px;
            height: 100px;
            background: lightgreen;
        }
    </style>
</head>
<body>
<div></div>
</body>
</html>
``````

console.js
``````js
console.log(document.querySelector('div'));


``````

结论： css 不会阻塞dom的解析

可以看到是首先打印出div这个DOM节点，过3s左右之后才渲染出一个浅绿色的div。这就证明了CSS 是不会阻塞 DOM 的解析的，尽管CSS下载需要3s，但这个过程中，浏览器不会傻等着CSS下载完，而是会解析DOM的。
