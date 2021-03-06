import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: () => import('../components/Cadastro.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/HelloWorld.vue')
  },
  {
    path: '/infos',
    name: 'Infos',
    component: () => import('../views/Infos.vue')
  },
  {
    path: '/member',
    name: 'Member',
    component: () => import('../views/Member.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../components/Main')
  }
]

const router = new VueRouter({
  routes
})

export default router
