//项目JS入口文件
import {title} from "./test";

console.log('ok')

// 导入VUE
// import Vue from 'vue'
import Vue from '../node_modules/vue/dist/vue.js'
// 导入VUE ROUTER
import VueRouter from 'vue-router'
// 手动安装vuerouter
Vue.use(VueRouter)
import router from "./router.js";
// var login={
//     template:"<h1>这是login组件，是使用网页中的形式创建的</h1>"
// }
// 导入login组件
// import login from './login.vue'
import app from './App.vue'

// 导入MintUI 完整
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

// 按需导入MintUI
import { Button } from 'mint-ui'
Vue.component(Button.name, Button)

// 导入mui
import './lib/mui/css/mui.min.css'

// 导入bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/app.css'
var vm=new Vue({
    el:'#app',
    data:{
        msg:'123'
    },
    method:{},
    // render:function (createElements) {
    //     return createElements(login)
    // },
    render:c=>c(app),
    router:router
    // components:{
    //     login
    // },
})


// import m1, {title as title123,content} from './test.js'
// console.log(m1)
// console.log(title)
// console.log(title123)
// console.log(content)

