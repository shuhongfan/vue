<template>
<!--  onmouseenter="" onmouseleave=""-->
<!--  onmouseover="" onmouseout=""-->
  <li :style="{background: bgColor}"  @mouseenter="handleShow(true)" @mouseleave="handleShow(false)">
    <label>
      <input v-model="todo.complate" type="checkbox"/>
      <span>{{todo.title}}</span>
    </label>
    <button @click="deleteItem" class="btn btn-danger" v-show="isShow">删除</button>
  </li>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
  name: 'ToduItem',
  props: {
    todo: Object,
    index: Number
    // deleteTodo: Function
  },
  data () {
    return {
      bgColor: 'white',
      isShow: false
    }
  },
  methods: {
    handleShow (isEnter) {
      if (isEnter) {
        this.bgColor = 'green'
        this.isShow = true
      } else {
        this.bgColor = 'white'
        this.isShow = false
      }
    },
    deleteItem () {
      const { todo, index } = this
      if (window.confirm(`确认删除 ${todo.title} 吗？`)) {
        // this.deleteTodo(index)
        PubSub.publish('deleteTodo', index)
      }
    }
  }
}
</script>

<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
