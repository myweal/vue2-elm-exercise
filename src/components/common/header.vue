<template>
<header>
  <div class="header_img text-left" @click="goBack" v-if="hideFlag!=='true'">
    <img src="../../images/back.png" alt="回退按钮"/>
  </div>
  <div class="row header_title text-center">
    <div class="col-12 text-center">{{title}}</div>
  </div>
</header>
</template>
<script>
export default{
  props: ['hideFlag', 'title'],
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
  header{
    background-color: cornflowerblue;
  }
  header img{
    width:0.8rem;
  }
  .header_img{
    position: absolute;
    left:1rem;
    top:0;
    z-index:100;
  }
  .header_title{
    width:100%;
    margin: 0 auto;
  }
  .header_img,.header_title{padding: 5vw 0;}
</style>
