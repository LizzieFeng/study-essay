<template>
    <div class="pagination">
        <First 
            :currentPage="internalCurrentPage"
            @gotofirst-click="gotoFirst"></First>
        <Prev
            :currentPage="internalCurrentPage"
            @prev-click="prev"></Prev>
        <Pager
            :currentPage="internalCurrentPage"
            :pageCount="internalPageCount"></Pager>
        <Next
            :currentPage="internalCurrentPage"
            :pageCount="internalPageCount"
            @next-click="next"></Next>
        <End
            :currentPage="internalCurrentPage"
            :pageCount="internalPageCount"
            @gotoend-click="gotoEnd"></End>
    </div>
</template>

<script lang="ts" setup>
    import { ref, computed, watch, nextTick  } from 'vue'
    import First from './children/First.vue';
    import End from './children/End.vue';
    import Prev from './children/Prev.vue';
    import Next from './children/Next.vue';
    import Pager from './children/Pager.vue';

    const props = defineProps({
        pageSize: {
            type: Number,
            default: 10,
        },
        total: {
            type: Number,
            default: 0,
        },
        currentPage: {
            type: Number,
            default: 1,
        }
    });

    const emit = defineEmits(['update:currentPage', 'current-change', 'gotoend-click', 'gotofirst-click', 'next-click', 'prev-click'])

    const internalCurrentPage = ref(1);
    const lastEmittedPage = ref(-1);
    const internalPageSize = ref(props.pageSize);
    let userChangePageSize = true;
    const internalPageCount = computed(() => {
        if( props.total) {
            return Math.max(1, Math.ceil(props.total / internalPageSize.value));
        }
        return 1;
    })

    watch(() => props.currentPage, (n, o) => {
            internalCurrentPage.value = getValidCurrentPage(n);
        },
        {
            immediate: true
        }
    )

    watch(() => props.pageSize, (n, o) => {
        internalPageSize.value = isNaN(n) ? 10 : n;
    })

    function  getValidCurrentPage(value: number) {
        let resetValue;
        if (value < 1) {
            resetValue = 1;
        } else if ( value > internalPageCount.value) {
            resetValue = internalPageCount.value;
        }
        return resetValue || value;
    }
    
    function prev() {
        const newVal = internalCurrentPage.value - 1;
        internalCurrentPage.value = getValidCurrentPage(newVal);
        emit('current-change', internalCurrentPage.value);
    }

    function next() {
        const newVal = internalCurrentPage.value + 1;
        internalCurrentPage.value = getValidCurrentPage(newVal);
        emit('current-change', internalCurrentPage.value);
    }

    function gotoFirst() {
        const newVal = 1;
        internalCurrentPage.value = getValidCurrentPage(newVal);
        emit('current-change', internalCurrentPage.value);
    }

    function gotoEnd() {
        const newVal = internalPageCount.value;
        internalCurrentPage.value = getValidCurrentPage(newVal);
        emit('current-change', internalCurrentPage.value);
    }
</script>
<style scoped lang="less">
@import "./css/index.less";
</style>