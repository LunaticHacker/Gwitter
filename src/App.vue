<template>
  <div id="app" class="container">
    <SideBar />
    <Home />
    <Trending />
  </div>
</template>

<script>
import SideBar from "./components/Sidebar.vue";
import Trending from "./components/Trending.vue";
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    SideBar,
    Trending,
    Home,
  },
};
</script>

<style>
.container {
  display: grid;
  grid-template-columns: 20% 60% 20%;
}
</style>
