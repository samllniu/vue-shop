<template>
  <div class="box">
    <h3 class="title">{{detailInfo.title}}</h3>
    <van-row type="flex" justify="space-between">
      <van-col>发表时间: {{detailInfo.add_time | dateFormat}}</van-col>
      <van-col>点击次数: {{detailInfo.click}}</van-col>
    </van-row>
    <div v-html="detailInfo.content" class="article_content"></div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      id: 0,
      detailInfo: []
    }
  },
  created () {
    this.getNewDetail()
  },
  methods: {
    async getNewDetail () {
      this.id = this.$route.params.id
      const res = await this.$http.get('/api/getnew/' + this.id)
      console.log(res)
      this.detailInfo = res.data.message[0]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
