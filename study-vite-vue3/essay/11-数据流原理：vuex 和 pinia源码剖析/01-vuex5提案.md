由于 Vuex 有模块化 namespace 的功能，所以模块 user 中的 mutation add 方法，我们需要使用 commit('user/add') 来触发。这样虽然可以让 Vuex 支持更复杂的项目，但是这种字符串类型的拼接功能，在 TypeScript4 之前的类型推导中就很难实现。然后就有了 Vuex5 相关提案的讨论，整个讨论过程都是在 GitHub 的 issue 里推进的，你可以访问GitHub 链接去围观。

Vuex5 能够同时支持 Composition API 和 Option API，并且去掉了 namespace 模式，使用组合 store 的方式更好地支持了 TypeScript 的类型推导，还去掉了容易混淆的 Mutation 和 Action 概念，只保留了 Action，并且支持自动的代码分割。

我们也可以通过对这个提案的研究，来体验一下在一个框架中如何讨论新的语法设计和实现，以及如何通过 API 的设计去解决开发方式的痛点。你可以在 Github 的提案 RFCs 中看到Vuex5 的设计文稿(https://github.com/vuejs/rfcs/blob/34a8b0d541a361a37d05de8d67cb44a7b6f6fd12/active-rfcs/0000-vuex-5.md)，而 Pinia 正是基于 Vuex5 设计的框架。

现在 Pinia 已经正式合并到 Vue 组织下，成为了 Vue 的官方项目，尤雨溪也在多次分享中表示 Pinia 就是未来的 Vuex，接下来我们就好好学习一下 Pinia 的使用方式和实现的原理。