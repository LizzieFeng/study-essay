A: 
    hyafczb

B:  
    vaced
    ↑
    指针


A = AUB


1.从线性表LB中依次取得每个元素
2.依值在线性表LA中进行查访 Location(A, B[i]); 存在则返回非0值
3.若不存在则插入之 A.addElement(B[i]);


``````javascript



``````

·············我是分界线······················

.拿B中的B[i],与A[j]逐个进行对比，如果，不存在A中，则追加在A的末尾，指针后移
.如果存在A中，在指针后移。


``````javascript

for(i=0;i<B.length; i++>) {
    const exitFlag = false;
    for(j=0; j<A.length; j++) {
        if(B[i] === A[j]) {
            exitFlag = true;
            break ;
        }
    }
    if(!exitFlag) {
        A.push(B[i]);
    }
}

``````

1.从线性表LB中依次取得每个元素
2.依值在线性表LA中进行查访
3.若不存在则插入之