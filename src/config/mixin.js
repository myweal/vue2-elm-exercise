import Vue from 'vue'

Vue.mixin({
  data(){
    return {urlPrefix:"http://192.168.100.80:8080/timesheet"}
  },
  methods: {
    alert: function (option) {
      let options = {}
      if (typeof option === 'string') {
        options.message = option
        options.showFlag = true
      }
      this.$root.alertOptions = options
    },
    goto: function (state) {
      this.$router.push(state)
    }
  }
})
