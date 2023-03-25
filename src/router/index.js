import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/home.vue'
// import Function from '../views/function.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: resolve=>require(['../views/home.vue'],resolve)
  },
  {
    path: '/funtion',
    name: 'funtion',
    component: resolve=>require(['../views/function.vue'],resolve)
  },
  {
    path: '/about',
    name: 'about',
    component: resolve=>require(['../views/about.vue'],resolve)
  },
  {
    path: '/introduce',
    name: 'introduce',
    component: resolve=>require(['../views/introduce.vue'],resolve)
  }
]

const router = new VueRouter({
  routes
})

export default router
