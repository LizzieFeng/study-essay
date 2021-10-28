<template>
  <div class="container">
      <h3>我是KeepAliveB组件</h3>
      
      <div @click.stop="changeParentVal">更改父组件的值</div>
  </div>
</template>

<script>
export default {
    name: 'KeepAliveB',
    data () {
        return {}
    },
    methods: {
        changeParentVal() {
            this.$emit('changeParentVal', '父组件的值来源于B');
        }
    },
    beforeCreate() {
       console.log('我是 KeepAliveB beforeCreate');
    },

    created() {
       console.log('我是 KeepAliveB created');
    },
    beforeMount() {
       console.log('我是 KeepAliveB beforeMount');
    },
    mounted() {
       console.log('我是 KeepAliveB mounted');
    },

    beforeUpdate() {
       console.log('我是 KeepAliveB beforeUpdate');
    },
    updated() {
       console.log('我是 KeepAliveB updated');
    },
    beforeDestroy() {
        console.log('我是 KeepAliveB beforeDestroy');
    },
    activated() {
        console.log('我是 KeepAliveB activated');
    },
    deactivated(){
        console.log('我是 KeepAliveB deactivated');
    },
    destroyed() {
        console.log('我是 KeepAliveB destroyed');
    },
}
</script>

<style scoped>
    .container{
        background: pink;
    }
</style>
