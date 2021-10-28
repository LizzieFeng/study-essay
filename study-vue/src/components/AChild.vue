<template>
  <div class="container">
      <h3>我是AChild组件--{{msg}}</h3>
      <div>
          我是AChild组件，数据来源于父级：--{{dataFromParent}}
      </div>
      <h3>我是AChild组件的$attrs</h3>
      <div>
        本组件针对父组件的:,没有写Prop接收的，出现在数据中$attrs ,
        <br>
        其中，v-bind="$attrs"在父组件使用，将父组件的$attrs,在本组件直接出现在$attrs （merge）
        <br>
        --{{$attrs}}
      </div>
  </div>
</template>

<script>
export default {
    name: 'AChild',
    data () {
        return {
        msg: 'Welcome to AChild'
        }
    },
    props: {
        dataFromParent: String,
    },
    beforeCreate() {
       console.log('我是 AChild beforeCreate,this.msg=',this.msg);
    //    this.msg = 'beforeCreate';
    },

    created() {
       console.log('我是 AChild created,this.msg=',this.msg);
    //    this.msg = 'created';
    },
    beforeMount() {
       console.log('我是 AChild beforeMount,this.msg=',this.msg);
    //    this.msg = 'beforeMount';
    },
    mounted() {
       console.log('我是 AChild mounted,this.msg=',this.msg);
    //    this.msg = 'mounted';
    },

    beforeUpdate() {
       console.log('我是 AChild beforeUpdate,this.msg=',this.msg);
    //    this.msg = 'beforeUpdate';
    },
    updated() {
       console.log('我是 AChild updated,this.msg=',this.msg);
    //    this.msg = 'updated';
    },
    beforeDestroy() {
        console.log('我是 AChild beforeDestroy,this.msg=',this.msg);
    //    this.msg = 'beforeDestroy';
    },
    destroyed() {
        console.log('我是 AChild destroyed,this.msg=',this.msg);
    //    this.msg = 'destroyed';
    },
}
</script>

<style scoped>
    .container{
        background: yellow;
    }
</style>
