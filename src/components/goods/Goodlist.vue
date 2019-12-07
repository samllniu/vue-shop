<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="goods_list">
          <van-cell v-for="item in goodsList" :key="item.id">
            <van-image @click="picDeli(item.id)" fit="cover" :src="item.img_url"></van-image>
            <p>{{ item.title }}</p>
            <div class="bottom_box">
              <div>
                <span>￥{{item.sell_price}}</span>
                <s>￥2195</s>
              </div>
              <div>
                <span>热卖中</span>
                <span>剩{{item.stock_quantity}}件</span>
              </div>
            </div>
          </van-cell>
        </div>
      </van-list>
  </div>
</template>

<script>
import Vue from 'vue'
import { Grid, GridItem, List } from 'vant'

Vue.use(Grid).use(GridItem).use(List)
export default {
  name: '',
  data () {
    return {
      goodsList: []
    }
  },
  created () {
    this.getGoodslist()
  },
  methods: {
    async getGoodslist () {
      const { data: res } = await this.$http.get('/api/getgoods?pageindex=1')
      this.goodsList = res.message
      console.log(this.goodsList)
    },
    finished () {
    },
    picDeli (id) {
      this.$router.push('/good/detail/' + id)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
