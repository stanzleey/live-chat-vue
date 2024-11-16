<template>
  <div id="app">
    <!-- Sidebar hanya muncul jika rutenya bukan halaman login -->
    <Sidebar v-if="$route.path !== '/'" />
    <router-view />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
};
</script>

<style>
#app {
  display: flex;
  height: 100vh;
}
</style>
