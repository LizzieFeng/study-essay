<script setup lang="ts">

    const props = defineProps({
        config: Object,
        type: String,
    });
</script>
<template>
    <div class="container">
        {{props.type}}：<div v-for="(item) of props.config" class="col">{{item}}组件</div>
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