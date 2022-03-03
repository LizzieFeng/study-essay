# 浏览器遇到 script标签时，会触发页面渲染

其实这才是解释上面为何JS执行会等待CSS下载的原因
index4.html
``````html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title> 浏览器遇到script标签时，会触发页面渲染</title>
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
    <script src="js/console.js?sleep=3000"></script>
    <style>
        div {
            background: lightgrey;
        }
    </style>
    <script src="js/console.js?sleep=5000"></script>
    <link rel="stylesheet" href="css/common.css">
</body>
</html>


``````
http://127.0.0.1:3000/static/index4.html 在express下
我们可以在浏览器上访问，可以看到页面先是显示浅绿色的div，然后在现实浅灰色，最后才是浅蓝色。

由此可见，每次碰到<script>标签时，浏览器都会渲染一次页面。这是基于同样的理由，浏览器不知道脚本的内容，有可能在js脚本中需要获取DOM元素的宽高或者CSS样式，因而碰到脚本时，只好先渲染页面，确保脚本能获取到最新的DOM元素信息，尽管脚本可能不需要这些信息。