import Vue from 'vue'
import App from './App.vue'

// 导入需要通过路由管理的组件
import Discovery from './components/Discovery'
import Playlist from './components/Playlist'
import Songs from './components/Songs'
import Mvs from './components/Mvs'
import Result from './components/Result'

// 导入
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import './plugins/element.js'

// use
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.config.productionTip = false

// 创建路由
const router = new VueRouter({
  // 配置规则
  routes: [
    {
      path: '/discovery',
      component: Discovery
    },
    {
      path: '/playlist',
      component: Playlist
    },
    {
      path: '/songs',
      component: Songs
    },
    {
      path: '/mvs',
      component: Mvs
    },
    {
      path: '/result',
      component: Result
    },
    {
      path: '/',
      component: Discovery
    }
  ]
})
new Vue({
  render: h => h(App),
  router // 挂载到vue实例上
}).$mount('#app')
