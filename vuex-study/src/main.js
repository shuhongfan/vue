import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'
Vue.use(Vuex)

var store=new Vuex.Store({
  state:{//相当于组件中的data
    count:0
  },
  mutations:{//相当于methods，负责修改数据
    increment(state){
      state.count++
    },
    subtract(state,obj){
      state.count-=(obj.c+obj.d)
    }
  },
  getters:{//负责对外提供数据  和过滤器比较类似
      optCount:function (state) {
          return '当前最新count值是'+state.count
      }
  }
})

const vm=new Vue({
  el:'#app',
  render:c=>c(App),
  store
})

// 获取数据 this.$store.state.***
// 修改数据 this.$store.commit('方法名称',唯一参数)
// 对外提供是，需要一层包装 this.$store.getters.***