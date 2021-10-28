<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <MyComponent></MyComponent>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import externalComponent from '../src/utils/external-component'
// const MyComponent = () => externalComponent('http://localhost:8200/MyComponent/MyComponent.f46cabbaa84bab435c2c.umd.min.js');
const MyComponent = () => import('../server/components/MyComponent/MyComponent.f46cabbaa84bab435c2c.umd.min');
export default {
  name: 'App',
  components: {
    // HelloWorld,
    MyComponent : MyComponent,
  }
}
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
