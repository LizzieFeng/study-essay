<script setup lang="ts">
    import Pagination from '@/components/common/pagination/Pagination.vue';
    import PanelEdssLeft from '@/components/common/panel/PanelEdssLeft.vue';
</script>
<template>
    <PanelEdssLeft  >
        
        <template v-slot:title>
            天气实况
        </template>
        <template v-slot:content>
            <Pagination
                :pageSize="5"
                :total="20"
                :currentPage="2"
            ></Pagination>
        </template>
    </PanelEdssLeft>
</template>