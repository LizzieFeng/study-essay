<script setup lang="ts">
    const props = defineProps({
        styleConfig: Object,
    });
</script>
<template>
    <div :style="props.styleConfig">
        我是预警信息vue
    </div>
</template>

<style scoped>
    div{
        background: pink;
    }
</style>