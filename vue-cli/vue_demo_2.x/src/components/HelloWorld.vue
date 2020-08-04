<template>
  <div>
    <h2 class="msg">{{msg}}</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello vue component'
    }
  }
}
</script>

<style>
.msg {
  color: red;
  font-size: 30px;
}
</style>
