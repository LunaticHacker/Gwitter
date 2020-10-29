import Vue from "vue";
import App from "./App.vue";
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

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
