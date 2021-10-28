<template>
  <div>
      <h1>
          进行vm.$attrs 学习
      </h1>
      <ul style="border: 2px solid red;">
        <li>
              <h2>
                  当前组件的父级
              </h2>
              <div class="testGroupContainer">
                 我是app的数据--{{appData}}
              </div>
        </li>
        <li>
              <h2>
                  当前组件本身
              </h2>
              <div class="testGroupContainer">
                 本身的数据--{{dataForSelf}}
              </div>
              <h2>
                  $attrs
              </h2>
              <div class="testGroupContainer">
                 本身的数据$attrs--{{$attrs}}
                 <div>
                     解释： 
                     <div>
                         :appData="dataForChild" :appData2="dataForChild2"
                         <br>
                         其中 appData，在本组件通过prop接收使用，
                         <br>
                         appData2,在本组件没有通过prop接收，出现在$attrs中
                     </div>
                 </div>
              </div>
        </li>
        <li>
              <h2>
                  使用子组件，名为：AChild
              </h2>
              <div class="testGroupContainer">
                 <AChild :dataFromParent="dataForChild"
                    :dataFromParent2="dataForChild"
                    :dataFromParent3="dataForChild"
                    :dataFromParent4="dataForChild"
                    v-bind="$attrs"></AChild>
              </div>
        </li>
      </ul>
        <h1>
          进行vm.$listeners 学习
      </h1>
      <ul style="border: 2px solid red;margin-top: 20px;">
        <li>
              <h2>
                  当前组件本身
              </h2>
              <h2>
                  $listeners
              </h2>
              <div class="testGroupContainer">
                 本身的数据$listeners--{{$listeners}},
                 <br>
                 看控制台，$listeners中有数据的。
              </div>
        </li>
        <li>
            <h2>
                使用子组件，名为：BChild
            </h2>
            <div>
                <BChild v-on="$listeners"></BChild>
            </div>
        </li>
      </ul>
  </div>
</template>

<script>
import AChild from '@/components/AChild.vue';
import BChild from '@/components/BChild.vue';
export default {
    name: 'AtrrsAndListeners',
    components:{
        AChild,
        BChild
    },
    data () {
        return {
            dataForSelf: '当前组件自己的数据，用来测试',
            dataForChild: '当前组件给子组件的数据，用来测试',
        }
    },
    props:{
        appData: String,
    },
    methods:{
        
    },
    created(){
      console.log('AtrrsAndListeners，组件的$listeners:', this.$listeners);
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
