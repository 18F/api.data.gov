import { createRouter, createWebHashHistory } from "vue-router";

import Metrics from "./views/Metrics";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "metrics",
      component: Metrics,
    },
  ],
});

export default router;
