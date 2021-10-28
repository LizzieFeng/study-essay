<template>
  <div class="container">
      <h3>我是CChild组件--{{msg}}</h3>
      <div>
          <button @click.stop="changeMsg('new childPageVal')">让CChild组件的msg= childPageVal</button>
      </div>
      <div>
          我是父组件传过来的parentMsg= {{parentMsg}}
      </div>
  </div>
</template>

<script>
export default {
    name: 'CChild',
    data () {
        return {
        msg: 'Welcome to CChild'
        }
    },
    props:{
        parentMsg: '',
    },
    watch:{
        msg(val, oldVal){//普通的watch监听
            console.log("CChild watch msg : newVal = "+val, "and the oldVal = "+oldVal);
        },
    },
    methods: {
        changeMsg( newMsg) {
            this.msg = newMsg;
        }
    },
    beforeCreate() {
       console.log('我是 CChild beforeCreate,this.msg=',this.msg);
    //    this.msg = 'beforeCreate';
    },

    created() {
       console.log('我是 CChild created,this.msg=',this.msg);
    //    this.msg = 'created';
    },
    beforeMount() {
       console.log('我是 CChild beforeMount,this.msg=',this.msg);
    //    this.msg = 'beforeMount';
    },
    mounted() {
       console.log('我是 CChild mounted,this.msg=',this.msg);
    //    this.msg = 'mounted';
    },

    beforeUpdate() {
       console.log('我是 CChild beforeUpdate,this.msg=',this.msg);
    //    this.msg = 'beforeUpdate';
    },
    updated() {
       console.log('我是 CChild updated,this.msg=',this.msg);
    //    this.msg = 'updated';
    },
    beforeDestroy() {
        console.log('我是 CChild beforeDestroy,this.msg=',this.msg);
    //    this.msg = 'beforeDestroy';
    },
    destroyed() {
        console.log('我是 CChild destroyed,this.msg=',this.msg);
    //    this.msg = 'destroyed';
    },
}
</script>

<style scoped>
    .container{
        background: yellow;
    }
</style>
