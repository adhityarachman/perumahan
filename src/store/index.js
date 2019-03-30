import Vue from "vue";
import Vuex from "vuex";
import ADMIN from "./admin";
import USER from "./user";
import SHARED from "./shared";
import Data from "./data";
Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        admin: ADMIN,
        user: USER,
        shared: SHARED,
        data:Data
    }
});
