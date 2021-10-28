<template>
  <div class="container">
      <h3>我是DParent组件--{{msg}}</h3>
  </div>
</template>

<script>
export default {
    name: 'DParent',
    components: {
    },
    data () {
        return {
            msg: 'Welcome to DParent'
        }
    },
    watch:{
        msg(newVal, oldVal){//普通的watch监听
            console.log("DParent watch msg : newVal = "+newVal, "and the oldVal = "+oldVal);
        }
    },
    beforeCreate() {
       console.log('我是 DParent beforeCreate,this.msg=',this.msg);
    //    this.msg = 'beforeCreate';
    },

    created() {
       console.log('我是 DParent created,this.msg=',this.msg);
       this.msg = 'created';
        this.$nextTick(() => {
            this.msg = "在created中 nextTick"
        })
    },
    beforeMount() {
       console.log('我是 DParent beforeMount,this.msg=',this.msg);
       this.msg = 'beforeMount';
    },
    mounted() {
       console.log('我是 DParent mounted,this.msg=',this.msg);
       this.msg = 'mounted';
    },

    beforeUpdate() {
       console.log('我是 DParent beforeUpdate,this.msg=',this.msg);
    //    this.msg = 'beforeUpdate';
    },
    updated() {
       console.log('我是 DParent updated,this.msg=',this.msg);
    //    this.msg = 'updated';
    },
    beforeDestroy() {
        console.log('我是 DParent beforeDestroy,this.msg=',this.msg);
    //    this.msg = 'beforeDestroy';
    },
    destroyed() {
        console.log('我是 DParent destroyed,this.msg=',this.msg);
    //    this.msg = 'destroyed';
    },
}
</script>

<style scoped>
    .container{
        background: pink;
    }
</style>
