import { mutations } from "./mutaion";

const initState = {
  count: 0,
};

const state = () => initState;

export default { namespace: true, state, mutations };
