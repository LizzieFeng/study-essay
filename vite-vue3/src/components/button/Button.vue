
<template>
  <button
    class="el-button" 
    :class="[size ? `el-button--${size}` : '',]"
  >
    <slot />
  </button>
</template>
 
<script setup>

import {computed, withDefaults} from 'vue'

const props = withDefaults(defineProps(),{
  size:""
})
</script>