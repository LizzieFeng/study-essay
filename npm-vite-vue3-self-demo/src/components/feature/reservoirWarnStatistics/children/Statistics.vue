<template>
<div class="ReservoirWarnStatistics-Statistics">
    <div class="title-container" @click.stop="$emit('gotolist-click')">
        {{statisticsConfig.label}}
        <span class="num-infor">
                {{ total || 0}} 
        </span>
        {{statisticsConfig.unit}}
    </div>
    <div class="echarts-container">
        <PieCharts :opts="chartsOpts"></PieCharts>
    </div>
</div>
</template>
<script lang="ts" setup>
import { ref, inject, watchEffect, watch } from 'vue';
import * as echarts from 'echarts';
import PieCharts from '@/components/common/echarts/PieCharts.vue';
const statisticsConfig = inject<any>('statisticsConfig')
const getList = inject<any>('getList');
const chatsData = inject<any>('chatsData');
const listData = inject<any>('listData');
const total = ref(0);
const getChart = inject<any>('getChart');
const chartsOpts = ref({});
getChart();
getList();
watch(listData, (n, o) => {
           total.value = n.length;
        }
    )
watch(chatsData, (n, o) => {
            const legendData = ['涨', '平', '落', '未知'];
            const legendConfig = {
                    show: true,
                    textStyle: {
                    color: '#fff',
                    fontSize: 20,
                    },
                    itemWidth: 15,
                    itemHeight: 15,
                    fontSize: 20,
                    itemGap: 20,
                    orient: 'vertical',
                    x: 'right',
                    y: 'top',
                    top: '10%',
                    left: '80%',
                    data: legendData,
            };
            const opts = {
            legend: legendConfig,
            calculable: true,
            tooltip: {
                    trigger: 'item',
                    borderColor: '#1f6485', // 边框颜色
                    backgroundColor: 'rgba(25,51,85,.8)',
                    borderWidth: 1,
                    formatter: (params: any) => {
                    const reVal = `<span style='color: #9dbdfb;font-size: 16px;'>${params.name}：<span style='font-size: 16px;color:#fff;'>${params.value}(${params.percent}%)</span>`;
                    return `<div style='padding:4px 10px;'>${reVal}<div>`;
                    },
                },
            series: [
                    {
                    stack: 'a',
                    type: 'pie',
                    center: ['40%', '40%'],
                    radius: ['18%', '58%'],
                    roseType: 'radius',
                    zlevel: 10,
                    label: {
                        normal: {
                        show: true,
                        formatter: '{d}%',
                        fontSize: 22,
                        fontWeight: 550,
                        padding: -16,
                        },
                    },
                    labelLine: {
                        show: false,
                    },
                    data: [
                        {
                        value: n.increase,
                        name: '涨',
                        label: {
                            color: '#fb3535',
                            show: !!n.increase,
                        },
                        itemStyle: {
                            normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                offset: 0,
                                color: '#882f2f', // 0% 处的颜色
                                },
                                {
                                offset: 0.5,
                                color: '#ff5e5e', // 50% 处的颜色
                                },
                                {
                                offset: 1,
                                color: '#882f2f', // 100% 处的颜色
                                },
                            ]),
                            },
                        },
                        },
                        {
                        value: n.stable,
                        name: '平',
                        itemStyle: {
                            normal: {
                            // 颜色渐变
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                offset: 0,
                                color: '#1d84a3', // 0% 处的颜色
                                },
                                {
                                offset: 0.5,
                                color: '#30cefd', // 50% 处的颜色
                                },
                                {
                                offset: 1,
                                color: '#1d84a3', // 100% 处的颜色
                                },
                            ]),
                            },
                        },
                        label: {
                            color: '#30cefd',
                            show: n.stable,
                        },
                        },
                        {
                        value: n.decrease,
                        name: '落',
                        label: {
                            color: '#00ff47',
                            show: !!n.decrease,
                        },
                        itemStyle: {
                            normal: {
                            // 颜色渐变
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                offset: 0,
                                color: '#2f934a', // 0% 处的颜色
                                },
                                {
                                offset: 0.5,
                                color: '#00ff47', // 50% 处的颜色
                                },
                                {
                                offset: 1,
                                color: '#2f934b', // 100% 处的颜色
                                },
                            ]),
                            },
                        },
                        },
                        {
                        value: n.unknown,
                        name: '未知',
                        label: {
                            color: '#e8e8e8',
                            show: n.unknown,
                        },
                        itemStyle: {
                            normal: {
                            // 颜色渐变
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                offset: 0,
                                color: '#a5a5a5', // 0% 处的颜色
                                },
                                {
                                offset: 0.5,
                                color: '#9c9c9c', // 50% 处的颜色
                                },
                                {
                                offset: 1,
                                color: '#a5a5a5', // 100% 处的颜色
                                },
                            ]),
                            },
                        },
                        },
                    ],
                    },
                ],
            }
           chartsOpts.value = opts;
        }
    )
const emit = defineEmits(['gotolist-click']);
</script>

<style scoped lang="less">
.ReservoirWarnStatistics-Statistics{
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title-container{
        width: fit-content;
        height: 40px;
        background: url("../imgs/title.png") no-repeat center;
        background-size: 100% 100%;
        padding: 8px 16px;
        box-sizing: border-box;
        cursor: pointer;

        .num-infor{
            color: #d5ca22;
        }
    }
    .echarts-container{
        height: calc(100% - 40px);
        width: 100%;
    }
}

</style>