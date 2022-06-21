// 导包
import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router/index.js'
// 引入全局组件
import TypeNav from '@/components/TypeNav/index.vue'

// 引用api接口
import { threeLevelLinkage } from '@/api/index.js'

// 引入vuex仓库
import store from '@/store/index'
Vue.component(TypeNav.name, TypeNav)
threeLevelLinkage()
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由
  router,
  store
}).$mount('#app')
