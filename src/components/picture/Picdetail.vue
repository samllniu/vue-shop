<template>
  <div class="picinfo">
    <h4>{{ piclist.title }}</h4>
    <p>
      <span class="time">发表时间:{{piclist.add_time | dateFormat}}</span>
      <span class="click">点击:{{piclist.click}}</span>
    </p>
    <van-grid :column-num="3">
  <van-grid-item v-for="(item,index) in thumimageslist " :key="index">
    <van-image :src="item.src" />
  </van-grid-item>
</van-grid>
<span>{{piclist.content}}</span>
    <van-divider :style="{ color: 'grey', borderColor: '#1989fa', padding: '0 16px' }" />
  </div>
</template>

<script>
import Vue from 'vue'
import { Grid, GridItem, Divider } from 'vant'

Vue.use(Grid)
  .use(GridItem)
  .use(Divider)
export default {
  name: '',
  data () {
    return {
      id: 0,
      piclist: [],
      thumimageslist: []
    }
  },
  created () {
    this.getPicinfoByid()
    this.getthumimages()
  },
  methods: {
    async getPicinfoByid () {
      this.id = this.$route.params.id
      const res = await this.$http.get('/api/getimageInfo/' + this.id)
      this.piclist = res.data.message[0]
    },
    async getthumimages () {
      const res = await this.$http.get('/api/getthumimages/' + this.id)
      this.thumimageslist = res.data.message
    }
  }
}
</script>

<style lang="less" scoped>
.picinfo {
  padding: 0 10px 60px;
  overflow: hidden;
  h4 {
    text-align: center;
    color: #26a2ff;
    font-size: 15px;
  }
}
</style>
