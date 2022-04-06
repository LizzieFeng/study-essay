<template>
    <div class="pagination-end"
        :class="{'gray': internalDisabled}"
        @click.stop="$emit('gotoend-click', $event)">
    </div>
</template>
<script lang="ts" setup>
    import { computed  } from 'vue'
    const props = defineProps({
        currentPage: {
            type: Number,
            default: 1,
        },
        pageCount: {
            type: Number
        }
    });
    const emit = defineEmits(['gotoend-click']);
    const internalDisabled = computed(
      () => props.currentPage === props.pageCount ||
        props.pageCount === 0
    )
</script>
<style scoped lang="less">
@import "../css/index.less";
</style>