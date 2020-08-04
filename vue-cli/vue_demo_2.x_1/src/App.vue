<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment="addComment"></Add>
      <List :comments="comments" :deleteComponent="deleteComponent"></List>
    </div>
  </div>
</template>

<script>
import Add from './components/Add'
import List from './components/List'
export default {
  name: 'App',
  data () {
    return {
      // 数据在那个组件 更新数据的行为 方法就应该定义在哪个组件
      comments: [
        {
          name: 'BOC',
          content: '还不错'
        },
        {
          name: 'ICBC',
          content: 'Vue so eazy'
        },
        {
          name: 'CCB',
          content: 'greate'
        }
      ]
    }
  },
  components: {
    Add,
    List
  },
  methods: {
    addComment (comment) {
      this.comments.unshift(comment)
    },
    deleteComponent (index) {
      this.comments.splice(index, 1)
    }
  }
}
</script>

<style>

</style>
