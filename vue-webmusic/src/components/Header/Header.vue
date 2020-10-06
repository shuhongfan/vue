<template>
  <el-row :gutter="10">
    <el-col :xs="8" :sm="6" :md="4" :lg="5" :xl="3">
      <img class="logo" src="../../assets/img/logo.png" alt="">
    </el-col>
    <el-col id="search" :xs="12" :sm="16" :md="18" :lg="18" :xl="18">
      <el-input id="searchInput" v-model="searchInput" placeholder="请输入内容"></el-input>
      <el-button type="text" id="searchButton" icon="el-icon-search" circle></el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      searchInput: ''
    }
  }
}
</script>

<style scoped>
  .logo{
    margin-top: 5px;
    width: 50px;
    height: 50px;
  }
  #search{
    position: relative;
  }
  #searchButton{
    position: absolute;
    right: 20px;
    top: 12px;
  }
</style>
