import { createLogger, createStore } from "vuex";
import counter from "./modules/counter";

export default createStore({
  modules: { Counter: counter },
  plugins: [createLogger()],
});
