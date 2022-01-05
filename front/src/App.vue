<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
* {
  font-family: Arial, sans-serif;
  list-style: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: black;
  outline: none;
}
</style>
