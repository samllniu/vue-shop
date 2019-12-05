import Vue from 'vue'
import VueRouter from 'vue-router'
import Piclist from '../components/picture/Piclist.vue'
import Picdetail from '../components/picture/Picdetail.vue'
Vue.use(VueRouter)
// 创建路由规则

const routes = [
  { path: '/', redirect: '/Piclist' },
  { path: '/piclist', component: Piclist },
  { path: '/piclist/picdetail/:id', component: Picdetail }
]

const router = new VueRouter({
  routes
})

export default router
