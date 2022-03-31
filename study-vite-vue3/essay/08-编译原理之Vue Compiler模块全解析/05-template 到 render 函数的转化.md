# template 到 render 函数的转化

结合下面的代码我们可以看到，generate 首先通过 createCodegenContext 创建上下文对象，然后通过 genModulePreamble 生成预先定义好的代码模板，然后生成 render 函数，最后生成创建虚拟 DOM 的表达式。(05-generate.js)

我们来看下关键的步骤，genModulePreamble 函数生成 import 风格的代码，这也是我们迷你版本中的功能：通过遍历 helpers，生成 import 字符串，这对应了代码的第二行。(05-genModulePreamble.js)

接下来的步骤就是生成渲染函数 render 和 component 的代码，最后通过 genNode 生成创建虚拟的代码，执行 switch 语句生成不同的代码，一共有十几种情况，这里就不一一赘述了。我们可以回顾上一讲中迷你代码的逻辑，总之针对变量，标签，v-if 和 v-for 都有不同的代码生成逻辑，最终才实现了 template 到 render 函数的转化。(05-genNode.js)