<template>
  <div class="todo-header">
    <input @keyup.enter="addItem" v-model="title" type="text" placeholder="请输入你的任务名称，按回车键确认"/>
  </div>
</template>

<script>
export default {
  name: 'TodoHeader',
  props: {
    // addTodo: Function
  },
  data () {
    return {
      title: ''
    }
  },
  methods: {
    addItem () {
      const { title } = this
      if (title.trim()) {
        const todo = {
          title,
          complate: false
        }
        // this.addTodo(todo)
        this.$emit('addTodo', todo)
        this.title = ''
      } else {
        alert('输入框不能为空')
        return false
      }
    }
  }
}
</script>

<style scoped>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
