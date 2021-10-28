<template>
  <div>
      <h1>
          进行Closure学习
      </h1>
      <ul>
          <li>
              <h2>
                  1、节流
              </h2>
              <div class="testGroupContainer">
                   <el-button @click.stop="handleThrottle">触发节流</el-button>
                   <el-button @click.stop="handleThrottleClear">去除节流定时器</el-button>
              </div>
            </li>

            <li>
              <h2>
                  2、防抖
              </h2>
              <div class="testGroupContainer">
                   <el-button @click.stop="handleDebounce">触发防抖</el-button>
                   <el-button @click.stop="handleDebounceClear">去除防抖定时器</el-button>
              </div>
            </li>
      </ul>
  </div>
</template>

<script>
import Aparent from '@/components/AParent';
export default {
    name: 'Closure',
    components:{
        Aparent,
    },
    data () {
        return {
            throttleTimer: null,
            debounceTimer: null,
        }
    },
    methods:{
        handleThrottleClear() {
            clearInterval(this.throttleTimer);
            this.throttleTimer = null;
        },
        handleThrottle() {
            this.throttleTimer = setInterval(this.throttle(() => {
                    console.log('xxx')
                }, 1000),10);
        },

        throttle(func, gapTime){
            debugger
            if(typeof func !== 'function') {
                throw new TypeError('need a function');
            }
            gapTime = +gapTime || 0;
            let lastTime = 0;
        
            return function() {
                debugger
                let time = + new Date();
                if(time - lastTime > gapTime || !lastTime) {
                    func();
                    lastTime = time;
                }
            }
        },

        handleDebounce() {

        //     this.debounceTimer = setInterval(this.my_debounce(() => {
        //             console.log('xxx')
        //         }, 1000),10);
        },

        handleDebounceClear() {
            clearInterval(this.debounceTimer);
            this.debounceTimer = null;
        },

        // 我的debounce 实现
        my_debounce(func, wait) {
 
            if(typeof func !== 'function') {
                throw new TypeError('need a function');
            }
            wait = +wait || 0;
        
            let timeId = null;
        
            return function() {
                // console.log('滚动了滚动了');  // 测试时可放开
                const self = this;
                const args = arguments;
        
                if(timeId) {
                    clearTimeout(timeId);   // 清除定时器，重新设定一个新的定时器
                }
                timeId =  setTimeout(() => {
                    func.apply(self, args); // arguments 是传给函数的参数，这里是 event  对象
        
                }, wait);
        
            }
        
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
