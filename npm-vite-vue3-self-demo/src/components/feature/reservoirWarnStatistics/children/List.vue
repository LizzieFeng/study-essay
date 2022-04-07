<template>
<div>
    <div>
        <span @click.stop="$emit('gotostatistics-click')">
             返回
        </span>
    </div>
    <div>
        <div v-for="(e,i) of list">
            {{i+1}} 
            <div v-for="(c,ci) of listConfig">
                {{c.label}}--{{e[c.props]}}
            </div>
        </div>
    </div>
</div>
</template>
<script lang="ts" setup>
import { ref, inject } from 'vue';
const listConfig = inject<any>('listConfig')
const getList = inject<any>('getList');
const list = ref([]);
list.value = getList();
const emit = defineEmits(['gotostatistics-click']);
</script>

<style scoped>

</style>