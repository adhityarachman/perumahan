<template>
  <div >
    
     <general-core-navbar/>

       <v-content>
          <Home v-if="$route.path==='/'"/>
      <router-view  :key="$route.path" v-else></router-view>
       </v-content>

  </div>
</template>

<script>
import Home from "@/views/General/Home";

export default {
  components: {
    Home
  }
};
</script>
