import Vue from 'vue'
import VueRouter from 'vue-router'
import Piclist from '../components/picture/Piclist.vue'
import Picdetail from '../components/picture/Picdetail.vue'
import Search from '../components/search/Search.vue'
import Index from '../components/homepage/index.vue'
import Goods from '../components/goods/Goodlist.vue'
import GoodsDetail from '../components/goods/GoodDetail.vue'
import Comment from '../components/goods/Comment.vue'
import Newlist from '../components/news/Newlist.vue'
import Newdetail from '../components/news/Newdetail.vue'
Vue.use(VueRouter)
const routes = [
  { path: '/', redirect: '/newlist' },
  { path: '/piclist', component: Piclist },
  { path: '/piclist/picdetail/:id', component: Picdetail },
  { path: '/search', component: Search },
  { path: '/index', component: Index },
  { path: '/good', component: Goods },
  { path: '/good/detail/:id', component: GoodsDetail },
  { path: '/comment', component: Comment },
  { path: '/newlist', component: Newlist },
  { path: '/newlist/newdetail/:id', component: Newdetail }
]
const router = new VueRouter({
  routes
})
export default router
