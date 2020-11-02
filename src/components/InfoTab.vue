<template>
  <div>
    <h3>{{ $route.query.login }}</h3>
    <div class="tab">
      <router-link
        :to="{
          name: 'Info',
          query: { login: `${$route.query.login}`, tab: 'followers' },
        }"
      >
        <div :class="{ active: $route.query.tab == 'followers' }">
          Followers
        </div>
      </router-link>
      <router-link
        :to="{
          name: 'Info',
          query: { login: `${$route.query.login}`, tab: 'following' },
        }"
      >
        <div :class="{ active: $route.query.tab == 'following' }">
          Following
        </div>
      </router-link>
      <router-link
        :to="{
          name: 'Info',
          query: { login: `${$route.query.login}`, tab: 'repos' },
        }"
      >
        <div :class="{ active: $route.query.tab == 'repos' }">Repos</div>
      </router-link>
    </div>
    <div v-for="result in results" :key="result.id">
      <router-link
        :to="{
          name: 'Profile',
          query: { login: `${result.login || result.owner.login}` },
        }"
      >
        <div :class="{ card: true, repo: result.owner }">
          <img
            :src="result.avatar_url || result.owner.avatar_url"
            :alt="result.login"
          />
          <div :class="{ name: result.login }">
            {{ result.login || result.name }}
          </div>
          <div class v-if="result.description">
            {{ result.description }}
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { getInfo } from "../functions/api.js";
export default {
  data() {
    return {
      results: [],
    };
  },
  async created() {
    this.results = await getInfo(
      this.$route.query.login,
      this.$route.query.tab
    );
  },
};
</script>

<style scoped>
.tab {
  display: flex;
  justify-content: space-around;
  cursor: pointer;
}
.card {
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 0.5em;
  padding: 0.5em;
  font-size: 1em;
  text-transform: capitalize;
}
.repo {
  flex-direction: column;
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
.active {
  color: #1da1f2;
}
</style>