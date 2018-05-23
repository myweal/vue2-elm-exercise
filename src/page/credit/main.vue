<template>
  <div class="container">
    <main class="mt-3 mt-md-3">
      <div class="row m-auto col-6 col-sm-6 col-md-3 col-lg-2 text-center bg-white br-primary">
        <div class="col-12 col-md-12"><span class="font-weight-bold">累计学分：</span><span
          class="red">34</span></div>
        <div class="col-12 col-md-12"><span>学分排名：</span><span>34</span></div>
      </div>
      <div class="tab-pane">
        <div class="tab-content">

        </div>
      </div>
      <h6>学分来源</h6>
      <table class="table table-bordered table-striped  bg-white text-center">
        <thead class="table-primary ">
        <tr>
          <th scope="col">序号</th>
          <th scope="col">课程名称</th>
          <th scope="col">课程类型</th>
          <th scope="col">所得学分</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>test01</td>
          <td>test02</td>
          <td>test03</td>
          <td>test04</td>
        </tr>
        <tr>
          <td>test01</td>
          <td>test02</td>
          <td>test03</td>
          <td>test04</td>
        </tr>
        <tr>
          <td>test01</td>
          <td>test02</td>
          <td>test03</td>
          <td>test04</td>
        </tr>
        <tr>
          <td>test01</td>
          <td>test02</td>
          <td>test03</td>
          <td>test04</td>
        </tr>
        <tr>
          <td>test01</td>
          <td>test02</td>
          <td>test03</td>
          <td>test04</td>
        </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>
<script>
  export default {
    name:"credit"
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
  .red{
    color:var(--red);
  }
  .br-primary{
    border-radius: 1.5rem;
  }
</style>

