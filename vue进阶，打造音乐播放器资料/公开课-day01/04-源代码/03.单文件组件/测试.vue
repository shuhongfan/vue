<template>
  <!-- 结构 -->
  <div class="app">
      <h2 @click="sayHello">标题</h2>
  </div>
</template>

<script>
// 写逻辑
export default {
    methods: {
        sayHello(){
            alert("你好吗！！！！")
        }
    },
}
</script>

<style>
/* 写样式 */
.app{
    background-color: skyblue;
}

</style>