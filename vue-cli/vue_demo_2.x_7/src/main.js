import Vue from 'vue'
import App from './App'
import store from './store'

const vm = new Vue({
  el: '#app',
  components: {
    App
  },
  store, // 所有组件对象都多一个属性 $store
  template: '<App/>'
})

Vue.use(vm)
