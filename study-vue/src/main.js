// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vueFilePreview from 'gxd-file-preview';
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(vueFilePreview,{
  pdf: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.0.288/build/pdf.min.js', //pdf插件
  worker:'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.0.288/build/pdf.worker.min.js',//pdf.work插件
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
