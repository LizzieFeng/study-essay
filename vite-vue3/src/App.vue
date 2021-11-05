<template>
  <div class="container">
    <div class="nav-container">
      <router-link v-for=" (nav) of navArr"
        :to="nav.path"
        :key="nav.label">
        {{nav.label}}
      </router-link>
    </div>
    <div >
      <router-view></router-view>

<!--       
      <router-view v-slot="{ Component }">
        <transition  name="route" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view> -->
    </div>
  </div>
</template>
<script setup>

const navArr = [
  {
    label: '首页',
    path: '/'
  },
  {
    label: '关于',
    path: '/about'
  }
];
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
  .container{
    display: flex;
  }

  .nav-container{
    width: 300px;
    display: flex;
    flex-direction: column;
    text-align: left;
  }

</style>