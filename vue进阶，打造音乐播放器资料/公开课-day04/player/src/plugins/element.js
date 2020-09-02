import Vue from 'vue'
import {
  Button,
  carousel,
  carouselItem,
  pagination,
  tabs,
  tabPane,
  Message
} from 'element-ui'

Message.install = function (Vue, options) {
  Vue.prototype.$message = Message
}

Vue.use(Button)
Vue.use(carousel)
Vue.use(carouselItem)
Vue.use(pagination)
Vue.use(tabs)
Vue.use(tabPane)
Vue.use(Message)
