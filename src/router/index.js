//This file tells us the roots that we have in our app

import Vue from 'vue'
import VueRouter from 'vue-router'

//every route must be a page (view)

Vue.use(VueRouter)

//we have different ways to load components. Both ways work perfectly
const routes = [
  //this is one way
  {
    path: '/',
    name: 'Home',
    redirect: '/todos'//when we are at '/' redirect to '/todos'
  },
  //this is the other way
  {
    path: '/todos',
    name: 'todos',
    component: () => import('../views/Todos.vue')
  },
  {
    path: '/todos/create',
    name: 'todos-create',
    component: () => import('../views/TodoCreate.vue')
  },
  {
    path: '/todos/:id/update',
    name: 'todos-update',
    component: () => import('../views/TodoUpdate.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
