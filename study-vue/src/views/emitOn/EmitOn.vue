<template>
  <div>
      <h1>
          进行EmitOn学习
      </h1>
      <ul>
        <li>
              <h2>
                  
              </h2>
              <div class="testGroupContainer">
                  我是EmitOn组件为了测试父组件@事件的返回值EmitOnMessage：{{EmitOnMessage}}
              </div>
              <div class="testGroupContainer">
                  我是EmitOn组件为了测试父组件this.$on的返回值onMessage：{{onMessage}}
              </div>
              <div>
                  <EmitOnChild @notifyFatherMessage="handleChildNotify"></EmitOnChild>
              </div>
              <div style="background: red;">
                  结论:写在父组件的@notifyFatherMessage="handleChildNotify"，其实就是相当于在子组件
                  this.$on('notifyFatherMessage',this.handleChildNotify),可以通过
                  this.$off('notifyFatherMessage',this.handleChildNotify)，进行失效
              </div>
        </li>
      </ul>
  </div>
</template>

<script>
import EmitOnChild from '@/components/EmitOnChild.vue';
export default {
    name: 'EmitOn',
    components:{
        EmitOnChild
    },
    data () {
        return {
            EmitOnMessage: '我是emitonmessage初始值',
            onMessage: '我是$on的初始值'
        }
    },
    methods:{
        handleChildNotify(val){
            this.EmitOnMessage = val;
        }
    },
    created(){
        this.onMessage = 'created';
        this.$on('notifyFatherMessage', (val) => {
        this.onMessage = val;
        })
    }
}
</script>

<style scoped>
    .conclusion {
        background: cadetblue;
    }
    .testGroupContainer{
        /* border: 2px solid red; */
        background: #f3f3f3;
    }
</style>
