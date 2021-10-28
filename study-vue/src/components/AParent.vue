<template>
  <div class="container">
      <h3>我是AParent组件--{{msg}}</h3>
      <div>
        <AChild></AChild>
      </div>
  </div>
</template>

<script>
import AChild from './AChild.vue'
export default {
    name: 'AParent',
    components: {
        AChild
    },
    data () {
        return {
        msg: 'Welcome to AParent'
        }
    },
    beforeCreate() {
       console.log('我是 AParent beforeCreate,this.msg=',this.msg);
    //    this.msg = 'beforeCreate';
    },

    created() {
       console.log('我是 AParent created,this.msg=',this.msg);
    //    this.msg = 'created';
    },
    beforeMount() {
       console.log('我是 AParent beforeMount,this.msg=',this.msg);
    //    this.msg = 'beforeMount';
    },
    mounted() {
       console.log('我是 AParent mounted,this.msg=',this.msg);
    //    this.msg = 'mounted';
    },

    beforeUpdate() {
       console.log('我是 AParent beforeUpdate,this.msg=',this.msg);
    //    this.msg = 'beforeUpdate';
    },
    updated() {
       console.log('我是 AParent updated,this.msg=',this.msg);
    //    this.msg = 'updated';
    },
    beforeDestroy() {
        console.log('我是 AParent beforeDestroy,this.msg=',this.msg);
    //    this.msg = 'beforeDestroy';
    },
    destroyed() {
        console.log('我是 AParent destroyed,this.msg=',this.msg);
    //    this.msg = 'destroyed';
    },
}
</script>

<style scoped>
    .container{
        background: pink;
    }
</style>
