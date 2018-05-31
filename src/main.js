import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import Alert from 'src/components/common/Alert'
import VueScroller from 'vue-scroller'

// 定义路由
Vue.use(VueRouter)

// 定义全局方法
require('./config/mixin')

// 处理请求头，与公共报错处理
// require('src/config/http-config')
require('src/config/axios-config')

// 重新定义表单校验的字典
require('./config/Validator')

// 模拟手机端的滑动刷新
Vue.use(VueScroller)

const router = new VueRouter(
  {
    routes
  }
)

// 创建实例
new Vue({
  router,
  data: {
    alertOptions: null
  },
  components: { Alert },
  watch: {
    alertOptions: function (newVal) {
      this.alertOptions = newVal !== undefined ? newVal : this.alertOptions
    }
  }
}).$mount('#app')


