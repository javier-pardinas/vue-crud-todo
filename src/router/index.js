//This file tells us the roots that we have in our app

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue' //we components and view cause we are gonna several pages
//every route must be a page (view)

Vue.use(VueRouter)

//we have different ways to load components. Both ways work perfectly
const routes = [
  //this is one way
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  //this is the other way
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
