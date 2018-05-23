<template>
  <div class="credit-wrap">
    <div id="credit" class="container col-md-6 col-11 col-sm-6">
      <div class="title">学分管理</div>
      <div class="row">
        <div class="col-md-6 col-6 text-right ">选择导入文件</div>
        <div class="col-md-6 col-6 text-left"><input type="file" name="fileName" id="fileId" class="col-12"></div>
      </div>

      <div class="row btn-box">
        <div class="col-md-6 col-6 col-sm-6 text-right btn-bottom">
          <button type="button" class="col-md-4 col-12 btn btn-success btn-group-lg">导入</button>
        </div>
        <div class="col-md-6 col-6 col-sm-6  text-left">
          <button type="button" class="col-md-4 col-12 btn btn-success btn-group-lg">导出</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'welcome'
  }
</script>

<style>
  @import "../../style/bootstrap.min.css";

  html,body{
    background-color: #f5f8fa;
    height:100%;
    width:100%;
  }
  input{
    outline:none;
  }
  .credit-wrap{
    display: flex;
    align-items: center;
  }
  #credit{
    background-color: #fff;
    border:1px solid #e4ecf3;
    border-radius: 25px;
  }

  #credit .title {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    padding-top:2rem;
    padding-bottom:2rem;
  }
  #credit .btn-box{
    padding-top:2rem;
    padding-bottom:1rem;
  }
  .btn-bottom{
    padding-bottom:1rem;
  }

</style>
