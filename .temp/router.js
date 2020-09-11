import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
import Test from '@/components/test'
import DailyTask from '@/view/daily-task'
import DailyTaskAdd from '@/view/daily-task/add'
Vue.use(Router)

export const router = new Router({
  mode: 'abstract',
  routes: [
    {
      path: '/',
      name: 'TEST',
      component: Test
    },
    {
      path: '/daily',
      name: 'DAILY-TASK',
      component: DailyTask,
      children: {
        path: '/add',
        name: 'DALILY-TASK-ADD',
        component: DailyTaskAdd
      }
    }
  ]
})
