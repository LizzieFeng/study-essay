<template>
    <div class="pagination-next"
        :class="{'gray': internalDisabled}"
        @click.stop="$emit('next-click', $event)">
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
    const emit = defineEmits(['next-click']);
    const internalDisabled = computed(
      () => props.currentPage === props.pageCount ||
        props.pageCount === 0
    )
</script>
<style scoped>
@import "../css/index.css";
</style>