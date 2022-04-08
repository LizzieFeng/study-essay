<script setup lang="ts">
import BlueHeadPage from './BlueHeadPage.vue';
</script>

<template>
    <div class="BlueTheme ThemeFont">
        <BlueHeadPage class="LayoutHeader"></BlueHeadPage>
        <div class="LayoutMain">
            <router-view  />
        </div>
    </div>
</template>

<style scoped>
.BlueTheme{
    width:3840px;
    height: 1080px;
    background: url("@/assets/theme/blue/imgs/theme-bg.png");
    background-size: 100% 100%;
}

.LayoutHeader{
    height: 100px;
}

.LayoutMain{
    height: calc(100% - 100px);
}
</style>
<style>
@import "@/assets/theme/blue/blue.less";
</style>