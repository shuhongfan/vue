<template>
  <div class="container">
    <Search></Search>
    <usersMain></usersMain>
  </div>
</template>

<script>
import axios from 'axios'
import Search from './components/Search'
import Main from './components/Main'
export default {
  name: 'App',
  components: {
    Search,
    usersMain: Main
  }
}
</script>

<style scoped>
</style>
