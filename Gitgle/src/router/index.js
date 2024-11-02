import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login/index.vue'
import Home from '@/views/home/index.vue'
import Developer from '@/views/developer/index.vue'
import Personal from '@/views/personal/index.vue'
import Perhome from '@/views/personal/perhome.vue'
import Like from '@/views/personal/like.vue'
import Fans from '@/views/personal/fans.vue'
import Project from '@/views/project/index.vue'
import Devdetail from '@/views/developer/devdetail.vue'

import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login/:id', component: Login },
    { path: '/login', component: Login },
    { path: '/home', component: Home },
    { path: '/developer', component: Developer },
    { path: '/devdetail/:githubId', component: Devdetail },
    { path: '/personal', component: Personal },
    { path: '/project', component: Project },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/personal',
      component: Personal,
      redirect: '/perhome',
      children: [
        { path: '/perhome', component: Perhome },
        { path: '/like', component: Like },
        { path: '/fans', component: Fans }
      ]
    }
  ]
})

const authUrls = ['/personal', '/perhome', '/like', '/fans']

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
