<template>
  <div class="playlists-container">
    <!-- 同步 -->
    <div class="top-card">
      <div class="icon-wrap">
        <img :src="topList.coverImgUrl" alt="" />
      </div>
      <div class="content-wrap">
        <div class="tag">精品歌单</div>
        <div class="title">
          {{topList.name}}
        </div>
        <div class="info">
          {{topList.description}}
        </div>
      </div>
      <img :src="topList.coverImgUrl" alt="" class="bg" />
      <div class="bg-mask"></div>
    </div>
    <div class="tab-container">
      <!-- tab栏 顶部 -->
      <div class="tab-bar">
        <span v-for="(item, index) in tabBarLists" :key="index" class="item" @click="tag=item" :class="{active:tag===item}">{{item}}</span>
      </div>
      <!-- tab的内容区域 -->
      <div class="tab-content">
        <div class="items">
          <div class="item" v-for="list in lists" :key="list.coverImgId">
            <div class="img-wrap">
              <div class="num-wrap">
                播放量:
                <span class="num">{{list.playCount}}</span>
              </div>
              <img :src="list.coverImgUrl" alt="" />
              <span class="iconfont icon-play"></span>
            </div>
            <p class="name">{{list.description}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 分页器
    total 总条数
    current-page 当前页
    page-size 每页多少条数据
    current-change 页码改变事件
     -->
    <el-pagination
      @current-change="handleCurrentChange"
      background
      layout="prev, pager, next"
      :total="total"
      :current-page="page"
      :page-size="10"
    >
    </el-pagination>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'recommend',
  data () {
    return {
      tabBarLists: ['全部', '欧美', '华语', '流行', '说唱', '摇滚', '民谣', '电子', '轻音乐', '影视原声', 'ACG', '怀旧', '治愈', '旅行'],
      // 总条数
      total: 0,
      // 页码
      page: 1,
      // 顶部推荐歌单
      topList: [],
      lists: [],
      // 当前选择的数据
      tag: '全部'
    }
  },
  watch: {
    async tag () {
      console.log(this.tag)
      this.topData()
      this.listData()
      // 修改页码为 1
      this.page = 1
    }
  },
  async created () {
    this.topData()
    this.listData()
  },
  methods: {
    async topData () {
      const result = await axios({
        url: 'https://autumnfish.cn/top/playlist/highquality',
        method: 'get',
        params: {
          limit: 1,
          cat: this.tag
        }
      })
      console.log(result)
      this.topList = result.data.playlists[0]
    },
    async listData () {
      // 歌单列表
      const res = await axios({
        url: 'https://autumnfish.cn/top/playlist/',
        method: 'get',
        params: {
          limit: 10,
          // 起始的值 (页码-1)*每页多少条数据
          offset: (this.page - 1) * 10,
          cat: this.tag
        }
      })
      console.log(res)
      this.lists = res.data.playlists
      this.total = res.data.total
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.page = val
      this.listData()
    }
  }
}
</script>

<style >

</style>
