<template>
  <div>
      <h1>
          进行v-if v-for学习
      </h1>
      <ul>
          <li>
              <h2>
                  1、key学习
              </h2>
              <div class="testGroupContainer">
                    <div>
                        <button @click.stop="changeKey(false)">key不变--{{key}}</button>
                        <button @click.stop="changeKey(true)">key++ -- {{key}}</button>
                    </div>
                    <div :key="key">
                        <Aparent ></Aparent>
                    </div>
              </div>
            </li>

            <li>
              <h2>
                  2、v-for 中 v-if ,指的是v-for v-if同时作用在同一元素上。
              </h2>
              <div class="testGroupContainer">
                    <ul>
                        <li v-for="(item, index) of arr"
                            :key="index"
                        >
                            <div v-if="item.label === 'label1'">
                                label1
                            </div>
                            <div v-if="item.label === 'label2'">
                                label2
                            </div>
                        </li>
                    </ul>
              </div>
            </li>
      </ul>
  </div>
</template>

<script>
import Aparent from '@/components/AParent';
export default {
    name: 'IfFor',
    components:{
        Aparent,
    },
    data () {
        return {
            key: 0,
            arr: [
                {
                    label: 'label1',

                },
                {
                    label: 'label2',
                    
                }
            ]
        }
    },
    methods:{
        changeKey(flag) {
            debugger
            if(flag) {
                this.$nextTick(() => {
                    this.key++;
                    });
            } else {

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
