import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/pages/index/template.vue')
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('@/pages/blog/template.vue')
    },
    {
      path: '/fm',
      name: 'FM',
      component: () => import('@/pages/fm/template.vue')
    },
    {
      path: '/ui',
      name: 'UI',
      component: () => import('@/pages/ui/template.vue')
    }

  ]
})
