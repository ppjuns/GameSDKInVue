// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Qs from 'qs'

var axiosInstance = axios.create({
  baseURL: location.protocol + '//119.29.233.121:8080/game-0.0.1-SNAPSHOT/',
  //baseURL: location.protocol + '//127.0.0.1:8081/',
  transformRequest: function (data) {
    return Qs.stringify(data)
  },
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAxios, axiosInstance)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
