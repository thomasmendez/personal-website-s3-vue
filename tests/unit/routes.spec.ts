import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import { routes } from "@/router";
// import routes from "../../src/router";
import App from "../../src/App.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: {
      template: "About Me",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

test("routing", async () => {
  router.push("/");
  await router.isReady();

  const wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  });
  expect(wrapper.html()).toContain("About Me");
});
