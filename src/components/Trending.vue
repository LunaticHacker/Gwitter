<template>
  <div class="trending">
    <input class="searchbar" type="text" placeholder="Search Gwitter" />
  </div>
</template>
<script>
export default {
  name: "Trending",
};
</script>

<style scoped>
.searchbar {
  width: 80%;
  height: 10px;
  color: rgb(102, 102, 102);
  background-color: rgb(204, 204, 204);
  border: none;
  border-radius: 13px 13px 13px 13px;
  padding: 1em;
  margin-right: 1em;
}
@media screen and (min-width: 0px) and (max-width: 500px) {
  .trending {
    display: none;
  }
}
</style>