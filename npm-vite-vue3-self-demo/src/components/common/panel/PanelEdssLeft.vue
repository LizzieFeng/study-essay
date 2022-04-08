<template>
    <div class="PanelEdssLeft panel-50">
        <div class="title">
            <slot name="title"></slot>
        </div>
        <div>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style scoped>
.title{
    height: 36px;
    line-height: 36px;
    padding-left: 30px;
}
.content{
    height: calc(100% - 36px);
}
</style>