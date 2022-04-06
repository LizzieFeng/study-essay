<template>
    <div class="pagination-first"
        :class="{'gray': internalDisabled}"
        @click.stop="$emit('gotofirst-click', $event)">
    </div>
</template>
<script lang="ts" setup>
    import { computed  } from 'vue'
    const props = defineProps({
        currentPage: {
            type: Number,
            default: 1,
        },
    });
    const emit = defineEmits(['gotofirst-click'])
    const internalDisabled = computed(
      () => props.currentPage <= 1
    )
</script>
<style scoped>
@import "../css/index.css";
</style>