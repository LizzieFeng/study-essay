<template>
    <button @click="loading">切换favicon</button>
</template>
<script setup>
import useFavicon from './core/useFavicon'
import iconpath from './img/usericon.jpg'
 let {favicon}  = useFavicon()
 function loading(){
   favicon.value = favicon.value === iconpath ? 'favicon.ico' : iconpath;
 }
</script>
