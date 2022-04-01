<script setup lang="ts">
</script>
<template>
    <div>
        <router-view class="left" name="Left"/>
        <router-view class="mid" name="Mid"/>
        <router-view class="right" name="Right"/>
    </div>
</template>

<style scoped>

.left,.right{
    width: 25%;
    height: 100%;
}

.mid{
    width: 50%;
    height: 100%;
}
</style>