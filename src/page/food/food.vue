<template>
  <div>
    test
    <div v-for="obj in foodList">
      {{obj.name}}
    </div>
  </div>
</template>
<script>
  export default {
    name: 'food',
    data() {
      return {
        foodList: [{"name": "name"}]
      }
    }
  }
</script>
