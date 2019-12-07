<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in Lunbotu" :key="item.id">
        <img :src="item.img" />
      </van-swipe-item>
    </van-swipe>
    <van-grid :column-num="3">
      <van-grid-item to="/newslist">
        <img src="../../assets/images/menu1.png" alt />
        <p>新闻资讯</p>
      </van-grid-item>
      <van-grid-item to="/photolist">
        <img src="../../assets/images/menu2.png" alt />
        <p>图片分享</p>
      </van-grid-item>
      <van-grid-item to="/goodslist">
        <img src="../../assets/images/menu3.png" alt />
        <p>商品购买</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../../assets/images/menu4.png" alt />
        <p>留言反馈</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../../assets/images/menu5.png" alt />
        <p>视频专区</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../../assets/images/menu6.png" alt />
        <p>联系我们</p>
      </van-grid-item>
    </van-grid>
    <van-tabbar v-model="active">
  <van-tabbar-item icon="home-o" name="0" to="/home">首页</van-tabbar-item>
  <van-tabbar-item icon="search" name="1" to="">购物车</van-tabbar-item>
  <van-tabbar-item icon="friends-o" name="2" to="/search">搜索</van-tabbar-item>
  <van-tabbar-item icon="setting-o" name="3" to="">会员</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Grid, GridItem, Tabbar, TabbarItem } from 'vant'

Vue.use(Swipe)
  .use(SwipeItem)
  .use(Grid)
  .use(GridItem)
  .use(Tabbar)
  .use(TabbarItem)
export default {
  name: '',
  data () {
    return {
      active: 0,
      Lunbotu: []
    }
  },
  created () {
    this.getLunbo()
  },
  methods: {
    async getLunbo () {
      const { data: res } = await this.$http.get('/api/getlunbo')
      this.Lunbotu = res.message
      console.log(this.Lunbotu)
    }
  }
}
</script>

<style lang="less" scoped>
.van-swipe {
  height: 200px;
  background-color: #eee;
  img {
    width: 100%;
    height: 100%;
  }
}
.van-grid-item {
  width: 33.333333333333%;
  img {
    width: 60%;
  }
}
</style>
