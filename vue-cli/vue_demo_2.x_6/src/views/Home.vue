<template>
    <div>
      <h2>HOME</h2>
      <ul class="nav nav-tabs">
          <router-link to="/home/news">NEWS</router-link>
          <router-link to="/home/message">MESSAGE</router-link>
      </ul>
      <div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>

</style>
