
<template>
mouseX: {{x}}
mouseY: {{y}}
</template>
<script setup>
import {useMouse} from './core/mouse'
let {x,y} = useMouse()
</script>