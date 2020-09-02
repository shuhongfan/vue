<template>
  <div class="playlist-container">
    <div class="top-wrap">
      <div class="img-wrap">
        <img :src="playList.coverImgUrl" alt="" />
      </div>
      <div class="info-wrap">
        <p class="title">{{playList.title}}</p>
        <div class="author-wrap">
          <img class="avatar" :src="playList.creator.avatarUrl" alt="" />
          <span class="name">{{playList.creator.nickname}}</span>
          <span class="time">{{playList.createTime|formatDate}} 创建</span>
        </div>
        <div class="play-wrap">
          <span class="iconfont icon-circle-play"></span>
          <span class="text">播放全部</span>
        </div>
        <div class="tag-wrap">
          <span class="title">标签:</span>
          <ul>
            <li v-for="(item, index) in playList.tags" :key="index">{{item}}</li>
          </ul>
        </div>
        <div class="desc-wrap">
          <span class="title">简介:</span>
          <span class="desc">{{playList.description}}</span>
        </div>
      </div>
    </div>
    <el-tabs v-model="activeIndex">
      <el-tab-pane label="歌曲列表" name="1">
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
            <tr class="el-table__row" v-for="(item, index) in playList.tracks" :key="item.id">
              <td>{{index+1}}</td>
              <td>
                <div class="img-wrap" @click="playMusic(item.id)">
                  <img :src="item.al.picUrl" alt="" />
                  <span class="iconfont icon-play"></span>
                </div>
              </td>
              <td>
                <div class="song-wrap">
                  <div class="name-wrap">
                    <span>{{item.name}}</span>
                    <span
                      v-if="item.mv"
                      @click="toMv(item.mv)"
                      class="iconfont icon-mv"></span>
                  </div>
                  <span>{{item.subTitle}}</span>
                </div>
              </td>
              <td>{{item.ar[0].name}}</td>
              <td>{{item.al.name}}</td>
              <td>{{ item.dt | formatTime }}</td>
            </tr>
          </tbody>
        </table>
      </el-tab-pane>
      <el-tab-pane label="评论(66)" name="2">
        <!-- 精彩评论 -->
        <div class="comment-wrap">
          <p class="title">精彩评论<span class="number">({{hotCount}})</span></p>
          <div class="comments-wrap">
            <div class="item" v-for="item in hotComments" :key="item.commentId">
              <div class="icon-wrap">
                <img v-if="item.user" :src="item.user.avatarUrl" alt="" />
              </div>
              <div class="content-wrap">
                <div class="content">
                  <span class="name">{{item.user.nickname}}：</span>
                  <span class="comment">{{item.content}}</span>
                </div>
                <div class="re-content" v-if="item.beReplied.length !== 0">
                  <span class="name">{{item.beReplied[0].user.nickname}}：</span>
                  <span class="comment">{{item.beReplied[0].content}}</span>
                </div>
                <div class="date">{{item.time|formatDate}}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 最新评论 -->
        <div class="comment-wrap">
          <p class="title">最新评论<span class="number">({{total}})</span></p>
          <div class="comments-wrap">
            <div class="item" v-for="item in comments" :key="item.id">
              <div class="icon-wrap">
                <img :src="item.user.avatarUrl" alt="" />
              </div>
              <div class="content-wrap">
                <div class="content">
                  <span class="name">{{item.user.nickname}}：</span>
                  <span class="comment">{{item.content}}</span>
                </div>
                <div class="re-content" v-if="item.beReplied.length !== 0">
                  <span class="name">{{item.beReplied[0].user.nickname}}：</span>
                  <span class="comment">{{item.beReplied[0].content}}</span>
                </div>
                <div class="date">{{item.time|formatDate}}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 分页器 -->
        <el-pagination
          @current-change="handleCurrentChange"
          background
          layout="prev, pager, next"
          :total="total"
          :current-page="page"
          :page-size="5"
        >
        </el-pagination>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'playlist',
  data () {
    return {
      id: this.$route.query.q,
      activeIndex: '1',
      // 总条数
      total: 0,
      // 页码
      page: 1,
      playList: [],
      hotComments: [],
      hotCount: 0,
      comments: []
    }
  },
  async created () {
    // 获取歌单详情
    const res = await axios({
      url: 'https://autumnfish.cn/playlist/detail',
      params: { id: this.id }
    })
    console.log(res)
    this.playList = res.data.playlist

    // 获取评论的
    const result = await axios({
      url: 'https://autumnfish.cn/comment/hot',
      params: {
        id: this.id,
        type: 2
      }
    })
    console.log(result)
    this.hotComments = result.data.hotComments
    this.hotCount = result.data.total

    // 获取最新评论
    const ret = await axios({
      url: 'https://autumnfish.cn/comment/playlist',
      params: {
        id: this.id,
        limit: 10,
        offset: (this.page - 1) * 10
      }
    })
    console.log(ret)
    this.total = ret.data.total
    this.comments = ret.data.comments
  },
  methods: {
    async handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.page = val
      const ret = await axios({
        url: 'https://autumnfish.cn/comment/playlist',
        params: {
          id: this.id,
          limit: 10,
          offset: (this.page - 1) * 10
        }
      })
      console.log(ret)
      this.total = ret.data.total
      this.comments = ret.data.comments
    },
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
    toMv (id) {
      this.$router.push(`/mv?id=${id}`)
    }
  }
}
</script>

<style >

</style>
