import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import user from "./modules/user";
import app from "./modules/app";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app,
    user,
  },
  getters,
});
