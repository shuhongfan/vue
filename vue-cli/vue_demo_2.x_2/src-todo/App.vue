<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"></TodoHeader>
      <TOdoList :todos="todos" :deleteTodo="deleteTodo"></TOdoList>
      <TodoFooter
        :todos="todos"
        :selectAllTodos="selectAllTodos"
        :deleteCompleteTodos="deleteCompleteTodos"></TodoFooter>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TOdoList from './components/TOdoList'
import TodoFooter from './components/TodoFooter'
export default {
  name: 'App',
  data () {
    return {
      // 从localstorage读取
      todos: JSON.parse(window.localStorage.getItem('todos') || '[]')
    }
  },
  watch: {
    // 深度监视
    todos: {
      deep: true,
      handler (newVal, oldVal) {
        // 将最新todos的值Json数据保存到localstorage
        window.localStorage.setItem('todos', JSON.stringify(newVal))
      }
    }
  },
  methods: {
    addTodo (todo) {
      this.todos.push(todo)
    },
    deleteTodo (index) {
      this.todos.splice(index, 1)
    },
    deleteCompleteTodos () {
      this.todos = this.todos.filter(todo => !todo.complate)
    },
    selectAllTodos (check) {
      this.todos.forEach(todo => (todo.complate = check))
    }
  },
  components: {
    TodoHeader,
    TOdoList,
    TodoFooter
  }
}
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

</style>
