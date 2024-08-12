export const COUNTER_MUTATIONS_TYPES = {
  INCREASE: "counter/INCREASE",
  DECREASE: "counter/DECREASE",
};

export const mutations = {
  [COUNTER_MUTATIONS_TYPES.INCREASE](state) {
    state.count += 1;
  },
  [COUNTER_MUTATIONS_TYPES.DECREASE](state) {
    state.count -= 1;
  },
};
