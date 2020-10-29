<template>
  <div class="home">
    <div v-for="event in events" class="card" :key="event.id">
      <div class="profile-info">
        <img :src="event.actor.avatar_url" :alt="event.actor.display_login" />
        <p class="main-name">{{ event.actor.login }}</p>
        <p>@{{ event.actor.display_login }}</p>
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
  },
  methods: { getEvents },
  data() {
    return { events: [] };
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
p {
  margin-right: 1em;
  margin-left: 1em;
  font-family: "Helvetica Neue", Arial, sans-serif;
  word-break: break-all;
}
p.main-name {
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
</style>