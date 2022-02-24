# HTTP2.0的前世今生
有了HTTP1.x，那么HTTP2.0也就顺理成章的出现了。
HTTP2.0可以说是SPDY的升级版（其实原本也是基于SPDY设计的）。
但是，HTTP2.0跟SPDY 仍有不同的地方，主要是以下两点：

1. HTTP2.0消息头的压缩算法采用HPACK算法，而非SPDY采用的DEFLATE算法。
2. HTTP2.0设计初期支持明文HTTP传输，而SPDY强制使用HTTPS，到后期两者都需要使用HTTPS。

2015年9月，Google 宣布了计划，移除对SPDY的支持，拥抱 HTTP2.0，并将在Chrome 51中生效。

# HTTP2.0新特性
HTTP2.0的特性大部分和SPDY类似，主要有以下4个：
1. 新的二进制格式（Binary Format）： 
    HTTP1.x的解析是基于文本。
    基于文本协议的格式解析存在天然缺陷，文本的表现形式有多样性，要做到健壮性考虑的场景必然很多，
    二进制则不同，只认0和1的组合。
    基于这种考虑HTTP2.0的协议解析决定采用二进制格式，实现方便且健壮。
 2. 多路复用（MultiPlexing）： 
    即连接共享，即每一个request都是是用作连接共享机制的。
    一个request对应一个id，这样一个连接上可以有多个request，每个连接的request可以随机的混杂在一起，接收方可以根据request的 id将request再归属到各自不同的服务端请求里面。
    多路复用原理和keep alive区别如下图： 08-多路复用原理和keep alive区别.jpg

3. header压缩： 
    HTTP1.x的header带有大量信息，而且每次都要重复发送，
    HTTP2.0使用encoder来减少需要传输的header大小，通讯双方各自cache一份header fields表，既避免了重复header的传输，又减小了需要传输的大小。

4. 服务端推送（Server Push）： 同SPDY一样，HTTP2.0也具有Server Push功能。
    目前，有大多数网站已经启用HTTP2.0，例如YouTuBe，淘宝网等网站，利用Chrome控制台可以查看是否使用了Server Push，如下图：08-查看是否使用了Server Push.jpg