<template>
    <div class="index">
      <div class="nav">
        <ul>
          <router-link tag="li"  to="/discovery">发现音乐</router-link>
          <router-link tag="li" to="/playlist">推荐歌单</router-link>
          <router-link tag="li" to="/songs">最新音乐</router-link>
          <router-link tag="li" to="/mvs">最新mv</router-link>
        </ul>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style scoped>
  .index{
    display: flex;
    height: 830px;
  }
  .nav{
    width: 200px;
    background-color: #ededed;
  }
  .nav li{
    padding-left: 10px;
    margin: 10px;
    width: 200px;
  }
  .main{
    background-color: orange;
  }
  .router-link-active{
    background-color: red;
  }
</style>
