1.默认引用 script:

<script type="text/javascript" src="x.min.js"></script>

当浏览器遇到 script 标签时，文档的解析将停止，并立即下载并执行脚本，脚本执行完毕后将继续解析文档。


所以，在下面的例子中

``````html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="css/common.css?sleep=3000">
    <script src="js/console.js"></script>
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
console.log(document.querySelector('div')); // 所以console.js的执行会在body div解析前，于是一定会查询不到div元素，此时在控制台输出null


``````

结论：
1. dom解析，index.html的第一行开始，到script标签，下载执行console.js, 输出null
2. dom继续解析，按照顺序 body div。
3. 3s后获得css文件，解析完成后，页面成功绘制出一个绿色的方块。