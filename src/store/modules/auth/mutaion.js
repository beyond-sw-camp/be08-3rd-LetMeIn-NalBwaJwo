export const AUTH_MUTATION_TYPES = {
    LOGIN: "auth/LOGIN",
    LOGOUT: "auth/LOGOUT",
    CHECK_LOGIN: "auth/CHECK_LOGIN"
  };
  
  export const mutations = {
    [AUTH_MUTATION_TYPES.LOGIN](state) {
        state.isLogin = true;
    },
    [AUTH_MUTATION_TYPES.LOGOUT](state) {
        state.isLogin = false;
    },
    [AUTH_MUTATION_TYPES.CHECK_LOGIN](state) {
        state.isLogin = localStorage.getItem("ACCESS_TOKEN") != null; 
    }

  };
  