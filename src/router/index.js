import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./paths";
import firebase from "firebase/app";
import { store } from "../store";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes
});
router.beforeResolve((to, from, next) => {
  if (to.path) {
    store.commit("setLoading", true);
  }
  setInterval(() => {
    next();
  }, 1000);
});
router.afterEach((to, from) => {
  store.commit("setLoading", false);
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.hanyaAdmin)) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase
          .firestore()
          .collection("admin")
          .doc(user.uid)
          .get()
          .then(doc => {
            if (doc.exists) {
              next();
            } else {
              next("/login_admin");
            }
          });
      } else {
        next("/login_admin");
      }
    });
  } else if (to.matched.some(record => record.meta.hanyaUser)) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        next();
      } else {
        next("/login");
      }
    });
  } else if (to.matched.some(record => record.meta.hanyaGuest)) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        router.back();
      } else {
        next();
      }
    });
  } else {
    next();
  }
});
export default router;
