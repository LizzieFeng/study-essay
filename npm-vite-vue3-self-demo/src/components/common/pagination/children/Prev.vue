<template>
    <div class="pagination-prev"
        :class="{'gray': internalDisabled}"
        @click.stop="$emit('prev-click', $event)">
    </div>
</template>
<script lang="ts" setup>
    import { computed  } from 'vue'
    const props = defineProps({
        currentPage: {
            type: Number,
            default: 1,
        }
    });
    const emit = defineEmits(['prev-click']);
    const internalDisabled = computed(
      () => props.currentPage <= 1
    )
</script>
<style scoped lang="less">
@import "../css/index.less";
</style>