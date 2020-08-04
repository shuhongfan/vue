import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import { Button } from 'mint-ui'

// 声明使用插件
// 内部会给vm对象和组件对象添加一个属性 $http.get()||$http.post()
Vue.use(VueResource)
Vue.component(Button.name, Button)

const vm = new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})

Vue.use(vm)
