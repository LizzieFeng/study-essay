<template>
  <div>
      <h1>
          进行Filter学习与Filter封装
      </h1>
      <ul>
          <li v-for=" (item, index) of originObj"
              :key="index">
                {{item | fomatValue()}}
          </li>
      </ul>
  </div>
</template>

<script>
import VueTemplateFilter from '@/filter/VueTemplateFilter.js';
export default {
    name: 'FilterComp',
    components:{
    },
    filters: {
        fomatValue: function (value) {
            debugger
            return VueTemplateFilter.filter(value);
        }
    },
    data () {
        return {
            originObj: {
                a1: null,
                a2: undefined,
                a3: 0,
                a4: '',
                a5: 'NULL',
                a6: NaN,
                a7: 'UNDEFINED',
                a8: 116.257896451263,
                a9: 116.2,
                a10: '555555555555555'
            },
            originConfig: {
                a10:{
                    unit: '万人',
                    point: 100,

                }
            }
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
</style>
