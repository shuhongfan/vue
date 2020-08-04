import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'

// 声明使用插件
// 内部会给vm对象和组件对象添加一个属性 $http.get()||$http.post()
Vue.use(VueResource)

const vm = new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})

Vue.use(vm)
