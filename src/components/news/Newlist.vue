<template>
  <div>
    <van-card
  v-for="item in Newlist"
  :key="item.id"
  :title="item.title"
  :desc="item.zhaiyao"
  :thumb="item.img_url"
  :price="item.add_time | dateFormat"
  @click="getDetil(item.id)"
/>
  </div>
</template>

<script>
import Vue from 'vue'
import { Card } from 'vant'

Vue.use(Card)
export default {
  name: '',
  data () {
    return {
      Newlist: []
    }
  },
  created () {
    this.getNewList()
  },
  methods: {
    async getNewList () {
      const res = await this.$http.get('/api/getnewslist')
      this.Newlist = res.data.message
      console.log(this.Newlist)
    },
    getDetil (id) {
      this.$router.push('/newlist/newdetail/' + id)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
