<template>
  <div class="container">
      <h3>我是WatchVuexB组件--{{msg}}</h3>
      <div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'WatchVuexB',
    data () {
        return {
            msg: 'Welcome to WatchVuexB'
        }
    },
    watch: {
        '$store.state.vuexB': function (newVal, oldVal) {
            debugger
            this.msg = newVal;
        }
    }
}
</script>

<style scoped>
    .container{
        background: yellow;
    }
</style>
