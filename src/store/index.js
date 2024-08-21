import { createLogger, createStore } from "vuex";
import resume from "./modules/resume";

export default createStore({
  modules: { Resume: resume },
  plugins: [createLogger()],
});
