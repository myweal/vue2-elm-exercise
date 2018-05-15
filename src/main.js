import Vue from 'vue'
import VueRouter from 'vue-router'
 import routes from './router/router'

// 定义路由
Vue.use(VueRouter)

const router = new VueRouter(
  {
    routes
  }
)

// 创建实例
new Vue({
  router
}).$mount('#app')


