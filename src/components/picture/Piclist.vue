<template>
  <div>
    <!-- Tab栏区域 -->
    <van-tabs v-model="active" @click="getPhotoList">
      <van-tab v-for="item in titleList" :name="item.id" :key="item.id" :title="item.title"></van-tab>
    </van-tabs>

    <!-- 图片展示区域 -->
    <div class="img_list">
      <van-cell v-for="item in photoList" :key="item.id" @click="photoInfo(item.id)">
        <van-image width="100%" height="100%" :src="item.img_url" />
        <div class="article">
          <span>{{item.seo_title}}</span>
        </div>
      </van-cell>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs, Image, Cell, CellGroup } from 'vant'
Vue.use(Tab).use(Tabs).use(Image).use(Cell).use(CellGroup)
export default {
  data () {
    return {
      active: 0,
      titleList: [],
      photoList: []
    }
  },
  mounted () {
    this.getTitleList()
    this.getPhotoList()
  },
  methods: {
    async getTitleList () {
      let res = await this.$http.get('/api/getimgcategory')
      if (res.data.status !== 0) {
        return this.$toast('服务器异常')
      }
      res.data.message.unshift({
        id: 0,
        title: '全部'
      })
      this.titleList = res.data.message
    },
    async getPhotoList () {
      let res = await this.$http.get('/api/getimages/' + this.active)
      this.photoList = res.data.message
    },
    photoInfo (id) {
      this.$router.push('/piclist/picdetail/' + id)
    }
  }
}
</script>

<style lang="less" scoped>
.img_list {
  .van-cell {
    padding: 10px;
    height: 300px;

    .article {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 3px 8px;
      background-color: rgba(0, 0, 0, 0.4);
      color: #fff;
      font-size: 12px;
      line-height: 18px;
    }
  }
}
</style>
