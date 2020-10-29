<template>
  <div class="container">
    <SideBar />
    <ProfileCard :login="$route.query.login" />
    <Trending />
  </div>
</template>

<script>
import SideBar from "./components/Sidebar.vue";
import Trending from "./components/Trending.vue";
import ProfileCard from "./components/ProfileCard.vue";
export default {
  components: {
    SideBar,
    ProfileCard,
    Trending,
  },
};
</script>

<style></style>
