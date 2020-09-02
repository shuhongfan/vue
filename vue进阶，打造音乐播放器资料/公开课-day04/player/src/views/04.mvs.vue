<template>
  <div class="mvs-container">
    <div class="filter-wrap">
      <div class="seciton-wrap">
        <span class="section-type">地区:</span>
        <ul class="tabs-wrap">
          <li class="tab"
              @click="area=item"
              v-for="(item, index) in areaList"
              :key="index">
            <span :class="{active:area===item}" class="title">{{item}}</span>
          </li>
        </ul>
      </div>
      <div class="type-wrap">
        <span class="type-type">类型:</span>
        <ul class="tabs-wrap">
          <li class="tab"
              @click="type=item"
              v-for="(item, index) in typeList"
              :key="index">
            <span :class="{active:type===item}" class="title ">{{item}}</span>
          </li>
        </ul>
      </div>
      <div class="order-wrap">
        <span class="order-type">排序:</span>
        <ul class="tabs-wrap">
          <li class="tab"
              @click="order=item"
              v-for="(item, index) in orderList"
              :key="index">
            <span :class="{active:order===item}" class="title ">{{item}}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- mv容器 -->
    <!-- 推荐MV -->
    <div class="mvs">
      <div class="items">
        <div v-for="item in lists" :key="item.id" class="item" @click="toMv(10)">
          <div class="img-wrap">
            <img :src="item.cover" alt="" />
            <div class="num-wrap">
              <div class="iconfont icon-play"></div>
              <div class="num">{{item.playCount}}</div>
            </div>
          </div>
          <div class="info-wrap">
            <div class="name">{{item.name}}</div>
            <div class="singer">{{item.artistName}}</div>
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
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'mvs',
  data () {
    return {
      areaList: ['全部', '内地', '港台', '欧美', '日本', '韩国'],
      typeList: ['全部', '官方版', '原生', '现场版', '网易出品'],
      orderList: ['上升最快', '最热', '最新'],
      // 总条数
      total: 20,
      // 页码
      page: 1,
      // 页容量
      limit: 12,
      area: '全部',
      type: '全部',
      order: '上升最快',
      lists: []
    }
  },
  watch: {
    area () {
      this.page = 1
      this.getLists()
    },
    type () {
      this.page = 1
      this.getLists()
    },
    order () {
      this.page = 1
      this.getLists()
    }
  },
  async created () {
    this.getLists()
  },
  methods: {
    async getLists () {
      const res = await axios({
        url: ' https://autumnfish.cn/mv/all',
        method: 'get',
        params: {
          limit: this.limit, // 数量
          area: this.area,
          type: this.type,
          order: this.order,
          // 分页=(页码-1)*数量
          offset: (this.page - 1) * this.limit
        }
      })
      console.log(res)
      this.lists = res.data.data
      this.lists.forEach(item => {
        if (item.playCount > 100000) {
          item.playCount = parseInt(item.playCount / 100000) + '万'
        }
      })

      // 保存总条数
      if (res.data.count) {
        this.total = res.data.count
      }
    },
    toMv (id) {
      this.$router.push(`/mv?id=${id}`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.page = val
      this.getLists()
    }
  }
}
</script>

<style >

</style>
