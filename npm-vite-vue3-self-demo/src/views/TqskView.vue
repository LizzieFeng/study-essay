<script setup lang="ts">
    import Pagination from '@/components/common/pagination/Pagination.vue';
    const props = defineProps({
        styleConfig: Object,
    });
</script>
<template>
    <div :style="props.styleConfig" style="min-width: 146px;">
        我是天气实况vue
        <Pagination
            :pageSize="5"
            :total="20"
            :currentPage="2"
            ></Pagination>
    </div>
</template>

<style scoped>
    div{
        background: red;
    }
</style>