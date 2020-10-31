<template>
  <div class="trending">
    <form v-on:submit.prevent="searchUsers">
      <input
        v-model="query"
        class="searchbar"
        type="text"
        placeholder="Search Gwitter"
      />
    </form>
    <div v-for="user in results.items" :key="user.id">
      <router-link :to="{ name: 'Profile', query: { login: `${user.login}` } }">
        <div class="card">
          <img :src="user.avatar_url" :alt="user.login" />
          <div class="name">{{ user.login }}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import { search } from "../functions/api.js";
export default {
  name: "Trending",
  methods: {
    searchUsers: async function () {
      this.results = await search(this.query);
      this.query = "";
    },
  },
  data() {
    return { query: "", results: [] };
  },
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
.card {
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 0.5em;
}
.name {
  display: flex;
  font-size: 1em;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
}
img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  padding: 1em;
}

@media screen and (min-width: 0px) and (max-width: 500px) {
  .trending {
    display: none;
  }
}
</style>