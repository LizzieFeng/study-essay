<template>
  <div class="container">
      <h3>我是BParent组件--{{msg}}</h3>
      <div>
        <BChild></BChild>
      </div>
  </div>
</template>

<script>
import BChild from './BChild.vue'
export default {
    name: 'BParent',
    components: {
        BChild
    },
    data () {
        return {
        msg: 'Welcome to BParent'
        }
    },
    beforeCreate() {
       console.log('我是 BParent beforeCreate,this.msg=',this.msg);
    //    this.msg = 'beforeCreate';
    },

    created() {
       console.log('我是 BParent created,this.msg=',this.msg);
    //    this.msg = 'created';
    },
    beforeMount() {
       console.log('我是 BParent beforeMount,this.msg=',this.msg);
    //    this.msg = 'beforeMount';
    },
    mounted() {
       console.log('我是 BParent mounted,this.msg=',this.msg);
    //    this.msg = 'mounted';
    },

    beforeUpdate() {
       console.log('我是 BParent beforeUpdate,this.msg=',this.msg);
    //    this.msg = 'beforeUpdate';
    },
    updated() {
       console.log('我是 BParent updated,this.msg=',this.msg);
    //    this.msg = 'updated';
    },
    beforeDestroy() {
        console.log('我是 BParent beforeDestroy,this.msg=',this.msg);
    //    this.msg = 'beforeDestroy';
    },
    destroyed() {
        console.log('我是 BParent destroyed,this.msg=',this.msg);
    //    this.msg = 'destroyed';
    },
}
</script>

<style scoped>
    .container{
        background: pink;
    }
</style>
