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
  this.$on('after-leave', _ => {
    if (vm.$el && vm.$el.parentNode) {
      vm.$el.parentNode.removeChild(vm.$el);
    }
    this.$destroy();
  });
  vm.showFlag = false;
};

const messageBox = (options = {}) => {
  if (Vue.prototype.$isServer) return;
  options = Object.assign({}, defaults, options);
  let parent = document.body;
  let instance = new messageVueConstructor({
    el: document.createElement('div'),
    data: options
  });
  parent.appendChild(instance.$el);
  Vue.nextTick(() => {
    instance.showFlag = true;
  });
  return instance;
};
// 定义全局的公共方法
Vue.prototype.$message = messageBox;

export default messageBox;
