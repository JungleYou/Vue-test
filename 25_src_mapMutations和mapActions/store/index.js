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
  wait(context, value) {
    setTimeout(() => {
      context.commit("JIA", value);
    }, 1000);
  },
};
const mutations = {
  JIA(state, value) {
    state.sum += value;
  },
  JIAN(state, value) {
    state.sum -= value;
  },
};
const state = {
  sum: 0,
  school: "苏州大",
  subject: "计算机",
};
// 用于处理state数据
const getters = {
  bigSum(state) {
    return state.sum * 10;
  },
};
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
});
