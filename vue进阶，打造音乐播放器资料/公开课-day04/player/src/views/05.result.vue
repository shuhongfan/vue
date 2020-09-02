<template>
  <div class="result-container">
    <div class="title-wrap">
      <h2 class="title">{{keywords}}</h2>
      <span class="sub-title">找到 {{count}} 个结果</span>
    </div>
    <el-tabs v-model="activeIndex">
      <el-tab-pane label="歌曲" name="songs">
        <table class="el-table">
          <thead>
            <th></th>
            <th>音乐标题</th>
            <th>歌手</th>
            <th>专辑</th>
            <th>时长</th>
          </thead>
          <tbody>
            <tr class="el-table__row"
                @dblclick="playMusic(item.id)"
                v-for="(item, index) in songList"
                :key="item.id">
              <td>{{index+1}}</td>
              <td>
                <div class="song-wrap">
                  <div class="name-wrap">
                    <span>{{item.name}}</span>
                    <span v-if="item.mvid" class="iconfont icon-mv"></span>
                  </div>
                  <span v-if="item.alias[0]">{{item.alias[0]}}</span>
                </div>
              </td>
              <td>{{item.artists[0].name}}</td>
              <td>{{item.album.name}}</td>
              <td>{{item.duration|formatTime}}</td>
            </tr>
          </tbody>
        </table>
      </el-tab-pane>
      <el-tab-pane label="歌单" name="lists">
        <div class="items">
          <div class="item" v-for="item in playList" :key="item.id">
            <div class="img-wrap">
              <div class="num-wrap">
                播放量:
                <span class="num">{{item.playCount}}</span>
              </div>
              <img :src="item.coverImgUrl" alt="" />
              <span @click="toPlayList(item.id)" class="iconfont icon-play"></span>
            </div>
            <p class="name">{{item.name}}</p>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="MV" name="mv">
        <div class="items mv">
          <div @click="toMv(item.id)" class="item" v-for="item in mvList" :key="item.id">
            <div class="img-wrap">
              <img :src="item.cover" alt="" />
              <span class="iconfont icon-play"></span>
              <div class="num-wrap">
                <div class="iconfont icon-play"></div>
                <div class="num">{{item.playCount}}</div>
              </div>
              <span class="time">{{item.duration|formatTime}}</span>
            </div>
            <div class="info-wrap">
              <div class="name">{{item.name}}</div>
              <div class="singer">{{item.artistName}}</div>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'result',
  data () {
    return {
      activeIndex: 'songs',
      keywords: this.$route.query.q,
      songList: [],
      playList: [],
      mvList: [],
      count: 0
    }
  },
  watch: {
    async activeIndex () {
      let type = 1
      let limit = 10
      switch (this.activeIndex) {
        case 'songs':
          type = 1
          limit = 10
          break
        case 'lists':
          type = 1000
          limit = 10
          break
        case 'mv':
          type = 1004
          limit = 8
          break
        default:
          break
      }
      const res = await axios({
        url: 'https://autumnfish.cn/search',
        method: 'get',
        params: {
          keywords: this.keywords,
          type: type,
          limit: limit
        }
      })
      console.log(res)
      if (type === 1) {
        this.songList = res.data.result.songs
        this.count = res.data.result.songCount
      } else if (type === 1000) {
        this.playList = res.data.result.playlists
        this.count = res.data.result.playlistCount
        this.playList.forEach(item => {
          if (item.playCount > 100000) {
            item.playCount = parseInt(item.playCount / 100000) + '万'
          }
        })
      } else if (type === 1004) {
        this.mvList = res.data.result.mvs
        this.count = res.data.result.mvCount
        this.mvList.forEach(item => {
          if (item.playCount > 100000) {
            item.playCount = parseInt(item.playCount / 100000) + '万'
          }
        })
      }
    }
  },
  async created () {
    const res = await axios({
      url: 'https://autumnfish.cn/search',
      method: 'get',
      params: {
        keywords: this.keywords,
        type: 1,
        limit: 10
      }
    })
    console.log(res)
    this.songList = res.data.result.songs
    this.count = res.data.result.songCount
  },
  methods: {
    async playMusic (id) {
      const result = await axios({
        url: 'https://autumnfish.cn/song/url',
        method: 'get',
        params: { id }
      })
      console.log(result)
      const url = result.data.data[0].url
      console.log(this.$parent.musicUrl)
      // 设置给父组件的值
      this.$parent.musicUrl = url
    },
    toPlayList (id) {
      this.$router.push('/playlist?q=' + id)
    },
    toMv (id) {
      this.$router.push('/mv?q=' + id)
    }
  }
}
</script>

<style >

</style>
