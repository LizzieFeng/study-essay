<template>
  <div>
      <h1>
          进行生命周期学习
      </h1>
      <ul>
          <li>
              <h2>
                  1、测试父子组件的生命周期关系（看控制台输出）
              </h2>
              <!-- <div class="conclusion">
                  <h3>结论</h3>
                  <p>
                  </p>
              </div> -->
              <p class="testGroupContainer">
                  <div>
                      <button @click.stop="addAparent(true)">加载AParent组件</button>
                      <button @click.stop="addAparent(false)">卸载AParent组件</button>
                  </div>
                  <div>
                      <Aparent v-if="AparentFlag"></Aparent>
                  </div>
              </p>
          </li>
          <li>
              <h2>
                  2、测试兄弟组件的生命周期关系（看控制台输出）
              </h2>
              <div class="testGroupContainer">
                  <div>
                      <button @click.stop="changeBro('Aparent')">加载AParent组件</button>
                      <button @click.stop="changeBro('Bparent')">加载BParent组件</button>
                      <button @click.stop="changeBro('')">卸载组件</button>
                  </div>
                  <div>
                      <component :is="broCompName"></component>
                  </div>
              </div>
          </li>
          <li>
              <h2>
                  3、测试data、watch、prop和生命周期关系（看控制台输出）
              </h2>
              <div class="testGroupContainer">
                  <div>
                      <button @click.stop="addCparent(true)">加载CParent组件</button>
                      <button @click.stop="addCparent(false)">卸载CParent组件</button>
                  </div>
                  <div>
                      <Cparent v-if="CparentFlag"></Cparent>
                  </div>
              </div>
          </li>
          <li>
              <h2>
                  4、测试nextick和生命周期关系（看控制台输出）
              </h2>
              <div class="testGroupContainer">
                  <div>
                      <button @click.stop="addDparent(true)">加载DParent组件</button>
                      <button @click.stop="addDparent(false)">卸载DParent组件</button>
                  </div>
                  <div>
                      <Dparent v-if="DparentFlag"></Dparent>
                  </div>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
import Aparent from '@/components/AParent';
import Bparent from '@/components/BParent';
import Cparent from '@/components/CParent';
import Dparent from '@/components/DParent';
export default {
    name: 'LifeCycle',
    components:{
        Aparent,
        Bparent,
        Cparent,
        Dparent,
    },
    data () {
        return {
            AparentFlag: false,
            broCompName: '',
            CparentFlag: false,
            DparentFlag: false,
        }
    },
    methods:{
        addAparent(existFlag) {
            this.AparentFlag = !! existFlag;
        },

        changeBro(broCompName) {
            this.broCompName = broCompName;
        },

        addCparent(existFlag) {
            this.CparentFlag = !! existFlag;
        },

        addDparent(existFlag) {
            this.DparentFlag = !! existFlag;
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
