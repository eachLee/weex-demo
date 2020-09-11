/* global Vue */
import Router from 'vue-router'
Vue.use(Router)

export const router = new Router({
  mode: 'abstract',
  routes: [
    {
      path: '/',
      name: 'TEST',
      component: res => import('@/components/test')
    },
    {
      path: '/daily',
      name: 'DAILY-TASK',
      component: res => import('@/view/daily-task'),
      children: [{
        path: '/add',
        name: 'DALILY-TASK-ADD',
        component: res => import('@/view/daily-task/add')
      }]
    }
  ]
})
