<template>
  <div class="pf-card">
    <div>
      <img :src="this.user.avatar_url" alt="profile picture" />
    </div>

    <p class="name">{{ this.user.name }}</p>
    <p>@{{ this.user.login }}</p>
    <div>{{ this.user.bio }}</div>
    <div class="f-info">
      <div>
        <span>{{ this.user.following }}</span> Following
      </div>
      <div>
        <span>{{ this.user.followers }}</span> Followers
      </div>
      <div>
        <span>{{ this.user.public_repos }}</span> Repos
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
}
img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.name {
  font-weight: bold;
  font-size: 2em;
  margin: 0;
}
.f-info {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 1em;
}
span {
  font-weight: bold;
  font-size: 1em;
}
</style>
