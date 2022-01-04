我们得到 increasingNewIndexSequence 队列后，再去遍历数组进行 patch 操作就可以实现完整的 diff 流程了：
如代码段05-完整的vue3 diff流程

上面代码的思路，我们用下图演示。做完双端对比之后，a 和 g 已经计算出可以直接复用 DOM，剩下的队列中我们需要把 hbfdc 更新成 bcdef。

首先我们需要使用 keyToNewIndexMap 存储新节点中每个 key 对应的索引，比如下图中 key 是 c 的元素的索引就是 2；
然后计算出 newIndexOldIndexMap 存储这个 key 在老的子元素中的位置，我们可以根据 c 的索引是 2，在 newIndexOldIndexMap 中查询到在老的子元素的位置是 6， 关于 newIndexOldIndexMap 的具体逻辑你可以在上面的代码中看到： 如图5