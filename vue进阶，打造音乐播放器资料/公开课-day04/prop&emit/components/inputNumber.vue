<template>
  <div class="input-number">
    <span @click="sub">-</span>
    <input type="text" :value="myvalue"/>
    <span @click="add">+</span>
  </div>
</template>

<script>
export default {
  props: ['value','min','max'],
  data () {
    return {
      myvalue: this.value
    }
  },
  create() {
    console.log(this.value)
    console.log(this.min)
    console.log(this.max)
  },
  methods: {
    add(){
      this.myvalue++
      if (this.myvalue>this.max){
        alert('不能再加了')
        this.myvalue=this.max
      }
      this.$emit('number-change',this.myvalue)
    },
    sub(){
      this.myvalue--
      if (this.myvalue<this.min){
        alert('不能再减了')
        this.myvalue=this.min
      }
    }
  }
  /*
  // 定义传递的参数
  // 和data的用法一样
  props: ["value", "min", "max"],
  // 不建议修改 props的数据  而是把它作为 data的初始值
  data(){
    return{
      // 作为默认值
      myValue:this.value
    }
  },
  created() {
    console.log(this.value);
    console.log(this.min);
    console.log(this.max);
  },
  methods: {
    sub() {
      this.myValue--;
      if (this.myValue < this.min) {
        alert("不能减了");
        this.myValue = this.min;
      }
      // 通知父组件
      // 参数1 事件名
      // 参数2 值
      this.$emit("number-change", this.myValue);
    },
    add() {
      this.myValue++;
      if (this.myValue > this.max) {
        alert("不能加了");
        this.myValue = this.max;
      }
      this.$emit("number-change", this.myValue);
    }
  }*/
};
</script>

<style>
.input-number {
  display: flex;
}
.input-number span {
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 25px;
  color: gray;
  border: 1px solid gray;
  cursor: pointer;
}
.input-number span:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.input-number span:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.input-number input {
  width: 100px;
}
</style>
