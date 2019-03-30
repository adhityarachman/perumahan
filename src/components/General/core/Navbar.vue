<template>
  <div>
    <v-system-bar style="z-index:2" fixed dark color="#2c7a90 !important">
      <v-spacer></v-spacer>
      <div mr-3>
        <v-icon mr-1 dark>mdi-email</v-icon>
        <span>subscribe</span>
      </div>
    </v-system-bar>
    <!-- <v-navigation-drawer
  
  absolute
   v-model="navDraw" >
  <v-container fluid>
   <div class="text-xs-center">
     <h4 class="body-2 font-weight-bold grey--text">Perumahan Prototype</h4>
   </div>
  </v-container>

    <v-divider></v-divider>

    <v-list dense class="pt-0">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click=""
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    </v-navigation-drawer>-->
    <v-toolbar
      style="z-index:1;margin-top:24px"
      height="58"
      color="primary"
      dark
      fixed
      clipped-left
      elevation-6
    >
      <v-toolbar-side-icon @click="navDraw=!navDraw" class="hidden-lg-and-up"></v-toolbar-side-icon>
      <router-link to="/" flat>
        <v-img :src="require('@/assets/logos.png')" width="38" height:38></v-img>
      </router-link>
      <v-toolbar-title class="hidden-xs-only">
        <span class="font-weight-light">{{web}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-menu
          left
          attach="props"
          :open-on-hover="!mobile"
          elevation-0
          light
          offset-y
          v-for="(nav, i) in navs"
          :key="i"
        >
          <v-btn
            :to="!nav.dropdowns?nav.path:''"
            style="min-width:48px;"
            class="font-weight-regular"
            active-class
            flat
            dark
            slot="activator"
          >
            <v-icon>{{nav.icon}}</v-icon>
            <span class="hidden-xs-only ml-2">{{nav.nama}}</span>
            <v-icon
              small
              v-if="!nav.dropdowns && $route.path===nav.path"
              class="hidden-xs-only ml-2"
            >radio_button_checked</v-icon>
            <v-icon v-if="nav.dropdowns" class="hidden-xs-only">arrow_drop_down</v-icon>
          </v-btn>

          <v-list dense light v-if="nav.dropdowns">
            <v-subheader>{{nav.subheading}}</v-subheader>
            <v-list-tile
              v-for="(d, i) in nav.dropdowns"
              :key="i"
              style="cursor:pointer"
              @click="$router.push(d.path)"
            >
              <v-list-tile-action>
                <v-icon>{{d.icon}}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  <span>{{d.nama}}</span>
                </v-list-tile-title>
              </v-list-tile-content>
              <v-icon small class="ml-2" v-if="d.path===$route.path">radio_button_checked</v-icon>
            </v-list-tile>
            <v-list-tile
              v-if="userLogin &&nav.nama===user.email.split('@')[0]"
              style="cursor:pointer"
              @click="logout"
            >
              <v-list-tile-action>
                <v-icon>logout</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  <span>Logout</span>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  created() {
    addEventListener("resize", () => {
      this.mobile = innerWidth <= 700;
    });
  },
  data() {
    return {
      mobile: window.innerWidth <= 700,
      navDraw: false,
      web: "Perumahan"
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    navs() {
      let navs = [
        { nama: "Home", icon: "mdi-home", path: "/" },
        { nama: "About Us", icon: "mdi-earth", path: "/about" },
        {
          nama: "Discover",
          icon: "mdi-store",
          subheading: "Info Perumahan",
          dropdowns: [
            { nama: "Residential", path: "/sd", icon: "mdi-format-paint" },
            { nama: "Commercial", path: "/sd" },
            { nama: "Facilities", path: "/sd" }
          ]
        }
      ];
      if (this.userLogin) {
        navs.push({
          nama: this.user.email.split("@")[0],
          icon: "mdi-account-child-circle",
          subheading: "Feature Akun",
          dropdowns: [
            { nama: "Profile", path: "/sd", icon: "mdi-briefcase-account" },
            { nama: "Massage", path: "/sd", icon: "mdi-message-outline" }
          ]
        });
      } else {
        navs.push({ nama: "Login", icon: "mdi-face", path: "/login" });
      }

      return navs;
    },

    userLogin() {
      return this.$store.getters.userLogin;
    }
  },
  methods: {
    path(path) {
      this.$route.push(path);
    },
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>


