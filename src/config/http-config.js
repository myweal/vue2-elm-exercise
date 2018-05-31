import Vue from "vue"
import VueResource from 'vue-resource'
var fn = require('src/service/desEncode')
//  定义请求资源
Vue.use(VueResource)

// 扩展String
String.prototype.endWith = function (s) {
  if (s == null || s == "" || this.length == 0 || s.length > this.length) return false;
  if (this.substring(this.length - s.length) == s) return true;
  else return false;
  return true;
};

/*Vue.http.interceptor.before = function (request) {

};*/
Vue.http.interceptors.push(function (request) {
  debugger
  // modify request
  // override before interceptor
  if (request.url.endWith('.json') || request.url.endWith('.do') || request.url.indexOf('.json?') >= 0 || request.url.indexOf('.do?') >= 0) {
    request.url = this.urlPrefix + "" + request.url
  }
  request.body.sysDate = new Date();
  request.body.Random = Math.random();
  // 对数据进行加密
  var data = JSON.stringify(request.body);

  // 清空原数据
  //request.body={};
  request.body.DATA = fn.encData(data)
  request.body.ChannelId = "VPPC"

  // return response callback
  return function (response) {
    // 公共处理返回的数据
    if (response.data.errcode == "10000") {
      this.alert(response.data.errmsg)
      return Promise.reject(response.data.errmsg)
    }

  };
});
