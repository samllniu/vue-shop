import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 将组件的文件引入全局下
import '@/plugins/vant.js'
import axios from 'axios'
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.filter('dateFormat', function (originVal) {
  const dt = new Date(originVal)
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
