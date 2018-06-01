<template>
  <div class="container">
    <form name="healthForm" id="healthFormId" autocomplete="off" @submit.prevent="search()" novalidate>
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
    <scroller :on-refresh="refresh" :on-infinite="loadMore" :style="scrollTop" class="bg-white" ref="healthScroll" :no-data-text="noDataText">
      <div class="row border-bottom p-1" v-for="row in showProjectList" @click="rate(row);">
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
        scrollTop: "margin-top:180px",
        item: {"pageSize": 10, "page": 0},
        noData:false,
        formHeight:0,
        noDataText:'没有更多的数据'
      }
    },
    beforeCreate() {

    },
    created() {
      // 初始化自己所在项目列表的打分记录
      this.initData();
    },
    mounted() {
      // 获得form表单的高度，从而设置滑动区域距离顶端的距离
      this.formHeight = this.$el.querySelector("#healthFormId").clientHeight;
      this.scrollTop = "margin-top:"+this.formHeight+"px";
    },
    methods: {
      initData() {
        let vm = this;
        vm.item = {"pageSize": 10, "page": 0};
        // 查询所在项目的自己的打分列表
        vm.$http.post("/pmOfficeList.json", this.item).then(function (response) {
          vm.showProjectList = response.data;
          let length = vm.showProjectList.length;
          // 获得总条数
          let rownum = length>0?vm.showProjectList[0].rownum:0;
          // DOM没有更新
          vm.$nextTick(()=>{
            // Dom更新后结束下拉刷新
            vm.$refs.healthScroll.finishPullToRefresh();
            debugger
            // 已经查询完所有的数据
            if(length==rownum){
              vm.noData=true;
              vm.$refs.healthScroll.finishInfinite(true);
            }
          });
        });
      },
      search() {

      },
      refresh() {
        // 下拉刷新
        this.initData();
        console.log('refresh....')
      },
      loadMore() {
        if(this.noData){
          this.$refs.healthScroll.finishInfinite(true);
        }
        console.log('infinite....')
      },
      rate() {
        // 打分
      }
    }
  }
</script>
<style>
  @import "../../style/bootstrap.min.css";
  @import "../../style/vp-base.css";
  /*@import "../../style/scrollPage.css";*/
</style>

