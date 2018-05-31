<template>
  <div class="container">
    <form name="healthForm" autocomplete="off" @submit.prevent="search()" novalidate>
      <div class="form-group">
        <label for="ProName">项目名称</label>
        <input type="text" id="ProName" class="form-control" name="ProName" v-model="params.ProName"
               title="项目名称" v-validate.initial="'regex:/^[\u4e00-\ufa5aa-zA-Z_-\\d\\s]{0,40}$/'" maxlength="40"
               placeholder="项目名称">
      </div>

      <div class="text-center btn-wrap">
        <button type="submit" class="btn btn-info col-12 btn-lg">查询</button>
      </div>
      <div class="row text-center health-title">
        <div class="col-6">项目名称</div>
        <div class="col-6">
          <div class="ngCellText">
            健康状态
          </div>
        </div>
      </div>
    </form>
    <scroller
      :on-refresh="refresh"
      :on-infinite="infinite">
      <div class="row" v-for="row in showProjectList" @click="rate(row);">
        <div class="col-6 align-content-center" v-text="row.ProName"></div>
        <div class="col-6 align-content-center">
            <span
              ng-class='{"red-dot":row.Fraction<60,"yellow-dot":row.Fraction>=60&&row.Fraction<80,"green-dot":row.Fraction>=80&&row.Fraction<=100}'></span>
        </div>
      </div>
    </scroller>
  </div>
</template>
<script>
  export default {
    name: "healthList",
    data() {
      return {
        params: {},
        showProjectList: [],
        scrollTop: "margin-top:200px"
      }
    },
    beforeCreate() {

    },
    created() {
      let vm = this;
      // 查询所在项目的自己的打分列表
      vm.$axios.post("/pmOfficeList.json",{}).then(function (response) {
        vm.showProjectList= response.data;
      });
    },
    mounted() {

    },
    methods: {
      search() {

      },
      refresh(){
        console.log('refresh....')
      },
      infinite(){
        console.log('infinite....')
      },
      rate(){
        // 打分
      }
    }
  }
</script>
<style>
  @import "../../style/bootstrap.min.css";
  @import "../../style/vp-base.css";
  @import "../../style/scrollPage.css";
</style>

