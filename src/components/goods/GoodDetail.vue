<template>
  <div>
      <div class="detail">
      <h2>{{Detail.title}}</h2>
      <hr>
      <div class="context" v-html="Detail.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      Detail: {},
      id: 0
    }
  },
  created () {
    this.getGoodsList()
  },
  methods: {
    async getGoodsList () {
      console.log(this.$route.params.id)
      this.id = this.$route.params.id
      const res = await this.$http.get('/api/goods/getdesc/' + this.id)
      this.Detail = res.data.message[0]
      console.log(res)
      console.log(this.Detail)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
