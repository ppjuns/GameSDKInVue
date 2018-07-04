import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld2 from '@/components/HelloWorld2'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'HelloWorld2',
      component: HelloWorld2
    }
  ]
})
