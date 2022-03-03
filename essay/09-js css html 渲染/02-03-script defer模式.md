3.defer模式 

<script type="text/javascript" src="x.min.js" defer="defer"></script>

当浏览器遇到 script 标签时，文档的解析不会停止，其他线程将下载脚本，待到文档解析完成，脚本才会执行。


所以，在下面的例子中

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
console.log(document.querySelector('div')); //  因为有defer，所以console.js的执行会在dom解析完成后，于是一定会查询到div元素，且打印出来。 如果，不加defer一定会是null，找不到div元素


``````

结论：
1. dom解析，index.html的第一行开始，到script标签，其它线程下载脚本
2. dom继续解析，知道完成。此时一定有div元素的。
3. console.js开始执行，一定可以找到 div元素，且在控制台输出
4. 3s后获得css文件，解析完成后，页面成功绘制出一个绿色的方块。