import { mutations } from "./mutaion";



const initState = {
    isLogin: false
};

const state = () => initState;

export default { namespace: true, state, mutations };
