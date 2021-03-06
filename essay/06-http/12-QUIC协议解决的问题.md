# QUIC协议针对基于TCP和TLS的HTTP2.0协议解决了下面的问题：

1. 减少了TCP三次握手及TLS握手时间： 
    不管是HTTP1.0/1.1还是 HTTPS，HTTP2.0，都使用了TCP进行传输。HTTPS和HTTP2还需要使用TLS协议来进行安全传输。这就出现了两个握手延迟，而基于UDP协议的QUIC，因为UDP 本身没有连接的概念，连接建立时只需要一次交互，半个握手的时间。区别如下图：
    12-减少了TCP三次握手及TLS握手时间.jpg


2. 多路复用丢包时的线头阻塞问题：
     QUIC保留了HTTP2.0多路复用的特性，但是即使在多路复用过程中，同一个TCP连接上有多个stream，假如其中一个stream丢包，在重传前后续的stream都会受到影响，而QUIC中一个连接上的多个stream之间没有依赖。所以当发生丢包时，只会影响当前的stream，也就避免了线头阻塞问题。


3. 优化重传策略： 
    以往的TCP丢包重传策略是：在发送端为每一个封包标记一个编号 (sequence number)，接收端在收到封包时，就会回传一个带有对应编号的ACK封包给发送端，告知发送端封包已经确实收到。
    当发送端在超过一定时间之后还没有收到回传的 ACK，就会认为封包已经丢失，启动重新传送的机制，复用与原来相同的编号重新发送一次封包，确保在接收端这边没有任何封包漏接。
     这样的机制就会带来一些问题，假设发送端总共对同一个封包发送了两次 (初始 + 重传)，使用的都是同一个sequence number：编号N。
     之后发送端在拿到编号N封包的回传ACK 时，将无法判断这个带有编号N的ACK，是接收端在收到初始封包后回传的ACK。
     这就会加大后续的重传计算的耗时。
     QUIC为了避免这个问题，发送端在传送封包时，初始与重传的每一个封包都改用一个新的编号，unique packet number，
     每一个编号都唯一而且严格递增，这样每次在收到ACK时，就可以依据编号明确的判断这个ACK是来自初始封包或者是重传封包。
4. 流量控制： 
    通过流量控制可以限制客户端传输资料量的大小，有了流量控制后，接收端就可以只保留相对应大小的接收 buffer，优化记忆体被占用的空间。但是如果存在一个流量极慢的stream ，光一个stream就有可能佔用掉接收端所有的资源。QUIC为了避免这个潜在的HOL Blocking，采用了连线层 (connection flow control) 和 Stream 层的 (stream flow control) 流量控制，限制单一 Stream 可以占用的最大buffer size。

5. 连接迁移： 
    TCP连接基于四元组（源 IP、源端口、目的 IP、目的端口），切换网络时至少会有一个因素发生变化，导致连接发生变化。当连接发生变化时，如果还使用原来的 TCP 连接，则会导致连接失败，就得等原来的连接超时后重新建立连接，所以我们有时候发现切换到一个新网络时，即使新网络状况良好，但内容还是需要加载很久。如果实现得好，当检测到网络变化时立刻建立新的 TCP 连接，即使这样，建立新的连接还是需要几百毫秒的时间。 QUIC 的连接不受四元组的影响，当这四个元素发生变化时，原连接依然维持。QUIC 连接不以四元组作为标识，而是使用一个 64 位的随机数，这个随机数被称为 Connection ID，对应每个stream，即使 IP 或者端口发生变化，只要 Connection ID 没有变化，那么连接依然可以维持。
