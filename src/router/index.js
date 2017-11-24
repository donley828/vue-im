import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import index from '@/components/index'
import MyNotification from '@/components/page/notification'
// import MyChat from '@/components/page/chat'
import FriendInfo from '@/components/page/friendinfo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/index/:username',
      name: 'index',
      component: index,
      children: [
        {
          path: 'notice',
          component: MyNotification
        },
        {
          path: 'friendinfo',
          component: FriendInfo
        }
      ]
    }
  ]
})
