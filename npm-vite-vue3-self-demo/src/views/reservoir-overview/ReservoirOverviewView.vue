<script setup lang="ts">
    const props = defineProps({
        styleConfig: Object,
    });
</script>
<template>
    <div :style="props.styleConfig">
        我是降雨情况vue
    </div>
</template>

<style scoped>
    div{
        background: yellow;
    }
</style>