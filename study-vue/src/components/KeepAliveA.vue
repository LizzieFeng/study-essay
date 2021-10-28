<template>
  <div class="container">
      <h3>我是KeepAliveA组件--{{message}}</h3>
      <div @click.stop="changeMessage">更改message</div>
      <div @click.stop="changeParentVal">更改父组件的值</div>
      <div>
          <KeepAliveAChildren></KeepAliveAChildren>
      </div>
  </div>
</template>

<script>
import KeepAliveAChildren from '@/components/KeepAliveAChildren.vue';
export default {
    name: 'KeepAliveA',
    components:{
        KeepAliveAChildren,
    },
    data () {
        return {
            message: 'hello KeepAliveA'
        }
    },
    methods: {
        changeMessage() {
            this.message = 'new KeepAliveA';
        },
        changeParentVal() {
            this.$emit('changeParentVal', '父组件的值来源于A');
        }
    },
    beforeCreate() {
       console.log('我是 KeepAliveA beforeCreate');
    },

    created() {
       console.log('我是 KeepAliveA created');
    },
    beforeMount() {
       console.log('我是 KeepAliveA beforeMount');
    },
    mounted() {
       console.log('我是 KeepAliveA mounted');
    },

    beforeUpdate() {
       console.log('我是 KeepAliveA beforeUpdate');
    },
    updated() {
       console.log('我是 KeepAliveA updated');
    },
    beforeDestroy() {
        console.log('我是 KeepAliveA beforeDestroy');
    },
    activated() {
        console.log('我是 KeepAliveA activated');
    },
    deactivated(){
        console.log('我是 KeepAliveA deactivated');
    },
    destroyed() {
        console.log('我是 KeepAliveA destroyed');
    },
}
</script>

<style scoped>
    .container{
        background: pink;
    }
</style>
