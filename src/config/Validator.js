import VeeValidate from 'vee-validate'
import Vue from "vue"


VeeValidate.Validator.localize('zh_CN')
Vue.use(VeeValidate)

VeeValidate.Validator.localize({
  zh_CN: {
    messages: {
      required: function (name) { return name + '不能为空' },
      alpha_dash:function (name) { return name+"必须是字母数字下划线"},
      numeric:function (name) { return name + '必须是数字' },
      email:function (name) { return name + '必须是正确格式的邮箱' }
    }
  }
})
VeeValidate.Validator.extend('isbn',{
  getMessage: function () { return " 请输入正确格式的isbn号" },
  validate: function (value) { return /^[\d-]*$/.test(value);}
})
VeeValidate.Validator.extend('pubYear', {
  getMessage: function () { return " 请输入正确的年份" },
  validate: function (value) { return /^(19|20)\d{2}$/.test(value); }
})
