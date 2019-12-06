<template>
  <div>
   <van-cell is-link @click="showPopup">新增</van-cell>
<van-popup v-model="show">
  <van-cell-group>
  <van-field v-model="content" placeholder="请输入用户名" blur="addSearch" clearable/>
</van-cell-group>

</van-popup>
    <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
      <div slot="action" @click="onDelete">取消</div>
    </van-search>
    <van-cell-group v-for="item in infoList" :key="item.id" v-show="isShow">
      <van-cell :border="false" :title="item.name" :value="item.ctime" />
      <van-button type="danger" size="mini" @click="deleteHistory(item.id)">删除</van-button>
    </van-cell-group>
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
 搜索历史记录
</van-divider>
<van-button @click="coloseTag" type="danger" size="mini">清空</van-button>
  <van-tag round type="primary" v-for="(item,index) in historyList" :key="index">{{item}}</van-tag>
  </div>
</template>

<script>
import Vue from 'vue'
import { Search, Cell, CellGroup, Tag, Button, Dialog, Row, Col, Field, Popup } from 'vant'
Vue.use(Search)
  .use(Cell)
  .use(CellGroup)
  .use(Tag)
  .use(Button)
  .use(Dialog)
  .use(Row)
  .use(Col)
  .use(Field)
  .use(Popup)
export default {
  name: '',
  data () {
    return {
      content: '',
      value: '',
      infoList: [],
      isShow: false,
      historyList: [],
      show: false
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
      if (!this.historyList.includes(this.value)) {
        this.historyList.push(this.value)
      }
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
    },
    async addSearch () {
      console.log(this.content)
      this.show = false
      const data = await this.$http.post('/api/addproduct')
      console.log(data)
    },
    showPopup () {
      this.show = true
    },
    onDelete () {
      this.infoList = []
    },
    coloseTag () {
      this.historyList = []
    }
  }
}
</script>

<style lang="less" scoped>
</style>
