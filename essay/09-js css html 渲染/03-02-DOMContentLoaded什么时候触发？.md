index3.html
``````html
<!DOCTYPE html>
<html lang="en">
<head>
    <script>
        document.addEventListener("DOMContentLoaded",function () {
            console.log("DOMContentLoaded" + new Date())
        });
    </script>
    <script src="js/date.js"></script>
    <meta charset="UTF-8">
    <title> DOMContentLoaded什么时候触发？</title>
    <style>
        div {
            width: 100px;
            height: 100px;
            background: lightgreen;
        }
    </style>
    <link rel="stylesheet" href="css/common.css?sleep=3000">
</head>
<body>
<div></div>
</body>
</html>


``````

date.js
``````js
console.log(new Date());

``````

common.css
``````css
div {
    background: lightblue;
}

``````

代码执行结果如图：03-02.png

在代码中我们监听了DOMContentLoaded事件，然后在下面引入了date.js外部js文件，然后在最下面还引入了外部的css样式，而且下载时间需要3秒。

然后我们访问页面可以发现，date.js先打印出来时间，然后触发了DOMContentLoaded，此时页面还是空白的，过了3秒之后才出现浅蓝色的div。

通过这段代码，我们可以知道DOMContentLoaded事件本身不会等待CSS文件加载。

# 所以总结一下：
DOMContentLoaded事件本身不会等待CSS文件、图片、iframe加载完成。
1. 如果页面中没有script标签，DOMContentLoaded事件并没有等待CSS文件、图片加载完成。
2. 如果页面中静态的写有script标签，DOMContentLoaded事件需要等待JS执行完才触发。<b>而且script标签中的JS需要等待位于其前面的CSS的加载完成。</b>


# 总的来说
1. 当文档中没有脚本时，浏览器解析完文档便能触发 DOMContentLoaded 事件；
2. 如果文档中包含脚本，则脚本会阻塞文档的解析，而脚本需要等 CSSOM 构建完成才能执行。在任何情况下，DOMContentLoaded 的触发不需要等待图片等其他资源加载完成。