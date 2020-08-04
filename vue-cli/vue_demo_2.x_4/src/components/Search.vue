<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input v-model="searchName" type="text" placeholder="enter the name you search"/>
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
  name: 'Search',
  data () {
    return {
      searchName: ''
    }
  },
  methods: {
    search () {
      const searchName = this.searchName.trim()
      if (searchName) {
        // 发布消息
        PubSub.publish('search', searchName)
      }
    }
  }
}
</script>

<style scoped>

</style>
