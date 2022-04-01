<script setup lang="ts">
    const props = defineProps({
        config: Object,
    });
</script>
<template>
    <div class="container">
        地图工具条：<div v-for="(item) of props.config" class="col">{{item}}组件</div>
    </div>
</template>

<style scoped>
.container{
    display: flex;
    justify-content: space-between;
}

.col{
    background: yellowgreen;
}
</style>