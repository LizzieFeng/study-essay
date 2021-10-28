<template>
  <div>
      <h1>
          进行vuex和watch学习
      </h1>
      <ul>
          <li>
              <h2>
                  1、测试统一方法内更改两个vuex，看监听的先后顺序
              </h2>
              <div class="testGroupContainer">
                  <div>
                      <button @click.stop="changeVuexAB()">同时更改vuex的 A 和 B</button>
                      <button @click.stop="changeVuexBThenA()">先更改vuex的 B 再更改 A</button>
                      <button @click.stop="awaitChangeVuexAPlainB()">await更改vuex的 A 正常更改 B</button>
                  </div>
                  <div>
                      <WatchVuexA></WatchVuexA>
                      <WatchVuexB></WatchVuexB>
                  </div>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
import WatchVuexA from '@/components/WatchVuexA';
import WatchVuexB from '@/components/WatchVuexB';
export default {
    name: 'VuexWatch',
    components:{
        WatchVuexA,
        WatchVuexB,
    },
    data () {
        return {
        }
    },
    methods:{
        changeVuexAB() {
            debugger
            this.$store.commit('updateVuexA', '我是vuexA更新后的值');
            this.$store.commit('updateVuexB', '我是vuexB更新后的值');
        },

        changeVuexBThenA() {
            debugger
            setTimeout(() => {
                this.$store.commit('updateVuexA', '我是vuexA setTime更新后的值');
            }, 100)
            this.$store.commit('updateVuexB', '我是vuexB更新后的值');
        },

        async awaitChangeVuexAPlainB(){
            let secondsAfterVal = await this.resolveAfter2Seconds('await 2s 以后的值');
        },

        resolveAfter2Seconds(x) {
            return new Promise(resolve => {
                setTimeout(() => {
                resolve(x);
                }, 2000);
            });
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
