<template>
  <div class="container">
      <h3>我是WatchVuexA组件--{{msg}}</h3>
      <div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'WatchVuexA',
    data () {
        return {
            msg: 'Welcome to WatchVuexA'
        }
    },
    watch: {
        '$store.state.vuexA': function (newVal, oldVal) {
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
