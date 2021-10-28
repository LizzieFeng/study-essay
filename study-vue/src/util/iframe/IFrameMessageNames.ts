/**
 * 所有iframe间通信的事件名称
 */
export const MessageNames: any = {
    // 大屏发出的事件
    bigScreen: {
        // 切换防汛森火天气情况显示隐藏
        TOGGLE_WEATHER: 'TOGGLE_WEATHER',
        // 切换防汛预警信息显示隐藏
        TOGGLE_EARLYWARNING: 'TOGGLE_EARLYWARNING',
        // 切换防汛水库水情显示隐藏
        TOGGLE_RESERVOIRWATER: 'TOGGLE_RESERVOIRWATER',
        // 切换防汛河道水情显示隐藏
        TOGGLE_RIVERWATER: 'TOGGLE_RIVERWATER',
        // 切换防汛台风显示隐藏
        TOGGLE_TYPHOONWARNING: 'TOGGLE_TYPHOONWARNING',
        // 切换防汛全市降雨情况
        TOGGLE_CITYRAINFALL: 'TOGGLE_CITYRAINFALL',
        // 切换防汛全市降雨趋势
        TOGGLE_CITYRAINFALLTREND: 'TOGGLE_CITYRAINFALLTREND',
        // 防汛各县市区降雨情况
        TOGGLE_DISTRICTRAINFALL: 'TOGGLE_DISTRICTRAINFALL',
        // 防汛门楼水库
        TOGGLE_GATERESERVOIR: 'TOGGLE_GATERESERVOIR',
        // 防汛王屋水库
        TOGGLE_WWRESERVOIR: 'TOGGLE_WWRESERVOIR',
        // 防汛沐浴水库
        TOGGLE_BATHESERVOIR: 'TOGGLE_BATHESERVOIR',
        // 关闭水库弹框事件
        CLOSE_POPTOGGLE: 'CLOSE_POPTOGGLE',
        // 切换森火预警以及火点信息
        TOGGLE_FIREWARNING: 'TOGGLE_FIREWARNING',
    },
    // 中间地图发出的事件
    eads: {
        SOMEEVENT: 'SOMEEVENT',
    },
};

