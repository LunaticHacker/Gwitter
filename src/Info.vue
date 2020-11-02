<template>
  <div class="container">
    <SideBar />
    <InfoTab />
    <Trending />
  </div>
</template>

<script>
import SideBar from "./components/Sidebar.vue";
import Trending from "./components/Trending.vue";
import InfoTab from "./components/InfoTab.vue";
export default {
  components: {
    SideBar,
    Trending,
    InfoTab,
  },
};
</script>

<style></style>