<template>
  <div class="container">
      <h3>我是KeepAliveAChildren组件</h3>
  </div>
</template>

<script>
export default {
    name: 'KeepAliveAChildren',
    data () {
        return {
        }
    },
    methods: {

    },
    beforeCreate() {
       console.log('我是 KeepAliveAChildren beforeCreate');
    },

    created() {
       console.log('我是 KeepAliveAChildren created');
    },
    beforeMount() {
       console.log('我是 KeepAliveAChildren beforeMount');
    },
    mounted() {
       console.log('我是 KeepAliKeepAliveAChildrenveA mounted');
    },

    beforeUpdate() {
       console.log('我是 KeepAliveAChildren beforeUpdate');
    },
    updated() {
       console.log('我是 KeepAliveAChildren updated');
    },
    beforeDestroy() {
        console.log('我是 KeepAliveAChildren beforeDestroy');
    },
    activated() {
        console.log('我是 KeepAliveAChildren activated');
    },
    deactivated(){
        console.log('我是 KeepAliveAChildren deactivated');
    },
    destroyed() {
        console.log('我是 KeepAliveAChildren destroyed');
    },
}
</script>

<style scoped>
    .container{
        background: pink;
    }
</style>
