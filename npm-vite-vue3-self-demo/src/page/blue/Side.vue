<script setup lang="ts">
    const props = defineProps({
        config: Object,
    });
</script>
<template>
<div class="container">
    <template v-for="(item) of props.config" >
        <component :is="item.componentName" :styleConfig="item.style" class="item"/>
    </template>
</div>
</template>

<style scoped>
.container{
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-between;
}
</style>