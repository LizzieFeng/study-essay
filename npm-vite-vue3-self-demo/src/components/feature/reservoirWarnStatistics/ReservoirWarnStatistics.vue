<template>
    <Statistics v-show="curShow ==='statistics'"></Statistics>
    <List v-show="curShow!=='statistics'"></List>
</template>

<script lang="ts" setup>
import Statistics from './children/Statistics.vue';
import List from './children/List.vue';

let curShow = 'statistics';
</script>