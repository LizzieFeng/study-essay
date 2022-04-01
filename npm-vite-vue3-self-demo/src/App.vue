<script setup lang="ts">
import HeadVue from './page/Head.vue';
import MainVue from './page/Main.vue';
</script>

<template>
    <HeadVue class="header"></HeadVue>
    <router-view  class="main"/>
</template>

<style scoped>
.header{
    height: 100px;
}

.main{
    display: flex;
    width: 100%;
    height: calc(100% - 100px);
}
</style>