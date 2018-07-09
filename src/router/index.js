import Vue from 'vue'
import Router from 'vue-router'
import GameList from '@/pages/GameList'
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
          path: '/game',
          name: 'game',
          component: GameList
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
