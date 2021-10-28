<template>
  <div>
      <h1>
          进行KeepAlive学习
      </h1>
      <ul>
        <li>
              <h2>
                  1、测试KeepAlive和生命周期之间的关系
              </h2>
              <div class="testGroupContainer">
                  <keep-alive v-if="keepaliveShow">
                      <component :is="compName" @changeParentVal="changeParentVal"></component>
                  </keep-alive>
                  <div @click.stop="changeComp">
                      切换动态组件
                  </div>
              </div>
        </li>
        <li>
              <h2>
                  2、测试keepalive中两个组件操作父组件同一个值
              </h2>
              <div class="testGroupContainer">
                  <div >
                      {{parentValFromChild}}
                  </div>
              </div>
          </li>
          <li>
              <h2>
                  3、测试keepalive已经缓存了组件后，使用v-if false掉keepalive
              </h2>
              <div class="testGroupContainer">
                  <div @click.stop="toggleKeealive">
                      {{!keepaliveShow}}掉keepalive
                  </div>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
import KeepAliveA from '@/components/KeepAliveA';
import KeepAliveB from '@/components/KeepAliveB';
export default {
    name: 'KeepAliveComp',
    components:{
        KeepAliveA,
        KeepAliveB,
    },
    data () {
        return {
            compName: 'KeepAliveA',
            parentValFromChild: '父组件默认的值',
            keepaliveShow: true
        }
    },
    methods:{
        changeComp() {
            this.compName = this.compName==='KeepAliveA' ? 'KeepAliveB' : 'KeepAliveA';
        },

        changeParentVal(val) {
            this.parentValFromChild = val;
        },
        toggleKeealive() {
            this.keepaliveShow = !this.keepaliveShow;
        }
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
