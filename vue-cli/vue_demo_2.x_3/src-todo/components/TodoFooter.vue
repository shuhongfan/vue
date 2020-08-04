<template>
  <div class="todo-footer">
    <label>
      <input v-model="isAllCheck" type="checkbox"/>
    </label>
    <span>
          <span>已完成 {{completeSize}} </span> / 全部 {{todos.length}}
        </span>
    <button class="btn btn-danger"
            @click="deleteCompleteTodos"
            v-show="completeSize">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'TodoFooter',
  props: {
    todos: Array,
    deleteCompleteTodos: Function,
    selectAllTodos: Function
  },
  data () {
    return {}
  },
  methods: {},
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
  }
}
</script>

<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
