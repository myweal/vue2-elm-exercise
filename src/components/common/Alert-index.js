import Vue from 'vue';
import Alert from './Alert.vue';

const defaults = {
  'title': '温馨提示',
  'message': '',
  'ok': null,
  'btnTxt': '确定',
  'showFlag': false
};

const messageVueConstructor = Vue.extend(Alert);
messageVueConstructor.prototype.close = function () {
  var vm = this;
  vm.showFlag = false;
};

const messageBox = (options = {}) => {
  if (Vue.prototype.$isServer) return;
  options = Object.assign({}, defaults, options);
  let parent = document.body;

  // 使用propsData传递数据，options为props配置的变量
  let instance = new messageVueConstructor({
    el: document.createElement('div'),
    propsData: {"options":options}
  });
  // 使用data初始化数据
  /*let instance = new messageVueConstructor({
    el: document.createElement('div'),
    data: options
  });*/

  parent.appendChild(instance.$el);
  return instance;
};
// 定义全局的公共方法
Vue.prototype.$message = messageBox;

export default messageBox;
