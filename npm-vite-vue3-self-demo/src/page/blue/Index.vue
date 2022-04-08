<script setup lang="ts">
import HeadVue from './Head.vue';
import MainVue from './Main.vue';
</script>

<template>
    <div class="theme theme-bg container">
        <HeadVue class="header"></HeadVue>
        <router-view  class="main"/>
    </div>
</template>

<style scoped>
.container{
    width:3840px;
    height: 1080px;
}
.theme-bg{
    background: url("@/assets/theme/blue/imgs/theme-bg.png");
    background-size: 100% 100%;
}

.video-main-bg{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 0;
}
.header{
    height: 100px;
}

.main{
    display: flex;
    width: 100%;
    height: calc(100% - 100px);
}
</style>