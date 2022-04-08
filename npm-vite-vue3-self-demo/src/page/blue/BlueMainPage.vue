<template>
    <div class="BlueMainPage">
        <router-view class="BlueLeftLayout" name="Left"/>
        <router-view class="BlueMidLayout" name="Mid"/>
        <router-view class="BlueRightLayout" name="Right"/>
    </div>
</template>

<style scoped>
.BlueMainPage{
    display: flex;
    height: 100%;
}
.BlueLeftLayout,.BlueRightLayout{
    width: 25%;
    height: 100%;
}

.BlueMidLayout{
    width: 50%;
    height: 100%;
}
</style>