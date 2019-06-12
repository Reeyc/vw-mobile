import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/index'
  }, {
    path: '/index',
    component: () => import('@/components/Index/Index')
  }, {
    path: '/category',
    component: () => import('@/components/Index/Index')
  }, {
    path: '/cart',
    component: () => import('@/components/Index/Index')
  }, {
    path: '/self',
    component: () => import('@/components/Index/Index')
  }]
})
