import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { request } from './utils/request'
import bus from '@/utils/bus.js'

Vue.config.productionTip = false
Vue.prototype.request = request //request请求方法
Vue.use(bus)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
