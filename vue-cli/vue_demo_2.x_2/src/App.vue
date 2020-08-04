<template>
  <div class="todo-container">
    <div class="todo-wrap">
<!--      <TodoHeader @addTodo="addTodo"></TodoHeader>-->
      <TodoHeader ref="hander"></TodoHeader>
<!--      <TOdoList :todos="todos" :deleteTodo="deleteTodo"></TOdoList>-->
      <TOdoList :todos="todos"></TOdoList>
<!--      <TodoFooter-->
<!--        :todos="todos"-->
<!--        :selectAllTodos="selectAllTodos"-->
<!--        :deleteCompleteTodos="deleteCompleteTodos"></TodoFooter>-->
      <TodoFooter>
        <input v-model="isAllCheck" type="checkbox" slot="checkAll"/>
        <span slot="count">已完成 {{completeSize}} / 全部 {{todos.length}}</span>
        <button slot="delete" class="btn btn-danger" @click="deleteCompleteTodos" v-show="completeSize">清除已完成任务</button>
      </TodoFooter>
    </div>
  </div>
</template>

<script>
import Pubsub from 'pubsub-js'
import TodoHeader from './components/TodoHeader'
import TOdoList from './components/TOdoList'
import TodoFooter from './components/TodoFooter'
import storageUtil from './util/StorageUtil'
export default {
  name: 'App',
  data () {
    return {
      // 从localstorage读取
      todos: storageUtil.readTodos()
    }
  },
  computed: {
    completeSize () {
      return this.todos.reduce((preTotal, todo) => preTotal + (todo.complate ? 1 : 0), 0)
    },
    isAllCheck: {
      // 读取值
      get () {
        return this.completeSize === this.todos.length && this.completeSize > 0
      },
      // 监视值的变化
      set (value) {
        this.selectAllTodos(value)
      }
    }
  },
  mounted () {
    // 执行异步代码
    // 给TodoHeader绑定addTodo事件监听
    this.$refs.hander.$on('addTodo', this.addTodo)

    // 订阅消息
    Pubsub.subscribe('deleteTodo', (msg, index) => {
      this.deleteTodo(index)
    })
  },
  watch: {
    // 深度监视
    todos: {
      deep: true,
      // handler (newVal, oldVal) {
      //   // 将最新todos的值Json数据保存到localstorage
      //   storageUtil.saveTodos(newVal)
      // }
      handler: storageUtil.saveTodos
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
