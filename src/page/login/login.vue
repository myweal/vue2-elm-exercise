<template>
  <div>
    <Header hideFlag="true" title="登录"></Header>
    <main class="container mt-2">
      <form class="form" name="loginForm" novalidate v-submit="subForm">
        <div class="form-group">
          <label for="username">用户名</label>
          <input id="username" name="username" title="用户名" type="text" v-validate.initial="{required:true,email:true}"
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
        let vm = this;
// 向后端发送登录请求
        vm.$http.post('/login.json',this.user)
          .then(function (response) {
            // 成功后跳转到列表页面
            vm.goto('/list')
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }

  }

</script>
<style>
  @import "../../style/bootstrap.min.css";
</style>
