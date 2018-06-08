import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import i18n from './language'
import scroll from 'src/components/scroll/scroll'
import Header from 'src/components/common/header'
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

// 定义全局的scroll组件
Vue.component("scroll",scroll)
// 定义全局的header
Vue.component('Header',Header)

// 模拟手机端的滑动刷新
Vue.use(VueScroller)

// 配置路由
const router = new VueRouter({routes})

// 引入自定义全局的v-submit指令
require('src/common/directive/v-submit')

// 创建实例
export default new Vue({
  router,
  i18n,
  data: {
  },
  components: {},
  methods:{
    hideAlert(){
      //隐藏alert
      this.closeAlert();
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    "$route": "hideAlert"
  }
}).$mount('#app')

/*监听器demo
alertOptions: function (newVal) {
  this.alertOptions = newVal !== undefined ? newVal : this.alertOptions
}*/
