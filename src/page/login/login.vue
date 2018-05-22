<template>
  <div>
    <Header hideFlag="true" title="登录"></Header>
    <main class="container">
      <form class="form" name="loginForm" novalidate @submit.prevent="subForm()">
        <div class="form-group">
          <label for="username">用户名</label>
          <input id="username" name="username" title="用户名" type="text" v-validate="'required|alpha'"
                 class="form-control form-control-sm" v-model="user.username" data-vv-as="用户名" placeholder="请输入用户名"/>
        </div>
        <div class="form-group">
          <label for="psdId">密码</label>
          <input id="psdId" name="padId" title="密码" type="text" v-validate="'required|numeric'"
                 class="form-control form-control-sm" v-model="user.psd" data-vv-as="密码"  placeholder="请输入密码"/>
        </div>
        {{errors.items}}
        <div class="text-center">
          <button type="submit" v-bind:disabled='!user.username||!user.psd' class="btn col-6 btn-primary">
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
        user: {}
      }
    },
    methods: {
      subForm: function () {
        console.log('====')
        debugger
         var $this = this
        this.errors.items.forEach(function (value, index) {
          debugger
          $this.alert(value.msg)
          return false
        })
      debugger
        if(this.errors.items.length==0){
          this.goto('/list')
        }
      }
    }

  }

</script>
<style>
  @import "../../style/bootstrap.min.css";
</style>
