import router from "@routes/router";
import store from "@store";
import { createBootstrap } from "bootstrap-vue-next";
import { createApp } from "vue";
import App from "./App.vue";

import "@styles/main.scss";

const app = createApp(App);

app.use(createBootstrap()).use(router).use(store);

app.mount("#app");
