<template>
    <div class="PanelEdssLeft100 panel-100">
        <div class="title">
            <slot name="title"></slot>
        </div>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style scoped lang="less">
@import "@/assets/theme/blue/panel/panel.less";

.PanelEdssLeft100{
    .title{
        height: 36px;
        line-height: 36px;
        padding-left: 30px;
        height: 36px;
        font-style: italic;
        background-image: -webkit-linear-gradient(bottom,#fffdd9,#62daf9);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 700;
    }
    .content{
        height: calc(100% - 36px);
            box-sizing: border-box;
    padding: 6px 10px;
    }
}
</style>