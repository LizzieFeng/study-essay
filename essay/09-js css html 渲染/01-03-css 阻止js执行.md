# CSS 阻止JS执行
我们来看看下面这段的代码，和上面不同的是这里的script并没有加defer
``````js
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="css/common.css?sleep=3000">
    <script src="js/console.js"></script>
    <meta charset="UTF-8">
    <title> CSS 阻止JS执行</title>
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
访问：http://127.0.0.1:3000/static/index3.html
``````


可以看到页面等待了3秒，但此过程中不会打印任何东西，之后呈现出一个浅绿色的div，再打印出null。

看起来好像是CSS阻塞了DOM的解析。
但是前面我们已经了解了CSS是不会阻塞DOM的，那么阻塞DOM的到底是什么？
其实阻塞页面解析的其实是JS，因为JS在等待CSS的下载，等待CSS完成之后才执行JS。

这是为什么呢？

仔细思考一下，其实这样做是有道理的，如果脚本的内容是获取元素的样式，宽高等CSS控制的属性，浏览器是需要计算的，也就是依赖于CSS。
浏览器也无法感知脚本内容到底是什么，为避免样式获取，因而只好等前面所有的样式下载完后，再执行JS

所以，为何<script>与<link>同时在头部的话，<script>在上可能会更好, 之所以是可能，是因为如果的内容下载更快的话，是没影响的，但反过来的话，JS就要等待了，然而这些等待的时间是完全不必要的。