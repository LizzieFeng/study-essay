<script setup lang="ts">
    const props = defineProps({
        config: Object,
    });
</script>
<template>
<div class="BlueSidePage">
    <template v-for="(item) of props.config" >
        <component :is="item.componentName"/>
    </template>
</div>
</template>

<style scoped>
.BlueSidePage{
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-between;
}
</style>