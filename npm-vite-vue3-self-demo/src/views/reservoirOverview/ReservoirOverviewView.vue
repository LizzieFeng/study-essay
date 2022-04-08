<template>
    <PanelEdssLeft  class="ReservoirOverviewView">
        <template v-slot:title>
            水库水情
        </template>
        <template v-slot:content>
            <ReservoirWarnStatistics></ReservoirWarnStatistics>
        </template>
    </PanelEdssLeft>
</template>

<script setup lang="ts">
    import { ref, provide, reactive } from 'vue';
    import { reservoirServer } from "@/api/edss/install";
    import PanelEdssLeft from '@/components/common/panel/PanelEdssLeft.vue';
    import ReservoirWarnStatistics from '@/components/feature/reservoirWarnStatistics/ReservoirWarnStatistics.vue';
    const listData = ref([]);
    const chatsData = ref({}); 

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

    const getList = async () => {
        const result: any = await reservoirServer.getWarnList();
        listData.value = result;
    };

    const getChart = async () => {
        const result: any = await reservoirServer.getWarnStatistics();
        chatsData.value = result;
    }
    provide('statisticsConfig', statisticsConfig);
    provide('chartConfig', chartConfig);
    provide('listConfig', listConfig);
    provide('getList', getList);
    provide('getChart', getChart);
    provide('listData', listData);
    provide('chatsData', chatsData);

</script>

<style scoped>

</style>