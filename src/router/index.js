import Vue from 'vue'
import VueRouter from 'vue-router'
import Piclist from '../components/picture/Piclist.vue'
import Picdetail from '../components/picture/Picdetail.vue'
import Search from '../components/search/Search.vue'
import Index from '../components/homepage/index.vue'
Vue.use(VueRouter)
// 创建路由规则

const routes = [
  { path: '/', redirect: '/Index' },
  { path: '/piclist', component: Piclist },
  { path: '/piclist/picdetail/:id', component: Picdetail },
  { path: '/search', component: Search },
  { path: '/index', component: Index }
]

const router = new VueRouter({
  routes
})

export default router
