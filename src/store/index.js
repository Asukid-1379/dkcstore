import Vue from 'vue'
import Vuex from 'vuex'

//方法名，保证统一
import { ADDCOUNT } from '@/store/mutationsType.js'

Vue.use(Vuex)
// 全局统一的状态管理工具，就是所有组件都共享的属性
export default new Vuex.Store({
  state: {
    baseURL: '/myWebsite',
  },
  mutations: {
  },
  getters: {
    parseData(state) {
      return data => {
        const obj = {}
          //因为不在一个服务器，所以要经过一层代理，slice处理一下数据
        if (data.length > 3) {
          obj.id = data[0]
          obj.name = data[1]
          obj.abstract = data[2]
          obj.price = data[3]
          obj.sales = data[4]
          obj.img = state.baseURL + data[5].slice(2)
        } else {
          obj.id = data[0]
          obj.name = data[1]
          obj.img = state.baseURL + data[2].slice(2)
        }
        return obj
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
