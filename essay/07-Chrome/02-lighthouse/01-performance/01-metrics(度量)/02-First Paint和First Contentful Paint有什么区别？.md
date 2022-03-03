# First Paint和First Contentful Paint有什么区别？

尽管这两个术语有时可以互换使用，但从技术上讲，它们是两个不同的指标。正如我们所讨论的，First Contentful Paint是当浏览器呈现页面上的第一个DOM元素时。您可以将其视为页面上任何可用（如果不是交互式）内容。例如，背景图像、文本或标题菜单div。

然而，First Paint是浏览器呈现信息的第一个字节时，无论它是否是内容。背景颜色的变化（不是背景图片的加载）并不令人满意。用户不能将其作为内容消费，因此不是FCP的示例。

First Paint可以与您的First Contentful Paint完全相同。但是您的FCP可能与您的First Paint不同。