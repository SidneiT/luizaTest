import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Products

  },
  {
    path: '/wichlist',
    name: 'wichlist',
    component: () => import(/* webpackChunkName: "wich-list" */ '../views/WichList.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  store.state.products.length
    ? next()
    : store.dispatch('listProducts').then(() => next())
})

export default router
