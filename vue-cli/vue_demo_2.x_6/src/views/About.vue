<template>
  <div>
    <h2>about组件</h2>
    <p>接收外部数据：{{msg}}</p>
    <input type="text">
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
