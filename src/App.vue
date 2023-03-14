<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBarVue from "./components/NavBar.vue";
</script>

<template>
  <div class="wrapper">
    <NavBarVue></NavBarVue>
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
</style>
