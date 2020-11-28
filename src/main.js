import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//网络请求
import { request } from './network/request'
//引入 iview
import './plugins/iview'
//引入 Vant 
import './plugins/vant'

//在Vue的原型上绑定网络请求的方法，方便在任何一个组件用
Vue.prototype.$request = request

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')