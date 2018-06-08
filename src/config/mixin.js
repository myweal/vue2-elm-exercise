import Vue from 'vue'

Vue.mixin({
  data(){
    return {urlPrefix:"http://192.168.100.80:8080/timesheet","alertObject":null}
  },
  methods: {
    alert: function (option) {
      let options = {}
      if (typeof option === 'string') {
        options.message = option
        options.showFlag = true
      }else if(typeof option==='object'){
        Object.assign(options,option)
      }
      this.$root.alertObject = this.$message(options);
    },
    closeAlert: function(){
      if(this.$root.alertObject){
        this.$root.alertObject.close();
      }
    },
    goto: function (state) {
      this.$router.push(state)
    }
  }
});
