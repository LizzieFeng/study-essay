<template>
    <div :id="id" class="PieCharts">

        饼图
    </div>
</template>
<script lang="ts" setup>
import {defineProps, onMounted, watchEffect, nextTick, watch} from 'vue';
import * as echarts from 'echarts';
const props = defineProps({
    opts: Object,
});
const id = (+ new Date()).toString();

watch(() => props.opts, (n, o) => {
           renderEcharts(n);
        }
    )

function renderEcharts (opts: any) {
    debugger
    if(opts && opts.series) {
        const chartDom: any = document.getElementById(id);
        const myChart = echarts.init(chartDom);
        myChart.setOption(opts);
    }
}

onMounted(() => {
    
    })
</script>

<style scoped>
.PieCharts{
    height: 100%;
}
</style>