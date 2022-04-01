<script setup lang="ts">
    const props = defineProps({
        styleConfig: Object,
    });
</script>
<template>
    <div :style="props.styleConfig">
        我是天气实况vue
    </div>
</template>

<style scoped>
    div{
        background: red;
    }
</style>