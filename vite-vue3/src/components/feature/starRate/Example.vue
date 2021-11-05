
<template>

<Rate v-model="score">课程评分</Rate>
<Rate v-model="score">
    <img width="14" src="/favicon.ico">
</Rate>
</template>

<script setup>
import {ref} from 'vue'
import Rate from './core/StarRate.vue'
let score = ref(3.5)
// function update(num){
//     score.value = num
// }
</script>