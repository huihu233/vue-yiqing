import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
// 异步
const Hesuan  = () => import('../views/Home/Hesuan/Hesuan.vue')
const Area  = () => import('../views/Home/Area/index.vue')
const Prevention = () => import('../views/Home/Prevention/Prevention.vue')
const Citys = () => import('../views/Home/Citys/Citys.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hesuan',
    name: 'hesuan',
    component: Hesuan
  },
  {
    path: '/area',
    name: 'area',
    component: Area
  },
  {
    path: '/Prevention',
    name: 'Prevention',
    component: Prevention
  },
  {
    path: '/Citys/:cityname',
    name: 'Citys',
    component: Citys,
    props: true,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
