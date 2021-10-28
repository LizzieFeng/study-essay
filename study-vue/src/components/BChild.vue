<template>
  <div class="container">
      <h3>我是BChild组件--{{msg}}</h3>
      <div>
        <h2>
                  $listeners
              </h2>
              <div class="testGroupContainer">
                 本身的数据$listeners--{{$listeners}},
                 <br>
                 看控制台，$listeners中有数据的。
              </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'BChild',
    data () {
        return {
        msg: 'Welcome to BChild'
        }
    },
    beforeCreate() {
       console.log('我是 BChild beforeCreate,this.msg=',this.msg);
    //    this.msg = 'beforeCreate';
    },

    created() {
       console.log('我是 BChild created,this.msg=',this.msg);
       console.log('BChild，组件的$listeners:', this.$listeners);
    //    this.msg = 'created';
    },
    beforeMount() {
       console.log('我是 BChild beforeMount,this.msg=',this.msg);
    //    this.msg = 'beforeMount';
    },
    mounted() {
       console.log('我是 BChild mounted,this.msg=',this.msg);
    //    this.msg = 'mounted';
    },

    beforeUpdate() {
       console.log('我是 BChild beforeUpdate,this.msg=',this.msg);
    //    this.msg = 'beforeUpdate';
    },
    updated() {
       console.log('我是 BChild updated,this.msg=',this.msg);
    //    this.msg = 'updated';
    },
    beforeDestroy() {
        console.log('我是 BChild beforeDestroy,this.msg=',this.msg);
    //    this.msg = 'beforeDestroy';
    },
    destroyed() {
        console.log('我是 BChild destroyed,this.msg=',this.msg);
    //    this.msg = 'destroyed';
    },
}
</script>

<style scoped>
    .container{
        background: yellow;
    }
</style>
