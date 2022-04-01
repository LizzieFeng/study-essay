<script setup lang="ts">
    const props = defineProps({
        config: Object,
    });
</script>
<template>
<div class="container">
    <template v-for="(item) of props.config" :key="item">
        <component :is="item.componentName" :styleConfig="item.style"/>
    </template>
</div>
</template>

<style scoped>
div{
    outline: 1px solid blue;
}
.container{
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
}
</style>