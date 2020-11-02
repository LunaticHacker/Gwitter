import Vue from "vue";
import VueRouter from "vue-router";
import Main from "./Main.vue";
import App from "./App.vue";
import Profile from "./Profile.vue";
import Info from "./Info.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./assets/Global.css";
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
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faGithub);
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
  { path: "/info", component: Info, name: "Info" },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for `routes: routes`
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

new Vue({
  render: (h) => h(Main),
  router,
}).$mount("#app");
