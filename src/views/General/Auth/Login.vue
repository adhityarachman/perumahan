<template >
  <v-layout class="bg" justify-center align-center :style="`background:url('${bg}')`">
    <v-flex xs12 sm3>
      <v-card  :class="error?'animated tada':'animated fadeIn'">
        
          <v-card-title primary-title>
            <h1 >
              <span
                style="font-family:Courier New, Courier, monospace"
                v-for="(login, index) in logins"
                :key="index"
                data-aos="fade-left"
                :data-aos-delay="login.delay"
              >{{login.title.toUpperCase()}}</span>
            </h1>
            <v-spacer></v-spacer>
            <v-btn  @click="$router.push('/')" icon flat>
              <v-icon>home</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-container :data-aos="error?'':'fade-down'">
            <v-form @submit.prevent="login">
              <v-text-field v-model="dataUser.username" name="username" label="Username" id="id"></v-text-field>
              <v-text-field
                :append-icon="keliatan?'visibility':'visibility_off'"
                :type="keliatan?'text':'password'"
                @click:append="keliatan=!keliatan"
                v-model="dataUser.password"
                name="password"
                label="Password"
                id="apssword"
              ></v-text-field>
              <v-btn type="submit" :disabled="!deteksi" round block color="dark">Login</v-btn>
            </v-form>
          </v-container>
   
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      bg: require("@/assets/images/slider/slider3.jpg"),
      logins: [
        { title: "l", delay: 300 },
        { title: "o", delay: 700 },
        { title: "g", delay: 1100 },
        { title: "i", delay: 1500 },
        { title: "n", delay: 1900 }
      ],
      keliatan: false,
      dataUser: {
        username: "",
        password: ""
      }
    };
  },
  computed: {
    deteksi() {
      return this.dataUser.username !== "" && this.dataUser.password !== "";
    },
    user() {
      return this.$store.getters.user;
    },
    admin() {
      return this.$store.getters.admin;
    },
    error() {
      return this.$store.getters.error;
    }
  },
  methods: {
    login() {
      this.$store.dispatch("loginUser", this.dataUser);
    }
  }
};
</script>
<style scoped>
.bg {
  height: 100vh;
  width: 100%;
}
</style>
