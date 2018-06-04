<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li v-for="item in showProjectList" style="height:40px;">eee</li>
    </ul>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'

  export default {
    data() {
      return {showProjectList: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
    },
    mounted() {
      //即定时器 20ms
      this.$nextTick(() => {
        //$refs绑定元素
        if (!this.scroll) {
          debugger
          this.scroll = new BScroll(this.$refs.wrapper, {
            //开启点击事件 默认为false
            click: true
          })
          this.scroll.hasVerticalScroll = true;
          // console.log(this.scroll)
        } else if (!this.$refs.wrapper) {
          return
        }
        else {
          this.scroll.refresh()
        }
      })
    }
  }
</script>
<style>
  @import "../../style/bootstrap.min.css";
  @import "../../style/vp-base.css";
  /*@import "../../style/scrollPage.css";*/
  .wrapper {
    width: 100%;
    position: absolute;
    top: 45px;
    bottom: 50px;
    overflow: hidden;
    z-index: 1;
  }

  .content {
    /*height: 100%;*/
  }
</style>

