import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'Gray'},
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/Site1',
    name: 'Site1',
    meta: {layout: 'Gray'},
    component: () => import(/* webpackChunkName: "about" */ '../views/Site1.vue')
  },
  {
    path: '/Site2',
    name: 'Site2',
    meta: {layout: 'Gray'},
    component: () => import(/* webpackChunkName: "about" */ '../views/Site2.vue')
  },
  {
    path: '/Site3',
    name: 'Site3',
    meta: {layout: 'Gray'},
    component: () => import(/* webpackChunkName: "about" */ '../views/Site3.vue')
  },
  {
    path: '/Site4',
    name: 'Site4',
    meta: {layout: 'Gray'},
    component: () => import(/* webpackChunkName: "about" */ '../views/Site4.vue')
  },
  {
    path: '/Site5',
    name: 'Site5',
    meta: {layout: 'White'},
    component: () => import(/* webpackChunkName: "about" */ '../views/Site5.vue')
  },
  {
    path: '/Site6',
    name: 'Site6',
    meta: {layout: 'Darc'},
    component: () => import(/* webpackChunkName: "about" */ '../views/Site6.vue')
  }


]

const router = new VueRouter({
  routes
})

export default router
