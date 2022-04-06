<script setup lang="ts">
import HeadVue from './Head.vue';
import MainVue from './Main.vue';
</script>

<template>
    <div class="theme theme-bg">
        <HeadVue class="header"></HeadVue>
        <router-view  class="main"/>
    </div>
</template>

<style scoped>

.theme-bg{
    height: 100%;
    width: 100%;
    background: url("@/assets/theme/blue/imgs/theme-bg.png");
    background-size: 100% 100%;
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