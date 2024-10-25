import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index.vue'
import Home from '@/views/home/index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login/:id', component: Login },
    { path: '/login', component: Login },
    { path: '/home', component: Home },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})

export default router
