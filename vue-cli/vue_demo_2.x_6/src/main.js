import Vue from 'vue'
import App from './App'
import router from './route/index'
const vm = new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router
})

Vue.use(vm)
