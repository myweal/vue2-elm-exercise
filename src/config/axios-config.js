import axios from 'axios'
import Vue from "vue";
var fn = require('src/service/desEncode')
import messageBox from 'src/components/common/Alert-index'

Vue.prototype.$http = axios;

// 设置跨域标记为true
axios.defaults.withCredentials=true;
axios.defaults.baseURL = 'http://192.168.100.80:8080/timesheet';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  config.data.sysDate = new Date();
  config.data.Random = Math.random();
  // 对数据进行加密
  var data = JSON.stringify(config.data);

  // 清空原数据
  //request.body={};
  config.data.DATA = fn.encData(data)
  config.data.ChannelId = "VPPC"
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
// 公共处理返回的数据
  if (response.data.errcode == "10000") {
    // 调用alert组件进行报错提醒
    messageBox({"message":response.data.errmsg,"showFlag":true});
    return Promise.reject(response.data.errmsg)
  }
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
