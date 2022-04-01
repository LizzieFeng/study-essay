<script setup lang="ts">
import MapNavView from '@/views/MapNavView.vue';
import NavView from '@/views/NavView.vue';
import LayerNavView from '@/views/LayerNavView.vue';
const props = defineProps({
        config: Object,
    });
</script>
<template>
    <div class="main">
        <div>我是地名地址搜索</div>
        <div>
            <MapNavView v-if="props.config && props.config.mapNav" :config="props.config && props.config.mapNav.config"></MapNavView>
        </div>
        <div>
            <NavView v-if="props.config && props.config.leftNav" :config="props.config && props.config.leftNav.config" type="left"></NavView>
        </div>
        <div>
            <NavView v-if="props.config && props.config.rightNav" :config="props.config && props.config.rightNav.config" type="right"></NavView>
        </div>
        <div>
            <LayerNavView v-if="props.config && props.config.layerNav" :config="props.config && props.config.layerNav.config"></LayerNavView>
        </div>
    </div>
</template>

<style scoped>
</style>