import * as firebase from "firebase";
export default {
  state: {
    user: null,
    userLogin: false
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setUserLogin(state, payload) {
      state.userLogin = payload;
    }
  },
  actions: {
    loginUser({ commit }, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.username, payload.password)
        .then(() => {
          firebase.auth().onAuthStateChanged(user => {
            const dataUser = {
              id: user.uid,
              email: user.email
            };
            commit("setuser", dataUser);
            commit("setUserLogin", true);
            commit("clearError");
          });
        })
        .catch(error => {
          commit("setError", error);
          console.log(error);
        });
    },
    autoLoginUser({ commit }, payload) {
      commit("setUser", {
        id: payload.uid,
        email: payload.email
      });
      commit("setUserLogin", true);
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    userLogin(state) {
      return state.userLogin;
    }
  }
};
