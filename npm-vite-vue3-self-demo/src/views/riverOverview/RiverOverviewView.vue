<template>
    <PanelEdssLeft class="rov-contaienr">
        <template v-slot:title>
            河道水情
        </template>
        <template v-slot:content>
             <ReservoirWarnStatistics></ReservoirWarnStatistics>
        </template>
    </PanelEdssLeft>
</template>

<script setup lang="ts">
    import { ref, provide, reactive } from 'vue';
    import { riverServer } from "@/api/edss/install";
    
    import PanelEdssLeft from '@/components/common/panel/PanelEdssLeft.vue';
    import ReservoirWarnStatistics from '@/components/feature/reservoirWarnStatistics/ReservoirWarnStatistics.vue';
    const props = defineProps({
        styleConfig: Object,
    });
    const listData = ref([]);
    const chatsData = ref({}); 
    const getList = async () => {
        const result: any = await riverServer.getWarnList();
        listData.value = result;
    };

    const getChart = async () => {
        const result: any = await riverServer.getWarnStatistics();
        chatsData.value = result;
    }

    const statisticsConfig = {
        label: '超警戒河流监测站',
        unit: '个',
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
    provide('statisticsConfig', statisticsConfig);
    provide('chartConfig', chartConfig);
    provide('listConfig', listConfig);
    provide('getList', getList);
    provide('getChart', getChart);
    provide('listData', listData);
    provide('chatsData', chatsData);

</script>

<style scoped>

.rov-contaienr{
    min-width: 400px;
}
</style>