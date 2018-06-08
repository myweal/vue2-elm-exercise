import Vue from 'vue'
import {addEvent} from '../../common/js/dom'
import veeValidate from 'vee-validate'
/**
 * 定义全局的form表单提交指令
 * bind 和 update 时触发相同行为
 *
 */
Vue.directive('submit', {
  bind:function(el,binding,vnode,oldnode){
    addEvent(el,'submit',function (event) {
      event.preventDefault();
      let vm = vnode.context;
      // 获得报错的集合
      let items = vm.errors.items;
      let length = items.length;
      // 对表单数据进行判断后报错
      for (let i =0;i<length;i++){
        let temp = items[i];
        vm.alert(temp.msg);
        return false
      }
      vm[binding.expression]();
    });
  }
});
