<template>
  <div>
      <h1>
          进行Transition学习
      </h1>
      <ul>
        <li>
              <h2>
                 测试动画
              </h2>
              <div class="testGroupContainer">
                    <!-- 简单元素 -->
                    <div id="demo">
                        <button v-on:click="show = !show">
                            Toggle
                        </button>
                        <transition name="fade">
                            <p v-if="show">hello</p>
                        </transition>
                    </div>
              </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'TransitionStudy',
    components:{
    },
    data () {
        return {
            show: false
        }
    },
    methods:{
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
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
        }
        .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
        }
</style>
