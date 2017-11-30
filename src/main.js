// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$RongIMLib = window.RongIMLib
Vue.prototype.$RongIMClient = window.RongIMClient
Vue.prototype.$AppKey = 'cpj2xarlc1ofn'
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
