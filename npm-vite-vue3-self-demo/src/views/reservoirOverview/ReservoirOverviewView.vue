<template>
    <div :style="props.styleConfig" class="panel-50 rov-contaienr">
        <div>我是水库水情vue</div>
        <div>
            <ReservoirWarnStatistics></ReservoirWarnStatistics>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, provide, reactive } from 'vue';
    import { reservoirServer } from "@/api/edss/install";
    import ReservoirWarnStatistics from '@/components/feature/reservoirWarnStatistics/ReservoirWarnStatistics.vue';
    const props = defineProps({
        styleConfig: Object,
    });
    const listData = ref([]);
    const chatsData = ref({}); 
    const getList = async () => {
        const result: any = await reservoirServer.getWarnList();
        listData.value = result;
    };

    const getChart = async () => {
        const result: any = await reservoirServer.getWarnStatistics();
        chatsData.value = result;
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