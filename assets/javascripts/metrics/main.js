import { createPinia } from "pinia";
// eslint-disable-next-line import/extensions
import { createApp } from "vue/dist/vue.esm-bundler.js";

import App from "./App";
import router from "./router";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#api-metrics");
