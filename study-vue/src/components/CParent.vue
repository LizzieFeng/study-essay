<template>
  <div class="container">
      <h3>我是CParent组件--{{msg}}</h3>
      <div>
        <CChild :parentMsg="msg"></CChild>
      </div>
      <div>
          <button @click.stop="changeMsg('new pageVal')">让CParent组件的msg= new pageVal</button>
      </div>
      <hr>
      <div>
        <h4>我是CParent组件中的msgObj--{{msgObj}}</h4>
        <h4>我是CParent组件中的msgObjImmediate--{{msgObjImmediate}}</h4>
        <button @click.stop="changeMsgObj()">让CParent组件的msgObj</button>
      </div>
  </div>
</template>

<script>
import CChild from './CChild.vue'
export default {
    name: 'CParent',
    components: {
        CChild
    },
    data () {
        return {
            msg: 'Welcome to CParent',
            msgObj: {
                value: '你好啊，我是初始值'
            },
            msgObjImmediate: {
                value: '你好啊，我是初始值'
            }
        }
    },
    watch:{
        msg(newVal, oldVal){//普通的watch监听
            console.log("CParent watch msg : newVal = "+newVal, "and the oldVal = "+oldVal);
        },
        msgObj: {
            handler(newVal,oldVal) {
                console.log("CParent watch msgObj : newVal = "+newVal.value, "and the oldVal = "+oldVal);
        　　}
        },
        msgObjImmediate: {
            handler(newVal,oldVal) {
                console.log("CParent watch msgObjImmediate : newVal = "+newVal.value, "and the oldVal = "+oldVal);
        　　},
    　　    immediate: true
        }
    },
    methods: {
        changeMsg( newMsg) {
            this.msg = newMsg;
        },
        changeMsgObj() {
            this.msgObj = {
                value: '我是更改后的msgObj'
            }
            this.msgObjImmediate = {
                value: '我是更改后的msgObj'
            }
        }
    },
    beforeCreate() {
       console.log('我是 CParent beforeCreate,this.msg=',this.msg);
    //    this.msg = 'beforeCreate';
    },

    created() {
       console.log('我是 CParent created ,this.msg=',this.msg);
       this.msg = 'created';
       this.msgObj = {
                value: '我是更改后的msgObj=created'
        };
        this.msgObjImmediate = {
                value: '我是更改后的msgObjImmediate=created'
        }    
    },
    beforeMount() {
       console.log('我是 CParent beforeMount,this.msg=',this.msg);
       this.msg = 'beforeMount';
    },
    mounted() {
       console.log('我是 CParent mounted,this.msg=',this.msg);
       this.msg = 'mounted';
       this.msgObj = {
                value: '我是更改后的msgObj=mounted'
        };
        this.msgObjImmediate = {
            value: '我是更改后的msgObjImmediate=mounted'
        }   
    },

    beforeUpdate() {
       console.log('我是 CParent beforeUpdate,this.msg=',this.msg);
    //    this.msg = 'beforeUpdate';
    },
    updated() {
       console.log('我是 CParent updated,this.msg=',this.msg);
    //    this.msg = 'updated';
    },
    beforeDestroy() {
        console.log('我是 CParent beforeDestroy,this.msg=',this.msg);
        this.msg = 'beforeDestroy';
    },
    destroyed() {
        console.log('我是 CParent destroyed,this.msg=',this.msg);
        this.msg = 'destroyed';
    },
}
</script>

<style scoped>
    .container{
        background: pink;
    }
</style>
