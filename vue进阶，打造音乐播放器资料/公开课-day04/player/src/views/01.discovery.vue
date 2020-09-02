<template>
  <div class="discovery-container">
    <!-- 轮播图 -->
    <el-carousel class="" :interval="4000" type="card">
      <el-carousel-item v-for="banner in banners" :key="banner.imageUrl">
        <img :src="banner.imageUrl" alt="item" />
      </el-carousel-item>
    </el-carousel>
    <!-- 推荐歌单 -->
    <div class="recommend">
      <h3 class="title">
        推荐歌单
      </h3>
      <div class="items">
        <div class="item" v-for="item in lists" :key="item.id">
          <div class="img-wrap">
            <div class="desc-wrap">
              <span class="desc">{{item.copywriter}}</span>
            </div>
            <img :src="item.picUrl" alt="" />
            <span class="iconfont icon-play"></span>
          </div>
          <p class="name">{{item.name}}</p>
        </div>
      </div>
    </div>
    <!-- 最新音乐 -->
    <div class="news">
      <h3 class="title">
        最新音乐
      </h3>
      <div class="items">
        <div class="item" v-for="song in songs" :key="song.id">
          <div class="img-wrap">
            <img :src="song.picUrl" alt="" />
            <span @click="playMusic(song.id)" class="iconfont icon-play"></span>
          </div>
          <div class="song-wrap">
            <div class="song-name">{{song.name}}</div>
            <div class="singer">{{song.song.artists[0].name}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 推荐MV -->
    <div class="mvs">
      <h3 class="title">推荐MV</h3>
      <div class="items">
        <div class="item" v-for="mv in mvs" :key="mv.id">
          <div class="img-wrap">
            <img :src="mv.picUrl" alt="" />
            <span class="iconfont icon-play"></span>
            <div class="num-wrap">
              <div class="iconfont icon-play"></div>
              <div class="num">{{mv.playCount}}</div>
            </div>
          </div>
          <div class="info-wrap">
            <div class="name">{{mv.name}}</div>
            <div class="singer">{{mv.artistName}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'discovery',
  data () {
    return {
      banners: [],
      lists: [],
      songs: [],
      mvs: []
    }
  },
  async created () {
    // 轮播图
    const resultBanners = await axios({
      url: 'https://autumnfish.cn/banner',
      method: 'get'
    })
    console.log(resultBanners)
    this.banners = resultBanners.data.banners

    // 推荐歌单
    const resLists = await axios({
      url: 'https://autumnfish.cn/personalized',
      method: 'get',
      parmas: {
        limit: 10
      }
    })
    console.log(resLists)
    this.lists = resLists.data.result

    // 最新音乐
    const resSongs = await axios({
      url: 'https://autumnfish.cn/personalized/newsong',
      method: 'get'
    })
    console.log(resSongs)
    this.songs = resSongs.data.result

    // 最新的mv
    const resultMvs = await axios({
      url: 'https://autumnfish.cn/personalized/mv',
      method: 'get'
    })
    console.log(resultMvs)
    this.mvs = resultMvs.data.result
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
    }
  }
}
</script>

<style >

</style>
