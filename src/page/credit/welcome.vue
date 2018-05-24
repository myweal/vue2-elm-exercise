<template>
  <div class="credit-wrap">
    <div id="creditPositive" class="container credit col-md-6 col-11 col-sm-6 slideInDown">
      <form name="creditPositiveForm" action="">
        <div class="bookmark" @click="showNegativePage()">
          <span class="triangle-topright"></span>
          <span class="word">导出</span>
        </div>

        <div class="title">学分管理</div>
        <div class="row">
          <div class="col-md-6 col-6 text-right ">选择导入文件</div>
          <div class="col-md-6 col-6 text-left"><input type="file" name="fileName" id="fileId" class="col-12"></div>
        </div>

        <div class="row btn-top btn-bottom">
          <div class="col-12 col-sm-12 text-center btn-bottom">
            <button type="button" class="col-12 col-sm-3 col-md-2 btn btn-success btn-group-lg">导入</button>
          </div>
        </div>
      </form>
    </div>
    <div id="creditNegative" class="container credit col-md-6 col-11 col-sm-6">
      <form name="creditNegativeForm" action="">
        <div class="bookmark" @click="showPositivePage()">
          <span class="triangle-topright"></span>
          <span class="word">导入</span>
        </div>
        <div class="title">学分管理</div>
        <div class="row btn-bottom">
          <div class="col-12 col-sm-6 text-right btn-bottom">
            <button type="button" class="col-12 col-md-8 col-lg-6 btn btn-success btn-group-lg">按邮箱导出</button>
          </div>
          <div class="col-12 col-sm-6  text-left">
            <input type="email" name="emailName" id="emailId" class="col-12 col-md-10 form-control"
                   placeholder="请输入公司邮箱">
          </div>
        </div>
        <div class="row btn-bottom">
          <div class="col-12 col-sm-6  text-right btn-bottom">
            <button type="button" class="col-12 col-md-8 col-lg-6 btn btn-success btn-group-lg">全部导出</button>
          </div>
          <div class="col-12 col-sm-6  text-left btn-bottom ">
            <button type="button" class="col-12 col-md-8 col-lg-6 btn btn-success btn-group-lg">按排名导出</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  import $ from "jquery"

  export default {
    name: 'welcome',
    methods: {
      showNegativePage() {
         var positiveId= document.getElementById("creditPositive");
         var negativeId=document.getElementById("creditNegative");

         positiveId.setAttribute("class","container credit col-md-6 col-11 col-sm-6 ");
         negativeId.setAttribute("class","container credit col-md-6 col-11 col-sm-6 slideInDown");

         positiveId.style.display = "none";
         negativeId.style.display = "block";
        /*$("#creditPositive").removeClass("slideInDown").addClass("slideOutDown");
        $("#creditNegative").addClass("slideInDown").removeClass("slideOutDown");
        $("#creditNegative").toggle();
        $("#creditPositive").toggle();*/
      },
      showPositivePage() {
        /*$("#creditNegative").removeClass("slideInDown").addClass("slideOutDown");
        $("#creditPositive").addClass("slideInDown").removeClass("slideOutDown");
        $("#creditPositive").toggle();
        $("#creditNegative").toggle();*/
        var positiveId= document.getElementById("creditPositive");
         var negativeId=document.getElementById("creditNegative");

         positiveId.setAttribute("class","container credit col-md-6 col-11 col-sm-6 slideInDown");
         negativeId.setAttribute("class","container credit col-md-6 col-11 col-sm-6 ");
         positiveId.style.display = "block";
         negativeId.style.display = "none";
      }
    }
  }
</script>

<style>
  @import "../../style/bootstrap.min.css";
  @import "../../style/animate.css";
</style>
<style scoped>
  @import "../../style/credit.css";
</style>
