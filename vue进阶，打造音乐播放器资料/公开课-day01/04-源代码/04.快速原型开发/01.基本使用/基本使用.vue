<template>
  <div class='app' @click="sayHello">
      app
      <h2>{{ food }}</h2>
      <ul>
          <li v-for="(item,index) in list" :key="index">
              {{ item }}
          </li>
      </ul>
  </div>
</template>

<script>
// 导入 样式 暂时理解成 link标签 设置了一个样式
import './css/base.css'


export default {
    data(){
        return {
            food:"西兰花炒蛋",
            list:['黑马','程序员','深圳校区']
        }
    },
    methods:{
        sayHello(){
            alert('你好吗！！ (づ￣ 3￣)づ')
        }
    }
}
</script>

<style>
.app{
    background-color: yellowgreen;
}
</style>