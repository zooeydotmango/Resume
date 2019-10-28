import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/template.vue'
import Fm from '@/pages/fm/template.vue'
import Ui from '@/pages/ui/template.vue'
import Blog from '@/pages/blog/template.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/fm',
      name: 'FM',
      component: Fm
    },
    {
      path: '/ui',
      name: 'UI',
      component: Ui
    }

  ]
})
