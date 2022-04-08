<template>
    <PanelEdssLeft class="TqskView">
        
        <template v-slot:title>
            天气实况
        </template>
        <template v-slot:content>
            <div class="component-container">
                <Pagination
                    :pageSize="5"
                    :total="20"
                    :currentPage="2"
                ></Pagination>
            </div>
        </template>
    </PanelEdssLeft>
</template>

<script  lang="ts" setup>
    import Pagination from '@/components/common/pagination/Pagination.vue';
    import PanelEdssLeft from '@/components/common/panel/PanelEdssLeft.vue';
</script>

<style lang="less" scoped>

.TqskView{
    .component-container{
        display: flex;
        align-items: flex-end;
        height: 100%;
        justify-content: center;
        padding-bottom: 16px;
        box-sizing: border-box;
    }
}

</style>