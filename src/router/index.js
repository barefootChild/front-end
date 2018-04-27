import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Main
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
