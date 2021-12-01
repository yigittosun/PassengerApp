<template>
  <div id="app">
    <div id="nav">
      <Header v-if="$route.path !== '/'" />
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/app.scss";
</style>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>
