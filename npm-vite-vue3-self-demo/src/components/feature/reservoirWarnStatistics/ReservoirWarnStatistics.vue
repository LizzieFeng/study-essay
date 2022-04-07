<template>
    <Statistics v-show="curShow ==='statistics'" @gotolist-click="gotoList"></Statistics>
    <List v-show="curShow!=='statistics'" @gotostatistics-click="gotoStatistics"></List>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import Statistics from './children/Statistics.vue';
import List from './children/List.vue';

let curShow = ref('statistics');

const gotoList = () => {
    curShow.value = "list";
}

const gotoStatistics = () => {
    curShow.value = "statistics";
}
</script>