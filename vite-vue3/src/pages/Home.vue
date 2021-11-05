<template>
    <div class="nav-container">
      <div v-for=" (n) of nav "
          :key="n.label"
          @click.stop="changeNav(n)"
          class="nav-item"
          >
          {{n.label}}
      </div>
    </div>
    <div>
      <component :is='activeNav.cname'></component>
    </div>
</template>
<script setup> 
import {ref} from 'vue'
import TodoList from '../components/feature/todolist/Todolist.vue'
import UseFavicon from '../components/feature/useFavicon/UseFavicon.vue';
import ToggleFullScreen from '../components/feature/toggleFullScreen/ToggleFullScreen.vue';
import MouseMove from '../components/feature/mouseMove/MouseMove.vue';
import RateExample from '../components/feature/starRate/Example.vue';
import AnimationExample from '../components//feature/animation/Example.vue';
import AnimationExample2 from '../components//feature/animation/Example2.vue';
const nav = [
  {
    label: 'TodoList',
    cname: TodoList,
  },
  {
    label: 'UseFavicon',
    cname: UseFavicon,
  },
  {
    label: 'ToggleFullScreen',
    cname: ToggleFullScreen,
  },
  {
    label: 'MouseMove',
    cname: MouseMove,
  },
  {
    label: 'RateExample',
    cname: RateExample,
  },
  {
    label: '动画css',
    cname: AnimationExample,
  },
  {
    label: '动画vue',
    cname: AnimationExample2,
  }
]
let activeNav = ref({});
function changeNav(n) {
  debugger
  activeNav.value = n;
}
</script>
<style scoped>
.nav-container{
  display: flex;
}

.nav-item{
  margin-right: 20px;
  margin-left: 20px;
}
</style>
