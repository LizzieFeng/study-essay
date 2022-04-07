<template>
<div>
    <div>
        <span @click.stop="$emit('gotolist-click')">
             {{statisticsConfig.label}} {{ total || 0}} {{statisticsConfig.unit}}
        </span>
    </div>
    <div>
        <PieCharts :data="chatsData" class="charts-container"></PieCharts>
    </div>
</div>
</template>
<script lang="ts" setup>
import { ref, inject, watchEffect, watch } from 'vue';
import PieCharts from '@/components/common/echarts/PieCharts.vue';
// import IStatisticsConfig from '../interface/StatisticsConfig';
// const statisticsConfig = inject<IStatisticsConfig>('statisticsConfig')
const statisticsConfig = inject<any>('statisticsConfig')
const getList = inject<any>('getList');
const chatsData = inject<any>('chatsData');
const listData = inject<any>('listData');
const total = ref(0);
const getChart = inject<any>('getChart');
getChart();
getList();
watch(listData, (n, o) => {
           total.value = n.length;
        }
    )
const emit = defineEmits(['gotolist-click']);
</script>

<style scoped>
.charts-container{
    width: 100%;
    height: 200px;
}
</style>