<script setup lang="ts">
    const props = defineProps({
        config: Object,
    });
</script>
<template>
<div>
    我是左侧
    <div v-for="(item) of props.config" :key="item">
        <component :is="item" />
    </div>
</div>
</template>