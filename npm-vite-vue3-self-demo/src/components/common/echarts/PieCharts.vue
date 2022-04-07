<template>
    <div :id="id">

        饼图
    </div>
</template>
<script lang="ts" setup>
import {defineProps, onMounted} from 'vue';
import * as echarts from 'echarts';
const props = defineProps({
    data: Array,
});
const id = (+ new Date()).toString();

let option: any;

option = {
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: props.data,
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

onMounted(() => {
    const chartDom: any = document.getElementById(id);
const myChart = echarts.init(chartDom);
      option && myChart.setOption(option);
    })
</script>