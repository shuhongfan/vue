<template>
  <div id="app">
    <Top></Top>
    <Index></Index>
  </div>
</template>

<script>
import Top from './components/Top'
import Index from './components/Index'

export default {
  name: 'app',
  components: {
    Index,
    Top
  }
}
</script>

<style scoped>
#app{
  margin: 0;
  padding: 0;
}
</style>
