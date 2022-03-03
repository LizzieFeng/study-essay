# 如何改进 FCP
要了解如何改进某个特定网站的 FCP，您可以运行一次灯塔性能审计，并留心查看审计建议的各种具体机会或诊断。

要了解改进 FCP 的常见方式（针对任何网站），请参阅以下性能指南：

1. 消除阻塞渲染的资源(https://web.dev/render-blocking-resources/)
2. 缩小 CSS(https://web.dev/unminified-css/)
3. 移除未使用的 CSS(https://web.dev/unused-css-rules/)
4. 预连接到所需的来源(https://web.dev/uses-rel-preconnect/)
5. 减少服务器响应时间 (TTFB)(https://web.dev/ttfb/)
6. 避免多个页面重定向(https://web.dev/redirects/)
7. 预加载关键请求(https://web.dev/uses-rel-preload/)
8. 避免巨大的网络负载(https://web.dev/total-byte-weight/)
9. 使用高效的缓存策略服务静态资产(https://web.dev/uses-long-cache-ttl/)
10. 避免 DOM 过大(https://web.dev/dom-size/)
11. 最小化关键请求深度(https://web.dev/critical-request-chains/)
12. 确保文本在网页字体加载期间保持可见(https://web.dev/font-display/)
13. 保持较低的请求数和较小的传输大小(https://web.dev/resource-summary/)