<template>
  <div class="home">
    <div v-if="loading" class="loader"></div>
    <div v-for="event in events" class="card" :key="event.id">
      <div class="profile-info">
        <router-link
          :to="{ name: 'Profile', query: { login: `${event.actor.login}` } }"
          ><img :src="event.actor.avatar_url" :alt="event.actor.display_login"
        /></router-link>
        <p class="main-name">{{ event.actor.login }}</p>
        <p class="username">@{{ event.actor.display_login }}</p>
      </div>
      <div class="gweet">
        <p>{{ event.gweet }}</p>
      </div>
      <div class="reactions">
        <font-awesome-icon class="reaction" :icon="['fas', 'comment']" />
        <font-awesome-icon class="reaction" :icon="['fas', 'retweet']" />
        <font-awesome-icon class="reaction" :icon="['fas', 'heart']" />
        <font-awesome-icon class="reaction" :icon="['fas', 'share']" />
      </div>
    </div>
  </div>
</template>

<script>
import { getEvents } from "../functions/api.js";
export default {
  name: "Home",
  async created() {
    this.events = await this.getEvents();
    this.loading = false;
  },
  methods: { getEvents },
  data() {
    return { events: [], loading: true };
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}
.profile-info {
  display: flex;
  padding: 1em;
}
img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
}
img:hover {
  cursor: pointer;
}
.gweet {
  margin-right: 1em;
  margin-left: 1em;
  font-family: "Helvetica Neue", Arial, sans-serif;
  word-break: break-all;
}
.main-name {
  font-weight: bold;
  text-transform: capitalize;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 1em;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}
.reactions {
  display: flex;
  justify-content: space-around;
  margin: 1em;
}
.reaction {
  color: gray;
}
.loader {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #1da1f2;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
  align-self: center;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@media screen and (min-width: 0px) and (max-width: 500px) {
  .username {
    display: none;
  }
  img {
    width: 32px;
    height: 32px;
  }
}
</style>
