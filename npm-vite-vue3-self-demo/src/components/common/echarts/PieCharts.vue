<template>
    <div :id="id">

        饼图
    </div>
</template>
<script lang="ts" setup>
import {defineProps, onMounted, watchEffect, nextTick, watch} from 'vue';
import * as echarts from 'echarts';
const props = defineProps({
    data: Object,
});
const id = (+ new Date()).toString();
const option: any = {
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [{name:'1',value:2}],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

watch(() => props.data, (n, o) => {
           renderEcharts();
        }
    )

function renderEcharts () {
    const chartDom: any = document.getElementById(id);
    const myChart = echarts.init(chartDom);
    option.series[0].data = props.data;
    myChart.setOption(option);
}

onMounted(() => {
    
    })
</script>