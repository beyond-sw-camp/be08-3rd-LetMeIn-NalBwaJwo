export const RESUME_MUTATION_TYPES = {
  HIDE_FORM: "resume/HIDE_FORM",
  TOGGLE_FORM: "resume/TOGGLE_FORM",
};

export const mutations = {
  [RESUME_MUTATION_TYPES.HIDE_FORM](state, formId) {
    const detail = state.detail.find((detail) => detail.id === formId);
    detail.formVisible = false;
  },
  [RESUME_MUTATION_TYPES.TOGGLE_FORM](state, payload) {
    const detail = state.details.find((detail) => detail.id === payload.formId);
    detail.formVisible = !detail.formVisible;
  },
};
