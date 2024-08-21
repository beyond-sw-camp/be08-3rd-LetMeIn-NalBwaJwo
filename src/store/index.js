import { createLogger, createStore } from "vuex";
import resume from "./modules/resume";
import auth from "./modules/auth"

export default createStore({
  modules: { Resume: resume, Auth: auth },
  plugins: [createLogger()],
});
