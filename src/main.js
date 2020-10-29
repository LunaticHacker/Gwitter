import Vue from "vue";
import VueRouter from "vue-router";
import Main from "./Main.vue";
import App from "./App.vue";
import Profile from "./Profile.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHashtag,
  faBookmark,
  faBell,
  faHome,
  faEnvelope,
  faEllipsisH,
  faList,
  faUser,
  faComment,
  faRetweet,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

library.add(faTwitter);
library.add({
  faHashtag,
  faBookmark,
  faBell,
  faHome,
  faEnvelope,
  faEllipsisH,
  faList,
  faUser,
  faComment,
  faRetweet,
  faHeart,
  faShare,
});

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: "/", component: App },
  {
    path: "/profile",
    component: Profile,
    name: "Profile",
  },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for `routes: routes`
});

new Vue({
  render: (h) => h(Main),
  router,
}).$mount("#app");
