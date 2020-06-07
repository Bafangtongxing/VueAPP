import Vue from "vue";
import app from "./APP.vue";
import { Header } from 'mint-ui';
import router from "./router.js"
import 'mint-ui/lib/style.css'
import "./lib/mui/css/mui.min.css"
import "./lib/mui/css/icons-extra.css"
Vue.component(Header.name, Header);

import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

var vm = new Vue({
  el: "#app",
  router,
  render: (h) => h(app),
});
