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
import { ref, inject } from 'vue';
import PieCharts from '@/components/common/echarts/PieCharts.vue';
// import IStatisticsConfig from '../interface/StatisticsConfig';
// const statisticsConfig = inject<IStatisticsConfig>('statisticsConfig')
const statisticsConfig = inject<any>('statisticsConfig')
const getList = inject<any>('getList');
const total = ref(0);
total.value = getList().length;
const chatsData = ref([]);
const getChart = inject<any>('getChart');
chatsData.value = getChart();
const emit = defineEmits(['gotolist-click']);
</script>

<style scoped>
.charts-container{
    width: 100%;
    height: 200px;
}
</style>