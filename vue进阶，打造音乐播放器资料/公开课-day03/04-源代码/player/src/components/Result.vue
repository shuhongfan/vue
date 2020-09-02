<template>
    <div>
<!--      <img src="../assets/07.result.jpg" alt="">-->
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">页面1</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">页面2</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">页面3</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">页面4</el-tab-pane>
      </el-tabs>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
export default {
  name: 'Result',
  data () {
    return {
      activeName: 'second'
    }
  },
  created () {
    console.log(this.$route.query.q)
  }
}
</script>

<style scoped>

</style>
