<template>
  <div id="app" class="container">
    <SideBar msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import SideBar from "./components/Sidebar.vue";

export default {
  name: "App",
  components: {
    SideBar,
  },
};
</script>

<style>
.container {
  display: grid;
  grid-template-columns: 20% 60% 20%;
}
</style>
