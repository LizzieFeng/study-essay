参考：https://web.dev/fcp/

首次内容绘制 (FCP) 是测量感知加载速度的一个以用户为中心的重要指标，因为该项指标会在用户首次在屏幕上看到任何内容时，在页面加载时间轴中标记出相应的点，迅捷的 FCP 有助于让用户确信某些事情正在进行。

# 什么是 FCP？
首次内容绘制 (FCP) 指标测量页面从开始加载到页面内容的“任何部分”在屏幕上完成渲染的时间。对于该指标，"内容"指的是文本、图像（包括背景图像）、<svg>元素或非白色的<canvas>元素。

图：02-首屏（FCP首次内容绘制）.png

在上方的加载时间轴中，FCP 发生在第二帧，因为那是首批文本和图像元素在屏幕上完成渲染的时间点。

您会注意到，虽然部分内容已完成渲染，但并非所有内容都已经完成渲染。
这是首次内容绘制 (FCP) 与*Largest Contentful Paint 最大内容绘制 (LCP) https://web.dev/lcp/*（旨在测量页面的主要内容何时完成加载）之间的重要区别。



# 怎样算是良好的 FCP 分数？
    为了提供良好的用户体验，网站应该努力将首次内容绘制控制在1.8 秒或以内。
    FCP 分数好坏参考 图：02-FCP 分数 好坏 参考.png
    为了确保您能够在大部分用户的访问期间达成建议目标值，一个良好的测量阈值为页面加载的第 75 个百分位数，且该阈值同时适用于移动和桌面设备。

# 如何测量 FCP

FCP 可以进行：
    实验室（https://web.dev/user-centric-performance-metrics/#in-the-lab）测量
    或
    实际（https://web.dev/user-centric-performance-metrics/#in-the-field）测量
    并且可以在以下工具中使用

## 实测工具 
1. PageSpeed Insights 网页速度测量工具(https://developers.google.com/speed/pagespeed/insights/)
2. Chrome 用户体验报告 (https://developers.google.com/web/tools/chrome-user-experience-report)

3. 搜索控制台（速度报告(https://webmasters.googleblog.com/2019/11/search-console-speed-report.html)

4. web-vitals JavaScript 库(https://github.com/GoogleChrome/web-vitals)


## 实验室工具
1. 灯塔 (https://developers.google.com/web/tools/lighthouse/)
2. Chrome 开发者工具 (https://developers.google.com/web/tools/chrome-devtools/)
3. PageSpeed Insights 网页速度测量工具(https://developers.google.com/speed/pagespeed/insights/)

# 首屏

首屏时间是指浏览器从响应用户输入网络地址，到首屏内容渲染完成的时间。

首屏时间 = 地址栏输入网址后回车 - 浏览器第一屏渲染完成

## 影响首屏时间的因素：
1. 白屏时间，
2. 资源下载、
3. 执行时间。

