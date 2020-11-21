import Vue from 'vue'
import Vuex from 'vuex'

import { ADDCOUNT } from '@/store/mutationsType.js'

Vue.use(Vuex)
// 全局统一的状态管理工具，就是所有组件都共享的属性
export default new Vuex.Store({
  state: {
    count:0
  },
  mutations: {
  },
  getters: {
  },
  actions: {
  },
  modules: {
  }
})
