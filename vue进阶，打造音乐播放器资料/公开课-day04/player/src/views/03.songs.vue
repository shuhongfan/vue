<template>
  <div class="songs-container">
    <div class="tab-bar">
      <span
        v-for="item in tabBarLists"
        :key="item.id"
        @click="tag=item.id"
        :class="{active:tag===item.id}"
        class="item">{{item.tag}}</span>
    </div>
    <!-- 底部的table -->
    <table class="el-table playlit-table">
      <thead>
        <th></th>
        <th></th>
        <th>音乐标题</th>
        <th>歌手</th>
        <th>专辑</th>
        <th>时长</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in lists" :key="index" class="el-table__row">
          <td>{{index+1}}</td>
          <td>
            <div class="img-wrap">
              <img :src="item.album.picUrl" alt="" />
              <span @click="playMusic(item.id)" class="iconfont icon-play"></span>
            </div>
          </td>
          <td>
            <div class="song-wrap">
              <div class="name-wrap">
                <span>{{item.name}}</span>
                <span class="iconfont icon-mv"></span>
              </div>
              <span>{{item.album.company}}</span>
            </div>
          </td>
          <td>{{item.album.artists['0'].name}}</td>
          <td>{{item.album.name}}</td>
          <td>{{item.duration|formatTime}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'songs',
  data () {
    return {
      tabBarLists: [{ tag: '全部', id: 0 }, { tag: '华语', id: 7 }, { tag: '欧美', id: 96 }, { tag: '日本', id: 8 }, { tag: '韩国', id: 16 }],
      lists: [],
      tag: 0
    }
  },
  watch: {
    tag () {
      this.getList()
    }
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      const res = await axios({
        url: 'https://autumnfish.cn/top/song',
        method: 'get',
        params: {
          type: this.tag
        }
      })
      console.log(res)
      this.lists = res.data.data
    },
    async playMusic (id) {
      const res = await axios({
        url: 'https://autumnfish.cn/song/url',
        method: 'get',
        params: {
          id
        }
      })
      console.log(res)
      const url = res.data.data[0].url
      console.log(url)
      console.log(this.$parent)
      this.$parent.musicUrl = url
    }
  }
}
</script>

<style >

</style>
