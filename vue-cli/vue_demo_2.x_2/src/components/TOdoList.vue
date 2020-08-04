<template>
  <ul class="todo-main">
<!--    <ToduItem-->
<!--      :deleteTodo="deleteTodo"-->
<!--      v-for="(todo,index) in todos"-->
<!--      :key="index"-->
<!--      :todo="todo"-->
<!--      :index="index"></ToduItem>-->
    <ToduItem
      v-for="(todo,index) in todos"
      :key="index"
      :todo="todo"
      :index="index"></ToduItem>
  </ul>
</template>

<script>
import ToduItem from './ToduItem'
export default {
  name: 'TOdoList',
  props: {
    todos: Array
    // deleteTodo: Function
  },
  components: {
    ToduItem
  }
}
</script>

<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
