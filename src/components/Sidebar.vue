<template>
  <div class="sidebar">
    <font-awesome-icon class="logo" :icon="['fab', 'twitter']" />
    <div class="item">
      <font-awesome-icon class="icon" :icon="['fas', 'home']" />
      <p>Home</p>
    </div>
    <div class="item">
      <font-awesome-icon class="icon" :icon="['fas', 'hashtag']" />
      <p>Explore</p>
    </div>
    <div class="item">
      <font-awesome-icon class="icon" :icon="['fas', 'bell']" />
      <p>Notifications</p>
    </div>
    <div class="item">
      <font-awesome-icon class="icon" :icon="['fas', 'envelope']" />
      <p>Messages</p>
    </div>
    <div class="item">
      <font-awesome-icon class="icon" :icon="['fas', 'bookmark']" />
      <p>Bookmarks</p>
    </div>
    <div class="item">
      <font-awesome-icon class="icon" :icon="['fas', 'list']" />
      <p>Lists</p>
    </div>
    <div class="item">
      <font-awesome-icon class="icon" :icon="['fas', 'user']" />
      <p>Profile</p>
    </div>
    <div class="item">
      <font-awesome-icon class="icon" :icon="['fas', 'ellipsis-h']" />
      <p>More</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
}
.logo {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: #1da1f2;
  margin: 1em;
}
.logo:hover {
  background: lightblue;
}
.icon {
  margin-top: 1em;
  width: 1.5em;
  height: 1.5em;
}
.item {
  display: flex;
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 1.5em;
  font-weight: bold;
  justify-content: left;
  width: max-content;
}
.item:hover {
  color: #1da1f2;
}
p {
  justify-content: space-around;
  margin-left: 1em;
}
@media screen and (min-width: 0px) and (max-width: 500px) {
  p {
    display: none;
  }
}
</style>
