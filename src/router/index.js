import Vue from 'vue'
import VueRouter from 'vue-router'
import Bootstrapper from '../views/Bootstrapper'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Bootstrapper,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
      },
      {
        path: '/add-story/:id?',
        component: () => import(/* webpackChunkName: "blog" */ '../views/AddStory.vue')
      },
      {
        path: '/blog/:id',
        component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue')
      },
      {
        path: '/highlights',
        component: () => import(/* webpackChunkName: "blog" */ '../views/Highlights.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior () {
    return { x: 0, y: 0}
  }
})

export default router
