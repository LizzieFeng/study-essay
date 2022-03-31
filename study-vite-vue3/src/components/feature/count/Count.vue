
<template>
<div @click="add">
    count: {{count}}
    <br>
    double: {{double}}
    <br>
    <button @click.stop="asyncAdd">asyncAdd</button>
</div>
</template>

<script setup>
import { computed } from 'vue'
import {useStore} from 'vuex'
// import {useStore} from '../../../store/gvuex'
let store =useStore()
let count = computed(()=>store.state.count)
function add(){
    store.commit('add')
}


let double = computed(()=>store.getters.double)


function asyncAdd(){
    store.dispatch('asyncAdd')
}
</script>





