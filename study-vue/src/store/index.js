import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    vuexA: '我是vuexA的初始值',
    vuexB: '我是vuexB的初始值',
  },
  mutations: {
    updateVuexA(state, data) {
        debugger
      state.vuexA = data;
    },
    updateVuexB(state, data) {
        debugger
        state.vuexB = data;
    },
  }
});