import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import group from '@/components/group'
import message from '@/components/message'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/group',
      name: 'group',
      component: group
    },
    {
      path: '/message',
      name: 'message',
      component: message
    }
  ]
})
