<template>
    <div class="top">
      <img src="../assets/01.top.jpg" alt="">
      <input type="text" v-model="input">
      <el-button  @click="toSearch" type="danger">危险按钮</el-button>
    </div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      input: ''
    }
  },
  methods: {
    toSearch () {
      if (this.input === '') {
        // alert('请输入内容')
        this.$message({
          message: '请输入内容',
          type: 'warning'
        })
      } else {
        this.$router.push('/result?q=' + this.input)
      }
    }
  }
}
</script>

<style scoped>
  .top{
    display: flex;
    align-items: center;
    background-color: #f9f9f9;
  }
</style>
