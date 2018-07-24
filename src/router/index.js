import Vue from 'vue'
import Router from 'vue-router'
import GameList from '@/pages/GameList'
import DeviceList from '@/pages/DeviceList'
import UserList from '@/pages/UserList'
import PayList from '@/pages/PayList'
import Login from '@/pages/LoginPage'
import Home from '@/components/common/MainBody'
import NotFound from '@/pages/NotFound'


Vue.use(Router)

export default new Router({
  mode: 'history',  // 将模式转换成history
  base: '/sdk/', 
  routes: [
    {
      path:'/home',
      name:'home',
      component:Home,
      children:[
        {
          path: '/device',
          name: 'device',
          component: DeviceList
        },
        {
          path: '/game',
          name: 'game',
          component: GameList
        },
        {
          path: '/pay',
          name: 'pay',
          component: PayList
        },
        {
          path: '/user',
          name: 'user',
          component: UserList
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
