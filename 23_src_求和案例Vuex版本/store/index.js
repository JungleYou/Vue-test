// @ts-nocheck
import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
const actions = {
  jia(context, value) {
    // console.log(context, value);
    context.commit("JIA", value);
  },
  jian(context, value) {
    context.commit("JIAN", value);
  },
  odd(context, value) {
    if (context.state.sum % 2) {
      context.commit("JIA", value);
    }
  },
};
const mutations = {
  JIA(state, value) {
    state.sum += value;
  },
  JIAN(state, value) {
    state.sum -= value;
  },
  WAIT(state, value) {
    state.sum += value;
  },
};
const state = { sum: 0 };

export default new Vuex.Store({
  actions,
  mutations,
  state,
});
