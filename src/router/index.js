import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Pricing from "../views/Pricing.vue";
import Hire from "../views/Hire.vue";
import Donate from "../views/Donate.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: Pricing,
  },
  {
    path: "/hire",
    name: "Hire",
    component: Hire,
  },
  {
    path: "/donate",
    name: "Donate",
    component: Donate,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
