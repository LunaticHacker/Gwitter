<template>
  <div class="pf-card">
    <img
      :src="'http://ghchart.rshah.org/' + this.user.login"
      alt="contributions"
      class="calender"
    />
    <img :src="this.user.avatar_url" alt="profile picture" class="dp" />

    <p class="name">{{ this.user.name }}</p>
    <p>@{{ this.user.login }}</p>
    <p>{{ this.user.bio }}</p>
    <div class="f-info">
      <div>
        <router-link
          :to="{
            name: 'Info',
            query: { login: this.user.login, tab: 'following' },
          }"
          ><span>{{ this.user.following }}</span> Following</router-link
        >
      </div>
      <div>
        <router-link
          :to="{
            name: 'Info',
            query: { login: this.user.login, tab: 'followers' },
          }"
        >
          <span>{{ this.user.followers }}</span> Followers
        </router-link>
      </div>
      <div>
        <router-link
          :to="{
            name: 'Info',
            query: { login: this.user.login, tab: 'followers' },
          }"
        >
          <span>{{ this.user.public_repos }}</span> Repos
        </router-link>
      </div>
    </div>
    <div>
      <Home v-if="this.user.login" :login="this.user.login" />
    </div>
  </div>
</template>

<script>
import { getUser } from "../functions/api.js";
import Home from "./Home";
export default {
  props: {
    login: String,
  },
  data() {
    return { user: {} };
  },
  async created() {
    this.user = await getUser(this.$props.login);
  },
  components: {
    Home,
  },
};
</script>

<style scoped>
.pf-card {
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
}
.dp {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: relative;
  background: white;
  bottom: 60px;
}
.calender {
  width: 100%;
}

.name {
  font-weight: bold;
  font-size: 2em;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 0.5em;
  text-transform: capitalize;
}
p {
  margin-left: 1em;
}
.f-info {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 1em;
  cursor: pointer;
}
span {
  font-weight: bold;
  font-size: 1em;
}
@media screen and (min-width: 0px) and (max-width: 600px) {
  .dp {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: relative;
    bottom: 30px;
  }
}
</style>
