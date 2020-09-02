<template>
  <div>
    <inputNumber @number-change="change" :value="10" :min='1' :max='20'></inputNumber>
  </div>
</template>

<script>
// 导入组件
import inputNumber from "./components/inputNumber.vue";
export default {
  components: {
    inputNumber
  },
  methods: {
    change(val){
      console.log(val)
    }
  }
};
</script>

<style></style>
