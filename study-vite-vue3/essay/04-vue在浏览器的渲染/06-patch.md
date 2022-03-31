patch 函数patch 传递的是 container._vnode，
    也就是上一次渲染缓存的 vnode、
    本次渲染组件的 vnode，
    以及容器 container。
下面就是 patch 函数的代码，核心代码我添加了注释。
    其中 n1 是上次渲染的虚拟 DOM，
    n2 是下次要渲染的虚拟 DOM。
    
首先可以把 n1 和 n2 做一次判断，如果虚拟 DOM 的节点类型不同，就直接 unmount 之前的节点。
因为比如之前是 Button 组件，现在要渲染 Container 组件，就没有计算 diff 的必要，直接把 Button 组件销毁再渲染 Container 即可。
如果 n1 和 n2 类型相同，比如都是 Button 组件或者都是 div 标签，我们需要判断具体的类型再去执行不同的函数，比如 processText、processFragment、processElement 以及 processComponent 等函数。
看第 55 行，这里的 ShapeFlags 用到了位运算的知识，我们后面会通过刷算法题的方式介绍，暂时我们只需要知道，ShapeFlags 可以帮助我们快速判断需要操作的类型就可以了。

代码的整体执行逻辑如如06所示。
我们首次渲染的 App 是一个组件，所以要执行的就是 processComponent 方法。