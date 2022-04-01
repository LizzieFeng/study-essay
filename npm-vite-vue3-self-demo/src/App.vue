<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <router-view class="header" name="Head"/>
  <div class="main">
    <router-view class="left" name="Left"/>
    <router-view class="mid" name="Mid"/>
    <router-view class="right" name="Right"/>
  </div>
</template>

<style scoped>
div{
    outline: 1px solid red;
}
.header{
    height: 100px;
}
.main{
    display: flex;
    width: 100%;
    height: calc(100% - 100px);
}

.left,.right{
    width: 25%;
    height: 100%;
}

.mid{
    width: 50%;
    height: 100%;
}
</style>