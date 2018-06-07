<template>
  <div>
    <div id="healthFormId">
      <Header title="健康度管理"></Header>
      <form name="healthForm" class="container mt-2"  autocomplete="off" @submit.prevent="search()" novalidate>
        <div class="form-group">
          <label for="ProName">项目名称</label>
          <input type="text" id="ProName2" class="form-control" name="ProName" v-model="params.ProName"
                 title="项目名称" v-validate.initial="{ regex: /^[\u4e00-\ufa5aa-zA-Z_\\d\\s]{0,40}$/ }" data-vv-as="项目名称" maxlength="40"
                 placeholder="项目名称">
          <input type="text" id="ProName" class="form-control" name="ProName" v-model="params.ProName"
                 title="项目名称" v-validate.initial="{ required:true , regex: /^([0-9]+)$/ }" data-vv-as="项目名称" maxlength="40"
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
    </div>
    <scroll :data="showProjectList"
            :scrollbar="false"
            :pullDownRefresh="true"
            :pullUpLoad="pullUpLoadObj"
            @pullingDown="refresh"
            @pullingUp="loadMore"
            @click="rate"
            ref="scroll">
      <div class="row border-bottom p-1" v-for="(row,index) in showProjectList" @click="rate(row)">
        <div class="col-6 align-content-center"  v-text="row.ProName+'_'+index"></div>
        <div class="col-6 align-content-center">
            <span
              ng-class='{"red-dot":row.Fraction<60,"yellow-dot":row.Fraction>=60&&row.Fraction<80,"green-dot":row.Fraction>=80&&row.Fraction<=100}'></span>
        </div>
      </div>
    </scroll>
  </div>
</template>
<script>
  export default {
    name: "betterscroll",
    data() {
      return {
        showProjectList: [],
        params: {},
        item: {"pageSize": 10, "page": 0},
        scrollbar: true,
        scrollbarFade: true,
        pullDownRefresh: true,
        pullDownRefreshThreshold: 90,
        pullDownRefreshStop: 40,
        pullUpLoad: true,
        pullUpLoadThreshold: 0,
        pullUpLoadMoreTxt: "上拉加载",
        pullUpLoadNoMoreTxt: "没有更多数据了"
      };
    },
    data2() {
      return {
        params: {},
        showProjectList: [],
        style: "",
        item: {"pageSize": 10, "page": 0},
        noData: false,
        noDataText: '没有更多的数据',
        length: 0,
        rownum: 0,
        items: []
      }
    },
    beforeCreate() {

    },
    created() {
      // 初始化自己所在项目列表的打分记录
    },
    watch: {
      scrollbarObj: {
        handler() {
          this.rebuildScroll()
        },
        deep: true
      },
      pullDownRefreshObj: {
        handler(val) {
          const scroll = this.$refs.scroll.scroll
          if (val) {
            scroll.openPullDown()
          } else {
            scroll.closePullDown()
          }
        },
        deep: true
      },
      pullUpLoadObj: {
        handler(val) {
          const scroll = this.$refs.scroll.scroll
          if (val) {
            scroll.openPullUp()
          } else {
            scroll.closePullUp()
          }
        },
        deep: true
      },
      startY() {
        this.rebuildScroll()
      }
    },
    computed: {
      scrollbarObj: function () {
        return this.scrollbar ? {fade: this.scrollbarFade} : false
      },
      pullDownRefreshObj: function () {
        return this.pullDownRefresh ? {
          threshold: parseInt(this.pullDownRefreshThreshold),
          stop: parseInt(this.pullDownRefreshStop)
        } : false
      },
      pullUpLoadObj: function () {
        return this.pullUpLoad ? {
          threshold: parseInt(this.pullUpLoadThreshold),
          txt: {more: this.pullUpLoadMoreTxt, noMore: this.pullUpLoadNoMoreTxt}
        } : false
      }
    },
    mounted() {
      // 获得form表单的高度，从而设置滑动区域距离顶端的距离
      this.$nextTick(function () {
        let formHeight = this.$el.querySelector("#healthFormId").clientHeight;
        this.$refs.scroll.$el.style.height=document.documentElement.clientHeight - formHeight + "px";
      });
      this.refresh();
    },
    methods: {
      queryData() {
        let vm = this;
        // 查询所在项目的自己的打分列表
        vm.$http.post("/pmOfficeList.json", vm.item).then(function (response) {
          vm.item.page += 10;
          console.log("vm.item.page======" + vm.item.page);
          vm.showProjectList = vm.showProjectList.concat(response.data);
          vm.$nextTick(function () {
            vm.length = vm.showProjectList.length;
            console.log("length======" + vm.length);
            // 获得总条数
            vm.rownum = vm.length > 0 ? vm.showProjectList[0].rownum : 0;
            // DOM没有更新
            if (vm.length >= vm.rownum||vm.length < vm.item.pageSize) {
              vm.noData = true;
              vm.$refs.scroll.forceUpdate(false);
              // 结束上拉加载
              //this.$refs.scroll.noData();
            }
          });

        });

      },
      search() {

      },
      refresh() {
        console.log('refresh....')
        // 初始化查询数据
        this.item.page = 0;
        // 展示列表初始化清空
        this.showProjectList = [];
        // 初始化总条数
        this.rownum = undefined;
        this.noData = false;
        // 更新scroll
        this.$refs.scroll.forceUpdate(true);
        // 下拉刷新
        this.queryData();
      },
      loadMore() {
        console.log('infinite called..')
        if (this.noData) {
          // 结束上拉加载,数据展示结束
          this.$refs.scroll.forceUpdate(false);
        } else {
          this.queryData();
        }
      },
      rate() {
        // 打分
      },
      rebuildScroll() {
        this.$nextTick(() => {
          this.$refs.scroll.destroy();
          this.$refs.scroll.initScroll();
        })
      }
    }
  }
</script>
<style>
  @import "../../style/bootstrap.min.css";
  @import "../../style/vp-base.css";
  /*@import "../../style/scrollPage.css";*/
</style>

