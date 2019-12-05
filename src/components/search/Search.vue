<template>
  <div>
    <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <van-cell-group v-for="item in infoList" :key="item.id" v-show="isShow">
      <van-cell :border="false" :title="item.name" :value="item.ctime" />
      <van-button type="danger" size="mini" @click="deleteHistory(item.id)">删除</van-button>
    </van-cell-group>
  </div>
</template>

<script>
import Vue from 'vue'
import { Search, Cell, CellGroup, Tag, Button, Dialog } from 'vant'
Vue.use(Search)
  .use(Cell)
  .use(CellGroup)
  .use(Tag)
  .use(Button)
  .use(Dialog)
export default {
  name: '',
  data () {
    return {
      value: '',
      infoList: [],
      isShow: false,
      historyList: []
    }
  },
  created () {
    this.getprodlist()
  },
  methods: {
    async getprodlist () {
      const res = await this.$http.get('/api/getprodlist')
      res.data.message.forEach(item => {
        item.ctime = item.ctime.substring(0, 10)
      })
      this.infoList = res.data.message
    },
    onSearch () {
      if (this.value.trim().length === 0) return this.$toast('请输入内容')
      this.getprodlist()
      this.isShow = true
      this.historyList.push(this.value)
    },
    deleteHistory (id) {
      Dialog.confirm({
        title: '标题',
        message: '弹窗内容'
      })
        .then(async () => {
          // on confirm
          const { data: res } = await this.$http.get(`/api/delproduct/${id}`)
          if (res.status === 0) {
            this.getprodlist()
            this.$toast.success(res.message)
          }
        })
        .catch(() => {
          // on cancel
        })
    }
  }
}
</script>

<style lang="less" scoped>
.searchHistory {
  padding: 0 10px;
}
.top {
  display: flex;
  justify-content: space-between;
}
.btn {
  margin-top: 15px;
}
.searchList li {
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
}
.van-tag {
  margin-right: 5px;
}
.noHistory {
  font-size: 12px;
  color: #ccc;
  text-align: center;
}
</style>
