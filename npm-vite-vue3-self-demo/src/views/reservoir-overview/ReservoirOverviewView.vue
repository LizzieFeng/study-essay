<template>
    <div :style="props.styleConfig" class="panel-50 rov-contaienr">
        <div>我是水库水情vue</div>
        <div>
            <ReservoirWarnStatistics></ReservoirWarnStatistics>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, provide } from 'vue';
    import ReservoirWarnStatistics from '@/components/feature/reservoirWarnStatistics/ReservoirWarnStatistics.vue';
    const props = defineProps({
        styleConfig: Object,
    });
    const getList = () => {
        return [
            {
                id: 1,
                name: '水库1',
                level: 63.11,
                trend: '涨',
            },
            {
                id: 2,
                name: '水库3',
                level: 63.12,
                trend: '涨',
            },
        ]
    };

    const getChart = () => {
        return [
            {
                trendCode: '涨',
                value: 2
            }
        ]
    }

    const statisticsConfig = {
        label: '告警水库',
        unit: '座',
    };

    const chartConfig = {};

    const listConfig = [
        {
            props: 'name',
        },
        {
            label: '水位',
            props: 'level'
        },
        {
            label: '水势',
            props: 'trend'
        }
    ];
    const listData = ref([]);

    provide('statisticsConfig', statisticsConfig);
    provide('chartConfig', chartConfig);
    provide('listConfig', listConfig);
    provide('getList', getList);
    provide('getChart', getChart);
</script>

<style scoped>

.rov-contaienr{
    min-width: 400px;
}
</style>