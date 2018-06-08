<template>
  <div class="mask-layer" v-if="showFlag">
    <div class="mask-content">
      <div class="title" v-text="title"></div>
      <div class="content" v-text="message"></div>
      <div class="btnBox">
        <input type="button" class="btn col-3 btn-primary" @click="okTip()" :value="btnTxt"/>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  name: 'Alert',
  data () {
    return {
      'title': '温馨提示',
      'message': '',
      'ok': null,
      'btnTxt': '确定',
      'showFlag': false
    }
  },
  props: ['options'],
  methods: {
    okTip () {
      // 判断是否有回调函数
      if (this.ok) {
        // 存在回调函数则执行
        this.ok()
      }
      // 隐藏该弹出层
      this.showFlag = false
    }
  },
  watch:{
    options:{
      immediate:true,
      handler:function(newVal,oldVal){
        // 该回调将会在侦听开始之后被立即调用
        if (newVal) {
          this.title = newVal.title ? newVal.title : this.title
          this.message = newVal.message ? newVal.message : this.message
          this.ok = newVal.ok ? newVal.ok : this.ok
          this.showFlag = newVal.showFlag
        }
      }

    }
  },
  watch2: {
    'options': function (newVal, oldVal) {
      // 当数据发生改变时监听
      if (newVal) {
        this.title = newVal.title ? newVal.title : this.title
        this.message = newVal.message ? newVal.message : this.message
        this.ok = newVal.ok ? newVal.ok : this.ok
        this.showFlag = newVal.showFlag
      }

    }
  }
}
</script>
<style scoped>
  .mask-layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: rgba(0,0,0,0.4);
    margin: 0 auto;
  }
  .mask-content{
    position: absolute;
    top:40%;
    left:5%;
    width:90%;
    background-color: #fff;
    border-radius: 0.5rem;
    padding:1rem;
  }
  .mask-layer .title {
    text-align: center;
    font-size:1.2rem;
    padding-bottom: 0.5rem;
  }
  .mask-layer .content{
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .btnBox{
    text-align: center;
  }
</style>
