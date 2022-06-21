import vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/index.vue'
import Login from '@/views/Login/index.vue'
import Search from '@/views/Search/index.vue'
import Register from '@/views/register/index.vue'

vue.use(VueRouter)
// 保存原型对象push
const oldpush = VueRouter.prototype.push
const oldreplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    oldpush.call(this, location, resolve, reject)
  } else {
    oldpush.call(this, location, () => { }, () => { })
  }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    oldreplace.call(this, location, resolve, reject)
  } else {
    oldreplace.call(this, location, () => { }, () => { })
  }
}

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: { show: true },
      name: 'home'
    },
    {
      path: '/login',
      component: Login,
      meta: { show: false },
      name: 'login'
    },
    {
      path: '/search/:keyword?',
      component: Search,
      meta: { show: true },
      name: 'search'
    },
    {
      path: '/register',
      component: Register,
      meta: { show: false },
      name: 'register'
    }
  ]
})