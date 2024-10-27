import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index.vue'
import Home from '@/views/home/index.vue'
import Developer from '@/views/developer/index.vue'
import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login/:id', component: Login },
    { path: '/login', component: Login },
    { path: '/home', component: Home },
    { path: '/developer', component: Developer },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})

const authUrls = []

router.beforeEach((to, from, next) => {
  if (!authUrls.includes(to.path)) {
    next()
    return next()
  }
  const token = store.getters.token
  if (token) {
    next()
  } else {
    next('/login')
  }
})
export default router
