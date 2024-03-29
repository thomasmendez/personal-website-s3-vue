import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AboutView from "../views/AboutView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: AboutView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/work",
    name: "work",
    // route level code-splitting
    // this generates a separate chunk (work.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "work" */ "../views/WorkView.vue"),
  },
  {
    path: "/skillsTools",
    name: "skillsTools",
    // route level code-splitting
    // this generates a separate chunk (skillsTools.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "skillsTools" */ "../views/SkillsToolsView.vue"
      ),
  },
  {
    path: "/softwareEngineering",
    name: "softwareEngineering",
    // route level code-splitting
    // this generates a separate chunk (softwareEngineering.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "softwareEngineering" */ "../views/SoftwareEngineeringView.vue"
      ),
  },
  {
    path: "/vrar",
    name: "vrar",
    // route level code-splitting
    // this generates a separate chunk (vrar.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "vrar" */ "../views/VRARView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
