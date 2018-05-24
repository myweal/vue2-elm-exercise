<template>
  <div>
    <Header hideFlag="true" title="登录"></Header>
    <main class="container">
      <form class="form" name="loginForm" novalidate @submit.prevent="subForm()">
        <div class="form-group">
          <label for="username">用户名</label>
          <input id="username" name="username" title="用户名" type="text" v-validate.initial="'required|email'"
                 class="form-control form-control-sm" v-model="user.loginid" data-vv-as="用户名" placeholder="请输入用户名"/>
        </div>
        <div class="form-group">
          <label for="psdId">密码</label>
          <input id="psdId" name="padId" title="密码" type="password" v-validate.initial="'required|alpha_dash'"
                 class="form-control form-control-sm" v-model="user.password" data-vv-as="密码"  placeholder="请输入密码"/>
        </div>
        {{errors.items}}
        <div class="text-center">
          <button type="submit" class="btn col-6 btn-primary">
            登录
          </button>
        </div>
      </form>
    </main>
  </div>
</template>
<script>
  // "Data": "dOvpuXpaMkJ+ShFNq2cGjhTMwZoJdRSS9x/0aRd2Ivu0svl3rOva19Ep4AkwITdDQ1yxevS31foLe6BvmR1ondR2mrCBbA5tCL+yFK2OheOX8EkMwaoiBnYFwvWLUdCkas7HwpbuLSKPgO7Shc1qYDd0mh2eqDo+j3F2rduYY8oD0HQVx9EXbC/EDqtLHsiMUzZLQTY9NK7dlhZDdvBo6SSuXrlrupkyTEkuYwzyva0="
  //
  export default {
    data () {
      return {
        user: {
          "loginid": "test@csii.com.cn",
          "password": "111111Aa"
        }
      }
    },
    methods: {
      subForm: function () {
        // 获得报错的集合
        let items = this.errors.items;
        let length = items.length;
        // 对表单数据进行判断后报错
        for (let i =0;i<length;i++){
            let temp = items[i]
            this.alert(temp.msg)
            return false
        }
        // 向后端发送登录请求
        this.$http.post("/login.json",this.user).then(response=>{
          // 成功后跳转到列表页面
          this.goto('/list')
        });
      }
    }

  }

</script>
<style>
  @import "../../style/bootstrap.min.css";
</style>
