# HTTP2.0的升级改造
对比HTTPS的升级改造，HTTP2.0获取会稍微简单一些，你可能需要关注以下问题：

1. HTTP2.0需要基于HTTPS的，并且现在主流的浏览器像Chrome，Firefox表示还是只支持基于TLS部署的HTTP2.0协议，所以要想升级成HTTP2.0还是先升级HTTPS为好。

2. 当你的网站已经升级HTTPS之后，那么升级HTTP2.0就简单很多，你需要做的就是将服务器进行升级，如果你使用Nginx，需要在配置文件中启动相应的协议就可以了，可以参考《NGINX白皮书》，《NGINX配置HTTP2.0官方指南》。

3. 使用了HTTP2.0那么，原本的HTTP1.x怎么办，这个问题其实不用担心，HTTP2.0完全兼容HTTP1.x的语义，对于不支持HTTP2.0的浏览器，Nginx会自动向下兼容的。 在Chrome控制台中的Network面板，可以看到请求采用的HTTP2.0协议，如下图：10.jpg