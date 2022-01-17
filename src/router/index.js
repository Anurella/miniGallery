import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

const originalPush = VueRouter.prototype.push;
// Rewrite the push method on the prototype and handle the error message uniformly
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const routes = [
  {
    path: "/",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes
});

Vue.use(VueRouter);

export default router;
