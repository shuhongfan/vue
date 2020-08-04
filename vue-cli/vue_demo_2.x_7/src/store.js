import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 状态
  state: {
    count: 0
  },
  // 包含多个更新state函数的对象
  mutations: {
    // 增加的mutation
    INCREMENT (state) {
      state.count++
    },
    DECREMENT (state) {
      state.count--
    }
  },
  // 包含多个对应事件回调函数的对象
  actions: {
    increment ({commit}) {
      // 提交mutation
      commit('INCREMENT')
    },
    decrement ({commit}) {
      commit('DECREMENT')
    },
    incrementIfOdd ({commit, state}) {
      if (state.count % 2 === 1) {
        commit('INCREMENT')
      }
    },
    incrementAsync ({commit}) {
      setTimeout(() => {
        commit('INCREMENT')
      }, 1000)
    }
  },
  // 包含多个getter计算属性函数对象
  getters: {
    evenOrOdd (state) {
      return (state.count % 2) === 0 ? '偶数' : '奇数'
    }
  }
})
