<template>
    <span class="EdssPage-span-pager">
        {{props.currentPage}}
        /
        {{props.pageCount}}
    </span>
</template>
<script lang="ts" setup>
    const props = defineProps({
        currentPage: {
            type: Number,
            default: 1,
        },
        pageCount: {
            type: Number
        }
    });
</script>
<style scoped>
@import "../css/index.css";
</style>