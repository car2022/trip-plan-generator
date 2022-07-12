import { createApp } from "vue";
import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from "vue-router";

import TripComponent from "./components/trip_component/index.vue";

import App from "./App.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "TripComponent",
    component: TripComponent,
  },
];

const router: Router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");

export default router;
