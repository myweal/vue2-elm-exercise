<template>
  <div>
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
      <scroller
                :on-refresh="refresh"
                :on-infinite="loadMore"
                ref="healthScroll" :style="style" class="bg-white">
        <div class="row border-bottom p-1" v-for="row in showProjectList" @click="rate(row)">
          <div class="col-6 align-content-center" v-text="row.ProName"></div>
          <div class="col-6 align-content-center">
            <span
              ng-class='{"red-dot":row.Fraction<60,"yellow-dot":row.Fraction>=60&&row.Fraction<80,"green-dot":row.Fraction>=80&&row.Fraction<=100}'></span>
          </div>
        </div>
      </scroller>
    </div>
  </div>
</template>
<script>
  export default {
    name: "healthList",
    data() {
      return {
        params: {},
        showProjectList: [],
        style:"",
        item: {"pageSize": 10, "page": 0},
        noData: false,
        noDataText: '没有更多的数据',
        length: 0,
        rownum:0,
        items:[]
      }
    },
    beforeCreate() {

    },
    created() {
      // 初始化自己所在项目列表的打分记录
    },
    mounted() {
      // 获得form表单的高度，从而设置滑动区域距离顶端的距离
      this.formHeight = this.$el.querySelector("#healthFormId").clientHeight;
      this.style="margin-top:" + this.formHeight + "px;height:"+(document.documentElement.clientHeight-this.formHeight)+"px;";
    },
    methods: {
      queryData(done) {
        let vm = this;
        // 查询所在项目的自己的打分列表
        vm.$http.post("/pmOfficeList.json", vm.item).then(function (response) {
          vm.item.page+=10;
          console.log("vm.item.page======" + vm.item.page);
          vm.showProjectList = vm.showProjectList.concat(response.data);
          //vm.showProjectList = response.data;
          vm.length = vm.showProjectList.length;
          console.log("length======" + vm.length);
          // 获得总条数
          vm.rownum = vm.length > 0 ? vm.showProjectList[0].rownum : 0;
          // DOM没有更新
          if (vm.length >= vm.rownum) {
            vm.noData=true;
            console.log("nodata===="+vm.noData);
            //结束轮询查询
            // vm.$refs.healthScroll.finishInfinite(true);
            // vm.$refs.healthScroll.scrollTo(0,0,true);
            // if(done){done(true);}
            done(true);
          }else if(vm.length<vm.item.pageSize){
             // if(done){done(true);}
            done(true);
          }else{
            if(done){done();}
          }
        });

      },
      search() {

      },
      refresh(done){
        console.log('refresh....')
        // 初始化查询数据
        this.item.page= 0;
        // 展示列表初始化清空
        this.showProjectList=[];
        // 初始化总条数
        this.rownum = undefined;
        this.noData=false;
        // 下拉刷新
        //this.queryData(done);
        done();
      },
      loadMore(done) {
        console.log('infinite called..')
        if(this.noData){
          done(true);
        }else{
          this.queryData(done);
        }
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

