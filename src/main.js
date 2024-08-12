import router from "@routes/router";
import store from "@store";
import { createBootstrap } from "bootstrap-vue-next";
import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "bootstrap/dist/css/bootstrap.css";

const app = createApp(App);

app.use(createBootstrap()).use(router).use(store);

app.mount("#app");
