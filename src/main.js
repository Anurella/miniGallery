import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import "@/assets/css/reset.css";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});
