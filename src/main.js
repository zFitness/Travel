// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入fastclick库
import fastClick from 'fastclick'
//导入 全局css，  reset.css, border.css
import 'styles/reset.css'
import 'styles/border.css'
// 引入iconfont
import 'styles/iconfont.css'
// 轮播组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
// 使用fastclick
fastClick.attach(document.body);
// 引入vuex
import store from './store'
//引入 babel-polyfill
import 'babel-polyfill'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
