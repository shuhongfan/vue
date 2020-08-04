<template>
  <li class="list-group-item">
    <div class="handle">
      <a @click.prevent="deleteItem" href="">删除</a>
    </div>
    <p class="user"><span >{{comment.name}}</span><span>说:</span></p>
    <p class="centence">{{comment.content}}!</p>
  </li>
</template>

<script>
export default {
  name: 'Item',
  // props: ['comment']
  props: {
    comment: Object,
    deleteComponent: Function,
    index: Number
  },
  methods: {
    deleteItem () {
      if (window.confirm(`确定删除${this.comment.name}的评论吗？`)) {
        this.deleteComponent(this.index)
      }
    }
  }
}
</script>

<style>
  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }
</style>
