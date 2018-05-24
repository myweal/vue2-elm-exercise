import Vue from "vue"
import VueResource from 'vue-resource'
var fn = require('src/service/desEncode')
//  定义请求资源
Vue.use(VueResource)

Vue.http.interceptor.before = function(request) {
  // override before interceptor
  request.url=this.urlPrefix+""+request.url

};
Vue.http.interceptors.push(function(request) {
  // modify request
  request.body.sysDate=new Date();
  request.body.Random = Math.random();
  // 对数据进行加密
  var data = JSON.stringify(request.body);

  // 清空原数据
  //request.body={};
   request.body.DATA = fn.encData(data)
  request.body.ChannelId="VPPC"

  // return response callback
  return function(response) {
    // 公共处理返回的数据
    if(response.body.errcode=="10000"){
        this.alert(response.body.errmsg)
        return Promise.reject(response.body.errmsg)
    }

  };
});
