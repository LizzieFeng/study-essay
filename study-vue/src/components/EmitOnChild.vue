<template>
  <div>
      <h1>
          我是emiton的子组件，负责emit
      </h1>
      <ul>
        <li>
              <h2>
                  测试emit
              </h2>
              <div class="testGroupContainer">
                  <el-button @click.stop="notify()">  触发emit </el-button>
              </div>
              <div class="testGroupContainer">
                  我是在自己本身组件使用$on进行message赋值：{{message}}
              </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'KeepAliveComp',
    components:{
    },
    data () {
        return {
            message: '初始值'
        }
    },
    methods:{
        notify() {
            this.$emit('notifyFatherMessage','我是EmitOnChild，正在测试emit');
        },
    },
    created(){
        this.message = 'created';
        this.$off('notifyFatherMessage',this.handleChildNotify)
        this.$on('notifyFatherMessage', (val) => {
        this.message = val;
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
