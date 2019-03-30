import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import "./registerServiceWorker";
import firebase from "firebase";
import "@/firebase/firebaseInit";
import "@/components";
import bahasa from "./filter";
import VAnimateCss from "v-animate-css";
import AOS from "aos";

import iconBendera from "vue-flag-icon";
import "aos/dist/aos.css";
Vue.use(VAnimateCss);
Vue.use(iconBendera);
Vue.config.productionTip = false;

Vue.filter("bahasa", bahasa);
new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    AOS.init();
    firebase.auth().onAuthStateChanged(auth => {
      if (auth) {
        firebase
          .firestore()
          .collection("admin")
          .doc(auth.uid)
          .get()
          .then(doc => {
            if (doc.exists) {
              this.$store.dispatch("autoLoginAdmin", auth);
              this.$store.dispatch("autoLoginUser", auth);
            } else {
              //klo doc ga ada
              this.$store.dispatch("autoLoginUser", auth);
            }
          });
      }
    });
  }
}).$mount("#app");
