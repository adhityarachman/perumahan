<template>
  <v-app :style="loading?'background:#ffffff;':''">
      
      <v-layout class="animated fadeIn" v-if="loading" v-show="loading" justify-center align-center>
         
       <img width="300" :src="require('@/assets/tools/loading.gif')" >
     
    
      </v-layout>
      <router-view style="padding: 80px 0px 0px;" class="animated fadeIn" v-else/>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data () {
    return {
      //  
    }
  },
  computed:{
    
    loading(){
      return this.$store.getters.loading
    }
  }
}
</script>
