<template>
  <div class="mv-container">
    <div class="mv-wrap">
      <h3 class="title">mv详情</h3>
      <!-- mv -->
      <div class="video-wrap">
        <video
          controls
          autoplay
          loop
          :src="mvUrl"
        ></video>
      </div>
      <!-- mv信息 -->
      <div class="info-wrap">
        <div class="singer-info">
          <div class="avatar-wrap">
            <img :src="icon" alt="" />
          </div>
          <span class="name">{{mvinfo.artistName}}</span>
        </div>
        <div class="mv-info">
          <h2 class="title">{{mvinfo.name}}</h2>
          <span class="date">发布：{{mvinfo.publishTime|formatDate}}</span>
          <span class="number">播放：{{mvinfo.playCount}}次</span>
          <p class="desc">{{mvinfo.desc}}</p>
        </div>
      </div>
      <!-- 精彩评论 -->
      <div class="comment-wrap">
        <p class="title">精彩评论<span class="number">({{total}})</span></p>
        <div class="comments-wrap">
          <div class="item" v-for="item in mvComment" :key="item.commentId">
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
      <!-- 最新评论 -->
      <div class="comment-wrap">
        <p class="title">最新评论<span class="number">({{total}})</span></p>
        <div class="comments-wrap">
          <div class="item" v-for="item in mvComment" :key="item.commentId">
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
        :limit="limit"
      >
      </el-pagination>
    </div>
    <div class="mv-recommend">
      <h3 class="title">相关推荐</h3>
      <div class="mvs">
        <div class="items">
          <div class="item" v-for="item in simiMvs" :key="item.id">
            <div class="img-wrap">
              <img :src="item.cover" alt="" />
              <span class="iconfont icon-play"></span>
              <div class="num-wrap">
                <div class="iconfont icon-play"></div>
                <div class="num">{{item.playCount}}</div>
              </div>
              <span class="time">{{item.duration | formatTime}}</span>
            </div>
            <div class="info-wrap">
              <div class="name">{{item.name}}</div>
              <div class="singer">{{item.artistName}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'mv',
  data () {
    return {
      // 总条数
      total: 20,
      // 页码
      page: 1,
      // 页容量
      limit: 10,
      id: this.$route.query.q,
      mvUrl: '',
      simiMvs: [],
      mvinfo: [],
      icon: '',
      mvComment: [],
      mvhotComments: []
    }
  },
  async created () {
    // 获取mv播放地址
    const result = await axios({
      url: 'https://autumnfish.cn/mv/url',
      params: { id: this.id }
    })
    console.log(result)
    this.mvUrl = result.data.data.url

    // 获取相关的mv
    const res = await axios({
      url: 'https://autumnfish.cn/simi/mv',
      params: { mvid: this.id }
    })
    console.log(res)
    this.simiMvs = res.data.mvs
    this.simiMvs.forEach(item => {
      if (item.playCount > 100000) {
        item.playCount = parseInt(item.playCount / 100000) + '万'
      }
    })

    // 获取MV信息
    const mvinfo = await axios({
      url: 'https://autumnfish.cn/mv/detail',
      params: { mvid: this.id }
    })
    console.log(mvinfo)
    this.mvinfo = mvinfo.data.data

    // 获取歌手信息
    const artists = await axios({
      url: 'https://autumnfish.cn/artists',
      params: { id: this.mvinfo.artists[0].id }
    })
    console.log(artists)
    this.icon = artists.data.artist.picUrl

    // 获取歌手信息
    const mvComment = await axios({
      url: 'https://autumnfish.cn/comment/mv',
      params: {
        id: this.id,
        limit: 10,
        offset: (this.page - 1) * 10
      }
    })
    console.log(mvComment)
    this.mvComment = mvComment.data.comments
    this.mvhotComments = mvComment.data.hotComments
    this.total = mvComment.data.total
  },
  methods: {
    async handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.page = val
      // 获取歌手信息
      const mvComment = await axios({
        url: 'https://autumnfish.cn/comment/mv',
        params: {
          id: this.id,
          limit: 10,
          offset: (this.page - 1) * 10
        }
      })
      console.log(mvComment)
      this.mvComment = mvComment.data.comments
      this.mvhotComments = mvComment.data.hotComments
      this.total = mvComment.data.total
    }
  }
}
</script>

<style></style>
