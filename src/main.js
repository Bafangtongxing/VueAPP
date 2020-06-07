import Vue from "vue";
import app from "./APP.vue";
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css'
import "./lib/mui/css/mui.min.css"
Vue.component(Header.name, Header);


var vm = new Vue({
  el: "#app",
  render: (h) => h(app),
});
