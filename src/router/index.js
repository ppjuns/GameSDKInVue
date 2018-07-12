import Vue from 'vue'
import Router from 'vue-router'
import GameList from '@/pages/GameList'
import DeviceList from '@/pages/DeviceList'
import UserList from '@/pages/UserList'
import Login from '@/pages/LoginPage'
import Home from '@/components/common/MainBody'
import NotFound from '@/pages/NotFound'

Vue.use(Router)

export default new Router({
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
      path: '/',
      redirect: '/login'
  },
    
  ]
})
